<template>
  <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-light rounded hover:bg-gray-50" href="#">
    <svg :class="LabelDetails.color" class="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M23,3h-6c-0.512,0-1.024,0.195-1.414,0.586l-12,12c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0 c0.391-0.391,11.609-11.609,12-12C26.805,14.024,27,13.512,27,13V7C27,4.791,25.209,3,23,3z M23,9c-1.105,0-2-0.895-2-2 c0-1.105,0.895-2,2-2s2,0.895,2,2C25,8.105,24.105,9,23,9z"></path></svg>
    <span class="text-black">{{LabelDetails.name}}</span>
  </a>
</template>

<script>
export default {
  name: 'SidebarItemLabel',
  data: () => ({

  }),
  components: {
  },
  props: [
    'LabelDetails'
  ],
  computed: {
    
  },
  methods: {

  }
}
</script>