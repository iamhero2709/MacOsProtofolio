import { motion } from 'framer-motion';
import { useState } from 'react';
import './AppWindow.css';

// In your AppWindow.jsx
const AppWindow = ({ 
  children, 
  title, 
  appId, 
  isActive, 
  isFullScreen,
  onClose, 
  onMinimize, 
  onFullScreen,
  onFocus,
  defaultSize,
  isResizable = true
}) => {
  const [size, setSize] = useState(defaultSize);
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - defaultSize.width / 2,
    y: 60
  });

  const handleDragEnd = (event, info) => {
    if (!isFullScreen) {
      setPosition({
        x: info.point.x - size.width / 2,
        y: Math.max(30, info.point.y - 20) // Prevent dragging above menu bar
      });
    }
  };

  return (
    <motion.div
      className={`window ${isActive ? 'active' : ''} ${isFullScreen ? 'fullscreen' : ''}`}
      style={{
        width: isFullScreen ? '100%' : size.width,
        height: isFullScreen ? 'calc(100% - 30px)' : size.height,
        left: isFullScreen ? 0 : position.x,
        top: isFullScreen ? 30 : position.y, // 30px to account for menu bar
        zIndex: isActive ? 100 : 10
      }}
      onClick={onFocus}
      drag={!isFullScreen}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: 'spring', damping: 20 }}
    >
      <div className="window-header" onDoubleClick={onFullScreen}>
        <div className="window-controls">
          <button className="control close" onClick={onClose} />
          <button className="control minimize" onClick={onMinimize} />
          <button className="control maximize" onClick={onFullScreen} />
        </div>
        <div className="window-title">{title}</div>
      </div>
      <div className="window-content">
        {children}
      </div>
      {isResizable && !isFullScreen && (
        <div className="window-resize-handle" />
      )}
    </motion.div>
  );
};

export default AppWindow;