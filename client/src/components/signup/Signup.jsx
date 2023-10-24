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

export function SimpleRegistrationForm() {
  const { setIsAuth, setIsNewUser } = useContext(AppContext)
  const navigate = useNavigate()

  function handleLogin() {
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
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" color="white" label="Name" />
                <Input size="lg" color="white" label="Email" />
                <Input type="password" color="white" size="lg" label="Password" />
                <Input type="password" color="white" size="lg" label="Enter Password Again" />
              </div>

              <Button className="mt-6" fullWidth onClick={() => handleLogin()}>

                Register
              </Button >
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
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