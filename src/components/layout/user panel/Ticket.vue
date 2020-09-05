<template>
<div class="row" style="padding: 10px;">
    <div class="col-xs-12 col-sm-12 col-md-7 widget-contact pl-0 pr-0 p-none-xs p-none-sm" style="direction:rtl;">
        <ValidationObserver v-slot="{ invalid }">
            <form id="contact-form">
                <div class="col-md-6">
                    <ValidationProvider name="ایمیل" rules="required|email" v-slot="{ errors }">
                        <input type="email" class="form-control mb-30" v-model="user.email" id="email" placeholder="ایمیل : " />
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="col-md-6">
                    <ValidationProvider name="نام" rules="required" v-slot="{ errors }">
                        <input type="text" class="form-control mb-30" v-model="user.name" id="name" placeholder="نام : " />
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
                    <button type="submit" :disabled="invalid" @click="sendMessage()" id="submit-message" class="btn btn-primary btn-block">ارسال تیکت</button>
                </div>
            </form>
        </ValidationObserver>
    </div>

    <div class="col-xs-12 col-md-5">
        <div class="alert" style="direction: rtl;">
            <h6>ادمین</h6>
            <p>مادر جنده ی خوارکسه، صد دفه بهت گفتوم الکی تیکت نزن کله کیری، برو او کامنتای کوسکشی که زیر هر محصول گوه هسته بخوان
                اگه جواب سوالای معلولیتیته نگرفتی بعد تیکت بزن جنده!
            </p>
        </div>
        <hr />
        <div class="alert" style="direction: rtl;">
            <h6>ادمین</h6>
            <p>مادر جنده ی خوارکسه، صد دفه بهت گفتوم الکی تیکت نزن کله کیری، برو او کامنتای کوسکشی که زیر هر محصول گوه هسته بخوان
                اگه جواب سوالای معلولیتیته نگرفتی بعد تیکت بزن جنده!
            </p>
        </div>
        <hr />
        <div class="alert" style="direction: rtl;">
            <h6>ادمین</h6>
            <p>مادر جنده ی خوارکسه، صد دفه بهت گفتوم الکی تیکت نزن کله کیری، برو او کامنتای کوسکشی که زیر هر محصول گوه هسته بخوان
                اگه جواب سوالای معلولیتیته نگرفتی بعد تیکت بزن جنده!
            </p>
        </div>
    </div>
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
            user: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    components: {
        ValidationObserver,
        ValidationProvider
    }
}
</script>

<style scoped>
    .alert {
        border: 1px solid #FF3D00;
        border-radius: 5px;
        background-image:linear-gradient(to left bottom,#F50057, #FF3D00);
    }
    p {
        color: black;
    }
</style>