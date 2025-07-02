import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Target, Users, ArrowRight, CheckCircle } from 'lucide-react'

const SobreNos = () => {
  const pilares = [
    {
      title: "Expertise Visionária",
      description: "Nossa profunda compreensão técnica, combinada com 30 anos de experiência no mercado, nos permite enxergar oportunidades e riscos onde outros veem apenas complexidade.",
      icon: Target
    },
    {
      title: "Proteção Personalizada", 
      description: "Mergulhamos profundamente no universo de cada cliente para criar soluções verdadeiramente sob medida, garantindo que nossos clientes tenham exatamente a proteção que precisam.",
      icon: Shield
    },
    {
      title: "Parceria Transformadora",
      description: "Vamos além do papel tradicional de corretora para nos tornarmos verdadeiros parceiros estratégicos, construindo relacionamentos duradouros baseados em confiança mútua.",
      icon: Users
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero: Segmentos de Atuação */}
      <section className="bg-fb-blue-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-inter font-bold text-4xl md:text-5xl mb-6">
                Como atuamos nas diferentes áreas
              </h1>
              <p className="font-open-sans text-xl mb-6 text-gray-200">
                Nossa atuação abrange desde programas completos de benefícios e soluções para grandes riscos até estruturações sofisticadas de seguro garantia para projetos complexos, sempre com uma abordagem personalizada.
              </p>
              <p className="font-open-sans text-lg text-gray-300">
                Somos reconhecidos por clientes, seguradoras e resseguradoras pela capacidade de criar soluções que atendem precisamente às necessidades de todas as partes envolvidas.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-center">
                <h2 className="font-inter font-bold text-2xl mb-4">Nosso Diferencial</h2>
                <p className="font-open-sans text-gray-200">
                  Nos posicionamos como uma corretora de seguros boutique, referência em soluções personalizadas para riscos complexos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* História + Posicionamento */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Nossa História
            </h2>
            <p className="font-open-sans text-lg text-gray-700 max-w-4xl mx-auto">
              Há três décadas, construímos pontes entre sonhos empresariais e sua realização segura, transformando complexidade em clareza, riscos em oportunidades.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-fb-gray-light p-6 rounded-lg">
                <div className="text-4xl font-inter font-bold text-fb-blue-deep mb-2">1995</div>
                <p className="font-open-sans text-gray-600">Fundação da empresa</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-fb-gray-light p-6 rounded-lg">
                <div className="text-4xl font-inter font-bold text-fb-blue-deep mb-2">2015</div>
                <p className="font-open-sans text-gray-600">Expansão e consolidação</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-fb-gray-light p-6 rounded-lg">
                <div className="text-4xl font-inter font-bold text-fb-blue-deep mb-2">2025</div>
                <p className="font-open-sans text-gray-600">30 anos de excelência</p>
              </div>
            </div>
          </div>

          <div className="bg-fb-gray-light p-8 rounded-lg">
            <p className="font-open-sans text-lg text-gray-700 mb-6">
              Com mais de três décadas de atuação no mercado, a Facility & Bond acumula experiência na estruturação de seguros estratégicos e personalizados para grandes projetos. Construímos relações duradouras com empresas que compartilham nossa visão de excelência, solidez e inovação em proteção de riscos complexos.
            </p>
            <p className="font-open-sans text-lg text-gray-700">
              Nossa expertise não está apenas em intermediar seguros, mas em desenhar proteções tão únicas quanto os projetos que salvaguardamos. Mergulhamos profundamente no universo de cada cliente para emergir com soluções que transcendem o convencional.
            </p>
          </div>
        </div>
      </section>

      {/* Posicionamento (Why) */}
      <section className="py-16 bg-fb-blue-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
              Nosso Propósito
            </h2>
            <p className="font-open-sans text-xl text-gray-200 max-w-4xl mx-auto">
              Acreditamos que cada patrimônio e projeto merece proteção personalizada. Somos o elo que garante tranquilidade aos nossos clientes, permitindo a realização de projetos ambiciosos com segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pilares.map((pilar, index) => {
              const IconComponent = pilar.icon
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-inter font-semibold text-xl text-white mb-4">
                      {pilar.title}
                    </h3>
                    <p className="font-open-sans text-gray-200">
                      {pilar.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Institucional - Manifesto */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Manifesto
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="font-open-sans text-lg text-gray-700 mb-6">
                Há três décadas, construímos pontes entre sonhos empresariais e sua realização segura, transformando complexidade em clareza, riscos em oportunidades. Nossa expertise não está apenas em intermediar seguros, mas em desenhar proteções tão únicas quanto os projetos que salvaguardamos.
              </p>
              <p className="font-open-sans text-lg text-gray-700 mb-6">
                Mergulhamos profundamente no universo de cada cliente para emergir com soluções que transcendem o convencional. Acreditamos que cada patrimônio carrega uma história singular e cada projeto empresarial merece uma proteção que respeite sua essência.
              </p>
              <p className="font-open-sans text-lg text-gray-700 mb-8">
                Por isso, combinamos tradição com inovação, conhecimento técnico com visão estratégica, solidez com agilidade.
              </p>
              
              <div className="bg-fb-blue-deep text-white p-8 rounded-lg">
                <h3 className="font-inter font-bold text-2xl mb-4">
                  Somos parceiros na jornada de quem ousa realizar.
                </h3>
                <p className="font-open-sans text-lg text-gray-200">
                  Nossa missão é garantir que os projetos mais ambiciosos encontrem o caminho da concretização, protegidos por estruturas tão robustas quanto flexíveis. Porque entendemos que a verdadeira segurança não está em evitar riscos, mas em gerenciá-los com inteligência e precisão.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              asChild
              className="bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-semibold"
            >
              <Link to="/cotacao">
                Conheça Nossas Soluções <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default SobreNos

