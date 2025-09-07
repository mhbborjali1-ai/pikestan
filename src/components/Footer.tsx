import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Cpu, CircuitBoard, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <MessageCircle className="w-8 h-8 text-blue-400 ml-2" />
              <h3 className="text-2xl font-bold">پیکستان</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              مشاور هوشمند قطعات الکترونیکی با استفاده از هوش مصنوعی پیشرفته برای ارائه بهترین پیشنهادات تخصصی
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">لینک‌های سریع</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">درباره ما</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">خدمات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">چت‌بات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">پشتیبانی</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">وبلاگ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">دسته‌بندی قطعات</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Cpu className="w-4 h-4 text-blue-400 ml-2" />
                <span>میکروکنترلرها</span>
              </li>
              <li className="flex items-center text-gray-300">
                <CircuitBoard className="w-4 h-4 text-green-400 ml-2" />
                <span>آی‌سی‌ها</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Zap className="w-4 h-4 text-yellow-400 ml-2" />
                <span>ترانزیستورها</span>
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-4 h-4 bg-purple-400 rounded-full ml-2"></div>
                <span>قطعات پسیو</span>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">مشاهده همه</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">ارتباط با ما</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 ml-3" />
                <span className="text-gray-300">۰۲۸-۳۳۳۳۳۳۳۳</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 ml-3" />
                <span className="text-gray-300">info@pikestan.ir</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 ml-3 mt-1" />
                <span className="text-gray-300">قزوین، خیابان امام، پلاک ۱۲۳</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">عضویت در خبرنامه</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-r-lg focus:outline-none focus:border-blue-400 text-sm"
                />
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-l-lg transition-colors">
                  عضویت
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © ۱۴۰۳ پیکستان. تمامی حقوق محفوظ است.
            </p>
            <div className="flex space-x-reverse space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                شرایط استفاده
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                حریم خصوصی
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                سوالات متداول
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;