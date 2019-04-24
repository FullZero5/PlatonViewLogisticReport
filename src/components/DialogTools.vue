<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn fab dark v-on="on">
          <v-icon>settings</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Настройки</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            Загрузка файла
            <small>логистического отчета</small>
          </v-stepper-step>
          <v-stepper-content step="1">
            <v-card class="mb-5" height="200px">
              <v-container grid-list-xl text-xs-center v-if="getLengtData!==0">
                <v-layout row wrap>
                  <v-flex xs10 offset-xs1>
                    <v-btn color="primary" @click="e6 = 2">
                      <v-icon>done_all</v-icon>Готово
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
              <FileLoader v-else/>
            </v-card>
          </v-stepper-content>
          <v-stepper-step :complete="e6 > 2" step="2">
            Выберите число
            <small>построить маршрут за определенную дату</small>
          </v-stepper-step>
          <v-stepper-content step="2">
            <v-card color="lighten-1" class="mb-5">
              <Calender/>
            </v-card>
            <v-btn color="primary" @click="e6 = 1">Назад</v-btn>
            <v-btn flat @click="dialog = false">Готово</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import FileLoader from "./FileLoader";
import Calender from "./Calendar";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DialogTolols",
  components: {
    FileLoader,
    Calender
  },
  data() {
    return {
      dialog: false,
      e6: 1
    };
  },
  computed: {
    ...mapGetters(["getLengtData"])
  }
};
</script>

