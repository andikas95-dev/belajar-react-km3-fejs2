import { Outlet } from 'react-router-dom';

export default function Wrapper() {
  return (
    <div style={{ margin: '0 2rem' }}>
      <h1>ini adalah wrapper Top Header</h1>
      <Outlet />
      <h1>ini adalah wrapper Bottom Footer</h1>
    </div>
  );
}
