import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <img 
          src="/profilepic/profile pic.jpeg" 
          alt="Randhir Kumar" 
          className="profile-pic"
        />
        <h1>Randhir Kumar</h1>
        <h2>BSMS @ IISER Pune | Full Stack & AI Developer | Cybersecurity Enthusiast</h2>
        <nav className="social-links">
          <a href="https://github.com/iamhero2709" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/randhir-kumar-861573301/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/randhir302" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="/pdf/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
        </nav>
      </header>

      <main className="about-content">
        <section>
          <h3>🧑‍💻 About Me</h3>
          <p>
            I'm <strong>Randhir Kumar</strong>, a BSMS student at IISER Pune (2023–2028), deeply passionate about applying science and tech to solve real-world problems. 
            I explore web development, AI/ML, computer vision, and cybersecurity through hands-on projects and open-source contributions.
          </p>
        </section>

        <section>
          <h3>🕹️ JavaScript / Node.js Projects</h3>
          <ul>
            <li><strong>Simon Game</strong> – A browser-based memory game that tests sequence recall with increasing difficulty.</li>
            <li><strong>QR Code Generator</strong> – CLI tool in Node.js to convert URLs into downloadable QR images. <a href="https://github.com/iamhero2709/QR-Code-Generator" target="_blank">GitHub</a></li>
            <li><strong>FunFindr</strong> – A boredom buster app using Express.js + Axios + EJS that fetches random fun activities. <a href="https://github.com/iamhero2709/FunFindr" target="_blank">GitHub</a></li>
          </ul>
        </section>

        <section>
          <h3>🧘 Full-Stack Productivity App</h3>
          <ul>
            <li><strong>Detoxify</strong> – Built with Next.js, includes a Pomodoro timer, journaling, and habit tracker with a calming gradient UI. <a href="https://github.com/iamhero2709/Detoxify" target="_blank">GitHub</a></li>
          </ul>
        </section>

        <section>
          <h3>🤖 Machine Learning Projects</h3>
          <ul>
            <li><strong>Hinglish Smart Text Predictor</strong> – Custom N-gram language model with advanced smoothing for Hinglish prediction. <a href="https://github.com/iamhero2709/Hinglish-Predictor" target="_blank">GitHub</a></li>
            <li><strong>Neural Network from Scratch – Iris Classifier</strong> – Feedforward NN built using only NumPy, with backpropagation and visualization. <a href="https://github.com/iamhero2709/NN-From-Scratch" target="_blank">GitHub</a></li>
            <li><strong>Linear Regression – Boston Housing</strong> – Manual implementation of regression with performance comparison against sklearn. <a href="https://github.com/iamhero2709/Linear-Regression-Boston" target="_blank">GitHub</a></li>
            <li><strong>Airline Sentiment Analysis</strong> – Classification using both traditional ML (TF-IDF + Logistic) and BiLSTM. <a href="https://github.com/iamhero2709/Airline-Sentiment" target="_blank">GitHub</a></li>
            <li><strong>Customer Churn Prediction</strong> – ML pipelines with XGBoost, Random Forest, NN on Kaggle Telco dataset. <a href="https://github.com/iamhero2709/Telco-Churn" target="_blank">GitHub</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default About;