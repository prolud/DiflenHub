import { AccountSection, EntrarButton, HeaderComponent, Logo, RegistrarButton } from "./styles"

export default function Header() {
  return (
    <HeaderComponent>
      <Logo>
        <h1>DIFLEN<br />HUB</h1>
      </Logo>

      <AccountSection>
        <EntrarButton>Entrar</EntrarButton>
        <RegistrarButton>Registrar</RegistrarButton>
      </AccountSection>
    </HeaderComponent>
  )
}