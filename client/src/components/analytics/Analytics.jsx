import { Card } from '@material-tailwind/react'
import { MonthlyExpenses } from './MonthlyExpenses'
import { DailyExpenseFlow } from './DailyExpenseFlow'

/* Parent component for the Analytics Tab */

export function Analytics() {
    return(
        <main 
            className="bg-rich-black text-off-white h-full 
            flex flex-col items-center justify-center gap-6"
        >
            <Card 
                className='text-lg text-off-white p-6 bg-navy-blue
                transition-shadow duration-300 w-4/5 mt-5
                hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll'
            >
                Welcome to the Financial Analytics section, where your financial data 
                comes to life. Explore your spending habits, track your expenses, and 
                make informed financial decisions. Dive into pie charts that break down 
                your expenses by category for the entire month, and follow the trends with 
                daily expense line charts. 
            </Card>
            <Card 
                className="text-xl p-4 text-off-white  bg-navy-blue
                transition-shadow duration-300 w-4/5
                hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll"
            >
                Monthly Expenses For September
                <MonthlyExpenses />
            </Card>
            <Card 
                className="text-xl p-4 text-off-white  bg-navy-blue
                transition-shadow duration-300 w-4/5
                hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll"
            >
                Daily Expense Flow
                <DailyExpenseFlow />
            </Card>
        </main>
    )
}