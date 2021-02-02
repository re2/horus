# Proxy

## 前言

本项目的Proxy分流规则由爬虫程序自动维护。

定时爬取互联网上开源的Proxy分流规则，将其进行清洗、去重、合并、优化后，形成单一的分流规则文件，旨在解决引用大量外部规则造成规则重复的问题。



最后检查时间：2021-02-02 23:32:12.665032。

## 规则统计

总计规则：28099 条。

各类型规则统计：

| 类型 | 数量(条) |
| ---- | ---- |
| HOST-SUFFIX | 27932 |
| USER-AGENT | 12 |
| HOST | 35 |
| HOST-KEYWORD | 29 |
| IP-CIDR | 88 |
| IP6-CIDR | 3 |
## 配置说明

实时版：爬虫程序定时更新，更新频率高，能尽快同步数据源变化

稳定版：不定时手动更新，更新频率低，稳定性好

### QuantumultX 
实时版：

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy.list

稳定版：

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/release/rule/QuantumultX/Proxy/Proxy.list

## 重复统计


当前分流规则，未包含其他子规则。


当前分流规则，与本项目其他分流规则重复情况统计(点击重复数量可查看明细)。



| 名称 | 数量 | 重复 | 重合度 |
| ---- | ---- | ---- | ------ |
|  [AdvertisingLite](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/AdvertisingLite)    | 30814   | [59](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   0.19% |
|  [Advertising](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Advertising)    | 64249   | [165](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   0.26% |
|  [AdvertisingTest](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/AdvertisingTest)    | 79907   | [202](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   0.25% |
|  [Privacy](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Privacy)    | 2839   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   0.07% |
|  [Blizzard](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Blizzard)    | 38   | [14](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   36.84% |
|  [Steam](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Steam)    | 32   | [13](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   40.62% |
|  [Rockstar](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Rockstar)    | 5   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   20.0% |
|  [PlayStation](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/PlayStation)    | 4   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Epic](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Epic)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [SteamCN](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/SteamCN)    | 14   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   28.57% |
|  [WildRift](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/WildRift)    | 3   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [EA](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/EA)    | 163   | [150](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   92.02% |
|  [Garena](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Garena)    | 15   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   40.0% |
|  [Gog](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Gog)    | 3   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   66.67% |
|  [Nintendo](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Nintendo)    | 123   | [94](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   76.42% |
|  [OP](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/OP)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [Riot](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Riot)    | 54   | [45](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   83.33% |
|  [UBI](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/UBI)    | 5   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   60.0% |
|  [Xbox](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Xbox)    | 34   | [29](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   85.29% |
|  [Game](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Game)    | 508   | [364](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   71.65% |
|  [YouTube](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/YouTube)    | 180   | [55](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   30.56% |
|  [Google](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Google)    | 104   | [71](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   68.27% |
|  [GoogleDrive](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/GoogleDrive)    | 7   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   28.57% |
|  [Github](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Github)    | 6   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [OneDrive](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/OneDrive)    | 17   | [9](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   52.94% |
|  [Microsoft](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Microsoft)    | 99   | [61](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   61.62% |
|  [iCloud](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/iCloud)    | 51   | [31](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   60.78% |
|  [AppleNews](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/AppleNews)    | 10   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   10.0% |
|  [SystemOTA](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/SystemOTA)    | 17   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   17.65% |
|  [AppleProxy](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/AppleProxy)    | 15   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   26.67% |
|  [Apple](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Apple)    | 104   | [42](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   40.38% |
|  [Global](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Global)    | 28250   | [28082](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   99.41% |
|  [GlobalMedia](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/GlobalMedia)    | 1138   | [119](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   10.46% |
|  [BlackList](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/BlackList)    | 772   | [759](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   98.32% |
|  [Speedtest](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Speedtest)    | 5   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   20.0% |
|  [Telegram](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Telegram)    | 19   | [13](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   68.42% |
|  [PotatoChat](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/PotatoChat)    | 3   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [KakaoTalk](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/KakaoTalk)    | 14   | [10](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   71.43% |
|  [Line](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Line)    | 22   | [20](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   90.91% |
|  [Netflix](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Netflix)    | 42   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   19.05% |
|  [Dubox](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Dubox)    | 2   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [TikTok](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/TikTok)    | 16   | [9](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   56.25% |
|  [Pornhub](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Pornhub)    | 5   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   80.0% |
|  [Porn](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Porn)    | 24   | [23](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   95.83% |
|  [Disney](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Disney)    | 132   | [84](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   63.64% |
|  [Twitter](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Twitter)    | 11   | [11](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Cloudflare](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Cloudflare)    | 22   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   4.55% |
|  [Facebook](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Facebook)    | 39   | [29](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   74.36% |
|  [Spotify](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Spotify)    | 19   | [12](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   63.16% |
|  [Wikipedia](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Wikipedia)    | 12   | [12](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Discord](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Discord)    | 6   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [PayPal](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/PayPal)    | 5   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Spark](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Spark)    | 5   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Sony](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Sony)    | 6   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   83.33% |
|  [Niconico](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Niconico)    | 10   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   30.0% |
|  [BBC](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/BBC)    | 17   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   47.06% |
|  [Developer](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Developer)    | 24   | [23](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   95.83% |
|  [Amazon](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Amazon)    | 26   | [23](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   88.46% |
|  [Instagram](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Instagram)    | 2   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Scholar](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Scholar)    | 76   | [37](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   48.68% |
|  [Whatsapp](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Whatsapp)    | 21   | [14](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   66.67% |
|  [TeamViewer](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/TeamViewer)    | 10   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   20.0% |
|  [Bahamut](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Bahamut)    | 5   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   40.0% |
|  [Adobe](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Adobe)    | 34   | [25](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   73.53% |
|  [AFP](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/AFP)    | 2   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [ATTWatchTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/ATTWatchTV)    | 6   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [AbemaTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/AbemaTV)    | 22   | [14](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   63.64% |
|  [AmazonPrimeVideo](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/AmazonPrimeVideo)    | 26   | [12](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   46.15% |
|  [Americasvoice](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Americasvoice)    | 1   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [AppleDaily](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/AppleDaily)    | 13   | [10](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   76.92% |
|  [BoXun](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/BoXun)    | 2   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [CBS](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/CBS)    | 26   | [22](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   84.62% |
|  [CNBC](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/CNBC)    | 4   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [CNN](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/CNN)    | 6   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [CableTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/CableTV)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [DAZN](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/DAZN)    | 19   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   26.32% |
|  [Dailymotion](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Dailymotion)    | 4   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [Deezer](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Deezer)    | 3   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   33.33% |
|  [EncoreTVB](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/EncoreTVB)    | 6   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   16.67% |
|  [Fox](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Fox)    | 257   | [227](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   88.33% |
|  [HBO](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/HBO)    | 31   | [12](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   38.71% |
|  [HWTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/HWTV)    | 3   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   33.33% |
|  [Huffpost](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Huffpost)    | 18   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   33.33% |
|  [Hulu](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Hulu)    | 55   | [45](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   81.82% |
|  [JOOX](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/JOOX)    | 4   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   25.0% |
|  [Japonx](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Japonx)    | 10   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   80.0% |
|  [KKBOX](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/KKBOX)    | 7   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   57.14% |
|  [LiTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/LiTV)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [LineTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/LineTV)    | 7   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   28.57% |
|  [LondonReal](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/LondonReal)    | 2   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [NYPost](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/NYPost)    | 3   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [NYTimes](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/NYTimes)    | 16   | [11](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   68.75% |
|  [Nikkei](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Nikkei)    | 3   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   33.33% |
|  [PBS](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/PBS)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [Pandora](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Pandora)    | 3   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   33.33% |
|  [PandoraTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/PandoraTV)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [RTHK](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/RTHK)    | 3   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   66.67% |
|  [SkyGO](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/SkyGO)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [SoundCloud](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/SoundCloud)    | 4   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [TVB](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/TVB)    | 15   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   40.0% |
|  [TaiWanGood](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/TaiWanGood)    | 3   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   33.33% |
|  [VOA](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/VOA)    | 51   | [49](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   96.08% |
|  [VidolTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/VidolTV)    | 1   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Vimeo](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Vimeo)    | 16   | [15](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   93.75% |
|  [ViuTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/ViuTV)    | 10   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   20.0% |
|  [Voxmedia](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Voxmedia)    | 16   | [16](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [ZeeTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/ZeeTV)    | 9   | [7](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   77.78% |
|  [Lan](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Lan)    | 26   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   3.85% |
|  [Sina](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Sina)    | 101   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   0.99% |
|  [Baidu](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Baidu)    | 265   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   0.75% |
|  [ByteDance](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/ByteDance)    | 202   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   0.5% |
|  [China](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/China)    | 693   | [133](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   19.19% |
|  [ChinaTest](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/ChinaTest)    | 71672   | [171](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   0.24% |
|  [ChinaMedia](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/ChinaMedia)    | 228   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   1.75% |
|  [Alibaba](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/Alibaba)    | 1222   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   0.16% |
|  [KuKeMusic](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/KuKeMusic)    | 3   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   33.33% |
|  [WangSuKeJi](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/WangSuKeJi)    | 189   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   0.53% |
|  [XieCheng](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/XieCheng)    | 29   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   3.45% |
|  [YYeTs](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/QuantumultX/YYeTs)    | 21   | [13](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Proxy/Proxy_Repeat.list)   |   61.9% |
### 特别说明
程序在实际运算时，会根据DOMAIN、DOMAIN-SUFFIX、IP-CIDR、IP-CIDR6间的包含关系进行去重，而出于运行效率考虑，重复规则只统计纯文本匹配，所以可能与实际效果有所出入，仅供参考。

## 数据来源

本项目的Proxy分流规则的数据来自以下链接，通常已涵盖所有数据来源的分流规则。如果你正在使用这些分流规则，建议不要与本项目的Proxy分流规则混合使用，以免造成规则重复。

- https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/rule/BlackList/BlackList.list
- https://raw.githubusercontent.com/lhie1/Rules/master/Surge/Surge%203/Provider/Proxy.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyGFWlist.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyLite.list
- https://raw.githubusercontent.com/Hackl0us/SS-Rule-Snippet/master/Rulesets/Surge/Basic/Apple-proxy.list
- https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/rule/Proxy/Proxy.list
- https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/ruleset/greatfire.txt
- https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/ruleset/gfw.txt
- https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/ruleset/proxy.txt
- https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/Filter/Outside.list


感谢以上分流规则作者的辛勤付出（排名不分先后）。

如果您有更好的分流规则，欢迎提交给我，我会将它加到数据源中继续完善。

## 程序特点

### 断链处理

对于某些已删除或失效的数据源，继续使用本地缓存的文件，减少因为断链造成的影响。

### 规则过滤

通过关键字、正则、模糊匹配三种方式对规则进行过滤，以移除部分数据源中的错误规则。

### 合并去重

不仅对完全相同的规则进行去重，还会根据DOMAIN、DOMAIN-SUFFIX、IP-CIDR、IP-CIDR6等规则间的包含关系进行合并去重。

### 域名解析

对DOMAIN类型的规则进行DNS解析记录查询，丢弃连续多次无法解析的域名。

### 正则合并

通过程序对相似正则进行合并，不定时手动核验正则合并结果。

### 正则推导

通过程序对含有正则的规则，推导需要MITM的主机名，不定时手动核验推导结果。

### 正则编译

通过程序对正则类型的规则进行编译，去除无法通过编译的正则。

## 最后

### 完善规则

如果您：

1. 有更优的原始规则数据
2. 有更多的黑名单规则数据
3. 有更好的优化建议
4. 在使用分流规则时出现异常
5. 有其他问题

欢迎通过[issues](https://github.com/blackmatrix7/ios_rule_script/issues/new)提交反馈，共同完善本项目的Proxy分流规则。

感谢

[@fiiir](https://github.com/fiiir) [@Tartarus2014](https://github.com/Tartarus2014) [@zjcfynn](https://github.com/zjcfynn) [@chenyiping1995](https://github.com/chenyiping1995) 

提供规则数据源及改进建议

### 其他问题

爬虫开发的初衷是为满足自己几方面需求：

1. 去除混用多个去广告规则造成的重复
2. 去除多个去广告规则中某些规则
3. 多个分流规则间重复情况检查
4. 定时同步数据源更新

本项目的分流规则还是以自用为主，请不要对外宣传此分流规则。所以，还是请低调使用吧。