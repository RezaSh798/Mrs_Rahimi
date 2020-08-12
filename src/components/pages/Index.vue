<template>
    <section>
        <my-slider></my-slider>
        <my-new-items></my-new-items>
        <my-brands></my-brands>
        <my-offers></my-offers>
    </section>
</template>

<script>
// import components
import Slider from '../layout/index/Slider.vue'
import NewItems from '../layout/index/NewItems.vue'
import Brands from '../layout/Brands.vue'
import Offers from '../layout/index/Offers.vue'

export default {
    components : {
        'my-slider' : Slider,
        'my-new-items' : NewItems,
        'my-brands' : Brands,
        'my-offers' : Offers,
    },
}
</script>