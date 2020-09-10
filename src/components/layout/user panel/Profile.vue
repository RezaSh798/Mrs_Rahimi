<template>
<div style="direction:rtl !important;">
    <ValidationObserver>
        <form class="mb-0">
            <div class="row">
                <div class="col-xl-12 col-md-6 just">
                    <div>
                        <div class="form-group">
                        <input
                        type="file"
                        ref="file"
                        style="display:none;"
                        accept="jpeg, jpg, png, gif"
                        @change="avatarSelected">

                        <button
                        id="avatar"
                        :style="(userEdit.avatar != null) ? `background-image: url(${userEdit.avatar})` : userEdit.avatar = null"
                        @click="$refs.file.click()">
                        </button>
                        </div>

                        <div class="form-group posi">
                            <ValidationProvider name="نام" rules="max:10|alpha_spaces" v-slot="{ errors }">
                                <label for="#name">نام</label>
                                <input type="text" v-model="userEdit.name" id="name" placeholder="نام">
                                <span class="mySpan">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group posi">
                            <ValidationProvider name="نام خانوادگی" rules="max:20|alpha_spaces" v-slot="{ errors }">
                                <label for="#family">نام خانوادگی</label>
                                <input type="text" v-model="userEdit.family" id="family" placeholder="نام خانوادگی">
                                <span class="mySpan">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>

                <div id="info" class="col-xl-12 col-md-6"  style="padding-top:30px;">
                    <div>
                        <div class="form-group posi myFloat">
                            <ValidationProvider name="ایمیل" rules="required|email" v-slot="{ errors }">
                                <label for="#email">ایمیل</label>
                                <input type="text" v-model="userEdit.email" id="email" placeholder="ایمیل">
                                <span class="mySpan">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group posi myFloat">
                            <ValidationProvider name="شماره موبایل" rules="max:11|alpha_num" v-slot="{ errors }">
                                <label for="#phone_number">شماره همراه</label>
                                <input type="text" v-model="userEdit.phone_number" id="phone_number" placeholder="شماره موبایل">
                                <span class="mySpan">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group posi" style="clear:both;">
                            <ValidationProvider name="آدرس" rules="max:150" v-slot="{ errors }">
                                <label for="#textArea">آدرس</label>
                                <textarea v-model="userEdit.address" placeholder="آدرس" id="textArea" cols="30" rows="10"></textarea>
                                <span class="mySpan">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block mt-30" @click="onSubmit()">ویرایش</button>
                    </div>
                </div>
            </div>
        </form>
    </ValidationObserver>
</div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate'
import fa from 'vee-validate/dist/locale/fa.json'
import * as rules from 'vee-validate/dist/rules'
import { mapActions, mapState } from 'vuex';
// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('fa', fa);

export default {
    data() {
        return {
            userEdit: {}
        }
    },
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    computed: {
        ...mapActions(['getUser']),
        ...mapState(['user']),
    },
    methods: {
        ...mapActions(['updateUser']),
        avatarSelected( event ) {
            this.userEdit.avatar = event.target.files[0];
        },
        onSubmit() {
            this.updateUser(this.userEdit);
        }
    },
    created() {
        this.getUser;
        setTimeout(() => {
            this.userEdit = this.user;
        }, 1000);
    },
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
        width: 200px;
        color: #b2b2b2;
        font-family: 'Ubuntu', sans-serif;
        font-size: 13px;
        font-weight: 400;
        padding: 0 20px;
        margin-bottom: 20px;
    }
    .just {
        display: flex;
        justify-content: center;
    }
    .myFloat {
        float: right;
        margin-left: 50px;
    }
    textarea {
        border: 1px solid #e5e5e5;
        width: 450px;
        padding: 15px;
        height: 150px;
    }
    button {
        width: 450px;
    }
    .mySpan {
        display: block;
        width: 200px;
    }
    .posi {
        position: relative;
    }
    label {
        font-size: 12px;;
        position: absolute;
        top: -11px;
        right: 12px;
        background: white;
        padding-right: 3px;
        padding-left: 3px;
    }
    @media only screen and (max-width: 767px) and (min-width: 320px) {
        #info {
            display: flex;
            justify-content: center;
            padding-top: 0px !important;
        }
        #info div div {
            float: none;
            margin-left: 0px;
        }
        textarea {
            width: 200px;
        }
        button {
            width: 200px;
        }
    }
</style>