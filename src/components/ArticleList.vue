<script setup lang="ts">
import type { Post } from '../types/blog'
type Props = {
    posts: Post[]
}

const { posts } = defineProps<Props>()

</script>
    
<template>
    <div>
        <article class="article" v-for="post in posts" :key="post.id">
            <NuxtLink :to="`/${post.id}`">
                <h1 class="title">
                    {{ post.title }}
                </h1>
            </NuxtLink>
            <p class="published">公開日：{{ $formatDate(post.publishedAt)}}</p>
            <p class="description">{{ post.description }}</p>
            <TagLabel v-for="tag in post.tag" :key="tag.id" :tag="tag" :colorClass="`active`" class="tag"></TagLabel>
        </article>
    </div>
</template>
<style scoped lang="scss">
.article {
    margin-bottom: 5rem;
    width: 100%;
    align-items: center;
}

.published {
    margin-top: 1rem;
    font-size: 1.6rem;
    color: var(--qlitre-colors-gray-700);
}

.title {
    font-size: 2.0rem;
    color: var(--qlitre-colors-black);
    line-height: 1.8;
    font-weight: bold;

    &:hover {
        opacity: .5;
        text-decoration: underline;
    }
}

.description {
    margin-top: 1rem;
    font-size: 1.6rem;
    color: var(--qlitre-colors-gray-700);
    line-height: 1.8;

}

.post-link:hover {
    opacity: .8;
    text-decoration: underline var(--qlitre-colors-gray-700);
}

.tag {
    margin-top: 2rem;
}
</style>