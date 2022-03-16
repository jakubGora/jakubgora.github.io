import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import GoogleMapReact, { Props } from "google-map-react";
import { useEffect, useRef, useState } from "react";

const AnyReactComponent = ({
  lat,
  lng,
  text,
}: {
  lat: number;
  lng: number;
  text: string;
}) => (
  <div className="pin">
    <FontAwesomeIcon icon={faLocationDot} color="black" fontSize="3rem" />
  </div>
);
const Contact: React.FC = () => {
  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [msg, setMsg] = useState<string | undefined>();

  const nameRef = useRef<HTMLLabelElement>(null);
  const emailRef = useRef<HTMLLabelElement>(null);
  const msgRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (name && name?.length >= 0) {
      nameRef.current?.classList.add("notEmpty");
    } else {
      nameRef.current?.classList.remove("notEmpty");
    }
    if (email && email?.length >= 0) {
      emailRef.current?.classList.add("notEmpty");
    } else {
      emailRef.current?.classList.remove("notEmpty");
    }
    if (msg && msg?.length >= 0) {
      msgRef.current?.classList.add("notEmpty");
    } else {
      msgRef.current?.classList.remove("notEmpty");
    }
  }, [name, email, msg]);

  const setFocus = (e: ChildNode | null) => {
    const elem = e as HTMLElement;
    elem.focus();
  };

  const defaultProps = {
    center: {
      lat: 52.1,
      lng: 14.0,
    },
    zoom: 7,
  };

  return (
    <div className="Contact">
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDVrbEftttxMus87N9gWUdPUoIG7WL_aPs",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          options={{ mapId: "f6b242060340707e" }}
        >
          <AnyReactComponent
            lat={50.26178380044494}
            lng={19.008613707732383}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      <div className="content">
        <h2>
          {" "}
          <strong>S</strong>kontaktuj się ze mną
        </h2>
        <div className="contact">
          <div>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} fontSize="2rem" />{" "}
            <p> jakub_gora@wp.pl</p>{" "}
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} fontSize="2rem" />
            <p>505 360 828</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} fontSize="2rem" />
            <p>Katowice</p>
          </div>
        </div>
        <h3>lub</h3>
        <form>
          <h3>Napisz do mnie</h3>
          <div className="group">
            <label
              onClick={(e) => setFocus(e.currentTarget.firstChild)}
              ref={nameRef}
              htmlFor="name"
            >
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                required
              />
            </label>
            <label ref={emailRef} htmlFor="email">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                required
              />
            </label>
          </div>

          <label ref={msgRef} htmlFor="msg">
            <textarea
              name="msg"
              cols={50}
              rows={15}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
          </label>
          <div className="btn">
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faPhone}
                fontSize="1.3rem"
              ></FontAwesomeIcon>{" "}
              Wyślij
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
