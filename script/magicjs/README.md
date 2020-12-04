MagicJS

![Language](https://img.shields.io/badge/Language-JavaScript-yellow) ![](https://img.shields.io/badge/platform-Surge-brightgreen) ![](https://img.shields.io/badge/platform-QuantumultX-brightgreen) ![](https://img.shields.io/badge/platform-Loon-brightgreen) ![](https://img.shields.io/badge/platform-Node.js-brightgreen) ![](https://img.shields.io/badge/platform-JSBox-brightgreen)

## 前言

iOS跨平台JavaScript模块，使同一份代码支持Surge4、Quantumult X、Loon、JSBox、Node.js 5个平台的运行。

## QuickStart

### 初始化对象

```javascript
let magicJS = MagicJS("MagicJS", "DEBUG");
```

初始化对象时，接受2个字符串类型的参数，第一个参数是脚本名称，第二个参数为设定的日志等级。

两个参数都有默认值，脚本名称默认为MagicJS，日志等级默认为INFO。

### 日志等级

目前提供以下日志等级：

| 日志名称 | 等级 | 说明                                           |
| -------- | ---- | ---------------------------------------------- |
| DEBUG    | 5    | 详细信息，一般只在调试时使用                   |
| INFO     | 4    | 证明程序按预期工作                             |
| NOTIFY   | 3    | 记录程序在系统中推送的通知                     |
| WARNING  | 2    | 出现某些没有预料到的事情，但程序仍可以正常运行 |
| ERROR    | 1    | 出现更严重的问题，程序部分功能已经无法运行     |
| CRITICAL | 0    | 严重错误，程序全部功能都无法正常运行           |
| NONE     | -1   | 不打印任何日志                                 |

高等级的日志参数会输出低等级的日志。

如日志等级为DEBUG时，会输出等级为DEBUG、INFO、NOTIFY、WARNING、ERROR、CRITICAL的日志；日志等级为WARNING时，会输出等级为WARNING、ERROR、CRITICAL的日志，以此类推。

如果传入错误的日志等级，会强制设置为DEBUG。比较特殊的是NONE，当预设等级为NONE时，所有通过MagicJS输出的日志都不会被打印。

