import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import config from '../../config';
import { Link, StaticQuery, graphql } from 'gatsby';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <Link to="/#" className="button primary">
                Sign Up
              </Link>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <Link to="#one" className="more">
          Learn More
        </Link>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Tea is the world's favorite Beverage
            <br />
          </h2>
          <p>
            Learn more about tea from all over the world!
            <br />
            The Culture and Science of Tea 
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-envira major brands style2">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-envira major brands style2">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-envira major brands style2">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-envira major brands style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon  fa-envira major brands style2">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Turn over a new leaf
            <br />
            and discover a fantastic adventure!
          </h2>
          <p>
            Explore the world of tea from your device or oversea and mountain side.
            Together we can learn more, and share tea across the globe.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Knowing your preference
            <br />
            is the art of tea mastery.
          </h2>
          <p>
            The landscapes of aroma and flavor unlock the secrets of tea terroir.
            Every cup of tea is unique, as every taste of life is precious.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            A perfect cup of tea
            <br />
            is cared for from feild to cup.
          </h2>
          <p>
            The secret to good tea is no secret. It is attention to detail
             in the moment, and cultivating experience.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Database of Tea</h2>
          <p>
            Our goal is to compile a database for tea enthusiasts, scientists, and scolars. 
            <br />
            Keeping you up to date on the latest tea science, culture, and tradition.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Consumer Saftey</h3>
            <p>
              Our first concern is to investigate into possible 
              illegal pesticide residues on conventional and organic teas.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Education</h3>
            <p>
              Education is more than just technical skill and data collection.
              We are also dedicated to the pursuit of pleasure!
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Join Us</h2>
          <p>
            Sign up for out mailing list to keep up to date with our progress,
            and find out about educational opportunities.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <Link to="/#" className="button fit primary">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/#" className="button fit">
              Learn More
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
