import { useEffect, useState, useContext } from "react"
import { AppContext } from "../App"

export function Welcome() {
    const { userId } = useContext(AppContext);
    const [ userName, setUserName ] = useState('');

    useEffect( () => {
        async function fetchUserName() {
            try {
                const response = await fetch('http://localhost:4000/api/v1/users/getUsername', 
                    {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        userId: userId
                    })
                })
            
                if (response.status === 200) {
                    const responseData = await response.json();
                    setUserName(responseData.message);
                } else {
                    console.error('Username fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserName(); 
    }, []);

    return(
        <main className="bg-rich-black text-off-white h-full
            flex flex-col justify-start items-center gap-20">
            <div className="text-6xl font-main font-bold text-emerald/70 mt-[20%]">
                Welcome, {userName}!
            </div>
            <div className="text-3xl font-main font-semibold text-off-white/40">
                Start managing your finances by clicking on any tab!
            </div>
        </main>
    )
}