<template>
<section>
    <page-title icon="fab fa-shopify">
        <template slot="title">فروشگاه</template>
        <template slot="location">فروشگاه</template>
    </page-title>

    <section id="shopgrid" class="shop shop-grid">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-9">
					<div class="row">
						<div class="col-xs-12  col-sm-12  col-md-12">
							<div class="shop-options">
								<div id="my-shop-option" class="product-options2 pull-right pull-none-xs" style="direction:rtl;">
									<ul class="list-inline">
										<li>
											<div class="product-sort mb-15-xs">
												<span>مرتب کردن بر اساس : </span>
												<i class="fa fa-angle-down"></i>
												<select>
													<option selected="" value="Default">اسم</option>
													<option value="Larger">جدید ترین</option>
													<option value="Larger">قدیمی ترین</option>
													<option value="Small">گران ترین</option>
													<option value="Medium">ارزان ترین</option>
												</select>
											</div>
										</li>
									</ul>
								</div>
								<!-- .product-options end -->
							</div>
							<!-- .shop-options end -->
						</div>
						<!-- .col-md-12 end -->
					</div>
					<!-- .row end -->
					<div class="row">
						<!-- Product #1 -->
						<div class="col-xs-12 col-sm-6 col-md-4 product">
							<div class="product-img">
								<img  src="assets/images/shop/grid/1.jpg" alt="Product"/>
								<div class="product-hover">
									<div class="product-action">
										<a class="btn btn-primary" href="#">افزودن به سبد</a>
										<router-link class="btn btn-primary" to="/product/id">مشخصات</router-link>
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
						<div class="col-xs-12 col-sm-6 col-md-4 product">
							<div class="product-img">
								<img  src="assets/images/shop/grid/2.jpg" alt="Product"/>
								<div class="product-hover">
									<div class="product-action">
										<a class="btn btn-primary" href="#">افزودن به سبد</a>
										<router-link class="btn btn-primary" to="/product/id">مشخصات</router-link>
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
						<div class="col-xs-12 col-sm-6 col-md-4 product">
							<div class="product-img">
								<img  src="assets/images/shop/grid/3.jpg" alt="Product"/>
								<div class="product-hover">
									<div class="product-action">
										<a class="btn btn-primary" href="#">افزودن به سبد</a>
										<router-link class="btn btn-primary" to="/product/id">مشخصات</router-link>
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
						<div class="col-xs-12 col-sm-6 col-md-4 product">
							<div class="product-img">
								<img  src="assets/images/shop/grid/4.jpg" alt="Product"/>
								<div class="product-hover">
									<div class="product-action">
										<a class="btn btn-primary" href="#">افزودن به سبد</a>
										<router-link class="btn btn-primary" to="/product/id">مشخصات</router-link>
									</div>
								</div>
								<!-- .product-overlay end -->
							</div>
							<!-- .product-img end -->
							<div class="product-bio">
								<div class="prodcut-cat">
									<a href="#">Bmw</a>
								</div>
								<!-- .product-cat end -->
								<div class="prodcut-title">
									<h3>
										<a href="#">Front LIGHTING</a>
									</h3>
								</div>
								<!-- .product-title end -->
								<div class="product-price">
									<span class="symbole">$</span><span>28.00</span>
								</div>
								<!-- .product-price end -->
								
							</div>
							<!-- .product-bio end -->
						</div>
						<!-- .product end -->
						
						<!-- Product #5 -->
						<div class="col-xs-12 col-sm-6 col-md-4 product">
							<div class="product-img">
								<img  src="assets/images/shop/grid/5.jpg" alt="Product"/>
								<div class="product-hover">
									<div class="product-action">
										<a class="btn btn-primary" href="#">افزودن به سبد</a>
										<router-link class="btn btn-primary" to="/product/id">مشخصات</router-link>
									</div>
								</div>
								<!-- .product-overlay end -->
							</div>
							<!-- .product-img end -->
							<div class="product-bio">
								<div class="prodcut-cat">
									<a href="#">Audi</a>
								</div>
								<!-- .product-cat end -->
								<div class="prodcut-title">
									<h3>
										<a href="#">Thermal Fan</a>
									</h3>
								</div>
								<!-- .product-title end -->
								<div class="product-price">
									<span class="symbole">$</span><span>240.00</span>
								</div>
								<!-- .product-price end -->
								
							</div>
							<!-- .product-bio end -->
						</div>
						<!-- .product end -->
						
						<!-- Product #6 -->
						<div class="col-xs-12 col-sm-6 col-md-4 product">
							<div class="product-img">
								<img  src="assets/images/shop/grid/6.jpg" alt="Product"/>
								<div class="product-hover">
									<div class="product-action">
										<a class="btn btn-primary" href="#">افزودن به سبد</a>
										<router-link class="btn btn-primary" to="/product/id">مشخصات</router-link>
									</div>
								</div>
								<!-- .product-overlay end -->
							</div>
							<!-- .product-img end -->
							<div class="product-bio">
								<div class="prodcut-cat">
									<a href="#">Toyota</a>
								</div>
								<!-- .product-cat end -->
								<div class="prodcut-title">
									<h3>
										<a href="#">Cold Air System</a>
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
						
						<!-- Product #7 -->
						<div class="col-xs-12 col-sm-6 col-md-4 product">
							<div class="product-img">
								<img  src="assets/images/shop/grid/1.jpg" alt="Product"/>
								<div class="product-hover">
									<div class="product-action">
										<a class="btn btn-primary" href="#">افزودن به سبد</a>
										<router-link class="btn btn-primary" to="/product/id">مشخصات</router-link>
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
						
						<!-- Product #8 -->
						<div class="col-xs-12 col-sm-6 col-md-4 product">
							<div class="product-img">
								<img  src="assets/images/shop/grid/2.jpg" alt="Product"/>
								<div class="product-hover">
									<div class="product-action">
										<a class="btn btn-primary" href="#">افزودن به سبد</a>
										<router-link class="btn btn-primary" to="/product/id">مشخصات</router-link>
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
						
						<!-- Product #9 -->
						<div class="col-xs-12 col-sm-6 col-md-4 product">
							<div class="product-img">
								<img  src="assets/images/shop/grid/3.jpg" alt="Product"/>
								<div class="product-hover">
									<div class="product-action">
										<a class="btn btn-primary" href="#">افزودن به سبد</a>
										<router-link class="btn btn-primary" to="/product/id">مشخصات</router-link>
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
						
						<!-- Product #10 -->
						<div class="col-xs-12 col-sm-6 col-md-4 product">
							<div class="product-img">
								<img  src="assets/images/shop/grid/4.jpg" alt="Product"/>
								<div class="product-hover">
									<div class="product-action">
										<a class="btn btn-primary" href="#">افزودن به سبد</a>
										<router-link class="btn btn-primary" to="/product/id">مشخصات</router-link>
									</div>
								</div>
								<!-- .product-overlay end -->
							</div>
							<!-- .product-img end -->
							<div class="product-bio">
								<div class="prodcut-cat">
									<a href="#">Bmw</a>
								</div>
								<!-- .product-cat end -->
								<div class="prodcut-title">
									<h3>
										<a href="#">Front LIGHTING</a>
									</h3>
								</div>
								<!-- .product-title end -->
								<div class="product-price">
									<span class="symbole">$</span><span>28.00</span>
								</div>
								<!-- .product-price end -->
								
							</div>
							<!-- .product-bio end -->
						</div>
						<!-- .product end -->
						
						<!-- Product #11 -->
						<div class="col-xs-12 col-sm-6 col-md-4 product">
							<div class="product-img">
								<img  src="assets/images/shop/grid/5.jpg" alt="Product"/>
								<div class="product-hover">
									<div class="product-action">
										<a class="btn btn-primary" href="#">افزودن به سبد</a>
										<router-link class="btn btn-primary" to="/product/id">مشخصات</router-link>
									</div>
								</div>
								<!-- .product-overlay end -->
							</div>
							<!-- .product-img end -->
							<div class="product-bio">
								<div class="prodcut-cat">
									<a href="#">Audi</a>
								</div>
								<!-- .product-cat end -->
								<div class="prodcut-title">
									<h3>
										<a href="#">Thermal Fan</a>
									</h3>
								</div>
								<!-- .product-title end -->
								<div class="product-price">
									<span class="symbole">$</span><span>240.00</span>
								</div>
								<!-- .product-price end -->
								
							</div>
							<!-- .product-bio end -->
						</div>
						<!-- .product end -->
						
						<!-- Product #12 -->
						<div class="col-xs-12 col-sm-6 col-md-4 product">
							<div class="product-img">
								<img  src="assets/images/shop/grid/6.jpg" alt="Product"/>
								<div class="product-hover">
									<div class="product-action">
										<a class="btn btn-primary" href="#">افزودن به سبد</a>
										<router-link class="btn btn-primary" to="/product/id">مشخصات</router-link>
									</div>
								</div>
								<!-- .product-overlay end -->
							</div>
							<!-- .product-img end -->
							<div class="product-bio">
								<div class="prodcut-cat">
									<a href="#">Toyota</a>
								</div>
								<!-- .product-cat end -->
								<div class="prodcut-title">
									<h3>
										<a href="#">Cold Air System</a>
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
						
					</div>
					<!-- .row end -->
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12">
							<ul class="pagination">
								<li class="active">
									<a href="#">1</a>
								</li>
								<li>
									<a href="#">2</a>
								</li>
								<li>
									<a href="#">3</a>
								</li>
								<li>
									<a href="#" aria-label="Next">
									<span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
									</a>
								</li>
							</ul>
						</div>
						<!-- .col-md-12 end -->
					</div>
				</div>
				<!-- .col-md-9 end -->
				<div id="my-sidebar" class="col-xs-12 col-sm-12 col-md-3 sidebar">
					<!-- Categories
                    ============================================= -->
					<div class="widget widget-categories">
						<div class="widget-title">
							<h5>دسته بندی</h5>
						</div>
						<div class="widget-content">
							<ul class="list-unstyled">
								<li>
									<a href="#"><i class="fa fa-angle-double-left"></i>دسته بندی 1</a>
								</li>
								<li>
									<a href="#"><i class="fa fa-angle-double-left"></i>دسته بندی 2</a>
								</li>
								<li>
									<a href="#"><i class="fa fa-angle-double-left"></i>دسته بندی 3</a>
								</li>
								<li>
									<a href="#"><i class="fa fa-angle-double-left"></i>دسته بندی 4</a>
								</li>
								<li>
									<a href="#"><i class="fa fa-angle-double-left"></i>دسته بندی 5</a>
								</li>
								<li>
									<a href="#"><i class="fa fa-angle-double-left"></i>دسته بندی 6</a>
								</li>
							</ul>
						</div>
					</div>
					<!-- .widget-categories end -->
					
					<!-- Filter
                    ============================================= -->
					<div class="widget widget-filter">
						<div class="widget-title">
							<h5>فیلتر کردن با قیمت</h5>
						</div>
						<div class="widget-content">
							<div id="slider-range"></div>
							<p>
								<label for="amount">قیمت ( تومن ) : </label>
								<input type="text" id="amount" readonly style="direction:ltr;">
							</p>
							<a class="btn btn-secondary" href="#">فیلتر</a>
						</div>
					</div>
					<!-- .widget-filter end -->
					
					<!-- Select Brand
                    ============================================= -->
					<div class="widget widget-brands">
						<div class="widget-title">
							<h5>Brands</h5>
						</div>
						<div class="widget-content">
							<form>
								<!-- Check #1 -->
								<div class="check-option">
									<input type="checkbox" class="checkbox-style" name="brands"   id="Opel" value="Opel">
									<label for="Opel" class="checkbox-label" >Opel <span>(5)</span></label>
								</div>
								<!-- Check #2 -->
								<div class="check-option">
									<input type="checkbox" class="checkbox-style" name="brands"  id="Subaru" value="Subaru">
									<label for="Subaru" class="checkbox-label" >Subaru <span>(77)</span></label>
								</div>
								<!-- Check #3 -->
								<div class="check-option">
									<input type="checkbox" class="checkbox-style" name="brands" id="BMW" value="BMW">
									<label for="BMW" class="checkbox-label" >BMW <span>(16)</span></label>
								</div>
								<!-- Check #4 -->
								<div class="check-option">
									<input type="checkbox" class="checkbox-style" name="brands"   id="Toyota" value="Toyota">
									<label for="Toyota" class="checkbox-label" >Toyota <span>(11)</span></label>
								</div>
								<!-- Check #5 -->
								<div class="check-option">
									<input type="checkbox" class="checkbox-style" name="brands"   id="Audi" value="Audi">
									<label for="Audi" class="checkbox-label" >Audi <span>(54)</span></label>
								</div>
								<!-- Check #6 -->
								<div class="check-option">
									<input type="checkbox" class="checkbox-style" name="brands"   id="Chevrolet" value="Chevrolet">
									<label for="Chevrolet" class="checkbox-label" >Chevrolet <span>(22)</span></label>
								</div>
							</form>
						</div>
					</div>
					<!-- .widget-brand end -->
					
					<!-- Tag Clouds
                    ============================================= -->
					<div class="widget widget-tags">
						<div class="widget-title">
							<h5>tag clouds</h5>
						</div>
						<div class="widget-content">
							<a href="#">responsive</a>
							<a href="#">modern</a>
							<a href="#">corporate</a>
							<a href="#">business</a>
							<a href="#">fresh</a>
							<a href="#">awesome</a>
							<a href="#">business</a>
							<a href="#">fresh</a>
							<a href="#">corporate</a>
							<a href="#">autoshop</a>
						</div>
					</div>
					<!-- .widget-tags end -->
				</div>
				<!-- .col-md-3 end -->
			</div>
			<!-- .row end -->
		</div>
		<!-- .container end -->
	</section>
</section>
</template>

<script>
// imports components
import PageTitle from '../layout/PageTitle.vue'

import { mapState } from 'vuex'
import store from '../../store'

export default {
    components : {
        'page-title' : PageTitle
	},
	mounted() {
		var $sliderRange = $("#slider-range"),
        $sliderAmount = $("#amount");
		$sliderRange.slider({
			range: true,
			min: 500000,
			max: 10000000,
			values: [1000000, 3000000],
			slide: function(event, ui) {
				$sliderAmount.val( ui.values[0] + " - " + ui.values[1] );
			}
		});
		$sliderAmount.val( $sliderRange.slider("values", 0) + " - " + $sliderRange.slider("values", 1) );
	},
	computed: mapState(['products', 'brands', 'categories']),
	created() {		
		store.dispatch('shop');
	}
}
</script>

<style>
	#my-sidebar {
		direction: rtl;
	}
	@media only screen and (max-width: 767px) and (min-width: 320px) {
		#my-shop-option {
			margin-top: -15px;
		}
	}
</style>