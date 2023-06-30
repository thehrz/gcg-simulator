# gcg-simulator [WIP]

[[中文/Chinese]](https://github.com/Thehrz/gcg-simulator/blob/master/README_CN.md)

> Disclaimer: This project is fully compliant with the [Genshin Impact Terms of Service](https://genshin.hoyoverse.com/en/company/terms), this git repository (Thehrz/gcg-simulator) does not include Genshin Impact assets, no distribution of Genshin Impact assets.

![gcg-simulator](https://s2.loli.net/2023/06/30/6JSpMbZzrT45ULC.png)

An open-source front-end simulator for the Genius Invokation TCG. Using Vue3.

## Demo

[Link](https://gcg-simulator.nahida.work)

> Disclaimer: This demo is based on `gcg-simulator`, and uses some of the Genshin Impact assets, But it has no direct relationship with this repository. Some of the Genshin Impact assets used in the demo are copyrighted by COGNOSPHERE, and the assets are from the Internet or in-game interception, with no unpacking, or decompiling code behavior. This demo is for the Genshin Impact players to share and learn, only as a test site to show this project, not with online game properties.

## Usage

### Pre-Build Notes

> This repository does not include the Genshin Impact access, so the user can not view the complete game access, including cards, avatars, skills, and other images in the browser after starting this repository code.

> **You are required to obtain the original Genshin Impact assets without violating the [Genshin Impact Terms of Service](https://genshin.hoyoverse.com/en/company/terms) (without unpacking, etc.) to start the project successfully.**

We use Docker to containerize services and use Docker Compose to build and run these containers.

### Clone

```shell
$ git clone --recurse-submodules https://github.com/Thehrz/gcg-simulator.git
```

### Run

```shell
$ docker compose up -d
```

### Stop

```shell
$ docker compose down
```

## License

> Disclaimer: This project is fully compliant with the [Genshin Impact Terms of Service](https://genshin.hoyoverse.com/en/company/terms), this git repository (Thehrz/gcg-simulator) does not include Genshin Impact assets, no distribution of Genshin Impact assets.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FThehrz%2Fgcg-simulator.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FThehrz%2Fgcg-simulator?ref=badge_large)

[MIT](https://github.com/Thehrz/gcg-simulator/blob/master/LICENSE)

This project has no affiliation with COGNOSPHERE.
