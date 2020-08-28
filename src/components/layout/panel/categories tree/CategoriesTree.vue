<template>
<div>
    <div
    :style="{'margin-right': depth * 30 + 'px'}"
    class="category">
        <div class="display">
            <input
                type="text"
                v-model="catName"
                :placeholder="category.title"
                v-if="showEditInput == category.id"
                @change="onUpdate(category.id)" />
            <div class="display" @click="show = !show" v-else>
                <i
                    v-if="!show"
                    style="fontSize:15px;"
                    :class="(category.hasOwnProperty('children') && category.children.data.length > 0) ? 'fas fa-angle-double-left' : 'fas fa-circle-notch'">
                </i>
                <i
                    v-else
                    style="fontSize:15px;"
                    :class="(category.hasOwnProperty('children') && category.children.data.length > 0) ? 'fas fa-angle-double-down' : 'fas fa-circle-notch'">
                </i>
                {{ category.title }}
            </div>
        </div>

        <div class="display" style="padding:2px;">
            <a @click="onRemove(category.id)">
                <i class="far fa-trash-alt" style="color:#ef394e;"></i>
            </a>
            <a @click="edit(category.id)">
                <i class="far fa-edit" style="color:#66bb6a;"></i>
            </a>
            <a @click="showCreateInput = !showCreateInput">
                <i class="far fa-plus-square"></i>
            </a>
            <input
                type="text"
                v-model="newCategory"
                placeholder="نام دسته"
                v-if="showCreateInput"
                @change="onCreate(category.id)" 
                style="margin-right:5px" />
        </div>
        
        <div v-if="category.hasOwnProperty('children')">
            <CategoriesTree
                v-for="child in category.children.data"
                :key="child.id"
                :category="child"
                v-show="show"
                :depth="depth + 1"
            />
        </div>
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
            showCreateInput: false,
            catName: '',
            newCategory: '',
        }
    },
    methods: {
        ...mapActions([
            'createCategory',
            'updateCategory',
            'deleteCategory',
        ]),
        edit(catId) {
            if(this.showEditInput == catId) {
                this.showEditInput = -1;
            } else {
                this.showEditInput = catId;
            }
        },
        onReloadPage() {
            setTimeout(() => {
                this.$router.go();
            }, 2000);
        },
        onRemove(catId) {
            if(confirm('از حذف کردن این دسته مطمئن هستید ؟')) {
                this.deleteCategory(catId);
                this.onReloadPage();
            }
        },
        onUpdate(catId) {
            this.showEditInput = -1;
            this.updateCategory({
                id: catId,
                name: this.catName,
            });
            this.catName = '';
            this.onReloadPage();
        },
        onCreate(parentId) {
            this.showCreateInput = false;
            this.createCategory({
                category_id: parentId,
                title: this.newCategory,
            });
            this.newCategory = '';
            this.onReloadPage();
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
        border-radius: 5px;
    }
    a:hover i {
        transform: scale(1.1);
        transition: 300ms;
    }
</style>