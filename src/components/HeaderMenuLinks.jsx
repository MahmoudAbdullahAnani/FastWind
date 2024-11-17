import Link from 'next/link'
import LangBtn, { IconClick, IconTop, langs } from './external/Lang/LangBtn'
import BtnSocial from './BtnSocial'

export default function HeaderMenuLinks({ menuLinks, navClass = '', ulClass = '' }) {
  return (
    <nav className={navClass}>
      <ul className={ulClass}>
        <div className="sm:hidden block">
          <LangBtn dataMenu={langs} iconClick={<IconClick />} iconView={<IconTop />} />
        </div>
        <BtnSocial href="https://t.me/fastwindui"
          rel="noreferrer"
          target="_blank"
          showTitle={true}
          className="inline-flex sm:hidden items-center gap-[3px] text-gray-900 dark:text-white hover:opacity-75" icon={<div title='telegram channel'>
            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
          </div>} title={<span title='telegram channel' className={`block sm:hidden`}> Telegram </span>}
        />
        {menuLinks.map(({ href, title }) => {
          return (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white hover:opacity-75"
              >
                {title}
              </Link>
            </li>
          )
        })}

      </ul>
    </nav>
  )
}
