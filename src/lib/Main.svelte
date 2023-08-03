<script>
    import Show from './icons/Show.svelte'
</script>

<main class="flex h-full">
    <!-- markdown editor -->
    <section class="w-full h-full">
        <header class="flex p-3 bg-gray-800 items-center justify-between  text-gray-300 ">
            <h2>Markdown</h2>
            <button class="p-1 rounded-full duration-300 hover:bg-gray-200 hover:text-black sm:hidden" aria-label="Delete document">
                <Show />
            </button>
        </header>
        <textarea  class="w-full p-4  h-full focus:outline-none resize-none bg-gray-900 text-gray-300"></textarea>
    </section>
    <!-- preview  -->
    <section class="w-full h-full border-l border-l-white hidden sm:block">
        <header class="flex p-3 bg-gray-800 items-center justify-between  text-gray-300 ">
            <h2>Preview</h2>
            <button class="p-1 rounded-full duration-300 hover:bg-gray-200 hover:text-black" aria-label="Delete document">
                <Show />
            </button>
        </header>
        <textarea  class="w-full p-4  h-full focus:outline-none resize-none bg-gray-900 text-gray-300"></textarea>
    </section>
</main>