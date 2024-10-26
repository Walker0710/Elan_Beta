import './Form.css';
import VerticalMarquee from '../VerticalMarquee/VerticalMarquee.jsx';

function Form(props) {
  return (
    <div className="Form">
      <VerticalMarquee/>
      <form action="/submit" method="post" className="form-horizontal">
        <label htmlFor="teamLeadEmail">Team Lead Email:</label>
        <input type="email" id="teamLeadEmail" name="teamLeadEmail" required/>
        <br/><br/>

        <label htmlFor="teamLeadNumber">Team Lead Phone Number:</label>
        <input type="tel" id="teamLeadNumber" name="teamLeadNumber" required/>
        <br/><br/>

        <label htmlFor="participantEmail1">Participant Email 1:</label>
        <input type="email" id="participantEmail1" name="participantEmail1" required/>
        <br/><br/>

        <label htmlFor="participantEmail2">Participant Email 2:</label>
        <input type="email" id="participantEmail2" name="participantEmail2" required/>
        <br/><br/>

        <label htmlFor="participantEmail3">Participant Email 3:</label>
        <input type="email" id="participantEmail3" name="participantEmail3" required/>
        <br/><br/>

        <label htmlFor="participantEmail4">Participant Email 4:</label>
        <input type="email" id="participantEmail4" name="participantEmail4" required/>
        <br/><br/>

        <label htmlFor="participantEmail5">Participant Email 5 (Optional):</label>
        <input type="email" id="participantEmail5" name="participantEmail5"/>
        <br/><br/>

        <label htmlFor="participantEmail6">Participant Email 6 (Optional):</label>
        <input type="email" id="participantEmail6" name="participantEmail6"/>
        <br/><br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form