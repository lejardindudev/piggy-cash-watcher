import useState from 'react';
import './Logo.css';
import logoImg from "../../assets/logo-img.png"

export default function Logo() {
  return (
    <figure className="Header-logo Logo">
          <img className="Logo-img" src={logoImg} alt="Logo" />
    </figure>
  );
}