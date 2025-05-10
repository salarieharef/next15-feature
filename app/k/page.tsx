'use client'

const KPage = () => {
  const cookies = document.cookie
  console.log(cookies)
  return (
    <div>
      <h1>simple get cookies in client component</h1>
      <p>{cookies}</p>
    </div>
  )
}

export default KPage