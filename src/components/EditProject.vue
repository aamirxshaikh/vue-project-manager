<template>
    <div class="edit-project mb-4">
        <div v-if="project !== ''">
            <h2 class="display-1 ma-4">Edit Project : <strong class="upper">{{ project.title }}</strong></h2>
            <v-container class="container my-4">
                <v-card class="pa-4">
                    <v-form ref="form">
                        <v-layout>
                            <v-flex>
                                <v-text-field v-model="project.title" label="Title"></v-text-field>
                            </v-flex>
                        </v-layout>

                        <v-layout>
                            <v-flex>
                                <v-text-field v-model="project.author" label="Author"></v-text-field>
                            </v-flex>
                        </v-layout>

                        <v-layout class="mb-4">
                            <v-flex>
                                <label for="due">Due</label>
                            </v-flex>
                        </v-layout>

                        <v-layout>
                            <v-flex class="custom-date-picker">
                                <v-date-picker v-model="dueUpdate"></v-date-picker>
                            </v-flex>
                        </v-layout>

                        <v-layout>
                            <v-flex>
                                <v-textarea v-model="project.body" label="Body"></v-textarea>
                            </v-flex>
                        </v-layout>

                        <v-layout>
                            <v-flex>
                                <p class="red--text alert" v-if="alert !== ''"><strong>{{ alert }} !</strong></p>
                                <v-btn color="blue" class="mr-4" @click="updateProject">update</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-form>
                </v-card>
            </v-container>
        </div>
    </div>
</template>

<script>
import database from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'EditProject',

    data() {
        return {
            project: '',
            dueUpdate: '',
            alert: ''
        }
    },

    computed: {
        validDateUpdate() {
            const due = new Date(this.dueUpdate);

            return due;
        }
    },

    methods: {
        updateProject() {
            if(this.project.title !== '' && this.project.author !== '' && this.project.dueUpdate !== '' && this.project.body !== '') {
                this.alert = '';

                this.project.slug = slugify(this.project.title, {
                    lower: true,
                    replacement: '-',
                    remove: /[$*_~.+,()'"!\-:@]/g
                });

                database.collection('projects').doc(this.project.id).update({
                    title: this.project.title,
                    slug: this.project.slug,
                    author: this.project.author,
                    due: this.validDateUpdate.toDateString(),
                    dueTimestampFormat: this.validDateUpdate,
                    body: this.project.body,
                    status: this.project.status
                })
                    .then(() => this.$router.push({ name: 'Dashboard' }))
                    .catch(err => console.log(err))
            } else {
                this.alert = 'You must fill-in all the required fields';
            }
        }
    },

    created() {
        database.collection('projects').where('slug', '==', this.$route.params.slug_param)
            .get()
            .then(items => {
                items.forEach(item => {
                    this.project = item.data();
                    this.project.id = item.id;
                });
            })
            .catch(err => console.log(err));
    }
}
</script>

<style>
.upper {
    text-transform: capitalize;
}

.custom-date-picker {
    text-align: center;
    display: block
}

.alert {
    text-align: center;
    display: block;
}
</style>