import Container from "@component/Container";

export default function HeroSection() {
    return (
        <Container classNames={"px-0"}>
            <main className="flex flex-wrap items-center justify-between px-4 py-8 lg:col-span-7 lg:py-12 xl:col-span-6">
                {/* Text */}
                <div>
                    <h1 className="flex flex-nowrap gap-2 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Your</span>{' '}
                        <span className="block text-[#29817e] xl:inline">Digital</span>
                    </h1>
                    <div className={`flex flex-nowrap gap-2`}>
                        <span className="block xl:inline">Data to enrich your</span>{' '}
                        <span className="block text-[#0b5757] xl:inline">online business</span>
                    </div>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
                {/* Mask window by */}
                <div >
                    <div className="relative p-4">
                        <div className="pointer-events-auto w-[100%] max-w-[400px] rounded-lg bg-white text-[0.8125rem]/5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                            <div className="flex items-center px-3.5 py-2.5 text-slate-400">
                                <svg className="mr-2 size-5 stroke-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <input className="w-full h-full focus:!outline-none focus-visible:!outline-none focus:!border-none text-black rounded-lg" type="text" placeholder="Search projects..." />
                            </div>
                            <div className="border-t border-slate-400/20 px-3.5 py-3">
                                <div className="mb-1.5 text-[0.6875rem] font-semibold text-slate-500">Recent searches</div>
                                <div className="group flex items-center rounded-md p-1.5 cursor-pointer hover:bg-[#0b5757] hover:text-white">
                                    <svg className="mr-2.5 size-5 flex-none stroke-slate-400 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                    </svg>Tailwind Labs / Website Redesign
                                </div>
                                <div className="group flex items-center rounded-md p-1.5 cursor-pointer hover:bg-[#0b5757] hover:text-white">
                                    <svg className="mr-2.5 size-5 flex-none stroke-slate-400 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                    </svg>
                                    Laravel LLC / Conference Branding
                                </div>
                            </div>
                            <div className="border-t border-slate-400/20 px-3.5 py-3">
                                <div className="group hover:bg-[#0b5757] cursor-pointer hover:text-white flex items-center rounded-md p-1.5">
                                    <svg className="mr-2.5 size-5 flex-none stroke-slate-400 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>Add new file...
                                </div>
                                <div className="group hover:bg-[#0b5757] cursor-pointer hover:text-white flex items-center rounded-md p-1.5">
                                    <svg className="mr-2.5 size-5 flex-none stroke-slate-400 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>Add new folder...
                                </div>
                                <div className="group hover:bg-[#0b5757] cursor-pointer hover:text-white flex items-center rounded-md p-1.5">
                                    <svg className="mr-2.5 size-5 flex-none stroke-slate-400 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>Add hashtag...
                                </div>
                                <div className="group hover:bg-[#0b5757] cursor-pointer hover:text-white flex items-center rounded-md p-1.5">
                                    <svg className="mr-2.5 size-5 flex-none stroke-slate-400 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>Add label...
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </Container>
    )
}
