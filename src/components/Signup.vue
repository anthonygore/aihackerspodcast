<script setup>
import {ref} from "vue";

const email = ref('')
async function submit() {
  if (email.value.length) {
    const res = await fetch('/.netlify/functions/signup', {
      method: 'POST',
      body: JSON.stringify({ email: email.value }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()
    console.log(data)
  }
}
</script>

<template>
  <div class="bg-gradient-to-t from-indigo-900 via-indigo-800 to-indigo-600">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div class="text-center mx-auto max-w-2xl text-center flex flex-col" id="subscribe">
        <h2 class="text-4xl font-bold text-white pb-6">Get notified when we’re launching</h2>
        <p class="text-lg text-indigo-200 pb-10"><strong>AI Hackers Podcast</strong> will be launching soon. Please leave you're email to be notified of the first episode. No spam, one-click unsubscribe.</p>
        <div class="mx-auto flex gap-x-2">
          <label for="email-address" class="sr-only">Email address</label>
          <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required class="w-72 flex-auto rounded-md border-0 bg-white px-3.5 py-2" placeholder="Enter your email">
          <button type="button" @click="submit" class="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify me</button>
        </div>
      </div>
    </div>
  </div>
</template>
