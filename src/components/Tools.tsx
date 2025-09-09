import React from 'react';
import { Calculator, Database, Lightbulb, Wrench } from 'lucide-react';
import ComponentCalculator from './ComponentCalculator';
import ComponentDatabase from './ComponentDatabase';
import ProjectTemplates from './ProjectTemplates';

const Tools: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'calculator' | 'database' | 'templates'>('calculator');

  const tabs = [
    { id: 'calculator', label: 'ماشین حساب', icon: Calculator },
    { id: 'database', label: 'پایگاه داده', icon: Database },
    { id: 'templates', label: 'قالب پروژه', icon: Lightbulb }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Wrench className="w-12 h-12 text-blue-500 ml-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">ابزارهای کاربردی</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            مجموعه‌ای از ابزارهای مفید برای طراحی و پیاده‌سازی پروژه‌های الکترونیکی
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <div className="flex space-x-reverse space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-5 h-5 ml-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fadeInUp">
          {activeTab === 'calculator' && <ComponentCalculator />}
          {activeTab === 'database' && <ComponentDatabase />}
          {activeTab === 'templates' && <ProjectTemplates />}
        </div>
      </div>
    </section>
  );
};

export default Tools;