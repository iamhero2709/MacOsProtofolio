import './Projects.css';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiMongodb, SiFramer, SiNextdotjs, SiJquery, SiNumpy, SiExpress } from 'react-icons/si';

const techIcons = {
  React: <FaReact />,
  'Framer Motion': <SiFramer />,
  'Node.js': <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Stripe: '💳',
  'API Integration': '🔌',
  'Chart.js': '📊',
  CSS: '🎨',
  jQuery: <SiJquery />,
  Python: <FaPython />,
  NumPy: <SiNumpy />,
  Express: <SiExpress />,
  Nextjs: <SiNextdotjs />,
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Mac OS Portfolio',
      description: 'A portfolio that mimics the Mac OS interface',
      tags: ['React', 'Framer Motion', 'CSS'],
      link: 'https://github.com/iamhero2709/mac-os-portfolio'
    },
    {
      id: 2,
      title: 'Simon Game',
      description: 'Classic memory game implemented with jQuery and JS',
      tags: ['JavaScript', 'jQuery'],
      link: 'https://github.com/iamhero2709/Simons-Game'
    },
    {
      id: 3,
      title: 'QR Code Generator',
      description: 'Node.js CLI app to generate QR codes from URLs',
      tags: ['Node.js'],
      link: 'https://github.com/iamhero2709/QRcodeGenerator'
    },
    {
      id: 4,
      title: 'Detoxify',
      description: 'Wellness-focused productivity app with journal, timer, habit tracker',
      tags: ['Nextjs', 'React', 'CSS'],
      link: 'https://github.com/iamhero2709/Detoxify'
    },
    {
      id: 5,
      title: 'Hinglish Smart Text Predictor',
      description: 'Custom NLP pipeline for Hinglish language modeling',
      tags: ['Python', 'NLP', 'NumPy'],
      link: 'https://github.com/iamhero2709/Hinglish-Smart-Text-Predictor'
    },
    {
      id: 6,
      title: 'Neural Network from Scratch',
      description: 'Feedforward neural net trained on Iris dataset using NumPy',
      tags: ['Python', 'NumPy'],
      link: 'https://github.com/iamhero2709/NeuralNetworkScratch'
    },
    {
      id: 7,
      title: 'Airline Sentiment Analysis',
      description: 'Classify sentiment in tweets using ML & BiLSTM',
      tags: ['Python', 'NLP'],
      link: 'https://github.com/iamhero2709/Airline-Sentiment-Analysis'
    },
    {
      id: 8,
      title: 'Customer Churn Prediction',
      description: 'ML pipeline for telecom churn prediction',
      tags: ['Python', 'XGBoost', 'Logistic Regression'],
      link: 'https://github.com/iamhero2709/Telco-Customer-Churn'
    },
    {
      id: 9,
      title: 'FunFindr',
      description: 'Bored? Discover fun activities with this Express.js app',
      tags: ['Express', 'JavaScript'],
      link: 'https://github.com/iamhero2709/Funfindr'
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="title">🧠 My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card glass">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">
                  {techIcons[tag] || '💻'} {tag}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-link">
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
