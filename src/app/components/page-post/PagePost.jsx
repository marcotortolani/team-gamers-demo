import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { cleanDataPosts, processDataRendered } from '@/utils/functions'
import {
  getDataPostById,
  getDataCategoryByPostId,
} from '@/services/api-content'

import ButtonLikeFav from '../ui/ButtonLikeFav'
import Breadcrumb from '../ui/Breadcrumb'
import StyledElements from './StyledElements'
import ImagesSlider from './ImagesSlider'
import ShareSocialMedia from './ShareSocialMedia'

export default async function PagePost({ id, children }) {
  const dataPost = await getDataPostById(id)
  const categoryData = await getDataCategoryByPostId(`${id}&parent=0`)
  const dataRendered = dataPost?.content.rendered
  //const dataRendered =
  // '<h1 class="titulos">Titulo principal de ejemplo</h1>\n<p class="bajada">La moneda premium del <span>battle royale</span> se usa principalmente para conseguir skins.</p>\n<img class="img-destacada" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jczW72gjOU2T_WG69L7U0A.png" />\n<p>Dicen que la imitación es la forma más sincera de adulación que existe. Y parece ser que los <span>creadores de Stumble Guys es lo que tenían en mente</span> cuando quisieron apostar a caballo ganador tratando de emular uno de los juegos más populares que se lanzaron en plena pandemia, Fall Guys. El título de Kitka Games comparte planteamiento y humor, y adictivo como es, queremos repasar con vosotros cómo conseguir las gemas, que son la moneda premium del juego, y para qué sirven.</p>\n<h2 class="destacado-1">Qué son las gemas de Stumble Guys, y por qué es necesario utilizarlas de forma inteligente.</h2>\n<p>Las gemas de Stumble Guys son el tipo de moneda premium que hay en el juego. Sirven principalmente <span>para conseguir skins</span> pero también tienen la utilidad de permitir dar vueltas a la ruleta que hay en el menú del juego para hacernos con diversos premios como skins, tokens (que sirven para conseguir las &#8221;benditas&#8221; loot boxes con más premios) o incluso más gemas.</p>\n<p><img loading="lazy" class="imagen alignnone wp-image-1750 size-full" src="https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble2.jpg" alt="" width="900" height="506" srcset="https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble2.jpg 900w, https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble2-300x169.jpg 300w, https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble2-768x432.jpg 768w, https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble2-700x394.jpg 700w, https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble2-539x303.jpg 539w" sizes="(max-width: 900px) 100vw, 900px" /></p>\n<h2 class="destacado-2">Cómo conseguir gemas gratis en Stumble Guys</h2>\n<p>Existe una variedad de opciones a la hora de conseguir las gemas gratis, y la mayoría de ellas implica realizar algunas actividades en el juego y -por desgracia- viendo algún que otro anuncio (recordemos que es un Free-2-Play). Los métodos son los que siguen a continuación:</p>\n<ul class="lista">\n<li><strong>Ganar Partidas:</strong> Obtenemos una modesta cantidad de gemas al ganar una partida o quedar entre los primeros en una de ellas. Adicionalmente, si no saltamos la publicidad se nos concederán algunas pocas.</li>\n<li><strong>Mirar anuncios:</strong> Relacionado con el punto anterior, el juego nos propondrá que veamos alguno de los anuncios de su sponsor para obtener algunas gemas más. Apostar gemas gemas en Torneos. Una forma bastante arriesgada de conseguirlas. Es posible ver partidas del juego y apostar a ver quiénes serán los últimos en quedar en pie.</li>\n</ul>\n<p>&nbsp;</p>\n<p><img loading="lazy" class="imagen alignnone wp-image-1751 size-large" src="https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble3-1024x493.jpg" alt="" width="1024" height="493" srcset="https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble3-1024x493.jpg 1024w, https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble3-300x144.jpg 300w, https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble3-768x370.jpg 768w, https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble3-700x337.jpg 700w, https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble3.jpg 1061w" sizes="(max-width: 1024px) 100vw, 1024px" /></p>\n<p>Así mismo, también es posible conseguir algunas gemas avanzando por los niveles del pase de batalla. Existen dos versiones de este actualmente: la gratuita y la premium; obviamente, esta segunda opción es la que nos reportará una mayor cantidad de gemas, entre sus distintos niveles.</p>\n<p>Así mismo, también es posible conseguir cierto número de gemas completando algunas misiones u objetivos diarios. Entre ellos pueden haber también otras gemas aunque en cantidad menor. Completar un número determinado de estas misiones aumentará nuestro número de gemas en el juego. Existe más información sobre los distintos tipos de divisa en la página de soporte oficial de Stumble Guys.</p>\n<p><img loading="lazy" class="imagen alignnone wp-image-1749 size-full" src="https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble-dest.jpg" alt="" width="800" height="500" srcset="https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble-dest.jpg 800w, https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble-dest-300x188.jpg 300w, https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble-dest-768x480.jpg 768w, https://s3-sa-east-1.amazonaws.com/assets.pe.entel.mujeres.fit/wp-content/uploads/2024/03/gemas-stumble-dest-700x438.jpg 700w" sizes="(max-width: 800px) 100vw, 800px" /></p>\n<img class="slider" src="https://www.nintendo.com/eu/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg" />\n<img class="slider" src="https://cdn.mos.cms.futurecdn.net/HRCLejCCvkfNR4tuz7tdeS-1200-80.jpg.webp" />\n<img class="slider" src="https://images2.thanhnien.vn/zoom/736_460/528068263637045248/2024/3/11/the-super-mario-bros-movie-streaming-1710126182083-17101261825552145419622-0-59-675-1139-crop-1710126235820494128939.jpg" />'

  const { imagesSlider, elements } = processDataRendered(dataRendered)

  const post = cleanDataPosts({
    posts: new Array(dataPost),
    categorySlug: categoryData[0].slug,
  })

  return (
    <main
      className={`z-20 mt-28 md:mb-10 md:mt-32 w-screen max-w-screen-xl h-full min-h-screen px-6 pt-6 bg-White text-Black flex flex-col items-center gap-4 md:rounded-xl`}
    >
      <div className="z-50 top-0 m-2 right-0 w-full lg:max-w-4xl h-10 flex items-center justify-between">
        <Breadcrumb homeElement={'Home'} separator={'>'} />
        <ButtonLikeFav color="#000" post={post[0]} />
      </div>
      <section className=" w-full lg:max-w-4xl flex flex-col items-center gap-4">
        <h1
          className={
            ' w-full uppercase font-oswaldItalic pointer-events-none cursor-default text-[1.8rem] leading-[2rem] md:text-3xl lg:text-4xl text-Black text-left  '
          }
        >
          {ReactHtmlParser(post[0]?.title)}
        </h1>
        <div className=" z-20 w-full h-8 flex items-center justify-start gap-4">
          <ShareSocialMedia title={post[0].title} category={post[0].category} />
        </div>
        {elements.map((el, i) => (
          <React.Fragment key={i}>
            {el.type === 'destacado-2' && (
              <ImagesSlider images={imagesSlider} centered key={el.content} />
            )}
            <StyledElements key={el.content} el={el} />
          </React.Fragment>
        ))}
      </section>
      {children}
      <div className="w-full h-10 md:h-20"></div>
    </main>
  )
}
