<template>
    <div class="add-project mb-4">
        <h2 class="display-1 ma-4">Add a new Project</h2>
        <v-container class="container my-4">
            <v-card class="pa-4">
                <v-form ref="form">
                    <v-text-field v-model="title" label="Title"></v-text-field>
                    <v-text-field v-model="author" label="Author"></v-text-field>

                    <v-textarea v-model="body" label="Body"></v-textarea>

                    <v-btn class="mr-4">submit</v-btn>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'AddProject'
}
</script>

<style scoped>

</style>