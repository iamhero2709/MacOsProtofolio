import { useState } from 'react';
import './MenuBar.css';

const MenuBar = ({ activeApp, apps }) => {
  const [showAppleMenu, setShowAppleMenu] = useState(false);

  const menuItems = {
    file: ['New Window', 'New Tab', 'Open...', 'Close Window'],
    edit: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste', 'Select All'],
    view: ['Show Toolbar', 'Show Tab Bar', 'Show Sidebar', 'Enter Full Screen'],
    window: ['Minimize', 'Zoom', 'Bring All to Front'],
    help: ['Search', 'Documentation']
  };

  return (
    <div className="menu-bar">
      {/* Apple Menu */}
      <div 
        className="apple-menu"
        onMouseEnter={() => setShowAppleMenu(true)}
        onMouseLeave={() => setShowAppleMenu(false)}
      >
        <span className="apple-logo">Menu</span>
        {showAppleMenu && (
          <div className="apple-menu-dropdown">
            <div className="menu-item">About This Mac</div>
            <div className="divider" />
            <div className="menu-item">System Preferences...</div>
            <div className="menu-item">App Store...</div>
            <div className="divider" />
            <div className="menu-item">Recent Items</div>
            <div className="divider" />
            <div className="menu-item">Force Quit</div>
            <div className="divider" />
            <div className="menu-item">Sleep</div>
            <div className="menu-item">Restart...</div>
            <div className="menu-item">Shut Down...</div>
            <div className="divider" />
            <div className="menu-item">Lock Screen</div>
            <div className="menu-item">Log Out...</div>
          </div>
        )}
      </div>

      {/* App Menu */}
      {activeApp && (
        <div className="app-menu-container">
          <div className="app-menu-item">
            {apps[activeApp].name}
            <div className="app-menu-dropdown">
              <div className="menu-item">About {apps[activeApp].name}</div>
              <div className="divider" />
              <div className="menu-item">Preferences...</div>
              <div className="divider" />
              <div className="menu-item">Services</div>
              <div className="divider" />
              <div className="menu-item">Hide {apps[activeApp].name}</div>
              <div className="menu-item">Hide Others</div>
              <div className="menu-item">Show All</div>
              <div className="divider" />
              <div className="menu-item">Quit {apps[activeApp].name}</div>
            </div>
          </div>

          {Object.entries(menuItems).map(([menuName, items]) => (
            <div key={menuName} className="app-menu-item">
              {menuName.charAt(0).toUpperCase() + menuName.slice(1)}
              <div className="menu-dropdown">
                {items.map((item, index) => (
                  <div key={index} className="menu-item">
                    {item}
                    {item === 'Enter Full Screen' && <span className="shortcut">^⌘F</span>}
                    {item === 'Undo' && <span className="shortcut">⌘Z</span>}
                    {item === 'Redo' && <span className="shortcut">⇧⌘Z</span>}
                    {item === 'Cut' && <span className="shortcut">⌘X</span>}
                    {item === 'Copy' && <span className="shortcut">⌘C</span>}
                    {item === 'Paste' && <span className="shortcut">⌘V</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Status Menu */}
      <div className="status-menu">
       
        <div className="status-item">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;