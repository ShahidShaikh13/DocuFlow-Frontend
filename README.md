# DocuFlow - Document Generation Platform

A modern SaaS platform for generating professional documents from Word templates with dynamic placeholders.

## 🚀 Features

- **Template Upload**: Upload Word (.docx) templates with placeholders
- **Dynamic Fields**: Add and remove placeholder fields as needed
- **Instant Generation**: Generate documents in seconds
- **Secure Processing**: Documents are processed securely and never stored
- **Modern UI**: Beautiful, responsive interface built with Next.js and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, docxtemplater
- **Styling**: Tailwind CSS with custom design system
- **API**: Axios for HTTP requests

## 📁 Project Structure

```
my-project-6/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── demo/           # DocuFlow demo page
│   │   ├── features/       # Features page
│   │   ├── blog/           # Blog page
│   │   └── ...
│   ├── components/
│   │   ├── layout/         # Layout components
│   │   │   ├── DocuFlow.tsx # Main document generation component
│   │   │   ├── Header.tsx  # Navigation header
│   │   │   └── ...
│   │   └── shared/         # Reusable components
│   └── lib/
│       └── api.ts          # API communication layer
├── backend/                # Backend server (separate directory)
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install frontend dependencies:**
   ```bash
   cd my-project-6
   npm install
   ```

2. **Install backend dependencies:**
   ```bash
   cd ../backend
   npm install
   ```

### Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:5001`

2. **Start the frontend development server:**
   ```bash
   cd my-project-6
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

3. **Open your browser:**
   Navigate to `http://localhost:3000` to see the DocuFlow platform

## 📄 How to Use

1. **Visit the Demo**: Go to `/demo` to try the document generation
2. **Upload Template**: Select a Word (.docx) file with placeholders
3. **Fill Placeholders**: Enter values for each placeholder field
4. **Generate Document**: Click "Generate Document" to create your file
5. **Download**: Download the generated document

## 🎨 Customization

### Styling
The platform uses Tailwind CSS with a custom color scheme:
- Primary: `#FF6B4A` (Orange)
- Text: `#333333` (Dark Gray)
- Background: Various gray shades

### Components
- `DocuFlow.tsx`: Main document generation interface
- `Header.tsx`: Navigation with DocuFlow branding
- `Hero.tsx`: Landing page hero section
- `Features.tsx`: Feature showcase

## 🔧 API Endpoints

The frontend communicates with the backend via:
- `POST /upload`: Upload template and generate document
- `GET /health`: Check backend health status

## 📝 Template Format

Word templates should use the following placeholder format:
- `{{name}}` - For name fields
- `{{date}}` - For date fields
- `{{address}}` - For address fields
- Add custom placeholders as needed

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy to Vercel or your preferred platform
```

### Backend
```bash
cd backend
npm start
# Deploy to your preferred hosting platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**DocuFlow** - Transform your document workflow with intelligent template processing.
