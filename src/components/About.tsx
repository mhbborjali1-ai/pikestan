import React from 'react';
import { Target, Users, Award, Lightbulb, MessageCircle, Brain, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '۱۰۰۰+', label: 'نوع قطعه', icon: Zap },
    { number: '۵۰۰۰+', label: 'کاربر فعال', icon: Users },
    { number: '۲۴/۷', label: 'پشتیبانی', icon: MessageCircle },
    { number: '۹۵٪', label: 'رضایت کاربران', icon: Award }
  ];

  const values = [
    {
      icon: Target,
      title: 'دقت و تخصص',
      description: 'ارائه اطلاعات دقیق و تخصصی در زمینه قطعات الکترونیکی'
    },
    {
      icon: Lightbulb,
      title: 'نوآوری',
      description: 'استفاده از جدیدترین تکنولوژی‌های هوش مصنوعی'
    },
    {
      icon: Users,
      title: 'محوریت کاربر',
      description: 'تمرکز بر نیازهای واقعی کاربران و پروژه‌هایشان'
    },
    {
      icon: Shield,
      title: 'قابلیت اعتماد',
      description: 'اطلاعات معتبر و قابل اتکا از منابع تخصصی'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            درباره چت‌بات پیکستان
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            پیکستان، مشاور هوشمند شما در دنیای قطعات الکترونیکی است. با استفاده از هوش مصنوعی پیشرفته، 
            بهترین راهنمایی را برای انتخاب قطعات مناسب پروژه‌هایتان ارائه می‌دهیم.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://barghisho.com/wp-content/uploads/2023/04/what-is-electronic-01-min.jpg"
              alt="الکترونیک و تکنولوژی"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-green-500/80 flex items-center justify-center">
              <div className="text-center text-white">
                <Brain className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">هوش مصنوعی در خدمت الکترونیک</h2>
                <p className="text-lg opacity-90">تکنولوژی پیشرفته برای مشاوره تخصصی</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <stat.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">ماموریت ما</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              هدف ما ساده‌سازی فرآیند انتخاب قطعات الکترونیکی برای مهندسان، دانشجویان و علاقه‌مندان است. 
              با چت‌بات پیکستان، دیگر نیازی به جستجوی طولانی در کاتالوگ‌ها و دیتاشیت‌ها نیست.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              ما معتقدیم که دسترسی آسان به اطلاعات تخصصی، نوآوری را تسریع می‌کند و به رشد صنعت الکترونیک کمک می‌کند.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://noabargh.ir/img/upload/posts/%D8%B9%D9%84%D9%85-%D8%A7%D9%84%DA%A9%D8%AA%D8%B1%D9%88%D9%86%DB%8C%DA%A9-%D9%88-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF%D9%87%D8%A7%DB%8C-%D8%A2%D9%86.jpg"
              alt="برد مداری"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-6 text-white shadow-xl">
              <MessageCircle className="w-8 h-8 mb-2" />
              <div className="text-sm font-medium">مشاوره آنلاین</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">ارزش‌های ما</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">تکنولوژی پیشرفته</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 ml-4 mt-1">
                    <Brain className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">پردازش زبان طبیعی</h4>
                    <p className="text-gray-600 text-sm">درک دقیق سوالات فارسی و ارائه پاسخ‌های مناسب</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 ml-4 mt-1">
                    <Zap className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">یادگیری ماشین</h4>
                    <p className="text-gray-600 text-sm">بهبود مستمر پاسخ‌ها بر اساس تعاملات کاربران</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 ml-4 mt-1">
                    <Shield className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">پایگاه داده جامع</h4>
                    <p className="text-gray-600 text-sm">اطلاعات کامل هزاران قطعه الکترونیکی</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://tejaratnews.com/wp-content/uploads/2022/12/Virtual-Reality1-e1672488493513.webp"
                alt="تکنولوژی"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              آماده همکاری با پیکستان هستید؟
            </h3>
            <p className="text-lg mb-8 opacity-90">
              همین الان شروع کنید و تجربه مشاوره هوشمند را داشته باشید
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
  );
};

export default About;