# 描述

让简悦的程序可以接入 ChatGPT Web 版并以「流」的形式回复。

# 演示

![](https://github.com/Kenshin/simpread/assets/81074/04f647ba-bd67-471c-84ad-ad71929b8e19)

<details><summary>更多效果</summary>
  <img src="https://github.com/Kenshin/simpread/assets/81074/2505c50d-4c04-4c62-96a5-979464846579"/>
</details>

# 如何安装

因为项目比较简单且无法独立使用（属于简悦项目的辅助性工具），所以没有上架到 Chrome 以及 Edge，因此需要手动安装。

## 下载

进入 https://github.com/Kenshin/simpread-chatgpt-helper 右上角 → **Code** → **Download ZIP** 然后解压缩到本地。

<details>
  <img src="https://github.com/Kenshin/simpread/assets/81074/3d11bb66-82b5-4242-8d6b-be519891bd04">
</details>

## Chrome

进入 `chrome://extensions/` 后使用开发者模式加载。

<details>
  <img src="https://github.com/Kenshin/simpread/assets/81074/32a8c9ca-0dce-4af9-bf41-079cdbb91bae">
</details>

## Edge

进入 `edge://extensions/` 后使用开发者模式加载。

<details>
  <img src="https://github.com/Kenshin/simpread/assets/81074/82939d47-e442-477d-98ed-1a74cc9eb702">
</details>

# 获取 ID

根据不同的浏览器，复制对应的 `ID`，请留意：每个用户手动安装后的 `ID` 都不一样。

下面所示的值为 `alldlbingjakedcnipocpelmabmdjdbj`

<details><summary>Chrome</summary>
  进入 <code>chrome://extensions/</code><br>
  <img src="https://github.com/Kenshin/simpread/assets/81074/6e5c4cc5-3aa7-4eb8-a26c-ce8695dbb5bc"/>
</details>

<details><summary>Edge</summary>
  进入 <code>edge://extensions/</code><br>
  <img src="https://github.com/Kenshin/simpread/assets/81074/762bc1cc-64a2-482e-b12e-e7b96437946b"/>
</details>

# 如何使用

因为无法独立使用，目前接入了两个简悦插件：

## 划词翻译

[安装此插件](https://simpread.ksria.cn/plugins/details/ohnTKVHz4a) 然后随便进入一个页面 e.g. https://sspai.com/post/69972

右下角 → 动作 → 插件触发器 → 打开划词翻译的选项页，并按下图所示启用相应功能

![](https://github.com/Kenshin/simpread/assets/81074/15ddcbd1-f1b0-4be3-b6af-eed75add2136)

## 全文翻译

[安装此插件](https://simpread.ksria.cn/plugins/details/Y7JxbP7B4H) 然后随便进入一个页面 e.g. https://sspai.com/post/69972

右下角 → 动作 → 插件触发器 → 打开全文翻译的选项页，并按下图所示启用相应功能

![](https://github.com/Kenshin/simpread/assets/81074/26bd9d90-8d2e-480c-a186-cd0b4bb07767)

## 调整流式的速度

因为调用 ChatGPT API 会受到网络环境等因素影响导致导致回复速度（速率）会有区别，如果你的网络环境速度很快，可以使用以下方案调整相应速率。

除非你觉得速度较慢，否则不建议设置。😄

<details><summary>划词翻译</summary>
  <img src="https://github.com/Kenshin/simpread/assets/81074/1ad0b1e3-6ca6-4917-a64f-97fe9e910774"/>
</details>

<details><summary>全文翻译</summary>
  <img src="https://github.com/Kenshin/simpread/assets/81074/646db0a9-f6b1-4995-91e7-a0e9f62b913a"/>
</details>

# 常见问题

1. 因为调用的是 ChatGPT Web 端的数据，所以需要事先登录你的 ChatGPT 账户。

2. 建议如果是 ChatGPT Plus 账户的用户可使用此方式。

3. 在使用时的速度取决于你的网络质量。

4. 当网络环境较差时会出现无法使用的情况，可使用 **重新加载**

   ![](https://github.com/Kenshin/simpread/assets/81074/5fec9796-c864-46f6-86c2-1d932f21ab2a)