import { SimpleTerminal } from 'react-simple-terminal';
import './Terminal.css';

const Terminal = () => {
  const commands = {
    help: () => 'Available commands: about, projects, skills, contact, clear',
    about: () => 'I am a full-stack developer with 5+ years of experience...',
    projects: () => '1. Mac OS Portfolio\n2. E-commerce Platform\n3. Weather Dashboard',
    skills: () => 'Frontend: React, Vue\nBackend: Node.js, Python\nDevOps: Docker, AWS',
    contact: () => 'Email: john.doe@example.com\nGitHub: github.com/johndoe',
    clear: () => ''
  };

  return (
    <div className="terminal-container">
      <SimpleTerminal 
        commands={commands}
        prompt="$"
        welcomeMessage="Welcome to my portfolio terminal! Type 'help' to see available commands."
      />
    </div>
  );
};

export default Terminal;