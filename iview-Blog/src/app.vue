<style scoped>
    @import 'styles/common.css';
</style>
<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
        <router-link :to="'/'">
            <MenuItem name="1">
                <Icon type="ios-paper" />
                博客首页
            </MenuItem>
        </router-link>
        <MenuItem name="2">
            <Icon type="ios-people" />
            聊天室
        </MenuItem>
        <MenuItem name="3">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
        <Submenu name="4" style="float:right">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <router-link :to="'login'">
                    <MenuItem name="3-1">登录</MenuItem>
                </router-link>
                <router-link :to="'register'">
                    <MenuItem name="3-2">注册</MenuItem>
                </router-link>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        </Menu>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'dark',
            }
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
