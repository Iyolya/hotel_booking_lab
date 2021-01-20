<template>
<div>
  <h1>Overlook Hotel</h1>
<booking-form></booking-form>
</div>
</template>

<script>

import BookingForm from './components/BookingForm.vue';

export default {
name: 'app',
components: {
  'booking-form': BookingForm
},

  mounted(){
    fetch("http://localhost:3000/")
      .then(response => response.json())
      .then(data => this.serverMessage = data.message);
},
 data () {
    return {
      serverMessage: []
    }
  }
}

</script>


<style>

</style>