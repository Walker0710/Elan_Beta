import './Leaderboard.css';

import VerticalMarquee from '../../components/VerticalMarquee/VerticalMarquee.jsx';

function Leaderboard() {

  const data = [
    { column1: "1", column2: "Team 1", column3: "132" },
    { column1: "1", column2: "Team 1", column3: "132" },
    { column1: "1", column2: "Team 1", column3: "132" }
  ];


  return (
    <>
      <VerticalMarquee/>
      <div className='Leaderboard'>
        <div className='nexus-leaderboard-title'>Nexus Leaderboard</div>

        <table className='Leaderboard-table'>
          <thead>
          <tr>
            <th>Rank</th>
            <th>Team name</th>
            <th>Score</th>
          </tr>
          </thead>
          <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              <td>{row.column3}</td>
            </tr>
          ))}
          </tbody>
        </table>


      </div>
    </>
  );
}


export default Leaderboard;