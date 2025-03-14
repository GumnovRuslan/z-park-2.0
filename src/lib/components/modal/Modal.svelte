<script lang="ts">
  import CloseBtn from "./CloseBtn.svelte";
  import ModalContent from "./modalContent/ModalContent.svelte";
  import ModalContentShop from "./modalContent/ModalContentShop.svelte";
  import ModalContentContact from "./modalContent/ModalContentContact.svelte";

  interface IProps {
    modalData: {
      isOpenModal: boolean
      name: string
      type: string
    }
  }

  let { modalData = $bindable() }: IProps = $props()
</script>

<div class="modal modal__backdrop" class:modal--open={modalData.isOpenModal}>
  <div class="modal__modal">
    <CloseBtn bind:isOpen={modalData.isOpenModal}/>
    <div class="modal__content">
      {#if modalData.type == "content" && !!modalData.name}
        <ModalContent name={modalData.name}/>
      {:else if modalData.type == "shop" && !!modalData.name}
        <ModalContentShop name={modalData.name}/>
      {:else if modalData.type == "contact"}
        <ModalContentContact/>
      {/if}
    </div> 
  </div>
</div>

<style lang="scss">
  @use "/static/styles/mixins" as mixins;
  .modal {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    &--open {
      visibility: visible;
      opacity: 1;
    }

    &__backdrop {
      width: 100%;
      height: 100%;
      background: #00000079;
    }

    &__modal {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 90%;
      max-height: 90vh;
      background: #fff;
      border: 1px solid #000;
      border-radius: 15px;

      @include mixins.media-breakpoint-up(xl) {
        padding: 50px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        padding: 35px;
      }

      @include mixins.media-breakpoint-down(md) {
        padding: 20px;
      }
    }

    &__content {
      height: 100%;
      background: #ffffff;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 0;
      }
    }
  }
</style>