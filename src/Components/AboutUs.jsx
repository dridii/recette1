import React from "react";
import "./AboutUs.css";
import box1 from "../images/box1.png";
import box2 from "../images/box2.jpg";
import box3 from "../images/box3.jpg";

export default function AboutUs() {
  return <div className="about-us-container">
      <div className="about-box">
        <img src={box1} alt="Box 1" />
        <h3>Notre Approche</h3>
        <p>
          Notre approche diffère de celle d'une simple agence ; nous sommes
          une plateforme virtuelle dédiée à vous accompagner dans la création
          personnalisée de votre régime alimentaire. Contrairement aux
          méthodes conventionnelles, nous mettons l'accent sur la
          personnalisation, fournissant des conseils adaptés à vos besoins
          spécifiques et à votre style de vie. Notre plateforme offre une
          expérience virtuelle unique, vous permettant de prendre le contrôle
          de votre alimentation de manière informée et éclairée, pour
          atteindre vos objectifs de bien-être avec confiance
        </p>
      </div>

      <div className="about-box">
        <img src={box2} alt="Box 2" />
        <h3>Consultation Privée</h3>
        <p>
          Explorez une expérience de consultation exclusive en ligne en
          profitant de sessions privées avec nos experts dédiés, disponibles à
          30€ par heure. Grâce à cette approche personnalisée, nos
          professionnels vous guideront à travers des conseils individualisés,
          adaptés à vos besoins spécifiques. Que vous recherchiez des conseils
          nutritionnels, des plans d'entraînement personnalisés, ou des
          recommandations pour atteindre vos objectifs de bien-être, nos
          consultations privées offrent une opportunité unique d'optimiser
          votre santé et votre vitalité, tout en bénéficiant d'un soutien
          personnalisé.
        </p>
      </div>

      <div className="about-box">
        <img src={box3} alt="Box 3" />
        <h3>L'Encouragement</h3>
        <p>
          Chez nous, nous croyons fermement que la quête d'un corps optimal
          est une aventure personnelle, loin d'être complexe. Notre mission
          est d'inspirer et d'encourager chaque individu à atteindre ses
          objectifs de bien-être d'une manière positive. Nous promouvons une
          approche bienveillante et motivante, mettant l'accent sur
          l'autonomisation de chacun à embrasser un mode de vie sain. Nous
          vous invitons à parcourir le chemin de la transformation avec
          assurance, guidés par notre engagement à soutenir votre parcours
          vers une vie épanouissante et équilibrée
        </p>
      </div>
    </div>;
}
