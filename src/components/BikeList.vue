<template>
  <div class="card mb-3">
    <ul class="list-group list-group-flush" v-for="station in stations" :key="station.id">
        <li class="list-group-item">
            <h5> {{station.name}} </h5>
            <p> {{ station.free_bikes }} </p>
            <p> {{ station.distance }} </p>
        </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'BikeList',

  props: {
    stations: Array,
  }

}
</script>
<style scoped>


</style>
