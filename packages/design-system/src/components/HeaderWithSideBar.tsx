import { useState } from 'react';
import { Menu } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

const navItems = [
  { label: 'Clientes', path: '/clientes' },
  { label: 'Clientes selecionados', path: '/clientes-selecionados' },
  { label: 'Sair', path: '/logout' },
];

interface HeaderWithSideBarProps {
  children: ReactNode;
}

export default function HeaderWithSideBar({ children }: HeaderWithSideBarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-md transition-all z-40 ${
          sidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="h-16 flex items-center justify-center border-b">
          <span className="text-orange-600 font-bold text-xl">T</span>
        </div>
        <nav className="flex flex-col mt-4 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `p-3 rounded text-sm font-medium ${
                  isActive ? 'text-orange-600' : 'text-gray-800'
                } hover:bg-gray-100`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className={`flex flex-col flex-1 min-h-screen ${sidebarOpen ? 'ml-64' : 'ml-16'} transition-all`}>
        {/* Header */}
        <header className="h-16 flex items-center justify-between border-b px-6 bg-white shadow-sm">
          <div className="flex items-center gap-4">
            <Menu
              className="cursor-pointer text-gray-800"
              onClick={() => setSidebarOpen((prev) => !prev)}
            />
            <span className="text-orange-600 font-bold text-xl hidden sm:inline">teddy</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? 'text-orange-600' : 'text-gray-800'
                  } hover:text-orange-600`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="text-sm text-gray-800">
            Olá, <span className="font-bold">Usuário!</span>
          </div>
        </header>

        <main className="flex-1 p-8 bg-gray-50">
           {children}
        </main>
      </div>
    </div>
  );
}
