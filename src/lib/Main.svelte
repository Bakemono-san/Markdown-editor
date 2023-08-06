<script>
  import Hide from "./icons/Hide.svelte";
  import Show from "./icons/Show.svelte";
  import { marked } from "marked";
  import { isLight } from "./store/theme";
  import { fade } from "svelte/transition";

  export let documentValue;
  $: output = marked.parse(documentValue);
  let showPreview = false;
</script>

<main class="flex relative grow" class:dark={!$isLight}>
  <!-- markdown editor -->
  <section class="flex flex-col w-full">
    <header
      class="flex p-3 h-10 dark:bg-gray-800 bg-gray-100 text-gray-400 text-sm uppercase tracking-wider font-medium items-center justify-between dark:text-gray-300"
    >
      <h2>Markdown</h2>
      {#if !showPreview}
        <button
          on:click={() => (showPreview = !showPreview)}
          class="p-1 rounded-full duration-300 hover:bg-gray-200 hover:text-black"
          aria-label="Delete document"
        >
          <Show />
        </button>
      {/if}
    </header>
    <textarea
      bind:value={documentValue}
      class="w-full h-full p-4 focus:outline-none resize-none dark:bg-gray-900 bg-white dark:text-gray-300 text-gray-600"
    />
  </section>

  <!-- preview  -->

  <section
    class="absolute inset-0 translate-x-full sm:static sm:w-full sm:translate-x-0 duration-300 flex flex-col sm:border-l dark:border-white border-gray-300"
    class:translate-x-0={showPreview}
    class:sm:hidden={!showPreview}
  >
    <header
      class="flex p-3 h-10 dark:bg-gray-800 bg-gray-100 items-center justify-between dark:text-gray-300 text-gray-400 text-sm uppercase tracking-wider font-medium"
    >
      <h2>Preview</h2>
      <button
        on:click={() => (showPreview = !showPreview)}
        class="p-1 rounded-full duration-300 hover:bg-gray-200 hover:text-black"
        aria-label="Delete document"
      >
        <Hide />
      </button>
    </header>
    <div
      class="w-full h-full p-4 dark:bg-gray-900 bg-white dark:text-gray-300 text-gray-600 preview"
    >
      {@html output}
    </div>
  </section>

  <style>
    .preview * {
      @apply bg-gray-800;
    }
    .preview h1,
    h2,
    h3 {
      font-weight: bold;
    }
    .preview h1 {
      font-size: 28px;
    }
    .preview h2 {
      font-size: 24px;
    }
    .preview h3 {
      font-size: 20px;
    }

    .preview blockquote {
      @apply bg-gray-700 border border-l-4 border-orange-500 rounded-sm p-6  font-medium;
    }

    .preview ul {
      list-style-type: disc;
      margin-block: 16px;
      padding-left: 40px;
    }

    .preview li {
      display: list-item;
    }
  </style>
</main>
