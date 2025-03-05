<script lang="ts">
  import Map from "$lib/components/Map.svelte";
  import Modal from "$lib/components/modal/Modal.svelte";

  interface IModalData {
    isOpenModal: boolean
    name: string
    type: 'content' | 'shop' | string
  }

  let modalData: IModalData = $state({
    isOpenModal: false,
    name: '',
    type: ''
  })
</script>

<Modal bind:modalData={modalData}/>
<Map bind:modalData={modalData}/>

<style lang="scss">

</style>
