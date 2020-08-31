<template>
    <section>
        <my-slider></my-slider>
        <my-new-items></my-new-items>
    </section>
</template>

<script>
// import components
import Slider from '../layout/index/Slider.vue'
import NewItems from '../layout/index/NewItems.vue'

export default {
    components : {
        'my-slider' : Slider,
        'my-new-items' : NewItems,
    },
}
</script>