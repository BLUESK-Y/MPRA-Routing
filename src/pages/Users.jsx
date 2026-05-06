import { useNavigate } from 'react-router-dom';
import users from '../data/users';

function Users() {
  const navigate = useNavigate();

  return (
    <div className="page users-page">
      <h2>👥 Users List</h2>
      <p>Click on a user to see their details.</p>
      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
            <button onClick={() => navigate(`/users/${user.id}`)}>
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;