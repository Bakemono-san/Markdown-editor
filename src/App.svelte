<script>
  import Header from "./lib/Header.svelte";
  import Main from "./lib/Main.svelte";
  import Sidebar from "./lib/Sidebar.svelte";
  import DeleteModal from "./lib/DeleteModal.svelte";
  import SavePopUp from "./lib/SavePopUp.svelte";

  let documentName = "";
  let documentValue = "";
  let sidebarIsOpen = true;

  let toggleModal = false;
  let showPopUp = false;

  let createNewDoc = () => {
    documentValue = "";
    documentName = "";
  };

  let sendData = (payload) => {
    documentValue = payload.detail.documentValue;
    documentName = payload.detail.documentName;
  };
</script>

<SavePopUp bind:showPopUp bind:documentName bind:documentValue />
<DeleteModal bind:documentName bind:toggleModal />

<div class="flex overflow-x-hidden">
  <Sidebar
    bind:sidebarIsOpen
    on:sendData={sendData}
    on:newDocument={createNewDoc}
  />
  <div
    id="app"
    class="w-full h-full shrink-0 duration-500"
    class:-translate-x-[250px]={sidebarIsOpen}
  >
    <Header
      bind:sidebarIsOpen
      bind:documentName
      on:save={() => (showPopUp = !showPopUp)}
      on:delete={() => (toggleModal = !toggleModal)}
    />
    <Main bind:documentValue />
  </div>
</div>

<style>
  :global(#app) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
