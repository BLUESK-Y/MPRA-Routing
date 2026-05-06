import { useParams, useNavigate } from 'react-router-dom';
import users from '../data/users';

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return (
      <div className="page">
        <h2>❌ User Not Found!</h2>
        <button onClick={() => navigate('/users')}>⬅ Back to Users</button>
      </div>
    );
  }

  return (
    <div className="page user-detail-page">
      <h2>👤 User Details</h2>
      <div className="user-detail-card">
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
      <button onClick={() => navigate('/users')}>⬅ Go Back to Users</button>
    </div>
  );
}

export default UserDetail;