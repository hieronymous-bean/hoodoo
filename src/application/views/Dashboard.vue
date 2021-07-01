<template>
  <nav class="bg-primary">
    <div class="mx-auto">
      <div class="flex items-center justify-between h-10">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-16">
            <svg class="w-5 h-5 mx-auto fill-current text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 18.585938 20 L 9 20 A 1.0001 1.0001 0 1 0 9 22 L 22 22 L 22 9 A 1.0001 1.0001 0 0 0 20.984375 7.9863281 A 1.0001 1.0001 0 0 0 20 9 L 20 18.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z M 44.980469 3.9902344 A 1.0001 1.0001 0 0 0 44.292969 4.2929688 L 30 18.585938 L 30 9 A 1.0001 1.0001 0 0 0 28.984375 7.9863281 A 1.0001 1.0001 0 0 0 28 9 L 28 22 L 41 22 A 1.0001 1.0001 0 1 0 41 20 L 31.414062 20 L 45.707031 5.7070312 A 1.0001 1.0001 0 0 0 44.980469 3.9902344 z M 9 28 A 1.0001 1.0001 0 1 0 9 30 L 18.585938 30 L 4.2929688 44.292969 A 1.0001 1.0001 0 1 0 5.7070312 45.707031 L 20 31.414062 L 20 41 A 1.0001 1.0001 0 1 0 22 41 L 22 28 L 9 28 z M 28 28 L 28 41 A 1.0001 1.0001 0 1 0 30 41 L 30 31.414062 L 42.292969 43.707031 L 44.292969 45.707031 A 1.0001 1.0001 0 0 0 45.109375 46.009766 A 1.0001 1.0001 0 0 0 45.207031 45.996094 A 1.0001 1.0001 0 0 0 45.707031 44.292969 L 43.763672 42.351562 A 1.0001 1.0001 0 0 0 43.707031 42.292969 L 31.414062 30 L 41 30 A 1.0001 1.0001 0 1 0 41 28 L 28 28 z"></path></svg>
          </div>
          <div class="flex-shrink-0 w-16">
            <svg class="w-5 h-5 mx-auto fill-current text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 C 40.999922 13.061489 41.00006 12.820623 41 12.507812 C 40.999859 11.776319 41.000062 10.809744 41 9.8457031 C 40.999875 7.9176211 41 6 41 6 A 1.0001 1.0001 0 0 0 40 5 L 36 5 A 1.0001 1.0001 0 0 0 35 6 C 35 6 35.000625 7.1570629 35 8.3144531 C 34.999946 8.4138611 35.000063 8.4892153 35 8.5878906 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 35.378906 11.419922 A 1.0001 1.0001 0 0 0 36.367188 11.560547 C 36.367188 11.560547 36.986309 10.761867 36.986328 10.761719 C 36.986348 10.76157 36.991388 10.708386 36.992188 10.697266 C 36.993688 10.675006 36.993841 10.668839 36.994141 10.662109 C 36.994592 10.648659 36.995894 10.642016 36.996094 10.634766 C 36.996335 10.620266 36.995945 10.606331 36.996094 10.587891 C 36.996392 10.551011 36.995852 10.499661 36.996094 10.435547 C 36.996578 10.307318 36.997647 10.125735 36.998047 9.9082031 C 36.99857 9.4731324 36.999687 8.8954613 37 8.3164062 C 37.000355 7.6582563 36.999934 7.4454733 37 7 L 39 7 C 39.000006 7.6422969 38.999908 8.4189176 39 9.8457031 C 39.000063 10.809787 38.999859 11.77615 39 12.507812 C 39.00007 12.873644 38.999904 13.179924 39 13.398438 C 39.000096 13.61695 39.000933 13.681016 39.001953 13.769531 A 1.0001 1.0001 0 0 0 39.386719 14.546875 L 44 18.146484 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z M 27 35 A 1 1 0 0 0 26 36 A 1 1 0 0 0 27 37 A 1 1 0 0 0 28 36 A 1 1 0 0 0 27 35 z"></path></svg>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button class="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <svg class="w-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 25 0 C 22.800781 0 21 1.800781 21 4 C 21 4.515625 21.101563 5.015625 21.28125 5.46875 C 15.65625 6.929688 12 11.816406 12 18 C 12 25.832031 10.078125 29.398438 8.25 31.40625 C 7.335938 32.410156 6.433594 33.019531 5.65625 33.59375 C 5.265625 33.878906 4.910156 34.164063 4.59375 34.53125 C 4.277344 34.898438 4 35.421875 4 36 C 4 37.375 4.84375 38.542969 6.03125 39.3125 C 7.21875 40.082031 8.777344 40.578125 10.65625 40.96875 C 13.09375 41.472656 16.101563 41.738281 19.40625 41.875 C 19.15625 42.539063 19 43.253906 19 44 C 19 47.300781 21.699219 50 25 50 C 28.300781 50 31 47.300781 31 44 C 31 43.25 30.847656 42.535156 30.59375 41.875 C 33.898438 41.738281 36.90625 41.472656 39.34375 40.96875 C 41.222656 40.578125 42.78125 40.082031 43.96875 39.3125 C 45.15625 38.542969 46 37.375 46 36 C 46 35.421875 45.722656 34.898438 45.40625 34.53125 C 45.089844 34.164063 44.734375 33.878906 44.34375 33.59375 C 43.566406 33.019531 42.664063 32.410156 41.75 31.40625 C 39.921875 29.398438 38 25.832031 38 18 C 38 11.820313 34.335938 6.9375 28.71875 5.46875 C 28.898438 5.015625 29 4.515625 29 4 C 29 1.800781 27.199219 0 25 0 Z M 25 2 C 26.117188 2 27 2.882813 27 4 C 27 5.117188 26.117188 6 25 6 C 23.882813 6 23 5.117188 23 4 C 23 2.882813 23.882813 2 25 2 Z M 27.34375 7.1875 C 32.675781 8.136719 36 12.257813 36 18 C 36 26.167969 38.078125 30.363281 40.25 32.75 C 41.335938 33.941406 42.433594 34.6875 43.15625 35.21875 C 43.515625 35.484375 43.785156 35.707031 43.90625 35.84375 C 44.027344 35.980469 44 35.96875 44 36 C 44 36.625 43.710938 37.082031 42.875 37.625 C 42.039063 38.167969 40.679688 38.671875 38.9375 39.03125 C 35.453125 39.753906 30.492188 40 25 40 C 19.507813 40 14.546875 39.753906 11.0625 39.03125 C 9.320313 38.671875 7.960938 38.167969 7.125 37.625 C 6.289063 37.082031 6 36.625 6 36 C 6 35.96875 5.972656 35.980469 6.09375 35.84375 C 6.214844 35.707031 6.484375 35.484375 6.84375 35.21875 C 7.566406 34.6875 8.664063 33.941406 9.75 32.75 C 11.921875 30.363281 14 26.167969 14 18 C 14 12.261719 17.328125 8.171875 22.65625 7.21875 C 23.320313 7.707031 24.121094 8 25 8 C 25.886719 8 26.679688 7.683594 27.34375 7.1875 Z M 21.5625 41.9375 C 22.683594 41.960938 23.824219 42 25 42 C 26.175781 42 27.316406 41.960938 28.4375 41.9375 C 28.792969 42.539063 29 43.25 29 44 C 29 46.222656 27.222656 48 25 48 C 22.777344 48 21 46.222656 21 44 C 21 43.242188 21.199219 42.539063 21.5625 41.9375 Z"></path></svg>
            </button>
            <div class="ml-3 relative w-16">
              <div>
                <a class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto mx-auto rounded hover:bg-gray-50" href="#">
                  <svg class="w-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 25 2.0078125 C 12.309296 2.0078125 2.0000002 12.317108 2 25.007812 C 2 37.698518 12.309295 48.007812 25 48.007812 C 37.690705 48.007812 48 37.698518 48 25.007812 C 48 12.317108 37.690704 2.0078125 25 2.0078125 z M 25 4.0078125 C 36.609824 4.0078125 46 13.397988 46 25.007812 C 46 30.740509 43.703999 35.925856 39.988281 39.712891 C 38.158498 38.369571 35.928049 37.69558 34.039062 37.023438 C 32.975192 36.644889 32.018651 36.269758 31.320312 35.851562 C 30.651504 35.451051 30.280089 35.039466 30.083984 34.566406 C 29.992134 33.419545 30.010738 32.496253 30.017578 31.40625 C 30.13873 31.285594 30.294155 31.200823 30.417969 31.054688 C 30.709957 30.710058 31.007253 30.29128 31.291016 29.820312 C 31.777604 29.012711 32.131673 28.024913 32.330078 27.023438 C 32.63305 26.869 32.956699 26.835578 33.203125 26.521484 C 33.658098 25.941577 33.965233 25.125482 34.101562 23.988281 C 34.222454 22.984232 33.898957 22.29366 33.482422 21.763672 C 33.930529 20.298851 34.48532 17.969341 34.296875 15.558594 C 34.193203 14.232288 33.859467 12.897267 33.056641 11.787109 C 32.290173 10.727229 31.045786 9.9653642 29.453125 9.6894531 C 28.441568 8.5409775 26.834704 8 24.914062 8 L 24.904297 8 L 24.896484 8 C 20.593741 8.078993 17.817552 9.8598398 16.628906 12.576172 C 15.498615 15.159149 15.741603 18.37477 16.552734 21.722656 C 16.116708 22.25268 15.775146 22.95643 15.898438 23.988281 C 16.035282 25.125098 16.34224 25.94153 16.796875 26.521484 C 17.043118 26.835604 17.366808 26.868911 17.669922 27.023438 C 17.868296 28.024134 18.222437 29.01059 18.708984 29.818359 C 18.992747 30.289465 19.289737 30.707821 19.582031 31.052734 C 19.705876 31.198874 19.861128 31.285522 19.982422 31.40625 C 19.988922 32.49568 20.007396 33.418614 19.916016 34.566406 C 19.720294 35.037723 19.34937 35.449526 18.681641 35.851562 C 17.984409 36.271364 17.029015 36.648577 15.966797 37.029297 C 14.079805 37.705631 11.85061 38.384459 10.015625 39.716797 C 6.2976298 35.929423 4 30.742497 4 25.007812 C 4.0000002 13.397989 13.390176 4.0078125 25 4.0078125 z M 24.921875 10.001953 C 26.766001 10.003853 27.92628 10.549863 28.244141 11.107422 L 28.488281 11.535156 L 28.974609 11.601562 C 30.230788 11.776108 30.932655 12.263579 31.435547 12.958984 C 31.938439 13.654389 32.217535 14.624895 32.302734 15.714844 C 32.473134 17.894741 31.849129 20.468905 31.453125 21.660156 L 31.201172 22.416016 L 31.882812 22.830078 C 31.813472 22.787858 32.203297 23.018609 32.115234 23.75 C 32.008564 24.639799 31.781184 25.093017 31.628906 25.287109 C 31.476629 25.481202 31.411442 25.45641 31.427734 25.455078 L 30.603516 25.523438 L 30.515625 26.345703 C 30.440195 27.052169 30.04285 28.015793 29.578125 28.787109 C 29.345762 29.172767 29.098543 29.516317 28.890625 29.761719 C 28.682707 30.00712 28.461282 30.159117 28.544922 30.115234 L 28.009766 30.394531 L 28.009766 31 C 28.009766 32.324321 27.955813 33.407291 28.095703 34.949219 L 28.107422 35.082031 L 28.154297 35.207031 C 28.547829 36.266071 29.369275 37.013258 30.292969 37.566406 C 31.216662 38.119555 32.276387 38.519377 33.369141 38.908203 C 35.170096 39.549023 37.047465 40.179657 38.478516 41.111328 C 34.832228 44.16545 30.135566 46.007812 25 46.007812 C 19.866422 46.007812 15.171083 44.167232 11.525391 41.115234 C 12.964568 40.188909 14.844735 39.556492 16.642578 38.912109 C 17.73461 38.520704 18.79156 38.119183 19.712891 37.564453 C 20.634221 37.009723 21.452728 36.262662 21.845703 35.207031 L 21.892578 35.082031 L 21.904297 34.949219 C 22.043042 33.408482 21.990234 32.325309 21.990234 31 L 21.990234 30.394531 L 21.455078 30.113281 C 21.538828 30.157091 21.317362 30.005196 21.109375 29.759766 C 20.901388 29.514336 20.654237 29.172879 20.421875 28.787109 C 19.957151 28.015571 19.559775 27.05118 19.484375 26.345703 L 19.396484 25.523438 L 18.572266 25.455078 C 18.587716 25.456378 18.523206 25.481158 18.371094 25.287109 C 18.218979 25.093064 17.991921 24.640183 17.884766 23.75 C 17.797356 23.01846 18.191557 22.784891 18.117188 22.830078 L 18.751953 22.445312 L 18.566406 21.724609 C 17.705952 18.412902 17.575833 15.399621 18.460938 13.376953 C 19.345167 11.356284 21.116417 10.074289 24.921875 10.001953 z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
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
    <div class="flex flex-col items-center w-16 bg-beige pb-4 overflow-auto border-r border-gray-200">
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
    <div class="flex flex-col w-56 border-r border-gray-200 bg-light">
      <div class="flex flex-col flex-grow py-3 pl-5 pr-2 overflow-auto">
        <div class="flex justify-between">
          <div class="flex">
            <svg class="w-4 h-4 mr-2 fill-current text-dark cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 44.988281 13.984375 C 44.726563 13.992188 44.476563 14.101563 44.292969 14.292969 L 25 33.585938 L 5.707031 14.292969 C 5.519531 14.097656 5.261719 13.992188 4.992188 13.988281 C 4.582031 13.992188 4.21875 14.238281 4.0625 14.613281 C 3.910156 14.992188 4 15.421875 4.292969 15.707031 L 24.292969 35.707031 C 24.683594 36.097656 25.316406 36.097656 25.707031 35.707031 L 45.707031 15.707031 C 46.003906 15.421875 46.09375 14.980469 45.9375 14.601563 C 45.777344 14.222656 45.402344 13.976563 44.988281 13.984375 Z"></path></svg>
            <span class="text-xs font-semibold">Projects</span>
          </div>
          <div class="w-5 bg-white hover:bg-gray-100 cursor-pointer">
            <svg class="w-4 ml-auto fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 5 C 21 3.9069372 20.093063 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z"></path></svg>
          </div>
        </div>
        <div class="flex relative w-full h-10">
          <svg class="w-4 h-4 absolute top-3 -left-4 fill-current text-gray-400 hover:text-gray-500 hover:bg-gray-100 cursor-move" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 7 4 C 5.34375 4 4 5.34375 4 7 C 4 8.65625 5.34375 10 7 10 C 8.65625 10 10 8.65625 10 7 C 10 5.34375 8.65625 4 7 4 Z M 16 4 C 14.34375 4 13 5.34375 13 7 C 13 8.65625 14.34375 10 16 10 C 17.65625 10 19 8.65625 19 7 C 19 5.34375 17.65625 4 16 4 Z M 25 4 C 23.34375 4 22 5.34375 22 7 C 22 8.65625 23.34375 10 25 10 C 26.65625 10 28 8.65625 28 7 C 28 5.34375 26.65625 4 25 4 Z M 16 13 C 14.34375 13 13 14.34375 13 16 C 13 17.65625 14.34375 19 16 19 C 17.65625 19 19 17.65625 19 16 C 19 14.34375 17.65625 13 16 13 Z M 25 13 C 23.34375 13 22 14.34375 22 16 C 22 17.65625 23.34375 19 25 19 C 26.65625 19 28 17.65625 28 16 C 28 14.34375 26.65625 13 25 13 Z M 25 22 C 23.34375 22 22 23.34375 22 25 C 22 26.65625 23.34375 28 25 28 C 26.65625 28 28 26.65625 28 25 C 28 23.34375 26.65625 22 25 22 Z"></path></svg>
          <a class="flex items-center flex-shrink-0 w-full h-auto text-sm font-light rounded-sm hover:bg-gray-100" href="#">
            <div class="rounded-full w-2 h-2 ml-3 mr-3 bg-primary flex items-center justify-center">&nbsp;</div>
            <span class="leading-none">Project 1</span>
            <svg class="w-5 h-5 absolute right-0 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10A2 2 0 1 0 12 14 2 2 0 1 0 12 10zM18 10A2 2 0 1 0 18 14 2 2 0 1 0 18 10zM6 10A2 2 0 1 0 6 14 2 2 0 1 0 6 10z"></path></svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col flex-grow p-4 overflow-auto">
        <div class="flex justify-between">
          <div class="flex">
            <svg class="w-4 h-4 mr-2 fill-current text-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 44.988281 13.984375 C 44.726563 13.992188 44.476563 14.101563 44.292969 14.292969 L 25 33.585938 L 5.707031 14.292969 C 5.519531 14.097656 5.261719 13.992188 4.992188 13.988281 C 4.582031 13.992188 4.21875 14.238281 4.0625 14.613281 C 3.910156 14.992188 4 15.421875 4.292969 15.707031 L 24.292969 35.707031 C 24.683594 36.097656 25.316406 36.097656 25.707031 35.707031 L 45.707031 15.707031 C 46.003906 15.421875 46.09375 14.980469 45.9375 14.601563 C 45.777344 14.222656 45.402344 13.976563 44.988281 13.984375 Z"></path></svg>
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
            <svg class="w-4 h-4 mr-2 fill-current text-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 44.988281 13.984375 C 44.726563 13.992188 44.476563 14.101563 44.292969 14.292969 L 25 33.585938 L 5.707031 14.292969 C 5.519531 14.097656 5.261719 13.992188 4.992188 13.988281 C 4.582031 13.992188 4.21875 14.238281 4.0625 14.613281 C 3.910156 14.992188 4 15.421875 4.292969 15.707031 L 24.292969 35.707031 C 24.683594 36.097656 25.316406 36.097656 25.707031 35.707031 L 45.707031 15.707031 C 46.003906 15.421875 46.09375 14.980469 45.9375 14.601563 C 45.777344 14.222656 45.402344 13.976563 44.988281 13.984375 Z"></path></svg>
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
              <div class="bg-white border border-gray-200  rounded p-4">
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
                          <button class="bg-white border border-accent px-3 py-1 text-xs font-medium text-accent rounded-xl hover:bg-gray-50">Inbox</button>
                        </div>
                      </div>
                      <div class="flex item-center justify-center">
                          <div class="w-4 mr-2 transform hover:text-accent hover:scale-110">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                          </div>
                          <div class="w-4 mr-2 transform hover:text-accent hover:scale-110">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                          </div>
                          <div class="w-4 mr-2 transform hover:text-accent hover:scale-110">
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
                  <button class="bg-primary px-3 py-1 text-xs text-white rounded-md font-medium hover:bg-gray-700">Add Task</button>
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