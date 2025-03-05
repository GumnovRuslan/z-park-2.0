<script lang="ts">
  import { MODAL_CONTENT } from "$lib/bd/modalContentData.js";
  
  interface IProps {
    name: string
  }

  let { name }: IProps = $props()

  let data = $derived(MODAL_CONTENT[name])
</script>

<div class="content">
  {#if data.title}
    <h2 class="content__title">{data.title}</h2>
  {/if}

  {#if data.src}
    <span class="content__img_wrapper">
      <img src={data.src} alt={`картинка ${data.title}`} class="content__img">
    </span>
  {/if}

  {#if data.text}
    <p class="content__description">{data.text}</p>
  {/if}
  
</div>

<style lang="scss">
  @use "/static/styles/mixins" as mixins;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    &__title {
      font-weight: 700;
      text-align: center;

      @include mixins.media-breakpoint-up(xl) {
        font-size: 40px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        font-size: 30px;
      }

      @include mixins.media-breakpoint-down(md) {
        font-size: 25px;
      }
    }

    &__img_wrapper {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      overflow: hidden;
      width: 100%;
      min-height: 300px;
      max-width: 700px;
      aspect-ratio: 16/9;
      background: #000;

      & > img {
        position: absolute;
        left: 0;
        top: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    &__description {
      font-size: 20px;
      line-height: 125%;
    }
  }
</style>