import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const Home = () => {
  const [teamData, setTeamData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchedData = await response.json()
    const updatedData = fetchedData.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    setTeamData(updatedData)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTeamData()
  }, [])

  return (
    <div className="team-container">
      <div className="heading-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
          className="ipl-logo"
        />
        <h1 className="main-heading">IPL Dashboard</h1>
      </div>
      {isLoading ? (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <ul className="team-card-container">
          {console.log(teamData)}
          {teamData &&
            teamData.map(eachTeam => (
              <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
            ))}
        </ul>
      )}
    </div>
  )
}
export default Home
