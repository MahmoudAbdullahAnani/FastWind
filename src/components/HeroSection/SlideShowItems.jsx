"use client"
import React, { useEffect, useState } from 'react'

export default function SlideShowItems({ componentsByCategory }) {


    return (
        <div className={`relative whitespace-nowrap w-full flex items-center justify-center gap-8 overflow-hidden no-scrollbar mb-12 mt-8`}>
            <div className={`marquee whitespace-nowrap`}>
                {componentsByCategory.map(({ componentItems = [] }) => {
                    return <SingleSlideItemShow componentItems={componentItems} />
                })}
            </div>
            <div className={`absolute top-0 marquee2 whitespace-nowrap`}>
                {componentsByCategory.map(({ componentItems = [] }) => {
                    return <SingleSlideItemShow componentItems={componentItems} />
                })}
            </div>
        </div>
    )
}

function SingleSlideItemShow({ componentItems }) {

    return (
        <>
            {
                componentItems.map(({ title }) => <span className={`text-4xl py-4 mx-8 dark:text-[#cccfcf] text-[#a8abab] hover:text-[#000]`}>{title}</span>)
            }
        </>
    )
}
