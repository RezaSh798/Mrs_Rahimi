<template>
    <!-- Clients
    ============================================= -->
	<section id="clients" class="clients bg-gray">
		<div class="container heading">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 text-right">
					<p class="subheading">برند</p>
					<h2>برند های ما</h2>
				</div>
				<!-- .col-md-12 end -->
			</div>
			<!-- .row end -->
			
			<div id="my-heading-desc" class="row heading-desc">
				<div id="my-heading-desc-text" class="col-xs-12 col-sm-12 col-md-10 text-right">
					<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
				</div>
				<!-- .col-md-10 end -->
				<div id="my-heading-desc-button" class="col-xs-12 col-sm-12 col-md-2 text-right">
					<a class="btn btn-primary btn-block" href="#">همه ی برند ها</a>
				</div>
				<!-- .client end -->
			</div>
			<!-- .row end -->
			
		</div>
		<!-- .container end -->
		<div class="container">
			<div class="clients-bg">
				<div class="row">
					<div class="col-xs-12 colsm-12 col-md-12 client-carousel" style="margin-top:-13px !important;">
						<!-- Client #1 -->
						<div class="client">
							<img src="assets/images/clients/1.png" alt="client">
						</div>
						<!-- .client end -->
						
						<!-- Client #2 -->
						<div class="client">
							<img src="assets/images/clients/2.png" alt="client">
						</div>
						<!-- .client end -->
						
						<!-- Client #3 -->
						<div class="client">
							<img src="assets/images/clients/3.png" alt="client">
						</div>
						<!-- .client end -->
						
						<!-- Client #4 -->
						<div class="client">
							<img src="assets/images/clients/4.png" alt="client">
						</div>
						<!-- .client end -->
						
						<!-- Client #5 -->
						<div class="client">
							<img src="assets/images/clients/5.png" alt="client">
						</div>
						<!-- .client end -->
						
						<!-- Client #6 -->
						<div class="client">
							<img src="assets/images/clients/6.png" alt="client">
						</div>
						<!-- .client end -->
						<!-- Client #4 -->
						<div class="client">
							<img src="assets/images/clients/4.png" alt="client">
						</div>
						<!-- .client end -->
						
						<!-- Client #5 -->
						<div class="client">
							<img src="assets/images/clients/5.png" alt="client">
						</div>
						<!-- .client end -->
						
						<!-- Client #6 -->
						<div class="client">
							<img src="assets/images/clients/6.png" alt="client">
						</div>
						<!-- .client end -->
					</div>
				</div>
				<!-- .row end -->
			</div>
		</div>
		<!-- .container end -->
	</section>
	<!-- #clients end -->
</template>

<script>
export default {
    mounted() {
        /* ------------------ Client Carousel ------------------ */
        var $clientCarousel = $(".client-carousel");
        $clientCarousel.slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 6,
            slidesToScroll: 6,
            variableWidth: false,
            arrows: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }    
}
</script>

<style>
	@media only screen and ( min-width: 768px ) {
		#my-heading-desc {
			position: relative;
		}
		#my-heading-desc-button {
			position: absolute;
			left: 0;
		}
		#my-heading-desc-text {
			position: absolute;
			right: 0;
		}
	}
</style>