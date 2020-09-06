<template>
    <div class="edit-project mb-4">
        <h2 class="display-1 ma-4">Edit Project</h2>
    </div>
</template>

<script>
import database from '@/firebase/init'

export default {
    name: 'EditProject',

    data() {
        return {
            project: ''
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

                console.log(this.project)
            })
            .catch(err => console.log(err));
    }
}
</script>

<style>

</style>