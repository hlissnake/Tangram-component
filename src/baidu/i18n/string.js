/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */
///import baidu.i18n;
baidu.i18n.string = baidu.i18n.string || {
    
    /**
     * 按照某种语言的格式去掉字符串两边的空白字符
     * @public
     * @param {String} locale 目标语言
     * @param {String} source 需要格式化的语言
     * @return {String}
     */
    trim: function(locale, source){
        var pat = baidu.i18n.cultures[locale].whitespace;
        return String(source).replace(pat,"");
    },

    /**
     * 将传入的字符串翻译成目标语言
     * @public 
     * @param {String} locale 目标语言
     * @param {String} source 需要进行翻译的字符串
     * @return {String}
     */
    translation: function(locale, source){
        var tOpt = baidu.i18n.cultures[locale].language;

        return tOpt[source] || '';
    }

};
