# Prototype

## Usage

```sh
npm install
npm run start
```



## 檔案路徑

檔案路徑要以`dist`資料夾內的相對路徑為準

**example**
`/pages/index.html`內的`img`路徑
```
<img src="../assets/icons/no_list.svg">
```
需改為`/icons/no_list.svg` 才能讀取到
```
<img src="./icons/no_list.svg">
```

## 專案資料夾


| 資料夾        | 描述             |
| ------------- | ---------------- |
| assets        | 靜態檔案         |
| assets/icons  | 小icon,格式svg   |
| assets/images | 圖片,jpg png檔案 |
| pages         | 切版html         |
| scss          | css樣式          |

## CSS 撰寫規範

http://getbem.com/

## SCSS 資料夾結構規範

https://ithelp.ithome.com.tw/articles/10186760
https://www.sitepoint.com/architecture-sass-project/

- 除了 `main.scss`，其餘檔案都要加`_`，[參考](https://www.sitepoint.com/architecture-sass-project/)

**基礎資料夾**

| 資料夾     | 描述                                               |
| ---------- | -------------------------------------------------- |
| base       | 來自外部的 reset 類型 css 檔案                     |
| components | button,dropdown,navigation...,有重用性的功能 class |
| helpers    | padding,margin,color,...untilies 的 class          |
| layout     | footer,head,container,...重用性的排版 class        |
| pages      | 特定頁面才有的 class,檔案以頁面命名                |

## UI 設計參考

- W3c
- https://www.uiguideline.com/components
- https://careerfoundry.com/en/blog/ui-design/ui-element-glossary/
