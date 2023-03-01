const Preview = ({ name, lastname, photo, about, mail, phone }) => {
  return (
    <div className="Personal-info">
      <h1>
        {name} {lastname}
      </h1>
      <img src={photo} alt="profilePhoto" className="Profile-Photo" />

      <div className="Email-Phone-Container">
        <ul>
          <li>
            <img src="img/email-icon.png" alt="" /> {mail}
          </li>

          <li>
            <img src="img/phone-icon.png" alt="" /> {phone}
          </li>
        </ul>
      </div>
      <div className="About-Me">
        <h3 style={{ display: about === "" ? "none" : "block" }}>About Me</h3>
        <p style={{ lineBreak: "anywhere" }}>{about}</p>
      </div>
      <hr />
      <img src="/img/bottom-logo.svg" alt="something-logotip" className="something-logotip-botton"/>
    </div>
  );
}; 

export default Preview;
