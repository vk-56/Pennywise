import { Typography } from '@material-tailwind/react'

const tableHeadings = ["Category", "Type", "Amount", "Date"]

export function TransactionList(props) {
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
                {props.tableData.map(
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
                                        {amount}
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