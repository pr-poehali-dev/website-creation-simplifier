import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Team() {
  const leadership = [
    {
      name: 'Анна Петрова',
      position: 'Управляющий партнер',
      experience: '20 лет опыта',
      specialization: 'Корпоративное право, M&A',
      education: 'МГУ им. М.В. Ломоносова, юридический факультет',
      achievements: ['Лучший юрист года по версии Legal Awards 2023', 'Член Ассоциации юристов России']
    },
    {
      name: 'Дмитрий Волков',
      position: 'Старший партнер',
      experience: '18 лет опыта',
      specialization: 'Арбитраж, коммерческие споры',
      education: 'МГЮА им. О.Е. Кутафина',
      achievements: ['Топ-100 арбитражных управляющих России', 'Медиатор высшей категории']
    },
    {
      name: 'Елена Соколова',
      position: 'Партнер',
      experience: '15 лет опыта',
      specialization: 'Налоговое право, финансовое регулирование',
      education: 'СПбГУ, юридический факультет',
      achievements: ['Эксперт по налоговому планированию', 'Автор 50+ публикаций по налоговому праву']
    }
  ];

  const departments = [
    {
      title: 'Корпоративное право',
      team: '8 юристов',
      leader: 'Анна Петрова',
      description: 'Специализируется на сопровождении бизнеса, сделках M&A и корпоративном управлении'
    },
    {
      title: 'Арбитражная практика',
      team: '6 юристов',
      leader: 'Дмитрий Волков',
      description: 'Ведение коммерческих споров в арбитражных судах всех инстанций'
    },
    {
      title: 'Налоговое консультирование',
      team: '5 юристов',
      leader: 'Елена Соколова',
      description: 'Налоговое планирование и защита интересов в спорах с налоговыми органами'
    },
    {
      title: 'Недвижимость и строительство',
      team: '4 юриста',
      leader: 'Михаил Краснов',
      description: 'Сделки с недвижимостью, девелопмент и строительное право'
    },
    {
      title: 'Интеллектуальная собственность',
      team: '3 юриста',
      leader: 'Ольга Белова',
      description: 'Защита патентов, товарных знаков и авторских прав'
    },
    {
      title: 'Трудовое право',
      team: '3 юриста',
      leader: 'Александр Федоров',
      description: 'Кадровое консультирование и разрешение трудовых споров'
    }
  ];

  const benefits = [
    {
      icon: 'GraduationCap',
      title: 'Профессиональное развитие',
      description: 'Непрерывное обучение, участие в конференциях, обмен опытом'
    },
    {
      icon: 'Heart',
      title: 'Социальный пакет',
      description: 'ДМС, корпоративные мероприятия, дополнительные отпуска'
    },
    {
      icon: 'TrendingUp',
      title: 'Карьерный рост',
      description: 'Четкая система продвижения от младшего юриста до партнера'
    },
    {
      icon: 'Briefcase',
      title: 'Интересные проекты',
      description: 'Работа с крупными клиентами, сложные и нестандартные задачи'
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
              <Link to="/team" className="text-primary font-medium">Команда</Link>
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
              Наша команда
            </h1>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
              Профессионалы с многолетним опытом, объединенные общими ценностями 
              и стремлением к достижению лучших результатов для клиентов
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Руководство</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Наши партнеры — признанные эксперты в области права с безупречной репутацией
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((person, index) => (
              <Card key={index} className="animate-fade-in hover-scale" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{person.name}</h3>
                    <div className="text-primary font-semibold mb-1">{person.position}</div>
                    <div className="text-sm text-muted-foreground mb-4">{person.experience}</div>
                    
                    <div className="text-left space-y-3">
                      <div>
                        <div className="font-semibold text-foreground text-sm mb-1">Специализация:</div>
                        <div className="text-sm text-muted-foreground">{person.specialization}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-foreground text-sm mb-1">Образование:</div>
                        <div className="text-sm text-muted-foreground">{person.education}</div>
                      </div>
                      
                      <div>
                        <div className="font-semibold text-foreground text-sm mb-1">Достижения:</div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {person.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Icon name="CheckCircle" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Практики</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Команды экспертов по ключевым направлениям права
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="animate-fade-in hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Users" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{dept.title}</h3>
                      <div className="text-sm text-muted-foreground">{dept.team}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-foreground mb-1">Руководитель:</div>
                    <div className="text-sm text-primary">{dept.leader}</div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dept.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Карьера в ASTRA Legal</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы всегда ищем талантливых юристов, готовых расти и развиваться вместе с нами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center animate-fade-in hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Заинтересованы в работе с нами?
              </h3>
              <p className="text-muted-foreground mb-8">
                Отправьте нам свое резюме и сопроводительное письмо
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact-form">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Отправить резюме
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="px-8">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать анкету
                </Button>
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