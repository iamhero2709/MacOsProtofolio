import './VSCode.css';

const VSCode = () => {
  return (
    <div className="vscode-container">
      <div className="sidebar">
        <div className="activity-bar">
          <div className="activity-item active">📁</div>
          <div className="activity-item">🔍</div>
          <div className="activity-item">🔄</div>
          <div className="activity-item">🐞</div>
          <div className="activity-item">🧩</div>
        </div>
        <div className="explorer">
          <div className="explorer-header">EXPLORER</div>
          <div className="explorer-item">📁 Portfolio</div>
          <div className="explorer-item">📄 index.html</div>
          <div className="explorer-item">📄 styles.css</div>
          <div className="explorer-item">📄 app.js</div>
        </div>
      </div>
      <div className="editor">
        <div className="tabs">
          <div className="tab active">Welcome</div>
          <div className="tab">index.html</div>
        </div>
        <div className="editor-content">
          <h1>Welcome to My Portfolio</h1>
          <p>This is a VS Code-like interface built with React.</p>
          <p>Feel free to explore my projects and skills!</p>
        </div>
      </div>
    </div>
  );
};

export default VSCode;