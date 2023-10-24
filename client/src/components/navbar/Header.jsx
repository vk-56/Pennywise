import { FiSearch as Search } from 'react-icons/fi'
import { FiMenu as Menu } from 'react-icons/fi'
import { IconContext } from 'react-icons'

import { IconButton } from '@material-tailwind/react'
import { NotificationMenu } from './NotificationMenu'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { Profile } from './Profile'

export function Header() {

    const { isMounted, setIsMounted } = useContext(AppContext) 

    return (
        <IconContext.Provider value={{ size: '1.3rem' }}>
            <header 
                className="text-off-white h-14 bg-rich-black px-6 py-2
                flex justify-between items-center"
            >
                <IconButton 
                    size='sm'
                    ripple={true} 
                    variant='text' 
                    className='rounded-full hover:bg-gray-800 text-off-white mt-2'
                    onClick={ () => setIsMounted(!isMounted)}
                >
                    <Menu />
                </IconButton>
                <nav className='flex gap-3 justify-center items-center mt-2'>
                    <NotificationMenu />
                    <IconButton 
                            size='sm'
                            ripple={true} 
                            variant='text' 
                            className='rounded-full hover:bg-gray-800 text-off-white'
                    >
                        <Search />
                    </IconButton>
                    <Profile />
                </nav>
            </header>
        </IconContext.Provider>
    )
}