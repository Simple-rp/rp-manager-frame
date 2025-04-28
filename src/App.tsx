// import { useSearchParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Debug from './components/Debug/Debug'
import { useGetClientDetailsQuery } from './service/client'
import Loader from './components/UI/Loader/Loader'

function App() {
  const [searchParams] = useSearchParams()

  const code = searchParams.get('code')

  const { data: clientDetails, isLoading, error } = useGetClientDetailsQuery({ code })
  console.log(clientDetails)
  if (isLoading) return <Loader />
  if (error)
    return (
      <div className="message-error">
        Hmmm... Petit problème. Si vous pensez qu'il s'agit d'une erreur, veuillez contacter notre support pour obtenir
        de l'aide.
      </div>
    )
  return (
    <>
      <Header logo={clientDetails?.logo} client={clientDetails?.name} />
      <main>
        <Debug enabled />
      </main>
      <Footer />
    </>
  )
}

export default App
