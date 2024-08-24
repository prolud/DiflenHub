import CardConteudo from "./homeComponents/CardConteudo/CardConteudo";
import { HomePage, Slider, VerTodos } from "./HomeStyled";
import { ArrowCircleRight } from "phosphor-react";


export default function Home() {
  return (
    <HomePage>
      <Slider>
        <CardConteudo />
        <CardConteudo />
        <CardConteudo />
        <CardConteudo />
      </Slider>
      <VerTodos>
        <p>Ver todos</p>
        <ArrowCircleRight size={'2rem'} />
      </VerTodos>
    </HomePage>
  )
}