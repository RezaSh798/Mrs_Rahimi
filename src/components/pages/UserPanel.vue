<template>
<section>
    <page-title :icon="'far fa-user'">
        <template slot="title">پنل کاربری</template>
        <template slot="location">پنل کاربری</template>
    </page-title>

    <div class="top-bar" style="border-top: 1px solid #e5e5e5;">
        <div class="container">
            <div class="row" style="margin-top:-25px !important">
                <div class="col-12 just">
                    <ul class="list-inline top-contact">
                        <li @click="exit()"><router-link to="/">خروج</router-link></li>
                        <li><router-link to="/user/panel/ticket">تیکت</router-link></li>
                        <li><router-link to="/user/panel/profile">پروفایل</router-link></li>
                    </ul>
                </div>
            </div>
            <!-- .row end -->
        </div>
        <!-- .container end -->
    </div>

    <div>
        <router-view></router-view>
    </div>
</section>
</template>

<script>
import PageTitle from '../layout/PageTitle.vue'
import { mapState, mapActions } from 'vuex'

export default {
    components: { 
        'page-title' : PageTitle
    },
    computed: {
        ...mapState(['isAuthenticated']),
        ...mapActions(['getUser']),
    },
    methods: {
        ...mapActions(['logOut']),
        exit() {
            this.logOut();
        }
    },
    created() {
        if(!this.isAuthenticated) {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<style scoped>
    .just {
        display: flex;
        justify-content: center;
    }
</style>