import { useState } from "react";
import cover from "../../assets/images/cover3.jpg";
import logo from "../../assets/images/logo-white.png";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { decodedToken } from "../../utils/decodedToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Login = () => {
  const [click, setClick] = useState(false);

  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "john56.doe@example.com",
      password: "admin123",
    },
  });

  const handelLogin = async (formData: FieldValues) => {
    const toastId = toast.loading("Logging in");

    try {
      const res = await login(formData).unwrap();
      const userData = decodedToken(res?.data?.accessToken) as TUser;
      dispatch(setUser({ user: userData, token: res.data.accessToken }));
      navigate(`/${userData?.userRole}/dashboard`);
      toast.success("Logged in", { id: toastId, duration: 2000 });
    } catch (error) {
      toast.error(error?.data?.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="flex justify-center md:items-center md:h-screen">
      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="md:w-[90%] lg:w-[70%] flex flex-col-reverse md:flex-row justify-center md:items-center shadow-2xl shadow-purple-200"
      >
        <div
          style={{
            background:
              "linear-gradient(111deg, rgba(96,53,142,1) 0%, rgba(117,80,172,0.9220063025210083) 100%)",
          }}
          className="md:w-[50%] h-full opacity-90 flex justify-center items-center lg:p-10"
        >
          <div className="space-y-7 w-full py-10">
            {/* Header section */}
            <div className="flex justify-center items-center gap-3">
              <img className="w-20" src={logo} alt="" />
              <h1 className="text-4xl font-semibold text-white">Login</h1>
            </div>

            {/* Form section */}
            <div className="p-5 lg:w-[80%] mx-auto">
              <form
                onSubmit={handleSubmit(handelLogin)}
                className="space-y-5 w-full"
              >
                <div className="relative">
                  <input
                    className="bg-transparent border-b-[3px] border-white focus:border-b-[3px] focus:outline-none w-full pl-10 pr-3 py-3 lg:text-md text-white"
                    type="email"
                    id=""
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 absolute top-0 left-2 flex items-center h-full text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    className="bg-transparent border-b-[3px] border-white focus:border-b-[3px] focus:outline-none w-full pl-10 pr-3 py-3 lg:text-md text-white"
                    type={click ? "text" : "password"}
                    id=""
                    placeholder="*****"
                    {...register("password")}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 absolute top-0 left-2 flex items-center h-full text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>

                  <div
                    onClick={() => setClick(!click)}
                    className="cursor-pointer"
                  >
                    {click ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 absolute top-0 right-2 flex items-center h-full text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 absolute top-0 right-2 flex items-center h-full text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      </>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  {isLoading ? (
                    <button
                      type="submit"
                      className="w-full h-full p-3 mt-3 bg-black text-sm lg:text-lg text-white rounded-xl hover:scale-105 duration-700 cursor-pointer"
                    >
                      <Spin size="default" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full h-full p-3 mt-3 bg-black text-sm lg:text-lg text-white rounded-xl hover:scale-105 duration-700 cursor-pointer"
                    >
                      LOGIN
                    </button>
                  )}

                  <div className="text-end mt-1">
                    <button className="text-lg font-semibold underline text-blue-300 cursor-pointer">
                      Forgot Password?
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="md:w-[50%] lg:p-20 p-10">
          <div>
            <p className="text-xl font-semibold text-white">Welcome To,</p>
            <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold text-purple-300">
              Havenfield University
            </h1>
            <h1 className="my-3 text-3xl md:text-2xl lg:text-4xl font-semibold text-white">
              Speed Up <br />
              data entry
            </h1>
            <p className="text-sm md:text-xs lg:text-base font-semibold text-gray-300">
              Use the F4 key to automatically accept all field defaults for
              faster data entry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
