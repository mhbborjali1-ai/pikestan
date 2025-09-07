import React from 'react';
import { Search, Brain, MessageCircle, BookOpen, Lightbulb, Users, Cpu, CircuitBoard, Zap, Battery } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'شناسایی قطعات',
    description: 'شناسایی و معرفی انواع قطعات الکترونیکی بر اساس کاربرد',
    features: ['شناسایی بر اساس تصویر', 'جستجو با مشخصات فنی', 'پیشنهاد جایگزین'],
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    icon: Brain,
    title: 'مشاوره پروژه',
    description: 'تحلیل پروژه و پیشنهاد بهترین قطعات برای پیاده‌سازی',
    features: ['تحلیل نیازمندی‌ها', 'محاسبه مقادیر', 'بهینه‌سازی طراحی'],
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    icon: MessageCircle,
    title: 'پشتیبانی فنی',
    description: 'پاسخگویی به سوالات فنی و حل مشکلات الکترونیکی',
    features: ['پشتیبانی ۲۴/۷', 'راهنمایی نصب', 'عیب‌یابی مدارات'],
    image: 'https://images.pexels.com/photos/159201/circuit-board-circuit-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    icon: BookOpen,
    title: 'آموزش و راهنمایی',
    description: 'آموزش کاربرد قطعات و نحوه استفاده در پروژه‌ها',
    features: ['آموزش کاربردی', 'نمونه مدارات', 'ویدیوهای آموزشی'],
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  }
];

const categories = [
  {
    icon: Cpu,
    title: 'میکروکنترلرها',
    description: 'Arduino، Raspberry Pi، ESP32 و...',
    color: 'bg-blue-500',
    items: ['Arduino Uno', 'ESP32', 'STM32', 'PIC']
  },
  {
    icon: CircuitBoard,
    title: 'آی‌سی‌ها',
    description: 'تقویت‌کننده‌ها، کنترلرها، حسگرها',
    color: 'bg-green-500',
    items: ['Op-Amp', 'Timer IC', 'Logic Gates', 'ADC/DAC']
  },
  {
    icon: Zap,
    title: 'قطعات فعال',
    description: 'ترانزیستور، دیود، تریستور',
    color: 'bg-yellow-500',
    items: ['BJT', 'MOSFET', 'LED', 'Zener Diode']
  },
  {
    icon: Battery,
    title: 'قطعات پسیو',
    description: 'مقاومت، خازن، سلف، کریستال',
    color: 'bg-purple-500',
    items: ['Resistor', 'Capacitor', 'Inductor', 'Crystal']
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            خدمات چت‌بات پیکستان
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            مجموعه کاملی از خدمات مشاوره‌ای و آموزشی در زمینه قطعات الکترونیکی
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <service.icon className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">دسته‌بندی قطعات</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className={`${category.color} rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{category.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="space-y-1">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded inline-block ml-1 mb-1">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">چگونه کار می‌کند؟</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">۱. شروع گفتگو</h4>
              <p className="text-gray-600 text-sm">سوال خود را از چت‌بات بپرسید</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">۲. تحلیل هوشمند</h4>
              <p className="text-gray-600 text-sm">چت‌بات نیاز شما را تحلیل می‌کند</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-purple-500" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">۳. دریافت پاسخ</h4>
              <p className="text-gray-600 text-sm">بهترین پیشنهادات را دریافت کنید</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;