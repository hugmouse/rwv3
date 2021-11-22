<template>
  <div id="nav">
    <router-link :to="{ name: 'EventList' }">Events</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
  }

  #app {
    color: #83b9f1;
  }

  #nav a {
    font-weight: bold;
    color: #83b9f1;
  }

  #nav a.router-link-exact-active {
    color: #58f6ae;
  }
}

@media (prefers-color-scheme: light) {
  #app {
    color: #2c3e50;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
}
</style>
