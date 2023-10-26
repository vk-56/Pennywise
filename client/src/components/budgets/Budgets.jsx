import { Card } from "@material-tailwind/react"
import { Metric } from "@tremor/react"
import { useState } from "react"
import { UserBudgets } from "./UserBudgets"
import { AddBudgets } from "./AddBudgets"

/* Parent component for the Analytics Tab */

export function Budgets() {
    
    return(
        <main className="bg-rich-black text-off-white h-full">
            <div className="grid grid-cols-6 grid-rows-[repeat(5,7rem)] gap-10 m-20">
                <Card 
                    className="col-span-6 row-span-3 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green overflow-scroll"
                >
                    <UserBudgets />
                </Card>
                <Card className="col-span-6 row-span-3 row-start-4 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green">
                        <div className="flex flex-col justify-center items-center gap-4"> Add a Budget</div>
                        <AddBudgets />
                </Card>
            </div>
        </main>
    )
}