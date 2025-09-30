import { readFileSync, readdirSync } from "fs"
import { join } from "path"
import matter from "gray-matter"

const contentDirectory = join(process.cwd(), "content")

export interface FrontMatter {
  title: string
  description: string
  ogImage?: string
  updated?: string
  tags?: string[]
  schema?: object
}

export interface ContentItem {
  slug: string
  frontMatter: FrontMatter
  content: string
}

export function getContentBySlug(folder: string, slug: string): ContentItem | null {
  try {
    const fullPath = join(contentDirectory, folder, `${slug}.mdx`)
    const fileContents = readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontMatter: data as FrontMatter,
      content,
    }
  } catch {
    return null
  }
}

export function getAllContent(folder: string): ContentItem[] {
  try {
    const folderPath = join(contentDirectory, folder)
    const slugs = readdirSync(folderPath)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""))

    return slugs
      .map((slug) => getContentBySlug(folder, slug))
      .filter((item): item is ContentItem => item !== null)
      .sort((a, b) => {
        if (a.frontMatter.updated && b.frontMatter.updated) {
          return new Date(b.frontMatter.updated).getTime() - new Date(a.frontMatter.updated).getTime()
        }
        return 0
      })
  } catch {
    return []
  }
}
