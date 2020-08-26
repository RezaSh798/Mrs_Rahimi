<template>
<section>
    <page-title :icon="'far fa-user'">
        <template slot="title">پنل کاربری</template>
        <template slot="location">پنل کاربری</template>
    </page-title>
</section>
</template>

<script>
import PageTitle from '../layout/PageTitle.vue'

export default {
    components: { PageTitle }    
}
</script>