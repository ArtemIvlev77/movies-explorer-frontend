import React from "react";
import profilePhoto from "../../../images/photo.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me__title" id="author">
        Студент
      </h2>
      <div className="about-me__cover">
        <div className="about-me__wrapper">
          <h3 className="about-me__text-title">Артём</h3>
          <p className="about-me__text-subtitle">
            Фронтенд-разработчик, 31 год
          </p>
          <p className="about-me__text-description">
            Я родился Саратове и с 2015 живу в Москве. Начал кодить в 2020 и
            закончил курс Яндекс.Практикум по специальности Веб-разработчик.
            Могу в JS, React, Node, Express (+MongoDB) и вёрстку по БЭМ.
            Подобрался к TypeScript, разбираюсь что к чему =) У меня есть жена и
            сын. Люблю слушать музыку, бег, велосипед и компьютерные игры.
          </p>
          <ul className="about-me__list">
            <li className="about-me__item">
              <a
                className="about-me__link"
                href="https://www.facebook.com/artem.ivlev.1/"
              >
                Facebook
              </a>
            </li>
            <li className="about-me__item">
              <a
                className="about-me__link"
                href="https://github.com/ArtemIvlev77"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img
          className="about-me__profile-photo"
          src={profilePhoto}
          alt="Фото автора"
        />
      </div>
    </div>
  );
}

export default AboutMe;
