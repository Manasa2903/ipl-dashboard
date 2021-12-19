import './index.css'

const MatchCard = ({matchDetails}) => {
  const {
    result,
    competing_team_logo: competingTeamLogo,
    competing_team: competingTeam,
    match_status: matchStatus,
  } = matchDetails
  const matchClassName = matchStatus === 'Lost' ? 'lost' : 'won'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-para">{result}</p>
      <p className={matchClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
