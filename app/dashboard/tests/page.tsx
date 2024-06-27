/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className={`${lusitana.className} mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-600`}>
            Trigger Pentest
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="mt-2 flex space-x-4">
              <input
                id="target"
                name="target"
                type="url"
                placeholder="http://www.target.com or IP"
                required
                className="flex-grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              />
              <input
                id="port"
                name="port"
                type="number"
                placeholder="0-1000"
                required
                className="w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Attack
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            need customized scan ?{' '}
            <a href="#" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
              Advance Scan
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
