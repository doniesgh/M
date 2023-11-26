import React from 'react';
import pic from '../../assets/bg.png';
import '../HomeStyle/home.css'
const Apropos = () => {
  return (
    <div>
      <img src={pic} href="bg" className='BG'/>
      <div class="marque">
	<div class="container">
		<div class="row">
			
			<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
				<h2 class="dmsRegulat">La marque</h2>
				<p><a href="https://www.elmazraa.com/notre-histoire/"> Elmazraa crée depuis 1968 </a>est leader sur le marché Tunisien. Elmazraa symbole de créativité et d’innovation, anticipe les attentes de sa clientèle pour offrir des produits de qualité aux goûts de toutes les générations.</p>
				<div class="btnAnimate">
					<svg xmlns="http://www.w3.org/2000/svg">
						<rect id="shape"></rect>
						</svg><div id="text">
							<a href="https://www.elmazraa.com/notre-histoire/">
								<span class="spot"></span>En savoir plus
							</a>
						</div>
					
				</div>
			</div>
		</div>
	</div>
	<img data-src="https://www.elmazraa.com/wp-content/themes/elmazeraa/images/borderWhite.png" class="borderWhite lazyloaded" src="https://www.elmazraa.com/wp-content/themes/elmazeraa/images/borderWhite.png"/><noscript><img src="https://www.elmazraa.com/wp-content/themes/elmazeraa/images/borderWhite.png" class="borderWhite"/></noscript>

</div>

    </div>

   
  );
}

export default Apropos;
