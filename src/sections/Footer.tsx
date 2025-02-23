import HerdeiLogo from '../assets/HerdeiLogo.png'

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pl-16 pl-3 mb-8 md:mb-4">
            <div className="pr-8">
              <div className="flex items-center mb-2">
                <img
                  src={HerdeiLogo}
                  alt="Herdei Logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="font-bold text-xl">Herdei</span>
              </div>
              <p className="text-gray-600 md:w-1/2">
                Criada para transformar a forma como as famílias lidam com
                heranças e sucessões. 🩵
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-4">
            <div className="px-4">
              <h3 className="font-bold text-lg mb-4">Links úteis</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://euherdei.com.br/politica-privacidade"
                    className="text-gray-600 hover:text-gray-900 underline"
                  >
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="https://euherdei.com.br/termos-de-uso"
                    className="text-gray-600 hover:text-gray-900 underline"
                  >
                    Termos de uso
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5511941062025&text=Quero+falar+com+um+Especialista&type=phone_number&app_absent=0"
                    className="text-gray-600 hover:text-gray-900 underline"
                  >
                    Fale conosco
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-4">
            <div className="px-4">
              <h3 className="font-bold text-lg mb-4">Redes sociais</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.instagram.com/euherdei"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900 underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/euherdei"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900 underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/euherdei"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900 underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom text div */}
        <div className="text-center pt-15">
          <p className="text-gray-600 text-sm">
            © 2025 Herdei. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
