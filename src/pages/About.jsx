import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="page about-page">
      <h2>📖 About This App</h2>
      <p>MyApp is a multi-page React application that demonstrates the use of React Router.</p>
      <p>It includes the following features:</p>
      <ul>
        <li>Navigation between multiple pages</li>
        <li>Parameterized routes for user details</li>
        <li>Active link highlighting in the navbar</li>
        <li>Clean and responsive design</li>
      </ul>
      <p>Built with React and React Router DOM as part of a Full Stack Development course.</p>
      <button onClick={() => navigate('/')}>⬅ Back to Home</button>
    </div>
  );
}

export default About;