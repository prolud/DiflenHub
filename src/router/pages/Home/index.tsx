import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import { Categories, CenterCategories, HomePage, Slider, VerTodos } from "./styles";
import { ArrowCircleRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Categorie {
  idCategorie: number,
  name: string,
  url: string,
  description: string,
  status: true
}

export default function Home() {
  const navigate = useNavigate()
  const [categories, setCategories] = useState<Categorie[]>()

  useEffect(
    () => {
      const getCategories = async () => {
        setCategories(await axios.get("https://apidiflenhub.bsite.net/api/users/say-hello", {
          headers: {
            "Content-Type": "application/json"
          }
        }))
      }

      getCategories()
    }, []
  )

  return (
    <HomePage>
      <Categories>
        <CenterCategories>
          <h1>O que você deseja aprender?</h1>
          <Slider>
            {
              categories?.map(
                (_, idx) => (
                  <>
                    <Card key={idx}/>
                  </>
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