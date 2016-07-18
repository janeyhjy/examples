<template>
  <div id="success">
    Success Text
  </div>
</template>

<script>

export default {
  data () {
    return {
      sku: '',
      contact: {
        name: '',
        phone: ''
      },
      fullAddress: '',
      goods: [],
      goodsTotal: 0,
      realAmount: 0
    }
  },
  asyncData (resolve, reject) {
    const resource = this.$resource('screferral/test/test')
    const params = {
      
    }
    resource.get(params).then((response) => {
      console.log('response======================', response);
    })
  }
}
</script>
