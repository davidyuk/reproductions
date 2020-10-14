<template>
  <div class="header">
    <button
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
      hover: {{ hover }}
    </button>
    <Transition name="fade">
      <Card v-if="hover" />
    </Transition>
  </div>
</template>

<script>
import Card from './Card';

export default {
  components: { Card },
  data: () => ({ hover: false }),
}
</script>

<style scoped>
.header .card.fade-enter-active, .header .card.fade-leave-active {
  transition: opacity .3s;
}

.header .card.fade-enter-to, .header .card.fade-leave-to {
  transition-delay: .5s;
}

.header .card.fade-enter, .header .card.fade-leave-to {
  opacity: 0;
}
</style>
