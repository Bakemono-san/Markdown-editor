<script>
  import Close from "./icons/Close.svelte";
  import File from "./icons/File.svelte";
  import { isLight } from "./store/theme";
  import { delete_item, documentList } from "./store/Docs";

  export let showPopUp;
  export let documentName, documentValue;

  const save = () => {
    if (documentName !== "" && documentValue !== "") {
      let documentExist = $documentList.find(
        (document) => document.documentName === documentName
      );

      if (documentExist) {
        documentExist.documentValue = documentValue;
        delete_item(documentExist.documentName);
        documentList.set([...$documentList, documentExist]);
      } else {
        let date = new Date().toLocaleDateString("en-EN", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });

        documentList.set([
          ...$documentList,
          { documentName, documentValue, date },
        ]);
      }
      showPopUp = !showPopUp;
    }
  };
</script>

<div
  class="bg-black/25 -bottom-full right-0 m-4 rounded fixed flex items-center justify-center z-10 duration-500"
  class:dark={$isLight}
  class:bottom-0={showPopUp}
>
  <div
    class="w-[294px] p-6 flex flex-col gap-5 text-gray-600 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded"
  >
    <!-- button -->
    <button
      class="w-full flex items-center justify-end"
      on:click={() => (showPopUp = !showPopUp)}
    >
      <Close />
    </button>
    <!-- content -->
    <p class="text-gray-600 dark:text-gray-100">
      Your changes have been saved. You can download the file by clicking the
      link below.
    </p>
    <!-- button-with-component -->
    <button
      class="flex items-center justify-center gap-2 w-full px-6 py-3 text-gray-100 bg-orange-500 rounded"
      on:click={save}
    >
      <File />
      <span>Download the file</span>
    </button>
  </div>
</div>
