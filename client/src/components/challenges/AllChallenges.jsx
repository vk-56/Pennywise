import React from 'react'
import { GiAbstract020 as ChallengeIcon } from 'react-icons/gi'
import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Tabs,
    Chip,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel
} from "@material-tailwind/react";
import { challengesData } from './ChallengeData';

/* Parent Component for the Challenges Tab */

export function AllChallenges() {

    return(
        <main className="bg-rich-black text-off-white h-full 
        flex flex-col items-center justify-center gap-8">
            <Card 
                className='text-xl text-off-white p-10 bg-navy-blue
                transition-shadow duration-300 w-4/5 
                hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green'
            >
                Challenges are a fun and interactive way to supercharge 
                your financial journey. Whether you're a money-saving beginner or a seasoned
                finance pro, our challenges offer something for everyone. 
                Each challenge is designed to help you develop better money habits, achieve 
                your financial goals, and earn rewards in the form of coins.
            </Card>
            <Tabs value="dashboard" className='h-3/5 w-4/5'>
                <TabsHeader 
                    className='bg-transparent h-14'
                    indicatorProps={{
                        className: 'bg-off-white/20'
                    }}  
                >
                    {challengesData.map(({ label, value, icon }, index) => (
                    <Tab 
                        key={value} 
                        value={value}
                    >
                        <div className={`flex items-center gap-2 
                            font-main font-semibold 
                            ${index === 0 ? 'text-emerald' :
                            index === 1 ? 'text-yellow-400' :
                            index === 2 ? 'text-red-600' : 'text-off-white'}`}
                        >
                            {React.createElement(icon, { className: "w-6 h-6" })}
                            {label}
                        </div>
                    </Tab>
                    ))}
                </TabsHeader>

                <TabsBody 
                    className='h-full border-b border-emerald/30 rounded-md'
                >
                    {challengesData.map( ({ value, desc }) => (
                        <TabPanel 
                            key={value} 
                            value={value} 
                            className='text-off-white text-lg font-main font-normal'
                        >
                            <List className="my-5 font-display">
                                {/* Loop through easy,medium and hard challenges */}
                                {desc.map( ({ id, desc, coinValue }) => (
                                    <ListItem 
                                        key={id}
                                        className="hover:bg-gray-800 hover:text-emerald 
                                        text-off-white focus:bg-dark-green focus:text-off-white 
                                        h-16" 
                                    >
                                        <ListItemPrefix>
                                            <ChallengeIcon />
                                        </ListItemPrefix>
                                        {desc}
                                        <ListItemSuffix>
                                            <Chip 
                                                value={`+${coinValue}`} 
                                                variant="gradient" 
                                                color={`${
                                                    id.includes('easy') ? 'green' :
                                                    id.includes('med') ? 'amber' :
                                                    id.includes('hard') ? 'red' : 'amber' 
                                                }`} 
                                                className="rounded-full"
                                            >    
                                            </Chip>
                                        </ListItemSuffix>
                                    </ListItem> 
                                    ))
                                }
                            </List>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </main>
    )
}