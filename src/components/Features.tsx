import React from 'react';
import { Brain, MessageCircle, Search, TrendingUp, Shield, Clock, Cpu, CircuitBoard, Zap, Settings } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'هوش مصنوعی پیشرفته',
    description: 'تشخیص دقیق نیازهای شما و پیشنهاد بهترین قطعات الکترونیکی',
    color: 'bg-blue-500',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20250423/pngtree-futuristic-ai-technology-source-and-related-content-image_17208471.jpg'
  },
  {
    icon: MessageCircle,
    title: 'گفتگوی تخصصی',
    description: 'چت‌بات با دانش عمیق در زمینه الکترونیک و قطعات',
    color: 'bg-green-500',
    image: 'https://up.pikestan.ir/1.jpg'
  },
  {
    icon: Search,
    title: 'جستجوی هوشمند',
    description: 'پیدا کردن قطعات مناسب بر اساس مشخصات فنی پروژه',
    color: 'bg-purple-500',
    image: 'https://thumbs.dreamstime.com/b/woman-wearing-virtual-reality-headset-engaged-ai-search-futuristic-interface-showing-artificial-intelligence-concepts-398984296.jpg'
  },
  {
    icon: TrendingUp,
    title: 'تحلیل پروژه',
    description: 'بررسی نیازهای پروژه و ارائه راهکارهای بهینه',
    color: 'bg-orange-500',
    image: 'https://mapsun.net/wp-content/uploads/2021/05/4-4.jpg'
  },
  {
    icon: Shield,
    title: 'مشاوره مطمئن',
    description: 'اطلاعات دقیق و قابل اعتماد از منابع معتبر',
    color: 'bg-red-500',
    image: 'https://www.danodonnell.net/wp-content/uploads/ai-consulting.jpg'
  },
  {
    icon: Clock,
    title: 'پاسخگویی سریع',
    description: 'دریافت پاسخ فوری و دقیق در هر ساعت از شبانه‌روز',
    color: 'bg-indigo-500',
    image: 'https://www.okoone.com/wp-content/uploads/2025/08/Marketing-Growth-430.jpg'
  }
];

const componentTypes = [
  { icon: Cpu, name: 'میکروکنترلرها', count: '200+', color: 'text-blue-500' },
  { icon: CircuitBoard, name: 'آی‌سی‌ها', count: '500+', color: 'text-green-500' },
  { icon: Zap, name: 'ترانزیستورها', count: '150+', color: 'text-yellow-500' },
  { icon: Settings, name: 'قطعات پسیو', count: '300+', color: 'text-purple-500' }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            چرا چت‌بات پیکستان؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            با استفاده از هوش مصنوعی پیشرفته، بهترین مشاوره را در زمینه قطعات الکترونیکی دریافت کنید
          </p>
        </div>

        {/* Component Types */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {componentTypes.map((type, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <type.icon className={`w-12 h-12 ${type.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="font-bold text-gray-800 mb-2">{type.name}</h3>
              <p className={`text-2xl font-bold ${type.color}`}>{type.count}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 right-4 ${feature.color} rounded-full w-12 h-12 flex items-center justify-center shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                آماده دریافت مشاوره تخصصی هستید؟
              </h3>
              <p className="text-lg mb-8 opacity-90">
                همین الان با چت‌بات پیکستان گفتگو کنید و بهترین قطعات را برای پروژه‌تان پیدا کنید
              </p>
<a href="https://chatbot.pikestan.ir/">
              <button className="bg-white text-blue-500 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg">
                شروع گفتگو
              </button>
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;