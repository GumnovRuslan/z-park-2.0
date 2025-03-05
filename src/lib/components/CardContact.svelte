<script lang="ts">
  import type { IContact } from "$lib/types/contactsType.js";

  let { icon, title, text, links }: IContact = $props()
</script>

<div class="item">
  <span class="item__icon">
    {@html icon}
  </span>
  <div class="item__content">
    {#if title}
      <h2 class="item__title">{title}</h2>
    {/if}
    {#if text}
      <p class="item__text">{text}</p>
    {/if}
    {#if links?.length}
      <div class="item__links">
        {#each links as item}
          <a href={item.link} class="item__link">
            <span class="item__link_icon">{@html item.icon}</span>
            <span class="item__link_text">{item.text}</span>
          </a>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @use "/static/styles/mixins" as mixins;

  .item {
    display: flex;
    gap: 10px;
    box-shadow: 1px 1px 4px #c3c3c3;
    border-radius: 10px;

    @include mixins.media-breakpoint-up(xl) {
      padding: 20px;
    }

    @include mixins.media-breakpoint-between(md, xl) {
      padding: 15px;
    }

    @include mixins.media-breakpoint-down(md) {
      padding: 10px;
    }

    &__icon {
      display: inline-block;

      @include mixins.media-breakpoint-up(xl) {
        max-width: 30px;
        max-height: 30px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        max-width: 20px;
        max-height: 20px;
      }

      @include mixins.media-breakpoint-down(md) {
        max-width: 20px;
        max-height: 20px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__title {
      text-transform: uppercase;
      font-weight: 700;

      @include mixins.media-breakpoint-up(xl) {
        font-size: 18px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        font-size: 16px;
      }

      @include mixins.media-breakpoint-down(md) {
        font-size: 14px;
      }
    }

    &__text {
      color: #686868;

      @include mixins.media-breakpoint-up(xl) {
        font-size: 17px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        font-size: 15px;
      }

      @include mixins.media-breakpoint-down(md) {
        font-size: 13px;
      }
    }

    &__links {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__link {
      display: flex;
      gap: 5px;
      align-items: center;
      text-decoration: none;
      color: #000;
    }

    &__link_icon {
      display: inline-block;
      width: 20px;
      height: 20px;
    }
  }
</style>