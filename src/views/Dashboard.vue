<template>
  <div class="dashboard mb-4"> 
    <h2 class="display-1 text-center ma-4">Dashboard</h2>
    <v-container class="my-5">
      <v-layout row wrap class="pa-1">
        <v-flex xs12 md6 class="pa-1">
          <v-card dark color="white" class="pa-4 black--text">
            <div class="caption">Project Title</div>
            <div>HELLO</div>
          </v-card>
        </v-flex>

        <v-flex xs6 md2 sm4 class="pa-1">
          <v-card dark color="primary" class="pa-4 black--text">
            <div class="caption">Author</div>
            <div>Ash</div>
          </v-card>
        </v-flex>

        <v-flex xs6 md2 sm4 class="pa-1">
          <v-card dark color="red" class="pa-4 black--text">
            <div class="caption">Due date</div>
            <div>1 May, 2020</div>
          </v-card>
        </v-flex>

        <v-flex xs12 md2 sm4 class="pa-1">
          <v-card dark color="green" class="pa-4 black--text">
            <div class="caption">Status</div>
            <div>Done</div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  
  components: {
    
  }
}
</script>

<style scoped>

</style>
