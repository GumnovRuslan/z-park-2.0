<script lang="ts">
  import Map from "$lib/components/Map.svelte";
  import Modal from "$lib/components/modal/Modal.svelte";

  let isOpenModal: boolean = $state(false);
</script>

<Modal bind:isOpen={isOpenModal}/>
<Map bind:isOpenModal={isOpenModal}/>

<style lang="scss">

</style>
