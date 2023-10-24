import { Input } from "@material-tailwind/react"

/* Display User Profile Info */

export function ProfileInfo() {
    return (
        <main class="flex flex-col items-center gap-3 m-20 h-full">
            <div className="flex w-72 flex-col items-end gap-6">
                <Input size="xl" color="white" label="Name " />
                <Input size="lg" color="white" label="Age" />
                <Input size="lg" color="white" label="Email" />
                <Input size="lg" color="white" label="Contact Number" />
            </div>
        </main>
    )
}