import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import MenuBar from './components/MenuBar/MenuBar';
import Desktop from './components/Desktop/Desktop';
import Dock from './components/Dock/Dock';
import AppWindow from './components/AppWindow/AppWindow';
import VSCode from './components/Apps/VSCode/VSCode';
import Projects from './components/Apps/Projects/Projects';
import About from './components/Apps/About/About';
import Contact from './components/Apps/Contact/Contact';
import Terminal from './components/Apps/Terminal/Terminal';
import WallpaperSettings from './components/Apps/wallpaperSettings/WallpaperSettings.jsx';
import Calculator from './components/Apps/Calculator/Calculator';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx';
import './App.css';

function App() {
  const [openApps, setOpenApps] = useState([]);
  const [activeApp, setActiveApp] = useState(null);
  const [minimizedApps, setMinimizedApps] = useState([]);
  const [currentWallpaper, setCurrentWallpaper] = useState('/wallpapers/bigsur1.jpg');
  const [fullScreenApp, setFullScreenApp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading assets
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  const apps = {
    vscode: {
      name: 'VS Code',
      component: VSCode,
      icon: '/icons/vscode_512x512x32.png',
      defaultSize: { width: 800, height: 600 }
    },
    projects: {
      name: 'Projects',
      component: Projects,
      icon: '/icons/Projects_512x512x32.png',
      defaultSize: { width: 700, height: 500 }
    },
    about: {
      name: 'About Me',
      component: About,
      icon: '/icons/about_512x512x32.png',
      defaultSize: { width: 600, height: 400 }
    },
    contact: {
      name: 'Contact',
      component: Contact,
      icon: '/icons/contacts_512x512x32.png',
      defaultSize: { width: 500, height: 400 }
    },
    terminal: {
      name: 'Terminal',
      component: Terminal,
      icon: '/icons/Terminal icon_512x512x32.png',
      defaultSize: { width: 600, height: 400 }
    },
    wallpaper: {
      name: 'Wallpaper Settings',
      component: WallpaperSettings,
      icon: '/icons/walpaper_512x512x32.png',
      defaultSize: { width: 600, height: 400 }
    },
    calculator: {
      name: 'Calculator',
      component: Calculator,
      icon: '/icons/calculator_512x512x32.png',
      defaultSize: { width: 320, height: 520 },
      resizable: false // Calculator should maintain fixed size
    }
  };

  // Open an app
  const openApp = (appId) => {
    if (!openApps.includes(appId)) {
      setOpenApps([...openApps, appId]);
    }
    // If app is minimized, restore it
    if (minimizedApps.includes(appId)) {
      setMinimizedApps(minimizedApps.filter(id => id !== appId));
    }
    setActiveApp(appId);
    setFullScreenApp(null); // exit fullscreen on new app open
  };

  // Close an app
  const closeApp = (appId) => {
    setOpenApps(openApps.filter(id => id !== appId));
    setMinimizedApps(minimizedApps.filter(id => id !== appId));
    if (activeApp === appId) {
      setActiveApp(null);
    }
    if (fullScreenApp === appId) {
      setFullScreenApp(null);
    }
  };

  // Handle menu actions
  const handleMenuAction = (action, appId) => {
    switch(action) {
      case 'Quit':
        closeApp(appId);
        break;
      case 'Minimize':
        minimizeApp(appId);
        break;
      case 'Zoom':
        toggleFullScreen(appId);
        break;
      case 'Hide':
        minimizeApp(appId);
        break;
      case 'Hide Others':
        hideOtherApps(appId);
        break;
      case 'Show All':
        showAllApps();
        break;
      case 'Enter Full Screen':
        toggleFullScreen(appId);
        break;
      case 'Scientific Mode':
        // This would be handled within the Calculator component
        break;
      default:
        console.log('Menu action:', action);
    }
  };

  // Hide other apps except the current one
  const hideOtherApps = (appId) => {
    const others = openApps.filter(id => id !== appId);
    setMinimizedApps([...new Set([...minimizedApps, ...others])]);
    setActiveApp(appId);
  };

  // Show all apps by unminimizing all
  const showAllApps = () => {
    setMinimizedApps([]);
  };

  const toggleFullScreen = (appId) => {
    if (appId === 'calculator') return; // Calculator not fullscreen
    
    // Restore if minimized
    if (minimizedApps.includes(appId)) {
      setMinimizedApps(minimizedApps.filter(id => id !== appId));
    }
    
    setFullScreenApp(prev => prev === appId ? null : appId);
    setActiveApp(appId);
  };

  const minimizeApp = (appId) => {
    if (!minimizedApps.includes(appId)) {
      setMinimizedApps([...minimizedApps, appId]);
    }
    
    if (activeApp === appId) {
      const nextApp = openApps.find(id => id !== appId && !minimizedApps.includes(id));
      setActiveApp(nextApp || null);
    }
    
    if (fullScreenApp === appId) {
      setFullScreenApp(null);
    }
  };

  const focusApp = (appId) => {
    if (minimizedApps.includes(appId)) {
      setMinimizedApps(minimizedApps.filter(id => id !== appId));
    }
    setActiveApp(appId);
  };

  const handleWallpaperChange = (newWallpaperPath) => {
    setCurrentWallpaper(newWallpaperPath);
  };

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.metaKey && activeApp) {
        switch(e.key) {
          case 'q':
            handleMenuAction('Quit', activeApp);
            break;
          case 'm':
            handleMenuAction('Minimize', activeApp);
            break;
          case 'h':
            handleMenuAction('Hide', activeApp);
            break;
          case 'f':
            handleMenuAction('Enter Full Screen', activeApp);
            break;
          case 't':
            if (e.shiftKey) {
              openApp('terminal');
              e.preventDefault();
            }
            break;
          case 'c':
            if (e.shiftKey) {
              openApp('calculator');
              e.preventDefault();
            }
            break;
          default:
            break;
        }
      }

      if (!e.metaKey && openApps.includes('calculator')) {
        const calculator = document.querySelector('.calculator');
        if (calculator) {
          const buttons = calculator.querySelectorAll('button');
          buttons.forEach(button => {
            if (
              button.textContent === e.key ||
              (e.key === 'Enter' && button.textContent === '=') ||
              (e.key === '*' && button.textContent === '×') ||
              (e.key === '/' && button.textContent === '÷')
            ) {
              button.click();
              button.classList.add('active');
              setTimeout(() => button.classList.remove('active'), 100);
            }
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeApp, openApps, minimizedApps]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <div className="app" style={{
        backgroundImage: `url(${currentWallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease'
      }}>
        <MenuBar
          activeApp={activeApp}
          apps={apps}
          onMenuAction={handleMenuAction}
        />

        <Desktop apps={apps} openApp={openApp} />

        <AnimatePresence>
          {openApps.map(appId => {
            const isMinimized = minimizedApps.includes(appId);
            const AppComponent = apps[appId].component;
            const isResizable = apps[appId].resizable !== false;

            return (
              <AppWindow
                key={appId}
                appId={appId}
                title={apps[appId].name}
                isActive={activeApp === appId && !isMinimized}
                isFullScreen={fullScreenApp === appId}
                onClose={() => closeApp(appId)}
                onMinimize={() => minimizeApp(appId)}
                onFullScreen={() => toggleFullScreen(appId)}
                onFocus={() => !isMinimized && focusApp(appId)}
                defaultSize={apps[appId].defaultSize}
                isResizable={isResizable}
                style={{
                  display: isMinimized ? 'none' : 'flex'
                }}
              >
                {appId === 'wallpaper' ? (
                  <AppComponent onWallpaperChange={handleWallpaperChange} />
                ) : (
                  <AppComponent />
                )}
              </AppWindow>
            );
          })}
        </AnimatePresence>

        <Dock
          apps={apps}
          openApps={openApps}
          minimizedApps={minimizedApps}
          onAppClick={openApp}
          activeApp={activeApp}
        />
      </div>
    </>
  );
}

export default App;
