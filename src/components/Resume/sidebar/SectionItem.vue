<template>
  <v-layout>
    <v-flex v-if="hasIcon" xs2>
      <v-chip :light="dark" :dark="!dark" color="primary">
        <v-icon>{{ item.icon }}</v-icon>
      </v-chip>
    </v-flex>
    <v-flex :xs10="hasIcon" :xs12="!hasIcon">
      <div>{{ item.name }}</div>
      <p>
        <a v-if="item.link" class="grey--text" :href="item.link" target="_blank">{{ item.text }}</a>
        <span v-else class="grey--text">{{ item.text }}</span>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "SidebarSectionItem",
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    dark: { type: Boolean, default: () => true }
  },
  computed: {
    hasIcon() {
      return !!this.item.icon;
    }
  }
};
</script>

<style scoped>
</style>
