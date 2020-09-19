<template>
<div>
  <LoadingOverlay />

    <div id="main" class="container">
        <div class="row" style="direction: rtl;">
            <div class="alert col-12" v-for="ticket in tickets" :key="ticket.id">
                <div class="actions col-sm-12 col-lg-1">
                    <div class="delete" style="float:left;padding-left:25px">
                        <a title="حذف" @click.once="remove(ticket.id)">
                            <i :id="'delete' + ticket.id" @click="deleteIcon(ticket.id)" class="far fa-trash-alt deleteHover" style="color:#FF3D00;"></i>
                        </a>
                    </div>
                    <div class="accept">
                        <a title="پاسخ">
                            <i :id="'accept' + ticket.id" @click="writeIcon(ticket.id)" class="far fa-edit acceptHover" style="color:#FF3D00;"></i>
                        </a>
                    </div>
                </div>
                <div class="userMessage col-sm-12 col-lg-9">
                    <p>{{ ticket.body }}</p>
                </div>
                <div class="userInfo col-sm-12 col-lg-2">
                    <div class="name">
                        <h6>{{ ticket.name }}</h6>
                        <a :href="'tel:' + ticket.phone_number" style="color:#FF3D00;">{{ ticket.phone_number }}</a>
                        <p>{{ ticket.time }}</p>
                    </div>
                </div>
                <div :id="'answer' + ticket.id" class="col-12" style="word-break: break-all;display:none;">
                    <textarea v-model="answer" cols="30" rows="5"
                    placeholder="پاسخ..."></textarea>
                    <div style="display:flex; justify-content:center;">
                        <a @click="sendAnswer(ticket.id)" class="btn btn-primary" style="color:white;">ارسال</a>
                    </div>
                </div>
            </div>
        </div> 
        <div class="row">
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
            answer: ''
        }
    },
    components: {
      LoadingOverlay,
    },
    computed: {
        ...mapState(['pageCount', 'tickets']),
    },
    methods: {
        ...mapActions(['getTickets', 'ticketDelete', 'sendAnswerTicket']),
        changePage() {
            this.getTickets(this.page);
        },
        remove(id) {
            this.ticketDelete(id);
        },
        deleteIcon(id) {
            document.getElementById(`delete${id}`).style.transform = 'rotate(45deg)';
            document.getElementById(`delete${id}`).style.color = 'red';
        },
        writeIcon(id) {
            if(document.getElementById(`answer${id}`).style.display == 'none') {
                document.getElementById(`accept${id}`).style.transform = 'rotate(90deg)';
                document.getElementById(`accept${id}`).style.color = 'green';
                document.getElementById(`answer${id}`).style.display = 'block';
            } else {
                document.getElementById(`accept${id}`).style.transform = 'rotate(-90deg)';
                document.getElementById(`accept${id}`).style.color = '#FF3D00';
                document.getElementById(`answer${id}`).style.display = 'none';
            }
        },
        sendAnswer(id) {
            if(this.answer.length != 0) {
                this.sendAnswerTicket({
                    id: id,
                    body: this.answer
                })
            }
        }
    },
    created() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user.api_token != 'gyuBYANO28XFTPZPMFj0kBU4ZC74zxjWwjKaiJh4x6oe7ZrGCqmgBf3XgOWsRIQciwh0kpLsMqVul85jW2Cri2Q8tw9lhWD5ijs1') {
            this.$router.push({name: 'error404'});
        }
        this.getTickets();
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
        transform: rotate(90deg);
        transition: .8s;
    }
    textarea {
        width: 100%;
        background: white;
        padding: 10px;
    }
</style>