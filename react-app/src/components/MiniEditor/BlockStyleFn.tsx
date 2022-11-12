import { ContentBlock } from 'draft-js'

export const BlockStyleFn = (contentBlock: ContentBlock) => {
  const type = contentBlock.getType()

  switch (type) {
    case 'blockquote':
      return 'px-4 py-2 border-l-4 bg-neutral-100 text-neutral-600 border-neutral-300 quote not-italic'
  }

  return ''
}
