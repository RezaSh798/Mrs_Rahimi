<template>
  <div>
    <LoadingOverlay />
  
    <v-form ref="form" v-model="valid" lazy-validation @submit="onSubmit()">
      <v-container>
        <v-row>
          <v-col
          cols="12"
          md="6"
          >
          <v-text-field
            v-model="product.title"
            :rules="nameRules"
            :counter="20"
            label="نام محصول"
            required
          ></v-text-field>
          </v-col>

          <v-col
          cols="12"
          md="6"
          >
          <v-text-field
            v-model="product.c_price"
            :rules="requiredRules"
            counter
            label="قیمت محصول"
            required
            type="number"
          ></v-text-field>
          </v-col>

          <v-col
          cols="12"
          md="6"
          >
          <v-text-field
            v-model="product.u_price"
            :rules="requiredRules"
            counter
            label="قیمت محصول با تخفیف"
            required
            type="number"
          ></v-text-field>
          </v-col>

          <v-col
          cols="12"
          md="6"
          >
          <v-text-field
            v-model="product.inventory"
            :rules="requiredRules"
            label="موجودی"
            counter
            type="number"
            required
          ></v-text-field>
          </v-col>

          <v-col
          cols="12"
          md="6"
          id="category"
          style="position:relative;">
            <label id="lable" for="select">دسته بندی</label>
            <select id="select" @change="setCategoryId(categoryId)" v-model="categoryId">
              <option
              v-for="category in pCategories"
              :key="category.id"
              :value="category.id">
              {{ category.title }}</option>
            </select>
          </v-col>

          <v-col
          id="my-img"
          cols="12"
          md="6"
          >
          <v-file-input
            multiple
            accept="image/png, image/jpeg, image/bmp"
            placeholder="انتخاب تصاویر"
            prepend-icon="mdi-camera"
            label="تصویر"
            @change="onFilesSelected"
          ></v-file-input>
          </v-col>

          <v-col
          cols="12"
          >
          <v-textarea
            v-model="product.desc"
            :rules="textRules"
            autocomplete="توصیح"
            :counter="200"
            label="توضیحات محصول"
          ></v-textarea>
          </v-col>

          <v-col
            cols="12"
            class="d-flex justify-center"
          >
          <v-btn
            :disabled="!valid"
            @click="validate"
            color="green"
            width="200px"
            type="submit"
          >
            بروزرسانی
          </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
// import $ from 'jquery/dist/jquery'
import { mapActions, mapGetters, mapState } from 'vuex'
import LoadingOverlay from '../LoadingOverlay.vue'

export default {
  data : () => ({
    // DATAES
    valid: true,
    product : {},
    images : [],
    categoryId: '',

    // RULES
    nameRules: [
      v => !!v || 'این فیلد باید پر شود !',
      v => v.length <= 20 || '20 کاراکتر مجاز است !',
    ],
    codeRules: [
      v => !!v || 'این فیلد باید پر شود !',
      v => v.length <= 10 || '10 کاراکتر مجاز است !',
    ],
    requiredRules: [
      v => !!v || 'این فیلد باید پر شود !',
    ],
    textRules: [
      v => !!v || 'این فیلد باید پر شود !',
      v => v.length > 50 || 'حداقل 50 کاراکتر وارد کنید !',
      v => v.length < 200 || '200 کاراکتر مجاز است !'
    ],
  }),
  components: {
    LoadingOverlay
  },
  computed: {
    ...mapGetters(['pCategories']),
    ...mapActions(['getCategories']),
    ...mapState({
      singleProduct: 'product'
    }),
  },
  methods : {
    ...mapActions(['updateProduct', 'getProduct']),
    validate () {
      this.$refs.form.validate()
    },
    onFilesSelected(files) {
      this.images = files;
    },
    onSubmit() {
      delete this.product.category;
      if(this.images.length > 0) {
        delete this.product.images;
        this.updateProduct({
          body: this.product,
          productImages: this.images,
        });
      } else {
        this.updateProduct( this.product );
      }
    },
    setCategoryId(id) {
      this.product.category_id = id;
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user.api_token != 'zOFmCoxdWA3ep1igMsC6MQqd06QBA1qN8KV9EQ07m7HAR6qA6pgR6qU9pWbgR0skZlbutZlBCWdHwzuzT3OUpsEGlepVMJsNd1EW') {
      this.$router.push({name: 'error404'});
    }
    this.getCategories;
    this.getProduct(this.$route.params.id);
    setTimeout(() => {
      this.product = this.singleProduct;
      this.categoryId = this.singleProduct.category_id;
    }, 2000);
  },
}
</script>

<style>
  #my-img {
    margin-top: -17px;
  }
  select {
    width: 100%;
    border-bottom: 1px solid gray;
    height: 32px;
    padding-right: 10px;
  }
  #lable {
    position: absolute;
    top: -5px !important;
    font-size: 12px !important;
    background: white;
    color: #666666;
  }
</style>