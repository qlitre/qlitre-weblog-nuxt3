<script setup lang="ts">
type Toc = {
    id: string;
    name: string;
    text: string
}
type Props = {
    toc: Toc[];
}
const { toc } = defineProps<Props>()
</script>

<template>
    <ul class="toc">
        <span class="title">目次</span>
        <li :class="`list ${item.name}`" v-for="item in toc" :key="item.id">
            <a :href="`#${item.id}`">
                {{ item.text }}
            </a>
        </li>
    </ul>
</template>
  
  
  
<style scoped lang="scss">
.toc {
    padding: 1rem;
    font-size: 1.3rem;
    line-height: 1.8;
    background-color: var(--qlitre-colors-gray-100);
}

@media (min-width: 1024px) {
    .toc {
        position: sticky;
        top: 100px;
        margin-left: 1rem;
    }
}

@media (max-width: 1024px) {
    .toc {
        margin: 1rem 0;
    }
}

.toc:deep(li) {
    margin-top: .5rem;
    list-style-type: none;
}


.h1 {
    margin-left: .5rem;
}

.h2 {
    margin-left: 1rem;
}

.h3 {
    margin-left: 2rem;
}

.list:deep(a) {
    color: var(--qlitre-colors-gray-700);
}

.list:deep(a):hover {
    color: var(--qlitre-colors-blue-500);
    opacity: .9;
}
</style>
  