import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import StarsCanvas from "./StarsCanvas";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import EarthCanvas from "./Earth";
/* For form input validation */
import * as yup from 'yup'
import { useForm } from "react-hook-form"
/* Integrating schema with useForm hook */
import { yupResolver } from "@hookform/resolvers/yup"

export function SimpleRegistrationForm() {
  const { setIsAuth, setIsNewUser, userId, setUserId } = useContext(AppContext)
  const navigate = useNavigate()

  /* Schema of form */
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

  /* Functions from useForm hook */
  const { register, handleSubmit, setValue, formState: {errors} } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  })

  /* Adding submitted data to database */
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/users/signup', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
          userName: data.name,
          email: data.email,
          password: data.password,
          avatar: '',
          age:'',
          contact:'',
          location:'',
          coinBalance: 0,
          
        })
      });

      if (response.status === 200) {
        const responseData = await response.json();
        setUserId(responseData.message);
      } else {
        console.error('User signup failed');
      }
    } catch (error) {
      console.log(error);
    }
    setIsAuth(true)
    navigate("/")
  }

  return (
    <main className="bg-transparent  h-[100vh] flex flex-col justify-center">
      <StarsCanvas />
      <div className="text-off-white h-[75vh] grid grid-cols-2 items-center justify-center">
        <EarthCanvas />
        <div className="h-[75vh] flex items-center justify-center">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="green" className="flex items-center justify-center">
              Welcome !!
            </Typography>
            <Typography color="green" className="mt-1 font-normal flex items-center justify-center">
              Enter your details to signup.
            </Typography>
            <form 
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input 
                  {...register("name")}
                  size="lg" 
                  color="white" 
                  label="Name" 
                />
                <Input 
                  {...register("email")}
                  size="lg" 
                  color="white" 
                  label="Email" 
                />
                <Input 
                  {...register("password")}
                  type="password" 
                  color="white" 
                  size="lg" 
                  label="Password" 
                />
                <Input 
                  {...register("confirmPassword")}
                  type="password" 
                  color="white" 
                  size="lg" 
                  label="Enter Password Again" />
              </div>

              <Button className="mt-6" fullWidth type="submit">
                Register
              </Button >
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?
                <Button className="mt-6" fullWidth onClick={() => setIsNewUser(false)}>
                  <Typography color="green">Log in</Typography>
                </Button>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </main>
  );
}