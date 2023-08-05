<script>
  import Moon from "./icons/Moon.svelte";
  import Sun from "./icons/Sun.svelte";
  import { isLight, toggle_theme } from "./store/theme";
</script>

<div class="flex gap-[10px] items-center">
  <Moon isLight={$isLight} />
  <button
    class="w-[48px] h-6 border-none rounded-[16px] bg-gray-500"
    on:click={toggle_theme}
  >
    <span
      class="w-4 h-4 block rounded-full translate-x-1 bg-white duration-300"
      class:translate-x-7={$isLight}
    />
  </button>
  <Sun isLight={$isLight} />
</div>
