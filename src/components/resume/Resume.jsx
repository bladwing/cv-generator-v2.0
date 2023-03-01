import useLocalStorage from "react-use-localstorage";
import "./resume.scss";

const Resume = () => {
  const [name] = useLocalStorage("name");
  const [lastname] = useLocalStorage("lastname");

  const [photo] = useLocalStorage("photo");
  const [about] = useLocalStorage("about");
  const [mail] = useLocalStorage("email");
  const [phone] = useLocalStorage("phone");

  const [position] = useLocalStorage("position");
  const [company] = useLocalStorage("company");
  const [startDate] = useLocalStorage("startDate");
  const [endDate] = useLocalStorage("endDate");
  const [jobDescription] = useLocalStorage("jobDescription");

  const [educationCenter] = useLocalStorage("educationCenter");
  const [selectQuality] = useLocalStorage("selectQuality");
  const [endEduDate] = useLocalStorage("endEduDate");
  const [eduDescription] = useLocalStorage("eduDescription");

  return (
    <div className="Resume-Container">
      <button>Back to main</button>

      <div className="Resume-Page">
        <div className="Personal-Container">
          <h1>
            {name} {lastname}
          </h1>

          <img src={photo} alt="Profile" className="Profile-Photo " />
          <ul>
            <li>
              <img src="img/email-icon.png" alt="" />
              {mail}
            </li>
            <li>
              <img src="img/phone-icon.png" alt="" />
              {phone}
            </li>
          </ul>
          <div className="About-Me-Resume">
            <h2>About Me</h2>
            <p style={{ lineBreak: "anywhere" }}>{about}</p>
          </div>
        </div>

        <hr />

        <div className="Expirience-Container">
          <h2>Expirience</h2>
          <h4>{position}, {company} </h4>
          
          <span> {startDate}</span>
          <span> {endDate}</span>
          <p>{jobDescription}</p>
        </div>
        <hr />
        <div className="Education-Container">
          <h2>Education</h2>
          <h4>{educationCenter}, {selectQuality}</h4>
          
          <span>{endEduDate}</span>
          <p>{eduDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
