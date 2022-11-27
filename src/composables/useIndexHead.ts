export const useIndexHead = () => {
    return useHead({
        title: "Qlitre's Blog",
        link: [{
            rel: "canonical",
            href: `https://qlitre-weblog.com`
        }],
        meta: [
            { name: 'description', content: "Pythonを中心にプログラミングの備忘録、チュートリアルを書いています" }
        ],
    })
}