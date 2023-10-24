import { LineChart } from "@tremor/react"

/* Randomized data to populate line chart*/
let dayNum = 1
let chartData = []

for(let i = 0; i < 30; i++) {
    chartData.push({
        day: `Sep ${dayNum}`,
        /* Random amount between Rs. 120 to Rs. 600 */
        "Expenditure": Math.floor(Math.random() * (600 - 120) + 120)
    })
    dayNum++
}

/* Formatting actual value for displaying in chart tooltip */
const valueFormatter = (number) => `Rs. ${number}`

export function DailyExpenseFlow() {
    return(
        <LineChart
            showAnimation={true}
            animationDuration={2500}
            className="mt-6"
            data={chartData}
            index="day"
            categories={["Expenditure"]}
            colors={["amber"]}
            valueFormatter={valueFormatter}
            yAxisWidth={60}
            curveType="linear"
            startEndOnly={true}
        />
    )
}