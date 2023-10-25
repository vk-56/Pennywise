import { DonutChart, Legend } from "@tremor/react"
import { Typography } from "@material-tailwind/react"
import { useState, useEffect, useContext } from 'react'
import { AppContext } from "../../App";
/* Use the following colors: pink, purple, indigo, blue, cyan, teal, yellow, lime, green
    amber, orange, red and gray
*/

/* Formatting actual value for displaying in chart tooltip */
const valueFormatter = (number) => `Rs. ${number}`

export function MonthlyExpenses() {
    const colors = ["teal", "lime", "pink", "purple", "indigo", "blue", "cyan", "yellow", "green", "amber", "orange", "red"]
    const tableHeadings = ["Category","Amount"];
    const { userId } = useContext(AppContext);
    const [ chartData, setChartData ] = useState();
    const [ randomColors, setRandomColors ] = useState();

    useEffect( () => {
        async function fetchCategoryTransactions() {
            try {
                const response = await fetch('http://localhost:8080/api/v1/transactions/getTransactionCategories', 
                    {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        userId: userId
                    })
                })
            
                if (response.status === 200) {
                    const responseData = await response.json();
                    console.log(responseData.message);
                    setChartData(responseData.message);
                } else {
                    console.error('Oct transaction fetching failed');
                }


                for (let i = 0; i < 3; i++) 
                {
                    const randomIndex = Math.floor(Math.random() * colors.length);
                    colorsArray.push(colors[randomIndex]);
                }

                setRandomColors(colorsArray);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategoryTransactions();
    }, []);

    if (!chartData) return null;
            
    
    return(
        <div className="flex gap-8 justify-center items-center basis-2/5">
            <div className="flex flex-col items-center justify-center">
                <DonutChart
                    showAnimation={true}
                    className="mt-6"
                    data={chartData}
                    category="totalAmount"
                    index="category"
                    colors={randomColors}
                    valueFormatter={valueFormatter}
                />
                <Legend
                    className="mt-3"
                    categories={["Food","Transport","Entertainment"]}
                    colors={randomColors}
                />
            </div>
            <div className="mx-8 basis-2/5">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                        {tableHeadings.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-navy-blue py-4 px-2"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-off-white font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {chartData.map(( { category, totalAmount }) => {
                            /* Apply below style to all cells */
                            const styleClass = "border-none bg-navy-blue px-2 py-3"
                            return (
                                <tr key={category}>
                                    <td className={styleClass}>
                                        <Typography className="text-off-white text-sm font-normal">
                                            {category}
                                        </Typography>
                                    </td>
                                    <td className={styleClass}>
                                        <Typography className="text-off-white text-sm font-normal">
                                            Rs. {totalAmount}
                                        </Typography>
                                    </td>
                                </tr>
                                )
                            }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}