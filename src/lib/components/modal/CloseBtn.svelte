<script lang="ts">

  let { isOpen = $bindable() } = $props()
</script>

<button class="close-btn" type="button" aria-label='close-button' onclick={() => isOpen = false}>
  <span class="close-btn__line"></span>
  <span class="close-btn__line"></span>
</button>

<style lang='scss'>
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: red;
    
    &__line {
      width: 80%;
      height: 3px;
      border-radius: 50px;
      background: white;

      &:nth-child(1) {
        transform: translateY(1.5px) rotate(45deg);
      }

      &:nth-child(2) {
        transform: translateY(-1.5px) rotate(-45deg);
      }
    }
  }
</style>