import { redirect } from 'next/navigation'

function cleanDataCategories({ dataCategories }) {
  return dataCategories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
  }))
}

export default function VideosPage() {
  redirect('/videos/1')
}
