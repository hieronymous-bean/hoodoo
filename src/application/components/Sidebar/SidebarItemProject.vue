<template>
  <div class="flex relative w-full h-8">
    <svg class="w-4 h-4 absolute top-2 -left-4 fill-current text-gray-400 hover:text-gray-500 hover:bg-gray-100 cursor-move" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 7 4 C 5.34375 4 4 5.34375 4 7 C 4 8.65625 5.34375 10 7 10 C 8.65625 10 10 8.65625 10 7 C 10 5.34375 8.65625 4 7 4 Z M 16 4 C 14.34375 4 13 5.34375 13 7 C 13 8.65625 14.34375 10 16 10 C 17.65625 10 19 8.65625 19 7 C 19 5.34375 17.65625 4 16 4 Z M 25 4 C 23.34375 4 22 5.34375 22 7 C 22 8.65625 23.34375 10 25 10 C 26.65625 10 28 8.65625 28 7 C 28 5.34375 26.65625 4 25 4 Z M 16 13 C 14.34375 13 13 14.34375 13 16 C 13 17.65625 14.34375 19 16 19 C 17.65625 19 19 17.65625 19 16 C 19 14.34375 17.65625 13 16 13 Z M 25 13 C 23.34375 13 22 14.34375 22 16 C 22 17.65625 23.34375 19 25 19 C 26.65625 19 28 17.65625 28 16 C 28 14.34375 26.65625 13 25 13 Z M 25 22 C 23.34375 22 22 23.34375 22 25 C 22 26.65625 23.34375 28 25 28 C 26.65625 28 28 26.65625 28 25 C 28 23.34375 26.65625 22 25 22 Z"></path></svg>
    <a class="flex items-center flex-shrink-0 w-full h-auto text-sm font-light rounded-sm hover:bg-gray-100" href="#">
      <div :class="ProjectDetails.color" class="rounded-full w-2 h-2 ml-3 mr-3 flex items-center justify-center">&nbsp;</div>
      <span class="truncate pr-5 text-black">{{ProjectDetails.name}}</span>
      <svg class="w-5 h-5 absolute right-0 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10A2 2 0 1 0 12 14 2 2 0 1 0 12 10zM18 10A2 2 0 1 0 18 14 2 2 0 1 0 18 10zM6 10A2 2 0 1 0 6 14 2 2 0 1 0 6 10z"></path></svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SidebarItemProject',
  data: () => ({

  }),
  components: {
  },
  props: [
    'ProjectDetails'
  ],
  computed: {
    
  },
  methods: {

  }
}
</script>