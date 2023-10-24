import { DonutChart, Legend } from "@tremor/react"
import { BarList } from '@tremor/react'

/* Use the following colors: pink, purple, indigo, blue, cyan, teal, yellow, lime, green
    amber, orange, red and gray
*/

/* Randomized data to populate donut chart*/
const monthPieData = [
    {
        name: 'Food',
        value: 300,
    },
    {
        name: 'Transport',
        value: 220,
    },
    {
        name: 'Entertainment',
        value: 150,
    },
];

/* Formatting actual value for displaying in chart tooltip */
const valueFormatter = (number) => `Rs. ${number}`


export function MonthlyExpenses() {
    return(
        <div className="flex gap-8 justify-center items-center basis-2/5">
            <div className="flex flex-col items-center justify-center">
                <DonutChart
                    showAnimation={true}
                    className="mt-6"
                    data={monthPieData}
                    category="value"
                    index="name"
                    colors={["purple","red","cyan"]}
                    valueFormatter={valueFormatter}
                />
                <Legend
                    className="mt-3"
                    categories={["Food","Transport","Entertainment"]}
                    colors={["purple","red","cyan"]}
                />
            </div>
            <div className="mx-8 basis-2/5">
                <div className="flex items-center justify-between mt-4">
                    <div className="font-main">Category</div>
                    <div className="font-main">Amount</div>
                </div>
                <BarList 
                    showAnimation={true}
                    data={monthPieData} 
                    className="mt-4 mb-6 font-main font-semibold" 
                    valueFormatter={valueFormatter}
                />
            </div>
        </div>
    )
}