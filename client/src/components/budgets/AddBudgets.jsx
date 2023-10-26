import { Button, Input, Select, Option } from "@material-tailwind/react"
import { Alert, Textarea } from "@material-tailwind/react"
import { useContext, useState } from "react"
/* For form input validation */
import * as yup from 'yup'
import { useForm } from "react-hook-form"
/* Integrating schema with useForm hook */
import { yupResolver } from "@hookform/resolvers/yup"
import { AppContext } from "../../App"

export function AddBudgets() {
    const { userId, showAlert, setShowAlert } = useContext(AppContext); 

    /* Schema of form */
    const schema = yup.object().shape({
        category: yup.string().required(),
        description: yup.string().required(),
        amount: yup.number().required(),
    })

    /* Functions from useForm hook */
    const { register, handleSubmit, setValue, formState: {errors} } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })

    /* Adding submitted budget to database */
    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/budgets/createBudget', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    category: data.category,
                    description: data.description,
                    currentAmount: 0,
                    maxAmount: data.amount,
                    userId: userId
                })
            });
            if (response.status === 200) {
                const responseData = await response.json();
                console.log(responseData.message);
            } else {
                console.error('Budget creation failed');
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
                <div className="basis-1/6">
                    <Textarea
                        {...register("description")} 
                        variant="outlined" 
                        label="Enter description"
                        className="w-full font-main font-normal text-emerald focus:shadow-none"
                        color="green"
                        labelProps={{
                            className: 'font-main font-bold'
                        }} 
                    />
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
                    Budget Added!
                </Alert>

                <Button 
                    className="p-4 border border-dark-green hover:bg-dark-green hover:text-off-white
                    font-main font-bold text-emerald"
                    onClick={ () => setShowAlert(true)}
                    type="submit"
                >
                    Add Budget
                </Button>
            </div>
        </form> 
    )
}
{/*
import { ProgressBar } from '@tremor/react'
import { useContext } from 'react'
import { AppContext } from '../../App'

export function UserBudgets() {
    const colors = ["teal", "lime", "pink"]
    const { userId } = useContext(AppContext);
    const fetchUserBudgets =  async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/budgets/getBudget', 
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
                return(responseData.message)
            } else {
                console.error('Budget fetching failed');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const userBudgetsArray = fetchUserBudgets();
    return(
        <div className="flex flex-col justify-center items-center gap-4">
                Your Budgets
                {   Static Budgets
                {props.budgetData.map( ({category, desc, amount, color}) => (
                    <>
                        <div 
                            className=" w-4/5 font-normal text-lg font-main text-off-white mt-4
                            flex justify-between"
                        >
                            <div>{category} &bull; {desc}</div>
                            <div>&#8377; {amount}</div>
                        </div>
                        <ProgressBar 
                            value={45} 
                            color={color} 
                            className="mt-3 w-4/5" 
                            showAnimation={true} 
                        />  
                    </>
                    )
                )} }
                {userBudgetsArray.map( ({category, description, currentAmount, maxAmount}) => {
                   <>
                        <div 
                            className=" w-4/5 font-normal text-lg font-main text-off-white mt-4
                            flex justify-between"
                        >
                            <div>{category} &bull; {description}</div>
                            <div>&#8377; {currentAmount} / {maxAmount} </div>
                        </div>
                        <ProgressBar 
                            value={(parseInt(currentAmount)/maxAmount * 100)} 
                            color={colors[Math.floor(Math.random() * 2)]} 
                            className="mt-3 w-4/5" 
                            showAnimation={true} 
                        />  
                    </>
                })} 
        </div>
    )
}
*/}