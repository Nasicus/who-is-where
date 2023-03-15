import queryString from "query-string";
import { WhoIsWhere } from "./WhoIsWhere";

function App() {
  const { teamIdentifier, teamName, who } = getAppParams();

  if (!teamIdentifier) {
    return <div>No Team identifier.</div>;
  }

  if (!who.length) {
    return <div>No team members specified.</div>;
  }

  return (
    <WhoIsWhere
      teamIdentifier={teamIdentifier}
      teamName={teamName}
      teamMembers={who}
    />
  );
}

function getAppParams() {
  const { teamIdentifier, teamName, who } = queryString.parse(
    window.location.search
  );

  return {
    teamIdentifier: Array.isArray(teamIdentifier)
      ? teamIdentifier[0]
      : teamIdentifier,
    teamName: Array.isArray(teamName) ? teamName[0] : teamName,
    who: Array.isArray(who) ? who : [who],
  };
}

export default App;
