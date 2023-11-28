import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <NavLink to="/">
          <li>Mon parcours</li>
        </NavLink>
        <NavLink to="/skills">
          <li>Mes compétences</li>
        </NavLink>
        <NavLink to="/projects">
          <li>Mes réalisations</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contactez-moi</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;