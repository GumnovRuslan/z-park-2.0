<script lang="ts">
  import { MODAL_CONTENT_SHOP } from "$lib/bd/modalContentData.js";
  import CardShop from "$lib/components/CardShop.svelte";

  interface IProps {
    name: string
  }

  let { name }: IProps = $props()
</script>

<div class="content">
  {#each MODAL_CONTENT_SHOP as section}
    <div class="content__list">
      <h2 class="content__title">{section.typeName}</h2>
      <div class="content__items">
        {#each section.items as item}
          <CardShop data={item}/>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  @use "/static/styles/mixins" as mixins;

  .content {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 20px 10px;

    &__title {
      font-weight: 700;
      margin-bottom: 30px;

      @include mixins.media-breakpoint-up(xl) {
        font-size: 40px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        font-size: 28px;
      }

      @include mixins.media-breakpoint-down(md) {
        font-size: 25px;
      }
    }

    &__items {
      display: grid;
      gap: 10px;

      @include mixins.media-breakpoint-up(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include mixins.media-breakpoint-between(sm, md) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include mixins.media-breakpoint-down(sm) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
</style>