<template>
    <div class="toolpad">
        <div v-for="(input, index) in tool.inputs" :key="index">
            <div>
                <label>{{ input.label }}</label>
            </div>

            <component :is="getInputControl(input.type)" />
        </div>

        <button @submit="execute">Execute</button>

        <div v-if="result">{{ result }}</div>
    </div>
</template>

<script>
import { tools } from '@/tools/manifest';
import TextArea from '@/components/TextArea';

export default {
    props: {
        slug: { type: String, required: true },
    },
    data() {
        return {
            result: null,
        };
    },
    computed: {
        tool() {
            return tools.find(t => t.slug === this.slug).tool;
        },
    },
    methods: {
        getInputControl(type) {
            switch (type) {
                case 'textarea':
                    return TextArea;
            }
        },
        execute() {

        },
    }
};
</script>

<style lang="scss">
.toolpad {

}
</style>
