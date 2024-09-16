import Card from "../../../components/Card";
import { Categories, CenterCategories, HomePage, Slider, VerTodos } from "./styles";
import { ArrowCircleRight } from "phosphor-react";
import { categories } from '../../../data/categories'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  
  return (
    <HomePage>
      <Categories>
        <CenterCategories>
          <h1>O que você deseja aprender?</h1>
          <Slider>
            {
              categories.map(
                (category, idx) => (
                  category.ShowOnHome && (
                    <Card
                      key={idx}
                      Img={category.Img}
                      Name={category.Name}
                      Url={category.Url}
                      ShowOnHome={category.ShowOnHome}
                    />
                  )
                )
              )
            }
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