import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import { ChatProvider } from './contexts/ChatContext';

export type Page = 'home' | 'services' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Features />
            <Services />
          </>
        );
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return (
          <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-8">تماس با ما</h1>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-xl text-gray-600 mb-6">برای دریافت مشاوره تخصصی در زمینه قطعات الکترونیکی با ما در تماس باشید</p>
                <div className="space-y-4">
                  <p className="text-lg"><strong>ایمیل:</strong> info@pikestan.ir</p>
                  <p className="text-lg"><strong>آدرس:</strong> قزوین، خیابان امام، پلاک ۱۲۳</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <ChatProvider>
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="pt-16">
          {renderPage()}
        </main>
        <Footer />
        <Chatbot />
      </div>
    </ChatProvider>
  );
}

export default App;