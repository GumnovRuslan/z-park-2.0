export interface IModalContent {
  title: string;
  src: string;
  text: string;
}

export interface IModalContentShop {
  typeName: string
  items: IItemShop[]
}

export interface IItemShop {
  name: string
  img: string | null
  price_text: string
  size_text?: string
  description?: string
}