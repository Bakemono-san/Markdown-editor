<script>
  import { scale, slide } from "svelte/transition";
  import Close from "./icons/Close.svelte";
  import { delete_item } from "./store/Docs";
  import { isLight } from "./store/theme";

  export let documentName;
  export let toggleModal;

  let handleDelete = (document) => {
    delete_item(document);
    toggleModal = !toggleModal;
  };
</script>

<!-- on:click={() => (toggleModal = !toggleModal)} -->
<div
  in:scale
  class="bg-black/25 inset-0 fixed flex items-center justify-center z-10"
  class:dark={$isLight}
  class:translate-y-full={!toggleModal}
>
  <div
    class="w-[294px] p-6 flex flex-col gap-5 text-gray-600 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded"
  >
    <!-- button -->
    <button
      class="w-full flex items-center justify-between"
      on:click={() => (toggleModal = !toggleModal)}
    >
      <h3>Delete this document?</h3>
      <Close />
    </button>
    <!-- content -->
    <p class="text-gray-600 dark:text-gray-100">
      Are you sure you want to delete the {documentName} document and its content
      ? This action cannot be reverted.
    </p>
    <!-- button-with-component -->
    <button
      class="flex items-center justify-center gap-2 w-full px-6 py-3 bg-orange-500 text-gray-100 rounded"
      on:click={() => handleDelete(documentName)}
    >
      <span>Confirm & Delete</span>
    </button>
  </div>
</div>
