"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function SideRightContentComponent(data) {
    const [titleComponentNow, setTitleComponentNow] = useState(window.location.hash)

    return (
        <ul>
            {Object.entries(data.collectionContent).map(([key, value]) => (
                <li className={`my-8`} key={key}>
                    <Link className={`text-black dark:text-white ${titleComponentNow === `#component-${key}` ? '!text-[#3e948be8]' : ''} hover:dark:text-[#00655b] hover:underline duration-75`} href={`#component-${key}`} onClick={() => setTitleComponentNow(`#component-${key}`)}>{value.title}</Link>
                </li>
            ))}
        </ul>
    )
}
