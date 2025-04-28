import packageJson from '../../../package.json'

const Footer = () => {
  return (
    <footer>
      {packageJson.name} © 2025 - {packageJson.version}
    </footer>
  )
}

export default Footer
