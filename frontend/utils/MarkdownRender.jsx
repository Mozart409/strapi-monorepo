/* eslint-disable react/display-name */
import Link, { LinkProps } from 'next/link'
import ReactMarkdown from 'react-markdown'
import slugify from 'slugify'
import cx from 'classnames'

import * as React from 'react'

const MarkdownRender = ({ children }) => {
  const customRender = {
    link: ({ href, children, title, ...props }) => {
      if (href.startsWith('#')) {
        return (
          <Link href={href} title={title}>
            <a>{children}</a>
          </Link>
        )
      }

      if (href.startsWith('/'))
        return (
          <Link href={href} title={title}>
            <a>{children}</a>
          </Link>
        )

      return (
        <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
          {children}
        </a>
      )
    },

    heading: ({ node, level, ...props }) => {
      switch (level) {
        case 1:
          return (
            <h1
              {...props}
              id={slugify(`${node?.children[0]?.value}`, {
                lower: true,
                locale: 'de',
              })}
            />
          )
        case 2:
          return (
            <h2
              {...props}
              id={slugify(`${node?.children[0]?.value}`, {
                lower: true,
                locale: 'de',
              })}
            />
          )
        case 3:
          return (
            <h3
              {...props}
              id={slugify(`${node?.children[0]?.value}`, {
                lower: true,
                locale: 'de',
              })}
            />
          )
        case 4:
          return (
            <h4
              {...props}
              id={slugify(`${node?.children[0]?.value}`, {
                lower: true,
                locale: 'de',
              })}
            />
          )
        case 5:
          return (
            <h5
              {...props}
              id={slugify(`${node?.children[0]?.value}`, {
                lower: true,
                locale: 'de',
              })}
            />
          )
        case 6:
          return (
            <h6
              {...props}
              id={slugify(`${node?.children[0]?.value}`, {
                lower: true,
                locale: 'de',
              })}
            />
          )

        default:
          break
      }
    },
  }

  return (
    <div>
      <ReactMarkdown
        className="mx-auto break-words prose prose-xl"
        skipHtml={true}
        renderers={customRender}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRender
