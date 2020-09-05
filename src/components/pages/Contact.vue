<template>
<section>
    <page-title icon="fas fa-mobile-alt">
        <template slot="title">ارتباط با ما</template>
        <template slot="location">ارتباطات</template>
    </page-title>
	<section class="contact">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-8 widget-contact pl-0 pr-0 p-none-xs p-none-sm" style="direction:rtl;">
					<ValidationObserver v-slot="{ invalid }">
						<form id="contact-form">
							<div class="col-md-6">
								<ValidationProvider name="ایمیل" rules="required|email" v-slot="{ errors }">
									<input type="email" class="form-control mb-30" v-model="user.email" id="email" placeholder="ایمیل : " />
									<span>{{ errors[0] }}</span>
								</ValidationProvider>
							</div>
							<div class="col-md-6">
								<ValidationProvider name="نام کاربری" rules="required" v-slot="{ errors }">
									<input type="text" class="form-control mb-30" v-model="user.name" id="name" placeholder="نام کاربری : " />
									<span>{{ errors[0] }}</span>
								</ValidationProvider>
							</div>
							<div class="col-md-12">
								<ValidationProvider name="متن" rules="required|min:50|max:300" v-slot="{ errors }">
									<textarea class="form-control mb-30" id="message" v-model="user.message" rows="4" placeholder="پیام شما ..."></textarea>
									<span>{{ errors[0] }}</span>
								</ValidationProvider>
							</div>
							<div class="col-md-12">
								<button type="submit" :disabled="invalid" @click="sendMessage()" id="submit-message" class="btn btn-primary btn-block">ارسال</button>
							</div>
						</form>
					</ValidationObserver>
				</div>
				<!-- .col-md-8 end -->
				<div class="col-xs-12 col-sm-12 col-md-4" style="direction:rtl;">
					<div class="contct-widget-content">
						<p class="mb-0">شرکت مهرآوید نیرو فعالیت رسمی خود را از سال 1394 آغاز نموده که در ابتدا به عنوان یک شرکت مجری، در زمینه ی توزیع و برق رسانی بوده است، با توجه به اساسنامه شرکت مدیران این مجموعه تصمیم به تغییر وضعیت فعالیت شرکت از اجرا به تامین کالا نموده اند.</p>
						<div class="widget-contact-info mt-md">
							<div class="col-xs-12 col-sm-12 col-md-6 pl-0 mb-30-xs mb-30-sm">
								<h6>تلفن :</h6>
								<p><i class="fa fa-phone"></i>09152041699</p>
								<p class="mb-0"><i class="fa fa-fax"></i>05137133686</p>
							</div>
							<!-- .col-md-6 end -->
							<div class="col-xs-12 col-sm-12 col-md-6">
								<h6>ایمیل :</h6>
								<p class="mb-0"><i class="fa fa-envelope"></i>mehravidniroo@gmail.com</p>
							</div>
							<!-- .col-md-6 end -->
							<div class="col-xs-12 col-sm-12 col-md-12 pl-0 mt-30 mb-30-xs mb-30-sm">
								<h6>آدرس :</h6>
								<p class="mb-0"><i class="fa fa-map-marker"></i>مشهد، خیابان صاحب الزمان، بین صاحب الزمان 26 و 28، مجتمع فاضل، واحد 120</p>
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
			user: {
				email: '',
				name: '',
				message: '',
			}
		}
	},
    components : {
		'page-title' : PageTitle,
		ValidationObserver,
		ValidationProvider
	},
	methods: {
		sendMessage() {
			console.log(this.contact);
		}
	}
}
</script>