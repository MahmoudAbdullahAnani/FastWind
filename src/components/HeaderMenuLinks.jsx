import Link from 'next/link'
import LangBtn, { IconClick, IconTop, langs } from './external/Lang/LangBtn'

export default function HeaderMenuLinks({ menuLinks, navClass = '', ulClass = '' }) {
  return (
    <nav className={navClass}>
      <ul className={ulClass}>
         <div className="sm:hidden block">
            <LangBtn dataMenu={langs} iconClick={<IconClick />} iconView={<IconTop />}/>
          </div>
        {menuLinks.map(({ href, title }) => {
          return (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:opacity-75"
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
