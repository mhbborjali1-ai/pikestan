import React from 'react';
import { MessageCircle, Brain, Zap, Cpu, CircuitBoard } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <CircuitBoard className="w-12 h-12 text-blue-500 ml-3 animate-bounce" />
              <span className="text-lg text-gray-600 font-medium">مشاور هوشمند قطعات الکترونیکی</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              چت‌بات
              <span className="text-blue-500 block">پیکستان</span>
              <span className="text-green-500 text-3xl lg:text-4xl block mt-2">مشاور تخصصی شما</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              با چت‌بات هوشمند پیکستان، بهترین قطعات الکترونیکی را برای پروژه‌های خود پیدا کنید. 
              از ترانزیستور و آی‌سی گرفته تا خازن و مقاومت، همه چیز را با مشاوره تخصصی انتخاب کنید.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                شروع گفتگو با چت‌بات
              </button>
              <button className="bg-white text-blue-500 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors border-2 border-blue-500">
                مشاهده نمونه مشاوره
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-blue-500">۱۰۰۰+</div>
                <div className="text-sm text-gray-600">نوع قطعه</div>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-500">۲۴/۷</div>
                <div className="text-sm text-gray-600">پشتیبانی</div>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-500">۹۵٪</div>
                <div className="text-sm text-gray-600">رضایت کاربران</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto lg:mx-0 relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center ml-3">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">چت‌بات پیکستان</h3>
                  <p className="text-sm text-green-500 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full ml-1 animate-pulse"></div>
                    آنلاین و آماده مشاوره
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4 mr-8 relative">
                  <p className="text-gray-700">سلام! برای پروژه‌تان چه نوع قطعه‌ای نیاز دارید؟</p>
                  <div className="absolute -bottom-2 right-4 w-4 h-4 bg-gray-100 transform rotate-45"></div>
                </div>
                
                <div className="bg-blue-500 text-white rounded-lg p-4 ml-8 relative">
                  <p>یک ترانزیستور برای تقویت سیگنال می‌خوام</p>
                  <div className="absolute -bottom-2 left-4 w-4 h-4 bg-blue-500 transform rotate-45"></div>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4 mr-8 relative">
                  <p className="text-gray-700 mb-3">بر اساس نیاز شما، این ترانزیستورها را پیشنهاد می‌دهم:</p>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex items-center">
                      <img
                        src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                        alt="ترانزیستور"
                        className="w-12 h-12 rounded object-cover ml-3"
                      />
                      <div>
                        <h4 className="font-medium text-sm text-gray-800">BC547 NPN Transistor</h4>
                        <p className="text-blue-500 text-sm">مناسب برای تقویت سیگنال</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 right-4 w-4 h-4 bg-gray-100 transform rotate-45"></div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-center">
                <div className="flex space-x-1 space-x-reverse">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full p-4 shadow-lg animate-pulse">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-4 shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-1/2 -left-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-4 shadow-lg animate-pulse" style={{ animationDelay: '2s' }}>
              <Cpu className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;