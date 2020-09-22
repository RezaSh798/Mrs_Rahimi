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
	<section id="signIn" class="sign" v-if="changeLocation() == 'login'" style="margin-bottom: -700px;">
		<div class="container">
			<div class="row">
				<div class="col-xs-12  col-sm-12  col-md-12">
					<v-app>
					<v-row justify="center">
						<v-dialog v-model="dialog" persistent max-width="350px">
						<template v-slot:activator="{ on, attrs }">
							<v-btn
							color="#ff3d00"
							class="btn btn-primary text-center"
							dark
							v-bind="attrs"
							v-on="on"
							>
							ورود
							</v-btn>
						</template>
						<v-card>
							<v-card-title>
							<span>ورود به حساب</span>
							</v-card-title>
							<v-card-text>
							<v-container>
								<v-row>
								<v-col cols="12">
									<v-text-field :rules="emailRules" v-model="user.email" label="ایمیل"></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-text-field :rules="passwordRules" v-model="user.password" label="گذرواژه" type="password"></v-text-field>
								</v-col>
								</v-row>
							</v-container>
							</v-card-text>
							<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="blue darken-1" text @click="dialog = false">بستن</v-btn>
							<v-btn color="blue darken-1" text @click="onLogin()">ورود</v-btn>
							</v-card-actions>
						</v-card>
						</v-dialog>
					</v-row>
				</v-app>
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
	<section id="register" class="register" v-if="changeLocation() == 'register'" style="margin-bottom: -700px;">
		<v-app>
			<v-row justify="center">
				<v-dialog v-model="dialog" persistent max-width="350px">
				<template v-slot:activator="{ on, attrs }">
					<v-btn
					color="#ff3d00"
					class="btn btn-primary text-center"
					dark
					v-bind="attrs"
					v-on="on"
					>
					عضویت
					</v-btn>
				</template>
				<v-card>
					<v-card-title>
					<span>فرم ثبت نام</span>
					</v-card-title>
					<v-card-text>
					<v-container>
						<v-row>
						<v-col cols="12">
							<v-text-field :rules="emailRules" v-model="user.email" label="ایمیل"></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field :rules="passwordRules" v-model="user.password" label="گذرواژه" type="password"></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field :rules="confirmRules" v-model="user.password_confirmation" label="تکرار گذرواژه" type="password"></v-text-field>
						</v-col>
						</v-row>
					</v-container>
					</v-card-text>
					<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="dialog = false">بستن</v-btn>
					<v-btn color="blue darken-1" text @click="onRegister">ذخیره</v-btn>
					</v-card-actions>
				</v-card>
				</v-dialog>
			</v-row>
		</v-app>
	</section>
	<!-- #register end -->
	
	<div class="clearfix mb-150"></div>
</section>
</template>

<script>
// import $ from 'jquery/dist/jquery'
// import components
import PageTitle from '../layout/PageTitle.vue'
import { mapState, mapActions } from 'vuex'
export default {
	data() {
		return {
			user : {
				email : '',
				password: null,
				password_confirmation : null,
			},
			dialog: false,
			// Rules
			emailRules: [
			v => !!v || 'ایمیل باید پر شود !',
			v => /.+@.+/.test(v) || 'ایمیل باید درست باشد !',
			],
			passwordRules: [
			v => !!v || 'گذرواژه باید پر شود !',
			v => v.length > 6 || 'حداقل 6 کاراکتر وارد کنید !',
			],
			confirmRules: [
			v => v == this.user.password || 'گذرواژه با تائیدیه اش مطابقت ندارد !'
			]
		}
	},
    components : {
		'page-title' : PageTitle,
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
			this.dialog = false;
		},
		onLogin() {
			this.login(this.user);
			this.dialog = false;
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