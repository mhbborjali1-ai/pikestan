import React, { useState } from 'react';
import { Search, Database, Cpu, CircuitBoard, Zap, Battery, Filter, Star, ExternalLink, ArrowRight, ShoppingCart, Heart, Share2 } from 'lucide-react';

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

interface ComponentDetailProps {
  component: Component;
  onBack: () => void;
}

const ComponentDetail: React.FC<ComponentDetailProps> = ({ component, onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'applications' | 'reviews'>('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  const tabs = [
    { id: 'overview', label: 'نمای کلی' },
    { id: 'specs', label: 'مشخصات فنی' },
    { id: 'applications', label: 'کاربردها' },
    { id: 'reviews', label: 'نظرات' }
  ];

  const reviews = [
    { id: 1, user: 'احمد محمدی', rating: 5, comment: 'کیفیت عالی و قیمت مناسب', date: '۱۴۰۳/۰۸/۱۵' },
    { id: 2, user: 'فاطمه احمدی', rating: 4, comment: 'برای پروژه‌های آموزشی مناسب است', date: '۱۴۰۳/۰۸/۱۰' },
    { id: 3, user: 'علی رضایی', rating: 5, comment: 'سریع و قابل اعتماد', date: '۱۴۰۳/۰۸/۰۵' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6">
        <button
          onClick={onBack}
          className="flex items-center text-white hover:text-blue-100 transition-colors mb-4"
        >
          <ArrowRight className="w-5 h-5 ml-2" />
          بازگشت به لیست
        </button>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{component.name}</h1>
            <p className="text-blue-100 text-lg">{component.description}</p>
          </div>
          <div className="flex items-center space-x-reverse space-x-3">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-3 rounded-full transition-colors ${
                isFavorite ? 'bg-red-500 text-white' : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}
            >
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-3 bg-white bg-opacity-20 text-white hover:bg-opacity-30 rounded-full transition-colors">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 p-6">
        {/* Image and Quick Info */}
        <div className="lg:col-span-1">
          <img
            src={component.image}
            alt={component.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-green-600">{component.price}</span>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 ml-1" />
                <span className="font-medium">{component.rating}</span>
              </div>
            </div>
            
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
              component.availability === 'available' ? 'bg-green-100 text-green-600' :
              component.availability === 'limited' ? 'bg-yellow-100 text-yellow-600' :
              'bg-red-100 text-red-600'
            }`}>
              {component.availability === 'available' ? 'موجود' :
               component.availability === 'limited' ? 'محدود' : 'ناموجود'}
            </div>
            
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 ml-2" />
              افزودن به سبد خرید
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">توضیحات</h3>
                <p className="text-gray-600 leading-relaxed">{component.description}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">ویژگی‌های کلیدی</h3>
                <ul className="space-y-2">
                  {component.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">مشخصات فنی کامل</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {component.specifications.map((spec, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-gray-800">{spec}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">کاربردهای عملی</h3>
              <div className="grid gap-4">
                {component.applications.map((app, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
                    <div className="font-medium text-gray-800">{app}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">نظرات کاربران</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  ثبت نظر
                </button>
              </div>
              
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium ml-3">
                          {review.user.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-800">{review.user}</span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-500 mr-2">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ComponentDatabase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

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
    },
    {
      id: '6',
      name: 'STM32F103C8T6',
      type: 'microcontroller',
      description: 'میکروکنترلر ARM Cortex-M3 با کارایی بالا',
      specifications: ['ARM Cortex-M3', '72MHz', '64KB Flash', '20KB RAM', '37 GPIO'],
      applications: ['پروژه‌های پیشرفته', 'کنترل موتور', 'پردازش سیگنال'],
      price: '۱۲۰,۰۰۰ تومان',
      availability: 'available',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '7',
      name: 'Raspberry Pi 4',
      type: 'microcontroller',
      description: 'کامپیوتر تک برد با قابلیت‌های بالا',
      specifications: ['Quad-core ARM', '1.5GHz', '4GB RAM', 'WiFi', 'Bluetooth', '40 GPIO'],
      applications: ['پروژه‌های IoT', 'سرور کوچک', 'یادگیری ماشین'],
      price: '۸۵۰,۰۰۰ تومان',
      availability: 'limited',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/159201/circuit-board-circuit-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '8',
      name: 'LM7805',
      type: 'ic',
      description: 'رگولاتور ولتاژ ۵ ولت',
      specifications: ['5V Output', '1A Current', 'TO-220 Package', 'Low Dropout'],
      applications: ['تنظیم ولتاژ', 'منبع تغذیه', 'مدارات دیجیتال'],
      price: '۸,۰۰۰ تومان',
      availability: 'available',
      rating: 4.4,
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '9',
      name: '555 Timer IC',
      type: 'ic',
      description: 'آی‌سی تایمر چندمنظوره',
      specifications: ['8-pin DIP', '4.5-16V', 'Astable/Monostable', 'High Current Output'],
      applications: ['مولد پالس', 'تایمر', 'اسیلاتور'],
      price: '۵,۰۰۰ تومان',
      availability: 'available',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '10',
      name: 'L298N Motor Driver',
      type: 'ic',
      description: 'درایور موتور دوگانه',
      specifications: ['Dual H-Bridge', '2A per channel', '5-35V', 'Logic Level Compatible'],
      applications: ['کنترل موتور DC', 'ربات‌ها', 'پروژه‌های حرکتی'],
      price: '۴۵,۰۰۰ تومان',
      availability: 'available',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '11',
      name: 'IRF540N MOSFET',
      type: 'transistor',
      description: 'ترانزیستور MOSFET قدرت بالا',
      specifications: ['N-Channel', '100V', '33A', 'TO-220 Package', 'Low RDS(on)'],
      applications: ['سوئیچینگ قدرت', 'کنترل موتور', 'اینورتر'],
      price: '۱۲,۰۰۰ تومان',
      availability: 'available',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/159201/circuit-board-circuit-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '12',
      name: '2N2222 NPN',
      type: 'transistor',
      description: 'ترانزیستور NPN عمومی',
      specifications: ['NPN', '40V', '800mA', 'TO-92 Package', 'High Gain'],
      applications: ['تقویت سیگنال', 'سوئیچینگ', 'مدارات آنالوگ'],
      price: '۲,۵۰۰ تومان',
      availability: 'available',
      rating: 4.3,
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '13',
      name: 'TIP120 Darlington',
      type: 'transistor',
      description: 'ترانزیستور دارلینگتون NPN',
      specifications: ['NPN Darlington', '60V', '5A', 'High Gain', 'TO-220 Package'],
      applications: ['درایور رله', 'کنترل بار سنگین', 'تقویت جریان'],
      price: '۱۸,۰۰۰ تومان',
      availability: 'available',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '14',
      name: 'خازن الکترولیتی ۱۰۰۰μF',
      type: 'passive',
      description: 'خازن الکترولیتی ۲۵ ولت',
      specifications: ['1000μF', '25V', 'Electrolytic', 'Radial Lead', '±20%'],
      applications: ['فیلتر منبع تغذیه', 'کوپلینگ', 'تایمینگ'],
      price: '۳,۰۰۰ تومان',
      availability: 'available',
      rating: 4.2,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '15',
      name: 'خازن سرامیکی ۱۰۰nF',
      type: 'passive',
      description: 'خازن سرامیکی ۵۰ ولت',
      specifications: ['100nF', '50V', 'Ceramic', 'X7R', '±10%'],
      applications: ['دکوپلینگ', 'فیلتر نویز', 'مدارات دیجیتال'],
      price: '۱,۰۰۰ تومان',
      availability: 'available',
      rating: 4.1,
      image: 'https://images.pexels.com/photos/159201/circuit-board-circuit-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '16',
      name: 'سلف ۱۰mH',
      type: 'passive',
      description: 'سلف ۱۰ میلی‌هنری',
      specifications: ['10mH', '1A', 'Axial Lead', 'Iron Core', '±10%'],
      applications: ['فیلتر EMI', 'مدارات تنظیم', 'اسیلاتور'],
      price: '۴,۵۰۰ تومان',
      availability: 'available',
      rating: 4.0,
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '17',
      name: 'مقاومت ۱۰KΩ',
      type: 'passive',
      description: 'مقاومت کربنی ۱/۴ وات',
      specifications: ['10KΩ', '1/4W', '±5%', 'Carbon Film', 'Axial Lead'],
      applications: ['Pull-up/Pull-down', 'تقسیم ولتاژ', 'محدود کردن جریان'],
      price: '۵۰۰ تومان',
      availability: 'available',
      rating: 4.2,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '18',
      name: 'پتانسیومتر ۱۰KΩ',
      type: 'passive',
      description: 'پتانسیومتر خطی ۱۰ کیلواهم',
      specifications: ['10KΩ', 'Linear Taper', 'Single Turn', '0.5W', 'PCB Mount'],
      applications: ['کنترل ولتاژ', 'تنظیم حساسیت', 'کنترل صدا'],
      price: '۸,۰۰۰ تومان',
      availability: 'available',
      rating: 4.4,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '19',
      name: 'کریستال ۱۶MHz',
      type: 'passive',
      description: 'کریستال کوارتز ۱۶ مگاهرتز',
      specifications: ['16MHz', 'HC-49S Package', '±20ppm', 'Low Profile', 'Through Hole'],
      applications: ['کلاک میکروکنترلر', 'مدارات دیجیتال', 'تایمینگ دقیق'],
      price: '۶,۰۰۰ تومان',
      availability: 'available',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/159201/circuit-board-circuit-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: '20',
      name: 'LED قرمز ۵mm',
      type: 'passive',
      description: 'LED قرمز ۵ میلی‌متری',
      specifications: ['Red LED', '5mm', '2V Forward', '20mA', 'High Brightness'],
      applications: ['نشانگر وضعیت', 'نمایشگر', 'روشنایی'],
      price: '۱,۵۰۰ تومان',
      availability: 'available',
      rating: 4.3,
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
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

  if (selectedComponent) {
    return <ComponentDetail component={selectedComponent} onBack={() => setSelectedComponent(null)} />;
  }

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
                  <button 
                    onClick={() => setSelectedComponent(component)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors"
                  >
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