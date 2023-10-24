import { Button, Input, Select, Option } from "@material-tailwind/react"
import { Alert } from "@material-tailwind/react"
import { useContext } from "react"
import { AppContext } from "../../App"
/* For form input validation */
import * as yup from 'yup'
import { useForm } from "react-hook-form"
/* Integrating schema with useForm hook */
import { yupResolver } from "@hookform/resolvers/yup"

export function AddExpense() {
    const { userId, showAlert, setShowAlert } = useContext(AppContext); 

    /* Schema of form */
    const schema = yup.object().shape({
        type: yup.string(),
        category: yup.string(),
        amount: yup.number(),
    })

    /* Functions from useForm hook */
    const { register, handleSubmit, setValue, formState: {errors} } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })

    /* Adding submitted budget to database */
    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/transactions/createTransaction', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    type: data.type,
                    category: data.category,
                    amount: data.amount,
                    date: new Date().toDateString(),
                    userId: userId
                })
            });
            console.log('Transaction creation done')
            if (response.status === 200) {
                const responseData = await response.json();
                console.log(responseData.message);
            } else {
                console.error('Transaction creation failed');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <form 
            className="flex flex-col gap-8 mt-8 w-full font-main font-normal"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex justify-center items-center gap-8">
                <div className="basis-1/6">
                    <Select
                        {...register("type")}
                        onChange={(e) => setValue('type', e, { shouldValidate: true })}
                        label="Select Type" 
                        className="w-full font-main font-normal text-emerald"
                        color="green"
                        menuProps={{
                            className: 'bg-navy-blue text-emerald'
                        }}
                        labelProps={{
                            className: 'font-main font-bold'
                        }}
                    >
                        <Option value="Income">Income</Option>
                        <Option value="Expense">Expense</Option>
                    </Select>
                </div>
                <div className="basis-1/6">
                    <Select 
                        {...register("category")}
                        onChange={(e) => setValue('category', e, { shouldValidate: true })}
                        label="Select Category" 
                        className="w-full font-main font-normal text-emerald"
                        color="green"
                        menuProps={{
                            className: 'bg-navy-blue text-emerald max-h-[100px]'
                        }}
                        labelProps={{
                            className: 'font-main font-bold'
                        }}
                    >
                        <Option value="Food">Food</Option>
                        <Option value="Transport">Transport</Option>
                        <Option value="Entertainment">Entertainment</Option>
                    </Select>
                </div>
                <div className="basis-1/6 flex flex-col justify-center">
                    <Input
                        {...register("amount")}
                        label="Amount"
                        type="number"
                        onBlur={(event) => event.target.placeholder = ""}
                        onFocus={(event) => event.target.placeholder="Enter in ₹"}
                        className="w-full font-main font-normal text-emerald focus:shadow-none" 
                        color="green"
                        labelProps={{
                            className: 'text-lg font-main font-bold'
                        }}
                    />
                </div>
            </div>
            <div className="grow-1 flex items-center justify-center">
                <Alert
                    open={showAlert}
                    className="absolute top-0 right-0 bg-dark-green text-off-white"
                    onClose={ () => setShowAlert(false)}
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 100 },
                    }}
                >
                    Expense Added!
                </Alert>

                <Button 
                    className="p-4 border border-dark-green hover:bg-dark-green hover:text-off-white
                    font-main font-bold text-emerald"
                    onClick={ () => setShowAlert(true)}
                    type="submit"
                >
                    Add Expense
                </Button>
            </div>
        </form> 
    )
}