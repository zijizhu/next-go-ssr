export interface TextStyle {
  bold?: boolean
  italic?: boolean
  underline?: boolean
}

interface Text extends TextStyle {
  text: string
  link?: string
}

interface Paragraph {
  type: 'paragraph'
  align?: 'left' | 'right' | 'center'
  children: Text[]
}

interface Image {
  type: 'image'
  url: string
}

export type Element = Paragraph | Image

export interface Document {
  document_name: string
  document_id: string
  content: Element[]
}
