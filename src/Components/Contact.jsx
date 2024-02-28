import React from "react";
import "./ContactUs.css";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import x from "../images/x.png";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      <p>Nous sommes ravis de vous entendre!</p>
      <form>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required />

        <button type="submit">Envoyer</button>
      </form>

      <div className="contact-icons">
        <a href="lien_vers_facebook" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="Facebook" className="icon" />
        </a>
        <a href="lien_vers_instagram" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" className="icon" />
        </a>
        <a href="lien_vers_x" target="_blank" rel="noopener noreferrer">
          <img src={x} alt="X" className="icon" />
        </a>
        {/* Ajoutez d'autres icônes selon vos besoins */}
      </div>
    </div>
  );
}
