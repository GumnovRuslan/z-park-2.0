<script lang="ts">
  import Point from "./Point.svelte";

  const points = [
    {
      path_imge: '/img/place/бар1.png',
      class_name: 'bar'
    },
    {
      path_imge: '/img/place/батуты1.png',
      class_name: 'trampolines'
    },
    {
      path_imge: '/img/place/башня1.png',
      class_name: 'tower'
    },
    {
      path_imge: '/img/place/горка1.png',
      class_name: 'slide'
    },
    {
      path_imge: '/img/place/дискотека1.png',
      class_name: 'disco'
    },
    {
      path_imge: '/img/place/игровая площадка1.png',
      class_name: 'playground'
    },
    {
      path_imge: '/img/place/кафе1.png',
      class_name: 'caffe1'
    },
    {
      path_imge: '/img/place/кафе1.png',
      class_name: 'caffe2'
    },
  ]

  interface IProps {
    isOpenModal: boolean
  }

  let { isOpenModal = $bindable() }: IProps = $props()
</script>

<div class="map">
  <div class="map__img-wrapper">
    <img class="map__img" src="/img/zpark-map.webp" alt="map">
    {#each points as pointData}
      <Point bind:isOpenModal={isOpenModal} data={pointData}/>
    {/each}
  </div>
</div>

<style lang="scss">
  @use "/static/styles/mixins" as mixins;
  .map {
    width: 100vw;
    height: 100vh;
    overflow: auto;

    &::-webkit-scrollbar { 
      width: 0;
      height: 0; 
    }

    &__img-wrapper {
      position: relative;

      width: max-content;
      height: max-content;
      // max-width: 2500px;
    }

    &__img {
      display: block;
      max-width: 2500px;
      // width: 110%;

      @include mixins.media-breakpoint-up(xxl) {
        // max-width: 120%;
      }

      @include mixins.media-breakpoint-down(xl) {
        // object-fit: cover;
      }
    }
  }
</style>