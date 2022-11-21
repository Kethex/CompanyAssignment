<template>
  <div class="mainApp">
  <div class="formSubmission my-5">
    <h1>{{ msg }}</h1>
    <p>
      Submit the longitude and latitude of any location below.
    </p>
    <form @submit.prevent="submit">
      <div class="row">
        <div class="col-lg-6 mb-3">
          <div class="form-group">
            <label for="Longitude" class="mb-1" >Longitude</label>
            <input type="number" step="any" class="form-control" id="Longitude" name="long" aria-describedby="emailHelp" placeholder="Enter longitude" required>
          </div>
        </div>
        <div class="col-lg-6 mb-3">
          <div class="form-group">
            <label for="Latitude" class="mb-1">Latitude</label>
            <input type="number" step="any" class="form-control" id="latitude" name="lat" placeholder="Enter latitude" required>
          </div>
        </div>
      </div>
      <div class="btn-group btn-group-toggle mb-3" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input type="radio" name="options" id="distance"  value="distance" checked> Distance
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="freebikes" value="bikes"> Free Bikes
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="timeupdated" value="time"> Time Updated
        </label>
    </div>
      <div class="row">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
  </form>
   </div>
    <BikeList :stations="stations.slice(0, 5)"/>
    </div>
</template>

<script lang="ts">

import BikeList from './BikeList.vue'

import { getBikes } from '../services/CityBikes'


export default {
  name: 'MainApplication',

  components: {
    BikeList
  },

  props: {
    msg: String
  },

  data() {
    return {
      stations: [],
      lat: 0,
      long: 0,
      method: ""
    }
  },

  methods: {
    submit(e) {
      getBikes().then(res => {

        this.stations = res.network.stations
        this.lat = e.target.lat.value
        this.long = e.target.long.value
        this.method = e.target.options.value
        
        if (this.method == "distance") {
          this.filterByDistance(this.stations, this.lat, this.long)
        } else if (this.method == "bikes") {
          this.filterByBikes(this.stations)
        } else if (this.method == "time") {
          this.filterByTime(this.stations)
        }
      })
    },

    filterByDistance(stations, long, lat) {

      stations.sort((a, b) => {
        let a_distance = Math.sqrt((a.longitude - long)**2 + (a.latitude - lat)**2)
        let b_distance = Math.sqrt((b.longitude - long)**2 + (b.latitude - lat)**2)

        a.distance = a_distance; b.distance = b_distance

        return a_distance - b_distance

      })

      console.log(stations)
      this.stations = stations

    },
        
    filterByBikes(stations) {

      stations.sort((a, b) => { return a.free_bikes + b.free_bikes })

      console.log(stations)
      this.stations = stations

    },
    
    filterByTime(stations) {

      stations.sort((a, b) => {

        let a_date = new Date(a.timestamp)
        let b_date = new Date(b.timestamp)

        return a_date - b_date
      })

      console.log(stations)
      this.stations = stations
    }}
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

</style>
