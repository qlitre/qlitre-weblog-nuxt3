<script setup lang="ts">

import Prism from 'prismjs'

type Props = {
    body: string;
}

const { body } = defineProps<Props>()

onMounted(() =>
    Prism.highlightAll()
)

</script>
<template>
    <div class="md" v-html="body"></div>
</template>
    
<style scoped lang="scss">
.md {
    :deep(*) {
        margin-top: 0;
        margin-bottom: 1rem;
        line-height: 1.9;
        font-weight: 500;
        font-size: var(--font-size-base);
    }

    :deep(img) {
        display: block;
        max-width: 100%;
        margin-top: 20px;
        margin-bottom: 0px;
        height: auto;
        border: solid 1px #ccc;
    }

    :deep(strong) {
        background-color: yellow;
    }

    :deep(p) code {
        background-color: var(--c-gray-300);
        color: var(--c-gray-700);
        padding: 0.2em 0.4em;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    :deep(pre) {
        margin-top: 1rem;
        padding: 2% 4%;
        border-radius: 5px;
    }

    :deep(pre) * {
        line-height: 1.6;
        font-weight: normal;
        font-size: var(--font-size-sm);
    }

    :deep(.toolbar-item) {
        font-size: var(--font-size-sm);
    }

    :deep(blockquote) {
        padding: 15px;
        border-left: 2px solid var(--c-gray-300);
        border-radius: 2px;
        color: var(--c-gray-500);
    }

    :deep(h1) {
        font-size: var(--font-size-xl);
        border-bottom: 1px solid #ccc;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    :deep(h2),
    :deep(h3) {
        font-size: var(--font-size-xl);
        margin-top: 30px;
        margin-bottom: 10px;
        font-weight: bold;
    }

    :deep(h2) {
        border-bottom: 1px solid #ccc;
    }

    :deep(a) {
        color: #1266f1;

        :hover {
            opacity: .5;
        }
    }

    :deep(ul),
    :deep(ol) {
        padding-left: 1.5em;
        margin: 1rem 0;
        line-height: 1.7;

        li {
            margin-bottom: 1rem;
        }
    }

    :deep(ul) {
        list-style-type: disc;
    }

    :deep(ol) {
        list-style-type: decimal;
    }
}


@media (max-width: 1024px) {
    .md:deep(img) {
        max-width: 100%;
    }
}
</style>
    