<template>
<div>
  <LoadingOverlay />

  <v-card
    class="d-flex justify-start">
      <v-switch disabled v-model="singleSelect" :label="actionName()" class="pa-3"></v-switch>
      <v-btn
      id="operationBtn"
      :color="singleSelect ? 'green' : '#FF3D00'"
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
  show-select
  :single-select="singleSelect"
  item-key="id"
  ></v-data-table>
  <v-pagination id="pageinate" v-model="page" @input="getPage()" :length="pageCount" color="#FF3D00"></v-pagination>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import LoadingOverlay from '../LoadingOverlay.vue'

export default {
  data () {
    return {
      alert : false,

      headers: [
        { text: 'نام', value: 'name', align: 'start', sortable: false },
        { text: 'نام خانوادگی', value: 'family' },
        { text: 'ایمیل', value: 'email' },
        { text: 'شماره موبایل', value: 'phone_number' },
      ],

      selected : [],
      singleSelect: false,

      page : 1,
      itemsPerPage : 10,
    }
  },
  components: {
    LoadingOverlay,
  },
  computed: mapState({
    pageCount: 'pageCount',
    desserts: 'users',
  }),
  methods : {
    ...mapActions(['getUsers', 'deleteUsers']),
    actionName () {
        if( this.singleSelect ) {
            return 'انتخاب تکی';
        } else {
            return 'انتخاب چندتایی';
        }
    },
    actionOperation () {
      if(this.selected.length > 0) {
        this.deleteUsers(this.selected);
          setTimeout(() => {
            this.$router.go()
          }, 2000);
      }
    },
    getPage() {
      this.getUsers(this.page);
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user.api_token != 'zOFmCoxdWA3ep1igMsC6MQqd06QBA1qN8KV9EQ07m7HAR6qA6pgR6qU9pWbgR0skZlbutZlBCWdHwzuzT3OUpsEGlepVMJsNd1EW') {
      this.$router.push({name: 'error404'});
    }
    this.$store.dispatch('getUsers');
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