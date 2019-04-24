<template>
  <v-layout wrap>
    <v-flex sm4 xs12 class="text-sm-left text-xs-center"></v-flex>
    <v-flex sm4 xs12 class="text-xs-center">
      <v-select v-model="type" :items="typeOptions" label="Календарь за"></v-select>
    </v-flex>
    <v-flex sm4 xs12 class="text-sm-right text-xs-center"></v-flex>
    <v-flex xs12 class="mb-3">
      <v-sheet height="500">
        <v-calendar
          ref="calendar"
          locale="ru-ru"
          v-model="start"
          :type="type"
          :end="end"
          color="primary"
          :weekdays="Wvalue"
        ></v-calendar>
      </v-sheet>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Calender",
  components: {},
  data: () => ({
    type: "month",
    start: "01.04.2019",
    end: "2019-01-06",
    Wvalue: [1, 2, 3, 4, 5, 6, 0],
    typeOptions: [
      { text: "День", value: "day" },
      { text: "4 дня", value: "4day" },
      { text: "Неделю", value: "week" },
      { text: "Mесяц", value: "month" }
    ]
  }),
  computed: {
    ...mapGetters(["MonthData"])
  },
  methods: {}
};
</script>

