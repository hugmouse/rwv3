<template>
  <div class="home">
    <h1>Events For Good</h1>
    <h2 v-if="!events">Loading events...</h2>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin: 0 auto;
  max-width: 1280px;
}
a {
  display: inherit;
  text-decoration: none;
  color: #2c3e50;
}
</style>
