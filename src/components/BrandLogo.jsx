'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function BrandLogo() {
  return (
    <Link className={`inline-flex`} href="/">
      <Image src="/favicon.ico" className={`min-w-[32px]`} alt="Fast Wind UI" width={32} height={32} />
    </Link>
  )
}
