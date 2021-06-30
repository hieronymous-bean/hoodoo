<template>
  <nav class="bg-gray-100 border-b border-gray-300">
    <div class="mx-auto">
      <div class="flex items-center justify-between h-12">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-16">
            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 18.585938 20 L 9 20 A 1.0001 1.0001 0 1 0 9 22 L 22 22 L 22 9 A 1.0001 1.0001 0 0 0 20.984375 7.9863281 A 1.0001 1.0001 0 0 0 20 9 L 20 18.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z M 44.980469 3.9902344 A 1.0001 1.0001 0 0 0 44.292969 4.2929688 L 30 18.585938 L 30 9 A 1.0001 1.0001 0 0 0 28.984375 7.9863281 A 1.0001 1.0001 0 0 0 28 9 L 28 22 L 41 22 A 1.0001 1.0001 0 1 0 41 20 L 31.414062 20 L 45.707031 5.7070312 A 1.0001 1.0001 0 0 0 44.980469 3.9902344 z M 9 28 A 1.0001 1.0001 0 1 0 9 30 L 18.585938 30 L 4.2929688 44.292969 A 1.0001 1.0001 0 1 0 5.7070312 45.707031 L 20 31.414062 L 20 41 A 1.0001 1.0001 0 1 0 22 41 L 22 28 L 9 28 z M 28 28 L 28 41 A 1.0001 1.0001 0 1 0 30 41 L 30 31.414062 L 42.292969 43.707031 L 44.292969 45.707031 A 1.0001 1.0001 0 0 0 45.109375 46.009766 A 1.0001 1.0001 0 0 0 45.207031 45.996094 A 1.0001 1.0001 0 0 0 45.707031 44.292969 L 43.763672 42.351562 A 1.0001 1.0001 0 0 0 43.707031 42.292969 L 31.414062 30 L 41 30 A 1.0001 1.0001 0 1 0 41 28 L 28 28 z"></path></svg>
          </div>
          <div class="flex-shrink-0 w-16">
            <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z"></path></svg>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </button>
              </div>

              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">Tom Cook</div>
            <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
          <button class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="flex w-screen h-screen text-gray-700">
    <div class="flex flex-col items-center w-16 bg-gray-50 pb-4 overflow-auto border-r border-gray-300">
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
    <div class="flex flex-col w-56 border-r border-gray-300 bg-gray-50">
      <div class="flex flex-col flex-grow p-4 overflow-auto">
        <div class="flex justify-between">
          <div class="flex">
            <svg class="w-4 h-4 mr-2 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 44.988281 13.984375 C 44.726563 13.992188 44.476563 14.101563 44.292969 14.292969 L 25 33.585938 L 5.707031 14.292969 C 5.519531 14.097656 5.261719 13.992188 4.992188 13.988281 C 4.582031 13.992188 4.21875 14.238281 4.0625 14.613281 C 3.910156 14.992188 4 15.421875 4.292969 15.707031 L 24.292969 35.707031 C 24.683594 36.097656 25.316406 36.097656 25.707031 35.707031 L 45.707031 15.707031 C 46.003906 15.421875 46.09375 14.980469 45.9375 14.601563 C 45.777344 14.222656 45.402344 13.976563 44.988281 13.984375 Z"></path></svg>
            <span class="text-xs font-semibold">Projects</span>
          </div>
          <div>
            <svg class="w-4 h-4 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 5 C 21 3.9069372 20.093063 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z"></path></svg>
          </div>
        </div>
        <a class="flex items-center flex-shrink-0 h-10 text-sm font-normal rounded hover:bg-gray-50" href="#">
          <div class="rounded-full w-2 h-2 ml-5 mr-3 bg-primary flex items-center justify-center font-mono">&nbsp;</div>
          <span class="leading-none">Project 1</span>
        </a>
        <a class="flex items-center flex-shrink-0 h-10 text-sm font-normal rounded hover:bg-gray-50" href="#">
          <div class="rounded-full w-2 h-2 ml-5 mr-3 bg-gray-400 flex items-center justify-center font-mono">&nbsp;</div>
          <span class="leading-none">Project 2</span>
        </a>
      </div>
      
      <div class="flex flex-col flex-grow p-4 overflow-auto">
        <div class="flex justify-between">
          <div class="flex">
            <svg class="w-4 h-4 mr-2 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 44.988281 13.984375 C 44.726563 13.992188 44.476563 14.101563 44.292969 14.292969 L 25 33.585938 L 5.707031 14.292969 C 5.519531 14.097656 5.261719 13.992188 4.992188 13.988281 C 4.582031 13.992188 4.21875 14.238281 4.0625 14.613281 C 3.910156 14.992188 4 15.421875 4.292969 15.707031 L 24.292969 35.707031 C 24.683594 36.097656 25.316406 36.097656 25.707031 35.707031 L 45.707031 15.707031 C 46.003906 15.421875 46.09375 14.980469 45.9375 14.601563 C 45.777344 14.222656 45.402344 13.976563 44.988281 13.984375 Z"></path></svg>
            <span class="text-xs font-semibold">Labels</span>
          </div>
          <div>
            <svg class="w-4 h-4 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 5 C 21 3.9069372 20.093063 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z"></path></svg>
          </div>
          
        </div>
        <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-normal rounded hover:bg-gray-50" href="#">
          <svg class="w-4 h-4 mr-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M23,3h-6c-0.512,0-1.024,0.195-1.414,0.586l-12,12c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0 c0.391-0.391,11.609-11.609,12-12C26.805,14.024,27,13.512,27,13V7C27,4.791,25.209,3,23,3z M23,9c-1.105,0-2-0.895-2-2 c0-1.105,0.895-2,2-2s2,0.895,2,2C25,8.105,24.105,9,23,9z"></path></svg>
          <span class="leading-none">Label 1</span>
        </a>
      </div>
      <div class="flex flex-col flex-grow p-4 overflow-auto">
        <div class="flex justify-between">
          <div class="flex">
            <svg class="w-4 h-4 mr-2 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 44.988281 13.984375 C 44.726563 13.992188 44.476563 14.101563 44.292969 14.292969 L 25 33.585938 L 5.707031 14.292969 C 5.519531 14.097656 5.261719 13.992188 4.992188 13.988281 C 4.582031 13.992188 4.21875 14.238281 4.0625 14.613281 C 3.910156 14.992188 4 15.421875 4.292969 15.707031 L 24.292969 35.707031 C 24.683594 36.097656 25.316406 36.097656 25.707031 35.707031 L 45.707031 15.707031 C 46.003906 15.421875 46.09375 14.980469 45.9375 14.601563 C 45.777344 14.222656 45.402344 13.976563 44.988281 13.984375 Z"></path></svg>
            <span class="text-xs font-semibold">Filters</span>
          </div>
          
          <div>
            <svg class="w-4 h-4 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 5 C 21 3.9069372 20.093063 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z"></path></svg>
          </div>
        </div>
        <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-normal rounded hover:bg-gray-50" href="#">
          <svg class="w-4 h-4 mr-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M30,48c-0.178,0-0.356-0.047-0.515-0.143l-10-6C19.184,41.677,19,41.351,19,41V23.396L3.272,6.686C3.097,6.5,3,6.255,3,6V3 c0-0.552,0.448-1,1-1h42c0.552,0,1,0.448,1,1v3c0,0.255-0.097,0.5-0.272,0.686L31,23.396V47c0,0.36-0.194,0.693-0.507,0.87 C30.34,47.957,30.17,48,30,48z M46,6h0.01H46z"></path></svg>
          <span class="leading-none">Filter 1</span>
        </a>
      </div>
    </div>
    <div class="flex flex-col flex-grow">
      <div class="flex-grow p-6 overflow-auto">
        <div class="grid grid-cols-3 gap-6">
          <div class="h-24 col-span-3 bg-white container mx-auto">
            <div class="flex justify-between px-4 py-3">
              <div class="flex items-center">
                <div class="rounded-full w-3 h-3 ml-5 mr-3 bg-primary flex items-center justify-center font-mono">&nbsp;</div>
                <p class="text-sm font-semibold">Today's Tasks</p>
                <span class="ml-2 text-xs text-gray-400">MM/DD/YYYY</span>
              </div>
              <div class="hidden md:block md:flex">
                <a href="" class="flex items-center mb-1 mx-2 text-sm font-normal text-gray-700 hover:underline hover:text-primary">
                  <svg class="fill-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M 10.5 7 C 6.9280619 7 4 9.9280619 4 13.5 L 4 30.5 C 4 34.071938 6.9280619 37 10.5 37 L 12 37 L 12 42.5 C 12 44.46599 14.427297 45.67893 16 44.5 L 26 37 L 37.5 37 C 41.071938 37 44 34.071938 44 30.5 L 44 13.5 C 44 9.9280619 41.071938 7 37.5 7 L 10.5 7 z M 10.5 10 L 37.5 10 C 39.450062 10 41 11.549938 41 13.5 L 41 30.5 C 41 32.450062 39.450062 34 37.5 34 L 25.5 34 A 1.50015 1.50015 0 0 0 24.599609 34.300781 L 15 41.5 L 15 35.5 A 1.50015 1.50015 0 0 0 13.5 34 L 10.5 34 C 8.5499381 34 7 32.450062 7 30.5 L 7 13.5 C 7 11.549938 8.5499381 10 10.5 10 z M 15.5 16.998047 A 1.50015 1.50015 0 1 0 15.5 19.998047 L 32.5 19.998047 A 1.50015 1.50015 0 1 0 32.5 16.998047 L 15.5 16.998047 z M 15.5 23.998047 A 1.50015 1.50015 0 1 0 15.5 26.998047 L 28.5 26.998047 A 1.50015 1.50015 0 1 0 28.5 23.998047 L 15.5 23.998047 z"></path></svg>
                  Comments
                </a>
                <a href="" class="flex items-center mb-1 mx-2 text-sm font-normal text-gray-700 hover:underline hover:text-primary">
                  <svg class="fill-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M 8 6 A 2.0002 2.0002 0 1 0 8 10 L 27 10 A 2.0002 2.0002 0 1 0 27 6 L 8 6 z M 8 14 A 2.0002 2.0002 0 1 0 8 18 L 23 18 A 2.0002 2.0002 0 1 0 23 14 L 8 14 z M 33.970703 14 A 2.0002 2.0002 0 0 0 32.585938 14.585938 L 25.585938 21.585938 A 2.0002 2.0002 0 1 0 28.414062 24.414062 L 32 20.828125 L 32 40 A 2.0002 2.0002 0 1 0 36 40 L 36 20.828125 L 39.585938 24.414062 A 2.0002 2.0002 0 1 0 42.414062 21.585938 L 35.414062 14.585938 A 2.0002 2.0002 0 0 0 33.970703 14 z M 8 22 A 2.0002 2.0002 0 1 0 8 26 L 19 26 A 2.0002 2.0002 0 1 0 19 22 L 8 22 z M 8 30 A 2.0002 2.0002 0 1 0 8 34 L 15 34 A 2.0002 2.0002 0 1 0 15 30 L 8 30 z M 8 38 A 2.0002 2.0002 0 1 0 8 42 L 11 42 A 2.0002 2.0002 0 1 0 11 38 L 8 38 z"></path></svg>
                  Sort
                </a>
                <a href="" class="flex items-center mb-1 mx-2 text-sm font-normal text-gray-700 hover:underline hover:text-primary">
                  <svg class="fill-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 10 2 C 8.6983906 2 7.5978609 2.8387486 7.1835938 4 L 3 4 A 1.0001 1.0001 0 1 0 3 6 L 7.1835938 6 C 7.5978609 7.1612514 8.6983906 8 10 8 C 11.654 8 13 6.654 13 5 C 13 3.346 11.654 2 10 2 z M 16 4 A 1.0001 1.0001 0 1 0 16 6 L 21 6 A 1.0001 1.0001 0 1 0 21 4 L 16 4 z M 15 9 C 13.698391 9 12.597861 9.8387486 12.183594 11 L 3 11 A 1.0001 1.0001 0 1 0 3 13 L 12.183594 13 C 12.597861 14.161251 13.698391 15 15 15 C 16.654 15 18 13.654 18 12 C 18 10.346 16.654 9 15 9 z M 21 11 A 1.0001 1.0001 0 1 0 21 13 A 1.0001 1.0001 0 1 0 21 11 z M 7 16 C 5.6983906 16 4.5978609 16.838749 4.1835938 18 L 3 18 A 1.0001 1.0001 0 1 0 3 20 L 4.1835938 20 C 4.5978609 21.161251 5.6983906 22 7 22 C 8.654 22 10 20.654 10 19 C 10 17.346 8.654 16 7 16 z M 13 18 A 1.0001 1.0001 0 1 0 13 20 L 21 20 A 1.0001 1.0001 0 1 0 21 18 L 13 18 z"></path></svg>
                  Options
                </a>
              </div>
            </div>
            <hr>
          </div>            
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data: () => ({

  }),
  components: {
  },
  computed: {
    
  },
  methods: {

  }
}
</script>