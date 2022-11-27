import { Post } from "../types/blog"

export const useDetailHead = (post: Post) => {
    return useHead({
        title: post.title,
        link: [{
            rel: "canonical",
            href: `https://qlitre-weblog.com/${post.id}`
        }],
        meta: [
            { name: 'description', content: post.description },
            { name: 'keyword', content: post.keywords },
            { property: 'og:url', content: `https://qlitre-weblog.com/${post.id}/` },
            {
                property: 'og:type',
                content: 'article'
            },
            {
                property: 'og:title',
                content: `${post.title} | Qlitre`
            },
            {
                property: 'og:description',
                content: post.description
            },
            {
                property: 'og:site_name',
                content: "Qlitre's Blog"
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                name: 'twitter:site',
                content: '@kuri_tter'
            }
        ],
    })
}