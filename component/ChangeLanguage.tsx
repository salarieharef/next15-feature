'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

const ChangeLanguage = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useTranslation('common')

  const changeLanguage = (locale: string) => {
    const currentPath = pathname.split('/').slice(2).join('/')
    router.push(`/${locale}/${currentPath}`)
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('fa')}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {t('switchToPersian')}
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        {t('switchToEnglish')}
      </button>
    </div>
  )
}

export default ChangeLanguage 