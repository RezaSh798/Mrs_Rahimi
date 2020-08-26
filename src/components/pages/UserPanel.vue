<template>
<section>
    <page-title :icon="'far fa-user'">
        <template slot="title">پنل کاربری</template>
        <template slot="location">پنل کاربری</template>
    </page-title>

    <nav>
        <ul>
            <li><router-link to="/ticket">تیکت</router-link></li>
            <li><router-link to="/profile">پروفایل</router-link></li>
        </ul>
    </nav>

    <div>
        <router-view></router-view>
    </div>
</section>
</template>

<script>
import PageTitle from '../layout/PageTitle.vue'

export default {
    components: { PageTitle }    
}
</script>