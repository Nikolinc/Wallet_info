import { useEffect, useState } from "react"

export default function Auth() {

  const [token, serToken] = useState("");


  function setStorege() {
    localStorage.setItem('token', token);
  }


  return (
    <div className="auth">
      <section className="bg-white dark:bg-gray-900">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section
            className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
          >
            <img
              alt="Night"
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="https://tmychain.org/">
                {/* <img src={coin} /> */}
              </a>

              <h2 className="flex mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to TMY Chain
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-6"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 2.19066H9.01999V6.46787L10.02 7.07823L10.998 6.46787V2.19066H11ZM0 0V2.19066H20V0H0Z"
                    fill="#fff"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 8.94026L18.186 3.78062H20V20H18.186V6.32377L10 11.4834L1.876 6.32377V20H0V3.78062H1.824L10 8.94026Z"
                    fill="#fff"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0121 14.1091L16.6641 9.83428L16.6781 12.368L11.0061 16.0112V19.9998H9.02813V16.0183L3.32013 12.3514L3.33613 9.82009L10.0121 14.1091Z"
                    fill="#fff"
                  />
                </svg>
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                An open source blockchain platform for creating cryptocurrencies and decentralized
                applications. Transaction fees on the TMY Chain network are paid in TMY coin.
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
                </a>

                <h1
                  className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl"
                >
                  Welcome to TMY Chain
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-6"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 2.19066H9.01999V6.46787L10.02 7.07823L10.998 6.46787V2.19066H11ZM0 0V2.19066H20V0H0Z"
                      fill="#fff"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 8.94026L18.186 3.78062H20V20H18.186V6.32377L10 11.4834L1.876 6.32377V20H0V3.78062H1.824L10 8.94026Z"
                      fill="#fff"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.0121 14.1091L16.6641 9.83428L16.6781 12.368L11.0061 16.0112V19.9998H9.02813V16.0183L3.32013 12.3514L3.33613 9.82009L10.0121 14.1091Z"
                      fill="#fff"
                    />
                  </svg>
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                  An open source blockchain platform for creating cryptocurrencies and decentralized
                  applications. Transaction fees on the TMY Chain network are paid in TMY coin.
                </p>
              </div>

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">

                <div className="col-span-6">
                  <label
                    htmlFor="Token"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Token
                  </label>

                  <input
                    type="Text"
                    id="Token"
                    name="token"
                    onChange={(e) => { serToken(e.target.value) }}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 h-8"
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                    />

                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline dark:text-gray-200">
                      terms and conditions
                    </a>
                    and
                    <a href="#" class="text-gray-700 underline dark:text-gray-200">
                      privacy policy </a
                    >.
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                    onClick={() => { setStorege() }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  )
}