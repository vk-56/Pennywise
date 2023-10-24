import { 
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip 
} from "@material-tailwind/react";
import { Italic } from "@tremor/react";
import { GiAbstract020 as ChallengeIcon } from "react-icons/gi" 

export function DailyChallenges() {
    return(
        <List className="mt-8 font-display">
            <ListItem 
                className="hover:bg-gray-800 hover:text-emerald 
                text-off-white focus:bg-dark-green focus:text-off-white"
            >
                <ListItemPrefix>
                    <ChallengeIcon />
                </ListItemPrefix>
                Open the app and spend a minute reviewing your financial snapshot on the Home tab.
                <ListItemSuffix>
                    <Chip value='+110' variant="gradient" color="amber" className="rounded-full"></Chip>
                </ListItemSuffix>
            </ListItem>
            <ListItem 
                className="hover:bg-gray-800 hover:text-emerald 
                text-off-white focus:bg-dark-green focus:text-off-white"
            >
                <ListItemPrefix>
                    <ChallengeIcon />
                </ListItemPrefix>
                Check your daily spending against your budget goals in the Analytics tab to stay on track.
                <ListItemSuffix>
                    <Chip value='+250' variant="gradient" color="amber" className="rounded-full"></Chip>
                </ListItemSuffix>
            </ListItem>
            <ListItem 
                className="hover:bg-gray-800 hover:text-emerald 
                text-off-white focus:bg-dark-green focus:text-off-white"
            >
                <ListItemPrefix>
                    <ChallengeIcon />
                </ListItemPrefix>
                Maintain a daily streak of completing challenges from the Challenges tab. Aim for a 7-day streak!
                <ListItemSuffix>
                    <Chip value='+50' variant="gradient" color="amber" className="rounded-full"></Chip>
                </ListItemSuffix>
            </ListItem>
            <ListItem 
                className="hover:bg-gray-800 hover:text-emerald 
                text-off-white font-semibold focus:bg-dark-green focus:text-off-white" 
            >
                <Italic>Complete all of these challenges to earn special rewards!</Italic>
            </ListItem>
        </List>
    )
}