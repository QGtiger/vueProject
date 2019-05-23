<style scoped lang="less">
.container{
    width:60%;
    margin: 50px auto;
}
</style>
<template>
    <div class="index">
        <div class="container">
            <vInfoDrawer></vInfoDrawer>
            <v-card v-for="(item,index) in blogs" style="display:block" :key="index" :data="item"></v-card>
        </div>
    </div>
</template>
<script>
    import vCard from './card';
    import vInfoDrawer from './userInfoDrawer';
    import $ from '../libs/axiosProxy';
    import axios from 'axios';
    export default {
        components: { vCard,vInfoDrawer },
        data () {
            return {
                blogs: [],
            }
        },
        methods: {
            getBlogs (page) {
                $.ajax.get('/article/article_page/?page='+page).then(res=>{
                    this.blogs = res.data;
                })
            }
        },
        mounted () {
            this.getBlogs(1);
        }
    }
</script>
