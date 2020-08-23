<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit="onSubmit()">
    <v-container>
      <v-row>
        <v-col
        cols="12"
        md="6"
        >
        <v-text-field
          v-model="product.name"
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
          v-model="product.price"
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
          v-model="product.code"
          :rules="codeRules"
          label="کد محصول"
          counter
          required
        ></v-text-field>
        </v-col>

        <v-col
        cols="12"
        md="6"
        >
        <v-text-field
          v-model="product.Inventory"
          :rules="requiredRules"
          label="موجودی"
          counter
          type="number"
          required
        ></v-text-field>
        </v-col>

        <v-col
        cols="12"
        md="6">
        <v-select
          v-model="product.category"
          :items="categories"
          :rules="requiredRules"
          label="دسته بندی"
          dense
        ></v-select>
        </v-col>

        <v-col
        id="my-img"
        cols="12"
        md="6"
        >
        <v-file-input
          multiple
          :rules="imageRules"
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
          v-model="product.text"
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
          :color=" this.$route.params.id == 'new' ? '#ef394e' : 'green'"
          width="200px"
          type="submit"
        >
          {{ this.$route.params.id == 'new' ? 'ذخیره' : 'بروزرسانی' }}
        </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data : () => ({
    // DATAES
    valid: true,
    product : {
      name: '',
      price: '',
      code: '',
      Inventory: '',
      text: '',
      images : null,
      category: ''
    },

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
    imageRules: [
      v => !!v || 'این فیلد باید پر شود !',
    ],
    textRules: [
      v => !!v || 'این فیلد باید پر شود !',
      v => v.length > 50 || 'حداقل 50 کاراکتر وارد کنید !',
      v => v.length < 200 || '200 کاراکتر مجاز است !'
    ],
  }),
  computed: {
    ...mapActions(['createPruduct', 'getCategories']),
    ...mapState(['categories']),
  },
  methods : {
    validate () {
      this.$refs.form.validate()
    },
    onFilesSelected(files) {
      this.product.images = files;
    },
    onSubmit() {
      this.createPruduct(this.product);
    },
  },
  created() {
    this.getCategories;
  }
}
</script>

<style>
  #my-img {
    margin-top: -17px;
  }  
</style>