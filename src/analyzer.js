"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var cheerio_1 = require("cheerio");
// 单例模式
var BoAnalyzer = /** @class */ (function () {
    function BoAnalyzer() {
    }
    BoAnalyzer.getInstance = function () {
        if (!BoAnalyzer.instance) {
            BoAnalyzer.instance = new BoAnalyzer();
        }
        return BoAnalyzer.instance;
    };
    BoAnalyzer.prototype.getLadyInfo = function (html) {
        var $ = cheerio_1["default"].load(html);
        var list = $(".TypeList").find("li");
        var LadyPictureInfos = [];
        list.map(function (index, element) {
            var imgUrl = $(element).find("a img").eq(0).attr("src") || "";
            var title = $(element).find("a span").eq(0).text();
            var count = parseInt($(element).find(".IcoList").eq(0).text().split("：")[1], 10);
            LadyPictureInfos.push({
                imgUrl: imgUrl,
                title: title,
                count: count
            });
        });
        return {
            time: new Date().getTime(),
            data: LadyPictureInfos
        };
    };
    BoAnalyzer.prototype.generateJsonContent = function (resultInfo, filePath) {
        var fileContent = {};
        if (fs_1["default"].existsSync(filePath)) {
            fileContent = JSON.parse(fs_1["default"].readFileSync(filePath, "utf-8"));
        }
        fileContent[resultInfo.time] = resultInfo.data;
        return fileContent;
    };
    BoAnalyzer.prototype.analyze = function (html, filePath) {
        var result = this.getLadyInfo(html);
        var jsonContent = this.generateJsonContent(result, filePath);
        return JSON.stringify(jsonContent, undefined, 2);
    };
    return BoAnalyzer;
}());
exports["default"] = BoAnalyzer;
