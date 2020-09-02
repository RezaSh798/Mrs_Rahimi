<template>
<div>
  <LoadingOverlay />

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
    <v-pagination id="pageinate" v-model="page" :length="pageCount" color="#FF3D00"></v-pagination>
</div>
</template>

<script>
import LoadingOverlay from '../LoadingOverlay.vue'

export default {
    data() {
        return {
            headers: [
                {
                    text: 'ردیف',
                    align: 'start',
                    sortable: false,
                    value: 'row',
                },
                { text: 'نام کاربر', value: 'userName' },
                { text: 'پیام', value: 'message' },
                { text: 'تاریخ', value: 'date' },
            ],
            desserts: [
                {
                    id: 1,
                    row: '123123',
                    userName: 'هود سارینا',
                    price: 2000000,
                    date: 24,
                    message: 'ایلیااستیل',
                },
                {
                    id: 2,
                    row: '123123',
                    userName: 'هود کارینا',
                    price: 2880000,
                    date: 53,
                    message: 'ایلیااستیل',
                },
                {
                    id: 3,
                    row: '123123',
                    userName: 'هود سارینا',
                    price: 2000000,
                    date: 24,
                    message: 'ایلیااستیل',
                },
                {
                    id: 4,
                    row: '123123',
                    userName: 'هود سارینا',
                    price: 2000000,
                    date: 24,
                    message: 'ایلیااستیل',
                },
                {
                    id: 5,
                    row: '123123',
                    userName: 'هود سارینا',
                    price: 2000000,
                    date: 24,
                    message: 'ایلیااستیل',
                },
                {
                    id: 6,
                    row: '123123',
                    userName: 'هود کارینا',
                    price: 2880000,
                    date: 53,
                    message: 'ایلیااستیل',
                },
                {
                    id: 7,
                    row: '123123',
                    userName: 'هود کارینا',
                    price: 2880000,
                    date: 53,
                    message: 'ایلیااستیل',
                },
                {
                    id: 8,
                    row: '123123',
                    userName: 'هود سارینا',
                    price: 2000000,
                    date: 24,
                    message: 'ایلیااستیل',
                },
                {
                    id: 9,
                    row: '123123',
                    userName: 'هود سارینا',
                    price: 2000000,
                    date: 24,
                    message: 'ایلیااستیل',
                },
                {
                    id: 10,
                    row: '123123',
                    userName: 'هود کارینا',
                    price: 2880000,
                    date: 53,
                    message: 'ایلیااستیل',
                },
                {
                    id: 11,
                    row: '123123',
                    userName: 'هود سارینا',
                    price: 2000000,
                    date: 24,
                    message: 'ایلیااستیل',
                },
                {
                    id: 12,
                    row: '123123',
                    userName: 'هود سارینا',
                    price: 2000000,
                    date: 24,
                    message: 'ایلیااستیل',
                },
                {
                    id: 13,
                    row: '123123',
                    userName: 'هود سارینا',
                    price: 2000000,
                    date: 24,
                    message: 'ایلیااستیل',
                },
            ],
            
            selected : [],

            page : 1,
            pageCount : 0,
            itemsPerPage : 5,
            }
    },
    components: {
      LoadingOverlay,
    },
}
</script>