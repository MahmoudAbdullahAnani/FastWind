import { join } from 'path'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'

import Container from '@component/Container'
import HeroBanner from '@component/HeroBanner'
import CollectionGrid from '@component/CollectionGrid'
import HeroSection from '@component/HeroSection/HeroSection'
import SlideShowItems from '@component/HeroSection/SlideShowItems'

export async function getComponents() {
  const componentsPath = join(process.cwd(), '/src/data/components')
  const categoriesPath = join(process.cwd(), '/src/data/categories')

  const categorySlugs = ['application-ui', 'marketing']
  const componentSlugs = await fs.readdir(componentsPath)

  const componentsByCategory = await Promise.all(
    categorySlugs.map(async (categorySlug) => {
      const categoryPath = join(categoriesPath, `${categorySlug}.mdx`)
      const categoryItem = await fs.readFile(categoryPath, 'utf-8')

      const { frontmatter: categoryData } = await serialize(categoryItem, {
        parseFrontmatter: true,
      })

      const componentItems = await Promise.all(
        componentSlugs
          .filter((componentSlug) => componentSlug.includes(categorySlug))
          .map(async (componentSlug) => {
            const componentPath = join(componentsPath, componentSlug)
            const componentItem = await fs.readFile(componentPath, 'utf-8')

            const { frontmatter: componentData } = await serialize(componentItem, {
              parseFrontmatter: true,
            })

            const componentSlugFormatted = componentSlug.replace('.mdx', '')
            const componentSlugTrue = componentSlugFormatted.replace(
              `${componentData.category}-`,
              ''
            )
            const componentCount = Object.values(componentData.components).length

            return {
              title: componentData.title,
              slug: componentSlugTrue,
              category: componentData.category,
              emoji: componentData.emoji,
              count: componentCount,
              tag: componentData.tag,
              id: componentSlugFormatted,
            }
          })
      )

      componentItems.sort((itemA, itemB) => itemA.title.localeCompare(itemB.title))

      return {
        categoryTitle: categoryData?.title,
        componentItems,
      }
    })
  )

  return componentsByCategory
}

export default async function Page() {
  const componentsByCategory = await getComponents()

  return (
    <>
      {/* <HeroBanner title={process.env.NAME_PROJECT} subtitle="Free Open Source Tailwind CSS Components">
        {process.env.NAME_PROJECT} is a collection of free Tailwind CSS components that can be used in your next
        project. With a range of components, you can build your next marketing website, admin
        dashboard, eCommerce store and much more.
      </HeroBanner> */}
      <HeroSection />
      <div className='my-8'>
        <h2 class="text-xl text-center py-2 mx-8 dark:text-[#cccfcf] text-[#a8abab] hover:text-[#000]">All UI Components</h2>
        <SlideShowItems componentsByCategory={componentsByCategory} />
      </div>
      <Container id="mainContent" classNames="pb-8 lg:pb-12">
        <ul className="space-y-8">
          {componentsByCategory.map(({ categoryTitle, componentItems = [] }) => {
            return (
              <li className="space-y-4" key={categoryTitle}>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">{categoryTitle}</h2>

                <CollectionGrid componentItems={componentItems} />
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  )
}
