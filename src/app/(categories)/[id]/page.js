import React from 'react'
import PagePost from '@/app/components/PagePost'

export default function page({ params }) {
  const { id } = params

  return (
    <main
      className={`z-0 text-White mt-36 w-full h-full min-h-screen px-4 flex flex-col items-center gap-4`}
    >
      <PagePost id={id} />
      <div className="w-full h-20"></div>
    </main>
  )
}
