<template>
  <navigation></navigation>
  <div class="flex w-screen h-screen text-gray-700">
    <sidebar></sidebar>
    <div class="flex flex-col flex-grow">
      <div class="flex-grow p-6 overflow-auto">
        <div class="grid grid-cols-3 gap-6">
          <div class="h-24 col-span-3 bg-white container mx-auto">
            <div class="flex justify-between py-3">
              <div class="flex items-center">
                <div class="rounded-full w-3 h-3 ml-5 mr-3 bg-primary flex items-center justify-center font-mono">&nbsp;</div>
                <p class="text-sm font-semibold">Today's Tasks</p>
                <span class="ml-2 text-xs text-gray-400">MM/DD/YYYY</span>
              </div>
              <div class="hidden md:block md:flex">
                <a href="" class="flex items-center mb-1 mx-2 text-sm font-light text-gray-700 hover:underline hover:text-primary">
                  <svg class="fill-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M 10.5 7 C 6.9280619 7 4 9.9280619 4 13.5 L 4 30.5 C 4 34.071938 6.9280619 37 10.5 37 L 12 37 L 12 42.5 C 12 44.46599 14.427297 45.67893 16 44.5 L 26 37 L 37.5 37 C 41.071938 37 44 34.071938 44 30.5 L 44 13.5 C 44 9.9280619 41.071938 7 37.5 7 L 10.5 7 z M 10.5 10 L 37.5 10 C 39.450062 10 41 11.549938 41 13.5 L 41 30.5 C 41 32.450062 39.450062 34 37.5 34 L 25.5 34 A 1.50015 1.50015 0 0 0 24.599609 34.300781 L 15 41.5 L 15 35.5 A 1.50015 1.50015 0 0 0 13.5 34 L 10.5 34 C 8.5499381 34 7 32.450062 7 30.5 L 7 13.5 C 7 11.549938 8.5499381 10 10.5 10 z M 15.5 16.998047 A 1.50015 1.50015 0 1 0 15.5 19.998047 L 32.5 19.998047 A 1.50015 1.50015 0 1 0 32.5 16.998047 L 15.5 16.998047 z M 15.5 23.998047 A 1.50015 1.50015 0 1 0 15.5 26.998047 L 28.5 26.998047 A 1.50015 1.50015 0 1 0 28.5 23.998047 L 15.5 23.998047 z"></path></svg>
                  Comments
                </a>
                <a href="" class="flex items-center mb-1 mx-2 text-sm font-light text-gray-700 hover:underline hover:text-primary">
                  <svg class="fill-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M 8 6 A 2.0002 2.0002 0 1 0 8 10 L 27 10 A 2.0002 2.0002 0 1 0 27 6 L 8 6 z M 8 14 A 2.0002 2.0002 0 1 0 8 18 L 23 18 A 2.0002 2.0002 0 1 0 23 14 L 8 14 z M 33.970703 14 A 2.0002 2.0002 0 0 0 32.585938 14.585938 L 25.585938 21.585938 A 2.0002 2.0002 0 1 0 28.414062 24.414062 L 32 20.828125 L 32 40 A 2.0002 2.0002 0 1 0 36 40 L 36 20.828125 L 39.585938 24.414062 A 2.0002 2.0002 0 1 0 42.414062 21.585938 L 35.414062 14.585938 A 2.0002 2.0002 0 0 0 33.970703 14 z M 8 22 A 2.0002 2.0002 0 1 0 8 26 L 19 26 A 2.0002 2.0002 0 1 0 19 22 L 8 22 z M 8 30 A 2.0002 2.0002 0 1 0 8 34 L 15 34 A 2.0002 2.0002 0 1 0 15 30 L 8 30 z M 8 38 A 2.0002 2.0002 0 1 0 8 42 L 11 42 A 2.0002 2.0002 0 1 0 11 38 L 8 38 z"></path></svg>
                  Sort
                </a>
                <a href="" class="flex items-center mb-1 mx-2 text-sm font-light text-gray-700 hover:underline hover:text-primary">
                  <svg class="fill-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 10 2 C 8.6983906 2 7.5978609 2.8387486 7.1835938 4 L 3 4 A 1.0001 1.0001 0 1 0 3 6 L 7.1835938 6 C 7.5978609 7.1612514 8.6983906 8 10 8 C 11.654 8 13 6.654 13 5 C 13 3.346 11.654 2 10 2 z M 16 4 A 1.0001 1.0001 0 1 0 16 6 L 21 6 A 1.0001 1.0001 0 1 0 21 4 L 16 4 z M 15 9 C 13.698391 9 12.597861 9.8387486 12.183594 11 L 3 11 A 1.0001 1.0001 0 1 0 3 13 L 12.183594 13 C 12.597861 14.161251 13.698391 15 15 15 C 16.654 15 18 13.654 18 12 C 18 10.346 16.654 9 15 9 z M 21 11 A 1.0001 1.0001 0 1 0 21 13 A 1.0001 1.0001 0 1 0 21 11 z M 7 16 C 5.6983906 16 4.5978609 16.838749 4.1835938 18 L 3 18 A 1.0001 1.0001 0 1 0 3 20 L 4.1835938 20 C 4.5978609 21.161251 5.6983906 22 7 22 C 8.654 22 10 20.654 10 19 C 10 17.346 8.654 16 7 16 z M 13 18 A 1.0001 1.0001 0 1 0 13 20 L 21 20 A 1.0001 1.0001 0 1 0 21 18 L 13 18 z"></path></svg>
                  Options
                </a>
              </div>
            </div>
            <hr>
            <div class="flex flex-col mt-4">
              <div class="bg-white border border-gray-300 rounded p-4">
                <div class="flex-none lg:flex">
                <div class="flex-auto ml-3 justify-evenly py-2">
                  <div class="flex flex-wrap ">
                    <div class="w-full flex-none text-xs text-dark font-medium ">
                      Task
                    </div>
                    <h2 class="flex-auto text-lg text-dark font-medium">Task Title</h2>
                  </div>
                  <div class="p-4 pb-2 border-t border-gray-200 "></div>
                    <div class="flex justify-between text-sm font-medium">
                      <div class="flex item-center justify-center">
                        <div class="mr-2">
                          <button class="bg-white border border-primary px-3 py-1 text-xs font-medium text-primary rounded-xl hover:bg-gray-50">Today</button>
                        </div>
                        <div class="mr-2">
                          <button class="bg-white border border-primary px-3 py-1 text-xs font-medium text-primary rounded-xl hover:bg-gray-50">Inbox</button>
                        </div>
                      </div>
                      <div class="flex item-center justify-center">
                          <div class="w-4 mr-2 transform hover:text-primary hover:scale-110">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                          </div>
                          <div class="w-4 mr-2 transform hover:text-primary hover:scale-110">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                          </div>
                          <div class="w-4 mr-2 transform hover:text-primary hover:scale-110">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex py-4">
                <div class="mr-2">
                  <button class="bg-primary px-3 py-1 text-xs text-white rounded-md font-medium hover:bg-gray-700">Save Task</button>
                </div>
                <div class="mr-2">
                  <button class="px-3 py-1 text-xs text-gray-400 rounded-md hover:text-gray-500">Cancel</button>
                </div>
              </div>
            </div>
            <div class="flex relative w-full h-10">
              <a class="flex items-center flex-shrink-0 w-full h-auto px-5 text-sm font-light rounded-sm text-gray-900 hover:bg-gray-50 hover:text-primary" href="#">
                <svg class="w-3 h-3 absolute left-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path></svg>
                <span class="ml-5 mr-3 flex items-center justify-center">Add a Task</span>
                <svg class="w-5 h-5 absolute right-3 fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10A2 2 0 1 0 12 14 2 2 0 1 0 12 10zM18 10A2 2 0 1 0 18 14 2 2 0 1 0 18 10zM6 10A2 2 0 1 0 6 14 2 2 0 1 0 6 10z"></path></svg>
              </a>
            </div>
          </div>            
        </div>
      </div>
    </div>
  </div>
  <settings @ToggleUserSettings="console.log('yes')" v-show="UserSettingsOpen"></settings>
</template>

<script>
import Navigation from '../components/Navigation/Navigation.vue';
import Settings from '../components/Settings.vue';
import Sidebar from '../components/Sidebar/Sidebar.vue';
export default {
  name: 'Dashboard',
  data: () => ({
    UserSettingsOpen: false
  }),
  components: {
    Navigation,
    Settings,
    Sidebar
  },
  computed: {
    
  },
  methods: {

  }
}
</script>