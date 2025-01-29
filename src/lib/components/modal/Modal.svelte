<script lang="ts">
  import CloseBtn from "./CloseBtn.svelte";

  interface IProps {
    isOpen: boolean
  }

  let { isOpen = $bindable() }: IProps = $props()
</script>

<div class="modal modal__backdrop" class:modal--open={isOpen}>
  <div class="modal__modal">
    <CloseBtn bind:isOpen={isOpen}/>
    <div class="modal__content">

    </div> 
  </div>
</div>

<style lang="scss">
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
      background: #000;
      padding: 50px;
      border: 1px solid red;
    }

    &__content {
      height: 100%;
      background: blue;
    }
  }
</style>