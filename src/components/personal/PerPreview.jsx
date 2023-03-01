const Preview = ({ name, lastname, photo, about, mail, phone }) => {
  return (
    <div className="Personal-info">
      <h1>
        {name} {lastname}
      </h1>
      <img src={photo} alt="" className="Profile-Photo" />

      <div className="Email-Phone-Container">
        <ul>
          <li style={{ display: mail === "" ? "none" : "block" }}>
            <img src="img/email-icon.png" alt="" /> {mail}
          </li>

          <li style={{ display: phone === "" ? "none" : "block" }}>
            <img src="img/phone-icon.png" alt="" /> {phone}
          </li>
        </ul>
      </div>

      <div className="About-Me">
        <h3 style={{ display: about === "" ? "none" : "block" }}>About Me</h3>
        <p style={{ lineBreak: "anywhere" }}>{about}</p>
      </div>

      <hr
        style={{ display: name === "" && lastname === "" ? "none" : "block" }}
      />
      <img
        src="/img/bottom-logo.svg"
        alt="something-logotip"
        className="something-logotip-botton"
      />
    </div>
  );
};

export default Preview;
