<script setup>
import { defineComponent, h } from 'vue'

const navigation = {
  social: [
    {
      name: 'Subscribe',
      href: '#subscribe',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', 'stroke': 'currentColor' }, [
              h('path', {
                d: 'M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z',
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
            ]),
      }),

    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/aihackersfm',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
              }),
            ]),
      }),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@aihackerspodcast',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
  ],
}
</script>

<template>
  <div class="bg-gradient-to-t from-indigo-900 via-indigo-800 to-indigo-600">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20 sm:pb-28">
      <div class="text-center">
        <h1 class="text-5xl font-extrabold text-gray-900 pb-8 text-white">
          AI Hackers Podcast
        </h1>
        <h3 class="text-xl text-indigo-200 pb-12">
          Conversations with developers and entrepreneurs about building AI-powered products
        </h3>
        <div class="flex justify-center items-center gap-6 flex-wrap">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-sm text-white hover:text-indigo-100 flex items-center gap-2 border py-2 px-4 rounded-md border-white hover:border-indigo-200">
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            <span>{{ item.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
