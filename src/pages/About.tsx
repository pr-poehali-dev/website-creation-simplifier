import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: 'Scale',
      title: 'Профессионализм',
      description: 'Высочайший уровень юридической экспертизы, подтвержденный многолетней практикой'
    },
    {
      icon: 'Target',
      title: 'Результативность',
      description: 'Нацеленность на достижение конкретного результата для каждого клиента'
    },
    {
      icon: 'Shield',
      title: 'Надежность',
      description: 'Полная конфиденциальность и ответственность за качество предоставляемых услуг'
    },
    {
      icon: 'Users',
      title: 'Клиентоориентированность',
      description: 'Индивидуальный подход и понимание специфики бизнеса каждого клиента'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Довольных клиентов' },
    { number: '1200+', label: 'Успешных дел' },
    { number: '98%', label: 'Выигранных споров' },
    { number: '24/7', label: 'Поддержка клиентов' }
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
              <Link to="/about" className="text-primary font-medium">О нас</Link>
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
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in-up">
              О компании
            </h1>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
              ASTRA Legal — ведущая юридическая фирма с 20-летним опытом 
              предоставления комплексных правовых решений
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Наша история
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Основанная в 2004 году, ASTRA Legal начала свой путь как небольшая 
                  юридическая практика, специализирующаяся на корпоративном праве. 
                  За два десятилетия работы мы выросли в признанную юридическую фирму 
                  с командой из более чем 50 высококвалифицированных специалистов.
                </p>
                <p>
                  Сегодня мы обслуживаем клиентов от стартапов до крупных корпораций, 
                  предоставляя полный спектр юридических услуг. Наш опыт охватывает 
                  все основные отрасли права, что позволяет нам предлагать комплексные 
                  решения для самых сложных правовых задач.
                </p>
                <p>
                  Мы гордимся тем, что многие наши клиенты работают с нами на протяжении 
                  десятилетий, доверяя нам свои самые важные правовые вопросы.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Наши ценности</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Принципы, которыми мы руководствуемся в своей работе уже более 20 лет
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center animate-fade-in hover-scale" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={value.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              Наша миссия
            </h2>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Предоставлять клиентам высококачественные юридические услуги, 
                основанные на глубоком понимании их потребностей, инновационном 
                подходе к решению правовых задач и неизменном стремлении к 
                достижению наилучших результатов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Наши услуги
                  </Button>
                </Link>
                <Link to="/team">
                  <Button size="lg" variant="outline" className="px-8">
                    Познакомиться с командой
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">ASTRA LEGAL</div>
              <p className="text-gray-300 mb-4">
                Профессиональные юридические услуги для бизнеса и частных лиц
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Главная</Link>
                <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">Услуги</Link>
                <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">О нас</Link>
                <Link to="/team" className="block text-gray-300 hover:text-white transition-colors">Команда</Link>
              </div>
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