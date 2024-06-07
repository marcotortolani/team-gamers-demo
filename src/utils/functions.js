export function cleanDataPosts({
  posts,
  categorySlug,
  allCategoriesData,
  videosCategoryID,
}) {
  // process the content and return an object with id, title, images array, paragraph excerpt array
  let data = []
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    let imgArray = [],
      pExcerpt = []
    if (!post) continue
    post.excerpt.rendered
      .split('</p>')
      .map((item) => item.trim())
      .filter((item) => item !== '')
      .forEach((paragraph) => {
        pExcerpt.push(paragraph.replace(/<[^>]+>/g, ''))
      })

    post.content.rendered
      .split('</p>')
      .map((item) => item.trim())
      .forEach((element) => {
        if (element.includes('<img')) {
          const image = element.match(/src="(.*?)"/)[1].replaceAll('"', '')
          imgArray.push(image)
        }
        // else if (element !== "") {
        //   pArray.push(element);
        // }
      })

    data.push({
      id: post.id,
      category:
        categorySlug !== 0
          ? categorySlug
          : allCategoriesData.find(
              (categ) =>
                categ.id ===
                post.categories.filter((cat) => cat !== videosCategoryID)[0]
            ).slug,
      title: post.title.rendered,
      excerpt: pExcerpt[0],
      images: imgArray,
    })
  }

  return data
}

export function getRandomPosts({ posts, qty = 'all' }) {
  if (qty === 'all' || qty > posts.length) return posts

  const elements = qty < 1 ? 1 : qty

  let postsRandom = []
  while (postsRandom.length < elements) {
    const index = Math.floor(Math.random() * posts.length)
    if (!postsRandom.some((el) => el.id === posts[index].id)) {
      postsRandom.push(posts[index])
    }
  }
  return postsRandom
}

export function getLatestPosts({ posts, qty = 'all' }) {
  if (qty === 'all' || qty > posts.length) return posts
  // take the "qty" latest
  const latestPosts = []
  for (let i = 0; i < qty; i++) {
    let post = posts[i]
    if (!post) break
    latestPosts.push(post)
  }

  return latestPosts
}

export function getImageHeaderPost(postData) {
  if (!postData) return

  // process the content and return the first image from an array
  let imgArray = []

  postData?.content.rendered
    .split('</p>')
    .map((item) => item.trim())
    .forEach((element) => {
      if (element.includes('<img')) {
        const image = element.match(/src="(.*?)"/)[1].replaceAll('"', '')
        imgArray.push(image)
      }
    })

  return imgArray[imgArray.length - 1]
}

export function getVimeoNumber({ string }) {
  // Expresión regular para encontrar el número después de "vimeo.com/"
  const regex = /vimeo.com\/(\d+)/
  // Aplicar la expresión regular a la cadena
  //const match = string.match(regex);

  const match = string.match(/src="https:\/\/player.vimeo.com\/video\/(\d+)\?/)
  // Verificar si se encontró el número
  return match && match[1] ? match[1] : null
}

export function cleanDataSearch() {}

export function processDataRendered(content) {
  const imagePattern =
    /<img\s+[^>]*class=["'][^"']*imagen[^"']*["'][^>]*\s+src=["'](.+?)["'][^>]*>/g
  const imageFeaturedPattern =
    /<img\s+[^>]*class=["'][^"']*img-destacada[^"']*["'][^>]*\s+src=["'](.+?)["'][^>]*>/g
  const imageSliderPattern =
    /<img\s+[^>]*class=["'][^"']*slider[^"']*["'][^>]*\s+src=["'](.+?)["'][^>]*>/g
  const headingTitlePattern = /<h1\s+class=["']titulo["']>(.*?)<\/h1>/
  const headingDestacado1Pattern = /<h2\s+class=["']destacado-1["']>(.*?)<\/h2>/
  const headingDestacado2Pattern = /<h2\s+class=["']destacado-2["']>(.*?)<\/h2>/
  const paragraphPattern = /<p>(.*?)<\/p>/
  const listPattern = /<ul\s+class=["']lista["']>(.*?)<\/ul>/
  const listItemPattern = /<li>(.*?)<\/li>/g
  const bajadaPattern = /<p\s+class=["']bajada["']>(.*?)<\/p>/

  const imagesSlider = []
  const elements = []

  // Regex pattern to match HTML tags and content
  const fragmentPattern =
    /(<img\s+[^>]*\/?>)|(<(?:h[1-6]|p|ul|li)[^>]*>[\s\S]*?<\/(?:h[1-6]|p|li)>|<\/?ul>)/gis

  const fragments = content.match(fragmentPattern).filter(Boolean)

  // Process the fragments to combine <ul> and its contents into a single element
  const processedFragments = []
  let ulContent = ''

  fragments.forEach((fragment) => {
    if (fragment.startsWith('<ul')) {
      ulContent = fragment // Start collecting <ul> content
    } else if (fragment.startsWith('</ul')) {
      ulContent += fragment // End collecting <ul> content
      processedFragments.push(
        ulContent
          .replace('\n', '')
          .replace('\n<p>&nbsp;</p>', '')
          .replace('<p>&nbsp;</p>', '')
      ) // Push the combined <ul> content without the &nbsp; paragraph
      ulContent = '' // Reset for next <ul>
    } else if (ulContent) {
      ulContent += fragment // Continue collecting <ul> content
    } else {
      processedFragments.push(fragment) // Non-<ul> content
    }
  })

  let inList = false
  let currentList = []

  processedFragments.forEach((fragment) => {
    let match

    // Process Images from class "slider"
    if ((match = imageSliderPattern.exec(fragment))) {
      imagesSlider.push(match[1])
      imageSliderPattern.lastIndex = 0 // Reset regex index
    }

    // Process "bajada"
    if ((match = bajadaPattern.exec(fragment))) {
      elements.push({ type: 'bajada', content: match[1] })
    }
    // Process "img-destacada"
    if ((match = imageFeaturedPattern.exec(fragment))) {
      elements.push({ type: 'img-destacada', content: match[1] })
    }
    // Process regular images with class name "imagen"
    if ((match = imagePattern.exec(fragment))) {
      elements.push({ type: 'imagen', content: match[1] })
    }
    // Process h1
    if ((match = headingTitlePattern.exec(fragment))) {
      elements.push({ type: 'titulo', content: match[1] })
    }
    // Process "destacado-1"
    if ((match = headingDestacado1Pattern.exec(fragment))) {
      elements.push({ type: 'destacado-1', content: match[1] })
    }
    // Process "destacado-2"
    if ((match = headingDestacado2Pattern.exec(fragment))) {
      elements.push({ type: 'destacado-2', content: match[1] })
    }

    // Process Unordered Lists
    if ((match = listPattern.exec(fragment))) {
      inList = true
      currentList = []
      let listItemMatch
      while ((listItemMatch = listItemPattern.exec(match[1]))) {
        const listItemContent = listItemMatch[1].match(
          /<strong>(.*?)<\/strong>(.*)/s
        )
        if (listItemContent) {
          currentList.push({
            title: listItemContent[1].trim(),
            content: listItemContent[2].trim(),
          })
        } else {
          currentList.push({ title: '', content: listItemMatch[1].trim() })
        }
      }
      elements.push({ type: 'lista', content: currentList })
      listPattern.lastIndex = 0 // Reset regex index
    }
    if (inList && fragment.startsWith('</ul>')) {
      inList = false
    }
    // Process Paragraphs
    if ((match = paragraphPattern.exec(fragment))) {
      // Avoid paragraphs with <img/>
      if (!/<img\s+.*?>/.test(fragment)) {
        elements.push({ type: 'paragraph', content: match[1] })
      }
    }
  })
  return { imagesSlider, elements }
}
