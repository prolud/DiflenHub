import { useNavigate } from "react-router-dom";
import { Category } from "../../data/categories";
import { Card, CardGradient, CardTitle } from "./styles";

export default function CategoryCard({ Name, Img, Url }: Category) {
  const navigate = useNavigate()
  
  return (
    <>
      <Card $bgImg={Img} onClick={() => navigate(Url)}>
        <CardGradient className="card-gradient"/>
        <CardTitle>{Name}</CardTitle>
      </Card>
    </>
  )
}