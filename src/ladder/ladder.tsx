const TBodyRow = (problem: any, user: any) => {
  return (
    <tr className="bg-white border-b-2 border-gray-200" key = {problem.id}>
      <td className="px-16 py-2 text-center ml-2 font-semibold">{problem.id}</td>
      <td className="px-16 py-2 text-center ml-2 font-semibold"><a href = {problem.link} target="_blank" rel="noreferrer">{problem.name}</a></td>
      <td className="px-16 py-2 text-center ml-2 font-semibold">{problem.difficulty}</td>
      <td className={`px-16 py-2 text-center ml-2 font-semibold ${user[problem.link] ? 'bg-green-400' : 'bg-red-400'}`}>{user[problem.link] ? "YES" : "NO"}</td>
    </tr>
  );
}
const Table = (props: any) => {
  return (
    <table className="table-auto">
      <thead className="justify-between text-gray-100 font-semibold">
        <tr className="bg-blue-500">
          <th className="px-16 py-2">Id</th>
          <th className="px-16 py-2">Name</th>
          <th className="px-16 py-2">Difficulty</th>
          <th className="px-16 py-2">Solved</th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {props.problems.map((p: any) => TBodyRow(p, props.user))}
      </tbody>
    </table>
  );
}
const Ladder = (props: any) => {
  return (
    <div>
      <Table problems={props.selectedLadder.problems} user={props.user}></Table>
    </div>
  );
};

export default Ladder;