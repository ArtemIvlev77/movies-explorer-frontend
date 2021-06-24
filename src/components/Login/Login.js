import React from 'react';
import './Login.css';

import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className='login'>
      <div className='login__container'>
        <Link to='/'>
          <img className='login__logo' src={logo} alt='Логотип' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form'>
          <fieldset className='login__fieldset'>
            <label className='login__label' htmlFor='email'>
              E-mail
            </label>
            <input
              className='login__input'
              type='email'
              placeholder='Введите E-mail'
              id='email'
            />
          </fieldset>
          <fieldset className='login__fieldset'>
            <label className='login__label' htmlFor='password'>
              Пароль
            </label>
            <input
              className='login__input'
              type='password'
              placeholder='Введите пароль'
              id='password'
            />
          </fieldset>
          <button className='login__btn-submit' type='submit'>
            Войти
          </button>
          <p className='login__subtitle'>
            Еще не зарегистрированы? &nbsp;
            <Link className='login__link' to='/signup'>
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;