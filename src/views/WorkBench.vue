<template>
    <div class="workbench">
        <div class="sidebar">
            <router-link v-for="tool in tools" :key="tool.slug" :to="`/y/${tool.slug}`">
                {{ tool.name }}
            </router-link>
        </div>
        <div class="workspace">
            <router-view />
        </div>
    </div>
</template>

<script>
import { tools } from '@/tools/manifest';

export default {
    name: 'WorkBench',
    data() {
        return {
            tools,
        };
    },
};
</script>

<style lang="scss">
.workbench {
    display: flex;
}

.sidebar {
    flex-basis: 20%;
    border-right: 1px solid #CCC;
    height: 100%;
}

.workspace {
    flex: 1;
}
</style>
