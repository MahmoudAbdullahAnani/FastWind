import MenuLinks from '@component/HeaderMenuLinks'

export default function HeaderMenu({ showMenu, handleSetShowMenu, menuLinks }) {
  document.body.style.overflow = showMenu ? 'hidden' : 'auto'
  return (
    <div className="flex items-center md:hidden">
      <button onClick={() => handleSetShowMenu(!showMenu)} className="text-gray-900">
        <IconMenu />

        <span className="sr-only">Toggle menu</span>
      </button>

      {showMenu && (
        <>
        <div className="absolute inset-x-0 top-14 px-2 z-[9]">
          <MenuLinks
            menuLinks={menuLinks}
            navClass="bg-white border p-4 border-gray-200 shadow-lg rounded-md"
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
