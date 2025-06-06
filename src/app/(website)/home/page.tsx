import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Header/Navigation */}
      <header className="bg-[#222222] border-b border-[#333333]">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/images/primallia-logo.png" alt="Primallia" width={120} height={30} className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm text-gray-300 hover:text-lime-400">
              Inicio
            </Link>
            <Link href="/oportunidades" className="text-sm text-gray-300 hover:text-lime-400">
              Oportunidades
            </Link>
            <Link href="/nosotros" className="text-sm text-gray-300 hover:text-lime-400">
              Nosotros
            </Link>
            <Link href="/preguntas-frecuentes" className="text-sm text-gray-300 hover:text-lime-400">
              Preguntas Frecuentes
            </Link>
            <Link href="/contacto" className="text-sm text-gray-300 hover:text-lime-400">
              Contacto
            </Link>
          </nav>
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-medium rounded-md text-sm px-4 py-2">
            Acceder
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Invierte con la <br />
              tribu desde <br />
              <span className="text-lime-500">$100 dólares</span>
            </h1>
            <p className="text-gray-300">Tu patrimonio crece junto a otros, en proyectos de alta rentabilidad.</p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-lime-500 hover:bg-lime-600 text-black font-medium rounded-md px-6 py-2.5">
                Comenzar ahora
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 rounded-md px-6 py-2.5"
              >
                ¿Cómo funciona?
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero-image.jpg"
              alt="Inversión tribal"
              width={500}
              height={400}
              className="rounded-xl object-cover"
            />
            <div className="absolute top-1/4 -left-4 bg-[#222222] p-3 rounded-lg border border-[#333333] shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-lime-500"></div>
                <span className="text-xs">Proyecto</span>
              </div>
              <p className="text-sm font-medium mt-1">Edificio Buenaventura Santiago</p>
            </div>
            <div className="absolute bottom-1/4 -right-4 bg-[#222222] p-3 rounded-lg border border-[#333333] shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-lime-500"></div>
                <span className="text-xs">Proyecto</span>
              </div>
              <p className="text-sm font-medium mt-1">Lotes Cumbres de Chillán</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-lime-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              "el poder ancestral de la tribu,
              <br />
              aplicado al futuro de las inversiones."
            </h2>
            <p className="text-sm md:text-base">
              Invertir en propiedades, empresas y proyectos,
              <br />
              de forma inteligente y con valor.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Colaborar para transformar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/icon-tribe.png" alt="Únete a la tribu" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold mb-3">Únete a la tribu</h3>
              <p className="text-gray-400 text-sm">
                Te integramos a formar parte de la tribu digital que invierte de manera inteligente.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/icon-collective.png" alt="Fuerza colectiva" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold mb-3">Fuerza colectiva</h3>
              <p className="text-gray-400 text-sm">
                Cada inversión individual se integra con la de otros para generar más impacto.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/icon-impact.png" alt="Impacto real" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold mb-3">Impacto real</h3>
              <p className="text-gray-400 text-sm">
                Seleccionamos proyectos verificados con buen potencial de rendimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Proyectos con criterio colectivo,</h2>
          <p className="text-center text-gray-300 mb-12">y alta rentabilidad</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-[#222222] rounded-xl overflow-hidden border border-[#333333]">
              <div className="relative">
                <Image
                  src="/images/project-1.jpg"
                  alt="Equity Múltiple Renta Santiago"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-lime-500 text-black text-xs font-medium px-2 py-1 rounded">
                  Desarrollo
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Equity Múltiple Renta Santiago</h3>
                <p className="text-xs text-gray-400 mb-3">Termina en 41 días</p>
                <p className="text-xs text-gray-400 mb-2">Rentabilidad anual esperada</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-xl">17.3% al 21.3%</p>
                  <Button className="rounded-full bg-lime-500 hover:bg-lime-600 h-8 w-8 p-0 flex items-center justify-center">
                    <span className="text-black font-bold">+</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#222222] rounded-xl overflow-hidden border border-[#333333]">
              <div className="relative">
                <Image
                  src="/images/project-2.jpg"
                  alt="Edificio Buenaventura Santiago"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-lime-500 text-black text-xs font-medium px-2 py-1 rounded">
                  Vigente
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Edificio Buenaventura Santiago</h3>
                <p className="text-xs text-gray-400 mb-3">Termina en 5 días</p>
                <p className="text-xs text-gray-400 mb-2">Rentabilidad anual esperada</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-xl">12% al 16%</p>
                  <Button className="rounded-full bg-lime-500 hover:bg-lime-600 h-8 w-8 p-0 flex items-center justify-center">
                    <span className="text-black font-bold">+</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-[#222222] rounded-xl overflow-hidden border border-[#333333]">
              <div className="relative">
                <Image
                  src="/images/project-3.jpg"
                  alt="Lotes Cumbres de Chillán"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-lime-500 text-black text-xs font-medium px-2 py-1 rounded">
                  Desarrollo
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Lotes Cumbres de Chillán</h3>
                <p className="text-xs text-gray-400 mb-3">Termina en 28 días</p>
                <p className="text-xs text-gray-400 mb-2">Rentabilidad anual esperada</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-xl">25% al 28%</p>
                  <Button className="rounded-full bg-lime-500 hover:bg-lime-600 h-8 w-8 p-0 flex items-center justify-center">
                    <span className="text-black font-bold">+</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-lime-500 text-lime-500 hover:bg-lime-500/10 rounded-md px-6 py-2.5"
            >
              Ver todos los proyectos (10)
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 md:py-24 bg-[#222222]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">¿Cómo Funciona?</h2>
          <p className="text-center text-gray-300 mb-12">¿Cómo comienzo a invertir en un proyecto?</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-lime-500 rounded-xl p-6 text-black text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image src="/images/icon-register.png" alt="Regístrate" width={50} height={50} />
                </div>
                <h3 className="font-bold mb-2">Regístrate en 2 minutos</h3>
                <p className="text-sm">Completa los datos de registro y comienza.</p>
              </div>
              {/* Dotted line connector */}
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-gray-600"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-lime-500 rounded-xl p-6 text-black text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image src="/images/icon-select.png" alt="Selecciona" width={50} height={50} />
                </div>
                <h3 className="font-bold mb-2">Selecciona tu proyecto</h3>
                <p className="text-sm">Revisa los proyectos y filtros.</p>
              </div>
              {/* Dotted line connector */}
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-gray-600"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-lime-500 rounded-xl p-6 text-black text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image src="/images/icon-invest.png" alt="Aporta" width={50} height={50} />
                </div>
                <h3 className="font-bold mb-2">Aporta desde $100</h3>
                <p className="text-sm">Transfiere de forma rápida y segura a través de nuestros canales.</p>
              </div>
              {/* Dotted line connector */}
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-gray-600"></div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="bg-lime-500 rounded-xl p-6 text-black text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image src="/images/icon-profit.png" alt="Recibe" width={50} height={50} />
                </div>
                <h3 className="font-bold mb-2">Recibe informes y rentabilidad</h3>
                <p className="text-sm">Seguimiento y retorno de acuerdo a los plazos establecidos.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-lime-500 text-lime-500 hover:bg-lime-500/10 rounded-md px-6 py-2.5"
            >
              Ver todos los proyectos (10)
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Nuestra tribu</h2>
          <p className="text-center text-gray-300 mb-12">Testimonios que inspiran</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-[#333333]">
              <p className="text-sm text-gray-300 mb-6">
                "Gracias a la plataforma de inversión de Primallia, he podido aportar de manera segura y rentable en
                proyectos reales. Las iniciativas disponibles son muy atractivas y la atención personalizada ha sido
                excepcional, fenomenal! Primallia a todos los que quieran participar en proyectos con impacto."
              </p>
              <div className="flex items-center gap-3">
                <Image src="/images/avatar-1.jpg" alt="Matías Rojas" width={40} height={40} className="rounded-full" />
                <div>
                  <p className="font-medium">Matías Rojas</p>
                  <p className="text-xs text-gray-400">Abogado</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-[#333333]">
              <p className="text-sm text-gray-300 mb-6">
                "Con Primallia encontré una forma innovadora y segura de participar en proyectos reales. Las
                oportunidades son diversas y la atención personalizada supera mis expectativas. Recomiendo a todos los
                que quieran invertir con confianza."
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/avatar-2.jpg"
                  alt="Catalina Navarro"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">Catalina Navarro</p>
                  <p className="text-xs text-gray-400">Ingeniera Civil Industrial</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-[#333333]">
              <p className="text-sm text-gray-300 mb-6">
                "Como inversionista novato, buscaba alternativas confiables y rentables. Primallia me permitió
                participar en proyectos reales de forma segura. La atención personalizada y los resultados han sido
                excepcionales. Gracias a Primallia, estoy diversificando mi portafolio de manera sólida en mis ahorros."
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/avatar-3.jpg"
                  alt="Joaquín Fernández"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">Joaquín Fernández</p>
                  <p className="text-xs text-gray-400">Médico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222222] py-12 border-t border-[#333333]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/primallia-logo.png"
                alt="Primallia"
                width={120}
                height={30}
                className="h-8 w-auto mb-4"
              />
              <p className="text-sm text-gray-400">Términos y condiciones</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lime-500 font-medium mb-4">Menú</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-sm text-gray-400 hover:text-lime-500">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/oportunidades" className="text-sm text-gray-400 hover:text-lime-500">
                      Oportunidades
                    </Link>
                  </li>
                  <li>
                    <Link href="/nosotros" className="text-sm text-gray-400 hover:text-lime-500">
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link href="/preguntas-frecuentes" className="text-sm text-gray-400 hover:text-lime-500">
                      Preguntas Frecuentes
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lime-500 font-medium mb-4">Contacto</h3>
                <p className="text-sm text-gray-400 mb-2">+569 99999999</p>
                <p className="text-sm text-gray-400 mb-4">contacto@primallia.com</p>
                <div className="flex space-x-3">
                  <Link href="#" className="text-gray-400 hover:text-lime-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-lime-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-lime-500">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-lime-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-lime-500">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
