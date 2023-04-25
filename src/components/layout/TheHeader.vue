<template>
  <div>
    <header>
      <nav>
        <h1>
          <router-link to="/" class="logo-link">FindYourCoach.com</router-link>
        </h1>
        <ul>
          <li>
            <router-link to="/coaches" class="list-link"
              >All coaches</router-link
            >
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/requests" class="list-link" >Requests</router-link>
          </li>
          <li v-else>
            <router-link to="/auth" class="list-link">Login</router-link>
          </li>
          <li v-if="isLoggedIn">
            <base-button class="list-link" @click="logout">Logout</base-button>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script>
export default{
  computed: {
    isLoggedIn(){
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
      this.$router.replace('/coaches')
    }
  }
}
</script>
<style scoped>
div {
  box-shadow: 0 0 10px

}
header {
  width: 100%;
  height: 5rem;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

header a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

.list-link {
  border-color: white;
  border-radius: 0;
}
.list-link:active,
.list-link:hover,
.list-link.router-link-active {
  border: 1px solid white;
  background-color: white;
  color: blue;
}

h1 {
  color: white;
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

.logo-link:hover,
.logo-link:active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
