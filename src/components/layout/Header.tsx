const Header = ({ logo, client }: any) => {
  return (
    <nav className="header">
      <img src={logo} alt="logo entreprise" width={150} />
      <div className="header-side">{client}</div>
    </nav>
  )
}

export default Header
