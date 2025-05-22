import { useState } from 'react';
import './WallpaperSettings.css';

const WallpaperSettings = ({ onWallpaperChange }) => {
  const wallpapers = [
    { id: 1, name: 'Default', path: '/wallpapers/big sur day.jpg' },
    { id: 2, name: 'Mountains', path: '/wallpapers/bigsur1.jpg' },
    { id: 3, name: 'Beach', path: '/wallpapers/sierra.jpg' },
    { id: 4, name: 'Space', path: '/wallpapers/mojave.jpg' },
    { id: 5, name: 'Abstract', path: '/wallpapers/leopard.jpg' }
  ];

  const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapers[0]);

  const handleWallpaperChange = (wallpaper) => {
    setSelectedWallpaper(wallpaper);
    onWallpaperChange(wallpaper.path);
  };

  return (
    <div className="wallpaper-settings">
      <h2>Wallpaper Settings</h2>
      <div className="wallpaper-grid">
        {wallpapers.map((wallpaper) => (
          <div 
            key={wallpaper.id}
            className={`wallpaper-thumbnail ${selectedWallpaper.id === wallpaper.id ? 'selected' : ''}`}
            onClick={() => handleWallpaperChange(wallpaper)}
          >
            <img src={wallpaper.path} alt={wallpaper.name} />
            <span>{wallpaper.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WallpaperSettings;