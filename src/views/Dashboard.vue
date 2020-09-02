<template>
  <div class="dashboard mb-4"> 
    <h2 class="display-1 ma-4">Dashboard</h2>
    <v-container class="my-5">
      <v-card :class="`mb-4 ${project.status} project pa-4 black--text text-center`" v-for="project in projects" :key="project.id">
        <v-layout row wrap>
          <v-flex xs12 md4 class="pa-1">
              <div class="caption">Project Title</div>
              <div>{{ project.title }}</div>
          </v-flex>
    
          <v-flex xs6 md2 sm3 xs2 class="pa-1">
              <div class="caption">Author</div>
              <div>{{ project.author }}</div>
          </v-flex>

          <v-flex xs6 md2 sm4 xs3 class="pa-1">
              <div class="caption">Due date</div>
              <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs12 md2 sm2 xs3 class="pa-1">
              <div class="caption">Status</div>
                <v-chip color="black" text-color="white">
                  {{ project.status }}
                </v-chip>
          </v-flex>
            
          <v-flex md2 sm3 xs4 class="pa-1">
            <v-list-item-icon>
              <i class="material-icons check green--text">check</i>
              <i class="material-icons mx-4 edit">edit</i>
              <i class="material-icons clear red--text" @click="deleteProject(project.id)">clear</i>
            </v-list-item-icon>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex class="pa-1">
            <div class="caption mx-4">
              {{ project.body }}
            </div>
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

  methods: {
    deleteProject(id) {
      database.collection('projects').doc(id).delete()
        .then(() => {
          this.projects = this.projects.filter(project => {
            return project.id !== id;
          });
        })
        .catch(err => console.log(err));
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

.clear {
  cursor: pointer;
}

.check {
  cursor: pointer;
}

.edit {
  cursor: pointer;
}
</style>
