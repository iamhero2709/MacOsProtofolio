import './Desktop.css';

const Desktop = ({ apps, openApp }) => {
  return (
    <div className="desktop">
      {Object.keys(apps).map(appId => (
        <div 
          key={appId} 
          className="desktop-icon"
          onClick={() => openApp(appId)}
          onDoubleClick={() => openApp(appId)}
        >
          <img src={apps[appId].icon} alt={apps[appId].name} />
          <span>{apps[appId].name}</span>
        </div>
      ))}
    </div>
  );
};

export default Desktop;