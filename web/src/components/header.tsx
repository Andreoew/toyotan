import { BadgeInfo, Car, Home, LucidePhoneCall, Wrench } from 'lucide-react'

import { Navlink } from './nav-link'
import { ThemToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

interface HeaderProps {
  onContactClick: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Car  />

        <Separator orientation="vertical" className="h-10" />

        <nav className="flex flex-1 items-center justify-end space-x-4 lg:space-x-6">
          <Navlink to="/">
            <Home  />
            <span className='md:text-2xl'>Início</span>
          </Navlink>
          <Navlink to="/services">
            <Wrench  />
            <span className='md:text-2xl'>Serviços</span>            
          </Navlink>         
          <Navlink to="/about">
            <BadgeInfo  />
            <span className='md:text-2xl'>Sobre</span> 
          </Navlink>
          <Navlink to="/contact" onClick={onContactClick}>
            <LucidePhoneCall  />
            <span className='md:text-2xl'>Contato</span>            
          </Navlink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemToggle />
        </div>
      </div>
    </div>
  )
}
