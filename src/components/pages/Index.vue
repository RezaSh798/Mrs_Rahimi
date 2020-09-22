<template>
    <section style="padding:0px;">
        <v-app>
            <v-carousel
                cycle
                height="600"
                hide-delimiter-background
                show-arrows-on-hover
            >
                <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                >
                </v-carousel-item>
            </v-carousel>
        </v-app>
        <my-new-items></my-new-items>
    </section>
</template>

<script>
// import components
import NewItems from '../layout/index/NewItems.vue'

export default {
    data() {
        return {
            items: [
                {
                    src: './assets/images/sliders/1.jpg'
                },
                {
                    src: './assets/images/sliders/2.jpg'
                },
                {
                    src: './assets/images/sliders/3.jpg'
                }
            ],
        }
    },
    components : {
        'my-new-items' : NewItems,
    },
    created() {
        this.$vuetify.rtl = false;
    }
}
</script>