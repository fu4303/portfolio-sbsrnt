import React from "react";
import data from "../../data";
import Icon from "../../components/icon/icon";
import "./styles/styles.css";
import "./styles/mobile-styles.scss";

const Contact = () => {
  const mapContactMethods = () =>
    data.contact.map(cmethod => (
      <li key={cmethod.media} className={`contact__method ${cmethod.media}`}>
        <a
          href={
            cmethod.media === "mail" ? `mailto:${cmethod.value}` : cmethod.value
          }
          rel="noopener noreferrer"
          target="_blank"
        >

          <p className="contact__label">
            {cmethod.media === "mail" ? "e-mail" : cmethod.media}
          </p>
          <Icon name={cmethod.media} />
          <p className="contact__value">{cmethod.username}</p>
        </a>
      </li>
    ));

  return <ul>{mapContactMethods()}</ul>;
};

export default Contact;
