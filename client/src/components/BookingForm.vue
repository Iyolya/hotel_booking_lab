<template lang="html">
	<form id="booking-form" v-on:submit.prevent="handleSubmit">
		<h2>New Booking</h2>
		<div class="formWrap">
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" />
		</div>
		<div class="formWrap">
			<label for="email">Email:</label>
			<input type="text" id="email" v-model="email" />
		</div>
		<div class="formWrap">
			<label for="ckecked_in">Checked In:</label>
			<input type="checkbox" id="checked_in" v-model="checked_in" />
		</div>

		<input type="submit" value="Save" id="save"/>
	</form>

</template>

<script>

import BookingService from '../services/BookingService';
import {eventBus} from '@/main.js'

export default {
    name: 'booking-form', 
    data: function() {
        return {
            name: '', 
            email: '', 
            checked_in: false 
        }
    }, 

    method: {
        postBooking(event) {
            event.preventDefault()
            const newBooking = {
                name: this.name,
                email: this.email,
                checked_in: this.checked_in
            }
        BookingService.postBooking(newBooking)
        .then(newBooking => eventBus.$emit('booking-completed', newBooking))
        }
    }


}
</script>

<style>

</style>