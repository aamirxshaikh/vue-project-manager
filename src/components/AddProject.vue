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

                    <v-layout>
                        <v-flex>
                            <label for="due">Due date</label>
                        </v-flex>

                        <v-flex>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-flex>
                    </v-layout>

                    <v-layout>
                        <v-flex>
                            <v-textarea v-model="body" label="Body"></v-textarea>
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
            author: '',
            due: new Date().toISOString().substr(0, 10),
            body: '',
            status: 'ongoing'
        }
    },

    computed: {
        validDate() {
            const due = new Date(this.due);

            return due;
        }
    }
}
</script>

<style scoped>

</style>