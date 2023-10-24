import { List, ListItem, ListItemPrefix } from "@material-tailwind/react"
import { FiTag as Tag, FiHome as Home } from 'react-icons/fi' 
import { TbCategory as Category, TbDeviceDesktopAnalytics as Analytics } from 'react-icons/tb'
import { BsListTask as Challenge } from 'react-icons/bs'
import { Link } from "react-router-dom"
import { GiReceiveMoney as AppLogo } from 'react-icons/gi'


export function Sidebar() { 
    return(
            <div
                className="w-full h-[100vh] max-w-[20rem] p-1    
                shadow-sm shadow-off-white bg-navy-blue
                ease-in-out duration-200 text-lg text-emerald 
                rounded-none sticky top-0 left-0" 
            >
                <div className="flex items-center gap-4 mb-2 p-4 text-3xl 
                font-appname font-extrabold ">  
                    <AppLogo className="pb-1"/>
                    <div>
                        Pennywise
                    </div>
                </div>
                <List className="text-emerald">
                    <Link to='/home'>
                        <ListItem 
                            className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white h-14 mb-2 
                            font-main font-semibold"
                        >
                            <ListItemPrefix>
                                <Home />
                            </ListItemPrefix>
                            Home
                        </ListItem>
                    </Link>
                    <Link to='/budgets'>
                        <ListItem 
                            className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white h-14 mb-2 
                            font-main font-semibold"  
                        >
                            <ListItemPrefix>
                                <Category />
                            </ListItemPrefix>
                            Budgets
                        </ListItem>
                    </Link>
                    <Link to='/challenges'>
                        <ListItem 
                            className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white h-14 mb-2 
                            font-main font-semibold" 
                        >
                            <ListItemPrefix>
                                <Challenge />
                            </ListItemPrefix>
                            Challenges
                        </ListItem>
                    </Link>
                    <Link to='/analytics'>
                        <ListItem 
                            className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white h-14 mb-2 
                            font-main font-semibold" 
                        >
                            <ListItemPrefix>
                                <Analytics />
                            </ListItemPrefix>
                            Analytics
                        </ListItem>
                    </Link>
                    <Link to='/rewards'>
                        <ListItem 
                            className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white h-14 mb-2 
                            font-main font-semibold" 
                        >
                            <ListItemPrefix>
                                <Tag />
                            </ListItemPrefix>
                            Rewards
                        </ListItem>
                    </Link>
                </List>
            </div>
    )
}