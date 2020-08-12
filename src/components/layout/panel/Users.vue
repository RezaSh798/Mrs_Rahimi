<template>
<div>
    <v-card
    class="d-flex justify-start"
    >
        <v-switch disabled v-model="singleSelect" :label="actionName()" class="pa-3"></v-switch>
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
export default {
    data () {
      return {
        alert : false,

        headers: [
          {
            text: 'کد',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'نام کاربر', value: 'name' },
          { text: 'ایمیل', value: 'email' },
          { text: 'موجودی حساب', value: 'accuntCount' },
          { text: 'تاریخ عضویت', value: 'date' },
        ],
        desserts: [
          {
            id: 1,
            name: 'هود سارینا',
            email: 2000000,
            accuntCount: 24,
            date: 'ایلیااستیل',
          },
          {
            id: 2,
            name: 'هود کارینا',
            email: 2880000,
            accuntCount: 53,
            date: 'ایلیااستیل',
          },
          {
            id: 3,
            name: 'هود سارینا',
            email: 2000000,
            accuntCount: 24,
            date: 'ایلیااستیل',
          },
          {
            id: 4,
            name: 'هود سارینا',
            email: 2000000,
            accuntCount: 24,
            date: 'ایلیااستیل',
          },
          {
            id: 5,
            name: 'هود سارینا',
            email: 2000000,
            accuntCount: 24,
            date: 'ایلیااستیل',
          },
          {
            id: 6,
            name: 'هود کارینا',
            email: 2880000,
            accuntCount: 53,
            date: 'ایلیااستیل',
          },
          {
            id: 7,
            name: 'هود کارینا',
            email: 2880000,
            accuntCount: 53,
            date: 'ایلیااستیل',
          },
          {
            id: 8,
            name: 'هود سارینا',
            email: 2000000,
            accuntCount: 24,
            date: 'ایلیااستیل',
          },
          {
            id: 9,
            name: 'هود سارینا',
            email: 2000000,
            accuntCount: 24,
            date: 'ایلیااستیل',
          },
          {
            id: 10,
            name: 'هود کارینا',
            email: 2880000,
            accuntCount: 53,
            date: 'ایلیااستیل',
          },
          {
            id: 11,
            name: 'هود سارینا',
            email: 2000000,
            accuntCount: 24,
            date: 'ایلیااستیل',
          },
          {
            id: 12,
            name: 'هود سارینا',
            email: 2000000,
            accuntCount: 24,
            date: 'ایلیااستیل',
          },
          {
            id: 13,
            name: 'هود سارینا',
            email: 2000000,
            accuntCount: 24,
            date: 'ایلیااستیل',
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
            //  DELETE API
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