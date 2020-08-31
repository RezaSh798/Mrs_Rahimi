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
						<!-- Products -->
						<div>
							<div class="col-xs-12 col-sm-6 col-md-4 product" v-for="product in products" :key="product.id">
								<div class="product-img">
									<img :src="product.image" alt="Product"/>
									<div class="product-hover">
										<div class="product-action">
											<!-- <a class="btn btn-primary" href="#">افزودن به سبد</a> -->
											<router-link class="btn btn-primary" :to="'/product/' + product.id">مشخصات</router-link>
										</div>
									</div>
									<!-- .product-overlay end -->
								</div>
								<!-- .product-img end -->
								<div class="product-bio">
									<div class="prodcut-cat">
										<p>{{ product.category_id }}</p>
									</div>
									<!-- .product-cat end -->
									<div class="prodcut-title">
										<h3>
											{{ product.title }}
										</h3>
									</div>
									<!-- .product-title end -->
									<div class="product-price"  v-if="isAuthenticated">
										<span class="symbole">تومان</span><span>{{ product.u_price }}</span>
									</div>
									<div class="product-price"  v-else>
										<span class="symbole">تومان</span><span>{{ product.c_price }}</span>
									</div>
									<!-- .product-price end -->
									
								</div>
								<!-- .product-bio end -->
							</div>
						</div>
						
					</div>
					<!-- .row end -->
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12">
							<v-pagination
							id="pageinate"
							v-model="page"
							@input="getPage()"
							:length="pageCount"
							color="amber darken-4"></v-pagination>
						</div>
						<!-- .col-md-12 end -->
					</div>
				</div>
				<!-- .col-md-9 end -->
				<div id="my-sidebar" class="col-xs-12 col-sm-12 col-md-3 sidebar">
					<h5>فیلتر کردن با :</h5>
					<!-- Categories
                    ============================================= -->
					<div class="widget widget-categories">
						<div class="widget-title">
							<h5>دسته بندی</h5>
						</div>
						<div class="widget-content">
							<ul>
								<CategoriesTreeFilter
								v-for="category in categories"
								:key="category.id"
								:category="category" />
							</ul>
						</div>
					</div>
					<!-- .widget-categories end -->
					
					<!-- Filter
                    ============================================= -->
					<div class="widget widget-filter">
						<div class="widget-title">
							<h5>قیمت</h5>
						</div>
						<div class="widget-content">
							<div id="slider-range"></div>
							<p>
								<label for="amount">قیمت ( تومن ) : </label>
								<input type="text" id="amount" readonly style="direction:ltr;">
							</p>
							<a class="btn btn-secondary" @click="filter()">فیلتر</a>
						</div>
					</div>
					<!-- .widget-filter end -->
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
import CategoriesTreeFilter from '../layout/CategoriesTreeFilter.vue'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'Shop',
	data() {
		return {
			page : 1,
			itemsPerPage : 9,
			priceRange: null,
		}
	},
    components : {
		'page-title' : PageTitle,
		CategoriesTreeFilter
	},
	computed: {
		...mapState([
			'products',
			'categories',
			'isAuthenticated',
			'pageCount',
			'categories',
		]),
	},
	methods: {
		...mapActions([
			'getProductsPerPage',
			'shopFilters'
		]),
		getPage() {
			this.getProductsPerPage(this.page);
		},
		filter() {
			this.shopFilters(this.priceRange);
		},
	},
	created() {
		this.$store.dispatch('getProductsPerPage');
		this.$store.dispatch('getCategories');
		this.$vuetify.rtl = false;
	},
	mounted() {
		let test = null;
		var $sliderRange = $("#slider-range"),
        $sliderAmount = $("#amount");
		$sliderRange.slider({
			range: true,
			min: 500000,
			max: 10000000,
			values: [1000000, 3000000],
			slide: function(event, ui) {
				$sliderAmount.val( ui.values[0] + " - " + ui.values[1] );
				test = ui;
			},
			change: () => {
				this.priceRange = test.values;
			}
		});
		$sliderAmount.val( $sliderRange.slider("values", 0) + " - " + $sliderRange.slider("values", 1) );
	},
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