import React from "react"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input
} from "@material-tailwind/react"
import * as  yup  from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
/* Display User Profile Info */

export function ProfileInfo() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

     /* Schema of form */
     const schema = yup.object().shape({
        name: yup.string().required(),
        age: yup.number().required(),
        email: yup.string().required(),
        contact: yup.string().required(),
        location: yup.string().required()
    });

      /* Functions from useForm hook */
    const { register, handleSubmit, setValue, formState: {errors} } = useForm({
         mode: "onChange",
        resolver: yupResolver(schema),
    })

    const onSubmit = async(data) => {
        try {
            const response = await fetch('http://localhost:4000/api/v1/users/updateProfile', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
          userName: data.userName,
          age: data.age,
          email: data.email,
          contact: data.contact,
          location: data.contact,
        })
      });

      if (response.status === 200) {
        const responseData = await response.json();
        console.log(responseData.message);
      } else {
        console.error('User signup failed');
      }
        }catch(error){
            console.log(error);
        }
    }
    return (
        <form class="flex flex-col items-center gap-3 m-20 h-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-72 flex-col items-center gap-6 justify-center">
                <Input size="xl" color="white" label="Name " {...register("userName")} />
                <Input size="lg" color="white" label="Age" {...register("age")}/>
                <Input size="lg" color="white" label="Email" {...register("email")}/>
                <Input size="lg" color="white" label="Contact Number" {...register("contact")}/>
                <Input size="lg" color="white" label="location" {...register("location")}/>
                <div class ="flex justify-center">
                    <Button type="submit">Confirm</Button>
                </div>
                <Dialog open={open} handler={handleOpen}>
                    <div className="flex items-center justify-between">
                        <DialogHeader>Confirm Changes?</DialogHeader>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-3 h-5 w-5"
                            onClick={handleOpen}
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <DialogBody divider>
                        <div className="grid gap-6">
                            <Input label="Enter Password" />
                        </div>
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                        <Button variant="outlined" color="red" onClick={handleOpen}>
                            Close
                        </Button>
                        <Button variant="gradient" color="green" onClick={handleOpen}>
                            Confirm
                        </Button>
                    </DialogFooter>
                </Dialog>
            </div>
        </form>
    )
}