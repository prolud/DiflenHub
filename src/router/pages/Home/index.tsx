import Card from "../../../components/Card";
import { Categories, CenterCategories, HomePage, Slider, VerTodos } from "./styles";
import { ArrowCircleRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()

  return (
    <HomePage>
      <Categories>
        <CenterCategories>
          <h1>O que você deseja aprender?</h1>
          <Slider>
            <Card />
          </Slider>
          <VerTodos onClick={() => navigate("/Categories")}>
            <p>Ver todos</p>
            <ArrowCircleRight size={'2rem'} />
          </VerTodos>
        </CenterCategories>
      </Categories>
    </HomePage>
  )
}