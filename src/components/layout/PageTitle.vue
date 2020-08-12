<template>
    <!-- Page Title
    ============================================= -->
	<section id="page-title" class="page-title">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6">
					<ol id="breadcrumb" class="breadcrumb text-right">
						<li>
							<router-link to="/">صفحه اصلی</router-link>
						</li>
						<li><slot name="location"></slot></li>
					</ol>
				</div>
				<!-- .col-md-6 end -->

				<div id="title" class="col-xs-12 col-sm-12 col-md-6">
					<i :class="icon"></i>
					<h1><slot name="title"></slot></h1>
				</div>
				<!-- .col-md-6 end -->
			</div>
			<!-- .row end -->
		</div>
		<!-- .container end -->
	</section>
	<!-- #page-title end -->
</template>

<script>
export default {
	props:['title','location','icon'],
}
</script>

<style>
	#page-title {
		margin-top: -100px;
	}
	#title {
		float: right !important;
		direction: rtl;
	}
	#title h1 {
		font-size: 25px !important;
		display: inline;
	}
	#title i {
		font-size: 25px;
		margin-left: 10px;
	}
	#breadcrumb li {
		float: left !important;
	}
	@media only screen and (max-width: 767px) and (min-width: 320px) {
		#title {
			margin-top: 30px;
		}
	}
</style>