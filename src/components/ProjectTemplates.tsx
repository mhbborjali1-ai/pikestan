import React, { useState } from 'react';
import { Lightbulb, Download, Eye, Star, Clock, User, Code, CircuitBoard, Zap, Cpu } from 'lucide-react';

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

const ProjectTemplates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectTemplate | null>(null);

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
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
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
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                      دانلود کامل پروژه
                    </button>
                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                      مشاهده آموزش
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