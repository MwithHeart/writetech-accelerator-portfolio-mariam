import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';



function TypingAnimation({ text, speed = 50 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}<span className={styles.cursor}>|</span></span>;
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTyping(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.aiAvatar}>
            <div className={styles.avatarGlow}></div>
            <span className={styles.avatarIcon}>🚀</span> 
          </div>
          
          <div className={styles.chatInterface}>
            <div className={styles.messageContainer}>
              <div className={styles.userMessage}>
                <span className={styles.messageText}>"Show me your technical writing portfolio"</span>
              </div>
              
              <div className={styles.aiMessage}>
                <div className={styles.aiMessageHeader}>
                  <span className={styles.aiName}>{siteConfig.title}</span>
                  <span className={styles.aiRole}>Technical Writer & Documentation Specialist</span>
                </div>
                <div className={styles.messageText}>
                  {showTyping ? (
                    <TypingAnimation 
                      text={siteConfig.tagline} 
                      speed={30}
                    />
                  ) : (
                    <span className={styles.cursor}>|</span>
                  )}
                </div>
              </div>
            </div>
            
            <div className={styles.actionButtons}>
              <Link
                className={clsx('button', styles.primaryButton)}
                to="/docs/intro">
                <span className={styles.buttonIcon}>📚</span>
                Explore Portfolio
              </Link>
              <Link
                className={clsx('button', styles.secondaryButton)}
                to="/docs/ai-documentation/intro">
                <span className={styles.buttonIcon}>🤖</span>
                AI Documentation
              </Link>
              <Link
                className={clsx('button', styles.secondaryButton)}
                to="/blog">
                <span className={styles.buttonIcon}>✍️</span>
                Technical Articles
              </Link>
            </div>
          </div>
        </div>
        
        <div className={styles.backgroundElements}>
          <div className={styles.floatingElement} style={{top: '20%', left: '10%'}}>💡</div>
          <div className={styles.floatingElement} style={{top: '20%', right: '15%'}}>📖</div>
          <div className={styles.floatingElement} style={{bottom: '30%', left: '5%'}}>🔧</div>
          <div className={styles.floatingElement} style={{bottom: '10%', right: '10%'}}>⚡</div>
        </div>
      </div>
    </header>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
