import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/40">
        <div className="container py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
