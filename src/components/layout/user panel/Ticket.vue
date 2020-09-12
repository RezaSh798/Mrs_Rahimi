<template>
<div class="row" style="padding: 10px;">
    <div class="col-xs-12 col-sm-12 col-md-7 widget-contact pl-0 pr-0 p-none-xs p-none-sm" style="direction:rtl;">
        <ValidationObserver v-slot="{ invalid }">
            <form id="contact-form">
                <div class="col-md-6">
                    <ValidationProvider name="ایمیل" rules="required|email" v-slot="{ errors }">
                        <input type="email" class="form-control mb-30" v-model="ticket.email" id="email" placeholder="ایمیل : " />
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="col-md-6">
                    <ValidationProvider name="نام" rules="required|alpha" v-slot="{ errors }">
                        <input type="text" class="form-control mb-30" v-model="ticket.name" id="name" placeholder="نام : " />
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="col-md-6">
                    <ValidationProvider name="موضوع" rules="required|alpha" v-slot="{ errors }">
                        <input type="text" class="form-control mb-30" v-model="ticket.title" id="name" placeholder="موضوع : " />
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="col-md-6">
                    <ValidationProvider name="شماره همراه" rules="required|alpha_num" v-slot="{ errors }">
                        <input type="text" class="form-control mb-30" v-model="ticket.phone_number" id="name" placeholder="شماره همراه : " />
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="col-md-12">
                    <ValidationProvider name="متن" rules="required|min:50|max:300" v-slot="{ errors }">
                        <textarea class="form-control mb-30" id="message" v-model="ticket.body" rows="4" placeholder="پیام شما ..."></textarea>
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
            <h6>شما<span style="float: left;">{{ oldTicket.time }}</span></h6>
            <p>{{ oldTicket.body }}</p>
        </div>
        <hr />
        <div class="alert" style="direction: rtl;">
            <h6>ادمین</h6>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
        </div>
    </div>
</div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate'
import fa from 'vee-validate/dist/locale/fa.json'
import * as rules from 'vee-validate/dist/rules'
import { mapActions } from 'vuex';
// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('fa', fa);

export default {
    data() {
        return {
            ticket: {
                title: '',
                email: '',
                body: '',
                phone_number: '',
                name: ''
            },
            oldTicket: 'هنوز تیکتی ارسال نکرده اید :)',
        }
    },
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    methods: {
        ...mapActions(['sendTicket']),
        sendMessage() {
            this.sendTicket(this.ticket);
        }
    },
    created() {
        if(localStorage.getItem('ticket')) {
            this.oldTicket = JSON.parse(localStorage.getItem('ticket'));
        }
    },
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
        word-break: break-all
    }
</style>