<template>
    <div class="workbench">
        <div class="sidebar">
            <div v-for="tool in tools" :key="tool.slug" @click="selectedTool = tool">
                {{ name }}
            </div>
        </div>
        <div class="workspace">
            <ToolPad
                v-if="selectedTool"
                :name="selectedTool.name"
            />
        </div>
    </div>
</template>

<script>
import ToolPad from '@/components/ToolPad';
import { tools } from '@/tools/manifest';

export default {
    name: 'WorkBench',
    components: {
        ToolPad,
    },
    data() {
        return {
            selectedTool: null,
        };
    },
    computed: {
        tools,
    },
};
</script>

<style lang="scss">
.workbench {
    display: flex;
}

.sidebar {
    flex-basis: 20%;
}
</style>
