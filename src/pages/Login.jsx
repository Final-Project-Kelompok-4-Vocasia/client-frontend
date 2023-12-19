import { useState } from "react";
import { useNavigate } from "react-router";
import { login, putAccessToken, putRoleUser } from "../utils/network";
import { Label, TextInput } from "flowbite-react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();

    login({ email, password }).then((response) => {
      console.log("Login response:", response);

      if (!response.error) {
        putAccessToken(response?.data?.token);
        putRoleUser(response?.data?.isSeller);

        console.log("isSeller: " + response?.data?.isSeller);

        //Routing Role untuk Seller dan Buyer
        if (response?.data?.isSeller) {
          alert(`Selamat datang, Seller!`);
          navigate("/dashboard/seller"); //Route testing
        } else {
          alert(`Selamat datang, Buyer!`);
          navigate("/dashboard/buyer"); //Route testing
        }
      } else {
        alert("Gagal: Salah Email/Password!");
      }
    });
  }

  function onRegisterHandler(event) {
    event.preventDefault();
    navigate("/register");
  }

  return (
    // <div>
    //   <FormLogin></FormLogin>
    // </div>

    <div>
      <div className="container min-h-screen flex justify-center bg-amber-100">
        <form
          onSubmit={(event) => {
            console.log("Berhasil disubmit!");
            onSubmitHandler(event);
          }}
          className="bg-violet-300 shadow-lg rounded-lg flex w-full max-w-md h-fit px-8 py-6 flex-col gap-4 mt-14">
          <div>
            <h1 className="text-2xl font-bold text-center  text-slate-700 mb-7">Login User</h1>
            <div className="mb-2 block">
              <Label className="text-base text-slate-700">Email:</Label>
            </div>
            <TextInput
              onChange={(event) => {
                console.log(event.target.value);
                const value = event.target.value;
                setEmail(value);
              }}
              type="text"
              //   icon={FaUserCircle}
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label className="text-base text-slate-700">Password:</Label>
            </div>
            <div className="relative">
              <TextInput
                onChange={(event) => {
                  console.log(event.target.value);
                  const value = event.target.value;
                  setPassword(value);
                }}
                type="password"
                // icon={RiLockPasswordFill}
                required
                shadow
              />
            </div>
          </div>

          {/* Submit Button */}
          {email && password ? (
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-1.5 rounded-lg">
              Submit
            </button>
          ) : (
            <button type="submit" disabled className="bg-red-300 text-white font-semibold px-3 py-1.5 rounded-lg">
              Submit
            </button>
          )}

          {/* Navigate Register */}
          <div>
            <Label className="text-sm">Belum punya akun?</Label>
            <button onClick={onRegisterHandler} className="text-sm pl-1">
              <u>Register</u>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
