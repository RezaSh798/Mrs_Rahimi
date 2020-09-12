<template>
<div>
  <LoadingOverlay />

    <div id="main" class="container">
        <div class="alert row"> <!-- for -->
            <div class="userInfo col-sm-12 col-lg-2">
                <div class="avatar">
                    <img src="" alt="آواتار کاربر">
                </div>
                <div class="name">
                    <h6>{{  }}</h6>
                </div>
            </div>
            <div class="userMessage col-sm-12 col-lg-9">
                <p>{{  }}</p>
            </div>
            <div class="actions col-sm-12 col-lg-1">
                <div class="delete">
                    <!-- font awesome -->
                </div>
                <div class="accept">
                    <!-- font awesom -->
                </div>
            </div>
        </div>
    </div>
    
    <v-pagination id="pageinate" v-model="page" :length="pageCount" color="#FF3D00"></v-pagination>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import LoadingOverlay from '../LoadingOverlay.vue'

export default {
    data() {
        return {
            page : 1,
            pageCount : 0,
            itemsPerPage : 5,
        }
    },
    components: {
      LoadingOverlay,
    },
    computed: {
        ...mapActions(['getComments'])
    },
    methods: {
    },
    created() {
        this.getComments;
    }
}
</script>

<style scoped>
    
</style>