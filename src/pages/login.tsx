import { useState } from "react";
import Coins from "../assets/Coins.svg";
import Coin from "../assets/Coin.svg";
import Logo from "../assets/Logo.svg";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <section className="bg-[#3D404D]">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <div className="absolute inset-0 h-full w-full object-cover opacity-80 login_gradient ">
            <div className="flex justify-center items-center h-[100%]  ">
              <img src={Coins} alt="Coins" className="sm:block hidden w-96" />
            </div>
          </div>
          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl flex">
              Welcome to TMY Chain{" "}
              <img src={Logo} alt="logo" className="ml-2" />
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              An open source blockchain platform for creating cryptocurrencies
              and decentralized applications. Transaction fees on the TMY Chain
              network are paid in TMY coin.
            </p>
          </div>
        </section>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 dark:bg-gray-900 sm:h-20 sm:w-20"
                href="/"
              >
                <img src={Coin} alt="logo" className="w-full" />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl flex">
                Welcome to TMY Chain{" "}
                <img src={Logo} alt="logo" className="ml-2 w-6" />
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <h1 className="flex justify-around items-center lg:text-7xl text-4xl font-black text-white ">
                  LOGIN
                </h1>
              </div>

              <div className="col-span-6">
                <input
                  type="token"
                  id="Token"
                  placeholder="Your token ..."
                  className="mt-1 p-2 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 bg-[#545869] dark:text-white sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-[#545869] shadow-sm dark:border-gray-700 dark:focus:ring-offset-gray-900"
                  />

                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By creating an account, you agree to our&nbsp;
                  <a
                    href="#"
                    className="text-gray-700 underline dark:text-gray-200"
                  >
                    {" "}
                    terms and conditions
                  </a>{" "}
                  and &nbsp;
                  <a
                    href="#"
                    className="text-gray-700 underline dark:text-gray-200"
                  >
                    privacy policy{" "}
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-end sm:gap-4 sm:justify-center">
                <button className="inline-block shrink-0 rounded-md border border-[#5330E6] bg-[#5330E6] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Login;
