function changeLanguage(language) {
    var elements = document.querySelectorAll('[data-lang]');

    elements.forEach(function (element) {
        var key = element.getAttribute('data-lang');
        if (translations.hasOwnProperty(key) && translations[key].hasOwnProperty(language)) {
            // 使用 innerHTML 插入 HTML
            element.innerHTML = translations[key][language];
        }
    });
}


var translations = {
    'welcome': {
        'zh': '欢迎访问食物百科',
        'zh-hant': '歡迎訪問食物百科',
        'en': 'Welcome to Foodpedia'
    },
    'helloMessage': {
        'zh': '您好，欢迎阁下访问由中文维基百科用户 <a href="https://w.wiki/_w2aj">Winzekter986</a> 制作的美食百科，本页面致力于发表食物相关的教程。',
        'zh-hant': '您好，歡迎閣下訪問由中文維基百科用戶 <a href="https://w.wiki/_w2aj">Winzekter986</a> 製作的美食百科，本頁面致力於發表食物相關的教程。',
        'en': 'Hello, welcome to Foodpedia created by Chinese Wikipedia user <a href="https://w.wiki/_w2aj">Winzekter986</a>. This page is dedicated to publishing tutorials related to food.'
    },
    'visitFoodpedia': {
        'zh': '点此访问首页',
        'zh-hant': '點此訪問首頁',
        'en': 'Visit Mainpage'
    },
    'copyrightTitle': {
        'zh': '版权声明',
        'zh-hant': '版權聲明',
        'en': 'Copyright Statement'
    },
    'copyrightContent': {
        'zh': '本页面所有文字均以 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hant">CC BY-SA 4.0</a> 释出，本页面所有图片均以 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hant">CC BY-SA 4.0</a> 释出，恳请各位遵守协议共享，谢谢！',
        'zh-hant': '本頁面所有文字均以 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hant">CC BY-SA 4.0</a> 釋出，本頁面所有圖片均以 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hant">CC BY-SA 4.0</a> 釋出，懇請各位遵守協議共享，謝謝！',
        'en': 'All text on this page is released under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hant">CC BY-SA 4.0</a>. All images on this page are released under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hant">CC BY-SA 4.0</a>. Please abide by the sharing agreement. Thank you!'
    },
    'footerMessage': {
        'zh': '© 2024 | <a href="https://w.wiki/_w2aj">Winzekter986</a> | <a href="./index.html" data-lang="visitFoodpedia"> 食物百科</a>',
        'zh-hant': '© 2024 | <a href="https://w.wiki/_w2aj">Winzekter986</a> | <a href="./index.html" data-lang="visitFoodpedia"> 食物百科</a>',
        'en': '© 2024 | <a href="https://w.wiki/_w2aj">Winzekter986</a> | <a href="./index.html" data-lang="visitFoodpedia"> Foodpedia</a>'
    }
};

// 获取浏览器语言
var browserLanguage = navigator.language || navigator.userLanguage;
// 提取语言标签的前两个字符，如"zh"、"en"
var defaultLanguage = browserLanguage.substr(0, 2);

// 初始加载页面时，使用浏览器语言或其他条件选择默认语言
changeLanguage(defaultLanguage);
