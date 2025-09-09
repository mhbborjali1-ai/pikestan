import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <MessageCircle className="w-8 h-8 text-blue-500 ml-2" />
            <h1 className="text-2xl font-bold text-gray-800">پیکستان</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-gray-700 hover:text-blue-500 transition-colors ${
                currentPage === 'home' ? 'text-blue-500 font-medium' : ''
              }`}
            >
              خانه
            </button>
            <button
              onClick={() => onNavigate('services')}
              className={`text-gray-700 hover:text-blue-500 transition-colors ${
                currentPage === 'services' ? 'text-blue-500 font-medium' : ''
              }`}
            >
              خدمات
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`text-gray-700 hover:text-blue-500 transition-colors ${
                currentPage === 'about' ? 'text-blue-500 font-medium' : ''
              }`}
            >
              درباره ما
            </button>
            <button
              onClick={() => onNavigate('tools')}
              className={`text-gray-700 hover:text-blue-500 transition-colors ${
                currentPage === 'tools' ? 'text-blue-500 font-medium' : ''
              }`}
            >
              ابزارها
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`text-gray-700 hover:text-blue-500 transition-colors ${
                currentPage === 'contact' ? 'text-blue-500 font-medium' : ''
              }`}
            >
              تماس با ما
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-500 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className="text-right px-4 py-2 text-gray-700 hover:text-blue-500 transition-colors"
              >
                خانه
              </button>
              <button
                onClick={() => {
                  onNavigate('services');
                  setIsMenuOpen(false);
                }}
                className="text-right px-4 py-2 text-gray-700 hover:text-blue-500 transition-colors"
              >
                خدمات
              </button>
              <button
                onClick={() => {
                  onNavigate('about');
                  setIsMenuOpen(false);
                }}
                className="text-right px-4 py-2 text-gray-700 hover:text-blue-500 transition-colors"
              >
                درباره ما
              </button>
              <button
                onClick={() => {
                  onNavigate('tools');
                  setIsMenuOpen(false);
                }}
                className="text-right px-4 py-2 text-gray-700 hover:text-blue-500 transition-colors"
              >
                ابزارها
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className="text-right px-4 py-2 text-gray-700 hover:text-blue-500 transition-colors"
              >
                تماس با ما
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;