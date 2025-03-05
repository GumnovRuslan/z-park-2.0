<script lang="ts">

  let { isOpen = $bindable() } = $props()
</script>

<button class="close-btn" type="button" aria-label='close-button' onclick={() => isOpen = false}>
  <span class="close-btn__line"></span>
  <span class="close-btn__line"></span>
</button>

<style lang='scss'>
  @use "/static/styles/mixins" as mixins;
  .close-btn {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #525252;

    @include mixins.media-breakpoint-up(xl) {
      top: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
    }

    @include mixins.media-breakpoint-between(md, xl) {
      top: 8px;
      right: 8px;
      width: 25px;
      height: 25px;
    }

    @include mixins.media-breakpoint-down(md) {
      top: 5px;
      right: 5px;
      width: 23px;
      height: 23px;
    }

    &:hover {
      color: #000;
    }
    
    &__line {
      width: 80%;
      border-radius: 50px;
      background: currentColor;
      transition: color 0.2s;

      @include mixins.media-breakpoint-up(md) {
        height: 3px;
      }

      @include mixins.media-breakpoint-down(md) {
        height: 2px;
      }

      &:nth-child(1) {
        transform: translateY(1.5px) rotate(45deg);
      }

      &:nth-child(2) {
        transform: translateY(-1.5px) rotate(-45deg);
      }

      
    }
  }
</style>