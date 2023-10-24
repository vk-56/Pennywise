import { Card, Typography } from "@material-tailwind/react"

import { ExpensesChart } from "./ExpensesChart"
import { DailyChallenges } from "./DailyChallenges"
import { TransactionList } from "./TransactionList"
import { AddExpense } from "./AddExpense"
import { useState } from "react"

/* Parent Component for Home tab */

export function Main() {
    const [tableData, setTableData] = useState([
        {
            category: "Food",
            type: "Expense",
            amount: "Rs 1000",
            date: "Thu Sep 24 2023"
        },
        {
            category: "Transport",
            type: "Expense",
            amount: "Rs 200",
            date: "Fri Sep 26 2023"
        }
    ])

    return(
        <main className= "bg-rich-black h-full">
            
            <div className="grid grid-cols-1 grid-flow-row grid-rows-[repeat(7,10rem)] 
                xl:grid-cols-3 xl:grid-rows-[repeat(7,6rem)] gap-8 m-20"
            >    
            
                <Card 
                    className="text-xl text-off-white p-4 
                    bg-gradient-to-r from-dark-green to-navy-blue 
                    xl:row-span-2 overflow-scroll lg"
                >
                    <Typography variant="h4" className="font-main flex items-center justify-center pt-6">
                        Welcome, John!
                    </Typography> 
                </Card>
                <Card
                    className="text-xl p-4 text-off-white  bg-navy-blue
                    xl:col-start-2 xl:col-span-2 xl:row-span-2 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll"
                >
                    Add a Transaction
                    <AddExpense tableData={tableData} setTableData={setTableData} />
                </Card> 
                <Card 
                    className="text-xl p-4 text-off-white  bg-navy-blue
                    xl:row-span-3 xl:row-start-3 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll"
                >
                    Daily Expenses
                    <ExpensesChart />
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    xl:row-span-2 xl:col-span-2 xl:row-start-3 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll"
                >
                    Recent Transactions
                    <TransactionList tableData={tableData} />
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    xl:row-span-2 xl:col-start-1 xl:row-start-6 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll"
                >
                    <div>Know My City</div>
                    <div>Your location is: Pune</div>
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    xl:col-span-2 xl:row-span-3 xl:col-start-2 xl:row-start-5 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll"
                >   
                    Daily Challenges
                    <DailyChallenges />
                </Card>
               
            </div>
        </main>
    )
}   