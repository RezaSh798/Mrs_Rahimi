<template>
<section>
    <v-form v-model="valid" lazy-validation @submit="onSubmit()" ref="form">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="category.name"
                        :rules="required"
                        :counter="10"
                        label="نام دسته بندی"
                        required
                    >
                    </v-text-field>
                </v-col>   

                <v-col cols="12" md="6" style="display:flex;align-items:center;justify-content:center;">
                    <v-btn
                        type="submit"
                        color="#ef394e"   
                        width="100px"
                        @click="validate"      
                    >
                        ذخیره
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>

    <v-col cols="12" class="text-center">
        <h4>دسته بنده ها</h4>
    </v-col>

    <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :page.sync="page"
    :items-per-page="itemsPerPage"
    hide-default-footer
    class="elevation-1"
    @page-count="pageCount = $event"
    show-select
    item-key="id"
    ></v-data-table>
    <v-pagination id="pageinate" v-model="page" :length="pageCount" color="amber darken-4"></v-pagination>
</section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            valid: false,
            category: {
                name : ''
            },
            // Rules
            required: [
                v => !!v || 'این فیلد باید پر شود!',
                v => v.length < 10 || '10 کاراکتر مجاز است!'
            ],
            // Table Data
            headers: [
                {
                    text: 'کد',
                    align: 'start',
                    sortable: false,
                    value: 'code',
                },
                { text: 'نام محصول', value: 'name' },
                { text: 'قیمت', value: 'price' },
                { text: 'موجودی', value: 'Inventory' },
                { text: 'برند', value: 'brand' },
            ],
            desserts: [
                {
                    id: 1,
                    code: '123123',
                    name: 'هود سارینا',
                    price: 2000000,
                    Inventory: 24,
                    brand: 'ایلیااستیل',
                },
                {
                    id: 2,
                    code: '123123',
                    name: 'هود کارینا',
                    price: 2880000,
                    Inventory: 53,
                    brand: 'ایلیااستیل',
                },
                {
                    id: 3,
                    code: '123123',
                    name: 'هود سارینا',
                    price: 2000000,
                    Inventory: 24,
                    brand: 'ایلیااستیل',
                },
                {
                    id: 4,
                    code: '123123',
                    name: 'هود سارینا',
                    price: 2000000,
                    Inventory: 24,
                    brand: 'ایلیااستیل',
                },
                {
                    id: 5,
                    code: '123123',
                    name: 'هود سارینا',
                    price: 2000000,
                    Inventory: 24,
                    brand: 'ایلیااستیل',
                },
                {
                    id: 6,
                    code: '123123',
                    name: 'هود کارینا',
                    price: 2880000,
                    Inventory: 53,
                    brand: 'ایلیااستیل',
                },
                {
                    id: 7,
                    code: '123123',
                    name: 'هود کارینا',
                    price: 2880000,
                    Inventory: 53,
                    brand: 'ایلیااستیل',
                },
                {
                    id: 8,
                    code: '123123',
                    name: 'هود سارینا',
                    price: 2000000,
                    Inventory: 24,
                    brand: 'ایلیااستیل',
                },
                {
                    id: 9,
                    code: '123123',
                    name: 'هود سارینا',
                    price: 2000000,
                    Inventory: 24,
                    brand: 'ایلیااستیل',
                },
                {
                    id: 10,
                    code: '123123',
                    name: 'هود کارینا',
                    price: 2880000,
                    Inventory: 53,
                    brand: 'ایلیااستیل',
                },
                {
                    id: 11,
                    code: '123123',
                    name: 'هود سارینا',
                    price: 2000000,
                    Inventory: 24,
                    brand: 'ایلیااستیل',
                },
                {
                    id: 12,
                    code: '123123',
                    name: 'هود سارینا',
                    price: 2000000,
                    Inventory: 24,
                    brand: 'ایلیااستیل',
                },
                {
                    id: 13,
                    code: '123123',
                    name: 'هود سارینا',
                    price: 2000000,
                    Inventory: 24,
                    brand: 'ایلیااستیل',
                },
            ],

            selected : [],
            singleSelect: false,

            page : 1,
            pageCount : 0,
            itemsPerPage : 5,
            }
    },
    computed: {
        ...mapActions(['createCategory']),
    },
    methods: {
        validate () {
            this.$refs.form.validate()
        },
        onSubmit() {
            this.createCategory(this.category);
        }
    }
}
</script>