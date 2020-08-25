<template>
<div>
    <div
    :style="{'margin-right': depth * 30 + 'px'}"
    class="category">
        <div class="display">
            <input
                type="text"
                v-model="catName"
                :placeholder="category.name"
                v-if="showEditInput == category.id"
                @change="onUpdate(category.id)" />
            <div class="display" @click="show = !show" v-else>
                <i
                    v-if="!show"
                    style="fontSize:15px;"
                    :class="(category.children.length > 0) ? 'fas fa-angle-double-left' : 'fas fa-circle-notch'">
                </i>
                <i
                    v-else
                    style="fontSize:15px;"
                    :class="(category.children.length > 0) ? 'fas fa-angle-double-down' : 'fas fa-circle-notch'">
                </i>
                {{ category.name }}
            </div>
        </div>

        <div class="display" style="padding:2px;">
            <a @click="remove(category.id)">
                <i class="far fa-trash-alt" style="color:#ef394e;"></i>
            </a>
            <a @click="edit(category.id)">
                <i class="far fa-edit" style="color:#66bb6a;"></i>
            </a>
            <a @click="add(category.id)">
                <i class="far fa-plus-square"></i>
            </a>
        </div>
        
        <CategoriesTree
            v-for="child in category.children"
            :key="child.id"
            :category="child"
            v-show="show"
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
        category: Object,
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
        ...mapActions([
            'updateCategory',
            'deleteCategory',
        ]),
        remove(catId) {
            if(confirm('از حذف کردن این دسته مطمئن هستید ؟')) {
                this.deleteCategory(catId);
            }
        },
        edit(catId) {
            if(this.showEditInput == catId) {
                this.showEditInput = -1;
            } else {
                this.showEditInput = catId;
            }
        },
        onUpdate(catId) {
            this.showEditInput = -1;
            this.updateCategory({
                id: catId,
                name: this.catName,
            });
            this.catName = '';
        }
    },
}
</script>

<style scoped>
    .category {
        font-size: 20px;
    }
    a {
        margin-right: 10px;
    }
    a:last-child {
        margin-left: 2px;
    }
    .display {
        display:inline;
    }
    input {
        background: #f5f5f5;
    }
    a:hover i {
        transform: scale(1.1);
        transition: 300ms;
    }
</style>