<template>
  <div class="min-h-screen bg-white">
<!--    <Nav />-->
    <Hero />
    <Player />
    <About />
    <Host />
    <Guests />
    <Signup />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import Signup from "./components/Signup.vue";
import About from "./components/About.vue";
import Host from "./components/Host.vue";
import Guests from "./components/Guests.vue";
import Footer from "./components/Footer.vue";
import Player from "./components/Player.vue";

export default {
  name: 'App',
  components: {Player, Footer, Guests, Host, About, Signup, Hero, Nav},
};
</script>

<style>
/* No custom styles needed for this implementation */
</style>
