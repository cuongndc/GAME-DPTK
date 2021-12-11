<template>
  <img class="avatar" :src="props.src" />
</template>

<script setup>
  const props = defineProps({
    src: String
  })

</script>
