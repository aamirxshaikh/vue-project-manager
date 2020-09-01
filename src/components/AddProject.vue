<template>
    <div class="add-project mb-4">
        <h2 class="display-1 ma-4">Add a new Project</h2>
        <v-container class="container my-4">
            <v-card class="pa-4">
                <v-form ref="form">
                    <v-layout>
                        <v-flex>
                            <v-text-field v-model="title" label="Title"></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout>
                        <v-flex>
                            <v-text-field v-model="author" label="Author"></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout class="mb-4">
                        <v-flex>
                            <label for="due">Due</label>
                        </v-flex>
                    </v-layout>

                    <v-layout>
                        <v-flex class="custom-date-picker">
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-flex>
                    </v-layout>

                    <v-layout>
                        <v-flex>
                            <v-textarea v-model="body" label="Body"></v-textarea>
                        </v-flex>
                    </v-layout>

                    <v-layout>
                        <v-flex>
                            <p class="red--text alert" v-if="alert !== ''"><strong>{{ alert }} !</strong></p>
                            <v-btn color="blue" class="mr-4" @click="addProject">submit</v-btn>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'AddProject',

    data() {
        return {
            title: '',
            slug: '',
            author: '',
            due: new Date().toISOString().substr(0, 10),
            body: '',
            status: 'ongoing',
            alert: ''
        }
    },

    computed: {
        validDate() {
            const due = new Date(this.due);

            return due;
        }
    },

    methods: {
        addProject() {
            if(this.title !== '' && this.author !== '' && this.validDate !== '' && this.body !== '') {
                this.alert = '';
            } else {
                this.alert = 'You must fill-in all the required fields';
            }
        }
    }
}
</script>

<style scoped>
.custom-date-picker {
    text-align: center;
    display: block
}
.alert {
    text-align: center;
    display: block;
}
</style>