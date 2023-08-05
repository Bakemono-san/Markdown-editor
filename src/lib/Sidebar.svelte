<script>
  import Switch from "./Switch.svelte";
  import Delete from "./icons/Delete.svelte";
  import File from "./icons/File.svelte";
  import { delete_item, documentList } from "./store/Docs";
  import { createEventDispatcher } from "svelte";

  const dispacher = createEventDispatcher();
  export let sidebarIsOpen;
</script>

<!-- {#if sidebarIsOpen} -->

<aside
  class="min-w-[250px] py-9 px-5 min-h-screen flex flex-col justify-between bg-gray-800 text-white duration-500"
  class:-translate-x-full={sidebarIsOpen}
>
  <div>
    <p class="mb-10 sm:hidden">Markdown</p>

    <p class="mb-10 text-gray-400">My Documents</p>

    <button
      class="mb-4 w-full py-3 px-6 bg-orange-500 rounded"
      on:click={() => dispacher("newDocument")}
    >
      <!-- icon -->
      <p>+ New Document</p>
    </button>

    <!-- boucle -->
    {#each $documentList as doc}
      <button
        class="flex w-full text-left items-center gap-5 p-3 group font-serif hover:bg-gray-700 hover:p-3 hover:text-gray-400 rounded"
        on:click|stopPropagation={() =>
          dispacher("sendData", {
            documentValue: doc.documentValue,
            documentName: doc.documentName,
          })}
      >
        <button
          on:click={() => delete_item(doc.documentName)}
          class="hidden group-hover:block"
        >
          <Delete />
        </button>

        <div class="group-hover:hidden">
          <File />
        </div>

        <div>
          <p class="text-gray-400">{doc.date}</p>
          <p>
            {doc.documentName}
          </p>
        </div>
      </button>
    {/each}
    <!-- /boucle -->
  </div>
  <Switch />
</aside>
<!-- {/if} -->
