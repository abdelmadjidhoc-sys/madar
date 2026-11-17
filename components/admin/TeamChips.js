/**
 * The people working on a coverage, as highlighted name tags:
 * photographers in teal, the editor (designer / video editor) in amber.
 */
export default function TeamChips({ team, label, kind }) {
  const people = team.filter((p) => p.kind === kind);
  return (
    <span className="team-chips">
      <span className="team-chips-label">{label}</span>
      {people.length === 0 ? (
        <span className="person-chip person-chip--empty">لم يُحدَّد</span>
      ) : (
        people.map((person) => (
          <span key={person.memberId} className={"person-chip person-chip--" + kind}>
            {person.name}
          </span>
        ))
      )}
    </span>
  );
}
