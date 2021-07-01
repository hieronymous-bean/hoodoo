<template>
<div class="fixed min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center">
   	<div class="absolute bg-black opacity-30 inset-0 z-0"></div>
      <div class="flex flex-col absolute opacity-100">
        <div class="flex-1 flex overflow-x-hidden">
            <div class="w-64 p-6 bg-gray-100 overflow-y-auto">
                <nav>
                    <h2 class="font-semibold text-gray-600 uppercase tracking-wide">Settings</h2>
                    <div class="mt-3">
                        <a href=""
                            class="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between bg-gray-200 rounded-lg">
                            <span>
                                <i class="h-6 w-6 fa fa-envelope-o fill-current text-gray-700" aria-hidden="true"></i>
                                <span class=" text-gray-900">Inbox</span>
                            </span>
                            <span
                                class="inline-block px-4 py-1 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">6</span>
                        </a>
                    </div>
                    <div class="mt-3">
                        <a href=""
                            class="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between hover:bg-gray-200 rounded-lg">
                            <span>
                                <i class="h-6 w-6 fa fa-flag-o fill-current text-gray-700" aria-hidden="true"></i>
                                <span class=" text-gray-900">Flagged</span>
                            </span>
                        </a>
                    </div>
                    <div class="mt-3">
                        <a href=""
                            class="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between hover:bg-gray-200 rounded-lg">
                            <span>
                                <i class="h-6 w-6 fa fa-pencil-square-o fill-current text-gray-700"
                                    aria-hidden="true"></i>
                                <span class=" text-gray-900">Drafts</span>
                            </span>
                            <span
                                class="inline-block px-4 py-1 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">2</span>
                        </a>
                    </div>
                    <div class="mt-3">
                        <a href=""
                            class="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between hover:bg-gray-200 rounded-lg">
                            <span>
                                <i class="h-6 w-6 fa fa-user-o fill-current text-gray-700" aria-hidden="true"></i>
                                <span class=" text-gray-900">Assigned</span>
                            </span>
                            <span
                                class="inline-block px-4 py-1 text-center py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">1</span>
                        </a>
                    </div>
                    <div class="mt-3">
                        <a href=""
                            class="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between hover:bg-gray-200 rounded-lg">
                            <span>
                                <i class="h-6 w-6 fa fa-check-circle-o fill-current text-gray-700"
                                    aria-hidden="true"></i>
                                <span class=" text-gray-900">Closed</span>
                            </span>
                        </a>
                    </div>
                    <div class="mt-3">
                        <a href=""
                            class="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between hover:bg-gray-200 rounded-lg">
                            <span>
                                <i class="h-6 w-6 fa fa-trash-o fill-current text-gray-700" aria-hidden="true"></i>
                                <span class=" text-gray-900">Junk</span>
                            </span>
                        </a>
                    </div>
                    <div class="mt-8">
                        <h2 class="font-semibold text-gray-600 uppercase tracking-wide">Folders</h2>
                        <div class="mt-3">
                            <a href=""
                                class="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between hover:bg-gray-200 rounded-lg">
                                <span class=" text-gray-900">Refunds</span>
                            </a>
                        </div>
                        <div class="mt-3">
                            <a href=""
                                class="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between hover:bg-gray-200 rounded-lg">
                                <span class=" text-gray-900">Discounts</span>
                            </a>
                        </div>
                        <div class="mt-3">
                            <a href=""
                                class="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between hover:bg-gray-200 rounded-lg">
                                <span class=" text-gray-900">Bugs</span>
                            </a>
                        </div>
                    </div>

                </nav>
            </div>
            <main class=" flex bg-gray-200">
                <div class="overflow-y-auto overflow-hidden">
                    <div class="px-4 py-2 flex items-center justify-between border-l border-r border-b">
                        <button class="text-sm flex items-center font-semibold text-gray-600">
                            <span></span>
                            <i class="ml-2 fa fa-angle-down justify-between" aria-hidden="true"></i>
                        </button>
                        <button class="text-sm flex items-center font-semibold text-gray-600">
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="pt-3 pb-4 ">
                        
                        <a href="#" class="block bg-white py-3 border-t">
                            <div class="px-4 py-2 flex  justify-between">
                                <span class="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                                <span class="text-sm font-semibold text-gray-600">2 days ago</span>
                            </div>
                            <span class="text-sm font-semibold text-gray-900 px-4 py-2">Refund</span>
                            <p class="px-4 py-2 text-sm font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing <br> dolor sit sit elo  amet consectetur adipisicin elit....</p>
                        </a>
                        <a href="#" class="block bg-white py-3 border-t">
                            <div class="px-4 py-2 flex  justify-between">
                                <span class="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                                <span class="text-sm font-semibold text-gray-600">2 days ago</span>
                            </div>
                            <span class="text-sm font-semibold text-gray-900 px-4 py-2">Refund</span>
                            <p class="px-4 py-2 text-sm font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing <br> dolor sit sit elo  amet consectetur adipisicin elit....</p>
                        </a>
                        <a href="#" class="block bg-white py-3 border-t">
                            <div class="px-4 py-2 flex  justify-between">
                                <span class="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                                <span class="text-sm font-semibold text-gray-600">2 days ago</span>
                            </div>
                            <span class="text-sm font-semibold text-gray-900 px-4 py-2">Refund</span>
                            <p class="px-4 py-2 text-sm font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing <br> dolor sit sit elo  amet consectetur adipisicin elit....</p>
                        </a>
                        <a href="#" class="block bg-white py-3 border-t">
                            <div class="px-4 py-2 flex  justify-between">
                                <span class="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                                <span class="text-sm font-semibold text-gray-600">2 days ago</span>
                            </div>
                            <span class="text-sm font-semibold text-gray-900 px-4 py-2">Refund</span>
                            <p class="px-4 py-2 text-sm font-semibold text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing <br> dolor sit sit elo  amet consectetur adipisicin elit....</p>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col py-3 w-auto inline-block overflow-y-auto overflow-hidden bg-gray-100">
                    <div class="flex justify-between ">
                        <button>
                            <i class="px-3 fa fa-reply text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                            <i class="px-3 fa fa-tag text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                            <i class="px-3 fa fa-user-circle text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                            <i class="px-3 fa fa-inbox text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-h text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                        </button>
                        <button>
                            <i class="fa fa-angle-down text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                            <i class="px-4 fa fa-angle-up text-sm font-semibold text-gray-600" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="shadow-lg">
                        <div class="pt-3 pb-4 ">
                            <a href="#" class="block bg-white py-3 border-t">
                                <div class="px-4 py-2 flex  justify-between">
                                    <span>Re: Student Discount?</span>
                                    <div>
                                        <span class="px-3 text-sm font-semibold">#1428</span>
                                        <span class="text-sm font-semibold px-4 py-1 text-gray-800 rounded-full bg-green-300">Active</span>    
                                    </div>
                                    
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="shadow-lg pt-4 ml-2 mr-2 rounded-lg">
                            <a href="#" class="block bg-white py-3 border-t pb-4">
                                <div class="px-4 py-2 flex  justify-between">
                                    <span class="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                                    <div class="flex">
                                        <span class="px-4 text-sm font-semibold text-gray-600"> yesterday</span>
                                        <img class="h-6 w-6 rounded-full object-cover"
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                                            alt="">
                                    </div>
                                </div>
                                <p class="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium <br> iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. <br> Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
                            </a>
                        </div>
                        <div class="shadow-lg pt-4 ml-2 mr-2 rounded-lg">
                            <a href="#" class="block bg-white py-3 border-t pb-4">
                                <div class="px-4 py-2 flex  justify-between">
                                    <span class="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                                    <div class="flex">
                                        <span class="px-4 text-sm font-semibold text-gray-600"> yesterday</span>
                                        <img class="h-6 w-6 rounded-full object-cover"
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                                            alt="">
                                    </div>
                                </div>
                                <p class="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium <br> iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. <br> Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
                            </a>
                        </div>
                        <div class="shadow-lg pt-4 ml-2 mr-2 rounded-lg">
                            <a href="#" class="block bg-white py-3 border-t pb-4">
                                <div class="px-4 py-2 flex  justify-between">
                                    <span class="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                                    <div class="flex">
                                        <span class="px-4 text-sm font-semibold text-gray-600"> yesterday</span>
                                        <img class="h-6 w-6 rounded-full object-cover"
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                                            alt="">
                                    </div>
                                </div>
                                <p class="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium <br> iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. <br> Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
                            </a>
                        </div>
                        <div class="shadow-lg pt-4 ml-2 mr-2 rounded-lg">
                            <a href="#" class="block bg-white py-3 border-t pb-4">
                                <div class="px-4 py-2 flex  justify-between">
                                    <span class="text-sm font-semibold text-gray-900">Gloria Roberston</span>
                                    <div class="flex">
                                        <span class="px-4 text-sm font-semibold text-gray-600"> yesterday</span>
                                        <img class="h-6 w-6 rounded-full object-cover"
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
                                            alt="">
                                    </div>
                                </div>
                                <p class="px-4 py-2 text-sm font-semibold text-gray-700">Lorem mmmmm ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci laudantium <br> iste delectus explicabo id molestiae cupiditate corrupti distinctio alias. <br> Temporibus quae tenetur quod cupiditate, nostrum tempore inventore maxime ut! </p>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
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