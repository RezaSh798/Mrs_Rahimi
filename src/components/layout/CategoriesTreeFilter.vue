<template>
<li>
    <a @click="onClick(category.title)">
        <i :class="show ? 'fa fa-angle-double-down' : 'fa fa-angle-double-left'"></i>
        {{ category.title }}</a>
    <ul
    v-if="category.hasOwnProperty('children') && category.children.data.length > 0"
    class="list-unstyled"
    :style="{'margin-right': `${depth * 10}px`}">
        <CategoriesTreeFilter
        v-for="child in category.children.data"
        :key="child.id"
        v-show="show"
        :category="child"
        :depth="depth + 1" />
    </ul>
</li>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'CategoriesTreeFilter',
    props: {
        category: Object,
        depth: {
            type: Number,
            default: 1
        },
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        ...mapMutations(['categoryFilter']),
        onClick(categoryTitle) {
            this.show = !this.show;
            this.categoryFilter(categoryTitle);
        }
    }
}
</script>