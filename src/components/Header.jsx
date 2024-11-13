'use client'



import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import BrandLogo from '@component/BrandLogo'
import Container from '@component/Container'
import BtnSocial, { IconGithub } from '@component/BtnSocial'
import HeaderMenu from '@component/HeaderMenu'
import HeaderMenuLinks from '@component/HeaderMenuLinks'
import HeaderSearch from '@component/HeaderSearch'
import LangBtn, { IconClick, IconTop, langs } from './external/Lang/LangBtn'
import BtnSwitcherThem from './external/themSwitcher/BtnSwitcherThem'

export default function Header() {
  const routerPathname = usePathname()

  const [showMenu, setShowMenu] = useState(false)

  const [stargazers_count, setStargazers_count] = useState()
  const getStartOnGitHub = async () => {
    const stargazers = await fetch("https://api.github.com/repos/MahmoudAbdullahAnani/FastWind").then(res => res.json()).then(res => res.stargazers_count)
    setStargazers_count(stargazers);
    return stargazers
  }
  useEffect(() => {
    getStartOnGitHub()

    return () => { }
  }, [stargazers_count])

  useEffect(() => setShowMenu(false), [routerPathname])

  const menuLinks = [
    {
      title: 'Application UI',
      href: '/components/application-ui',
    },
    {
      title: 'Marketing',
      href: '/components/marketing',
    },
    {
      title: 'Ecommerce',
      href: '/components/ecommerce',
    },
    {
      title: 'Template',
      href: '/components/template',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
  ]

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
      <Container classNames="relative flex h-16 items-center justify-between gap-4 sm:gap-8">
        <div className="flex items-center gap-4">
          <BrandLogo />

          <HeaderMenuLinks menuLinks={menuLinks} navClass="hidden md:block" ulClass="gap-4 flex" />
        </div>

        <div className="sm:flex grid grid-cols-3 gap-2 sm:gap-4">
          <div className={`col-span-2`}>
            <HeaderSearch />
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
            <BtnSocial href="https://github.com/MahmoudAbdullahAnani/FastWind"
              rel="noreferrer"
              target="_blank"
              className="inline-flex items-center gap-[3px] text-gray-900 hover:opacity-75" icon={<IconGithub stargazers_count={stargazers_count} showK={true} />} title={<span className={`sr-only`}> GitHub </span>}
            />
            <BtnSocial href="https://t.me/fastwindui"
              rel="noreferrer"
              target="_blank"
              showTitle={true}

              className="sm:inline-flex hidden items-center gap-[3px] text-gray-900 hover:opacity-75" icon={<div title='telegram channel'>
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
              </div>} title={<span title='telegram channel' className={`sm:block hidden`}> Telegram </span>}
            />
            <div className="hidden sm:flex gap-2">
              <LangBtn dataMenu={langs} iconClick={<IconClick />} iconView={<IconTop />} />
            </div>
            <BtnSwitcherThem />

            <HeaderMenu showMenu={showMenu} handleSetShowMenu={setShowMenu} menuLinks={menuLinks} />
          </div>
        </div>
      </Container>
    </header>
  )
}
