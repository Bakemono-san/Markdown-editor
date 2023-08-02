<nav class="flex justify-between bg-gray-700 text-white">
    <div class="flex items-center justify-between gap-8">
        <!--burger-menu  -->
        <button class="self-stretch bg-gray-600 p-3 sm:p-5 ">
          <div class="w-8 h-4 bg-white"></div>
        </button>
  
        <!-- logo -->
        <div class="hidden md:block font-bold uppercase tracking-widest">Markdown </div>
        <!-- separator -->
  
        <svg viewBox="0 0 1 40"width="1" height="40" class="hidden md:block">
          <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="40" stroke="#7C8187"/>
        </svg>
  
        <!-- document info -->
        <form class="flex items-center justify-center gap-4">
          <div class="w-4 h-4 bg-green-300"></div>
          <div class="w-40 space-y-0.5">
            <label for="new_document" class="text-gray-400 leading-none hidden sm:inline">Document Name</label>
            <input id="new_document" type="text" class="w-full border-b leading-none border-transparent hover:border-white focus:border-orange-500 focus:outline-none bg-transparent placeholder:text-white " placeholder="New document">
          </div>
        </form>
    </div>
    <div class="flex items-center gap-2 sm:gap-4  p-2 sm:p-4">
        <!-- btn-delete -->
        <button>
          <div class="w-4 h-4 bg-red-300"></div>
        </button>
        <!-- btn-save -->
        <button class="p-3 sm:px-6 flex items-center gap-2 bg-orange-500 rounded ">
          <div class="w-4 h-4 bg-red-300"></div>
          <span class="text-white hidden sm:inline">Save changes</span>
        </button>
    </div>
  </nav>