import React from 'react';
import config from '../../config';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; Tea.Institute</li>
        <li>
          <Link to="/credits">Credits</Link>
        </li>
      </ul>
    </footer>
  );
}
