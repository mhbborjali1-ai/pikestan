import React, { useState } from 'react';
import { Search, Database, Cpu, CircuitBoard, Zap, Battery, Filter, Star, ExternalLink } from 'lucide-react';

interface Component {
  id: string;
  name: string;
  type: 'microcontroller' | 'ic' | 'transistor' | 'passive';
  description: string;
  specifications: string[];
  applications: string[];
  price: string;
  availability: 'available' | 'limited' | 'out-of-stock';
  rating: number;
  image: string;
  datasheet?: string;
}

const ComponentDatabase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');

  const components: Component[] = [
    {
      id: '1',
      name: 'Arduino Uno R3',
      type: 'microcontroller',
      description: 'میکروکنترلر محبوب برای پروژه‌های آموزشی و نمونه‌سازی',
      specifications: ['ATmega328P', '16MHz', '14 پین دیجیتال', '6 پین آنالوگ'],
      applications: ['پروژه‌های آموزشی', 'نمونه‌سازی', 'اتوماسیون خانگی'],
      price: '۲۵۰,۰۰۰ تومان',
      availability: 'available',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '2',
      name: 'ESP32 DevKit',
      type: 'microcontroller',
      description: 'میکروکنترلر با قابلیت WiFi و Bluetooth',
      specifications: ['Dual-core', '240MHz', 'WiFi', 'Bluetooth', '36 پین'],
      applications: ['IoT', 'پروژه‌های بی‌سیم', 'کنترل از راه دور'],
      price: '۱۸۰,۰۰۰ تومان',
      availability: 'available',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '3',
      name: 'LM358 Op-Amp',
      type: 'ic',
      description: 'تقویت‌کننده عملیاتی دوگانه',
      specifications: ['Dual Op-Amp', '1MHz GBW', '3-32V', 'Low Power'],
      applications: ['تقویت سیگنال', 'فیلترها', 'مقایسه‌گرها'],
      price: '۱۵,۰۰۰ تومان',
      availability: 'available',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/159201/circuit-board-circuit-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '4',
      name: 'BC547 NPN',
      type: 'transistor',
      description: 'ترانزیستور NPN برای تقویت و سوئیچینگ',
      specifications: ['NPN', '45V', '100mA', 'hFE: 110-800'],
      applications: ['تقویت سیگنال', 'سوئیچینگ', 'درایور LED'],
      price: '۳,۰۰۰ تومان',
      availability: 'available',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '5',
      name: 'مقاومت 1KΩ',
      type: 'passive',
      description: 'مقاومت کربنی 1/4 وات',
      specifications: ['1KΩ', '1/4W', '±5%', 'کربنی'],
      applications: ['محدود کردن جریان', 'تقسیم ولتاژ', 'Pull-up/Pull-down'],
      price: '۵۰۰ تومان',
      availability: 'available',
      rating: 4.3,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const filteredComponents = components
    .filter(component => 
      (selectedType === 'all' || component.type === selectedType) &&
      (component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       component.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'microcontroller': return <Cpu className="w-5 h-5" />;
      case 'ic': return <CircuitBoard className="w-5 h-5" />;
      case 'transistor': return <Zap className="w-5 h-5" />;
      case 'passive': return <Battery className="w-5 h-5" />;
      default: return <Database className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'microcontroller': return 'text-blue-500 bg-blue-100';
      case 'ic': return 'text-green-500 bg-green-100';
      case 'transistor': return 'text-yellow-500 bg-yellow-100';
      case 'passive': return 'text-purple-500 bg-purple-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'limited': return 'text-yellow-600 bg-yellow-100';
      case 'out-of-stock': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available': return 'موجود';
      case 'limited': return 'محدود';
      case 'out-of-stock': return 'ناموجود';
      default: return 'نامشخص';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Database className="w-8 h-8 text-blue-500 ml-3" />
        <h3 className="text-2xl font-bold text-gray-800">پایگاه داده قطعات</h3>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="جستجو در قطعات..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="all">همه دسته‌ها</option>
          <option value="microcontroller">میکروکنترلرها</option>
          <option value="ic">آی‌سی‌ها</option>
          <option value="transistor">ترانزیستورها</option>
          <option value="passive">قطعات پسیو</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'rating')}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="name">مرتب‌سازی بر اساس نام</option>
          <option value="price">مرتب‌سازی بر اساس قیمت</option>
          <option value="rating">مرتب‌سازی بر اساس امتیاز</option>
        </select>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((component) => (
          <div key={component.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={component.image}
                alt={component.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(component.type)}`}>
                <div className="flex items-center">
                  {getTypeIcon(component.type)}
                  <span className="mr-1">
                    {component.type === 'microcontroller' && 'میکروکنترلر'}
                    {component.type === 'ic' && 'آی‌سی'}
                    {component.type === 'transistor' && 'ترانزیستور'}
                    {component.type === 'passive' && 'پسیو'}
                  </span>
                </div>
              </div>
              <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(component.availability)}`}>
                {getAvailabilityText(component.availability)}
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-bold text-gray-800">{component.name}</h4>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 ml-1" />
                  <span className="text-sm text-gray-600">{component.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{component.description}</p>

              <div className="mb-3">
                <h5 className="text-sm font-medium text-gray-700 mb-1">مشخصات:</h5>
                <div className="flex flex-wrap gap-1">
                  {component.specifications.slice(0, 3).map((spec, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-sm font-medium text-gray-700 mb-1">کاربردها:</h5>
                <div className="flex flex-wrap gap-1">
                  {component.applications.slice(0, 2).map((app, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">{component.price}</span>
                <div className="flex space-x-reverse space-x-2">
                  {component.datasheet && (
                    <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    مشاهده جزئیات
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center py-12">
          <Database className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h4 className="text-xl font-medium text-gray-500 mb-2">قطعه‌ای یافت نشد</h4>
          <p className="text-gray-400">لطفاً کلمات کلیدی دیگری امتحان کنید</p>
        </div>
      )}
    </div>
  );
};

export default ComponentDatabase;