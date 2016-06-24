<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ mtitle }}</p>
  </div>
</template>
<script>

export default {
  data () {
    return {
      name: 'This is mheader component'
    }
  },
  props: ['mtitle']
}
</script>
