import './Dock.css';

const Dock = ({ apps, openApps, minimizedApps, onAppClick, activeApp }) => {
  return (
    <div className="dock-container">
      <div className="dock">
        {Object.keys(apps).map(appId => (
          <div 
            key={appId} 
            className={`dock-item 
              ${openApps.includes(appId) ? 'open' : ''} 
              ${minimizedApps.includes(appId) ? 'minimized' : ''}
              ${activeApp === appId ? 'active' : ''}`}
            onClick={() => {
              if (minimizedApps.includes(appId)) {
                // Restore minimized app
                onAppClick(appId);
              } else {
                onAppClick(appId);
              }
            }}
            title={apps[appId].name}
          >
            <img src={apps[appId].icon} alt={apps[appId].name} />
            {openApps.includes(appId) && <div className="indicator" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;