<script setup lang="ts">
import { AmazonLink } from '../types/blog'
type Props = {
    amazonLink: AmazonLink
}

const { amazonLink } = defineProps<Props>()

</script>

<template>
    <div class="link-box">
        <div class="left">
            <p class="title">
                {{ amazonLink.title }}
            </p>
            <a class="link" :href="amazonLink.url" target="_blank">
                Amazon で購入する
            </a>
        </div>
        <div class="right">
            <img class="img" :src="amazonLink.image.url" :alt="amazonLink.title" />
        </div>
    </div>
</template>
    
<style scoped lang="scss">
.link-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 2px solid;
    border-color: var(--qlitre-colors-teal-400);
    border-radius: 1px;
    margin: 3rem 0;
}

.left {
    padding-right: 2rem;
}

.title {
    font-size: 1.6rem;
    color: var(--qlitre-colors-gray-500);
    line-height: 1.8;
    font-weight: bold;
    margin-bottom: 2rem;
}

.link {
    color: var(--qlitre-colors-teal-400);
    font-size: 1.6rem;
    font-weight: 500;
}

.img {
    max-height: 150px;
    width: auto;
}
</style>
    