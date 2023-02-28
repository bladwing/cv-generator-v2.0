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

      <div className="Second-Side">
        <div className="Personal-info">
          <h1>
            {name} {lastname}
          </h1>

          <img src={photo} alt="Profile" className="Profile-Photo" />
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
          <p style={{ lineBreak: "anywhere" }}>{about}</p>
        </div>
        <hr />

        <div className="Expirience-info">
          <h2>{position}</h2>
          <h3>{company}</h3>
          <span> {startDate}</span>
          <span> {endDate}</span>
          <p>{jobDescription}</p>
        </div>
        <hr />
        <div className="Education-info">
          <h2>{educationCenter}</h2>
          <h3>{selectQuality}</h3>
          <span>{endEduDate}</span>
          <p>{eduDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
