<template>
  <v-layout wrap>
    <v-flex sm4 xs12 class="text-sm-left text-xs-center"></v-flex>
    <v-flex sm4 xs12 class="text-xs-center"></v-flex>
    <v-flex sm4 xs12 class="text-sm-right text-xs-center"></v-flex>
    <v-flex xs12 class="mb-3">
      <v-sheet height="500">
        <v-calendar :now="today" :value="today" color="primary" locale="ru">
          <template v-slot:day="{ date }">
            <template v-for="event in MyEvents[date]">
              <v-menu :key="event.title" v-model="event.open" full-width offset-x>
                <template v-slot:activator="{ on }">
                  <div v-if="!event.time" v-ripple class="my-event" v-on="on" v-html="event[0].title"></div>
                </template>
                <v-card color="grey lighten-4" min-width="350px" flat>
                  <v-toolbar color="primary" dark>
                    <v-btn icon>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-toolbar-title v-html="event[0].title"></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-title primary-title>
                    <span v-html="event[0]"></span>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="secondary">Cancel</v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </template>
          </template>
        </v-calendar>
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
    today: "2019-04-01",
    events: [
      {
        title: "Vacation0",
        details: "Going to the beach!",
        date: "2019-04-03",
        open: false
      },
      {
        title: "Vacation1",
        details: "Going to the beach!",
        date: "2019-04-03",
        open: false
      }
    ]
  }),
  computed: {
    ...mapGetters(["MyEvents"]),
    eventsMap() {
      const map = {};
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
      console.log(map);
      return map;
    }
  },
  methods: {
    open(event) {
      alert(event.title);
    }
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

