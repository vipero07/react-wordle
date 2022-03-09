import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  MenuIcon
} from '@heroicons/react/outline'
import { useState } from 'react'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
        <div className='flex'>
          <MenuIcon className='h-6 w-6 mr-3 cursor-pointer dark:stroke-white' onClick={() => setHamburgerOpen(val => !val)} />
          <InformationCircleIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
        </div>
        <p className="text-xl ml-2.5 font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
      {hamburgerOpen && <ol className="absolute left-0 top-12 p-4 gap-4 flex flex-col">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>}
    </div>
  )
}
