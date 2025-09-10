import React, { useState } from 'react';
import { Lightbulb, Download, Eye, Star, Clock, User, Code, CircuitBoard, Zap, Cpu, ArrowRight, Play, FileText, Image, Video, Link, Heart, Share2, MessageSquare } from 'lucide-react';

interface ProjectTemplate {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'automation' | 'sensors' | 'communication' | 'power' | 'display';
  components: string[];
  estimatedTime: string;
  rating: number;
  downloads: number;
  author: string;
  image: string;
  codePreview: string;
}

interface ProjectDetailProps {
  project: ProjectTemplate;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'components' | 'code' | 'tutorial' | 'gallery'>('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  const tabs = [
    { id: 'overview', label: 'نمای کلی', icon: Eye },
    { id: 'components', label: 'قطعات', icon: CircuitBoard },
    { id: 'code', label: 'کد', icon: Code },
    { id: 'tutorial', label: 'آموزش', icon: Play },
    { id: 'gallery', label: 'گالری', icon: Image }
  ];

  const tutorialSteps = [
    {
      step: 1,
      title: 'آماده‌سازی قطعات',
      description: 'تمام قطعات مورد نیاز را جمع‌آوری کنید و مطابق لیست بررسی کنید.',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      step: 2,
      title: 'اتصالات سخت‌افزاری',
      description: 'طبق نقشه مداری، اتصالات را روی بردبورد یا PCB انجام دهید.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      step: 3,
      title: 'برنامه‌نویسی',
      description: 'کد پروژه را در محیط توسعه بارگذاری و کامپایل کنید.',
      image: 'https://images.pexels.com/photos/159201/circuit-board-circuit-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      step: 4,
      title: 'تست و عیب‌یابی',
      description: 'پروژه را تست کنید و در صورت نیاز عیب‌یابی انجام دهید.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/159201/circuit-board-circuit-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ];

  const comments = [
    { id: 1, user: 'احمد محمدی', comment: 'پروژه عالی! خیلی کاربردی بود.', date: '۱۴۰۳/۰۸/۱۵', avatar: 'A' },
    { id: 2, user: 'فاطمه احمدی', comment: 'آموزش خیلی واضح و مفصل بود. ممنون', date: '۱۴۰۳/۰۸/۱۰', avatar: 'ف' },
    { id: 3, user: 'علی رضایی', comment: 'کد تمیز و قابل فهم نوشته شده', date: '۱۴۰۳/۰۸/۰۵', avatar: 'ع' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
        <button
          onClick={onBack}
          className="flex items-center text-white hover:text-purple-100 transition-colors mb-4"
        >
          <ArrowRight className="w-5 h-5 ml-2" />
          بازگشت به لیست
        </button>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-purple-100 text-lg mb-4">{project.description}</p>
            <div className="flex items-center space-x-reverse space-x-6 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 ml-1" />
                <span>{project.estimatedTime}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 ml-1" />
                <span>{project.author}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 ml-1" />
                <span>{project.rating}</span>
              </div>
              <div className="flex items-center">
                <Download className="w-4 h-4 ml-1" />
                <span>{project.downloads}</span>
              </div>
            </div>
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

      <div className="p-6">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-purple-500 border-b-2 border-purple-500'
                  : 'text-gray-600 hover:text-purple-500'
              }`}
            >
              <tab.icon className="w-4 h-4 ml-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">توضیحات پروژه</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">ویژگی‌های کلیدی</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full ml-3"></div>
                      سطح دشواری: {project.difficulty === 'beginner' ? 'مبتدی' : project.difficulty === 'intermediate' ? 'متوسط' : 'پیشرفته'}
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full ml-3"></div>
                      زمان تخمینی: {project.estimatedTime}
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full ml-3"></div>
                      تعداد قطعات: {project.components.length} قطعه
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-gray-800 mb-4">دانلود پروژه</h4>
                <div className="space-y-3">
                  <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center">
                    <Download className="w-5 h-5 ml-2" />
                    دانلود کامل
                  </button>
                  <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center">
                    <Code className="w-5 h-5 ml-2" />
                    فقط کد
                  </button>
                  <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center">
                    <FileText className="w-5 h-5 ml-2" />
                    مستندات
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-4">آمار پروژه</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">تعداد دانلود:</span>
                    <span className="font-medium">{project.downloads}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">امتیاز:</span>
                    <span className="font-medium">{project.rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">سازنده:</span>
                    <span className="font-medium">{project.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'components' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">لیست قطعات مورد نیاز</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.components.map((component, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-r-4 border-purple-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold ml-3">
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-800">{component}</span>
                    </div>
                    <button className="text-purple-500 hover:text-purple-600 transition-colors text-sm">
                      جزئیات
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">💡 نکته مهم</h4>
              <p className="text-blue-700 text-sm">
                قبل از شروع پروژه، تمام قطعات را بررسی کنید و مطمئن شوید که مشخصات آنها با نیازهای پروژه مطابقت دارد.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">کد پروژه</h3>
              <div className="flex space-x-reverse space-x-3">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                  کپی کد
                </button>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors text-sm">
                  دانلود فایل
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
              <pre className="text-sm font-mono">{project.codePreview}</pre>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-bold text-yellow-800 mb-2">⚠️ توجه</h4>
              <p className="text-yellow-700 text-sm">
                این فقط بخشی از کد پروژه است. برای دریافت کد کامل، فایل پروژه را دانلود کنید.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'tutorial' && (
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-gray-800">راهنمای گام به گام</h3>
            
            {tutorialSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-3">🎉 تبریک!</h4>
              <p className="text-green-700 mb-4">
                پروژه شما آماده است! اگر مشکلی داشتید، می‌توانید در بخش نظرات سوال بپرسید.
              </p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                اشتراک‌گذاری نتیجه
              </button>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">گالری تصاویر</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`تصویر ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-4">نظرات کاربران</h4>
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {comment.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-800">{comment.user}</span>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{comment.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <textarea
                      placeholder="نظر خود را بنویسید..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 resize-none"
                      rows={3}
                    />
                    <button className="mt-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors text-sm">
                      ارسال نظر
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectTemplates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectTemplate | null>(null);
  const [showDetailPage, setShowDetailPage] = useState<ProjectTemplate | null>(null);

  const projects: ProjectTemplate[] = [
    {
      id: '1',
      title: 'سیستم کنترل دما',
      description: 'سیستم هوشمند کنترل دما با نمایشگر LCD و رله',
      difficulty: 'beginner',
      category: 'automation',
      components: ['Arduino Uno', 'DS18B20', 'LCD 16x2', 'رله', 'مقاومت'],
      estimatedTime: '۲-۳ ساعت',
      rating: 4.7,
      downloads: 1250,
      author: 'احمد محمدی',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      codePreview: `#include <LiquidCrystal.h>
#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2
#define RELAY_PIN 7

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  sensors.begin();
  lcd.begin(16, 2);
  pinMode(RELAY_PIN, OUTPUT);
}`
    },
    {
      id: '2',
      title: 'سنسور حرکت هوشمند',
      description: 'سیستم تشخیص حرکت با اعلان SMS',
      difficulty: 'intermediate',
      category: 'sensors',
      components: ['ESP32', 'PIR Sensor', 'SIM800L', 'LED', 'بازر'],
      estimatedTime: '۴-۵ ساعت',
      rating: 4.8,
      downloads: 890,
      author: 'فاطمه احمدی',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      codePreview: `#include <WiFi.h>
#include <SoftwareSerial.h>

#define PIR_PIN 2
#define LED_PIN 13
#define BUZZER_PIN 12

SoftwareSerial sim800l(4, 5);

void setup() {
  Serial.begin(9600);
  sim800l.begin(9600);
  pinMode(PIR_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);
}`
    },
    {
      id: '3',
      title: 'ربات کنترلی بلوتوث',
      description: 'ربات متحرک با کنترل از طریق اپلیکیشن موبایل',
      difficulty: 'intermediate',
      category: 'communication',
      components: ['Arduino Nano', 'HC-05', 'موتور DC', 'درایور موتور', 'باتری'],
      estimatedTime: '۶-۸ ساعت',
      rating: 4.9,
      downloads: 2100,
      author: 'علی رضایی',
      image: 'https://images.pexels.com/photos/159201/circuit-board-circuit-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      codePreview: `#include <SoftwareSerial.h>

SoftwareSerial bluetooth(2, 3);

#define MOTOR1_PIN1 4
#define MOTOR1_PIN2 5
#define MOTOR2_PIN1 6
#define MOTOR2_PIN2 7

void setup() {
  Serial.begin(9600);
  bluetooth.begin(9600);
  
  pinMode(MOTOR1_PIN1, OUTPUT);
  pinMode(MOTOR1_PIN2, OUTPUT);
  pinMode(MOTOR2_PIN1, OUTPUT);
  pinMode(MOTOR2_PIN2, OUTPUT);
}`
    },
    {
      id: '4',
      title: 'شارژر خورشیدی هوشمند',
      description: 'سیستم شارژ باتری با پنل خورشیدی و نمایش وضعیت',
      difficulty: 'advanced',
      category: 'power',
      components: ['Arduino Pro Mini', 'پنل خورشیدی', 'ماژول شارژ', 'OLED Display', 'سنسور ولتاژ'],
      estimatedTime: '۸-۱۰ ساعت',
      rating: 4.6,
      downloads: 650,
      author: 'مریم کریمی',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      codePreview: `#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

#define VOLTAGE_PIN A0
#define CURRENT_PIN A1

void setup() {
  Serial.begin(9600);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
}`
    }
  ];

  const filteredProjects = projects.filter(project => 
    (selectedCategory === 'all' || project.category === selectedCategory) &&
    (selectedDifficulty === 'all' || project.difficulty === selectedDifficulty)
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'مبتدی';
      case 'intermediate': return 'متوسط';
      case 'advanced': return 'پیشرفته';
      default: return 'نامشخص';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'automation': return <CircuitBoard className="w-4 h-4" />;
      case 'sensors': return <Zap className="w-4 h-4" />;
      case 'communication': return <Cpu className="w-4 h-4" />;
      case 'power': return <Lightbulb className="w-4 h-4" />;
      case 'display': return <Eye className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case 'automation': return 'اتوماسیون';
      case 'sensors': return 'سنسورها';
      case 'communication': return 'ارتباطات';
      case 'power': return 'منبع تغذیه';
      case 'display': return 'نمایشگر';
      default: return 'عمومی';
    }
  };

  if (showDetailPage) {
    return <ProjectDetail project={showDetailPage} onBack={() => setShowDetailPage(null)} />;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Lightbulb className="w-8 h-8 text-blue-500 ml-3" />
        <h3 className="text-2xl font-bold text-gray-800">قالب‌های پروژه</h3>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="all">همه دسته‌ها</option>
          <option value="automation">اتوماسیون</option>
          <option value="sensors">سنسورها</option>
          <option value="communication">ارتباطات</option>
          <option value="power">منبع تغذیه</option>
          <option value="display">نمایشگر</option>
        </select>

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="all">همه سطوح</option>
          <option value="beginner">مبتدی</option>
          <option value="intermediate">متوسط</option>
          <option value="advanced">پیشرفته</option>
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                {getDifficultyText(project.difficulty)}
              </div>
              <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                <div className="flex items-center">
                  {getCategoryIcon(project.category)}
                  <span className="mr-1">{getCategoryText(project.category)}</span>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h4 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>

              <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 ml-1" />
                  <span>{project.estimatedTime}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 ml-1" />
                  <span>{project.author}</span>
                </div>
              </div>

              <div className="mb-3">
                <h5 className="text-sm font-medium text-gray-700 mb-1">قطعات مورد نیاز:</h5>
                <div className="flex flex-wrap gap-1">
                  {project.components.slice(0, 3).map((component, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {component}
                    </span>
                  ))}
                  {project.components.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      +{project.components.length - 3} مورد دیگر
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-reverse space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 ml-1" />
                    <span>{project.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="w-4 h-4 ml-1" />
                    <span>{project.downloads}</span>
                  </div>
                </div>
                <div className="flex space-x-reverse space-x-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                    title="پیش‌نمایش سریع"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setShowDetailPage(project)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors"
                  >
                    مشاهده کامل
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                    دانلود
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
                  <p className="text-gray-600 mt-1">پیش‌نمایش سریع</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">قطعات مورد نیاز:</h4>
                    <ul className="space-y-1">
                      {selectedProject.components.map((component, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                          {component}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2">پیش‌نمایش کد:</h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                    <pre>{selectedProject.codePreview}</pre>
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <button 
                      onClick={() => {
                        setSelectedProject(null);
                        setShowDetailPage(selectedProject);
                      }}
                      className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      مشاهده کامل
                    </button>
                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                      دانلود کامل پروژه
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <Lightbulb className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h4 className="text-xl font-medium text-gray-500 mb-2">پروژه‌ای یافت نشد</h4>
          <p className="text-gray-400">لطفاً فیلترهای دیگری امتحان کنید</p>
        </div>
      )}
    </div>
  );
};

export default ProjectTemplates;