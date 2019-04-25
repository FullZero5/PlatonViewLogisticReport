<template>
  <v-layout wrap>
    <v-flex sm4 xs12 class="text-sm-left text-xs-center">
      <v-date-picker
        locale="ru-ru"
        v-model="date"
        :events="Object.keys(MyEvents)"
        event-color="green"
      ></v-date-picker>
    </v-flex>
    <v-flex sm4 xs12 class="text-xs-center">{{Object.keys(MyEvents)}}</v-flex>
    <v-flex sm4 xs12 class="text-sm-right text-xs-center">{{ MyEvents[date]}}</v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Calender",
  components: {},
  data: () => ({
    date: "2019-03-01"
  }),
  computed: {
    ...mapGetters(["MyEvents"])
  }
};
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
</style>

