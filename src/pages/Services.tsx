import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { 
      id: '01', 
      title: 'Корпоративное право', 
      category: 'companies',
      description: 'Полное юридическое сопровождение бизнеса от регистрации до реорганизации'
    },
    { 
      id: '02', 
      title: 'Слияния и поглощения', 
      category: 'companies',
      description: 'Профессиональная поддержка сделок M&A любой сложности'
    },
    { 
      id: '03', 
      title: 'Инвестиционное право', 
      category: 'companies',
      description: 'Юридическое сопровождение инвестиционных проектов и привлечения капитала'
    },
    { 
      id: '04', 
      title: 'Банковское право', 
      category: 'companies',
      description: 'Консультации по банковскому законодательству и финансовым операциям'
    },
    { 
      id: '05', 
      title: 'Трудовое право', 
      category: 'companies',
      description: 'Решение трудовых споров и кадровое консультирование'
    },
    { 
      id: '06', 
      title: 'Интеллектуальная собственность', 
      category: 'companies',
      description: 'Защита патентов, товарных знаков и авторских прав'
    },
    { 
      id: '07', 
      title: 'Налоговое консультирование', 
      category: 'companies',
      description: 'Налоговое планирование и представительство в спорах с ФНС'
    },
    { 
      id: '08', 
      title: 'Коммерческие споры', 
      category: 'companies',
      description: 'Арбитражные суды, переговоры, медиация и альтернативное разрешение споров'
    },
    { 
      id: '09', 
      title: 'Недвижимость', 
      category: 'companies',
      description: 'Сделки с коммерческой недвижимостью, девелопмент, аренда'
    },
    { 
      id: '10', 
      title: 'IT и телекоммуникации', 
      category: 'companies',
      description: 'Правовое регулирование цифровых технологий и телекоммуникационных услуг'
    },
    { 
      id: '11', 
      title: 'Антимонопольное право', 
      category: 'companies',
      description: 'Соблюдение конкурентного законодательства и защита от недобросовестной конкуренции'
    },
    { 
      id: '12', 
      title: 'Семейное право', 
      category: 'individuals',
      description: 'Развод, раздел имущества, алименты, споры о детях'
    },
    { 
      id: '13', 
      title: 'Уголовная защита', 
      category: 'individuals',
      description: 'Защита по уголовным делам на всех стадиях процесса'
    },
    { 
      id: '14', 
      title: 'Наследственное право', 
      category: 'individuals',
      description: 'Оформление наследства, составление завещаний, наследственные споры'
    }
  ];

  const companyServices = services.filter(s => s.category === 'companies');
  const individualServices = services.filter(s => s.category === 'individuals');

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
              <Link to="/services" className="text-primary font-medium">Услуги</Link>
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
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in-up">
              Наши услуги
            </h1>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
              Комплексная правовая поддержка для бизнеса и частных лиц. 
              Профессиональные решения с 20-летним опытом.
            </p>
          </div>
        </div>
      </section>

      {/* Services for Companies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Для компаний</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyServices.map((service, index) => (
                <Card key={service.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">
                        {service.id}
                      </div>
                      <Icon name="ArrowUpRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services for Individuals */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="User" size={24} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Для частных лиц</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individualServices.map((service, index) => (
                <Card key={service.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">
                        {service.id}
                      </div>
                      <Icon name="ArrowUpRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Нужна консультация по вашему вопросу?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Получите бесплатную консультацию от наших экспертов
            </p>
            <Link to="/contact-form">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                Получить консультацию
              </Button>
            </Link>
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