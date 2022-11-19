<script setup lang="ts">
type Props = {
    body: string;
}

const { body } = defineProps<Props>()

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
        font-size: 1.6rem;
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
        background-color: var(--qlitre-colors-gray-300);
        color: var(--qlitre-colors-gray-700);
        padding: 0.2em 0.4em;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    :deep(pre) {
        margin-top: 1rem;
        line-height: 1.5;
        background-color: #1D1F21;
        padding: 2% 4%;
        overflow-x: scroll;
        font-weight: lighter;
    }

    :deep(blockquote) {
        padding: 15px;
        border-left: 5px solid #ccc;
        border-radius: 2px;
    }

    :deep(h1) {
        font-size: 24px;
        border-bottom: 1px solid #ccc;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    :deep(h2),
    :deep(h3) {
        font-size: 20px;
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
    