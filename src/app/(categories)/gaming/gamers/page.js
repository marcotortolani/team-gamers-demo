'use client'
import React, { useState, useEffect } from 'react'
import { getData, getCategoryId } from '@/services/api-content'
import { Gamepad2 } from 'lucide-react'
import CardsGamers from '@/app/components/CardsGamers'
import { TitleSection } from '@/app/components/ui/TitleSection'
import { CAT_GAMERS as cat } from '@/utils/static_data'

export default function GamersPage() {
  const [gamersData, setGamersData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const itemsPerPage = 24 // Ajusta según necesites

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const gamersID = await getCategoryId(cat?.gamers.name)
        const response = await getData(
          `categories?parent=${gamersID}&per_page=${itemsPerPage}&page=${currentPage}`
        )

        setGamersData(response.data)

        // Obtener el total de páginas desde la respuesta
        if (response.pages) {
          setTotalPages(parseInt(response.pages))
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll al inicio de la sección
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="z-0 relative w-full pt-28 mb-24 px-4 flex flex-col items-center gap-2">
      <section className="w-screen md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit relative top-0 flex flex-col items-center gap-4">
        <TitleSection
          icon={Gamepad2}
          title="Nuestros Gamers"
          outline
          borderColor="border-Primary"
        />
        <p className="w-full max-w-[350px] md:max-w-[450px] px-8 mb-4 text-base md:text-lg lg:text-xl text-White uppercase font-normal text-center">
          ¡Nuestros videos exclusivos te ayudaran a convertirte en el mejor
          gamer!
        </p>

        {loading ? (
          <div className="w-full h-64 flex items-center justify-center">
            <p className="text-White text-lg">Cargando...</p>
          </div>
        ) : (
          <>
            <CardsGamers gamersData={gamersData} path={`/${cat.gamers.slug}`} />

            {totalPages > 1 && (
              <Pagination
                path=""
                page={currentPage}
                pages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </section>
    </main>
  )
}

function Pagination({ page, pages = 1, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(parseInt(page))
  }, [])

  return (
    <div className="  w-full mt-6 px-4 flex items-center justify-center gap-1 xs:gap-2 ">
      {Array.from({ length: parseInt(pages) }, (_, index) => (
        <button
          className={`${
            currentPage === index + 1 ? 'bg-Secondary' : 'bg-gray-100'
          } w-5 h-5 text-xs aspect-square xs:w-6 xs:h-6 xs:text-sm rounded-full text-Black`}
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

// import React from 'react'
// import { getData, getCategoryId } from '@/services/api-content'
// import { Gamepad2 } from 'lucide-react'
// import CardsGamers from '@/app/components/CardsGamers'
// import { TitleSection } from '@/app/components/ui/TitleSection'
// import { CAT_GAMERS as cat } from '@/utils/static_data'

// export default async function GamersPage() {
//   // este nombre de categoria en realidad es "gamers" pero no
//   // esta funcionando, puede ser algo de cache en los cambios
//   const gamersID = await getCategoryId(cat?.gamers.name)
//   const { data } = await getData(`categories?parent=${gamersID}&per_page=100`)

//   return (
//     <main className=" z-0 relative w-full pt-28 mb-24 px-4 flex flex-col items-center gap-2 ">
//       <section className=" w-screen md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit relative top-0 flex flex-col items-center gap-4">
//         <TitleSection
//           icon={Gamepad2}
//           title="Nuestros Gamers"
//           outline
//           borderColor="border-Primary"
//         />
//         <p className=" w-full max-w-[350px] md:max-w-[450px] px-8 mb-4 text-base md:text-lg lg:text-xl text-White uppercase font-normal text-center">
//           ¡Nuestros videos exclusivos te ayudaran a convertirte en el mejor
//           gamer!
//         </p>

//         <CardsGamers gamersData={data} path={`/${cat.gamers.slug}`} />
//       </section>
//     </main>
//   )
// }
