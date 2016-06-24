<template>
  <mheader :mtitle="header.title"></mheader>
  <p>This is page1!</p>
</template>
<script>
import Mheader from '../components/Mheader'

export default {
  data () {
    return {
      header: {
        title: 'This is mheader title'
      }
    }
  },
  components: {
    Mheader
  }
}
</script>
