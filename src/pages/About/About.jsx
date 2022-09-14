import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      ini About
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate('/');
        }}
      >
        ke halaman home
      </button>
      <p
        onClick={(e) => {
          e.preventDefault();
          navigate('/');
        }}
      >
        ke halaman home
      </p>
    </div>
  );
}
