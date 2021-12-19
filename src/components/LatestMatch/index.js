import './index.css'

const LatestMatch = ({latestMatchDetails}) => {
  const {
    umpires,
    result,
    man_of_the_match: manOfTheMatch,
    date,
    venue,
    competing_team: competingTeam,
    competing_team_logo: competingTeamLogo,
    first_innings: firstInnings,
    second_innings: secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="me-3">
        <p className="team-heading">{competingTeam}</p>
        <p className="match-card-para">{date}</p>
        <p className="match-card-para">{venue}</p>
        <p className="match-card-para">{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          className="team-logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="text-end me-3">
        <h1 className="match-card-heading">First Innings</h1>
        <p className="match-card-para">{firstInnings}</p>
        <h1 className="match-card-heading">Second Innings</h1>
        <p className="match-card-para">{secondInnings}</p>
        <h1 className="match-card-heading">Man Of The Match</h1>
        <p className="match-card-para">{manOfTheMatch}</p>
        <h1 className="match-card-heading">Umpires</h1>
        <p className="match-card-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
