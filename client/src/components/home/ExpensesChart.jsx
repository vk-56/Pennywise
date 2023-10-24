import { DonutChart, Legend } from "@tremor/react"

/* Randomized data to populate donut chart*/
const budgetData = [
    {
        category: 'Food',
        value: 300,
    },
    {
        category: 'Transport',
        value: 220,
    },
    {
        category: 'Entertainment',
        value: 150,
    },
];

const valueFormatter = (number) => `Rs. ${number}`

/* Use the following colors: pink, purple, indigo, blue, cyan, teal, yellow, lime, green
    amber, orange, red and gray
*/

export function ExpensesChart() {
    return(
        <div className="flex flex-col items-center justify-center">
            <DonutChart
                    className="mt-6"
                    data={budgetData}
                    showAnimation={true}
                    category="value"
                    index="category"
                    colors={["purple","red","cyan"]}
                    valueFormatter={valueFormatter}
            />
            <Legend
                className="mt-3 h-1/5"
                categories={["Food","Transport","Entertainment"]}
                colors={["purple","red","cyan"]}
            />
        </div>
    )
}