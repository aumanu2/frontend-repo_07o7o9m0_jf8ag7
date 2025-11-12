import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="font-display text-4xl mt-6 mb-3" {...props} />,
    h2: (props) => <h2 className="font-display text-3xl mt-6 mb-3" {...props} />,
    p: (props) => <p className="leading-relaxed text-cloud/80" {...props} />,
    ...components,
  }
}
