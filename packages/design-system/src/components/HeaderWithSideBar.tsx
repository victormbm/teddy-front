import { useEffect, useState, ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Home, Users } from 'lucide-react';
import logo from '../assets/teddy-logo.png';

interface HeaderWithSideBarProps {
  children: ReactNode;
  userName?: string;
}

const navItems = [
  { label: 'Home', path: '/', icon: <Home size={18} /> },
  { label: 'Clientes', path: '/clientes', icon: <Users size={18} /> },
  { label: 'Clientes selecionados', path: '/clientes-selecionados', icon: <Users size={18} /> },
];

export default function HeaderWithSideBar({ children, userName }: HeaderWithSideBarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (window.innerWidth < 768) setSidebarOpen(false);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full shadow-md z-40 transition-all ${sidebarOpen ? 'w-64' : 'w-16'} bg-white`}>
        <div className="h-20 bg-black flex items-center justify-center">
          <img src={logo} alt="Logo Teddy" className="h-10" />
        </div>

        <nav className="flex flex-col gap-1 px-3 py-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-md text-sm font-medium transition-all
                ${isActive ? 'text-orange-600 font-semibold bg-orange-50' : 'text-black hover:bg-orange-50'}`}
              >
                {item.icon}
                {sidebarOpen && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div className={`flex flex-col flex-1 transition-all ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <header className="h-20 flex items-center justify-between px-6 border-b bg-white shadow-sm">
          <div className="flex items-center gap-4">
            {/* Oculta botão no mobile */}
            <Menu
              className="cursor-pointer text-gray-800 hidden md:block"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
            <img src={logo} alt="Logo Teddy" className="h-10" />
          </div>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition ${
                    isActive
                      ? 'text-orange-600 font-semibold'
                      : 'text-gray-800 hover:text-orange-600'
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="text-sm text-gray-800">
            Olá, <span className="font-bold">{userName || 'Usuário'}!</span>
          </div>
        </header>

        <main className="flex-1 p-8 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
