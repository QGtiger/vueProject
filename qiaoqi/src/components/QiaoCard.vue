<template>
    <Card style="width:450px">
        <p slot="title">
            敲七小程序(记得先'清空'才能进入下一轮)
        </p>
        <div class="item-content">
            <v-form @nextRound="handleNext" @clear="handleClear"></v-form>
        </div>

        <p v-for="(item,index) in result" :key="index">第{{item.count}}回合:  {{item.tips}}</p>
    </Card>
</template>

<script>
import vForm from '@/components/QiaoForm'
export default {
    components: {vForm},
    data () {
        return {
            result: []
        }
    },
    methods: {
        handleNext (next) {
            console.log(next)
            this.result.unshift(next)
        },
        handleClear () {
            this.result = []
        }
    }
}
</script>

<style scoped>

</style>