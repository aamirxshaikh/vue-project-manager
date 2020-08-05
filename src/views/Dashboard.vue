<template>
  <div class="dashboard mb-4"> 
    <h2 class="display-1 text-center ma-4">Dashboard</h2>
    <v-container class="my-5">
      <v-card :class="`mb-4 ${project.status} project pa-4 black--text text-center`" v-for="(project, index) in projects" :key="index">
        <v-layout row wrap>
          <v-flex xs12 md6 class="pa-1">
              <div class="caption">Project Title</div>
              <div>{{ project.title }}</div>
               <v-divider></v-divider>
          </v-flex>
    
          <v-flex xs6 md2 sm4 class="pa-1">
              <div class="caption">Author</div>
              <div>{{ project.author }}</div>
          </v-flex>

          <v-flex xs6 md2 sm4 class="pa-1">
              <div class="caption">Due date</div>
              <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs12 md2 sm4 class="pa-1">
              <div class="caption">Status</div>
              <div>{{ project.status }}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  
  data() {
    return {
      projects: [
        { title: 'Create a database', body: 'Lorem, ipsum dolor.', author: 'John doe', due: '2nd Aug', status: 'done' },
        { title: 'Create a website', body: 'Lorem, ipsum dolor.', author: 'Jane doe', due: '10th Aug', status: 'ongoing' },
        { title: 'Create a layout', body: 'Lorem, ipsum dolor.',author: 'Jack doe', due: '12th Aug', status: 'done' },
        { title: 'Create a server', body: 'Lorem, ipsum dolor.',author: 'Jason doe', due: '22nd Aug', status: 'overdue' }
      ]
    }
  }
}
</script>

<style scoped>
.project.done {
  background-color: #3CD1C2;
}

.project.ongoing {
  background-color:orange;
}

.project.overdue {
  background-color:red;
}
</style>
