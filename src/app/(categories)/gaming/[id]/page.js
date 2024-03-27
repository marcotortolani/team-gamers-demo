import React from 'react'
import { CAT_EDITORIAL as cat } from '@/utils/static_data'
import SectionRecommended from '@/app/components/SectionRecommended'
import PagePost from '@/app/components/PagePost'

export default function page({ params }) {
  const { id } = params

  return (
    <main
      className={`z-0 text-White mt-36 w-full h-full min-h-screen px-4 flex flex-col items-center gap-4`}
    >
      <PagePost id={id} />
      <SectionRecommended category={cat.editorial} qty={2} />

      <div className="w-full h-20"></div>
    </main>
  )
}
