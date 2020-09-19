<template>
<section>
    <page-title icon="fas fa-key" v-if="changeLocation() == 'login'">
        <template slot="title">ورود به حساب کاربری</template>
        <template slot="location">ورود</template>
    </page-title>
	<page-title icon="fas fa-key" v-if="changeLocation() == 'register'">
        <template slot="title">ایجاد حساب کاربری</template>
        <template slot="location">عضویت</template>
    </page-title>

    <div class="clearfix mb-150"></div>
	
	<!-- Signin#1 Section
    ============================================= -->
	<div v-if="changeLocation() == 'login'">
		<div class="container">
			<div class="row my-i-row">
				<div class="my-i-tag-parent">
					<i class="fas fa-user-check"></i>
				</div>
			</div>
		</div>
	</div>
	<section id="signIn" class="sign" v-if="changeLocation() == 'login'">
		<div class="container">
			<div class="row">
				<div class="col-xs-12  col-sm-12  col-md-12">
					<div class="text-center">
						<button type="button" class="btn btn-primary text-center" data-toggle="modal" data-target=".login-modal-lg">ورود به حساب</button>
					</div>
					<div id="loginDialog" class="modal model-sign fade login-modal-lg" tabindex="-1" role="dialog">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-body" style="direction:rtl;">
									<p>خوش برگشتید</p>
									<h6>ورود به سیستم</h6>
									<div class="sign-form">
										<ValidationObserver v-slot="{ invalid }">
											<form class="mb-0">
												<div class="form-group">
													<ValidationProvider name="ایمیل" rules="required|email" v-slot="{ errors }">
														<input type="text" v-model="user.email" class="form-control" id="email" placeholder="ایمیل">
														<span>{{ errors[0] }}</span>
													</ValidationProvider>
												</div>
												<div class="form-group">
													<ValidationProvider name="گذرواژه" rules="required|min:8|max:11" v-slot="{ errors }">
														<input type="password" v-model="user.password" class="form-control" id="pwd" placeholder="گذرواژه">
														<span>{{ errors[0] }}</span>
													</ValidationProvider>
												</div>
												<!-- <div class="pull-left lost-pass">
													<a href="#">گذرواژه تان را فراموش کرده اید ؟</a>
												</div> -->
												<button type="submit" :disabled="invalid" class="btn btn-primary btn-block" @click="onLogin">ورود</button>
											</form>
										</ValidationObserver>
										<div class="form-links text-center">
											<router-link to="/user/register">ایجاد حساب کاربری</router-link>
										</div>
									</div>
								</div>
							</div>
							<!-- /.modal-content -->
						</div>
					</div>
				</div>
				<!-- .col-md-12 end -->
			</div>
			<!-- .row end -->
		</div>
		<!-- .container end -->
	</section>
	<!-- #signIn end -->

    <!-- Register Section
============================================= -->
	<div v-if="changeLocation() == 'register'">
		<div class="container">
			<div class="row my-i-row">
				<div class="my-i-tag-parent">
					<i class="fas fa-user-plus"></i>
				</div>
			</div>
		</div>
	</div>
	<section id="register" class="register" v-if="changeLocation() == 'register'">
		<div class="container">
			<div class="row">
				<div class="col-xs-12  col-sm-12  col-md-12">
					<div class="text-center">
						<button type="button" class="btn btn-primary text-center" data-toggle="modal" data-target=".login-modal-lg">ایجاد حساب</button>
					</div>
					<div id="registerDialog" class="modal model-sign fade login-modal-lg" tabindex="-1" role="dialog">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-body" style="direction:rtl;">
									<p>سلام</p>
									<h6>فرم ثبت نام</h6>
									<div class="register-form">
										<ValidationObserver v-slot="{ invalid }">
											<form class="mb-0">
												<div class="form-group">
													<ValidationProvider name="ایمیل" rules="required|email" v-slot="{ errors }">
														<input type="text" v-model="user.email" class="form-control" id="email" placeholder="ایمیل">
														<span>{{ errors[0] }}</span>
													</ValidationProvider>
												</div>
												<div class="form-group">
													<ValidationProvider name="گذرواژه" rules="required|min:8|max:11" v-slot="{ errors }" vid="confirmation">
														<input type="password" v-model="user.password_confirmation" class="form-control" placeholder="گذرواژه">
														<span>{{ errors[0] }}</span>
													</ValidationProvider>
												</div>
												<div class="form-group">
													<ValidationProvider name="تائید گذرواژه" rules="required|confirmed:confirmation" v-slot="{ errors }">
														<input type="password" v-model="user.password" class="form-control" placeholder="تائید گذرواژه">
														<span>{{ errors[0] }}</span>
													</ValidationProvider>
												</div>

												<button type="submit" :disabled="invalid" class="btn btn-primary btn-block mt-30" @click="onRegister">ایجاد حساب</button>
											</form>
										</ValidationObserver>
										<div class="form-links text-center">
											<router-link to="/user/login">حساب کاربری دارید ؟ وارد شوید</router-link>
										</div>
									</div>
								</div>
							</div>
							<!-- /.modal-content -->
						</div>
					</div>
				</div>
				<!-- .col-md-12 end -->
			</div>
			<!-- .row end -->
		</div>
		<!-- .container end -->
	</section>
	<!-- #register end -->
	
	<div class="clearfix mb-150"></div>
</section>
</template>

<script>
// import $ from 'jquery/dist/jquery'
// import components
import PageTitle from '../layout/PageTitle.vue'
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate'
import fa from 'vee-validate/dist/locale/fa.json'
import * as rules from 'vee-validate/dist/rules'
import { mapState, mapActions } from 'vuex'

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('fa', fa);

export default {
	data() {
		return {
			user : {
				email : '',
				password: null,
				password_confirmation : null,
			}
		}
	},
    components : {
		'page-title' : PageTitle,
		ValidationProvider,
		ValidationObserver
	},
	methods : {
		...mapActions(['register','login']),
		changeLocation() {
			if(this.$route.params.location == 'login') {
				return 'login';
			} else if(this.$route.params.location == 'register') {
				return 'register';
			}
		},
		onRegister() {		
			this.register(this.user);
			$("#registerDialog").modal('hide');
			this.$router.push({ name: 'home' });
		},
		onLogin() {
			this.login(this.user);
			$("#loginDialog").modal('hide');
			this.$router.push({ name: 'home' });
		}
	},
	computed: mapState(['isAuthenticated']),
	created() {
		if(this.isAuthenticated) {
			this.$router.push({ name: 'home' });
		}
	}
}
</script>

<style>
	.my-i-tag-parent i {
		font-size: 100px;
		color: gray;
	}
	.my-i-tag-parent {
		padding: 10px;
		border: 1px solid #e5e5e5;
		border-radius: 20px;
	}
	.my-i-row {
		display: flex;
		justify-content: center;
		margin-bottom: -50px;
	}
	button {
		color: white !important;
	}
</style>