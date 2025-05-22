import { useEffect, useState, useRef } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      setShowLoading(true);
      setProgress(0);

      // Play the sound when loading starts
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(err => console.log("Audio play error:", err));
      }

      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.random() * 10;
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 300);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
      setTimeout(() => setShowLoading(false), 500);
    }
  }, [isLoading]);

  if (!showLoading) return null;

  return (
    <div className="loading-screen">
      <audio ref={audioRef} src="/sound/startupsound.wav" preload="auto" />
      <div className="loading-content">
        <div className="loading-logo">
          <div className="apple-logo">
            <img src="/icons/app logo_512x512x32.png" alt="apple-logo" />
          </div>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
