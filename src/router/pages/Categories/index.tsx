import { CategoriesPage, Category, CategoryBanner } from "./styles";
import { categories } from "../../../data/categories"

export default function Categories() {
    return (
        <CategoriesPage>
            {
                categories.map(
                    (category, idx) => (
                        <Category key={idx}>
                            <CategoryBanner $Img={category.Img}/>
                        </Category>
                    )
                )
            }
        </CategoriesPage>
    )
}