import React from 'react';
import './Register.css';

import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className='register'>
      <div className='register__container'>
        <Link to='/'>
          <img className='register__logo' src={logo} alt='Логотип' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='register__form'>
          <fieldset className='register__fieldset'>
            <label className='register__label' htmlFor='name'>
              Имя
            </label>
            <input
              className='register__input'
              type='text'
              placeholder='Введите имя'
              id='name'
            />
          </fieldset>
          <fieldset className='register__fieldset'>
            <label className='register__label' htmlFor='email'>
              E-mail
            </label>
            <input
              className='register__input'
              type='email'
              placeholder='Введите E-mail'
              id='email'
            />
          </fieldset>
          <fieldset className='register__fieldset'>
            <label className='register__label' htmlFor='password'>
              Пароль
            </label>
            <input
              className='register__input'
              type='password'
              placeholder='Введите пароль'
              id='password'
            />
          </fieldset>
          <button className='register__btn-submit' type='submit'>
            Зарегистрироваться
          </button>
          <p className='register__subtitle'>
            Уже зарегистрированы? &nbsp;
            <Link className='register__link' to='/signin'>
              Войти
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;