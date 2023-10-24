import { Typography } from '@material-tailwind/react'
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../App';

const tableHeadings = ["Category", "Type", "Amount", "Date"]

export function TransactionList() {
    const { userId, showAlert } = useContext(AppContext);
    const [ userTransacArray, setUserTransacArray ] = useState(undefined);
    useEffect( () => {
        async function fetchUserTransactions() {
            try {
                const response = await fetch('http://localhost:8080/api/v1/transactions/getTransaction', 
                    {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        userId: userId
                    })
                })
            
                if (response.status === 200) {
                    const responseData = await response.json();
                    setUserTransacArray(responseData.message);
                } else {
                    console.error('Transaction fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserTransactions(); 
    }, [showAlert]);

    if (!userTransacArray) return null;
    
    return (
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
                {userTransacArray.map(
                    (
                        {
                            category,
                            type,
                            amount,
                            date
                        }
                    ) => {
                        /* Apply below style to all cells */
                        const styleClass = "border-none bg-navy-blue px-2 py-3"
                        return (
                            <tr key={category}>
                                <td className={styleClass}>
                                    <Typography className="text-off-white text-sm">
                                        {category}
                                    </Typography>
                                </td>
                                <td className={styleClass}>
                                    <Typography className="text-off-white text-sm">
                                        {type}
                                    </Typography>
                                </td>
                                <td className={styleClass}>
                                    <Typography className="text-off-white text-sm">
                                        Rs. {amount}
                                    </Typography>
                                </td>
                                <td className={styleClass}>
                                    <Typography className="text-off-white text-sm">
                                        {date}
                                    </Typography>
                                </td>
                            </tr>
                        )
                    }
                )}
            </tbody>
          </table>
    )
}