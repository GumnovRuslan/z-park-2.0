<script lang="ts">
  import CardContact from "$lib/components/CardContact.svelte";
  import { CONTACTS } from "$lib/bd/contacts.js";
</script>

<section class="contact">
  <div class="contact__map_wrapper">
    <iframe class="contact__map" title="Карта проеза" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2277.492641089302!2d30.2506870761861!3d55.192144005344325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c577f44c596ec1%3A0x79a93b31af3970bb!2zWi3Qn9CQ0KDQmg!5e0!3m2!1sru!2sru!4v1726220603404!5m2!1sru!2sru" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

  <div class="contact__items">
    {#each CONTACTS as item}
      <CardContact {...item}/>
    {/each}
  </div>
</section>

<style lang="scss">
  @use "/static/styles/mixins" as mixins;

  .contact {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    padding: 5px;

    @include mixins.media-breakpoint-down(lg) {
      flex-direction: column;
    }

    &__map_wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border: 1px solid #9d9d9d;
      box-shadow: 2px 2px 10px #9d9d9d;
      border-radius: 10px;
      width: 100%;
      aspect-ratio: 1/0.6;
    }

    &__map {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &__items {
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-width: 30%;

      @include mixins.media-breakpoint-down(lg) {
        width: 100%;
      }
    }
  }
</style>