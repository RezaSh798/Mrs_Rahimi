<template>
<div>
  <LoadingOverlay />

    <div id="main" class="container">
        <div class="row" style="direction: rtl;">
            <div class="alert col-12" v-for="comment in comments" :key="comment.id">
                <div class="actions col-sm-12 col-lg-1">
                    <div class="delete" style="float:left;padding-left:25px">
                        <a title="حذف" @click.once="remove(comment.id)">
                            <i :id="'delete' + comment.id" @click="deleteIcon(comment.id)" class="far fa-trash-alt deleteHover" style="color:#FF3D00;"></i>
                        </a>
                    </div>
                    <div class="accept" style="padding-top:1px;">
                        <a title="پذیرفتن" @click.once="accept(comment.id)">
                            <i :id="'accept' + comment.id" @click="acceptIcon(comment.id)" class="far fa-thumbs-down acceptHover" style="color:#FF3D00;"></i>
                        </a>
                    </div>
                </div>
                <div class="userMessage col-sm-12 col-lg-9">
                    <p>{{ comment.body }}</p>
                </div>
                <div class="userInfo col-sm-12 col-lg-2">
                    <div class="name">
                        <h6>{{ comment.writter }}</h6>
                    </div>
                </div>
            </div>
            
            <v-pagination class="col-12" id="pageinate" v-model="page" @input="changePage()" :length="pageCount" color="#FF3D00"></v-pagination>
        </div> 
    </div>
    
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import LoadingOverlay from '../LoadingOverlay.vue'

export default {
    data() {
        return {
            page : 1,
            itemsPerPage : 10,
        }
    },
    components: {
      LoadingOverlay,
    },
    computed: {
        ...mapState(['pageCount', 'comments']),
    },
    methods: {
        ...mapActions(['getComments', 'commentStatus', 'commentDelete']),
        changePage() {
            this.getComments(this.page);
        },
        accept(id) {
            this.commentStatus(id);
        },
        remove(id) {
            this.commentDelete(id);
        },
        deleteIcon(id) {
            document.getElementById(`delete${id}`).style.transform = 'rotate(45deg)';
            document.getElementById(`delete${id}`).style.color = 'red';
        },
        acceptIcon(id) {
            document.getElementById(`accept${id}`).style.transform = 'rotate(180deg)';
            document.getElementById(`accept${id}`).style.color = 'green';
        }
    },
    created() {
        this.getComments();
    }
}
</script>

<style scoped>
    .alert {
        background: #f6f6f6;
        border-color: #f6f6f6;
    }
    i {
        font-size: 18px;
    }
    .deleteHover:hover {
        transform: rotate(45deg);
        transition: .8s;
    }
    .acceptHover:hover {
        transform: rotate(180deg);
        transition: .8s;
    }
</style>