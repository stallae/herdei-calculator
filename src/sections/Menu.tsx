import HerdeiLogo from '../assets/HerdeiLogo.png'
import RoundedButton from '../components/RoundedButton'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { scrollToComponent } from '../utils/scrollUtils'
import { useNavigate } from 'react-router-dom'
import { handleCalculateClick } from '../utils/navigation'

const Menu = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (id) {
      e.preventDefault()
      scrollToComponent(id)
    }
  }

  return (
    <header className="bg-white w-full border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={HerdeiLogo} alt="Herdei Logo" className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">Herdei</span>
          </div>

          <nav className="hidden md:flex items-center space-x-5 w-1/2">
            <a
              href="https://euherdei.com.br/"
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#como-funciona"
              onClick={(e) => handleNavClick(e, 'como-funciona')}
              className="text-gray-600 hover:text-gray-900"
            >
              Como Funciona
            </a>
            <a
              href="#simulador"
              onClick={(e) => handleNavClick(e, 'simulador')}
              className="text-gray-600 hover:text-gray-900"
            >
              Simulador
            </a>
            <a
              href="https://euherdei.com.br/sobre-nos"
              className="text-gray-600 hover:text-gray-900"
            >
              Sobre
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5511941062025&text=Quero+falar+com+um+Especialista&type=phone_number&app_absent=0"
              className="text-gray-600 hover:text-gray-900"
            >
              Contato
            </a>
          </nav>

          <div className="hidden md:flex justify-end w-1/4">
            <RoundedButton
              text="Simular agora"
              onClick={() => scrollToComponent('simulador', navigate)}
            />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="py-2 px-4 bg-[#ABE0F3] rounded-full"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 w-full">
              <a
                href="/"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#como-funciona"
                onClick={(e) => handleNavClick(e, 'como-funciona')}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Como Funciona
              </a>
              <a
                href="#simulador"
                onClick={(e) => handleNavClick(e, 'simulador')}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Simulador
              </a>
              <a
                href="https://herdei.com.br/sobre"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Sobre
              </a>
              <a
                href="https://herdei.com.br/contato"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Contato
              </a>
              <div className="px-3 py-2 w-full">
                <RoundedButton
                  text="Simular agora"
                  onClick={() => scrollToComponent('simulador', navigate)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Menu
