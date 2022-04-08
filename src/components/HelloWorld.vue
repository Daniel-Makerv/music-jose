<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#385F73" dark>
          <v-card-title class="text-h6">
            Música ilimitada de José José
          </v-card-title>

          <v-card-subtitle
            >Escuche sus canciones y álbumes favoritos cuando y donde sea, en
            línea.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text> ¡Escuchar! </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- canciones -->
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h6" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              <v-card-subtitle v-text="item.album"></v-card-subtitle>
              <v-card-actions>
                <v-btn
                  class="ml-2 mt-3"
                  fab
                  icon
                  height="40px"
                  right
                  width="40px"
                  v-on:click="playMusic(item.song)"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>

                <!-- <v-btn
                  v-else
                  class="ml-2 mt-5"
                  outlined
                  rounded
                  small
                  v-on:click="pauseMusic(item.song)"
                >
                  <v-icon>mdi-pause</v-icon>
                </v-btn> -->
              </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#191919",
        src: require("@/assets/imagenes/jose-el-triste.png"),
        title: "El Triste",
        artist: "José José",
        album: "El triste",
        song: require("@/assets/songs/el-triste.mp3"),
      },
      {
        color: "#2366A9",
        src: require("@/assets/imagenes/tu-ganas-jose.png"),
        title: "Tu Ganas",
        artist: "José José",
        album: "Reflexiones",
        song: require("@/assets/songs/tu-ganas.mp3"),
      },

      {
        color: "#D2BD29",
        src: require("@/assets/imagenes/jose-la-nave.png"),
        title: "La nave del Olvido",
        artist: "José José",
        album: "La nave del Olvido",
        song: require("@/assets/songs/la-nave-del-olvido.mp3"),
      },
    ],
  }),

  methods: {
    playMusic(song) {
      let audio = new Audio(song);
      audio.play();
    },
    pauseMusic(song) {
      let audio = new Audio(song);
      audio.pause();
    },
  },
};
</script>

