export interface Category {
  Name: string,
  Img: string,
  Url: string,
  ShowOnHome: boolean
}

import lideranca from '../assets/images/categories/lideranca.jpeg'
import discipulado from '../assets/images/categories/discipulado.jpg'
import tsd from '../assets/images/categories/tsd.jpg'
import midia from '../assets/images/categories/midia.jpg'

export const categories: Category[] = [
  {
    Name: "Liderança",
    Img: lideranca,
    Url: "/",
    ShowOnHome: true,
  },
  {
    Name: "Mídia",
    Img: midia,
    Url: "/",
    ShowOnHome: true,
  },
  {
    Name: "Discipulado",
    Img: discipulado,
    Url: "/",
    ShowOnHome: true,
  },
  {
    Name: "TSD",
    Img: tsd,
    Url: "/",
    ShowOnHome: true,
  },
]