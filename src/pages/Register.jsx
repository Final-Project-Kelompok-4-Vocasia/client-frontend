import { useNavigate } from "react-router-dom";
// import FormRegister from "../components/FormRegister";
import { register } from "../utils/network";
import { useState } from "react";
import { Label, TextInput } from "flowbite-react";

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
    // <div>
    //   <FormRegister></FormRegister>
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
            <h1 className="text-2xl font-bold text-center text-slate-700 mb-7">Register User</h1>
            <div className="mb-2 block">
              <Label className="text-base text-slate-700">Username:</Label>
            </div>
            <TextInput
              onChange={(event) => {
                console.log(event.target.value);
                const value = event.target.value;
                setUsername(value);
              }}
              type="text"
              // icon={FaUserCircle}
              required
              shadow
            />
          </div>

          <div>
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
              // icon={FaUserCircle}
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label className="text-base text-slate-700">Password:</Label>
            </div>
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

          <div>
            <div className="mb-2 block">
              <Label className="text-base text-slate-700">Nama:</Label>
            </div>
            <TextInput
              onChange={(event) => {
                console.log(event.target.value);
                const value = event.target.value;
                setNama(value);
              }}
              type="text"
              // icon={FaUserCircle}
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label className="text-base text-slate-700">Nomor Telepon:</Label>
            </div>
            <TextInput
              onChange={(event) => {
                console.log(event.target.value);
                const value = event.target.value;
                setTelepon(value);
              }}
              type="text"
              // icon={FaUserCircle}
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label className="text-base text-slate-700">Alamat:</Label>
            </div>
            <TextInput
              onChange={(event) => {
                console.log(event.target.value);
                const value = event.target.value;
                setAlamat(value);
              }}
              type="text"
              // icon={FaUserCircle}
              required
              shadow
            />
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

          {/* Navigate Login */}
          <div>
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
