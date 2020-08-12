<template>
<div>
    <v-alert
      v-model="alert"
      border="left"
      close-text="Close Alert"
      color="red darken-1"
      dark
      dismissible
    >
        لطفا برای بروزرسانی فقط یکی از محصولات را انتخاب کنید !
    </v-alert>
    <v-card
    class="d-flex justify-start"
    >
        <v-switch v-model="singleSelect" :label="actionName()" class="pa-3" color="amber darken-4"></v-switch>
        <v-btn
        id="operationBtn"
        :color="singleSelect ? 'green' : '#ef394e'"
        @click="actionOperation()"
        >
        {{ singleSelect ? 'بروزرسانی' : 'حذف' }}
        </v-btn>
    </v-card>
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
    :single-select="singleSelect"
    item-key="id"
    ></v-data-table>
    <v-pagination id="pageinate" v-model="page" :length="pageCount" color="amber darken-4"></v-pagination>
</div>
</template>

<script>
import router from '../../../router'

export default {
    data () {
      return {
        alert : false,

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
    methods : {
        actionName () {
            if( this.singleSelect ) {
                return 'انتخاب تکی';
            } else {
                return 'انتخاب چندتایی';
            }
        },
        actionOperation () {
            if ( this.singleSelect && this.selected.length == 1 ) {
                router.push({ name : 'edite', params : { id : this.selected[0].id } });
            } else if ( this.singleSelect && this.selected.length != 1 ) {
                this.alert = true;
            } else {
                //  DELETE API
            }
        }
    }
}
</script>

<style>
    #pageinate ul li button {
        color: black !important;
    }
    #pageinate {
        margin-top: 5px;
    }
    #operationBtn {
        position: absolute;
        left: 0;
        margin-top: 22px;
        margin-left: 10px;
    }
</style>