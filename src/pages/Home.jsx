import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home-page">
      <h2>Welcome to MyApp!</h2>
      <p>This is a multi-page React application built with React Router.</p>
      <p>You can navigate between pages using the navbar or the buttons below.</p>
      <div className="home-buttons">
        <button onClick={() => navigate('/about')}>Go to About</button>
        <button onClick={() => navigate('/users')}>Go to Users</button>
      </div>
    </div>
  );
}

export default Home;