export interface BlogData {
  type: string
  align?: 'left' | 'right' | 'center'
  children: (BlogData | Text)[]
}

export interface Text {
  text: string
  bold?: boolean
  italic?: boolean
  code?: boolean
}
