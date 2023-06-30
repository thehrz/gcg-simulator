# gcg-simulator [WIP]

> 声明: 本项目完全遵循 [米哈游原神游戏使用许可及服务协议](https://ys.mihoyo.com/main/company/agreement), 本仓库 (Thehrz/gcg-simulator) 不包含原神游戏资源, 无分发原神游戏资源的行为。

![gcg-simulator.png](https://s2.loli.net/2023/06/30/6JSpMbZzrT45ULC.png)

一个开源的七圣召唤模拟器前端实现。使用 Vue3 开发。

使用后端项目: ![genius-invokation-simulator-backend](https://github.com/sunist-c/genius-invokation-simulator-backend)

## Demo

[Link](https://gcg-simulator.nahida.work)

> 声明: 此 Demo 基于 `gcg-simulator` 运行, 使用了部分原神游戏资源, 但与本仓库无直接联系。所使用部分原神游戏资源其版权属于上海米哈游影铁科技有限公司及其关联公司, 其来源为互联网或游戏内截取, 无解包、反编译代码行为。此 Demo 供原神玩家交流学习使用, 仅作为展示本项目的测试站点, 不具有网络联机游戏性质。

## Build

### 构建前须知

> 本仓库不包含原神游戏资源, 故用户启动本仓库代码后无法在浏览器内查看到完整的游戏资源, 包括卡牌, 头像, 技能等图片资源。

> **您需要在不违反 [米哈游原神游戏使用许可及服务协议](https://ys.mihoyo.com/main/company/agreement) 的前提下 (不通过解包等行为) 自行获取原神游戏资源以正常启动本项目。**

我们使用 Docker 容器化服务, 并使用 Docker Compose 管理容器。

### 克隆 (Clone) 项目

> 请注意: 我们包含了一个子项目, 你应该使用 `--recurse-submodules` 在克隆时自动处理子项目。

```shell
$ git clone --recurse-submodules https://github.com/Thehrz/gcg-simulator.git
```

### 运行

```shell
$ docker compose up -d
```

### 关闭

```shell
$ docker compose down
```

## License

> 再次声明: 本项目完全遵循 [米哈游原神游戏使用许可及服务协议](https://ys.mihoyo.com/main/company/agreement), 本仓库 (Thehrz/gcg-simulator) 不包含原神游戏资源, 无分发原神游戏资源的行为。

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FThehrz%2Fgcg-simulator.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FThehrz%2Fgcg-simulator?ref=badge_large)

本项目基于 [MIT](https://github.com/Thehrz/gcg-simulator/blob/master/LICENSE) 协议开源。

本项目与上海米哈游影铁科技有限公司及其关联公司没有从属关系。
