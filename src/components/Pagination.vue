<script setup lang="ts">
type Props = {
    numPages: number;
    current: number;
    tagId?: string;
    keyword?: string;
}

const { numPages, current, tagId, keyword } = defineProps<Props>()

function getPath(p: number) {
    if (tagId) return `/tags/${tagId}/page/${p}`
    if (keyword) return `/search?page=${p}&q=${keyword}`
    return `/page/${p}`
}

</script>
    
<template>
    <div class="pagination">
        <NuxtLink v-for="num in numPages" :key="num" :class="[num == current ? 'current' : 'link']" :to="getPath(num)">
            {{ num }}
        </NuxtLink>
    </div>
</template>
    
<style scoped lang="scss">
.pagination {
    position: relative;
    width: 100%;
    margin: 8em 0 8rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    line-height: 1.1;
    text-align: center;
    vertical-align: middle;
}


.current,
.link {
    display: inline-block;
    margin: 0 2rem;
    padding: 2px 0;
    text-align: center;
    font-size: 3rem;
    font-weight: lighter;
}

.current {
    color: #000;
}


.link {
    color: #A2A2A6;
}

@media (max-width: 720px) {

    .link,
    .current {
        font-size: 2rem;
        margin: 0 1.5rem;
    }
}
</style>