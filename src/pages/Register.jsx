import { useNavigate } from "react-router-dom";
import { register } from "../utils/network";
import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import background from "../assets/bg-caffe.jpg";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BiSolidContact } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [telepon, setTelepon] = useState("");
  const [alamat, setAlamat] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();

    register({ username, email, password, nama, telepon, alamat, isSeller: false }).then((response) => {
      console.log(response);

      if (!response.error) {
        alert("Berhasil! Silahkan login");
        console.log(`Berhasil membuat akun baru! email: ${email}, password: ${password} `);
        navigate("/login");
      } else {
        alert("Gagal membuat akun!");
      }
    });
  }

  const onLoginHandler = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <div>
      <div
        className="container min-h-screen flex justify-center bg-amber-100"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <form
          onSubmit={(event) => {
            console.log("Berhasil disubmit!");
            onSubmitHandler(event);
          }}
          className="bg-orange-200 shadow-lg rounded-lg flex w-fit h-fit px-8 py-6 flex-col gap-4 mt-14 border-white border-8">
          <div>
            <h1 className="text-2xl font-bold text-center text-slate-700 mb-7">Register User</h1>

            <div className="flex gap-4">
              {/* Username */}
              <div className="flex flex-row justify-between align-baseline gap-4">
                <Label className="text-base text-slate-700">Username:</Label>
                <TextInput
                  onChange={(event) => {
                    console.log(event.target.value);
                    const value = event.target.value;
                    setUsername(value);
                  }}
                  type="text"
                  icon={FaUserCircle}
                  required
                  shadow
                />
              </div>

              {/* Email */}
              <div className="flex flex-row justify-between align-baseline">
                <Label className="text-base text-slate-700 mx-4">Email:</Label>
                <TextInput
                  onChange={(event) => {
                    console.log(event.target.value);
                    const value = event.target.value;
                    setEmail(value);
                  }}
                  type="text"
                  icon={MdEmail}
                  required
                  shadow
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-4">
              {/* Password */}
              <div className="flex flex-row justify-between align-baseline gap-4">
                <Label className="text-base text-slate-700">Password:</Label>
                <TextInput
                  onChange={(event) => {
                    console.log(event.target.value);
                    const value = event.target.value;
                    setPassword(value);
                  }}
                  type="password"
                  icon={RiLockPasswordFill}
                  required
                  shadow
                />
              </div>

              {/* Nama */}
              <div className="flex flex-row justify-between align-baseline">
                <Label className="text-base text-slate-700 mx-4">Nama:</Label>
                <TextInput
                  onChange={(event) => {
                    console.log(event.target.value);
                    const value = event.target.value;
                    setNama(value);
                  }}
                  type="text"
                  icon={BiSolidContact}
                  required
                  shadow
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-4">
              {/* Password */}
              <div className="flex flex-row justify-between align-baseline gap-4">
                <Label className="text-base text-slate-700">No Telepon:</Label>
                <TextInput
                  onChange={(event) => {
                    console.log(event.target.value);
                    const value = event.target.value;
                    setTelepon(value);
                  }}
                  type="text"
                  icon={IoCall}
                  required
                  shadow
                />
              </div>

              {/* Nama */}
              <div className="flex flex-row justify-between align-baseline">
                <Label className="text-base text-slate-700 mx-4">Alamat:</Label>
                <TextInput
                  onChange={(event) => {
                    console.log(event.target.value);
                    const value = event.target.value;
                    setAlamat(value);
                  }}
                  type="text"
                  icon={GoHomeFill}
                  required
                  shadow
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          {username && email && password && nama && telepon && alamat ? (
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-1.5 rounded-lg">
              Submit
            </button>
          ) : (
            <button type="submit" disabled className="bg-red-300 text-white font-semibold px-3 py-1.5 rounded-lg">
              Submit
            </button>
          )}
          <div>
            {/* Navigate Login */}
            <Label className="text-sm">Punya akun?</Label>
            <button onClick={onLoginHandler} className="text-sm pl-1">
              <u>Login</u>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
