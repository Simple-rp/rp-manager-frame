import { useSearchParams } from 'react-router-dom'

const line = (label: string, value: string | null) => (
  <p>
    <b>{label}: </b>
    {value}
  </p>
)

const Debug = ({ enabled = false }: any) => {
  const [searchParams] = useSearchParams()

  const code = searchParams.get('code') // "GBF"
  const isDebug = searchParams.get('debugMode') // "true"

  const charId = searchParams.get('ig_character_id') // "true" //ig_character_id =   10827
  const discordId = searchParams.get('ig_discord_id') // "true" //ig_discord_id   =   332603174605291530

  // Location: https://simple-rp.github.io/rp-manager-frame/?code=GBF&ig_character_id=10827&ig_discord_id=332603174605291530
  
  if (!isDebug && !enabled) return <></>
  return (
    <div className="debug">
      <h2>Debug Info</h2>
      {line('Location', window.location.href)}
      {line('Code', code)}
      {line('Character', charId)}
      {line('Discord', discordId)}
    </div>
  )
}

export default Debug
