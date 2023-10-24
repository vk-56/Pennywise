import { ProgressBar } from '@tremor/react'
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../App'

export function UserBudgets() {
    const colors = ["teal", "lime", "pink", "purple", "indigo", "blue", "cyan", "yellow", "green", "amber", "orange", "red"]
    const { userId, showAlert } = useContext(AppContext);
    const [ userBudgetsArray, setUserBudgetsArray ] = useState(undefined);

    useEffect( () => {
        async function fetchUserBudgets() {
            try {
                const response = await fetch('http://localhost:8080/api/v1/budgets/getBudget', 
                    {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        userId: userId
                    })
                })
            
                if (response.status === 200) {
                    const responseData = await response.json();
                    setUserBudgetsArray(responseData.message);
                    console.log(userBudgetsArray);
                } else {
                    console.error('Budget fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserBudgets();
        console.log(showAlert);    
    }, [showAlert]);

    if (!userBudgetsArray) return(<div className="flex flex-col justify-center items-center gap-4">Your Budgets</div>)

    return(
        <div className="flex flex-col justify-center items-center gap-4">
                Your Budgets
                { userBudgetsArray.map( ({category, description, currentAmount, maxAmount} ) => (
                   <>
                        <div 
                            className=" w-4/5 font-normal text-lg font-main text-off-white mt-4
                            flex justify-between"
                        >
                            <div>{category} &bull; {description}</div>
                            <div>&#8377; {currentAmount} &bull; {maxAmount} </div>
                        </div>
                        <ProgressBar 
                            value={parseInt(currentAmount/maxAmount * 100)} 
                            color={colors[Math.floor(Math.random() * 11)]} 
                            className="mt-3 w-4/5" 
                            showAnimation={true}
                        />  
                    </>
                ))} 
        </div>
    )
}