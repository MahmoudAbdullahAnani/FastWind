import { notFound } from 'next/navigation'

import { join } from 'path'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'

import { ogMeta, twitterMeta } from '@data/metadata'

import Container from '@component/Container'
import MdxRemoteRender from '@component/MdxRemoteRender'
import CollectionList from '@component/CollectionList'
import SideRightContentComponent from '@component/Contents/SideRightContentComponent'
import SideLeftContentComponent from '@component/Contents/SideLeftContentComponent'
import { getComponents } from '@/page'

const mdxComponents = {
  CollectionList,
}

const componentsDirectory = join(process.cwd(), '/src/data/components')

export async function generateMetadata({ params }) {
  const { collectionData } = await getCollection(params)

  return {
    title: `Tailwind CSS ${collectionData.seo.title} ${process.env.NAME_PROJECT}`,
    description: collectionData.seo.description,
    openGraph: {
      title: `Tailwind CSS ${collectionData.seo.title} ${process.env.NAME_PROJECT}`,
      description: collectionData.seo.description,
      ...ogMeta,
    },
    twitter: {
      title: `Tailwind CSS ${collectionData.seo.title} ${process.env.NAME_PROJECT}`,
      description: collectionData.seo.description,
      ...twitterMeta,
    },
  }
}

export async function generateStaticParams() {
  return await fs.readdir(componentsDirectory)
}

async function getCollection(params) {
  try {
    const componentPath = join(componentsDirectory, `${params.category}-${params.collection}.mdx`)
    const componentItem = await fs.readFile(componentPath, 'utf-8')

    const mdxSource = await serialize(componentItem, {
      parseFrontmatter: true,
    })

    return {
      collectionData: {
        ...mdxSource.frontmatter,
        slug: params.collection,
      },
      collectionContent: mdxSource,
    }
  } catch {
    notFound()
  }
}

export default async function Page({ params }) {
  const { collectionData, collectionContent } = await getCollection(params)
  const componentsData = {
    componentContainer: {
      previewInner: collectionData.container || '',
      previewHeight: collectionData.wrapper || '',
    },
    componentsData: Object.entries(collectionData.components).map(
      ([componentId, componentItem]) => {
        return {
          id: componentId,
          title: componentItem.title,
          slug: collectionData.slug,
          category: collectionData.category,
          container: componentItem.container || '',
          wrapper: componentItem.wrapper || '',
          creator: componentItem.creator || '',
          dark: !!componentItem.dark,
          interactive: !!componentItem.interactive,
        }
      }
    ),
  }
  const componentsByCategory = await getComponents()


  return (
    <main className={`flex`}>
      <div className={`sticky hidden lg:block top-[64px] max-h-[300px] w-full max-w-[250px]`}>
        <SideLeftContentComponent componentsByCategory={componentsByCategory} />
      </div>
      <Container id="mainContent" classNames="py-8 w-full lg:py-12 space-y-8">

        <div className="prose max-w-none">
          <MdxRemoteRender
            mdxSource={collectionContent}
            mdxComponents={mdxComponents}
            mdxScope={componentsData}
          />
        </div>

      </Container>
      <div className={`sticky hidden lg:block no-scrollbar top-[64px] max-h-[64vh] overflow-auto w-full max-w-[200px]`}>
        <SideRightContentComponent collectionContent={collectionContent.frontmatter.components} />
      </div>
    </main>
  )
}
