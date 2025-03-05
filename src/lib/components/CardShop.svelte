<script lang="ts">
  import type { IItemShop } from "$lib/types/modalContent.js";

  interface IProps {
    data: IItemShop
  }

  let { data }: IProps = $props()
</script>

<div class="card">
  <span class="card__img_wrapper">
    <img src={!!data.img ? data.img : '/img/favicon.webp'} alt="" class="card__img">
  </span>
  <h3 class="card__name">{data.name}</h3>
  <div class="card__params">
    <p class="card__price">{data.price_text}</p>
    <p class="card__size">{data.size_text}</p>
  </div>
  {#if data.description}
    <div class="card__description">
      <div class="card__description_inner">
        <p class="card__description_text">{data.description}</p>
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  @use "/static/styles/mixins" as mixins;

  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #ababab;

    @include mixins.media-breakpoint-up(xl) {
      padding: 30px 20px;
    }

    @include mixins.media-breakpoint-between(md, xl) {
      padding: 20px 15px;
    }

    @include mixins.media-breakpoint-down(md) {
      padding: 20px 15px;
    }

    &:hover > &__description {
      padding: 40px 30px;
      width: 100%;
      height: 100%;
    }

    &__img_wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 20px;

      @include mixins.media-breakpoint-up(xl) {
        height: 240px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        height: 160px;
      }

      @include mixins.media-breakpoint-down(md) {
        height: 160px;
      }
    }

    .card__name {
      flex: content;
      font-weight: 700;

      @include mixins.media-breakpoint-up(xl) {
        margin-bottom: 20px;
        font-size: 20px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        margin-bottom: 15px;
        font-size: 16px;
      }

      @include mixins.media-breakpoint-down(md) {
        margin-bottom: 10px;
        font-size: 16px;
      }
    }

    &__params {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      @include mixins.media-breakpoint-up(xl) {
        font-size: 20px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        font-size: 16px;
      }

      @include mixins.media-breakpoint-down(md) {
        font-size: 14px;
      }
    }

    &__description {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-radius: inherit;
      background: #ff3131e0;
      overflow: hidden;
      transition: 0.4s;
    }

    &__description_inner {
      height: 100%;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 0;
      }
    }

    &__description_text {
      text-align: justify;
      font-size: 20px;
      line-height: 125%;
      color: var(--color-white)
    }
  }
</style>