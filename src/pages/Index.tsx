import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">iLAB</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукты</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex">Связаться</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6">Центр когнитивных технологий "iLAB"</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Будущее реабилитации уже здесь
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Разрабатываем инновационные решения для людей с ОВЗ по зрению. Наши технологии помогают 
              незрячим и слабовидящим ориентироваться в пространстве и организовать свою жизнь максимально эффективно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="animate-scale-in">
                <Icon name="Rocket" className="w-5 h-5 mr-2" />
                Познакомиться с продуктами
              </Button>
              <Button variant="outline" size="lg" className="animate-scale-in">
                <Icon name="Users" className="w-5 h-5 mr-2" />
                О нашей команде
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши продукты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Инновационные технологии для независимой и полноценной жизни
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="animate-slide-up hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">Mobi</CardTitle>
                  <Icon name="Navigation" className="w-6 h-6 text-primary" />
                </div>
                <CardDescription className="text-lg">
                  Навигационное решение для пространственной ориентации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Эффективное решение, позволяющее незрячему или слабовидящему ориентироваться, 
                  перемещаться в пространстве, максимально эффективно организовать свою хозяйственно-бытовую жизнь.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Навигация</Badge>
                  <Badge variant="outline">Пространственная ориентация</Badge>
                  <Badge variant="outline">Бытовая помощь</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-up hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">3D Конструктор "Сириус"</CardTitle>
                  <Icon name="Box" className="w-6 h-6 text-primary" />
                </div>
                <CardDescription className="text-lg">
                  Методический 3D конструктор для обучения и развития
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Методический 3D конструктор для слепых и слабовидящих, разработанный специально 
                  для людей с ОВЗ по зрению. Помогает в обучении и развитии пространственного мышления.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">3D моделирование</Badge>
                  <Badge variant="outline">Образование</Badge>
                  <Badge variant="outline">Развитие</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эксперты в области когнитивных технологий и реабилитации
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center animate-fade-in">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Brain" className="w-10 h-10 text-primary" />
                </div>
                <CardTitle>Исследователи</CardTitle>
                <CardDescription>Когнитивные технологии</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Команда ученых, специализирующихся на разработке инновационных решений для людей с ОВЗ
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Code" className="w-10 h-10 text-accent" />
                </div>
                <CardTitle>Разработчики</CardTitle>
                <CardDescription>Программные решения</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  IT-специалисты, создающие доступные и интуитивные технологические продукты
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Heart" className="w-10 h-10 text-primary" />
                </div>
                <CardTitle>Специалисты</CardTitle>
                <CardDescription>Реабилитация и адаптация</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Эксперты по работе с людьми с нарушениями зрения и специалисты по реабилитации
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Готовы обсудить, как наши технологии могут помочь вам или вашей организации
            </p>
            
            <Card className="animate-scale-in">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="w-5 h-5 text-primary" />
                    <span>info@ilab.center</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="w-5 h-5 text-primary" />
                    <span>+7 (xxx) xxx-xx-xx</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="w-5 h-5 text-primary" />
                    <span>Москва, Россия</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Globe" className="w-5 h-5 text-primary" />
                    <span>ilab.center</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button size="lg" className="w-full md:w-auto">
                    <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                    Написать нам
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold">iLAB</span>
            </div>
            <p className="text-muted-foreground">
              Центр когнитивных технологий • Создаем будущее для людей с ОВЗ по зрению
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;