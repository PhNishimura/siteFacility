import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Building, Zap, Globe, Calendar, MapPin, ArrowRight, CheckCircle } from 'lucide-react'

const Cases = () => {
  const casesEnergia = [
    {
      nome: "UHE São Roque",
      cliente: "Engevix",
      capacidade: "141,9 MW",
      conclusao: "2022",
      tipo: "Usina Hidrelétrica"
    },
    {
      nome: "UHE Ijuí",
      cliente: "Alupar", 
      capacidade: "51 MW",
      conclusao: "2012",
      tipo: "Usina Hidrelétrica"
    },
    {
      nome: "UHE Foz do Rio Claro",
      cliente: "Alupar",
      capacidade: "68,4 MW", 
      conclusao: "2012",
      tipo: "Usina Hidrelétrica"
    },
    {
      nome: "EATE Transmission Line",
      cliente: "Alupar",
      capacidade: "1.200 MW",
      extensao: "924 km",
      conclusao: "2003",
      tipo: "Linha de Transmissão"
    },
    {
      nome: "Projeto de Iluminação Pública de SP",
      cliente: "Luzes Paulistanas",
      valor: "R$ 7,3 bilhões",
      prazo: "20 anos de contrato",
      tipo: "Infraestrutura Urbana"
    }
  ]

  const casesImobiliario = [
    {
      nome: "Allianz Parque",
      cliente: "WTorre",
      area: "190.000 m²",
      conclusao: "2016",
      tipo: "Arena Esportiva"
    },
    {
      nome: "Complexo Alto das Nações",
      cliente: "WTorre",
      area: "320.000 m²",
      fases: "Fase 1: 2022, Fase 2: 2025",
      tipo: "Complexo Comercial"
    },
    {
      nome: "Aeroporto de Santiago - Chile",
      cliente: "Vinci",
      escopo: "Fachada",
      conclusao: "2022",
      tipo: "Infraestrutura Aeroportuária"
    }
  ]

  const casesInternacional = [
    {
      nome: "Campo Pequeno - Portugal",
      cliente: "WTorre",
      valor: "€100 milhões",
      conclusao: "2006",
      tipo: "Desenvolvimento Imobiliário"
    }
  ]

  const faqItems = [
    {
      pergunta: "Como a Facility & Bond estrutura projetos complexos?",
      resposta: "Utilizamos nossa expertise de 30 anos para criar soluções sob medida, combinando diferentes coberturas e trabalhando de forma consultiva em todas as etapas do projeto."
    },
    {
      pergunta: "Qual o diferencial em projetos de grande porte?",
      resposta: "Nossa capacidade de estruturar coberturas personalizadas e nosso relacionamento próximo com seguradoras e resseguradoras nos permite viabilizar projetos complexos com as melhores condições."
    },
    {
      pergunta: "Vocês atuam em projetos internacionais?",
      resposta: "Sim, temos experiência em projetos internacionais e parcerias que nos permitem oferecer cobertura global para nossos clientes."
    },
    {
      pergunta: "Como é o acompanhamento durante a execução do projeto?",
      resposta: "Oferecemos acompanhamento estratégico em cada fase do projeto, desde a licitação até a entrada em operação, garantindo proteção contínua."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero: Cases de Sucesso */}
      <section className="bg-fb-blue-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-inter font-bold text-4xl md:text-6xl mb-6">
              Cases de Sucesso
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Transformamos riscos em oportunidades por meio de inteligência e precisão. Conheça alguns dos projetos que ajudamos a tirar do papel com segurança, estratégia e resultados.
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
                className="bg-white text-fb-blue-deep hover:bg-gray-100 font-inter font-semibold"
              >
                <Link to="/sobre-nos">Nossa História</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Energia & Infraestrutura */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-fb-blue-deep mr-3" />
              <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep">
                Energia & Infraestrutura
              </h2>
            </div>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Soluções especializadas para usinas hidrelétricas, linhas de transmissão e grandes projetos de infraestrutura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casesEnergia.map((projeto, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-2">
                      {projeto.nome}
                    </h3>
                    <p className="font-open-sans text-sm text-gray-600 mb-2">
                      Cliente: {projeto.cliente}
                    </p>
                    <span className="inline-block bg-fb-blue-deep/10 text-fb-blue-deep text-xs font-medium px-2 py-1 rounded">
                      {projeto.tipo}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    {projeto.capacidade && (
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-open-sans text-gray-600">
                          Capacidade: {projeto.capacidade}
                        </span>
                      </div>
                    )}
                    {projeto.extensao && (
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-open-sans text-gray-600">
                          Extensão: {projeto.extensao}
                        </span>
                      </div>
                    )}
                    {projeto.valor && (
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-open-sans text-gray-600">
                          Valor: {projeto.valor}
                        </span>
                      </div>
                    )}
                    {projeto.prazo && (
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-open-sans text-gray-600">
                          {projeto.prazo}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="font-open-sans text-gray-600">
                        Conclusão: {projeto.conclusao}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Imobiliário & Construção Civil */}
      <section className="py-16 bg-fb-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Building className="h-8 w-8 text-fb-blue-deep mr-3" />
              <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep">
                Imobiliário & Construção Civil
              </h2>
            </div>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Proteção para empreendimentos imobiliários, obras complexas e projetos de construção civil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casesImobiliario.map((projeto, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-2">
                      {projeto.nome}
                    </h3>
                    <p className="font-open-sans text-sm text-gray-600 mb-2">
                      Cliente: {projeto.cliente}
                    </p>
                    <span className="inline-block bg-fb-blue-deep/10 text-fb-blue-deep text-xs font-medium px-2 py-1 rounded">
                      {projeto.tipo}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    {projeto.area && (
                      <div className="flex items-center">
                        <Building className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-open-sans text-gray-600">
                          Área: {projeto.area}
                        </span>
                      </div>
                    )}
                    {projeto.escopo && (
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-open-sans text-gray-600">
                          Escopo: {projeto.escopo}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="font-open-sans text-gray-600">
                        {projeto.fases || `Conclusão: ${projeto.conclusao}`}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internacional & Tecnologia */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-fb-blue-deep mr-3" />
              <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep">
                Internacional & Tecnologia
              </h2>
            </div>
            <p className="font-open-sans text-lg text-gray-700 max-w-3xl mx-auto">
              Projetos internacionais e soluções tecnológicas que demonstram nossa capacidade global.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Projeto Internacional */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-2">
                    Campo Pequeno - Portugal
                  </h3>
                  <p className="font-open-sans text-sm text-gray-600 mb-2">
                    Cliente: WTorre
                  </p>
                  <span className="inline-block bg-fb-blue-deep/10 text-fb-blue-deep text-xs font-medium px-2 py-1 rounded">
                    Desenvolvimento Imobiliário
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="font-open-sans text-gray-600">
                      Valor: €100 milhões
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="font-open-sans text-gray-600">
                      Conclusão: 2006
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tecnologia */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-2">
                    Plataforma de Análise de Crédito Online
                  </h3>
                  <span className="inline-block bg-fb-blue-deep/10 text-fb-blue-deep text-xs font-medium px-2 py-1 rounded">
                    Tecnologia & Inovação
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="font-open-sans text-gray-600">
                      Redução no tempo de aprovação de garantias
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="font-open-sans text-gray-600">
                      Mais previsibilidade para investidores
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="font-open-sans text-gray-600">
                      Automação no monitoramento de riscos
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clientes (Validação) */}
      <section className="py-16 bg-fb-blue-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl mb-6">
              Nossos Clientes Fazem Parte Dessa História
            </h2>
            <p className="font-open-sans text-lg text-gray-200 max-w-3xl mx-auto">
              Projetos que ajudamos a tirar do papel, com segurança, estratégia e resultados.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {["Alupar", "WTorre", "Engevix", "Vinci", "Luzes Paulistanas"].map((cliente, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <p className="font-inter font-semibold text-white">
                    {cliente}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solicitar Cotação CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Seu projeto pode ser o próximo case de sucesso
            </h2>
            <p className="font-open-sans text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos estruturar uma solução personalizada para viabilizar seu projeto com segurança e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-semibold"
              >
                <Link to="/cotacao">Solicitar Cotação</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-fb-blue-deep text-fb-blue-deep hover:bg-fb-blue-deep hover:text-white font-inter font-semibold"
              >
                <a href="mailto:contato@facilitybond.com.br">Enviar E-mail</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-fb-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-fb-blue-deep mb-6">
              Perguntas Frequentes
            </h2>
            <p className="font-open-sans text-lg text-gray-700">
              Tire suas dúvidas sobre planejamento, estruturação e execução de projetos.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-lg text-fb-blue-deep mb-3">
                    {item.pergunta}
                  </h3>
                  <p className="font-open-sans text-gray-700">
                    {item.resposta}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-open-sans text-gray-600 mb-4">
              Tem um projeto em mente? Vamos conversar!
            </p>
            <Button 
              asChild
              className="bg-fb-blue-deep hover:bg-fb-blue-deep/90 text-white font-inter font-semibold"
            >
              <Link to="/cotacao">
                Falar com Especialista <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cases

