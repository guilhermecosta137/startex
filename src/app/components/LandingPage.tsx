/**
 * Landing Page Component
 * 
 * Public marketing page for unauthenticated users.
 * Showcases features, pricing, and CTAs.
 */

import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Check, Zap, Shield, Users, BarChart, Clock, Github, Twitter, Rocket } from 'lucide-react';

interface LandingPageProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const features = [
  {
    icon: BarChart,
    title: 'Dashboard',
    description: 'Interface funcional para monitoramento e gestão de dados em tempo real',
    color: 'gray',
  },
  {
    icon: Users,
    title: 'Usuários & Permissões',
    description: 'Sistema de RBAC completo para controle granular de acessos',
    color: 'gray',
  },
  {
    icon: Shield,
    title: 'Workspaces',
    description: 'Arquitetura multi-tenant para isolamento e escalabilidade',
    color: 'gray',
  },
  {
    icon: Clock,
    title: 'Billing Ready',
    description: 'Estrutura preparada para integração com sistemas de cobrança',
    color: 'gray',
  },
  {
    icon: Github,
    title: 'Configurações',
    description: 'Painel administrativo para personalização e manutenção',
    color: 'gray',
  },
];



export function LandingPage({ onLoginClick, onSignupClick }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">StarteX</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={onLoginClick}>
              Log in
            </Button>
            <Button onClick={onSignupClick}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-block mb-6 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold border border-gray-200 dark:border-gray-700">
              SaaS Starter Pronto para Produção
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Dashboard Funcional, Autenticação Pronta, Multi-Tenant
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Entre em um SaaS real após o login: controle de permissões, workspaces, estrutura escalável e billing preparado. Construído para devs que constroem software sério.
            </p>
            <div className="flex gap-4 flex-wrap mb-8">
              <Button size="lg" onClick={onSignupClick} className="text-lg px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white">
                Ver SaaS por Dentro
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-gray-300 dark:border-gray-600 hover:border-gray-500" asChild>
                <a href="https://github.com/guilhermecosta137/startex" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Explorar Estrutura
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="text-lg px-8 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                Clonar Starter
              </Button>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative">
            <Card className="border border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">StarterX</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                  <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="flex gap-2">
                    <div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Micro-Proofs */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            Open-source
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            Supabase RLS
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            Arquitetura opinada
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            Pronto para produção
          </span>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Everything You Need to Build and Scale
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Skip the boilerplate and focus on what matters: your product
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${feature.color}-100 dark:bg-${feature.color}-900/20 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">{feature.title}</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>



      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gray-900 border-0 text-white">
          <CardContent className="py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Construir Software Sério?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Entre em um SaaS real com arquitetura sólida e funcionalidades prontas
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary" onClick={onSignupClick} className="text-lg px-8 bg-white text-gray-900 hover:bg-gray-100">
                Ver SaaS por Dentro
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="https://github.com/guilhermecosta137" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Clonar Starter
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">SaaS StarteX</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Production-ready SaaS boilerplate for developers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400">Features</a></li>
                <li><a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Conectar</h4>
              <div className="flex gap-3">
                <a href="https://github.com/guilhermecosta137" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2026 StarterX</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
