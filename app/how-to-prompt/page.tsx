'use client';

import { ArrowLeft, Lightbulb, MessageCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle';

export default function HowToPrompt() {
  const tips = [
    {
      title: "Be Specific",
      description: "The more specific you are, the better the poem will be. Instead of 'write a poem about love', try 'write a romantic poem about watching sunrise with someone special'."
    },
    {
      title: "Set the Mood",
      description: "Describe the emotion or atmosphere you want: melancholic, joyful, mysterious, peaceful, or energetic."
    },
    {
      title: "Choose a Style",
      description: "Specify if you want a haiku, sonnet, free verse, or a particular style like Shakespearean or modern poetry."
    },
    {
      title: "Add Context",
      description: "Include details about setting, characters, or personal experiences to make the poem more meaningful."
    }
  ];

  const examples = [
    {
      prompt: "Write a peaceful haiku about morning coffee",
      description: "Simple, specific, and includes style preference"
    },
    {
      prompt: "Create a melancholic free verse poem about autumn leaves falling in an empty park",
      description: "Includes mood, style, imagery, and setting"
    },
    {
      prompt: "Write a joyful sonnet celebrating friendship and shared memories",
      description: "Specifies emotion, form, and theme"
    },
    {
      prompt: "Compose a mysterious poem about a lighthouse keeper's secrets",
      description: "Sets atmosphere and provides narrative context"
    }
  ];

  return (
    <div className="main-container">
      <ThemeToggle />
      <div className="content-wrapper">
        <header className="main-header">
          <Link href="/" className="nav-button" style={{ alignSelf: 'flex-start' }}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Lightbulb size={24} />
            <h1 className="main-title" style={{ fontSize: '2.5rem' }}>
              How to <span className="gradient-text">Prompt</span>
            </h1>
          </div>
          
          <p className="subtitle">
            Learn how to craft effective prompts for better poems
          </p>
        </header>

        <div className="glass-card">
          <div className="card-header">
            <MessageCircle size={16} />
            <span className="card-title">Prompting Tips</span>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {tips.map((tip, index) => (
              <div 
                key={index}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '1.5rem'
                }}
              >
                <h3 style={{ 
                  color: 'var(--text-primary)', 
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  marginBottom: '0.75rem' 
                }}>
                  {tip.title}
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.875rem', 
                  lineHeight: 1.6 
                }}>
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <div className="card-header">
            <Sparkles size={16} />
            <span className="card-title">Example Prompts</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {examples.map((example, index) => (
              <div 
                key={index}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '1.5rem'
                }}
              >
                <div style={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  fontFamily: "'Crimson Text', serif",
                  fontSize: '1rem',
                  color: 'var(--text-primary)'
                }}>
                  "{example.prompt}"
                </div>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  fontStyle: 'italic'
                }}>
                  {example.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card" style={{ textAlign: 'center' }}>
          <h3 style={{ 
            color: 'var(--text-primary)', 
            fontSize: '1.125rem', 
            fontWeight: '600', 
            marginBottom: '1rem' 
          }}>
            Ready to create?
          </h3>
          <p style={{ 
            color: 'var(--text-secondary)', 
            marginBottom: '1.5rem' 
          }}>
            Use these tips to craft amazing poems with PoemGPT
          </p>
          <Link href="/" className="btn btn-primary">
            <Sparkles size={16} />
            Start Writing
          </Link>
        </div>
      </div>
    </div>
  );
}
