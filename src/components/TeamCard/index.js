import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({teamDetails}) => {
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`team-matches/${id}`} className="link">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="home-team-image" />
        <h1 className="team-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
