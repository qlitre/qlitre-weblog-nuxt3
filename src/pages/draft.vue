<script setup lang="ts">
import 'highlight.js/styles/hybrid.css'
import { Post } from '../types/blog'
import { getHighlightBody, getToc } from '../libs/cheerio-utils'


const route = useRoute();
const slug = String(route.query.id);
const draftkey = String(route.query.draftkey)


const { data: article, pending, error, refresh } = await useAsyncData<Post>('article',
    () => $fetch('/api/postDetail', { params: { slug: slug, draftKey: draftkey } }))

if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const body = getHighlightBody(article.value.text)
const toc = getToc(article.value.text)

</script>
        
<template>
    <div class="wrapper">
        <div class="article-header">
            <TagLabel v-for="tag in article.tag" :key="tag.id" :tag="tag" :colorClass="`active`"></TagLabel>
            <h1 class="title">
                {{ article.title }}
            </h1>
            <p class="published">公開日：yyyy-mm-dd</p>
            <Share :id="article.id" :title="article.title" />
        </div>
        <div class="post-wrapper">
            <div class="posts">
                <MarkdownBody :body="body" />
                <div v-if="article.useAmazonLink">
                    <AmazonLinkCard v-for="(amazonLink, i) in article.repeated" :key="i" :amazonLink="amazonLink" />
                </div>
            </div>
            <div class="aside">
                <Toc :toc="toc" />
            </div>
        </div>
        <TopToLink />
    </div>
</template>
    
<style scoped lang="scss">
.wrapper {
    padding-top: 112px;
    position: relative;
    width: 960px;
    margin: 0 auto 0;
}

.post-wrapper {
    margin-top: 3rem;
}

.article-header {
    padding-bottom: 30px;
}

@media (max-width: 1024px) {
    .wrapper {
        max-width: 600px;
        position: relative;
        width: 100%;
        padding-right: 1rem;
        padding-left: 1rem;
        margin-right: auto;
        margin-left: auto;
    }

    .post-wrapper {
        display: flex;
        flex-direction: column-reverse;
        gap: 30px;
    }
}

@media (min-width: 1024px) {
    .post-wrapper {
        display: grid;
        grid-template-columns: 600px 300px;
        -moz-column-gap: 60px;
        column-gap: 60px;
        grid-template-rows: 1fr;
    }
}


.published {
    margin-top: 1rem;
    font-size: 1.6rem;
    color: var(--qlitre-colors-gray-700);
}

.title {
    margin-top: 1rem;
    font-size: 3rem;
    color: var(--qlitre-colors-black);
    line-height: 1.8;
    font-weight: bold;
}
</style>