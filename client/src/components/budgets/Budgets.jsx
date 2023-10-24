import { Card } from "@material-tailwind/react"
import { Metric } from "@tremor/react"
import { useState } from "react"
import { UserBudgets } from "./UserBudgets"
import { AddBudgets } from "./AddBudgets"

/* Parent component for the Analytics Tab */

export function Budgets() {
    /* Randomized data to populate progress bars*/
    const [budgetData, setBudgetData] = useState([
        {
            category: 'Food',
            desc: 'Eating Out Budget',
            amount: 2000,
            color: "teal"
        },
        {
            category: 'Transport',
            desc: 'Work Transport Budget',
            amount: 1000,
            color: "lime"
        },
        {
            category: 'Entertainment',
            desc: 'OTL Subscription Budget',
            amount: 800,
            color: "pink"
        }
    ])
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
        <main className="bg-rich-black text-off-white h-full">
            <div className="grid grid-cols-6 grid-rows-[repeat(5,7rem)] gap-10 m-20">
                <Card 
                    className="col-span-2 row-span-2 text-xl p-4 text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green
                    flex flex-col gap-2 items-center justify-center"
                >
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <Metric className="font-main">&#8377; 2,349</Metric>
                        <div>Total Budgeted</div>
                    </div>  
                </Card>
                <Card 
                    className="col-span-2 row-span-2 col-start-3 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green
                    flex flex-col gap-2 items-center justify-center"
                >
                     <div className="flex flex-col gap-2 items-center justify-center">
                        <Metric className="font-main">&#8377; 1,548</Metric>
                        <div>Total Spent</div>
                    </div>
                </Card>
                <Card 
                    className="col-span-2 row-span-2 col-start-5 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green
                    flex flex-col gap-2 items-center justify-center"
                >
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <Metric className="font-main">&#8377; 801</Metric>
                        <div>Total Remaining</div>
                    </div>
                </Card>
                <Card 
                    className="col-span-6 row-span-3 row-start-3 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    <UserBudgets budgetData={budgetData} />
                </Card>
                <Card className="col-span-6 row-span-3 row-start-7 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green">
                        <div className="flex flex-col justify-center items-center gap-4"> Edit Budgets</div>
                        <AddBudgets tableData={tableData} setTableData={setTableData} />
                </Card>
            </div>
        </main>
    )
}