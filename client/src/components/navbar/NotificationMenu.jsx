import { FiBell as Bell } from 'react-icons/fi'
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { Badge, IconButton, Typography } from '@material-tailwind/react'

/* Menu that is displayed when user clicks on bell icon */

export function NotificationMenu() {
    return (
        <Menu
            animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
            }}
            placement='bottom-end'
        >
            <Badge color='green' overlap='circular'>
                <MenuHandler>
                    <IconButton 
                        size='sm'
                        ripple={true} 
                        variant='text' 
                        className='rounded-full hover:bg-gray-800 text-off-white'
                    >
                        <Bell />
                    </IconButton>
                </MenuHandler>
            </Badge>
            <MenuList className='flex flex-col gap-2 bg-rich-black text-off-white'>
                <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <div className="flex flex-col gap-1">
                        <span className="font-main font-semibold">Your daily challenges
                        have been reset</span>
                        <Typography
                            variant="small"
                            className="flex items-center gap-1 text-xs font-main"
                        >   
                            Make sure to complete them
                        </Typography>
                    </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <div className="flex flex-col gap-1">
                        <span className='font-main font-semibold'>Your monthly budget for 
                        'Food' has reached 90% </span>
                        <Typography
                            variant="small"
                            className="flex items-center gap-1 text-xs font-main"
                        >
                            Save now
                        </Typography>
                    </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <div className="flex flex-col gap-1">
                        <span className="font-main font-semibold">Redeem rewards with
                        the coins you've earned!</span>
                        <Typography
                            variant="small"
                            className="flex items-center gap-1 text-xs font-main"
                        >
                            Explore our offerings
                        </Typography>
                    </div>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}