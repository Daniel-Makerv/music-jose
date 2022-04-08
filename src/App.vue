<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="./assets/imagenes/jose6.png"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title>{{ title }}</v-app-bar-title>

        <v-spacer></v-spacer>
        <v-switch v-model="$vuetify.theme.dark"></v-switch>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab to="/">Canciones</v-tab>
            <v-tab to="/galeria">Fotografías</v-tab>
            <v-tab to="/info">Sobre mi</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <br />
      <v-main>
        <router-view />
      </v-main>
    </v-card>
  </v-app>
</template>
<script>
export default {
  props: {
    title: String,
    likes: Number,
  },

  methods: {
    getBannerJose() {
      let arrayValor = [1, 2, 3, 4, 5, 6];
      let rand = Math.floor(Math.random() * arrayValor.length);
      let position = arrayValor[rand];

      const objectImagenes = {
        1: "jose1.png",
        2: "jose2.png",
        3: "jose3.png",
        4: "jose4.png",
        5: "jose5.png",
        6: "jose6.png",
      };
      const randomImage = "./assets/" + objectImagenes[position];
      console.log(randomImage);
      return randomImage;
    },
  },
};
</script>
