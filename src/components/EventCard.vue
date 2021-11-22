<template>
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div class="event-card">
      <!--    Display event data-->
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: Object,
  },
}
</script>

<style scoped>
.event-card {
  padding: 1em;
  width: 100%;
  max-width: 15em;
  cursor: pointer;
  margin-bottom: 1em;
}

@media (prefers-color-scheme: dark) {
  .event-card {
    border: 1px solid #83b9f1;
    color: #83b9f1;
  }
}

@media (prefers-color-scheme: light) {
  .event-card {
    border: 1px solid #39495c;
  }
}

.event-card:hover {
  transform: scale(1.01);
  display: initial;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
