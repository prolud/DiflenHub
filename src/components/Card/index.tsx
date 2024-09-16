import { useNavigate } from "react-router-dom";
import { Category } from "../../data/categories";
import { CategoryCard, CardTitle } from "./styles";

export default function Card({ Name, Img, Url }: Category) {
  const navigate = useNavigate()
  
  return (
    <>
      <CategoryCard $Img={Img} onClick={() => navigate(Url)}>
        <CardTitle>{Name}</CardTitle>
      </CategoryCard>
    </>
  )
}