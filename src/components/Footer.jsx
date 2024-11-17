import Link from 'next/link'

import Container from '@component/Container'
import BrandLogo from '@component/BrandLogo'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:bg-black dark:border-slate-800">
      <Container classNames="py-8 lg:py-12">
        <BrandLogo />

        <div className="mt-6">
          <p className="max-w-md text-pretty leading-relaxed text-gray-700 dark:text-white">
            Free open source Tailwind CSS components for marketing and eCommerce websites, as well
            as application UI.
          </p>

          <div className="mt-4 lg:flex lg:items-end lg:justify-between">


            <p className="mt-4 text-sm text-gray-700 dark:text-white lg:mt-0">
              Created by{' '}
              <Link
                href="https://mahmoud-anani.vercel.app"
                rel="noreferrer"
                target="_blank"
                className="inline-block font-medium hover:text-gray-900 hover:dark:text-white hover:dark:bg-slate-600 hover:dark:rounded-lg p-2"
              >
                Mahmoud Anani
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
