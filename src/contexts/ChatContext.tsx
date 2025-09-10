import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatContextType {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  loadMessages: () => void;
  saveMessages: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const saveMessages = () => {
    try {
      const messagesData = JSON.stringify(messages);
      document.cookie = `pikestan_chat_history=${encodeURIComponent(messagesData)}; path=/; max-age=${30 * 24 * 60 * 60}`; // 30 روز
    } catch (error) {
      console.error('خطا در ذخیره پیام‌ها:', error);
    }
  };

  const loadMessages = () => {
    try {
      const cookies = document.cookie.split(';');
      const chatCookie = cookies.find(cookie => cookie.trim().startsWith('pikestan_chat_history='));
      
      if (chatCookie) {
        const cookieValue = chatCookie.split('=')[1];
        const decodedValue = decodeURIComponent(cookieValue);
        const savedMessages = JSON.parse(decodedValue);
        
        // تبدیل timestamp از string به Date
        const parsedMessages = savedMessages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        
        setMessages(parsedMessages);
      }
    } catch (error) {
      console.error('خطا در بارگذاری پیام‌ها:', error);
    }
  };

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  const clearMessages = () => {
    setMessages([]);
    // پاک کردن کوکی
    document.cookie = 'pikestan_chat_history=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, clearMessages, loadMessages, saveMessages }}>
      {children}
    </ChatContext.Provider>
  );
};