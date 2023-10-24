import { EditProfilePic } from './EditProfilePic'
import { ProfileInfo } from './ProfileInfo'
import { ButtonCNF } from './ButtonCNF'

/* Parent Component for Profile section */

export function EditProfile() {
    return (
        <main className="bg-rich-black text-off-white h-full">
            <div class='main-edit-profile '>
                <div class = 'profile-pic flex justify-center mt-20'>
                    <EditProfilePic />
                </div>
                <div class='inp-field'>
                    <ProfileInfo />
                </div>
                <div class ="flex justify-center">
                    <ButtonCNF />
                </div>
            </div>
        </main>
    )
}