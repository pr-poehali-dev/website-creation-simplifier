import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Index() {
  const [yearsCount, setYearsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Параллакс эффект
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setParallaxOffset(scrolled * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Анимированные счетчики
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
          
          // Анимация счетчика лет
          const yearsTarget = 20;
          let yearsStart = 0;
          const yearsIncrement = yearsTarget / 50;
          const yearsTimer = setInterval(() => {
            yearsStart += yearsIncrement;
            if (yearsStart >= yearsTarget) {
              setYearsCount(yearsTarget);
              clearInterval(yearsTimer);
            } else {
              setYearsCount(Math.ceil(yearsStart));
            }
          }, 30);
          
          // Анимация счетчика опыта
          const expTarget = 15;
          let expStart = 0;
          const expIncrement = expTarget / 50;
          const expTimer = setInterval(() => {
            expStart += expIncrement;
            if (expStart >= expTarget) {
              setExperienceCount(expTarget);
              clearInterval(expTimer);
            } else {
              setExperienceCount(Math.ceil(expStart));
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsVisible]);
  const services = [
    { id: '01', title: 'Корпоративное право', category: 'companies' },
    { id: '02', title: 'Слияния и поглощения', category: 'companies' },
    { id: '03', title: 'Инвестиционное право', category: 'companies' },
    { id: '04', title: 'Банковское право', category: 'companies' },
    { id: '05', title: 'Трудовое право', category: 'companies' },
    { id: '06', title: 'Интеллектуальная собственность', category: 'companies' },
    { id: '07', title: 'Налоговое консультирование', category: 'companies' },
    { id: '08', title: 'Коммерческие споры', category: 'companies' },
    { id: '09', title: 'Недвижимость', category: 'companies' },
    { id: '10', title: 'IT и телекоммуникации', category: 'companies' },
    { id: '11', title: 'Антимонопольное право', category: 'companies' },
    { id: '12', title: 'Семейное право', category: 'individuals' },
    { id: '13', title: 'Уголовная защита', category: 'individuals' },
    { id: '14', title: 'Наследственное право', category: 'individuals' }
  ];

  const companyServices = services.filter(s => s.category === 'companies');
  const individualServices = services.filter(s => s.category === 'individuals');

  const advantages = [
    {
      title: 'Опыт высшего уровня',
      description: 'Более 20 лет успешной практики в сфере права, сотни выигранных дел'
    },
    {
      title: 'Бизнес-фокус',
      description: 'Понимаем специфику бизнеса клиентов и предлагаем коммерчески обоснованные решения'
    },
    {
      title: 'Решения, ориентированные на клиента',
      description: 'Индивидуальный подход к каждому делу, учитываем все особенности ситуации'
    },
    {
      title: 'Гибкость и экономичность',
      description: 'Оптимальные тарифы, прозрачная система оплаты, различные форматы сотрудничества'
    },
    {
      title: 'Коллективный подход',
      description: 'Команда экспертов работает над вашим делом, объединяя опыт различных практик'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-foreground">
              ASTRA LEGAL
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">Услуги</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">О нас</Link>
              <Link to="/team" className="text-foreground hover:text-primary transition-colors">Команда</Link>
              <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</Link>
            </nav>
            <Link to="/contact-form">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Написать нам
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/98d6f1c7-f23b-4465-83b4-61cec10c0ab5.jpg" 
            alt="Legal office background"
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${parallaxOffset}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Юридические решения
            <span className="block text-primary">нового уровня</span>
            для вашего бизнеса
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Профессиональная правовая поддержка компаний и частных лиц
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link to="/contact-form">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                Получить консультацию
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg">
                Наши услуги
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      {/* Statistics */}
      <section ref={statsRef} className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4 animate-count-up">
                {yearsCount}
              </div>
              <div className="text-xl text-muted-foreground">лет успешной практики</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4 animate-count-up">
                {experienceCount}
              </div>
              <div className="text-xl text-muted-foreground">лет средний опыт юриста</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Комплексная правовая поддержка для бизнеса и частных лиц
            </p>
          </div>

          {/* For Companies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Для компаний</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {companyServices.map((service, index) => (
                <Card key={service.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="text-primary text-sm font-semibold mb-2">{service.id}</div>
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* For Individuals */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Для физических лиц</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {individualServices.map((service, index) => (
                <Card key={service.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="text-primary text-sm font-semibold mb-2">{service.id}</div>
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Почему выбирают нас</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircle" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Написать нам</h2>
              <p className="text-xl text-muted-foreground">
                Получите бесплатную консультацию по вашему вопросу
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Адрес офиса</h4>
                    <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15, стр. 1</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground">info@astralegal.ru</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg border border-border p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ваше имя
                    </label>
                    <Input placeholder="Введите ваше имя" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Сообщение
                    </label>
                    <Textarea 
                      placeholder="Опишите ваш вопрос или ситуацию..."
                      rows={5}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" className="mt-1" />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Согласен с обработкой персональных данных и 
                      <a href="#" className="text-primary hover:underline"> политикой конфиденциальности</a>
                    </label>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">ASTRA LEGAL</div>
              <p className="text-gray-300 mb-4">
                Профессиональные юридические услуги для бизнеса и частных лиц
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@astralegal.ru</p>
                <p>г. Москва, ул. Тверская, д. 15</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-colors">
                  <Icon name="MessageCircle" size={20} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-colors">
                  <Icon name="Mail" size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ASTRA LEGAL. Все права защищены.</p>
            <p className="mt-2">
              Website by <span className="text-primary">AVA DIGITAL</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}