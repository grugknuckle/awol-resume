<template>
  <v-menu 
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field v-model="date" :label="label"
        prepend-icon="mdi-calendar"
        :readonly="readOnly"
        v-bind="attrs"
        v-on="on"
        @change="$emit('update:date', date)"
      ></v-text-field>
    </template>

    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu=false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import moment from 'moment'

const isoDateString = 'YYYY-MM-DD'
export default {
  name: 'DatePicker',
  data() {
    return {
      minDate: '0001-01-01',
      maxDate: moment().format(isoDateString),
      menu: false,
    }
  },
  props: {
    readOnly: { type: Boolean, default: true },
    label: { type: String, default: '' },
    date: { type: String, default: '' }
  },
  methods: {

  }
}
</script>
