export interface IContact {
  icon: string
  title: string
  text?: string
  links?: {
    icon: string
    text: string
    link: string
  }[]
}