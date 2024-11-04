import './Leaderboard.css';

import VerticalMarquee from '../../components/VerticalMarquee/VerticalMarquee.jsx';

function Leaderboard() {

  const data = [
    { column1: "1", column2: "se7en", column3: "1200" },
    { column1: "2", column2: "Outliers", column3: "900" },
    { column1: "3", column2: "Blunders", column3: "900" },
    { column1: "4", column2: "kay kay kay", column3: "700" },
    { column1: "5", column2: "Chai ki Chuski", column3: "700" },
    { column1: "6", column2: "Foresee", column3: "700" },
    { column1: "7", column2: "Meow", column3: "700" },
    { column1: "8", column2: "Cheetah group 🐆🐆", column3: "700" },
    { column1: "9", column2: "Sinister Seven ", column3: "700" },
    { column1: "10", column2: "Nexus ki No1 Team", column3: "700" }
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