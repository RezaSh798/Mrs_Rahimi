<template>
<div>
  <LoadingOverlay />

  <v-alert
    v-model="alert"
    border="left"
    close-text="Close Alert"
    color="#FF3D00"
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
import LoadingOverlay from '../LoadingOverlay.vue'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      alert : false,

      headers: [
        { text: 'نام محصول', value: 'title', sortable: false, align: 'start' },
        { text: 'قیمت', value: 'c_price' },
        { text: 'قیمت با تخفیف', value: 'u_price' }, // takhfif
        { text: 'موجودی', value: 'inventory' },
        { text: 'دسته بندی', value: 'category' },
      ],

      selected : [],
      singleSelect: false,

      page : 1,
      itemsPerPage : 9,
    }
  },
  components: {
    LoadingOverlay,
  },
  computed: {
    ...mapState({
      pageCount: 'pageCount',
      desserts: 'products'
    }),
  },
  methods : {    
    ...mapActions(['getProductsPerPage', 'deleteProducts']),
    ...mapMutations(['getproduct']),
    actionName () {
        if( this.singleSelect ) {
            return 'انتخاب تکی';
        } else {
            return 'انتخاب چندتایی';
        }
    },
    actionOperation () {
      if ( this.singleSelect && this.selected.length == 1 ) {
        this.getproduct(this.selected[0]);
        this.$router.push({ name : 'update' });
      } else if ( this.singleSelect && this.selected.length != 1 ) {
        this.alert = true;
      } else {
        this.deleteProducts(this.selected);
      }
    },
    getPage() {
      this.getProductsPerPage(this.page);
    }
  },
  created() {
    this.$store.dispatch('getProductsPerPage');
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