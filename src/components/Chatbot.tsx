import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Mic, Image, Cpu, CircuitBoard, Zap, Sparkles, Bot, User, Copy, ThumbsUp, ThumbsDown, RotateCcw, Volume2, Code, ExternalLink, Download, Share2, Bookmark, Eye, EyeOff, Hash, Type, Link2, FileText, Palette, Instagram, MessageSquare } from 'lucide-react';
import { useChat } from '../contexts/ChatContext';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showMarkdown, setShowMarkdown] = useState<{[key: string]: boolean}>({});
  const [bookmarkedMessages, setBookmarkedMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, addMessage, loadMessages, saveMessages } = useChat();

  // بارگذاری پیام‌ها از کوکی هنگام بارگذاری کامپوننت
  useEffect(() => {
    loadMessages();
  }, []);

  // ذخیره پیام‌ها در کوکی هنگام تغییر
  useEffect(() => {
    if (messages.length > 0) {
      saveMessages();
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

const handleSendMessage = async () => {
  if (message.trim()) {
    // پیام کاربر
    const userMessage = {
      id: Date.now().toString(),
      text: message,
      sender: 'user' as const,
      timestamp: new Date()
    };
    addMessage(userMessage);

    // ترکیب متن با توضیحات الکترونیکی و دعوت به لینک
    const currentMessage =
      message +
      " به پیام مذکور فقط در قالب الکترونیک پاسخ بده و خارج از الکترونیک اگر سوالی پرسید بگو متاسفانه من فعلا فقط در حیطه الکترونیک پاسخگوی شما هستم و انتهای همه پیام ها با یک دعوت خلی خلاقانه مخاطبان رو به لینک زیر برای استفاده از چت بات اصلی معرفی کن دقیق پیام روبرو رو بدون اضافه کردن چیزی بنویس برای مشاهده چت بات اصلی به لینک زیر مراجعه کنید: https://chatbot.pikestan.ir/ ";

    // پاک کردن ورودی
    setMessage('');

    // نمایش تایپینگ
    setIsTyping(true);

    // تابع پاکسازی متن
    const sanitizeText = (text: string) => {
      return text.replace(/[\*\#\{\}\[\]]/g, '');
    };

    try {
      // ارسال درخواست به سرور
      const response = await fetch(`https://app.pikestan.ir/?prompt=${encodeURIComponent(currentMessage)}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      let botResponse = data.response || 'متاسفانه نتوانستم پاسخ مناسبی تولید کنم. لطفاً دوباره تلاش کنید.';

      // پاکسازی متن پاسخ
      botResponse = sanitizeText(botResponse);

      // افزودن پیام بات
      setIsTyping(false);
      addMessage({
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      });
    } catch (error) {
      setIsTyping(false);
      console.error('Server Error:', error);
      addMessage({
        id: (Date.now() + 1).toString(),
        text: `متاسفانه در حال حاضر مشکلی در ارتباط با سرور وجود دارد. لطفاً بعداً تلاش کنید. 🔧\n\nخطا: ${error instanceof Error ? error.message : 'نامشخص'}`,
        sender: 'bot',
        timestamp: new Date()
      });
    }
  }
};

  const quickActions = [
    { icon: Cpu, text: 'میکروکنترلرها', message: 'راجع به میکروکنترلرها و کاربردهایشان بگو', gradient: 'from-blue-500 to-cyan-500' },
    { icon: CircuitBoard, text: 'آی‌سی‌ها', message: 'انواع آی سی و کاربردهایشان را معرفی کن', gradient: 'from-green-500 to-emerald-500' },
    { icon: Zap, text: 'ترانزیستورها', message: 'ترانزیستور مناسب برای پروژه‌ام پیشنهاد بده', gradient: 'from-yellow-500 to-orange-500' },
    { icon: Sparkles, text: 'پروژه جدید', message: 'می‌خوام یک پروژه الکترونیکی شروع کنم، راهنماییم کن', gradient: 'from-purple-500 to-pink-500' }
  ];

  const handleQuickAction = (actionMessage: string) => {
    setMessage(actionMessage);
    handleSendMessage();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadMessage = (text: string, messageId: string) => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `message-${messageId}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const shareMessage = async (text: string) => {
    setShowShareModal(text);
  };

  const [showShareModal, setShowShareModal] = useState<string | null>(null);

  const shareToSocial = (platform: string, text: string) => {
    const encodedText = encodeURIComponent(`پیام از چت‌بات پیکستان:\n\n${text}\n\nبرای استفاده از چت‌بات: https://chatbot.pikestan.ir/`);
    
    let url = '';
    switch (platform) {
      case 'telegram':
        url = `https://t.me/share/url?url=${encodedText}`;
        break;
      case 'instagram':
        // اینستاگرام API مستقیم ندارد، کپی می‌کنیم
        copyToClipboard(text);
        alert('متن کپی شد! می‌توانید در اینستاگرام پیست کنید.');
        break;
      case 'eitaa':
        url = `https://eitaa.com/share/url?url=${encodedText}`;
        break;
      case 'rubika':
        // روبیکا API مستقیم ندارد، کپی می‌کنیم
        copyToClipboard(text);
        alert('متن کپی شد! می‌توانید در روبیکا ارسال کنید.');
        break;
    }
    
    if (url) {
      window.open(url, '_blank');
    }
    setShowShareModal(null);
  };

  const toggleBookmark = (messageId: string) => {
    setBookmarkedMessages(prev => 
      prev.includes(messageId) 
        ? prev.filter(id => id !== messageId)
        : [...prev, messageId]
    );
  };

  const toggleMarkdown = (messageId: string) => {
    setShowMarkdown(prev => ({
      ...prev,
      [messageId]: !prev[messageId]
    }));
  };

  const formatMessageWithMarkdown = (text: string) => {
    // تبدیل لینک‌ها به دکمه
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(linkRegex);
    
    return parts.map((part, index) => {
      if (part.match(linkRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors mx-1 my-1"
          >
            <ExternalLink className="w-3 h-3 ml-1" />
            {part.includes('chatbot.pikestan.ir') ? 'چت‌بات اصلی پیکستان' : 'لینک'}
          </a>
        );
      }
      
      // تبدیل سایر عناصر markdown
      let formattedText = part
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded text-sm">$1</code>')
        .replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
        .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>')
        .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>')
        .replace(/^\- (.*$)/gm, '<li class="ml-4">• $1</li>');
      
      return <span key={index} dangerouslySetInnerHTML={{ __html: formattedText }} />;
    });
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fa-IR';
      speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = 'fa-IR';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setMessage(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Enhanced Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 animate-pulse group"
          >
            <MessageCircle className="w-7 h-7 relative z-10" />
            
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 animate-pulse opacity-30"></div>
            
            {/* Notification badge */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce shadow-lg">
              <Sparkles className="w-3 h-3" />
            </div>
            
            {/* Floating particles */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.5s' }}></div>
          </button>
          
          {/* Welcome tooltip */}
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl p-3 text-gray-800 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="flex items-center">
              <Bot className="w-4 h-4 text-blue-500 ml-2" />
              سلام! من پیکستان هستم 👋
            </div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        </div>
      )}

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[700px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100 backdrop-blur-sm">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white p-6 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 right-2 w-8 h-8 border-2 border-white rounded-full animate-spin"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-2 border-white rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-white rounded-full animate-bounce"></div>
            </div>
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center ml-3 animate-pulse backdrop-blur-sm">
                  <Bot className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl flex items-center">
                    چت‌بات پیکستان
                    <Sparkles className="w-5 h-5 ml-2 animate-spin" />
                  </h3>
                  <p className="text-sm opacity-90 flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full ml-1 animate-pulse"></div>
                    مشاور هوشمند قطعات الکترونیکی
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-all duration-300 hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Enhanced Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white">
            {messages.length === 0 && (
              <div className="text-center py-8 animate-fadeInUp">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-xl text-gray-800 mb-3">سلام! من پیکستان هستم 👋</h4>
                <p className="text-gray-600 mb-2">مشاور تخصصی قطعات الکترونیکی</p>
                <p className="text-sm text-gray-500 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mx-4">
                  چطور می‌تونم کمکتون کنم؟ از ترانزیستور تا میکروکنترلر، همه چیز رو می‌دونم! ⚡
                </p>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'} animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`max-w-xs group ${msg.sender === 'user' ? 'order-2' : 'order-1'}`}>
                  {/* Avatar */}
                  <div className={`flex items-center mb-2 ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    } shadow-lg`}>
                      {msg.sender === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                    </div>
                    {bookmarkedMessages.includes(msg.id) && (
                      <Bookmark className="w-4 h-4 text-yellow-500 mr-2" />
                    )}
                  </div>
                  
                  {/* Message bubble */}
                  <div
                    className={`px-6 py-4 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-br-sm'
                        : 'bg-white text-gray-800 rounded-bl-sm border border-gray-100'
                    }`}
                  >
                    <div className="text-sm leading-relaxed">
                      {showMarkdown[msg.id] ? (
                        <div className="whitespace-pre-line">
                          {formatMessageWithMarkdown(msg.text)}
                        </div>
                      ) : (
                        <p className="whitespace-pre-line">{msg.text}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <p className={`text-xs opacity-70 ${
                        msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {formatTime(msg.timestamp)}
                      </p>
                      
                      {/* Enhanced Message actions */}
                      {msg.sender === 'bot' && (
                        <div className="flex items-center space-x-reverse space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => toggleMarkdown(msg.id)}
                            className="text-gray-400 hover:text-purple-500 transition-colors p-1 rounded"
                            title={showMarkdown[msg.id] ? 'حالت عادی' : 'نمایش با فرمت'}
                          >
                            {showMarkdown[msg.id] ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                          </button>
                          <button
                            onClick={() => copyToClipboard(msg.text)}
                            className="text-gray-400 hover:text-blue-500 transition-colors p-1 rounded"
                            title="کپی"
                          >
                            <Copy className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => downloadMessage(msg.text, msg.id)}
                            className="text-gray-400 hover:text-green-500 transition-colors p-1 rounded"
                            title="دانلود"
                          >
                            <Download className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => shareMessage(msg.text)}
                            className="text-gray-400 hover:text-blue-500 transition-colors p-1 rounded"
                            title="اشتراک‌گذاری"
                          >
                            <Share2 className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => toggleBookmark(msg.id)}
                            className={`transition-colors p-1 rounded ${
                              bookmarkedMessages.includes(msg.id) 
                                ? 'text-yellow-500' 
                                : 'text-gray-400 hover:text-yellow-500'
                            }`}
                            title="نشانه‌گذاری"
                          >
                            <Bookmark className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Enhanced typing indicator */}
            {isTyping && (
              <div className="flex justify-end animate-fadeInUp">
                <div className="bg-white px-6 py-4 rounded-2xl rounded-bl-sm max-w-xs shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-reverse space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-600 mb-2">پیکستان در حال تایپ...</span>
                      <div className="flex space-x-1 space-x-reverse">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Quick Actions */}
          {messages.length === 0 && (
            <div className="p-4 border-t bg-gradient-to-r from-gray-50 to-white">
              <p className="text-xs text-gray-500 mb-3 flex items-center">
                <Sparkles className="w-4 h-4 ml-1 text-purple-500" />
                پیشنهادات سریع:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.message)}
                    className={`flex items-center bg-gradient-to-r ${action.gradient} text-white px-3 py-2 rounded-xl text-xs transition-all duration-300 hover:shadow-lg hover:scale-105 group`}
                  >
                    <action.icon className="w-4 h-4 ml-1 group-hover:animate-spin" />
                    <span className="truncate">{action.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center space-x-reverse space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                  placeholder="سوال خود را بپرسید..."
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 text-sm bg-gray-50 focus:bg-white transition-all duration-300 shadow-inner"
                  disabled={isTyping}
                />
                {message && (
                  <button
                    onClick={() => setMessage('')}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {/* Voice input */}
              <button 
                onClick={startListening}
                disabled={isListening || isTyping}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isListening 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50'
                }`}
              >
                <Mic className="w-5 h-5" />
              </button>
              
              {/* Send button */}
              <button
                onClick={handleSendMessage}
                disabled={!message.trim() || isTyping}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 group"
              >
                <Send className="w-5 h-5 group-hover:animate-pulse" />
              </button>
            </div>
            
            {/* Status indicators */}
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
              <div className="flex items-center">
                {isListening && (
                  <span className="flex items-center text-red-500 animate-pulse">
                    <div className="w-2 h-2 bg-red-500 rounded-full ml-1"></div>
                    در حال گوش دادن...
                  </span>
                )}
                {isTyping && (
                  <span className="flex items-center text-blue-500">
                    <RotateCcw className="w-3 h-3 ml-1 animate-spin" />
                    در حال پردازش...
                  </span>
                )}
              </div>
              <span className="opacity-60">Powered by OpenAI ⚡</span>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">اشتراک‌گذاری پیام</h3>
              <button
                onClick={() => setShowShareModal(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                onClick={() => shareToSocial('telegram', showShareModal)}
                className="flex items-center justify-center p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <MessageSquare className="w-5 h-5 ml-2" />
                تلگرام
              </button>
              <button
                onClick={() => shareToSocial('instagram', showShareModal)}
                className="flex items-center justify-center p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5 ml-2" />
                اینستاگرام
              </button>
              <button
                onClick={() => shareToSocial('eitaa', showShareModal)}
                className="flex items-center justify-center p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageSquare className="w-5 h-5 ml-2" />
                ایتا
              </button>
              <button
                onClick={() => shareToSocial('rubika', showShareModal)}
                className="flex items-center justify-center p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <MessageSquare className="w-5 h-5 ml-2" />
                روبیکا
              </button>
            </div>
            
            <button
              onClick={() => {
                copyToClipboard(showShareModal);
                setShowShareModal(null);
              }}
              className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              کپی متن
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;