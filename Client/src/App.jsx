import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import AppRoutes from './routes/AppRoutes';
import { UserProvider } from './contexts/UserContext';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <UserProvider>
      <Router>
        <div className='grid-container'>
          <Header OpenSidebar={OpenSidebar} />
          {/* Pasamos setOpenSidebarToggle al Sidebar */}
          <Sidebar
            openSidebarToggle={openSidebarToggle}
            setOpenSidebar={setOpenSidebarToggle} // Cambio aquí para que coincida el nombre
            OpenSidebar={OpenSidebar}
          />
          <main>
            <AppRoutes />
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
