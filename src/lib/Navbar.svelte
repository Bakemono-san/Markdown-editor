<script>
  import Delete from "./icons/Delete.svelte";
  import File from "./icons/File.svelte";
  import Save from "./icons/Save.svelte";

  let openNav = false
</script>

<nav class="flex justify-between bg-gray-700 text-white">
    <div class="flex items-center justify-between gap-8">
      <!--burger-menu  -->
      <button
        on:click={() => openNav = !openNav} 
        class="w-[54px] sm:w-[72px] self-stretch bg-gray-600 p-3 sm:p-5 relative group"
      >
        <div class="absolute mx-3 inset-x-0 top-4 h-[1.8px] bg-white duration-300 group-hover:translate-y-1 sm:top-6"  class:opacity-0={openNav} />
        <div class="absolute mx-3 inset-x-0 top-1/2 -translate-y-1/2 h-[1.8px] bg-white duration-300 group-hover:opacity-0"  class:active-bar-1={openNav} />
        <div class="absolute mx-3 inset-x-0 top-1/2 -translate-y-1/2 h-[1.8px] bg-white duration-300 group-hover:opacity-0"  class:active-bar-2={openNav} />
        <div class="absolute mx-3 inset-x-0 bottom-4 h-[1.8px] bg-white duration-300 group-hover:-translate-y-1 sm:bottom-6"  class:opacity-0={openNav} />
      </button>
  
      <!-- logo -->
      <div class="hidden md:block font-bold uppercase tracking-widest">Markdown</div>

      <!-- separator -->
      <svg viewBox="0 0 1 40"width="1" height="40" class="hidden md:block">
        <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="40" stroke="#7C8187"/>
      </svg>

      <!-- document info -->
      <form class="flex items-center justify-center gap-4">
        <File />
        <div class="w-40 space-y-0.5">
          <label for="new_document" class="text-gray-400 leading-none hidden sm:inline">Document Name</label>
          <input id="new_document" type="text" class="w-full border-b leading-none border-transparent hover:border-white focus:border-orange-500 focus:outline-none bg-transparent placeholder:text-white " placeholder="New document">
        </div>
      </form>
    </div>
    <div class="flex items-center gap-2 sm:gap-4  p-2 sm:p-4">
      <!-- btn-delete -->
      <!-- TODO: transform into a component -->
      <button class="p-1 rounded-full duration-300 hover:bg-gray-200 text-gray-400 hover:text-black" aria-label="Delete document">
        <Delete />
      </button>
      <!-- btn-save -->
      <!-- TODO: transform into a component -->
      <button class="p-3 sm:px-6 flex items-center gap-2 bg-orange-500 rounded ">
        <Save />
        <span class="text-white hidden sm:inline">Save changes</span>
      </button>
    </div>
  </nav>

<style lang="postcss">
  .active-bar-1 {
    @apply !opacity-100 rotate-45
  }
  .active-bar-2 {
    @apply !opacity-100 -rotate-45
  }
</style>
