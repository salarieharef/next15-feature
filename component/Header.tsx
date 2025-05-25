'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import ChangeLanguage from './ChangeLanguage'

const Header = () => {
  const { t } = useTranslation('common')

  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      <nav className="flex gap-4">
        <Link href="/" className="hover:text-blue-500">
          {t('home')}
        </Link>
        <Link href="/about" className="hover:text-blue-500">
          {t('about')}
        </Link>
        <Link href="/contact" className="hover:text-blue-500">
          {t('contact')}
        </Link>
      </nav>
      <ChangeLanguage />
    </header>
  )
}

export default Header