<template>
	<div class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"
        :color="'#FF3D00'">
        </loading>
    </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    data() {
        return {
			// loading
			isLoading: false,
			fullPage: true,
        }
    },
    components: {
        Loading,
    },
    created() {
		// Loading
		this.isLoading = true;
		// simulate AJAX
		setTimeout(() => {
			this.isLoading = false
		},3000);        
    }
}
</script>