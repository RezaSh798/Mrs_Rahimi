<template>
    <!-- Hero #2
    ============================================= -->
	<section id="hero" class="hero">
		<div id="hero-slider" class="hero-slider">
			<!-- Slide #1 -->
			<div class="slide bg-overlay">
				<div class="bg-section">
					<img src="assets/images/sliders/7.jpg" alt="Background"/>
				</div>
				<div class="container vertical-center">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
							<div class="slide-content">
								<div class="slide-heading"> The Best Theme For Auto Shops </div>
								<div class="slide-title">
									<h2>Say Hello To <span class="color-theme">Car Shop !</span></h2>
								</div>
								<div class="slide-desc"> Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres. </div>
								<div class="slide-action">
									<a class="btn btn-primary" href="#">Check It Now</a>
								</div>
							</div>
						</div>
						<!-- .col-md-12 end -->
					</div>
					<!-- .row end -->
				</div>
				<!-- .container end -->
			</div>
			<!-- .slide end -->
			
			<!-- Slide #2 -->
			<div class="slide bg-overlay">
				<div class="bg-section">
					<img src="assets/images/sliders/4.jpg" alt="Background"/>
				</div>
				<div class="container vertical-center">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
							<div class="slide-content">
								<div class="slide-heading"> The Best Theme For Auto Shops </div>
								<div class="slide-title">
									<h2>Say Hello To <span class="color-theme">Car Shop !</span></h2>
								</div>
								<div class="slide-desc"> Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres. </div>
							</div>
						</div>
						<!-- .col-md-12 end -->
					</div>
					<!-- .row end -->
				</div>
				<!-- .container end -->
			</div>
			<!-- .slide end -->
			
			<!-- Slide #1 -->
			<div class="slide bg-overlay">
				<div class="bg-section">
					<img src="assets/images/sliders/1.jpg" alt="Background"/>
				</div>
				<div class="container vertical-center">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
							<div class="slide-content">
								<div class="slide-icon">
									<i class="icon icon-Settings"></i>
								</div>
								<div class="slide-heading"> The Best Theme For Auto Shops </div>
								<div class="slide-title">
									<h2>Say Hello To <span class="color-theme">Car Shop !</span></h2>
								</div>
								<div class="slide-desc"> Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres. </div>
								<div class="slide-action">
									<a class="btn btn-primary" href="#">Check It Now</a>
									<a class="btn btn-primary btn-white" href="#">Purchase Now</a>
								</div>
							</div>
						</div>
						<!-- .col-md-12 end -->
					</div>
					<!-- .row end -->
				</div>
				<!-- .container end -->
			</div>
			<!-- .slide end -->
		</div>
		<!-- #hero-slider end -->
	</section>
	<!-- #hero -->
</template>

<script>
// import $ from 'jquery/dist/jquery'

export default {
	mounted() {
		var $heroSlider = $(".hero-slider");
		$heroSlider.slick({
			dots: true,
			infinite: true,
			speed: 600,
			autoplay: false,
			autoplaySpeed: 2000,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: false,
			arrows: true,
			prevArrow: '<div class="arrows arrow-prev"><i class="fa fa-angle-left"></i></div>',
			nextArrow: '<div class="arrows arrow-next"><i class="fa fa-angle-right"></i></div>',
		});
	}
}
</script>

<style>
	#hero {
		margin-top : -100px;
	}
</style>