"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function SideLeftContentComponent({ componentsByCategory }) {
    const [titleComponents, setTitleComponents] = useState([])

    const typeComponentHandlePathName = localStorage.getItem("componentView").replace("-", " ").toLowerCase()

    useEffect(() => {
        componentsByCategory.map(({ categoryTitle, componentItems }) => {
            categoryTitle.toLowerCase() == typeComponentHandlePathName.slice(1, -1).toLowerCase() && setTitleComponents(componentItems)
        })
    }, [])
    const [scrollPointTopFooter, setScrollPointTopFooter] = useState(false)
    document.addEventListener('scroll', () => {
        const scrollOffset = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollOffset / (scrollHeight - window.innerHeight)) * 100;

        scrollPercentage >= 93 ? setScrollPointTopFooter(true) : setScrollPointTopFooter(false)
    })
    return (
        <ul className={`${scrollPointTopFooter ? "max-h-[60vh] overflow-auto" : "max-h-[90vh]"} no-scrollbar`}>
            {titleComponents.map(({ category, count, emoji, id, slug, title }) => (
                <li className={`text-start ms-12 my-8 text-black dark:text-white 
                    ${typeComponentHandlePathName === `${localStorage.getItem("componentView")}` ? 'text-[#00655b]' : ''}
            `} key={id}>
                    <Link className={`hover:text-[#00655b] hover:underline duration-75`} href={`/components/${category}/${slug}`}>{emoji} {title}</Link>
                </li>
            ))}
        </ul>
    )
}