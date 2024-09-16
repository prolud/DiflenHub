import CategoryCard from "../../../components/CategoryCard";
import { Categories, CenterCategories, HomePage, Slider, VerTodos } from "./styles";
import { ArrowCircleRight } from "phosphor-react";
import { categories } from '../../../data/categories'

export default function Home() {
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
                    <CategoryCard
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
          <VerTodos>
            <p>Ver todos</p>
            <ArrowCircleRight size={'2rem'} />
          </VerTodos>
        </CenterCategories>
      </Categories>
    </HomePage>
  )
}