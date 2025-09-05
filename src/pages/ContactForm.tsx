import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    privacy: false
  });

  const services = [
    'Корпоративное право',
    'Слияния и поглощения',
    'Инвестиционное право',
    'Банковское право',
    'Трудовое право',
    'Интеллектуальная собственность',
    'Налоговое консультирование',
    'Коммерческие споры',
    'Недвижимость',
    'IT и телекоммуникации',
    'Антимонопольное право',
    'Семейное право',
    'Уголовная защита',
    'Наследственное право'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Симуляция отправки формы
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Сообщение отправлено!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      // Очистка формы
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        privacy: false
      });
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или свяжитесь с нами по телефону.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in-up">
              Написать нам
            </h1>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
              Получите бесплатную консультацию по вашему правовому вопросу. 
              Мы ответим в течение 30 минут в рабочее время.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Свяжитесь с нами удобным способом
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Главный офис</h3>
                    <p className="text-muted-foreground mb-2">
                      г. Москва, ул. Тверская, д. 15, стр. 1<br />
                      БЦ "Галерея Актер", этаж 12
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Пн-Пт: 9:00-19:00, Сб: 10:00-16:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Телефоны</h3>
                    <p className="text-muted-foreground">
                      +7 (495) 123-45-67 (многоканальный)<br />
                      +7 (495) 123-45-68 (для экстренных вопросов)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@astralegal.ru (общие вопросы)<br />
                      partners@astralegal.ru (для партнеров)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Мессенджеры</h3>
                    <p className="text-muted-foreground">
                      Telegram: @AstraLegalBot<br />
                      WhatsApp: +7 (495) 123-45-67
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground">Время ответа</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Мы отвечаем на все обращения в течение 30 минут в рабочее время. 
                  Для экстренных вопросов работает круглосуточная горячая линия.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="bg-white rounded-2xl border border-border p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Форма обратной связи
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Ваше имя *
                      </label>
                      <Input 
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Телефон
                      </label>
                      <Input 
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Компания
                    </label>
                    <Input 
                      placeholder="Название компании (необязательно)"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Интересующая услуга
                    </label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Сообщение *
                    </label>
                    <Textarea 
                      placeholder="Опишите ваш вопрос или ситуацию подробно..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="mt-1"
                      checked={formData.privacy}
                      onChange={(e) => handleInputChange('privacy', e.target.checked)}
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Согласен с обработкой персональных данных и{' '}
                      <a href="#" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </a>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={20} className="mr-2" />
                        Отправить сообщение
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 text-green-800">
                    <Icon name="Shield" size={16} />
                    <span className="text-sm font-medium">Конфиденциальность гарантирована</span>
                  </div>
                  <p className="text-xs text-green-700 mt-1">
                    Все ваши данные защищены и не передаются третьим лицам
                  </p>
                </div>
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