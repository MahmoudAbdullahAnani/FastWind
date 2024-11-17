import MenuLinks from '@component/HeaderMenuLinks'
import HeaderSearch from '@component/HeaderSearch'
import BtnSocial, { IconGithub } from './BtnSocial'
import LangBtn, { IconClick, IconTop, langs } from './external/Lang/LangBtn'
import BtnSwitcherThem from './external/themSwitcher/BtnSwitcherThem'

export default function HeaderMenu({ cuestemScreen = false, showMenu, handleSetShowMenu, menuLinks }) {
  document.body.style.overflow = showMenu ? 'hidden' : 'auto'
  if (cuestemScreen) {
    return <div className="items-center sm:flex [@media(min-width:950px)]:hidden">
      <button onClick={() => handleSetShowMenu(!showMenu)} className="text-gray-900 dark:text-white">
        <IconMenu />

        <span className="sr-only">Toggle menu</span>
      </button>
      {showMenu && (
        <>
          <div className="absolute inset-x-0 top-14 px-2 z-[9]">
            {/* Start Switched components */}
            <div className={`bg-white dark:bg-black rounded-t-md p-2 flex items-center justify-between`}>
              <HeaderSearch />
              <div className="flex justify-between gap-2 items-center">
                <BtnSocial href="https://github.com/MahmoudAbdullahAnani/FastWind"
                  rel="noreferrer"
                  target="_blank"
                  className="inline-flex items-center gap-[3px] text-gray-900 dark:text-white hover:opacity-75" icon={<IconGithub stargazers_count={window.sessionStorage.getItem('stargazers_count')} showK={true} styleSpan={`dark:text-white text-black`} />} title={<span className={`sr-only`}> GitHub </span>}
                />
                <BtnSocial href="https://t.me/fastwindui"
                  rel="noreferrer"
                  target="_blank"
                  showTitle={true}

                  className="sm:inline-flex hidden items-center gap-[3px] text-gray-900 dark:text-white hover:opacity-75" icon={<div title='telegram channel'>
                    <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                  </div>} title={<span title='telegram channel' className={``}> Telegram </span>}
                />
              </div>
              <div className="hidden sm:flex gap-2">
                <LangBtn dataMenu={langs} iconClick={<IconClick />} iconView={<IconTop />} />
              </div>
              <BtnSwitcherThem />
            </div>
            {/* End Switched components */}
            <MenuLinks
              menuLinks={menuLinks}
              navClass="bg-white dark:bg-black p-4 shadow-lg rounded-b-md"
              ulClass="space-y-4"
            />
          </div>
          <div className="fixed w-[100%] inset-0 bg-gray-600 bg-opacity-75 z-[8]" onClick={() => handleSetShowMenu(false)}></div>
        </>
      )}
    </div>
  }
  return (
    <div className="flex items-center sm:hidden">
      <button onClick={() => handleSetShowMenu(!showMenu)} className="text-gray-900 dark:text-white">
        <IconMenu />

        <span className="sr-only">Toggle menu</span>
      </button>

      {showMenu && (
        <>
          <div className="absolute inset-x-0 top-14 px-2 z-[9]">
            <MenuLinks
              menuLinks={menuLinks}
              navClass="bg-white dark:bg-black border p-4 border-gray-200 shadow-lg rounded-md"
              ulClass="space-y-4"
            />
          </div>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-[8]" onClick={() => handleSetShowMenu(false)}></div>
        </>
      )}
    </div>
  )
}

function IconMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}
