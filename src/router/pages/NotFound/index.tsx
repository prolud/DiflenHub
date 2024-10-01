import { useNavigate } from "react-router-dom"
import { NotFoundPage } from "./styles"
import NotFoundImg from "../../../assets/images/notfound/not-found.png"
import { House } from "phosphor-react"

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <NotFoundPage>
            <img src={NotFoundImg} />
            <button
            onClick={
                () => {
                    navigate("/Home")
                }
            }
            >
                <p>Voltar para a página inicial</p>
                <House
                    size={16}
                    weight="fill"
                />
            </button>
        </NotFoundPage>
    )
}