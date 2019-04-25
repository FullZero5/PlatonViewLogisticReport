<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-btn color="success" @click="$refs.inputUpload.click()">
          <v-icon>attach_file</v-icon>Выберите файл
        </v-btn>
        <input v-show="false" ref="inputUpload" accept=".csv" type="file" @change="loadCSV($event)">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FileLoader",
  components: {},
  data() {
    return {
      headers: [
        { key: "startDate", type: "Data" },
        { key: "endDate", type: "Data" },
        { key: "numberCar", type: "String" },
        { key: "respoder", type: "String" },
        { key: "distance", type: "Number" },
        { key: "title", type: "String" },
        { key: "pointEntry", type: "Array" },
        { key: "exitPoint", type: "Array" }
      ],
      parse_csv: []
    };
  },
  methods: {
    ...mapActions(["addToItems"]),
    convetoType(type, data) {
      if (typeof data !== "undefined") {
        switch (type) {
          case "Number":
            let ns = data.replace(/,/g, ".");
            return parseFloat(ns); //Number(data);
            break;
          case "Array":
            return new Array(data);
            break;
          case "Data":
            let values = data.split(/[^0-9]/),
              year = parseInt(values[2], 10),
              month = parseInt(values[1], 10) - 1, // Month is zero based, so subtract 1
              day = parseInt(values[0], 10),
              hours = parseInt(values[3], 10),
              minutes = parseInt(values[4], 10),
              seconds = parseInt(values[5], 10);
            return new Date(year, month, day, hours, minutes, seconds);
            break;
          default:
            return data;
        }
      }
    },
    csvJSON(csv) {
      let vm = this;
      let lines = csv.split("\n");
      var result = [];
      lines.map(function(line, indexLine) {
        if (indexLine < 1) return; // Jump header line
        var obj = {};
        var currentline = line.split(";");
        vm.headers.map(function(header, indexHeader) {
          //console.log(typeof(currentline[indexHeader]));
          obj[header["key"]] = vm.convetoType(
            header["type"],
            currentline[indexHeader]
          );
        });
        result.push(obj);
      });
      result.pop(); // remove the last item because undefined values
      return result; // JavaScript object
    },
    loadCSV(e) {
      let vm = this;
      if (window.FileReader) {
        const reader = new FileReader();
        reader.readAsText(e.target.files[0], "cp1251");
        // Handle errors load
        reader.onload = function(event) {
          let csv = event.target.result;
          //vm.parse_csv = vm.csvJSON(csv);
          vm.addToItems(vm.csvJSON(csv));
        };
        reader.onerror = function(evt) {
          if (evt.target.error.name == "NotReadableError") {
            alert("Canno't read file !");
          }
        };
      } else {
        alert("FileReader are not supported in this browser.");
      }
    }
  }
};
</script>

