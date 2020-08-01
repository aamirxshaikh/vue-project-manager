<template>
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon @click="show = !show"></v-app-bar-nav-icon>
            <v-app-bar-title>
                <span class="font-weight-light">Project Manager</span>
                <span>Pro</span>
                <i class="material-icons mx-1">library_add_check</i>
            </v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1">
                <span>SIGN OUT</span>
                <i class="material-icons mx-1">undo</i>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer absolute v-model="show" class="deep-grey accent-4">
            <p>text</p>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>

<style scoped>

</style>