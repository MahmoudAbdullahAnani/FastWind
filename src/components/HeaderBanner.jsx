"use client"
import Container from '@component/Container'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeaderBanner() {
  const [removeAlert, setRemoveAlert] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setRemoveAlert(false)
    }, 10000);
  }, [])
  return (
    <section className="-m-y-px bg-gray-100 dark:bg-[#000000c4] dark:text-white">
      <div className={`sticky top-0 z-10 flex gap-2 py-1 text-[12px] justify-center items-center bg-black text-white`}>
        <img src="https://flagcdn.com/80x60/ps.png" alt="Palestine Flag" className="size-6" />
        <div>
          <p>Standing with Palestine is a humanitarian duty. <Link className="underline hover:text-gray-500" href={"https://ar.wikipedia.org/wiki/%D8%B6%D8%AD%D8%A7%D9%8A%D8%A7_%D8%A7%D9%84%D8%AD%D8%B1%D8%A8_%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D8%A9_%D8%A7%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D8%A9_2023"}>Source</Link></p>
          <p>35,000 people have died in the conflict, including 7,797 minors, 4,959 women and 1,924 elderly people with confirmed identities.</p>
        </div>
      </div>
      <Container classNames={`${removeAlert ? "py-1" : ""}`}>
        {
          removeAlert && <div role="alert" className={`flex justify-between items-center mx-auto  px-4`}>
            <span className="text-sm/none font-medium"><span className={`text-red-500`}>Alert!</span> Do not forget to subscribe to our <Link className="underline hover:text-gray-500" href="https://t.me/fastwindui">telegram</Link> channel and also you can participate in this work and prove the existence of <Link className="underline hover:text-gray-500" href="https://github.com/MahmoudAbdullahAnani/FastWind">Let's Go</Link>
              <span aria-hidden="true" role="img">
                ♥
              </span>
            </span>
            <button title='remove alert' className='cursor-pointer rounded-lg text-red-500 hover:text-red-800' onClick={() => setRemoveAlert(false)} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </div>
        }


      </Container>
    </section>
  )
}
