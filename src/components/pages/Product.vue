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
						<v-app>
							<v-carousel
								cycle
								height="300"
								hide-delimiter-background
								show-arrows-on-hover
							>
								<v-carousel-item
								v-for="(item, i) in items"
								:key="i"
								:src="item.src"
								>
								</v-carousel-item>
							</v-carousel>
						</v-app>
					</div>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-7" style="direction:rtl !important">
					<div class="product-title text-center-xs" style="padding-bottom: 10px;">
						<h3 style="display: inline;">{{ product.title }}</h3>
						<div class="product-price pull-left pull-none-xs">
							<p v-if="isAuthenticated"><span class="discount">{{ product.c_price }}</span>{{ product.u_price }}</p>
							<p v-else>{{ product.c_price }}</p>
						</div>
					</div>
					<!-- .product-title end -->
					<!-- <div class="product-meta mb-30">
						<div class="product-price pull-left pull-none-xs">
							<p><span class="discount">$220.00</span>$150.00</p>
						</div> -->
						<!-- .product-price end -->
						<!-- <div class="product-review text-right text-center-xs">
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
						</div> -->
						<!--- .product-review end -->
					<!-- </div> -->
					<!-- .product-img end -->
					
					<div class="product-desc text-center-xs">
						<p class="mb-0">{{ product.desc }}</p>
					</div>
					<!-- .product-desc end -->
					
					<hr class="mt-30 mb-30">
					<div class="product-details text-center-xs">
						<h5>جزئیات بیشتر :</h5>
						<ul class="list-unstyled">
							<li>محصول : <span class="my-other-details" style="float: none !important">{{ product.title }}</span></li>
							<li>موجودی : <span class="my-other-details" style="float: none !important">{{ product.inventory > 0 ? 'موجود' : 'ناموجود' }}</span></li>
							<li>دسته بندی : <span class="my-other-details" style="float: none !important">{{ product.category }}</span></li>
						</ul>
					</div>
					<!-- .product-details end -->
					<hr class="mt-30 mb-30">
					<!-- <div class="product-action">
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
					</div> -->
					<!-- .product-action end -->
					<!-- <hr class="mt-30 mb-30">
					<div class="product-share  text-center-xs">
						<h5 class="share-title">به استراک گذاری : </h5>
						<a class="share-facebook" href="#"><i class="fa fa-facebook"></i></a>
						<a class="share-twitter" href="#"><i class="fa fa-twitter"></i></a>
						<a class="share-google-plus" href="#"><i class="fa fa-google-plus"></i></a>
						<a class="share-pinterest" href="#"><i class="fa fa-pinterest"></i></a>
						<a class="share-dribbble" href="#"><i class="fa fa-dribbble"></i></a>
					</div> -->
					<!-- .product-share end -->
				</div>
			</div>
			<!-- .row end -->
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12" style="direction:rtl;">
					<div class="product-tabs">
						<!-- Nav tabs -->
						<ul class="nav nav-tabs" role="tablist">
							<li role="presentation" style="float:right;">
								<a href="#reviews" aria-controls="reviews" role="tab" data-toggle="tab">دیدگاه ها ({{ len }})</a>
							</li>
						</ul>
						
						<!-- Tab panes -->
						<div class="tab-content">
							<!-- #details end -->
							<div role="tabpanel" class="tab-pane reviews" id="reviews">
								<ul class="product-review list-unstyled">
									<!-- for loop to show all comments -->
									<li class="review-comment" v-for="comment in product.comments" :key="comment.id">
										<h6>Mostafa Amin</h6>
										<p class="review-date">22/02/2016</p>
										<div class="product-comment">
											<p>{{ comment.body }}</p>
										</div>
									</li>
									<!-- .review-comment end -->
								</ul>
								<div v-if="isAuthenticated" class="form-review">
									<ValidationObserver v-slot="{ invalid }">
										<form @submit="onComment()">
											<ValidationProvider name="ایمیل" rules="required|email" v-slot="{ errors }">
												<input type="email" v-model="comment.email" class="form-control" id="email" placeholder="ایمیل"/>
												<span>{{ errors[0] }}</span>
											</ValidationProvider>
											<ValidationProvider name="دیدگاه" rules="required|min:5|max:300" v-slot="{ errors }">
												<textarea class="form-control" v-model="comment.body" id="review" rows="2" placeholder="دیدگاه..."></textarea>
												<span>{{ errors[0] }}</span>
											</ValidationProvider>
											<button type="submit" :disabled="invalid" class="btn btn-primary btn-black btn-block">ثبت دیدگاه</button>
										</form>
									</ValidationObserver>
								</div>
								<div v-else>
									<div class="alert">
										<p>برای ارسال دیدگاه ابتدا باید وارد اکانت خود شوید!</p>
									</div>
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
		</div>
		<!-- .container end -->
	</section>
	<!-- #blog end -->
</section>
</template>

<script>
// import $ from 'jquery/dist/jquery'
import PageTitle from '../layout/PageTitle.vue'
import { mapActions, mapState } from 'vuex';

import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate'
import fa from 'vee-validate/dist/locale/fa.json'
import * as rules from 'vee-validate/dist/rules'

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('fa', fa);

export default {
	data() {
		return {
			comment: {
				email: '',
				body: '',
			},
            items: [
                {
                    src: './assets/images/sliders/1.jpg'
                },
                {
                    src: './assets/images/sliders/2.jpg'
                },
                {
                    src: './assets/images/sliders/3.jpg'
                }
            ],
		}
	},
    components : {
		'page-title' : PageTitle,
		ValidationObserver,
		ValidationProvider
	},
	computed: {
		...mapState(['product', 'isAuthenticated', 'len']),
	},
	methods: {
		...mapActions(['getProduct', 'createComment']),
		onComment() {
			this.createComment(this.comment);
		}
	},
	created() {
		this.getProduct(this.$route.params.id);
	},
}
</script>

<style>
	.my-other-details {
		float: left !important;
	}
	.alert {
        border: 1px solid #FF3D00;
        border-radius: 5px;
        background-image:linear-gradient(to left bottom,#F50057, #FF3D00);
    }
	.alert p {
		color: black;
	}
</style>