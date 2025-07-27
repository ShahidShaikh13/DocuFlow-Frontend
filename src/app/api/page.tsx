import { MainLayout } from '@/components/layout/MainLayout'
import { Code, Key, Upload, Download, Shield } from 'lucide-react'

const apiEndpoints = [
  {
    method: 'POST',
    path: '/upload',
    title: 'Upload Template',
    description: 'Upload a Word template and generate a document with provided placeholders.',
    icon: Upload,
    parameters: [
      { name: 'template', type: 'File', description: 'Word (.docx) template file' },
      { name: 'placeholders', type: 'JSON', description: 'Object containing placeholder values' },
    ],
  },
  {
    method: 'GET',
    path: '/health',
    title: 'Health Check',
    description: 'Check the status of the DocuFlow API service.',
    icon: Shield,
    parameters: [],
  },
  {
    method: 'POST',
    path: '/batch',
    title: 'Batch Generation',
    description: 'Generate multiple documents from a single template with different data sets.',
    icon: Download,
    parameters: [
      { name: 'template', type: 'File', description: 'Word (.docx) template file' },
      { name: 'data', type: 'JSON Array', description: 'Array of placeholder objects' },
    ],
  },
]

const codeExamples = [
  {
    language: 'JavaScript',
    title: 'Upload Template and Generate Document',
    code: `const formData = new FormData();
formData.append('template', file);
formData.append('placeholders', JSON.stringify({
  name: 'John Doe',
  date: '2024-03-16',
  company: 'Acme Corp'
}));

const response = await fetch('http://localhost:5001/upload', {
  method: 'POST',
  body: formData
});

const document = await response.blob();`,
  },
  {
    language: 'Python',
    title: 'Python Integration',
    code: `import requests

files = {'template': open('template.docx', 'rb')}
data = {
    'placeholders': {
        'name': 'John Doe',
        'date': '2024-03-16',
        'company': 'Acme Corp'
    }
}

response = requests.post(
    'http://localhost:5001/upload',
    files=files,
    data={'placeholders': json.dumps(data['placeholders'])}
)

with open('generated_document.docx', 'wb') as f:
    f.write(response.content)`,
  },
  {
    language: 'cURL',
    title: 'cURL Example',
    code: `curl -X POST http://localhost:5001/upload \\
  -F "template=@template.docx" \\
  -F 'placeholders={"name":"John Doe","date":"2024-03-16","company":"Acme Corp"}' \\
  --output generated_document.docx`,
  },
]

export default function ApiReferencePage() {
  return (
    <MainLayout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              API Reference
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Integrate DocuFlow into your applications with our comprehensive API. Generate documents programmatically with ease.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="space-y-8">
              {apiEndpoints.map((endpoint) => (
                <div key={endpoint.path} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="rounded-full bg-[#FF6B4A]/10 p-3">
                      <endpoint.icon className="h-6 w-6 text-[#FF6B4A]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                          endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                          endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-lg font-mono text-gray-900">{endpoint.path}</code>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mt-2">{endpoint.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{endpoint.description}</p>
                  
                  {endpoint.parameters.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Parameters</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param) => (
                          <div key={param.name} className="flex items-start gap-4">
                            <code className="text-sm font-mono text-[#FF6B4A] min-w-24">{param.name}</code>
                            <span className="text-sm text-gray-500">{param.type}</span>
                            <span className="text-sm text-gray-600 flex-1">{param.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8 text-center">
              Code Examples
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {codeExamples.map((example) => (
                <div key={example.language} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="h-5 w-5 text-[#FF6B4A]" />
                    <h3 className="text-lg font-semibold text-gray-900">{example.language}</h3>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-3">{example.title}</h4>
                  <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-gray-800">{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get your API key and start integrating DocuFlow into your applications today.
            </p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center gap-x-2 rounded-lg bg-[#FF6B4A] px-6 py-3 text-base font-semibold text-white hover:bg-[#FF6B4A]/90 transition-colors">
                <Key className="h-5 w-5" />
                Get API Key
              </button>
              <button className="inline-flex items-center gap-x-2 rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                View SDKs
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 