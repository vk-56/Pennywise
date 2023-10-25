import { LineChart } from "@tremor/react"
import { useState, useEffect, useContext } from "react"
import { AppContext } from "../../App"

/* Formatting actual value for displaying in chart tooltip */
const valueFormatter = (number) => `Rs. ${number}`

export function DailyExpenseFlow() {
    const { userId } = useContext(AppContext);
    const [chartData, setChartData] = useState();

    useEffect( () => {
        async function fetchDailyTransactions() {
            try {
                const response = await fetch('http://localhost:8080/api/v1/transactions/getTransactionMonthly', 
                    {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        userId: userId
                    })
                })
            
                if (response.status === 200) {
                    const responseData = await response.json();
                    console.log(responseData.message)
                    // Create the chart data
                    const updatedChartData = responseData.message.map((item) => {
                        // Extract the day and amount from the response data
                        const day = item.date.split(' ')[1] + ' ' + item.date.split(' ')[2];
                        const Expenditure = item.totalAmount;
                    
                        return { day, Expenditure };
                    });
                    // Sort the data by day in ascending order
                    updatedChartData.sort((a, b) => {
                        // Parse the days as integers for comparison
                        const dayA = parseInt(a.day.split(' ')[1]);
                        const dayB = parseInt(b.day.split(' ')[1]);
                        return dayA - dayB;
                    });

                    setChartData(updatedChartData);
                    console.log(chartData);
                } else {
                    console.error('Oct transaction fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchDailyTransactions();
    }, []);

    if (!chartData) return null;
    
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