<template>
  <div class="flex flex-col items-center w-16 bg-white pb-4 overflow-auto border-r border-gray-300">
    <a class="flex items-center justify-center flex-shrink-0 w-10 mt-5 rounded hover:bg-gray-50" href="#">
      <img src="https://img.icons8.com/plasticine/100/000000/reminders.png"/>
    </a>
    <a class="flex items-center justify-center flex-shrink-0 w-10 mt-5 rounded hover:bg-gray-50" href="#">
      <img src="https://img.icons8.com/plasticine/100/000000/timeline-week.png"/>
    </a>
    <a class="flex items-center justify-center flex-shrink-0 w-10 mt-5 rounded hover:bg-gray-50" href="#">
      <img src="https://img.icons8.com/plasticine/100/000000/repository.png"/>
    </a>
    <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto rounded hover:bg-gray-50" href="#">
      <img src="https://img.icons8.com/plasticine/100/000000/test-account.png"/>
    </a>
  </div>
  <div class="flex flex-col w-56 border-r border-gray-300 bg-light">
    <div class="flex flex-col flex-grow py-3 pl-5 pr-2 overflow-auto">
      <div class="flex justify-between">
        <div @click="this.SidebarProjectsOpen = !this.SidebarProjectsOpen" class="flex">
          <svg :class="SidebarProjectsOpen ? 'transform rotate-0' : 'transform -rotate-90'" class="w-4 h-4 mr-2 fill-current text-dark cursor-pointer transition duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 44.988281 13.984375 C 44.726563 13.992188 44.476563 14.101563 44.292969 14.292969 L 25 33.585938 L 5.707031 14.292969 C 5.519531 14.097656 5.261719 13.992188 4.992188 13.988281 C 4.582031 13.992188 4.21875 14.238281 4.0625 14.613281 C 3.910156 14.992188 4 15.421875 4.292969 15.707031 L 24.292969 35.707031 C 24.683594 36.097656 25.316406 36.097656 25.707031 35.707031 L 45.707031 15.707031 C 46.003906 15.421875 46.09375 14.980469 45.9375 14.601563 C 45.777344 14.222656 45.402344 13.976563 44.988281 13.984375 Z"></path></svg>
          <span class="text-xs text-dark font-semibold">Projects</span>
        </div>
        <div class="w-5 cursor-pointer">
          <svg class="w-4 ml-auto fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 5 C 21 3.9069372 20.093063 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z"></path></svg>
        </div>
      </div>
      <sidebar-item-project v-show="SidebarProjectsOpen" v-for="(project, index) in Projects" :key="index" :ProjectDetails="project"/>
    </div>
    <div class="flex flex-col flex-grow p-4 overflow-auto">
      <div class="flex justify-between">
        <div class="flex">
          <svg class="w-4 h-4 mr-2 fill-current text-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 44.988281 13.984375 C 44.726563 13.992188 44.476563 14.101563 44.292969 14.292969 L 25 33.585938 L 5.707031 14.292969 C 5.519531 14.097656 5.261719 13.992188 4.992188 13.988281 C 4.582031 13.992188 4.21875 14.238281 4.0625 14.613281 C 3.910156 14.992188 4 15.421875 4.292969 15.707031 L 24.292969 35.707031 C 24.683594 36.097656 25.316406 36.097656 25.707031 35.707031 L 45.707031 15.707031 C 46.003906 15.421875 46.09375 14.980469 45.9375 14.601563 C 45.777344 14.222656 45.402344 13.976563 44.988281 13.984375 Z"></path></svg>
          <span class="text-xs text-dark font-semibold">Labels</span>
        </div>
        <div>
          <svg class="w-4 h-4 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 5 C 21 3.9069372 20.093063 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z"></path></svg>
        </div>
      </div>
      <sidebar-item-label v-show="SidebarLabelsOpen" v-for="(label, index) in Labels" :key="index" :LabelDetails="label"/>
    </div>
    <div class="flex flex-col flex-grow p-4 overflow-auto">
      <div class="flex justify-between">
        <div class="flex">
          <svg class="w-4 h-4 mr-2 fill-current text-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 44.988281 13.984375 C 44.726563 13.992188 44.476563 14.101563 44.292969 14.292969 L 25 33.585938 L 5.707031 14.292969 C 5.519531 14.097656 5.261719 13.992188 4.992188 13.988281 C 4.582031 13.992188 4.21875 14.238281 4.0625 14.613281 C 3.910156 14.992188 4 15.421875 4.292969 15.707031 L 24.292969 35.707031 C 24.683594 36.097656 25.316406 36.097656 25.707031 35.707031 L 45.707031 15.707031 C 46.003906 15.421875 46.09375 14.980469 45.9375 14.601563 C 45.777344 14.222656 45.402344 13.976563 44.988281 13.984375 Z"></path></svg>
          <span class="text-xs text-dark font-semibold">Filters</span>
        </div>
        <div>
          <svg class="w-4 h-4 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 5 C 21 3.9069372 20.093063 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z"></path></svg>
        </div>
      </div>
      <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-normal rounded hover:bg-gray-50" href="#">
        <svg class="w-4 h-4 mr-2 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M30,48c-0.178,0-0.356-0.047-0.515-0.143l-10-6C19.184,41.677,19,41.351,19,41V23.396L3.272,6.686C3.097,6.5,3,6.255,3,6V3 c0-0.552,0.448-1,1-1h42c0.552,0,1,0.448,1,1v3c0,0.255-0.097,0.5-0.272,0.686L31,23.396V47c0,0.36-0.194,0.693-0.507,0.87 C30.34,47.957,30.17,48,30,48z M46,6h0.01H46z"></path></svg>
        <span class="text-black">Filter 1</span>
      </a>
    </div>
  </div>
</template>

<script>
import SidebarItemLabel from './SidebarItemLabel.vue';
import SidebarItemProject from './SidebarItemProject.vue';
export default {
  name: 'Sidebar',
  data: () => ({
    SidebarProjectsOpen: true,
    SidebarFiltersOpen: true,
    SidebarLabelsOpen: true,
    Projects: [
      {
      name: 'Genesis Stack & Taxonomy',
      color: 'bg-red-500'
      },{
      name: 'Genesis Telegram',
      color: 'bg-blue-500'
      },
      {
      name: 'King\'s Hawaiian Project',
      color: 'bg-green-500'
      },
    ],
    Labels: [
      {
        name: 'Priority Label 1',
        color: 'text-red-800'
      },
      {
        name: 'Special Label 2',
        color: 'text-purple-800'
      }
    ],
    Filters: [

    ]
  }),
  components: {
    SidebarItemProject,
    SidebarItemLabel
  },
  computed: {
    
  },
  methods: {

  }
}
</script>