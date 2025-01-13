import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, PiggyBank, LineChart, Calendar, Settings, CreditCard, Menu, X, Info } from 'lucide-react';
import { NavLink } from './NavLink';
import { useLanguage } from '../contexts/LanguageContext';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  }, [location]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-900 text-white rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
        ${isOpen ? 'w-64' : 'w-20'} 
        h-screen bg-indigo-900 text-white p-4 fixed left-0 top-0 
        transition-all duration-300 ease-in-out z-40
      `}>
        <div className="flex items-center gap-2 mb-8">
          <PiggyBank className="w-8 h-8 shrink-0" />
          <h1 className={`text-xl font-bold whitespace-nowrap transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0 w-0 overflow-hidden'}`}>
            Skynance
          </h1>
        </div>
        
        <nav className="space-y-2">
          <NavLink to="/" icon={<Home />} collapsed={!isOpen}>
            {t('dashboard')}
          </NavLink>
          <NavLink to="/expenses" icon={<CreditCard />} collapsed={!isOpen}>
            {t('expenses')}
          </NavLink>
          <NavLink to="/analytics" icon={<LineChart />} collapsed={!isOpen}>
            {t('analytics')}
          </NavLink>
          <NavLink to="/budget" icon={<Calendar />} collapsed={!isOpen}>
            {t('budget')}
          </NavLink>
          <NavLink to="/settings" icon={<Settings />} collapsed={!isOpen}>
            {t('settings')}
          </NavLink>
          <NavLink to="/about" icon={<Info />} collapsed={!isOpen}>
            {t('about')}
          </NavLink>
        </nav>
      </div>

      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}