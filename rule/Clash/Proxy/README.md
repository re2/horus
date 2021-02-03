# Proxy

## 前言

本项目的Proxy分流规则由爬虫程序自动维护。

定时爬取互联网上开源的Proxy分流规则，将其进行清洗、去重、合并、优化后，形成单一的分流规则文件，旨在解决引用大量外部规则造成规则重复的问题。



最后检查时间：2021-02-03 17:32:35.294162。

## 规则统计

总计规则：28086 条。

各类型规则统计：

| 类型 | 数量(条) |
| ---- | ---- |
| DOMAIN-SUFFIX | 27931 |
| DOMAIN | 35 |
| DOMAIN-KEYWORD | 29 |
| IP-CIDR | 88 |
| IP-CIDR6 | 3 |
## 配置说明

实时版：爬虫程序定时更新，更新频率高，能尽快同步数据源变化

稳定版：不定时手动更新，更新频率低，稳定性好

### Clash 
实时版：

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy.yaml

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Domain.yaml

稳定版：

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/release/rule/Clash/Proxy/Proxy.yaml

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/release/rule/Clash/Proxy/Proxy_Domain.yaml

如果稳定版无法访问 ，可能是尚未从实时版的分支合并，建议您先使用实时版，或等待下次稳定版分支合并。

## 重复统计


当前分流规则，未包含其他子规则。


当前分流规则，与本项目其他分流规则重复情况统计(点击重复数量可查看明细)。



| 名称 | 数量 | 重复 | 重合度 |
| ---- | ---- | ---- | ------ |
|  [AdvertisingLite](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/AdvertisingLite)    | 31036   | [59](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   0.19% |
|  [Advertising](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Advertising)    | 64506   | [165](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   0.26% |
|  [AdvertisingTest](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/AdvertisingTest)    | 80149   | [202](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   0.25% |
|  [Privacy](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Privacy)    | 2839   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   0.07% |
|  [Blizzard](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Blizzard)    | 38   | [14](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   36.84% |
|  [Steam](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Steam)    | 32   | [13](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   40.62% |
|  [Rockstar](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Rockstar)    | 5   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   20.0% |
|  [PlayStation](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/PlayStation)    | 4   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Epic](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Epic)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [SteamCN](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/SteamCN)    | 14   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   28.57% |
|  [WildRift](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/WildRift)    | 3   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [EA](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/EA)    | 163   | [150](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   92.02% |
|  [Garena](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Garena)    | 15   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   40.0% |
|  [Gog](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Gog)    | 3   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   66.67% |
|  [Nintendo](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Nintendo)    | 123   | [94](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   76.42% |
|  [OP](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/OP)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [Riot](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Riot)    | 54   | [45](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   83.33% |
|  [UBI](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/UBI)    | 5   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   60.0% |
|  [Xbox](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Xbox)    | 34   | [29](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   85.29% |
|  [Game](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Game)    | 508   | [364](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   71.65% |
|  [YouTube](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/YouTube)    | 177   | [55](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   31.07% |
|  [Google](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Google)    | 101   | [71](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   70.3% |
|  [GoogleDrive](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/GoogleDrive)    | 4   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [Github](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Github)    | 6   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [OneDrive](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/OneDrive)    | 17   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   47.06% |
|  [Microsoft](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Microsoft)    | 98   | [60](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   61.22% |
|  [iCloud](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/iCloud)    | 51   | [31](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   60.78% |
|  [AppleNews](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/AppleNews)    | 9   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   11.11% |
|  [SystemOTA](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/SystemOTA)    | 17   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   17.65% |
|  [AppleProxy](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/AppleProxy)    | 15   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   20.0% |
|  [Apple](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Apple)    | 86   | [41](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   47.67% |
|  [Global](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Global)    | 28201   | [28069](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   99.53% |
|  [GlobalMedia](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/GlobalMedia)    | 1080   | [118](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   10.93% |
|  [BlackList](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/BlackList)    | 770   | [756](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   98.18% |
|  [Speedtest](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Speedtest)    | 4   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   25.0% |
|  [Telegram](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Telegram)    | 19   | [13](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   68.42% |
|  [PotatoChat](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/PotatoChat)    | 3   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [KakaoTalk](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/KakaoTalk)    | 14   | [10](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   71.43% |
|  [Line](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Line)    | 22   | [20](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   90.91% |
|  [Netflix](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Netflix)    | 41   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   19.51% |
|  [Dubox](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Dubox)    | 2   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [TikTok](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/TikTok)    | 15   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   53.33% |
|  [Pornhub](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Pornhub)    | 5   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   80.0% |
|  [Porn](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Porn)    | 24   | [23](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   95.83% |
|  [Disney](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Disney)    | 131   | [84](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   64.12% |
|  [Twitter](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Twitter)    | 11   | [11](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Cloudflare](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Cloudflare)    | 22   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   4.55% |
|  [Facebook](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Facebook)    | 39   | [29](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   74.36% |
|  [Spotify](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Spotify)    | 17   | [12](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   70.59% |
|  [Wikipedia](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Wikipedia)    | 12   | [12](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Discord](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Discord)    | 6   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [PayPal](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/PayPal)    | 4   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Spark](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Spark)    | 5   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Sony](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Sony)    | 6   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   83.33% |
|  [Niconico](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Niconico)    | 9   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   33.33% |
|  [BBC](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/BBC)    | 16   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [Developer](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Developer)    | 24   | [23](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   95.83% |
|  [Amazon](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Amazon)    | 24   | [23](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   95.83% |
|  [Instagram](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Instagram)    | 2   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Scholar](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Scholar)    | 76   | [37](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   48.68% |
|  [Whatsapp](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Whatsapp)    | 21   | [14](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   66.67% |
|  [TeamViewer](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/TeamViewer)    | 10   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   20.0% |
|  [Bahamut](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Bahamut)    | 4   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [Adobe](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Adobe)    | 34   | [25](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   73.53% |
|  [AFP](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/AFP)    | 2   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [ATTWatchTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/ATTWatchTV)    | 6   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [AbemaTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/AbemaTV)    | 21   | [14](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   66.67% |
|  [AmazonPrimeVideo](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/AmazonPrimeVideo)    | 24   | [12](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [Americasvoice](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Americasvoice)    | 1   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [AppleDaily](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/AppleDaily)    | 13   | [10](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   76.92% |
|  [BoXun](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/BoXun)    | 2   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [CBS](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/CBS)    | 26   | [22](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   84.62% |
|  [CNBC](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/CNBC)    | 4   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [CNN](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/CNN)    | 6   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [CableTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/CableTV)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [DAZN](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/DAZN)    | 18   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   27.78% |
|  [Dailymotion](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Dailymotion)    | 4   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [Deezer](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Deezer)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [EncoreTVB](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/EncoreTVB)    | 5   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   20.0% |
|  [Fox](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Fox)    | 256   | [227](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   88.67% |
|  [HBO](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/HBO)    | 29   | [12](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   41.38% |
|  [HWTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/HWTV)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [Huffpost](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Huffpost)    | 18   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   33.33% |
|  [Hulu](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Hulu)    | 55   | [45](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   81.82% |
|  [JOOX](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/JOOX)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [Japonx](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Japonx)    | 10   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   80.0% |
|  [KKBOX](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/KKBOX)    | 7   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   57.14% |
|  [LiTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/LiTV)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [LineTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/LineTV)    | 7   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   28.57% |
|  [LondonReal](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/LondonReal)    | 2   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [NYPost](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/NYPost)    | 3   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [NYTimes](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/NYTimes)    | 16   | [11](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   68.75% |
|  [Nikkei](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Nikkei)    | 3   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   33.33% |
|  [PBS](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/PBS)    | 1   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Pandora](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Pandora)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [PandoraTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/PandoraTV)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [RTHK](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/RTHK)    | 3   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   66.67% |
|  [SkyGO](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/SkyGO)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [SoundCloud](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/SoundCloud)    | 3   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   66.67% |
|  [TVB](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/TVB)    | 14   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   42.86% |
|  [TaiWanGood](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/TaiWanGood)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   50.0% |
|  [VOA](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/VOA)    | 51   | [49](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   96.08% |
|  [VidolTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/VidolTV)    | 1   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [Vimeo](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Vimeo)    | 16   | [15](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   93.75% |
|  [ViuTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/ViuTV)    | 8   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   25.0% |
|  [Voxmedia](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Voxmedia)    | 16   | [16](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   100.0% |
|  [ZeeTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/ZeeTV)    | 9   | [7](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   77.78% |
|  [Lan](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Lan)    | 26   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   3.85% |
|  [Sina](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Sina)    | 101   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   0.99% |
|  [Baidu](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Baidu)    | 265   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   0.75% |
|  [ByteDance](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/ByteDance)    | 202   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   0.5% |
|  [China](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/China)    | 661   | [132](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   19.97% |
|  [ChinaTest](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/ChinaTest)    | 71613   | [170](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   0.24% |
|  [ChinaMedia](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/ChinaMedia)    | 199   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   2.01% |
|  [Alibaba](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/Alibaba)    | 1222   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   0.16% |
|  [KuKeMusic](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/KuKeMusic)    | 3   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   33.33% |
|  [WangSuKeJi](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/WangSuKeJi)    | 189   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   0.53% |
|  [XieCheng](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/XieCheng)    | 29   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   3.45% |
|  [YYeTs](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash/YYeTs)    | 21   | [13](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Proxy/Proxy_Repeat.list)   |   61.9% |
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