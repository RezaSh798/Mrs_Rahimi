<template>
<section>
    <CategoriesTree :categories="categories" />
</section>
</template>

<script>
import CategoriesTree from './categories tree/CategoriesTree.vue'
import { mapActions } from 'vuex'

export default {
    name: 'Categories',
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: 'دسته 1',
                    children: [
                        {
                            id: 1.1,
                            name: 'دسته 1.1',
                            children: []
                        },
                        {
                            id: 1.2,
                            name: 'دسته 1.2',
                            children: [
                                {
                                    id: 1.21,
                                    name: 'دسته 1.2.1',
                                    children: [
                                        {
                                            id: 1.211,
                                            name: 'دسته 1.2.1.1',
                                            children: []
                                        },
                                        {
                                            id: 1.212,
                                            name: 'دسته 1.2.1.2',
                                            children: []
                                        },
                                        {
                                            id: 1.213,
                                            name: 'دسته 1.2.1.3',
                                            children: []
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            id: 1.3,
                            name: 'دسته 1.3',
                            children: [
                                {
                                    id: 1.31,
                                    name: 'دسته 1.3.1',
                                    children: []
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'دسته 2',
                    children: []
                    }
            ],
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
    components: { CategoriesTree },
    methods: {
        ...mapActions(['createCategory']),
        validate () {
            this.$refs.form.validate()
        },
        onSubmit() {
            if( this.valid ) this.createCategory(this.category);
        }
    }
}
</script>