<script setup lang="ts">
import { Tag } from '../types/blog'
type Props = {
    selectedTagId?: string;
}
const { selectedTagId } = defineProps<Props>()
const { data: tags, pending, error, refresh } = await useAsyncData<TagList>(
    'tag-list', () => $fetch('/api/tagList')
)

const tagList = tags.value.contents
// 選択中のタグがある場合先頭にもってくる
if (selectedTagId) {
    tagList.sort(function (first: Tag, second: Tag) {
        if (first.id == selectedTagId) {
            return -1;
        } else if (second.id == selectedTagId) {
            return 1;
        } else {
            return 0;
        }
    });
}

function getClass(tagId: string) {
    if (tagId == selectedTagId) return 'active'
    return 'nonActive'
}

</script>

<template>
    <div class="inline">
        <span v-for="tag in tagList" :key="tag.id">
            <TagLabel :tag="tag" :isInline="true" :colorClass="getClass(tag.id)" />
        </span>
    </div>
</template>
    
<style scoped lang="scss">
.inline {
    margin-bottom: 3rem;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 1rem;
}

.inline::-webkit-scrollbar {
    width: 3px;
}

.inline::-webkit-scrollbar-track {
    background: var(--qlitre-colors-white);
    border: none;
    border-radius: 5px;
    box-shadow: inset 0 0 2px #777;
}

.inline::-webkit-scrollbar-thumb {
    background: var(--qlitre-colors-gray-300);
    border-radius: 5px;
    box-shadow: none;
}

.dark-mode {
    .inline::-webkit-scrollbar-thumb {
        background: var(--qlitre-colors-gray-500);
    }
}
</style>
    