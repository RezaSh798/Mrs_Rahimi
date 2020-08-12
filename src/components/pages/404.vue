<template>
<section>
    <page-title>
        <template slot="title">خطا 404</template>
        <template slot="location">404</template>
    </page-title>
    <!--404
    =============================================-->
	<section id="404" class="page-404 text-center">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
					<h3>404</h3>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
					<p style="direction:rtl;">اوپس!! خطایی رخ داده است، شما تا {{ sec }} ثانیه دیگر به صفحه اصلی بازگردانده میشوید.</p>
					<router-link to="/" class="btn btn-primary">بازگشت به صفحه اصلی</router-link>
				</div>
			</div>
			<!-- .row end -->
		</div>
		<!-- .cotainer end -->
	</section>
	<!-- #404 end -->
</section>
</template>

<script>
// import components
import PageTitle from '../layout/PageTitle.vue'

export default {
	data() {
		return {
			sec : 5,
			time : undefined,
		}
	},
    components : {
        'page-title' : PageTitle,
	},
	mounted() {
		this.time = setInterval( () => {
			if( this.sec != 0 ) {
				this.sec = this.sec - 1;
			} else {
				router.push({ path : '/home' });
				clearInterval( this.time );
			}
			console.log(this.sec);
		}, 1000);
	},
}
</script>