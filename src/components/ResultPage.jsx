import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Nav';
import '../styles/Result.css';

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;
  const [copyMessage, setCopyMessage] = useState('');

  const handleCopyAll = async () => {
    const fullText = [
      `Create a ${result.length}-scene visual storyboard strictly according to the text below, properly cropped with borders marking distinct scenes for the story:\n`,
      ...result.map((item, index) => `Scene ${index + 1}: ${item}`)
    ].join('\n\n');

    try {
      await navigator.clipboard.writeText(fullText);
      setCopyMessage('✅ Text copied to clipboard!');
      setTimeout(() => setCopyMessage(''), 2000);
    } catch (err) {
      setCopyMessage('❌ Failed to copy text.');
    }
  };

  if (!location.state || !location.state.result) {
    return (
      <div className="text-white">
        <Navbar />
        <h1 className="display-4 fw-bold mb-4 text-center">No Results Found</h1>
        <a className="btn btn-primary" href='https://chatgpt.com/?temporary-chat=true'>
          Create your storyboard
        </a>
        <button onClick={() => navigate('/')} className="btn btn-primary">
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="text-white">
      <Navbar />
      <div className='cont d-flex flex-column align-items-center justify-content-start min-vh-100  text-white p-4'>
      <h1 className="display-4 fw-bold mb-4 text-center">🎉 Processed Results</h1>

      <div className="w-100" style={{ maxWidth: '800px' }}>
        {/* Intro Text */}
        <p>
          Create a <strong>{result.length}</strong>-scene visual storyboard strictly according to the text below,
          properly cropped with borders marking distinct scenes for the story:
        </p>

        {/* Copy Button */}
        <div className="mb-3 text-end">
          <button className="btn btn-outline-light" onClick={handleCopyAll}>
            📋 Copy
          </button>
        </div>

        {/* Copy Alert */}
        {copyMessage && (
          <div className="alert alert-success text-center p-2">{copyMessage}</div>
        )}

        {/* Results List */}
        {result.map((item, index) => (
          <div key={index} className="mb-3 p-3 border rounded bg-secondary text-white">
            <strong>Scene {index + 1}:</strong> {item}
          </div>
        ))}

        {/* Action Buttons */}
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
          <a
            className="btn btn-primary"
            href="https://chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create your storyboard
          </a>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            Go Back to Home
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
