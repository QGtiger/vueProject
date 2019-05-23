<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p @click="handleShow" slot="title">{{ data.title }}</p>
            <p>{{ data.body }}</p>
        </Card>
    </div>
</template>
<script>
    export default {
        props:{
            data: {
                type: Object
            }
        },
        methods: {
            handleShow () {
                this.$Modal.info({
                    title: this.data.title,
                    content: this.data.body
                })
            }
        }
    }
</script>
