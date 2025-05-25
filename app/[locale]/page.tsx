'use client'

import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">{t('welcome')}</h1>
      <p className="text-xl">{t('helloWorld')}</p>
    </main>
  )
} 