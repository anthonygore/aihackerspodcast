<script setup>
import {ref} from "vue";

const email = ref('')
const isSuccess = ref(false)
const loading = ref(false)
const error = ref(null)

async function submit() {
  if (email.value.length) {
    error.value = null
    loading.value = true
    try {
      const res = await fetch('/.netlify/functions/signup', {
        method: 'POST',
        body: JSON.stringify({ email: email.value }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      loading.value = false
      if (res.status === 200) {
        isSuccess.value = true
      } else {
        const data = await res.json()
        error.value = data
      }
    } catch (err) {
      error.value = "There's been an error, please try again."
    }

  }
}
</script>

<template>
  <div class="bg-gradient-to-t from-indigo-900 via-indigo-800 to-indigo-600">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div class="mx-auto max-w-2xl flex flex-col" id="subscribe">
        <h2 class="text-4xl font-bold text-white pb-6 text-center">Get notified when we’re launching</h2>
        <p class="text-lg text-indigo-200 pb-10 text-center"><strong>AI Hackers Podcast</strong> will be launching soon. Please leave you're email to be notified of the first episode. No spam, one-click unsubscribe.</p>
        <div v-if="isSuccess" class="bg-green-500 rounded-md p-4 text-green-50">
          You're subscribed!
        </div>
        <div class="mx-auto" v-else>
          <div class=" flex gap-x-2">
            <label for="email-address" class="sr-only">Email address</label>
            <input :class="{ 'opacity-25': loading, 'text-red-600 ring-1 ring-inset ring-red-600': error }" :disabled="loading" v-model="email" id="email-address" name="email" type="email" autocomplete="email" required class="w-72 flex-auto rounded-md border-0 bg-white px-3.5 py-2" placeholder="Enter your email">
            <button :class="{ 'opacity-25': loading }" :disabled="loading" type="button" @click="submit" class="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify me</button>
          </div>
          <p class="mt-2 text-sm text-red-600" id="email-error" v-if="error">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
