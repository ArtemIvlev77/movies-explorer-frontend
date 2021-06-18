import React from "react";
import "./AboutMe.css";
import photo from "../../../images/photo.svg";

function AboutMe() {
  return (
    <div className="aboutMe">
      <h2 className="aboutMe__title" id="aboutMe">
        Студент
      </h2>
      <div className="aboutMe__content">
        <div className="aboutMe__text">
          <h3 className="aboutMe__name">Артём</h3>
          <span className="aboutMe__subtitle">
            Фронтенд-разработчик, 31 год
          </span>
          <p className="aboutMe__content_about">
            Я родился в Саратове и с 2015 года живу в Москве. У меня есть жена и
            сын. Я люблю слушать музыку, а ещё увлекаюсь ездой на велосипеде.
            Недавно, c 2020 года начал кодить. Так же в 2020 году приступил к
            прохождению курса веб-разработчика в Яндекс.Практикуме. Ближе к
            окончанию курса стал брать фриланс-заказы.
          </p>
          <ul className="aboutMe__content_social">
            <li>
              <a
                className="aboutMe__content_link"
                href="https://www.facebook.com/artem.ivlev.1/"
                target="_blank" rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="aboutMe__content_link"
                href="https://github.com/ArtemIvlev77"
                target="_blank" rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="aboutMe__content_link"
                href="https://www.linkedin.com/in/artem-ivlev-216ab4210/"
                target="_blank" rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <img
          className="aboutMe__content_photo"
          src={photo}
          alt="Фото студента"
        />
      </div>
    </div>
  );
}

export default AboutMe;
