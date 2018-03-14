<template>
  <div id="app">

    <router-view>
    </router-view>

    <piepag></piepag>
  </div>
</template>

<script>

import piepag from './component/footer.vue';

export default {
  components: {
    piepag
  },
  data: () => ({

  })
}
</script>
