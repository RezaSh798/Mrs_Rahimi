<template>
    <header id="navbar-spy" class="header header-1">
		<div class="top-bar">
			<div class="container">
				<div class="row" style="margin-top:-25px !important">
					<div class="col-xs-12 col-sm-6 col-md-5">
						<ul class="list-inline top-contact">
							<li>+ 2 0106 5370701<span> : تماس</span></li>
							<li>7oroof@7oroof.com<span> : ایمیل</span></li>
						</ul>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-7">
						<ul class="list-inline pull-right top-links">
							<li v-if="!isAuthenticated">
								<router-link to="/user/login">ورود</router-link>
								/
								<router-link to="/user/register">عضویت</router-link>
							</li>
							<li v-else>
								<router-link to="/user/panel/profile">پنل کاربر</router-link>
							</li>
						</ul>
					</div>
				</div>
				<!-- .row end -->
			</div>
			<!-- .container end -->
		</div>
		<!-- .top-bar end -->
		<nav id="primary-menu" class="navbar navbar-fixed-top">
			<div class="container">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					</button>
					<a class="logo" href="index.html">
					<img src="assets/images/logo/logo-light.png" alt="Autoshop">
					</a>
				</div>
				
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse pull-right" id="header-navbar-collapse-1">
					<ul id="my-navbar" class="nav navbar-nav navbar-left">
						<li class="my-navbar-li">
							<router-link to="/">صفحه اصلی</router-link>
						</li>
						<!-- li end -->
						<li class="has-dropdown my-navbar-li" style="position:relative;">
							<a href="#" data-toggle="dropdown" class="dropdown-toggle">صفحه ها</a>
							<ul v-if="!isAuthenticated" id="shop-dropdown" class="dropdown-menu" style="position:absolute;right:0px;">
								<li class="text-right">
									<router-link to="/user/login">ورود</router-link>
								</li>
								<li class="text-right">
									<router-link to="/user/register">عضویت</router-link>
								</li>
							</ul>
							<ul  id="shop-dropdown" class="dropdown-menu" style="position:absolute;right:0px;" v-else>
								<li class="text-right">
									<router-link to="/user/panel/profile">پنل کاربر</router-link>
								</li>
							</ul>
						</li>
						<!-- li end -->
						<li class="has-dropdown my-navbar-li" style="position:relative;">
							<router-link to="/shop">فروشگاه</router-link>
						</li>
						<!-- li end -->
						<li class="my-navbar-li">
							<router-link to="/about">درباره</router-link>
						</li>
						<li class="my-navbar-li">
							<router-link to="/contact">ارتباط با ما</router-link>
						</li>
						<li class="my-navbar-li" v-if="isAuthenticated && user.rol == 'admin'">
							<router-link to="/panel/products">داشبورد</router-link>
						</li>
						<!-- li end -->
					</ul>					
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>
	</header>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: mapState([
		'isAuthenticated',
		'user'
	]),
	mounted() {
		var $navAffix = $(".header nav");
		$navAffix.affix({
			offset: {
				top: 50
			}
		});

		/* ------------------  mobile menu ------------------ */

		var $dropToggle = $("ul.dropdown-menu [data-toggle=dropdown]"),
			$module = $(".module");
		$dropToggle.on("click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			$(this).parent().siblings().removeClass("open");
			$(this).parent().toggleClass("open");
		});
		$module.on("click",function() {
			$(this).toggleClass("toggle-module");
		});
		$module.find("input.form-control", ".btn", ".cancel").on("click",function(e) {
			e.stopPropagation();
		});
	}
}
</script>

<style>
	#my-navbar {
		direction: rtl;
	}
	.my-navbar-li {
		float: right !important;
	}
	#nav-cart {
		float: left !important;
	}
	@media only screen and (max-width: 767px) and (min-width: 320px) {
		.my-navbar-li {
			float: unset !important;
		}
		#shop-dropdown {
			position: relative !important;
		}
		.navbar-nav > li {
			margin-left: 0px !important;
		}
	}
	@media only screen and ( min-width: 768px ) {
		#shop-dropdown {
			margin-top: -11px;
		}
	}
</style>