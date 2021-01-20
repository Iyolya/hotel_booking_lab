<template>
<div>
  <h1>Overlook Hotel</h1>
<booking-form></booking-form>
<booking-list></booking-list>
</div>
</template>

<script>

import BookingForm from './components/BookingForm.vue';
import BookingList from './components/BookingList.vue';

export default {
name: 'app',
components: {
  'booking-form': BookingForm,
  'booking-list': BookingList
},

  mounted(){
    fetch("http://localhost:3000/")
      .then(response => response.json())
      .then(data => this.bookings = data.message);
},
 data () {
    return {
      bookings: []
    }
  }
}

</script>


<style>

</style>