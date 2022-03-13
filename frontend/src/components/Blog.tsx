import styled from 'styled-components'
import type { Element, TextStyle } from '../types'

interface ParagraphStyle {
  align?: 'left' | 'right' | 'center'
}

const Text = styled.span<TextStyle>`
  font-weight: ${(props) => (props.bold ? 600 : 400)};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  text-decoration-line: ${(props) => (props.underline ? 'underline' : 'none')};
`
const ImagePlaceholder = styled.div`
  width: 200px;
  height: 200px;
  background-color: #5a6978;
`

const ParagraphBlock = styled.p<ParagraphStyle>`
  text-align: ${(props) => props.align ?? 'left'};
`

const BlogContainer = styled.div`
  max-width: 600px;
  font-size: 1.25rem;
`

const Block = ({ element }: { element: Element }) => {
  if (element.type === 'image') {
    return <ImagePlaceholder>{element.url}</ImagePlaceholder>
  }
  return (
    <ParagraphBlock align={element.align}>
      {element.children.map(({ text, link, ...textStyle }, idx) => (
        <Text key={idx} {...textStyle}>
          {text}
        </Text>
      ))}
    </ParagraphBlock>
  )
}

const Blog = () => {
  return (
    <BlogContainer>
      {initialValue.map((element, idx) => (
        <Block key={idx} element={element} />
      ))}
    </BlogContainer>
  )
}

const initialValue: Element[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true, underline: true, bold: true },
      { text: ' better', italic: true, bold: true },
      { text: ' than plain text!', bold: true }
    ]
  },
  {
    type: 'paragraph',
    align: 'right',
    children: [
      {
        text: 'It is also '
      },
      { text: 'server-side rendered', bold: true },
      {
        text: ', which means the server fetches the data and generates HTML for the client!'
      }
    ]
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }]
  }
]
export default Blog
