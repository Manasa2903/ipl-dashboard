import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'
import {useParams} from 'react-router-dom'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const TeamMatches = () => {
  const [eachTeamData, setEachTeamData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    fetch(`https://apis.ccbp.in/ipl/${id}`)
      .then(response => response.json())
      .then(jsonData => {
        setEachTeamData(jsonData)
        setIsLoading(false)
      })
  }, [id])
  let bgImage
  switch (id) {
    case 'CSK':
      bgImage = 'csk'
      break
    case 'RCB':
      bgImage = 'rcb'
      break
    case 'SH':
      bgImage = 'srh'
      break
    case 'KKR':
      bgImage = 'kkr'
      break
    case 'MI':
      bgImage = 'mi'
      break
    case 'KXP':
      bgImage = 'kxp'
      break
    case 'DC':
      bgImage = 'dc'
      break
    case 'RR':
      bgImage = 'rr'
      break
    default:
      break
  }
  return (
    <div className={`details-container ${bgImage}`}>
      {isLoading ? (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <div className="team-match-container">
          <img
            src={eachTeamData.team_banner_url}
            alt="team banner"
            className="team-banner"
          />
          <h1 className="heading">Latest Matches</h1>
          <LatestMatch latestMatchDetails={eachTeamData.latest_match_details} />
          <ul className="match-card-container">
            {eachTeamData.recent_matches.map(eachMatch => (
              <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default TeamMatches
