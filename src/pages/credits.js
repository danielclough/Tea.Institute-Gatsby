import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import banner from '../assets/images/banner.jpg';
const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>Credits</h2>
			<p>Tea.Institute thanks you!</p>
		</header>
		<section className="wrapper style5">
			<div className="inner">
				Design: <a href="http://html5up.net">HTML5 UP</a> and <a href="https://danielc.us/copyright">Daniel Clough</a>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
