<template>
<section>
    <page-title icon="fas fa-shopping-basket">
        <template slot="title">محصول</template>
        <template slot="location">محصول</template>
    </page-title>

    <!-- Shop Single right sidebar
    ============================================= -->
	<section id="shopgrid" class="shop shop-single">
		<div class="container shop-content">
			<div class="row" v-if="false">
				<div class="col-xs-12 col-sm-12 col-md-12">
					<!-- Alert Message -->
					<div class="alert">
						<div class="alert-icon">
							<i class="fa fa-check-circle"></i>
						</div>
						<div class="alert-content">
							<h4>Item Was Successfully Added To Your Cart.</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie.</p>
						</div>
					</div>
					<!-- .aret end -->
				</div>
			</div>
			<!-- .row end -->
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-5">
					<div class="prodcut-images">
						<div class="product-img-slider">
							<img src="assets/images/shop/full/1.jpg" alt="product image">
							<img src="assets/images/shop/full/2.jpg" alt="product image">
							<img src="assets/images/shop/full/3.jpg" alt="product image">
							<img src="assets/images/shop/full/4.jpg" alt="product image">
							<img src="assets/images/shop/full/3.jpg" alt="product image">
						</div>
						<div class="product-img-nav">
							<img src="assets/images/shop/full/5.jpg" alt="product image">
							<img src="assets/images/shop/full/6.jpg" alt="product image">
							<img src="assets/images/shop/full/7.jpg" alt="product image">
							<img src="assets/images/shop/full/8.jpg" alt="product image">
							<img src="assets/images/shop/full/7.jpg" alt="product image">
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-7" style="direction:rtl !important">
					<div class="product-title text-center-xs">
						<h3>Cold Air System</h3>
					</div>
					<!-- .product-title end -->
					<div class="product-meta mb-30">
						<div class="product-price pull-left pull-none-xs">
							<p><span class="discount">$220.00</span>$150.00</p>
						</div>
						<!-- .product-price end -->
						<div class="product-review text-right text-center-xs">
							<span class="product-rating">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star-half-o"></i>
							<i class="fa fa-star-o"></i>
							</span>
							<span>5 Review(s)</span> / <span>
							<a href="#">Add Review</a>
							</span>
						</div>
						<!--- .product-review end -->
					</div>
					<!-- .product-img end -->
					
					<div class="product-desc text-center-xs">
						<p class="mb-0">Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio.</p>
					</div>
					<!-- .product-desc end -->
					
					<hr class="mt-30 mb-30">
					<div class="product-details text-center-xs">
						<h5>جزئیات بیشتر :</h5>
						<ul class="list-unstyled">
							<li>محصول : <span class="my-other-details">Air System</span></li>
							<li>کد : <span class="my-other-details">#0214</span></li>
							<li>موجودی : <span class="my-other-details">Available</span></li>
							<li>برند : <span class="my-other-details">Opel</span></li>
						</ul>
					</div>
					<!-- .product-details end -->
					<hr class="mt-30 mb-30">
					<div class="product-action">
						<div class="product-quantity pull-left pull-none-xs">
							<span class="qua">تعداد :</span>
							<span>
							<a href="#"><i class="fa fa-minus"></i></a>
							<input type="text" value="2" id="pro-qunt" readonly>
							<a href="#"><i class="fa fa-plus"></i></a>
							</span>
						</div>
						<div class="product-cta text-right text-center-xs">
							<a class="btn btn-primary" href="#">افزودن به سبد</a>
							<a class="btn btn-primary bordered" href="#">علاقه مندم</a>
							<a class="btn btn-primary bordered" href="#">مقایسه</a>
						</div>
					</div>
					<!-- .product-action end -->
					<hr class="mt-30 mb-30">
					<div class="product-share  text-center-xs">
						<h5 class="share-title">به استراک گذاری : </h5>
						<a class="share-facebook" href="#"><i class="fa fa-facebook"></i></a>
						<a class="share-twitter" href="#"><i class="fa fa-twitter"></i></a>
						<a class="share-google-plus" href="#"><i class="fa fa-google-plus"></i></a>
						<a class="share-pinterest" href="#"><i class="fa fa-pinterest"></i></a>
						<a class="share-dribbble" href="#"><i class="fa fa-dribbble"></i></a>
					</div>
					<!-- .product-share end -->
				</div>
			</div>
			<!-- .row end -->
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12" style="direction:rtl;">
					<div class="product-tabs">
						<!-- Nav tabs -->
						<ul class="nav nav-tabs" role="tablist">
							<li role="presentation" class="active" style="float:right;">
								<a href="#description" aria-controls="description" role="tab" data-toggle="tab">توضیح</a>
							</li>
							<li role="presentation" style="float:right;">
								<a href="#details" aria-controls="details" role="tab" data-toggle="tab">جزئیات</a>
							</li>
							<li role="presentation" style="float:right;">
								<a href="#reviews" aria-controls="reviews" role="tab" data-toggle="tab">بازدید (4)</a>
							</li>
						</ul>
						
						<!-- Tab panes -->
						<div class="tab-content">
							<div role="tabpanel" class="tab-pane active" id="description">
								<p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio.</p>
								<p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio.</p>
							</div>
							<!-- #description end -->
							<div role="tabpanel" class="tab-pane" id="details">
								<h5>Technical Details</h5>
								<table class="table table-striped">
									<tbody>
										<tr>
											<td>Part Number</td>
											<td>60-MCTE</td>
										</tr>
										<tr>
											<td>Item Weight</td>
											<td>54 pounds</td>
										</tr>
										<tr>
											<td>Product Dimensions</td>
											<td>92.8 x 92.8 x 92.8 inches</td>
										</tr>
										<tr>
											<td>Item model number</td>
											<td>60-MCTE</td>
										</tr>
										<tr>
											<td>Item Package Quantity</td>
											<td>1</td>
										</tr>
										<tr>
											<td>Number of Handles</td>
											<td>1</td>
										</tr>
										<tr>
											<td>Batteries Required?</td>
											<td>No</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!-- #details end -->
							<div role="tabpanel" class="tab-pane reviews" id="reviews">
								<ul class="product-review list-unstyled">
									<li class="review-comment">
										<h6>Mostafa Amin</h6>
										<p class="review-date">22/02/2016</p>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-half-o"></i>
										</div>
										<div class="product-comment">
											<p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio.</p>
										</div>
									</li>
									<!-- .review-comment end -->
									
									<li class="review-comment">
										<h6>Mohamed Habaza</h6>
										<p class="review-date">21/02/2016</p>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o"></i>
											<i class="fa fa-star-o"></i>
										</div>
										<div class="product-comment">
											<p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio.</p>
										</div>
									</li>
									<!-- .review-comment end -->
								</ul>
								<div class="form-review">
									<form>
										<input type="email" class="form-control" id="email" placeholder="ایمیل"/>
										<textarea class="form-control" id="review" rows="2" placeholder="دیدگاه..."></textarea>
										<button type="submit" class="btn btn-primary btn-black btn-block">ثبت دیدگاه</button>
									</form>
								</div>
							</div>
							<!-- #reviews end -->
						</div>
						<!-- #tab-content end -->
					</div>
					<!-- .product-tabs end -->
				</div>
			</div>
			<!-- .row end -->
			<!-- Pager -->
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 pager">
					<div class="page-prev">
						<a href="#"><i class="fa fa-angle-left"></i></a>
					</div>
					<div class="page-next">
						<a href="#"><i class="fa fa-angle-right"></i></a>
					</div>
				</div>
			</div>
			<!-- .row end -->
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12">
					<div class="widget-related-product">
						<div class="widget-title">
							<h4>Related Products</h4>
						</div>
						<div class="widget-content">
							<div class="row">
								<!-- Product #1 -->
								<div class="col-xs-12 col-sm-6 col-md-3 product">
									<div class="product-img">
										<img  src="assets/images/shop/grid/1.jpg" alt="Product"/>
										<div class="product-hover">
											<div class="product-action">
												<a class="btn btn-primary" href="#">Add To Cart</a>
												<a class="btn btn-primary" href="#">Item Details</a>
											</div>
										</div>
										<!-- .product-overlay end -->
									</div>
									<!-- .product-img end -->
									<div class="product-bio">
										<div class="prodcut-cat">
											<a href="#">Opel</a>
										</div>
										<!-- .product-cat end -->
										<div class="prodcut-title">
											<h3>
												<a href="#">Brake Discs</a>
											</h3>
										</div>
										<!-- .product-title end -->
										<div class="product-price">
											<span class="symbole">$</span><span>68.00</span>
										</div>
										<!-- .product-price end -->
										
									</div>
									<!-- .product-bio end -->
								</div>
								<!-- .product end -->
								
								<!-- Product #2 -->
								<div class="col-xs-12 col-sm-6 col-md-3 product">
									<div class="product-img">
										<img  src="assets/images/shop/grid/2.jpg" alt="Product"/>
										<div class="product-hover">
											<div class="product-action">
												<a class="btn btn-primary" href="#">Add To Cart</a>
												<a class="btn btn-primary" href="#">Item Details</a>
											</div>
										</div>
										<!-- .product-overlay end -->
									</div>
									<!-- .product-img end -->
									<div class="product-bio">
										<div class="prodcut-cat">
											<a href="#">Subaru</a>
										</div>
										<!-- .product-cat end -->
										<div class="prodcut-title">
											<h3>
												<a href="#">OIL FILTER</a>
											</h3>
										</div>
										<!-- .product-title end -->
										<div class="product-price">
											<span class="symbole">$</span><span>40.00</span>
										</div>
										<!-- .product-price end -->
										
									</div>
									<!-- .product-bio end -->
								</div>
								<!-- .product end -->
								
								<!-- Product #3 -->
								<div class="col-xs-12 col-sm-6 col-md-3 product">
									<div class="product-img">
										<img  src="assets/images/shop/grid/3.jpg" alt="Product"/>
										<div class="product-hover">
											<div class="product-action">
												<a class="btn btn-primary" href="#">Add To Cart</a>
												<a class="btn btn-primary" href="#">Item Details</a>
											</div>
										</div>
										<!-- .product-overlay end -->
									</div>
									<!-- .product-img end -->
									<div class="product-bio">
										<div class="prodcut-cat">
											<a href="#">Opel</a>
										</div>
										<!-- .product-cat end -->
										<div class="prodcut-title">
											<h3>
												<a href="#">Belt Car Engine</a>
											</h3>
										</div>
										<!-- .product-title end -->
										<div class="product-price">
											<span class="symbole">$</span><span>180.00</span>
										</div>
										<!-- .product-price end -->
										
									</div>
									<!-- .product-bio end -->
								</div>
								<!-- .product end -->
								
								<!-- Product #4 -->
								<div class="col-xs-12 col-sm-6 col-md-3 product">
									<div class="product-img">
										<img  src="assets/images/shop/grid/4.jpg" alt="Product"/>
										<div class="product-hover">
											<div class="product-action">
												<a class="btn btn-primary" href="#">Add To Cart</a>
												<a class="btn btn-primary" href="#">Item Details</a>
											</div>
										</div>
										<!-- .product-overlay end -->
									</div>
									<!-- .product-img end -->
									<div class="product-bio">
										<div class="prodcut-cat">
											<a href="#">Mercedes</a>
										</div>
										<!-- .product-cat end -->
										<div class="prodcut-title">
											<h3>
												<a href="#">Tire Chains</a>
											</h3>
										</div>
										<!-- .product-title end -->
										<div class="product-price">
											<span class="symbole">$</span><span>230.00</span>
										</div>
										<!-- .product-price end -->
										
									</div>
									<!-- .product-bio end -->
								</div>
								<!-- .product end -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- .product-related end -->
		</div>
		<!-- .container end -->
	</section>
	<!-- #blog end -->
</section>
</template>

<script>
import PageTitle from '../layout/PageTitle.vue'
import { mapState } from 'vuex';

export default {
    components : {
        'page-title' : PageTitle,
	},
	computed: mapState(['product']),
	mounted() {
		/* ------------------ Product Image SLider ------------------ */
		$('.product-img-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.product-img-nav',
			infinite: true,

		});
		$('.product-img-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 2,
			asNavFor: '.product-img-slider',
			dots: false,
			arrows: true,
			prevArrow: '<div class="arrows arrow-prev"><i class="fa fa-angle-left"></i></div>',
			nextArrow: '<div class="arrows arrow-next"><i class="fa fa-angle-right"></i></div>',
			centerMode: false,
			focusOnSelect: true,
			infinite: true,
			responsive: [{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}]
		});
	}
}
</script>

<style>
	.my-other-details {
		float: left !important;
	}
</style>