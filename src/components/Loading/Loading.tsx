import { useEffect } from "react";
import "./Loading.css";

interface ILoading {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loading: React.FC<ILoading> = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="Loading">
      <div className="imgs">
        <img src="https://img.icons8.com/color/96/000000/javascript--v2.png" />
        <img src="https://img.icons8.com/color/96/000000/google-firebase-console.png" />
        <img src="https://img.icons8.com/ultraviolet/80/000000/react--v2.png" />
        <img src="https://img.icons8.com/color/96/000000/typescript.png" />
        <img src="https://img.icons8.com/color/96/000000/sass.png" />
        <img src="https://img.icons8.com/color/96/000000/api.png" />
      </div>
      <div className="loadingBar">
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Loading;
