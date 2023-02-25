<script setup lang="ts">
import { Tag } from '../types/blog'
type Props = {
    tag: Tag;
    colorClass: 'active' | 'nonActive';
    isInline?: boolean;
    count?: number;
}
const { tag, colorClass, isInline, count } = defineProps<Props>()

function getPath(tagId: string) {
    if (colorClass == 'active' && isInline) return '/'
    return `/tags/${tagId}/page/1`
}

</script>

<template>
    <NuxtLink :class="`tag-badge ${colorClass}`" :to="getPath(tag.id)">
        {{ tag.name }}<span v-if="count">({{ count }})</span>
    </NuxtLink>
</template>

<style scoped lang="scss">
.tag-badge {
    display: inline-block;
    border-radius: 4px;
    text-align: center;
    border: 1px solid var(--qlitre-colors-gray-500);
    padding: 4px 8px;
    cursor: pointer;
    font-size: 1.2rem;
    margin-right: 1rem;
    letter-spacing: 1px;

    &:hover {
        opacity: .6;
    }
}

.active {
    color: var(--qlitre-colors-white);
    background-color: var(--qlitre-colors-teal-400);
    border: none;
}

.nonActive {
    color: var(--qlitre-colors-gray-700);
    background-color: var(--qlitre-colors-white);
}

.dark-mode {
    .nonActive {
        background-color: var(--qlitre-colors-gray-300);
    }

    .active {
        background-color: var(--qlitre-colors-teal-700);
    }
}
</style>
