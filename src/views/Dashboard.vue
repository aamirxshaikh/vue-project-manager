<template>
  <div class="dashboard mb-4"> 
    <h2 class="display-1 ma-4">Dashboard</h2>
    <v-container class="my-5">
      <v-card :class="`mb-4 ${project.status} project pa-4 black--text text-center`" v-for="project in projects" :key="project.id">
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
                <v-chip color="black" text-color="white">
                  {{ project.status }}
                </v-chip>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import database from '@/firebase/init'

export default {
  name: 'Dashboard',
  
  data() {
    return {
      projects: []
    }
  },

  created() {
    database.collection('projects').get()
      .then(items => {
        items.forEach(item => {
          let project = item.data();

          project.id = item.id;

          this.projects.push(project);
        })
      })
      .catch(err => console.log(err));
  }
}
</script>

<style scoped>
.project.done {
  background-color: rgba(0, 255, 0, .9);
}

.project.ongoing {
  background-color:rgb(236, 222, 22);
}

.project.overdue {
  background-color:rgb(255, 42, 42);
}
</style>
