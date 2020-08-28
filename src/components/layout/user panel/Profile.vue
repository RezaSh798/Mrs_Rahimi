<template>
<div style="direction:rtl !important;">
    <ValidationObserver v-slot="{ invalid }">
        <form class="mb-0">
            <div class="form-group">
                    <input
                    type="file"
                    ref="file"
                    style="display:none;"
                    @change="avatarSelected">
                <ValidationProvider name="آواتار">
                    <button id="avatar" @click="$refs.file.click()"></button>
                    <span>
                        <!-- {{ errors[0] }} -->
                    </span>
                </ValidationProvider>
            </div>
            <div class="form-group">
                <ValidationProvider name="نام کاربری" rules="required|max:10" v-slot="{ errors }">
                    <input type="text" v-model="user.name" class="form-control" id="username" placeholder="نام کاربری">
                    <span>{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="form-group">
                <ValidationProvider name="ایمیل" rules="required|email" v-slot="{ errors }">
                    <input type="text" v-model="user.email" class="form-control" id="email" placeholder="ایمیل">
                    <span>{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-30" :disabled="invalid" @click="onSubmit()">ویرایش</button>
        </form>
    </ValidationObserver>
</div>
</template>

<script>
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
            user : {
                avatar: null,
				name: '',
				pass: null,
				confirmPass : null,
				email : '',
			}
        }
    },
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    methods: {
        avatarSelected( event ) {
            this.avatar = event.target.files[0];
        },
        onSubmit() {
            alert('ok');
        }
    }
}
</script>

<style scoped>
    #avatar {
        display: block;
        width: 200px !important;
        height: 200px !important;
        margin-top: 10px;
        border: 1px solid #e5e5e5;
        border-radius: 50%;
        background-image: url(../../../assets/uploadImage.png);
        background-size: cover;
    }
    input {
        height: 35px;
        line-height: 33px;
        border-radius: 2px;
        border: 1px solid #e5e5e5;
        width: 100%;
        color: #b2b2b2;
        font-family: 'Ubuntu', sans-serif;
        font-size: 13px;
        font-weight: 400;
        padding: 0 20px;
        margin-bottom: 20px;
    }
</style>