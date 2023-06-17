const { API_KEY, SERVICE_DOMAIN, GA_ADSENSE_ID } = process.env;
import prismjs from 'vite-plugin-prismjs'
import { createClient } from 'microcms-js-sdk'; //ES6


export default defineNuxtConfig({
    srcDir: 'src/',
    ssr: true,
    runtimeConfig: {
        apiKey: API_KEY,
        serviceDomain: SERVICE_DOMAIN
    },
    css: ['~/assets/scss/reset.scss', '~/assets/scss/common.scss',],
    hooks: {
        async "nitro:config"(nitroConfig) {
            if (nitroConfig.dev) {
                return;
            }
            nitroConfig.prerender.crawlLinks = false
            const limit = 10
            const client = createClient({
                serviceDomain: SERVICE_DOMAIN,
                apiKey: API_KEY,
            })
            const data = await client.getList(
                {
                    endpoint: 'post',
                    queries: {
                        limit: 0,
                        fields: 'id'
                    }
                }
            )
            const totalCount = data.totalCount
            const allPosts = await client.getList(
                {
                    endpoint: 'post',
                    queries: {
                        limit: totalCount,
                        fields: 'id,tag'
                    }
                }
            )
            // タグに紐づいている記事の数
            const tagCount: Record<string, number> = {}
            // 記事を繰り返す
            for (const elm of allPosts.contents) {
                const slug = elm.id
                const tags = elm.tag
                // 記事の数をカウントアップ
                for (const tag of tags) {
                    if (tagCount[tag.id]) {
                        tagCount[tag.id]++
                    } else {
                        tagCount[tag.id] = 1
                    }
                }
                // 記事詳細をルートに加える
                nitroConfig.prerender.routes.push(`/${slug}`)
            }
            // ページ数をルートに加える
            const pageCount = Math.ceil(totalCount / limit)
            for (let p = 1; p < pageCount + 1; p++) {
                nitroConfig.prerender.routes.push(`/page/${p}`)
            }
            // タグごとにページ数を計算してルートに加える
            for (const tagId in tagCount) {
                const cnt = tagCount[tagId]
                const tagPageCount = Math.ceil(cnt / limit)
                for (let p = 1; p < tagPageCount + 1; p++) {
                    nitroConfig.prerender.routes.push(`/tags/${tagId}/page/${p}`)
                }
            }
        },
    },
    app: {
        pageTransition: { name: 'page', mode: 'default' }
    },
    modules: [
        ['@nuxtjs/google-adsense', { id: GA_ADSENSE_ID },],
    ],
    'google-adsense': {
        pageLevelAds: true,
    },
    vite: {
        plugins: [
            prismjs({
                languages: ['cpp',
                    'javascript',
                    'bash',
                    'dart',
                    'sql',
                    'css',
                    'html',
                    'java',
                    'json',
                    'sass',
                    'scss',
                    'c',
                    'log',
                    'swift',
                    'md',
                    'nginx',
                    'yaml',
                    'xml',
                    'shell',
                    'ts',
                    'python',
                    'django'
                ],
                theme: "tomorrow",
                css: true
            })
        ]
    },
})
