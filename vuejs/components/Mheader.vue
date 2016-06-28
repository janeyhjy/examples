<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ mtitle }}</p>
    <img :src="img" />
  </div>
</template>
<script>

export default {
  data () {
    return {
      name: 'This is mheader component',
      img: '../assets/images/utsufrightperspective.jpg'
    }
  },
  props: ['mtitle']
}
</script>
