import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Target, CheckCircle, ArrowRight } from 'lucide-react'

const Home = () => {
  const segmentos = [
    {
      title: "Garantias e Fianças",
      description: "Proteção financeira para contratos e obrigações legais, incluindo seguro garantia para licitações e projetos complexos.",
      icon: Shield
    },
    {
      title: "Patrimônio e Operações", 
      description: "Cobertura para ativos e continuidade operacional das empresas, incluindo riscos de engenharia e responsabilidade civil.",
      icon: Target
    },
    {
      title: "Capital Humano",
      description: "Benefícios corporativos para segurança e bem-estar dos colaboradores, incluindo planos de saúde e previdência.",
      icon: Users
    },
    {
      title: "Riscos Especiais",
      description: "Coberturas para ameaças específicas e emergentes, como Cyber Risks, D&O e seguros ambientais.",
      icon: CheckCircle
    }
  ]

  const clientes = [
    "Alupar", "WTorre", "Engevix", "Vinci", "Luzes Paulistanas"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - "What" */}
      <section className="bg-fb-blue-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-inter font-bold text-4xl md:text-6xl mb-6">
              Superamos riscos.<br />
              Valorizamos projetos.<br />
              Garantimos negócios.
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-fb-gray-light">
              Acreditamos que cada patrimônio e projeto merece proteção personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-fb-blue-deep hover:bg-gray-100 font-inter font-semibold"
              >
                <Link to="/cotacao">Solicitar Cotação</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-fb-blue-deep bg-white hover:bg-fb-blue-deep hover:text-white font-inter font-semibold"
              >
                <Link to="/marcar-reuniao">Marcar Reunião</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Quem Somos + História */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Quem Somos
            </h2>
            <p className="font-open-sans text-lg text-fb-blue-deep max-w-4xl mx-auto mb-8">
              Com mais de três décadas de atuação no mercado, a Facility & Bond acumula experiência na estruturação de seguros estratégicos e personalizados para grandes projetos.
            </p>
            <Button 
              asChild
              variant="outline"
              className="border-fb-blue-deep text-fb-blue-deep hover:bg-fb-blue-deep hover:text-white font-inter font-semibold"
            >
              <Link to="/sobre-nos">
                Conheça Nossa História Completa <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Apresentação: Nossos Produtos */}
      <section className="py-16 bg-fb-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Nossos Produtos e Serviços
            </h2>
            <p className="font-open-sans text-lg text-fb-blue-deep max-w-3xl mx-auto">
              Oferecemos soluções completas em seguros corporativos, com foco em riscos complexos e atendimento personalizado para cada necessidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {segmentos.map((segmento, index) => {
              const IconComponent = segmento.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="bg-fb-blue-deep/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-fb-blue-deep" />
                      </div>
                      <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-3">
                        {segmento.title}
                      </h3>
                      <p className="font-open-sans text-gray-600 text-sm">
                        {segmento.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              className="bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-semibold"
            >
              <Link to="/segmentos">
                Ver Todos os Segmentos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Segmentos de Atuação */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Segmentos de Atuação
            </h2>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Concentramos nossa expertise em setores estratégicos do mercado de seguros, oferecendo soluções especializadas para cada área de atuação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-inter font-semibold text-xl text-fb-blue-deep mb-4">
                  Energia & Infraestrutura
                </h3>
                <p className="font-open-sans text-gray-600">
                  Soluções especializadas para usinas hidrelétricas, linhas de transmissão e grandes projetos de infraestrutura.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-inter font-semibold text-xl text-fb-blue-deep mb-4">
                  Imobiliário & Construção
                </h3>
                <p className="font-open-sans text-gray-600">
                  Proteção para empreendimentos imobiliários, obras complexas e projetos de construção civil.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-inter font-semibold text-xl text-fb-blue-deep mb-4">
                  Tecnologia & Inovação
                </h3>
                <p className="font-open-sans text-gray-600">
                  Coberturas especializadas para empresas de tecnologia, incluindo cyber risks e proteção digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - "Who" */}
      <section className="py-16 bg-fb-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
                Como atuamos com projetos
              </h2>
              <p className="font-open-sans text-lg text-fb-blue-deep mb-6">
                Trabalhamos de forma consultiva e personalizada. Com 30 anos de expertise, navegamos pelas complexidades do mercado segurador, criando soluções sob medida que combinam diferentes coberturas para atender necessidades específicas.
              </p>
              <p className="font-open-sans text-lg text-fb-blue-deep mb-8">
                Nossa abordagem vai além do papel tradicional de corretora para nos tornarmos verdadeiros parceiros estratégicos, construindo relacionamentos duradouros baseados em confiança mútua.
              </p>
              <Button 
                asChild
                className="bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-semibold"
              >
                <Link to="/cases">
                  Ver Cases de Sucesso <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-fb-gray-light p-8 rounded-lg">
              <div className="text-center">
                <div className="text-6xl font-inter font-bold text-fb-blue-deep mb-4">30</div>
                <p className="font-inter font-semibold text-xl text-fb-blue-deep mb-2">Anos de Experiência</p>
                <p className="font-open-sans text-gray-600">
                  Três décadas construindo pontes entre sonhos empresariais e sua realização segura
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Clientes (Validação) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Nossos Clientes
            </h2>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Empresas que confiam em nossa expertise para proteger seus projetos mais importantes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md h-24 flex items-center justify-center">
                <img src="/src/assets/clientes/image6.png" alt="Alupar" className="max-h-16 max-w-full object-contain" />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md h-24 flex items-center justify-center">
                <img src="/src/assets/clientes/image8.png" alt="WTorre" className="max-h-16 max-w-full object-contain" />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md h-24 flex items-center justify-center">
                <img src="/src/assets/clientes/image10.png" alt="Engevix" className="max-h-16 max-w-full object-contain" />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md h-24 flex items-center justify-center">
                <img src="/src/assets/clientes/image12.png" alt="Vinci" className="max-h-16 max-w-full object-contain" />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md h-24 flex items-center justify-center">
                <img src="/src/assets/clientes/image14.png" alt="Luzes Paulistanas" className="max-h-16 max-w-full object-contain" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              variant="outline"
              className="border-fb-blue-deep text-fb-blue-deep hover:bg-fb-blue-deep hover:text-white font-inter font-semibold"
            >
              <Link to="/cases">
                Ver Cases de Sucesso <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Entre em Contato */}
      <section className="py-16 bg-fb-blue-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
              Pronto para proteger seu projeto?
            </h2>
            <p className="font-open-sans text-lg mb-8 max-w-3xl mx-auto text-gray-200">
              Entre em contato conosco e descubra como podemos criar uma solução personalizada para suas necessidades de proteção empresarial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-fb-blue-deep hover:bg-gray-100 font-inter font-semibold"
              >
                <Link to="/cotacao">Solicitar Cotação</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

