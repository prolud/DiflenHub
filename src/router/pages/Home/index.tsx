import CardConteudo from "../../../components/CardConteudo";
import { Categorias, CenterCategorias, HomePage, Slider, VerTodos } from "./styles";
import { ArrowCircleRight } from "phosphor-react";


export default function Home() {
  return (
    <HomePage>
      <Categorias>
        <CenterCategorias>
          <h1>O que você deseja aprender?</h1>
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
        </CenterCategorias>
      </Categorias>
    </HomePage>
  )
}