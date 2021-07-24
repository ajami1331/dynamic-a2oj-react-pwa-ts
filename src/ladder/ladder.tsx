const TBodyRow = (problem: any, user: any) => {
  return (
    <tr key = {problem.id}>
    <td>{problem.id}</td>
    <td><a href = {problem.link} target="_blank" rel="noreferrer">{problem.name}</a></td>
    <td>{problem.difficulty}</td>
    <td>{user[problem.link] ? "YES" : "NO"}</td>
    </tr>
  );
}
const Table = (props: any) => {
  return (
  <table>
    <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Difficulty</th>
      <th>Solved</th>
    </tr>
    </thead>
    <tbody>
      {props.problems.map((p: any) => TBodyRow(p, props.user))}
    </tbody>
  </table>
  );
}
const Ladder = (props: any) => {
  console.log(props);
  return (
    <div>
      {props.selectedLadder.name}
      <Table problems={props.selectedLadder.problems} user={props.user}></Table>
    </div>
  );
};

export default Ladder;