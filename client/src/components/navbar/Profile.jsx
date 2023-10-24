import { 
    Menu, 
    MenuHandler, 
    MenuList, 
    MenuItem, 
    Button, 
    Avatar, 
    Typography
} from '@material-tailwind/react'
import maleProfile from '../../assets/maleProfile.jpeg'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useContext, useState } from 'react'
import { FaRegUserCircle as User } from 'react-icons/fa'
import { FaUserEdit as UserEdit } from 'react-icons/fa'
import { FiPower as PowerOff } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'

export function Profile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
    const closeMenu = () => setIsMenuOpen(false);

    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };

    const { setIsAuth } = useContext(AppContext)


    return (
        <Menu 
            open={isMenuOpen} 
            handler={setIsMenuOpen} 
            placement="bottom"
            animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
            }}
        >
            <MenuHandler>
                <Button
                    variant='text'
                    color="blue-gray"
                    className="flex items-center gap-2 rounded-full py-0.5 pr-2 pl-0.5 w-34 mx-6
                    text-off-white text-[11 px]"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        className="border border-gray-900 p-0.5"
                        src={maleProfile}
                    />
                    <div className='font-main font-semibold'>Hi, John!</div>
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                        isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className='flex flex-col gap-2 bg-rich-black text-off-white'>
                <MenuItem className='py-2 hover:bg-navy-blue'>
                    <Link to='/profile'>
                        <Typography 
                            variant='small' className='font-main font-semibold flex items-center gap-4'
                        >
                            <User />
                            My Profile
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem className='py-2'>
                    <Link to='/editprofile'>
                        <Typography 
                            variant='small' className='font-main font-semibold flex items-center gap-4'
                        >
                            <UserEdit className='h-5 w-5'/>
                            Edit Profile
                        </Typography>
                    </Link>
                </MenuItem> 
                <hr className="my-1" />
                <MenuItem className='py-2 text-red-600' onClick={() => setIsAuth(false)}>
                    <Typography 
                        variant='small' className='font-main font-semibold flex items-center gap-4'
                    >
                        <PowerOff />
                        Sign Out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
        
    )
}