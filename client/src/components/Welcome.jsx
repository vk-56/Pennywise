import { useContext } from "react"
import { AppContext } from "../App"

export function Welcome() {
    const { userId } = useContext(AppContext);

    return(
        <main className="bg-rich-black text-off-white h-full
            flex flex-col justify-start items-center gap-20">
            <div className="text-6xl font-main font-bold text-emerald/70 mt-[20%]">
                Welcome! Your user ID is: {userId} 
            </div>
            <div className="text-3xl font-main font-semibold text-off-white/40">
                Start managing your finances by clicking on any tab!
            </div>
        </main>
    )
}