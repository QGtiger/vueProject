<template>
    <div>
        <v-title :title="title"></v-title>
        <v-button @click="handleClick" :color="color">点击按钮</v-button>
        <p>
            <img src="./images/root.jpg" alt="" style="width:200px">
        </p>
    </div>
</template>   

<script>
import vTitle from './title.vue'
import vButton from './button.vue'
export default {
    components: {
        vTitle,
        vButton
    },
    data () {
        return {
            title: "vue 组件",
            color: "red"
        }
    },
    methods: {
        handleClick (e) {
            console.log(e);
        }
    }
}
</script>

<style scoped>
    div{
        color: #f60;
        font-size: 24px;
        font-weight: 700;
    }
</style>