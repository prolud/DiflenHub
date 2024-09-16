import lideranca from '../assets/images/categories/lideranca.jpeg'
import discipulado from '../assets/images/categories/discipulado.jpg'
import tsd from '../assets/images/categories/tsd.jpg'
import midia from '../assets/images/categories/midia.jpg'

export interface Category {
  Name: string,
  Img: string,
  Url: string,
  ShowOnHome: boolean,
  Description: string
}

export const categories: Category[] = [
  {
    Name: "Liderança",
    Img: lideranca,
    Url: "/",
    ShowOnHome: true,
    Description: "Desenvolva habilidades de liderança cristã para guiar sua comunidade com sabedoria, compaixão e discernimento. Explore princípios bíblicos que capacitam líderes a influenciar de forma positiva e construir equipes fortes."
  },
  {
    Name: "Mídia",
    Img: midia,
    Url: "/",
    ShowOnHome: true,
    Description: "Aprenda como utilizar mídias digitais e tradicionais para divulgar a mensagem do evangelho de maneira eficaz. Descubra estratégias criativas para engajar sua audiência e expandir o alcance da igreja."
  },
  {
    Name: "Discipulado",
    Img: discipulado,
    Url: "/",
    ShowOnHome: true,
    Description: "Aprofunde-se no processo de discipulado, seguindo o exemplo de Jesus. Saiba como capacitar e formar discípulos comprometidos com a fé, por meio de ensinamentos bíblicos e práticas que transformam vidas."
  },
  {
    Name: "TSD",
    Img: tsd,
    Url: "/",
    ShowOnHome: true,
    Description: "Fortaleça sua vida espiritual através de momentos de intimidade com Deus. Aprenda a importância do tempo devocional diário e como construir uma rotina de oração e estudo da Palavra."
  },
]

// Interpretação Bíblica (Hermenêutica)
// Gestão de Ministérios
// Missiologia
// Vida Devocional