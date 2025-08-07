'use client';

import { useState } from 'react';
import { BookOpen, Sparkles, Loader2, User, Copy } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [poem, setPoem] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generatePoem = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/poem-generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate poem');
      }

      const data = await response.json();
      setPoem(Array.isArray(data.poem) ? data.poem.join('\n') : data.poem);
    } catch (error) {
      console.error('Error generating poem:', error);
      setPoem('Sorry, there was an error generating your poem. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearPoem = () => {
    setPoem('');
    setPrompt('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(poem);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      generatePoem();
    }
  };

  return (
    <div className="main-container">
      <ThemeToggle />
      <div className="content-wrapper">
        <header className="main-header">
          <div className="logo-container">
            <BookOpen size={24} />
          </div>
          <h1 className="main-title">
            Poem<span className="gradient-text">GPT</span>
          </h1>
          <p className="subtitle">
            Create beautiful, personalized poems with the power of artificial intelligence
          </p>
          
          <div className="nav-buttons">
            <Link href="/how-to-prompt" className="nav-button">
              <div className="dot-indicator" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
              How to Prompt
            </Link>
            <a href="https://github.com/Sachinsingh2002/PoemGPT" target="_blank" className="nav-button">
              <div className="dot-indicator" style={{ backgroundColor: '#10b981' }}></div>
              Source Code
            </a>
            <a href="#" className="nav-button">
              <div className="dot-indicator" style={{ backgroundColor: '#f59e0b' }}></div>
              About
            </a>
          </div>
        </header>

        <div className="glass-card">
          <div className="card-header">
            <User size={16} />
            <span className="card-title">Describe your poem</span>
          </div>
          
          <div className="textarea-container">
            <textarea
              className="main-textarea"
              placeholder="Describe the poem you'd like me to create..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyPress}
              rows={4}
            />
          </div>

          <div className="button-group">
            <button
              className="btn btn-primary"
              onClick={generatePoem}
              disabled={isLoading || !prompt.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="loading-spinner" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  Generate Poem
                </>
              )}
            </button>
            
            {(poem || prompt) && (
              <button className="btn btn-secondary" onClick={clearPoem}>
                Clear
              </button>
            )}
          </div>
        </div>

        {poem && (
          <div className="poem-display">
            <div className="poem-title">
              <BookOpen size={16} />
              Your Generated Poem
            </div>
            <div className="poem-text">{poem}</div>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button className="btn btn-secondary" onClick={copyToClipboard}>
                <Copy size={16} />
                Copy Poem
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="version-badge">v1.0.0</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>Built by</span>
          <a href="https://sachinsingh2002.vercel.app/" target="_blank">
            Sachin Singh
          </a>
        </div>
      </div>
    </div>
  );
}
