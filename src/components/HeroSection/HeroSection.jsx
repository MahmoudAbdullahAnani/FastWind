"use client"
import Container from "@component/Container";
import { useState } from "react";
import HeroDialog from "./Dialog";
import HeroModule from "./Module";
import HeroSectionLeftText from "./HeroSectionLeftText";

export default function HeroSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [itemSelected, setItemSelected] = useState('Last 7 days');

    function handlePeriodChange(item) {
        setIsOpen(!isOpen);
        setItemSelected(item)
        return
    }

    document.addEventListener('scroll', () => {
        const scrollOffset = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollOffset / (scrollHeight - window.innerHeight)) * 100;
        const rowOneFirstComponent = document.querySelector('.rowOneFirstComponent');
        rowOneFirstComponent.style.transform = `translateY(-${scrollPercentage === 0 ? scrollPercentage : scrollPercentage < 10 ? scrollPercentage + 20 : scrollPercentage < 20 ? scrollPercentage + 30 : scrollPercentage > 30 && scrollPercentage + 40}%)`
        const rowOneLastComponent = document.querySelector('.rowOneLastComponent');
        rowOneLastComponent.style.transform = `translateY(-${scrollPercentage === 0 ? scrollPercentage : scrollPercentage < 10 ? scrollPercentage + 20 : scrollPercentage < 20 ? scrollPercentage + 30 : scrollPercentage > 30 && scrollPercentage + 40}%)`
        const rowTwoFirstComponent = document.querySelector('.rowTwoFirstComponent');
        rowTwoFirstComponent.style.transform = `translateY(-${scrollPercentage === 0 ? scrollPercentage : scrollPercentage < 10 ? scrollPercentage + 20 : scrollPercentage < 20 ? scrollPercentage + 30 : scrollPercentage > 30 && scrollPercentage + 40}%)`


    })
    return (
        <Container classNames={"px-0 dark:bg-black"}>
            <main className="relative flex flex-nowrap items-start justify-between py-8 lg:col-span-7 lg:py-12 xl:col-span-6 overflow-hidden">
                <HeroSectionLeftText />

                <div className="max-w-[722px] relative md:block hidden opacity-0 animate-slideIn"
                    style={{
                        animationDelay: '0.5s',
                        transform: 'translateY(var(--scroll-offset, 0px)) rotate(-10deg)'
                    }}
                    id="floating-window">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 backdrop-blur-sm rounded-lg"></div>
                    <div className="dark:bg-slate-800 before:content-[''] before:absolute before:w-[10px] before:rounded-full before:m-2 before:h-[10px] before:bg-[#570b0b] before:top-0 before:left-0 before:text-blue-500 after:content-[''] after:w-[10px] after:rounded-full after:m-2 after:h-[10px] after:bg-yellow-500 after:absolute after:top-0 after:left-5  after:text-red-500 --- flex relative bg-white/90 border-t-2 rounded-t-lg py-4 w-[1024px] shadow-xl transition-all duration-300 ease-out hover:shadow-2xl">
                        <div className={`absolute w-[10px] rounded-full m-2 h-[10px] bg-[#27570b] top-0 left-10`}></div>
                        <div className="flex gap-5 p-4 rowOneFirstComponent">
                            <div className="pointer-events-auto w-full max-w-[400px] rounded-lg bg-white dark:bg-[#fffffff3] text-[0.8125rem] text-slate-700 shadow-lg">
                                <div className="flex items-center px-3.5 py-2.5 text-slate-400">
                                    <svg className="mr-2 size-5 stroke-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                    <input
                                        className="w-full focus:outline-none text-black rounded-lg transition-all duration-200"
                                        type="text"
                                        placeholder="Search projects..."
                                    />
                                </div>
                                <div className="border-t border-slate-400/20 px-3.5 py-3">
                                    <div className="mb-1.5 text-[0.6875rem] font-semibold text-slate-500">Recent Projects</div>
                                    <div className="space-y-2">
                                        {['Data Analytics Dashboard', 'Customer Insights Portal', 'Market Research Platform'].map((project, index) => (
                                            <div
                                                key={project}
                                                className="group flex items-center rounded-md p-1.5 cursor-pointer hover:bg-[#0b5757] hover:text-white transition-all duration-200"
                                                style={{ animationDelay: `${index * 0.1}s` }}
                                            >
                                                <svg className="mr-2.5 size-5 flex-none stroke-slate-400 group-hover:stroke-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                                </svg>
                                                {project}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2 p-4 ">
                            <div className="rowOneLastComponent w-[19.875rem] rounded-lg bg-white text-[0.8125rem]/5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                                <div className="flex items-center p-4 pb-0">
                                    <img src="https://raw.githubusercontent.com/MahmoudAbdullahAnani/New-Portfolio/refs/heads/main/public/Home-Avtar-removebg-preview.png" alt="" className="size-10 flex-none rounded-full" />
                                    <div className="ml-4 flex-auto">
                                        <div className="font-medium">Mahmoud Anani</div>
                                        <div className="mt-1 text-slate-500">Sent you an invite to connect.</div>
                                    </div>
                                </div>
                                <div className="flex gap-3 p-4">
                                    <button className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem]/5 font-semibold text-white hover:bg-indigo-500">Accept</button>
                                    <button className="pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">Decline</button>
                                </div>
                            </div>
                            <HeroDialog />
                            <HeroModule />

                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="dark:bg-slate-800 flex relative bg-white/90 border-b-2 rounded-b-lg py-4 w-[1024px] shadow-xl transition-all duration-300 ease-out hover:shadow-2xl">
                        {/* Analytics Dashboard Card */}
                        <div className="flex-1 p-4 rowTwoFirstComponent">
                            <div className="rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-slate-800">Analytics Overview</h3>
                                    <div className="flex items-center space-x-2">
                                        <div className="relative">
                                            <button
                                                className="flex items-center rounded border p-1 text-sm cursor-pointer hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                onClick={() => setIsOpen(prev => !prev)}
                                            >
                                                <span className="mr-2">{itemSelected}</span>
                                                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {isOpen &&
                                                <div className="absolute right-0 mt-1 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="py-1" role="menu">
                                                        <button
                                                            className="block w-full px-4 py-2 text-left text-sm hover:bg-emerald-50"
                                                            onClick={() => handlePeriodChange('7 days')}
                                                        >
                                                            Last 7 days
                                                        </button>
                                                        <button
                                                            className="block w-full px-4 py-2 text-left text-sm hover:bg-emerald-50"
                                                            onClick={() => handlePeriodChange('30 days')}
                                                        >
                                                            Last 30 days
                                                        </button>
                                                        <button
                                                            className="block w-full px-4 py-2 text-left text-sm hover:bg-emerald-50"
                                                            onClick={() => handlePeriodChange('90 days')}
                                                        >
                                                            Last 90 days
                                                        </button>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="rounded-md bg-emerald-50 p-4 cursor-pointer hover:bg-emerald-100 transition-colors duration-200 hover:shadow-md" onClick={() => console.log('Views details clicked')}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-sm font-medium text-slate-600">Total Views</div>
                                            <div className="p-2 bg-emerald-100 rounded-full">
                                                <svg className="size-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-2xl font-bold text-emerald-600">45.2K</div>
                                        <div className="flex items-center mt-2">
                                            <svg className="size-4 text-emerald-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                            <span className="text-sm text-emerald-500">+12.5% vs last period</span>
                                        </div>
                                    </div>
                                    <div className="rounded-md bg-blue-50 p-4 cursor-pointer hover:bg-blue-100 transition-colors duration-200 hover:shadow-md" onClick={() => console.log('Engagement details clicked')}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-sm font-medium text-slate-600">Engagement Rate</div>
                                            <div className="p-2 bg-blue-100 rounded-full">
                                                <svg className="size-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-2xl font-bold text-blue-600">62.3%</div>
                                        <div className="flex items-center mt-2">
                                            <svg className="size-4 text-blue-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                            <span className="text-sm text-blue-500">+5.2% vs last period</span>
                                        </div>
                                    </div>
                                    <div className="rounded-md bg-purple-50 p-4 cursor-pointer hover:bg-purple-100 transition-colors duration-200 hover:shadow-md" onClick={() => console.log('Conversion details clicked')}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-sm font-medium text-slate-600">Conversions</div>
                                            <div className="p-2 bg-purple-100 rounded-full">
                                                <svg className="size-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-2xl font-bold text-purple-600">1.2K</div>
                                        <div className="flex items-center mt-2">
                                            <svg className="size-4 text-purple-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                            <span className="text-sm text-purple-500">+8.1% vs last period</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Activity Feed Card */}
                        <div className="flex-1 p-4">
                            <div className="rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-slate-800">Recent Activity</h3>
                                    <button
                                        className="text-sm text-slate-500 hover:text-slate-700 px-3 py-1 rounded-md hover:bg-slate-100 transition-colors duration-200"
                                        onClick={() => console.log('View all activities clicked')}
                                    >
                                        View All
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { title: 'New project created', time: '2 hours ago', type: 'create' },
                                        { title: 'Report generated', time: '5 hours ago', type: 'report' },
                                        { title: 'Team meeting scheduled', time: 'Yesterday', type: 'meeting' }
                                    ].map((activity, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3 border-b pb-3 last:border-0 cursor-pointer hover:bg-slate-50 rounded-md p-2 transition-colors duration-200"
                                            onClick={() => console.log('Activity clicked:', activity.title)}
                                        >
                                            <div className={`rounded-full p-2 ${activity.type === 'create' ? 'bg-green-100 hover:bg-green-200' :
                                                activity.type === 'report' ? 'bg-blue-100 hover:bg-blue-200' : 'bg-yellow-100 hover:bg-yellow-200'
                                                } transition-colors duration-200`}>
                                                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d={activity.type === 'create' ? "M12 4v16m8-8H4" :
                                                            activity.type === 'report' ? "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" :
                                                                "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-slate-700">{activity.title}</div>
                                                <div className="text-xs text-slate-500">{activity.time}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <style jsx>{`
                
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(100px) rotate(-5deg) skewY(-12deg); }
                    to { opacity: 1; transform: translateX(0) rotate(-5deg) ; }
                }
                
                .animate-slideIn {
                    animation: slideIn 1s ease-out forwards;
                }
            `}</style>

        </Container>
    )
}