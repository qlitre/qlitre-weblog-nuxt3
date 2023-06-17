<script setup lang="ts">
import { getToc } from '../libs/cheerio-utils';
import { config } from '../settings/siteSettings'

type Props = {
    slug: string;
    draftKey?: string;
}

const { slug, draftKey } = defineProps<Props>()


const params = {
    slug: slug,
    draftKey: draftKey,
    fields: config.postDetailField
}

const { data: article } = await useFetch('/api/postDetail', { params: params })

if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

let body = ''
if (article.value.useRepeatBody) {
    const arr = article.value.repeated
    arr.forEach((elm, index) => {
        if (elm.fieldId == 'richEditor') {
            body += elm.body
        }
    });
} else {
    body = article.value.text
}

const toc = getToc(body)

useDetailHead(article.value)

</script>
        
<template>
    <div class="wrapper">
        <div class="article-header">
            <TagLabel v-for="tag in article.tag" :key="tag.id" :tag="tag" :colorClass="`nonActive`"></TagLabel>
            <h1 class="title">
                {{ article.title }}
            </h1>
            <p class="date">
                <span class="published">
                    公開日：{{ $formatDate(article.publishedAt) }}
                </span>
                <span class="revised">
                    更新日：{{ $formatDate(article.revisedAt) }}
                </span>
            </p>
            <Share :id="article.id" :title="article.title" />
        </div>
        <div class="post-wrapper">
            <div class="posts">
                <div v-if="article.useRepeatBody">
                    <RepeatedBody :repeatedBody="article.repeated" />
                </div>
                <div v-if="!article.useRepeatBody">
                    <MarkdownBody :body="article.text" />
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
    margin-top: 1rem;
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


.date {
    margin-top: 1rem;
    font-size: var(--font-size-base);
    color: var(--qlitre-colors-gray-700);
}

.revised {
    margin-left: 1rem;
}

.title {
    margin-top: .5rem;
    font-size: var(--font-size-2xl);
    color: var(--qlitre-colors-black);
    line-height: 1.8;
    font-weight: bold;
}
</style>