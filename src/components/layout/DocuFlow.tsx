'use client'

import React, { useState, useEffect } from 'react';
import { uploadTemplate, checkHealth } from '@/lib/api';

export function DocuFlow() {
  // State management
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [placeholders, setPlaceholders] = useState<Record<string, string>>({
    name: '',
    date: '',
    address: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string }>({ type: '', text: '' });
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [serverStatus, setServerStatus] = useState('checking');

  // Check server health on component mount
  useEffect(() => {
    checkServerHealth();
  }, []);

  const checkServerHealth = async () => {
    try {
      await checkHealth();
      setServerStatus('connected');
    } catch (error) {
      setServerStatus('disconnected');
      setMessage({ type: 'error', text: 'Backend server is not running. Please start the backend server.' });
    }
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.name.toLowerCase().endsWith('.docx')) {
        setMessage({ type: 'error', text: 'Please select a .docx file only.' });
        return;
      }
      
      setSelectedFile(file);
      setMessage({ type: 'success', text: `File selected: ${file.name}` });
      setDownloadUrl(null); // Clear previous download
    }
  };

  // Handle placeholder input changes
  const handlePlaceholderChange = (key: string, value: string) => {
    setPlaceholders(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Add new placeholder field
  const addPlaceholder = () => {
    const newKey = `field${Object.keys(placeholders).length + 1}`;
    setPlaceholders(prev => ({
      ...prev,
      [newKey]: ''
    }));
  };

  // Remove placeholder field
  const removePlaceholder = (key: string) => {
    if (Object.keys(placeholders).length > 3) { // Keep at least 3 fields
      setPlaceholders(prev => {
        const newPlaceholders = { ...prev };
        delete newPlaceholders[key];
        return newPlaceholders;
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Validation
    if (!selectedFile) {
      setMessage({ type: 'error', text: 'Please select a template file.' });
      return;
    }

    const emptyFields = Object.keys(placeholders).filter(key => !placeholders[key].trim());
    if (emptyFields.length > 0) {
      setMessage({ type: 'error', text: 'Please fill in all placeholder fields.' });
      return;
    }

    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await uploadTemplate(selectedFile, placeholders);
      
      // Create download URL from blob
      const blob = new Blob([response.data], { 
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
      });
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
      
      setMessage({ 
        type: 'success', 
        text: 'Document generated successfully! Click the download button below.' 
      });
      
    } catch (error: any) {
      console.error('Error generating document:', error);
      let errorMessage = 'An error occurred while generating the document.';
      
      if (error.response?.data) {
        try {
          const errorData = JSON.parse(await error.response.data.text());
          errorMessage = errorData.error || errorMessage;
        } catch {
          errorMessage = error.response.statusText || errorMessage;
        }
      }
      
      setMessage({ type: 'error', text: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle download
  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `generated-document-${Date.now()}.docx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Clear form
  const clearForm = () => {
    setSelectedFile(null);
    setPlaceholders({ name: '', date: '', address: '' });
    setMessage({ type: '', text: '' });
    setDownloadUrl(null);
    // Reset file input
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[#333333] sm:text-5xl mb-4">
            📄 DocumentFlow
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Upload a Word template and fill in the placeholders to generate your document
          </p>
          
          {/* Server Status Indicator */}
          <div className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${
            serverStatus === 'checking' ? 'bg-yellow-100 text-yellow-800' :
            serverStatus === 'connected' ? 'bg-green-100 text-green-800' :
            'bg-red-100 text-red-800'
          }`}>
            {serverStatus === 'checking' && '🔄 Checking server...'}
            {serverStatus === 'connected' && '✅ Backend connected'}
            {serverStatus === 'disconnected' && '❌ Backend disconnected'}
          </div>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* File Upload Section */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
            <h2 className="text-2xl font-semibold text-[#333333] mb-6 flex items-center">
              📁 Upload Template
            </h2>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="file-input" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">DOCX files only</p>
                </div>
                <input
                  id="file-input"
                  type="file"
                  accept=".docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
            {selectedFile && (
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 font-medium">Selected: {selectedFile.name}</p>
              </div>
            )}
          </div>

          {/* Placeholders Section */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
            <h2 className="text-2xl font-semibold text-[#333333] mb-6 flex items-center">
              ✏️ Fill Placeholders
            </h2>
            <div className="space-y-4">
              {Object.entries(placeholders).map(([key, value]) => (
                <div key={key} className="flex gap-3">
                  <input
                    type="text"
                    placeholder={`Enter ${key}...`}
                    value={value}
                    onChange={(e) => handlePlaceholderChange(key, e.target.value)}
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-[#3B82F6] focus:ring-[#3B82F6] px-4 py-3"
                  />
                  {Object.keys(placeholders).length > 3 && (
                    <button
                      type="button"
                      onClick={() => removePlaceholder(key)}
                      className="px-3 py-3 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove field"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addPlaceholder}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-[#3B82F6] bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 transition-colors"
            >
              ➕ Add Another Field
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              type="submit"
              disabled={isLoading || serverStatus !== 'connected'}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#3B82F6] hover:bg-[#3B82F6]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? '🔄 Processing...' : '🚀 Generate Document'}
            </button>
            
            <button
              type="button"
              onClick={clearForm}
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              🗑️ Clear Form
            </button>
          </div>
        </form>

        {/* Messages */}
        {message.text && (
          <div className={`mt-8 p-4 rounded-lg ${
            message.type === 'success' ? 'bg-green-50 text-green-800' :
            message.type === 'error' ? 'bg-red-50 text-red-800' :
            'bg-blue-50 text-blue-800'
          }`}>
            {message.text}
          </div>
        )}

        {/* Download Section */}
        {downloadUrl && (
          <div className="mt-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8 text-center">
            <h2 className="text-2xl font-semibold text-[#333333] mb-6 flex items-center justify-center">
              📥 Download Generated Document
            </h2>
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              💾 Download Document
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 