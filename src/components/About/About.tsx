import "./About.css";

function About() {
  const imge = require("../../img/clip-programming.png");
  return (
    <div className="About">
      <div className="content">
        <h2>Trochę o mnie</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          et quia accusamus nihil minus optio corporis, dolorum distinctio natus
          exercitationem vel cupiditate unde! Voluptas recusandae enim
          blanditiis! Provident consequuntur sunt quaerat, quis totam tempore
          atque sed minus laboriosam in cupiditate culpa temporibus magnam.
          Illum repellat exercitationem, est sequi temporibus voluptatem.
        </p>
      </div>
      <div className="ilustr">
        <img src={imge} alt="img" />
      </div>
    </div>
  );
}

export default About;
