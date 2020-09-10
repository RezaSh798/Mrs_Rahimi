<template>
<section>
    <page-title icon="">
        <template slot="title">داشبورد</template>
        <template slot="location">داشبورد</template>
    </page-title>
    <div id="my-panel" class="container-fluid">
        <v-app>
            <v-row justify="center">
                <v-menu
                    bottom
                    offset-y
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="grey darken-1"
                        width="150px"
                        class="ma-2"
                        v-bind="attrs"
                        v-on="on"
                    >فهرست</v-btn>
                    </template>
                    <v-list>
                        <v-list-item style="text-align:center;">
                            <v-list-item-title>
                                <router-link style="color:gray;" to="/panel/create-product">ثبت محصول</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item style="text-align:center;">
                            <v-list-item-title>
                                <router-link style="color:gray;" to="/panel/products">محصولات</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item style="text-align:center;">
                            <v-list-item-title>
                                <router-link style="color:gray;" to="/panel/users">کاربران</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item style="text-align:center;">
                            <v-list-item-title>
                                <router-link style="color:gray;" to="/panel/messages">پیام ها</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item style="text-align:center;">
                            <v-list-item-title>
                                <router-link style="color:gray;" to="/panel/categories">دسته بندی</router-link>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-row>
        
            <div class="row">
                <main id="my-main" role="main" class="col-12 ml-sm-auto px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <router-view></router-view>
                    </div>
                </main>
            </div>
        </v-app>
    </div>
</section>
</template>

<script>
import PageTitle from '../layout/PageTitle.vue'

export default {
    data () {
      return {
        dialog: false,
      }
    },
    components : {
        'page-title' : PageTitle,
    },
    created() {
        this.$vuetify.rtl = true;
    }
}
</script>

<style>
    #sidebarMenu {
        display: block !important;
    }
    .my-panel-nav {
        direction: rtl !important;
    }
    .my-panel-nav div ul li a {
        color: gray;
    }
    #my-main {
        display: flex;
        justify-content: center;
    }
</style>