<template>
<div style="direction:rtl;">
    <div
    v-for="category in categories"
    :key="category.id"
    :style="{'margin-right': depth * 30 + 'px'}"
    class="category">
        <div class="display">
            <input
            type="text"
            v-model="catName"
            :placeholder="category.name"
            v-if="showEditInput == category.id"
            @change="onChange()" />
            <div class="display" @click="show = !show" v-else>
                {{ category.name }}
            </div>
        </div>

        <div class="display">
            <a @click="remove(category.id)">
                <i class="far fa-trash-alt" style="color:#ef394e;"></i>
            </a>
            <a @click="edit(category.id)">
                <i class="far fa-edit" style="color:#66bb6a;"></i>
            </a>
        </div>
        
        <CategoriesTree
            v-if="show"
            :categories="category.children"
            :depth="depth + 1"
        />
    </div>
</div>
</template>

<script> 
import { mapActions } from 'vuex'

export default {
    name: 'CategoriesTree',
    props: {
        categories: Array,
        depth: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            show: false,
            showEditInput: undefined,
            catName: ''
        }
    },
    methods: {
        ...mapActions(['createCategory']),
        remove(catId) {
            console.log(catId)
        },
        edit(catId) {
            console.log(catId)
            this.showEditInput = catId;
        },
        onChange() {
            this.showEditInput = -1;
            this.createCategory(this.catName);
        }
    }
}
</script>

<style scoped>
    .category {
        font-size: 20px;
    }
    a {
        margin-right: 10px;
    }
    .display {
        display:inline;
    }
    input {
        background: #f5f5f5;
    }
</style>