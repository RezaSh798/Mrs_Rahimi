<template>
<section>
    <page-title icon="fas fa-mobile-alt">
        <template slot="title">ارتباط با ما</template>
        <template slot="location">ارتباطات</template>
    </page-title>

    <!-- Google Maps
    ============================================= -->
	<!-- <section class="google-maps pb-0">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12">
					<div id="googleMap" style="width:100%;height:447px;">
					</div>
				</div>
			</div>
		</div>
	</section> -->
	<!-- .google-maps end -->

    <!-- Contact #1
    ============================================= -->
	<section class="contact">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-8 widget-contact pl-0 pr-0 p-none-xs p-none-sm" style="direction:rtl;">
					<form id="contact-form" action="assets/php/sendmail.php" method="post">
						<div class="col-md-6">
							<input type="email" class="form-control mb-30" name="contact-email" id="email" placeholder="ایمیل : " required/>
						</div>
						<div class="col-md-6">
							<input type="text" class="form-control mb-30" name="contact-name" id="name" placeholder="نام : " required/>
						</div>
						<div class="col-md-12">
							<textarea class="form-control mb-30" name="contact-message" id="message" rows="4" placeholder="پیام شما ..." required></textarea>
						</div>
						<div class="col-md-12">
							<button type="submit" id="submit-message" class="btn btn-primary btn-block">ثبت دیدگاه</button>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-12 mt-xs">
							<!--Alert Message-->
							<div id="contact-result">
							</div>
						</div>
					</form>
				</div>
				<!-- .col-md-8 end -->
				<div class="col-xs-12 col-sm-12 col-md-4" style="direction:rtl;">
					<div class="contct-widget-content">
						<p class="mb-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
						<div class="widget-contact-info mt-md">
							<div class="col-xs-12 col-sm-12 col-md-6 pl-0 mb-30-xs mb-30-sm">
								<h6>تلفن :</h6>
								<p><i class="fa fa-phone"></i>+ 2 01065370701</p>
								<p class="mb-0"><i class="fa fa-fax"></i>+ 2 01065370701</p>
							</div>
							<!-- .col-md-6 end -->
							<div class="col-xs-12 col-sm-12 col-md-6">
								<h6>ایمیل :</h6>
								<p class="mb-0"><i class="fa fa-envelope"></i>7oroof@7oroof.com</p>
							</div>
							<!-- .col-md-6 end -->
							<div class="col-xs-12 col-sm-12 col-md-12 pl-0 mt-30 mb-30-xs mb-30-sm">
								<h6>آدرس :</h6>
								<p class="mb-0"><i class="fa fa-map-marker"></i>2 AlBahr St, Tanta , AlGharbia, Egypt.</p>
							</div>
							<!-- .col-md-12 end -->
						</div>
					</div>
				</div>
				<!-- .col-md-4 end -->
			</div>
			<!-- .row end -->
		</div>
		<!-- .container end -->
	</section>

</section>
</template>

<script>
import PageTitle from '../layout/PageTitle.vue'

export default {
    components : {
        'page-title' : PageTitle,
    }    
}
</script>