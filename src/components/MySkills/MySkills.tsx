import "./MySkills.css";

function MySkills() {
  return (
    <div className="MySkills">
      <div className="content">
        <h2>Moje umiejętności</h2>
        <div className="skillImgs">
          <div>
            {" "}
            <img src="https://img.icons8.com/color/96/000000/javascript--v2.png" />
            <img src="https://img.icons8.com/color/96/000000/google-firebase-console.png" />
            <img src="https://img.icons8.com/ultraviolet/80/000000/react--v2.png" />
            <img src="https://img.icons8.com/color/96/000000/typescript.png" />
            <img src="https://img.icons8.com/color/96/000000/sass.png" />
            <img src="https://img.icons8.com/color/96/000000/api.png" />
            <img src="https://img.icons8.com/color/96/000000/javascript--v2.png" />
            <img src="https://img.icons8.com/color/96/000000/google-firebase-console.png" />
            <img src="https://img.icons8.com/ultraviolet/80/000000/react--v2.png" />
            <img src="https://img.icons8.com/color/96/000000/typescript.png" />
            <img src="https://img.icons8.com/color/96/000000/sass.png" />
            <img src="https://img.icons8.com/color/96/000000/api.png" />
            <img src="https://img.icons8.com/color/96/000000/javascript--v2.png" />
            <img src="https://img.icons8.com/color/96/000000/google-firebase-console.png" />
            <img src="https://img.icons8.com/ultraviolet/80/000000/react--v2.png" />
            <img src="https://img.icons8.com/color/96/000000/typescript.png" />
            <img src="https://img.icons8.com/color/96/000000/sass.png" />
            <img src="https://img.icons8.com/color/96/000000/api.png" />
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skill">
          <h3>HTML</h3>
          <div className="bar">
            <div style={{ width: "70%" }} className="percent"></div>
          </div>
        </div>
        <div className="skill">
          <h3>CSS</h3>
          <div className="bar">
            <div style={{ width: "80%" }} className="percent"></div>
          </div>
        </div>
        <div className="skill">
          <h3>JS</h3>
          <div className="bar">
            <div style={{ width: "50%" }} className="percent"></div>
          </div>
        </div>
        <div className="skill">
          <h3>TS</h3>
          <div className="bar">
            <div style={{ width: "40%" }} className="percent"></div>
          </div>
        </div>
        <div className="skill">
          <h3>React</h3>
          <div className="bar">
            <div style={{ width: "50%" }} className="percent"></div>
          </div>
        </div>
        <div className="skill">
          <h3>Firebase</h3>
          <div className="bar">
            <div style={{ width: "30%" }} className="percent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
