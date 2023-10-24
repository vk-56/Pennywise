import { Avatar } from '@material-tailwind/react'
import maleProfile from '../../assets/maleProfile.jpeg'

export function ProfilePic() {
    return (
        <main>
            <div>
                <Avatar
                    variant="circular"
                    size="xxl"
                    className="border border-gray-900 h-52 w-52"
                    src={maleProfile}
                />
            </div>
        </main>
    )
}