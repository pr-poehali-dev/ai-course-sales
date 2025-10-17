import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [levelFilter, setLevelFilter] = useState<string>('Все');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const courses = [
    {
      id: 1,
      title: 'Основы ИИ и Machine Learning',
      description: 'Погрузитесь в мир искусственного интеллекта с нуля',
      duration: '8 недель',
      level: 'Начальный',
      price: '24 900 ₽',
      image: 'https://cdn.poehali.dev/projects/70ee3644-6a3e-4e38-ae6b-05c3a0e0ac30/files/f63c1d09-8760-44d5-b9c2-7726f67faf29.jpg',
      demoUrl: 'https://youtube.com/watch?v=demo1'
    },
    {
      id: 2,
      title: 'ChatGPT и Prompt Engineering',
      description: 'Научитесь управлять нейросетями как профи',
      duration: '6 недель',
      level: 'Средний',
      price: '19 900 ₽',
      image: 'https://cdn.poehali.dev/projects/70ee3644-6a3e-4e38-ae6b-05c3a0e0ac30/files/f63c1d09-8760-44d5-b9c2-7726f67faf29.jpg',
      demoUrl: 'https://youtube.com/watch?v=demo2'
    },
    {
      id: 3,
      title: 'Deep Learning & Нейросети',
      description: 'Создавайте собственные нейронные сети',
      duration: '12 недель',
      level: 'Продвинутый',
      price: '39 900 ₽',
      image: 'https://cdn.poehali.dev/projects/70ee3644-6a3e-4e38-ae6b-05c3a0e0ac30/files/f63c1d09-8760-44d5-b9c2-7726f67faf29.jpg',
      demoUrl: 'https://youtube.com/watch?v=demo3'
    }
  ];

  const filteredCourses = levelFilter === 'Все' 
    ? courses 
    : courses.filter(course => course.level === levelFilter);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      <a href="#courses" className="hover:text-primary transition-colors" onClick={onClick}>Курсы</a>
      <a href="#teachers" className="hover:text-primary transition-colors" onClick={onClick}>Преподаватели</a>
      <a href="#reviews" className="hover:text-primary transition-colors" onClick={onClick}>Отзывы</a>
      <a href="#pricing" className="hover:text-primary transition-colors" onClick={onClick}>Тарифы</a>
      <a href="#faq" className="hover:text-primary transition-colors" onClick={onClick}>FAQ</a>
    </>
  );

  const teachers = [
    {
      name: 'Анна Петрова',
      role: 'AI Researcher',
      experience: '10+ лет в ИИ',
      image: 'https://cdn.poehali.dev/projects/70ee3644-6a3e-4e38-ae6b-05c3a0e0ac30/files/25cbc228-e41c-46b6-b4e6-749d4777256d.jpg'
    },
    {
      name: 'Дмитрий Соколов',
      role: 'ML Engineer',
      experience: '8+ лет в ML',
      image: 'https://cdn.poehali.dev/projects/70ee3644-6a3e-4e38-ae6b-05c3a0e0ac30/files/25cbc228-e41c-46b6-b4e6-749d4777256d.jpg'
    },
    {
      name: 'Мария Иванова',
      role: 'Data Scientist',
      experience: '12+ лет в DS',
      image: 'https://cdn.poehali.dev/projects/70ee3644-6a3e-4e38-ae6b-05c3a0e0ac30/files/25cbc228-e41c-46b6-b4e6-749d4777256d.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Алексей К.',
      text: 'Невероятный курс! За 2 месяца научился работать с нейросетями и получил повышение',
      rating: 5,
      course: 'ChatGPT Pro'
    },
    {
      name: 'Елена М.',
      text: 'Преподаватели — настоящие эксперты. Объясняют сложное простым языком',
      rating: 5,
      course: 'Основы ИИ'
    },
    {
      name: 'Сергей Б.',
      text: 'Лучшие инвестиции в образование! Уже запустил свой ИИ-проект',
      rating: 5,
      course: 'Deep Learning'
    }
  ];

  const pricing = [
    {
      name: 'Базовый',
      price: '9 900 ₽',
      features: ['1 курс', 'Доступ на 3 месяца', 'Сертификат', 'Чат поддержки']
    },
    {
      name: 'Профи',
      price: '24 900 ₽',
      features: ['3 курса', 'Доступ на 6 месяцев', 'Сертификат', 'Личный наставник', 'Проверка заданий']
    },
    {
      name: 'Эксперт',
      price: '49 900 ₽',
      features: ['Все курсы', 'Безлимитный доступ', 'Сертификат', 'Личный наставник', 'Карьерная консультация', 'Помощь с проектами']
    }
  ];

  const faq = [
    {
      question: 'Нужны ли знания программирования?',
      answer: 'Для начальных курсов не требуется опыт программирования. Мы обучаем с нуля.'
    },
    {
      question: 'Как проходит обучение?',
      answer: 'Видеоуроки + практические задания + живые вебинары с экспертами каждую неделю.'
    },
    {
      question: 'Выдаёте ли сертификат?',
      answer: 'Да, после успешного завершения курса вы получите официальный сертификат.'
    },
    {
      question: 'Можно ли учиться в своём темпе?',
      answer: 'Конечно! Все материалы доступны 24/7, учитесь когда удобно.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-30" />
      
      <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold neon-text">AI ACADEMY</h1>
          <div className="hidden md:flex items-center gap-6">
            <NavLinks />
            <Button className="neon-glow">Войти</Button>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-primary/20">
              <div className="flex flex-col gap-6 mt-8">
                <NavLinks onClick={() => setMobileMenuOpen(false)} />
                <Button className="neon-glow w-full">Войти</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/50">🚀 Новая эра обучения</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
              Освойте ИИ<br />
              <span className="text-primary">Измените будущее</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Нейронные сети в скором времени заменят людей в большинстве гуманитарных профессий. 
              Чем раньше вы познакомитесь с технологиями ИИ, тем быстрее адаптируетесь к будущему.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="neon-glow text-lg px-8">
                Начать обучение
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-lg px-8">
                Смотреть демо
                <Icon name="Play" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      </section>

      <section id="courses" className={`py-20 transition-all duration-700 ${visibleSections.has('courses') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/50">Наши курсы</Badge>
            <h2 className="text-4xl font-bold mb-4">Выберите свой путь</h2>
            <p className="text-muted-foreground">От новичка до эксперта ИИ</p>
          </div>
          <div className="flex justify-center mb-8">
            <Tabs value={levelFilter} onValueChange={setLevelFilter} className="w-auto">
              <TabsList className="bg-card/50 border border-primary/20">
                <TabsTrigger value="Все" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Все курсы</TabsTrigger>
                <TabsTrigger value="Начальный" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Начальный</TabsTrigger>
                <TabsTrigger value="Средний" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Средний</TabsTrigger>
                <TabsTrigger value="Продвинутый" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Продвинутый</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent/90 text-accent-foreground">{course.level}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Award" size={16} />
                      Сертификат
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">{course.price}</div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1" onClick={() => setSelectedCourse(course)}>
                        <Icon name="Play" className="mr-2" size={16} />
                        Демо-урок
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{course.title}</DialogTitle>
                        <DialogDescription>Посмотрите демо-урок перед покупкой</DialogDescription>
                      </DialogHeader>
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Icon name="Play" size={64} className="mx-auto mb-4 text-primary" />
                          <p className="text-muted-foreground">Видео демо-урока</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button className="flex-1 neon-glow">
                    Купить курс
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className={`py-20 bg-card/30 transition-all duration-700 ${visibleSections.has('teachers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">Эксперты</Badge>
            <h2 className="text-4xl font-bold mb-4">Наши преподаватели</h2>
            <p className="text-muted-foreground">Учитесь у лучших специалистов индустрии</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, idx) => (
              <Card key={idx} className="text-center hover:border-primary/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/30">
                    <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle>{teacher.name}</CardTitle>
                  <CardDescription className="text-primary">{teacher.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{teacher.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className={`py-20 transition-all duration-700 ${visibleSections.has('reviews') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Истории успеха</h2>
            <p className="text-muted-foreground">Что говорят наши студенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:border-secondary/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.course}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className={`py-20 bg-card/30 transition-all duration-700 ${visibleSections.has('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/50">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4">Выберите свой план</h2>
            <p className="text-muted-foreground">Гибкие цены для любого бюджета</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, idx) => (
              <Card key={idx} className={`${idx === 1 ? 'border-primary neon-glow scale-105' : ''} hover:border-primary/50 transition-all bg-card/50 backdrop-blur`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={idx === 1 ? 'default' : 'outline'}>
                    Выбрать план
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={`py-20 transition-all duration-700 ${visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground">Всё, что нужно знать перед стартом</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="text-left hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-border/40 py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 neon-text">AI ACADEMY</h3>
              <p className="text-muted-foreground">Образование будущего уже сегодня</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Основы ИИ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ChatGPT</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Deep Learning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@ai-academy.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (989) 509-18-25
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 AI Academy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;