<template>
  <div>
      
        <li v-for="(booking, index) in bookings" :key="index" :bookings="bookings">
            Name {{booking.name}} 
            Email {{booking.email}}
            Checked in {{booking.checked_in}}
            <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
            </li>   
            <!-- <li v-if="booking.checked_in</li> -->
            <!-- <ul v-if="bookings.checked_in" id="checked"> -->
              
            
          
        
      <!-- </ul> -->
  </div>
</template>

<script>

import BookingService from '../services/BookingService.js';
import {eventBus} from '@/main.js'

export default {
    name: 'booking-list',
    // props: ['bookings'],
    data: function() {
        return {
            bookings: []
        }
    },

    mounted: function() {
        BookingService.getBookings()
        .then(bookings => this.bookings = bookings)

        eventBus.$on('booking-completed', booking => this.bookings.push(booking))
    },

    methods: {
        handleDelete: function (id) {
            BookingService.deleteBooking(id)
            .then(res => {
                const index = this.bookings.findIndex(booking => booking._id === id);
                this.bookings.splice(index, 1);
            });

    

        }
    }    
}

</script>

<style>

</style>