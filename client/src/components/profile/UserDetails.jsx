import { Card } from "@material-tailwind/react"
import { useEffect, useState, useContext } from "react"
import { AppContext } from "../../App"


export function UserDetails() {
    const { userId } = useContext(AppContext);
    const [ userName, setUserName ] = useState('');
    const [ contact, setContact ] = useState(' ');
    const [ location, setLocation ] = useState(' ');

    useEffect( () => {
        async function fetchUserName() {
            try {
                const response = await fetch('http://localhost:8080/api/v1/users/getUsername', 
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
        async function fetchContact() {
            try {
                const response = await fetch('http://localhost:8080/api/v1/users/getContact', 
                    {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        userId: userId
                    })
                })
            
                if (response.status === 200) {
                    const responseData = await response.json();
                    setContact(responseData.message);
                } else {
                    console.error('Username fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        async function fetchLocation() {
            try {
                const response = await fetch('http://localhost:8080/api/v1/users/getLocation', 
                    {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        userId: userId
                    })
                })
            
                if (response.status === 200) {
                    const responseData = await response.json();
                    setLocation(responseData.message);
                } else {
                    console.error('Username fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserName(); 
        fetchContact();
        fetchLocation();
    }, []);
    return(
        <main className="bg-rich-black text-off-white h-full">
            <div>
                <Card 
                    className="col-span-6 row-span-1 text-md p-4 text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green m-20 text-center text-4xl"
                >
                    Welcome {userName}!
                </Card>
            </div>
            <div className="grid grid-cols-2 gap-10 m-20">
                <Card 
                    className="text-xl p-4 text-center
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Contact Number : +{ contact }
                </Card>
                <Card 
                    className="text-xl p-4 text-center
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Location(Current) : { location }
                </Card>
                <Card 
                    className="text-xl p-4 text-center
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Total Spent : INR 20,000
                </Card>
                <Card text-center
                    className="text-xl p-4 text-center
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Your Budgets : INR 100,000
                </Card>
            </div>
        </main>
    )
}

