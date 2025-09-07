import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Mic, Image, Cpu, CircuitBoard, Zap } from 'lucide-react';
import { useChat } from '../contexts/ChatContext';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, addMessage } = useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message
      addMessage({
        id: Date.now().toString(),
        text: message,
        sender: 'user',
        timestamp: new Date()
      });

      // Clear input
      setMessage('');

      // Simulate bot typing
      setIsTyping(true);
      
      // Simulate bot response
      setTimeout(() => {
        setIsTyping(false);
        addMessage({
          id: (Date.now() + 1).toString(),
          text: generateBotResponse(message),
          sender: 'bot',
          timestamp: new Date()
        });
      }, 1500);
    }
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('ترانزیستور')) {
      return 'برای انتخاب ترانزیستور مناسب، نیاز به اطلاعات بیشتری دارم:\n\n• نوع کاربرد (تقویت، سوئیچینگ، ...)\n• ولتاژ کاری\n• جریان مورد نیاز\n• فرکانس کاری\n\nبا این اطلاعات می‌توانم بهترین ترانزیستور را پیشنهاد دهم. مثلاً BC547 برای تقویت سیگنال‌های کم و 2N2222 برای سوئیچینگ مناسب هستند.';
    }
    
    if (lowerMessage.includes('آی سی') || lowerMessage.includes('آیسی') || lowerMessage.includes('ic')) {
      return 'آی‌سی‌های مختلفی وجود دارند:\n\n🔹 Op-Amp: LM358، TL072\n🔹 Timer: NE555، LM556\n🔹 Logic: 74HC series\n🔹 Microcontroller: ATmega، PIC\n\nچه نوع آی‌سی‌ای نیاز دارید؟ کاربرد خاصی در نظر دارید؟';
    }
    
    if (lowerMessage.includes('خازن') || lowerMessage.includes('capacitor')) {
      return 'انواع خازن:\n\n🔸 الکترولیتی: برای فیلتر منبع تغذیه\n🔸 سرامیکی: برای فیلتر فرکانس بالا\n🔸 تانتالوم: برای کاربردهای دقیق\n🔸 فیلم: برای مدارات آنالوگ\n\nظرفیت و ولتاژ مورد نیازتان چقدر است؟';
    }
    
    if (lowerMessage.includes('مقاومت') || lowerMessage.includes('resistor')) {
      return 'برای انتخاب مقاومت:\n\n• مقدار مقاومت (اهم)\n• توان مصرفی (وات)\n• دقت مورد نیاز (%)\n• نوع بسته‌بندی\n\nمقاومت‌های کربنی برای کاربردهای عمومی و فلزی برای دقت بالا مناسب هستند. چه مقداری نیاز دارید؟';
    }

    if (lowerMessage.includes('arduino') || lowerMessage.includes('آردوینو')) {
      return 'برای پروژه‌های Arduino:\n\n🔹 Arduino Uno: مناسب شروع\n🔹 Arduino Nano: کوچک و قابل حمل\n🔹 Arduino Mega: پین‌های بیشتر\n🔹 ESP32: WiFi و Bluetooth داخلی\n\nچه نوع پروژه‌ای در نظر دارید؟';
    }
    
    if (lowerMessage.includes('سلام') || lowerMessage.includes('درود')) {
      return 'سلام و وقت بخیر! 👋\n\nمن چت‌بات پیکستان هستم، مشاور تخصصی شما در زمینه قطعات الکترونیکی.\n\nچه قطعه‌ای برای پروژه‌تان نیاز دارید؟ می‌توانم در انتخاب:\n• ترانزیستورها\n• آی‌سی‌ها\n• خازن و مقاومت\n• میکروکنترلرها\n\nو سایر قطعات کمکتان کنم! 🔧';
    }

    if (lowerMessage.includes('تشکر') || lowerMessage.includes('ممنون')) {
      return 'خواهش می‌کنم! 😊\n\nهمیشه در خدمت شما هستم. اگر سوال دیگری در مورد قطعات الکترونیکی دارید، حتماً بپرسید.\n\nموفق باشید! 🚀';
    }
    
    return 'سوال جالبی در مورد قطعات الکترونیکی پرسیدید! 🤔\n\nلطفاً کمی بیشتر توضیح دهید:\n• چه نوع پروژه‌ای دارید؟\n• چه قطعه‌ای نیاز دارید؟\n• مشخصات فنی خاصی مد نظرتان است؟\n\nتا بتوانم بهترین راهنمایی را ارائه دهم! 💡';
  };

  const quickActions = [
    { icon: Cpu, text: 'میکروکنترلرها', message: 'راجع به میکروکنترلرها بگو' },
    { icon: CircuitBoard, text: 'آی‌سی‌ها', message: 'انواع آی سی رو معرفی کن' },
    { icon: Zap, text: 'ترانزیستورها', message: 'ترانزیستور مناسب پیشنهاد بده' }
  ];

  const handleQuickAction = (actionMessage: string) => {
    addMessage({
      id: Date.now().toString(),
      text: actionMessage,
      sender: 'user',
      timestamp: new Date()
    });

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage({
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(actionMessage),
        sender: 'bot',
        timestamp: new Date()
      });
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50 animate-pulse"
        >
          <MessageCircle className="w-7 h-7" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
            !
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center ml-3 animate-pulse">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg">چت‌بات پیکستان</h3>
                <p className="text-sm opacity-90 flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full ml-1 animate-pulse"></div>
                  مشاور قطعات الکترونیکی
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-blue-500" />
                </div>
                <p className="font-medium mb-2">سلام! من پیکستان هستم 👋</p>
                <p className="text-sm">مشاور تخصصی قطعات الکترونیکی</p>
                <p className="text-xs mt-2 text-gray-400">چطور می‌تونم کمکتون کنم؟</p>
              </div>
            )}
            
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl shadow-lg ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-bl-sm border border-gray-100'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                  <p className={`text-xs mt-2 opacity-70 ${
                    msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {formatTime(msg.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm max-w-xs shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <span className="text-sm text-gray-600 ml-2">در حال تایپ</span>
                    <div className="flex space-x-1 space-x-reverse">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 0 && (
            <div className="p-3 border-t bg-white">
              <p className="text-xs text-gray-500 mb-2">پیشنهادات سریع:</p>
              <div className="flex gap-2 overflow-x-auto">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.message)}
                    className="flex items-center bg-gray-100 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-full text-xs text-gray-600 transition-colors whitespace-nowrap"
                  >
                    <action.icon className="w-4 h-4 ml-1" />
                    {action.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center space-x-reverse space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="سوال خود را بپرسید..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-sm bg-gray-50 focus:bg-white transition-colors"
                />
              </div>
              <button className="text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-50">
                <Mic className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-50">
                <Image className="w-5 h-5" />
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;