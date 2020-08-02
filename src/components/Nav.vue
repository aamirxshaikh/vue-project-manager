<template>
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon @click="show = !show"></v-app-bar-nav-icon>
            <v-app-bar-title>
                <span class="font-weight-light">Project Manager</span>
                <span>Pro</span>
                <i class="material-icons mx-1">library_add_check</i>
            </v-app-bar-title>
            <span class="display-1 hidden-sm-and-down">|</span>
            <p class="caption hidden-sm-and-down">Manage your projects efficiently.</p>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1">
                <span>SIGN OUT</span>
                <i class="material-icons mx-1">undo</i>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer absolute v-model="show" class="deep-grey accent-4">
            <v-list rounded>
                <v-subheader>REPORTS</v-subheader><br>
                <v-list-title-title>MENU</v-list-title-title>
                <v-list-item-group color="primary">
                    <v-list-item v-for="(item, id) in items" :key="id" router :to="item.route">
                        <v-list-item-icon>
                            <i class="material-icons">{{ item.logo }}</i>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.content }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            show: false,

            items: [
                { logo: 'folder_shared', content: 'My Dashboard', route: '/' },
                { logo: 'group_add', content: 'View Team', route: '/team' },
                { logo: 'engineering', content: 'Projects Undertaken', route: '/projects' },
                { logo: 'announcement', content: 'Announcements', route: '/announcements' },
                { logo: 'info', content: 'About Us', route: '/about-us' },
                { logo: 'copyright', content: 'Terms & Conditions', route: '/terms-and-conditions' }
            ]
        }
    }
}
</script>

<style scoped>
.caption {
    margin: 7px;
}
</style>