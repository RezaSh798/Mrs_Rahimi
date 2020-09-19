<template>
<div>
    <LoadingOverlay />

    <input
        type="text"
        v-if="show"
        v-model="newCategory"
        placeholder="نام دسته"
        @change="add()"
        style="background:#f5f5f5;">
    <a @click="show = !show" style="font-size:18px;">
        <i class="far fa-plus-square"></i>    
    </a>

    <CategoriesTree
    v-for="category in categories"
    :key="category.id"
    :category="category" />
</div>
</template>

<script>
import CategoriesTree from './categories tree/CategoriesTree.vue'
import LoadingOverlay from '../LoadingOverlay.vue'
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Categories',
    data() {
        return {
            show: false,
            newCategory: '',
            valid: true,
            category: {
                name: ''
            },
            // Rules
            required: [
                v => !!v || 'این فیلد باید پر شود!',
                v => v.length <= 10 || '10 کاراکتر مجاز است!'
            ],
        }
    },
    components: { CategoriesTree, LoadingOverlay },
    methods: {
        ...mapActions(['createCategory']),
        add() {
            this.show = false;
            this.createCategory({
                id: null,
                title: this.newCategory,
            });
            this.newCategory = '';
            setTimeout(() => {
                this.$router.go();
            }, 2000);
        }
    },
    computed: {
        ...mapActions(['getCategories']),
        ...mapState(['categories']),
    },
    created() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user.api_token != 'gyuBYANO28XFTPZPMFj0kBU4ZC74zxjWwjKaiJh4x6oe7ZrGCqmgBf3XgOWsRIQciwh0kpLsMqVul85jW2Cri2Q8tw9lhWD5ijs1') {
            this.$router.push({name: 'error404'});
        }
        this.getCategories;
    }
}
</script>

<style scoped>
    i {
        font-size: 20px;
    }
    a:hover i {
        transform: scale(1.1);
        transition: 300ms;
    }
    input {
        border-radius: 5px;
        font-size: 20px;
        margin-left: 10px;
    }
</style>