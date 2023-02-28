const Preview = ({ name, lastname, photo, about, mail, phone }) => {
  return (
    <div>
      <div className="Personal-info">
        <h1>
          {name} {lastname}
        </h1>
        <img src={photo} alt="profilePhoto" className="Profile-Photo"/>
      

        <h4>
          <img
            src="img/email-icon.png"
            alt=""
          />
          {mail}
        </h4>
        <h4>
          <img
            src="img/phone-icon.png"
            alt=""
          />
          {phone}
        </h4>
        <div className="About-Me">
          <h3 style={{ display: about === "" ? "none" : "block" }}>About Me</h3>
          <p style={{ lineBreak: "anywhere" }}>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
