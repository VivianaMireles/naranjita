<template>
  <main>

    <header>
      <headerinicio></headerinicio>
    </header>

    <section>
      <infoinicio></infoinicio>
    </section>

  </main>
</template>
  
<script>
import headerinicio from '../component/headerinicio.vue';
import infoinicio from '../component/infoInicio.vue';

export default {
  components: {
    headerinicio,infoinicio
  }
}
</script>
