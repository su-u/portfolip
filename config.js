module.exports = {
    // I18n settings.
    // If you wanna add another language, add it below.
    // Use language code in ISO 639-1 format.
    languages: {
        ja: "日本語"
    },
    mainLanguage: "ja",

    // Default values for frontmatter data.
    // If you want to add custom data, add them below.
    frontmatter: {
        title: "💊MDMT💊 Markdown Document Template #MDMTjs",
        description:
            "MDMT is a deadsimple document site generator, powered by Next.js and MDX. You can easily create documents with Markdown.",
        color: "#00DDFF"
    },

    // Data for <meta> tags and PWA.
    meta: {
        name: "💊MDMT💊 Markdown Document Template",
        shortName: "MDMT",
        url: "https://gmork.in/MDMT/",
        image: "/static/images/ogimage.png",
        twitter: "@_citsu_",
        themeColor: "#00DDFF",
        backgroundColor: "#000000"
    },

    // Sidebar links settings.
    // Please provide settings for all supported languages.
    sidebar: {
        ja: [
            [
                "ホーム",
                "/",
                [
                ]
            ],
            ["連絡先", "/"]
        ]
    },

    // Header links settings.
    // Please provide settings for all supported languages.
    header: {
        ja: [
            ["GitHub", "https://github.com/su-u"]
        ]
    }
};
