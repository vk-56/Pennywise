import { ProfilePic } from './ProfilePic'
import { UserDetails } from './UserDetails'

/* Parent component for My Profile Tab */

export function ProfileDetails() {
    return(
        <main className="bg-rich-black text-off-white h-full">
            <div class = "profile-pic mt-20 flex justify-center">
                <ProfilePic/>
            </div>
            <div class = "user-info grid">
                <UserDetails/> 
            </div>
        </main>
    )
}