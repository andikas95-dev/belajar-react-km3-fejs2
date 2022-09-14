import { Outlet } from 'react-router-dom';

export default function Wrapper() {
  return (
    <>
      <h1>ini adalah wrapper Top Header</h1>
      <Outlet />
      <h1>ini adalah wrapper Bottom Footer</h1>
    </>
  );
}
