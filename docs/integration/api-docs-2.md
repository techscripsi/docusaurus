---
title: Rustore Public Api v1.0.0
language_tabs:
  - "'ruby": Ruby'
  - "'python": Python'
language_clients:
  - "'ruby": ""
  - "'python": ""
toc_footers: []
includes: []
search: false
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: widdershins v4.0.1

---

<h1 id="rustore-public-api">Rustore Public Api v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="/">/</a>

# Authentication

* API Key (access-token)
    - Parameter Name: **Public-Token**, in: header. 

<h1 id="rustore-public-api-public-api-rustore">Public api RuStore</h1>

(Owner: Pantheon)

## Получение версий приложения

<a id="opIdgetAppVersions"></a>

> Code samples

`GET /public/v1/application/{packageName}/version`

<h3 id="получение-версий-приложения-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|TESTASD|
|ids|query|array[integer]|false|none|
|size|query|integer(int32)|false|none|
|page|query|integer(int32)|false|none|

> Example responses

> 200 Response

<h3 id="получение-версий-приложения-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoPaginationContentDtoAppVersionDto](#schemadefaultresponsedtopaginationcontentdtoappversiondto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Создание черновика версии приложения

<a id="opIdcreateVersion"></a>

> Code samples

`POST /public/v1/application/{packageName}/version`

> Body parameter

```json
{
  "appName": "string",
  "appType": "string",
  "categories": [
    "string"
  ],
  "ageLegal": "string",
  "shortDescription": "string",
  "fullDescription": "string",
  "whatsNew": "string",
  "moderInfo": "string",
  "priceValue": 0,
  "publishType": "string",
  "partialValue": 0,
  "publishDateTime": "2019-08-24T14:15:22Z",
  "seoTagIds": [
    0
  ]
}
```

<h3 id="создание-черновика-версии-приложения-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|body|body|[SaveDraftVersionRequest](#schemasavedraftversionrequest)|true|none|

> Example responses

> 200 Response

<h3 id="создание-черновика-версии-приложения-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoLong](#schemadefaultresponsedtolong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Публикация версии

<a id="opIdpublishAppVersion"></a>

> Code samples

`POST /public/v1/application/{packageName}/version/{versionId}/publish`

<h3 id="публикация-версии-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|versionId|path|integer(int64)|true|none|

> Example responses

> 200 Response

<h3 id="публикация-версии-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoVoid](#schemadefaultresponsedtovoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Изменение настроек публикации версии

<a id="opIdupdatePublishSettings"></a>

> Code samples

`POST /public/v1/application/{packageName}/version/{versionId}/publish-settings`

> Body parameter

```json
{
  "publishType": "string",
  "partialValue": 0,
  "publishDateTime": "2019-08-24T14:15:22Z"
}
```

<h3 id="изменение-настроек-публикации-версии-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|versionId|path|integer(int64)|true|none|
|body|body|[PublishSettings](#schemapublishsettings)|true|none|

> Example responses

> 200 Response

<h3 id="изменение-настроек-публикации-версии-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoVoid](#schemadefaultresponsedtovoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Загрузка скриншота для приложения

<a id="opIduploadScreenshot"></a>

> Code samples

`POST /public/v1/application/{packageName}/version/{versionId}/image/screenshot/{orientation}/{ordinal}`

> Body parameter

```json
{
  "file": "string"
}
```

<h3 id="загрузка-скриншота-для-приложения-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|versionId|path|integer(int64)|true|none|
|ordinal|path|integer(int64)|true|none|
|orientation|path|string|true|none|
|body|body|object|false|none|
|» file|body|string(binary)|true|none|

> Example responses

> 200 Response

<h3 id="загрузка-скриншота-для-приложения-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoVoid](#schemadefaultresponsedtovoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Загрузка иконки для приложения

<a id="opIduploadIcon"></a>

> Code samples

`POST /public/v1/application/{packageName}/version/{versionId}/image/icon`

> Body parameter

```json
{
  "file": "string"
}
```

<h3 id="загрузка-иконки-для-приложения-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|versionId|path|integer(int64)|true|none|
|body|body|object|false|none|
|» file|body|string(binary)|true|none|

> Example responses

> 200 Response

<h3 id="загрузка-иконки-для-приложения-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoVoid](#schemadefaultresponsedtovoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Отправка на модерацию

<a id="opIdsendToModeration"></a>

> Code samples

`POST /public/v1/application/{packageName}/version/{versionId}/commit`

<h3 id="отправка-на-модерацию-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|versionId|path|string|true|none|
|priorityUpdate|query|integer(int32)|false|none|

> Example responses

> 200 Response

<h3 id="отправка-на-модерацию-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoVoid](#schemadefaultresponsedtovoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Загрузка APK

<a id="opIduploadApk"></a>

> Code samples

`POST /public/v1/application/{packageName}/version/{versionId}/apk`

> Body parameter

```json
{
  "file": "string"
}
```

<h3 id="загрузка-apk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|versionId|path|integer(int64)|true|none|
|servicesType|query|string|false|none|
|isMainApk|query|boolean|false|none|
|body|body|object|false|none|
|» file|body|string(binary)|true|none|

> Example responses

> 200 Response

<h3 id="загрузка-apk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoVoid](#schemadefaultresponsedtovoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Загрузка AAB

<a id="opIduploadAab"></a>

> Code samples

`POST /public/v1/application/{packageName}/version/{versionId}/aab`

> Body parameter

```json
{
  "file": "string"
}
```

<h3 id="загрузка-aab-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|versionId|path|integer(int64)|true|none|
|body|body|object|false|none|
|» file|body|string(binary)|true|none|

> Example responses

> 200 Response

<h3 id="загрузка-aab-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoVoid](#schemadefaultresponsedtovoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение списка приложений разработчика

<a id="opIdgetUserApps"></a>

> Code samples

`GET /public/v1/application`

<h3 id="получение-списка-приложений-разработчика-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|request|query|[UserAppsRequest](#schemauserappsrequest)|true|none|

> Example responses

> 200 Response

<h3 id="получение-списка-приложений-разработчика-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoUserAppsDto](#schemadefaultresponsedtouserappsdto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Удаление версии черновика

<a id="opIddeleteVersion"></a>

> Code samples

`DELETE /public/v1/application/{packageName}/version/{versionId}`

<h3 id="удаление-версии-черновика-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|versionId|path|integer(int64)|true|none|

> Example responses

> 200 Response

<h3 id="удаление-версии-черновика-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoVoid](#schemadefaultresponsedtovoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="rustore-public-api-public-api-rustore-google-like-api">Public api RuStore (Google-like api)</h1>

(Owner: BigInt)

## Подтвердить получение подписки из SmartPay по purchaseToken первого платежа

<a id="opIdgetSubscriptionAcknowledgment_1"></a>

> Code samples

`POST /public/glike/subscription/{packageName}/{subscriptionId}/{purchaseToken}:acknowledge`

<h3 id="подтвердить-получение-подписки-из-smartpay-по-purchasetoken-первого-платежа-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|subscriptionId|path|string|true|none|
|purchaseToken|path|string|true|none|

> Example responses

> 400 Response

<h3 id="подтвердить-получение-подписки-из-smartpay-по-purchasetoken-первого-платежа-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение данных подписки по ID платежа

<a id="opIdgetSubscription_4"></a>

> Code samples

`GET /public/glike/subscription/{packageName}/{subscriptionId}/{purchaseToken}`

<h3 id="получение-данных-подписки-по-id-платежа-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|subscriptionId|path|string|true|none|
|purchaseToken|path|string|true|none|

> Example responses

> 200 Response

<h3 id="получение-данных-подписки-по-id-платежа-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[SubscriptionResponseDto](#schemasubscriptionresponsedto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="rustore-public-api-public-api-rustore-v3">Public api RuStore V3</h1>

(Owner: BigInt)

## Получение данных подписки по ID платежа

<a id="opIdgetSubscription"></a>

> Code samples

`GET /public/v3/subscription/{packageName}/{subscriptionId}/{subscriptionToken}`

<h3 id="получение-данных-подписки-по-id-платежа-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|subscriptionId|path|string|true|none|
|subscriptionToken|path|string|true|none|

> Example responses

> 200 Response

<h3 id="получение-данных-подписки-по-id-платежа-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[SubscriptionResponseDto](#schemasubscriptionresponsedto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="rustore-public-api-public-app-developers">Public App Developers</h1>

(Owner: Pantheon)

## Добавление/Обновление роли пользователя разработчика к приложению

<a id="opIdputDevToApp"></a>

> Code samples

`PUT /public/v1/application/{packageName}/developer/{devVkId}/role/{role}`

<h3 id="добавление/обновление-роли-пользователя-разработчика-к-приложению-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|devVkId|path|string|true|none|
|role|path|string|true|none|

> Example responses

> 200 Response

<h3 id="добавление/обновление-роли-пользователя-разработчика-к-приложению-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoApiAppDeveloper](#schemadefaultresponsedtoapiappdeveloper)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Отзыв роли разработчика приложения

<a id="opIdrevokeAppDeveloperRole"></a>

> Code samples

`DELETE /public/v1/application/{packageName}/developer/{devVkId}/role/{role}`

<h3 id="отзыв-роли-разработчика-приложения-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|devVkId|path|string|true|none|
|role|path|string|true|none|

> Example responses

> 200 Response

<h3 id="отзыв-роли-разработчика-приложения-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoVoid](#schemadefaultresponsedtovoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение информации о разработчиках приложения

<a id="opIdgetAppDevelopers"></a>

> Code samples

`GET /public/v1/application/{packageName}/developer`

<h3 id="получение-информации-о-разработчиках-приложения-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|pageSize|query|integer(int32)|false|none|
|pageToken|query|string|false|none|

> Example responses

> 200 Response

<h3 id="получение-информации-о-разработчиках-приложения-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoRetrieveAppDevelopersResult](#schemadefaultresponsedtoretrieveappdevelopersresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="rustore-public-api-public-api-rustore-2">Public api RuStore 2</h1>

(Owner: Pantheon)

## Получить список ответов разработчика на отзывы

<a id="opIdgetDevResponse"></a>

> Code samples

`GET /public/v1/application/{packageName}/feedback`

<h3 id="получить-список-ответов-разработчика-на-отзывы-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Имя пакета|
|pageable|query|[Pageable](#schemapageable)|true|none|
|id|query|array[integer]|false|ID ответов разработчика на отзывы|

> Example responses

> 200 Response

<h3 id="получить-список-ответов-разработчика-на-отзывы-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoListFeedbackResponseDto](#schemadefaultresponsedtolistfeedbackresponsedto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Написать ответ разработчика на отзыв

<a id="opIdcreateDevResponse"></a>

> Code samples

`POST /public/v1/application/{packageName}/feedback`

> Body parameter

```json
{
  "message": "string"
}
```

<h3 id="написать-ответ-разработчика-на-отзыв-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Имя пакета|
|commentId|query|integer(int64)|true|ID отзыва пользователя|
|body|body|[FeedbackMessageDto](#schemafeedbackmessagedto)|true|none|

> Example responses

> 200 Response

<h3 id="написать-ответ-разработчика-на-отзыв-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoFeedbackIdDto](#schemadefaultresponsedtofeedbackiddto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получить ответ разработчика на отзыв

<a id="opIdgetDevResponse_1"></a>

> Code samples

`GET /public/v1/application/{packageName}/feedback/{feedbackId}`

<h3 id="получить-ответ-разработчика-на-отзыв-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Имя пакета|
|feedbackId|path|integer(int64)|true|ID ответа разработчика на отзывы|

> Example responses

> 200 Response

<h3 id="получить-ответ-разработчика-на-отзыв-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoFeedbackResponseDto](#schemadefaultresponsedtofeedbackresponsedto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Изменить ответ разработчика на отзыв

<a id="opIdeditDevResponse"></a>

> Code samples

`POST /public/v1/application/{packageName}/feedback/{feedbackId}`

> Body parameter

```json
{
  "message": "string"
}
```

<h3 id="изменить-ответ-разработчика-на-отзыв-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Имя пакета|
|feedbackId|path|integer(int64)|true|ID ответа разработчика на отзыв|
|body|body|[FeedbackMessageDto](#schemafeedbackmessagedto)|true|none|

> Example responses

> 200 Response

<h3 id="изменить-ответ-разработчика-на-отзыв-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoFeedbackIdDto](#schemadefaultresponsedtofeedbackiddto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Удалить ответ разработчика на отзыв

<a id="opIddeleteDevResponse"></a>

> Code samples

`DELETE /public/v1/application/{packageName}/feedback/{feedbackId}`

<h3 id="удалить-ответ-разработчика-на-отзыв-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Имя пакета|
|feedbackId|path|integer(int64)|true|ID ответа разработчика на отзыв|

> Example responses

> 200 Response

<h3 id="удалить-ответ-разработчика-на-отзыв-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoVoid](#schemadefaultresponsedtovoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получить отзывы пользователей на приложение

<a id="opIdgetUserComment"></a>

> Code samples

`GET /public/v1/application/{packageName}/comment`

<h3 id="получить-отзывы-пользователей-на-приложение-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Имя пакета|
|id|query|array[integer]|false|Фильтр по ID отзыва|
|pageable|query|[Pageable](#schemapageable)|true|none|

> Example responses

> 200 Response

<h3 id="получить-отзывы-пользователей-на-приложение-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoListUserCommentDto](#schemadefaultresponsedtolistusercommentdto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Рейтинг приложения

<a id="opIdgetRating"></a>

> Code samples

`GET /public/v1/application/{packageName}/comment/statistic`

<h3 id="рейтинг-приложения-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Имя пакета|

> Example responses

> 200 Response

<h3 id="рейтинг-приложения-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoRatingWithDevDto](#schemadefaultresponsedtoratingwithdevdto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Экспортировать отзывы пользователей в CSV файл

<a id="opIdgetUserCommentOnFile"></a>

> Code samples

`GET /public/v1/application/{packageName}/comment/export`

<h3 id="экспортировать-отзывы-пользователей-в-csv-файл-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Имя пакета|
|from|query|string(date)|true|Дата создания/обновления отзыва с|
|to|query|string(date)|true|Дата создания/обновления отзыва по|

> Example responses

> 200 Response

<h3 id="экспортировать-отзывы-пользователей-в-csv-файл-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|string|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="rustore-public-api-public-api-rustore-smartpay-format">Public api RuStore (Smartpay format)</h1>

(Owner: BigInt)

## Получение токена для доступа к API

<a id="opIdgenerateToken"></a>

> Code samples

`POST /public/auth`

> Body parameter

```json
{
  "keyId": 0,
  "timestamp": "string",
  "signature": "string"
}
```

<h3 id="получение-токена-для-доступа-к-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicTokenRequest](#schemapublictokenrequest)|true|none|

> Example responses

> 200 Response

<h3 id="получение-токена-для-доступа-к-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoPublicTokenResponse](#schemadefaultresponsedtopublictokenresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение информации по идентификатору счета

<a id="opIdgetInvoiceByInvoiceId"></a>

> Code samples

`GET /public/v2/purchase/{invoiceId}`

<h3 id="получение-информации-по-идентификатору-счета-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|none|

> Example responses

> 200 Response

<h3 id="получение-информации-по-идентификатору-счета-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoInvoicePaymentDto](#schemadefaultresponsedtoinvoicepaymentdto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение информации о подписке по идентификатору покупки

<a id="opIdgetSubscription_1"></a>

> Code samples

`GET /public/subscription/{purchaseToken}`

<h3 id="получение-информации-о-подписке-по-идентификатору-покупки-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|purchaseToken|path|string|true|none|

> Example responses

> 200 Response

<h3 id="получение-информации-о-подписке-по-идентификатору-покупки-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoSmartPaySubscriptionsResponse](#schemadefaultresponsedtosmartpaysubscriptionsresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение статуса подписки по идентификатору покупки

<a id="opIdgetSubscriptionState"></a>

> Code samples

`GET /public/subscription/{purchaseToken}/state`

<h3 id="получение-статуса-подписки-по-идентификатору-покупки-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|purchaseToken|path|string|true|none|

> Example responses

> 200 Response

<h3 id="получение-статуса-подписки-по-идентификатору-покупки-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoSubscriptionStatusResponse](#schemadefaultresponsedtosubscriptionstatusresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение информации по платежу с использованием invoice id

<a id="opIdgetInvoiceById_1"></a>

> Code samples

`GET /public/purchase`

<h3 id="получение-информации-по-платежу-с-использованием-invoice-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|query|integer(int64)|true|none|

> Example responses

> 200 Response

<h3 id="получение-информации-по-платежу-с-использованием-invoice-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoInvoiceInfoResponse](#schemadefaultresponsedtoinvoiceinforesponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение информации по платежу

<a id="opIdgetInvoice_1"></a>

> Code samples

`GET /public/purchase/{purchaseToken}`

<h3 id="получение-информации-по-платежу-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|purchaseToken|path|string|true|none|

> Example responses

> 200 Response

<h3 id="получение-информации-по-платежу-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoInvoiceInfoResponse](#schemadefaultresponsedtoinvoiceinforesponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение списка счетов по приложению

<a id="opIdgetAppInvoices"></a>

> Code samples

`GET /public/applications/{applicationCode}/invoices`

<h3 id="получение-списка-счетов-по-приложению-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationCode|path|integer(int64)|true|none|
|invoiceStatuses|query|array[string]|true|none|
|invoiceDate|query|string(date)|true|none|
|pageNumber|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|invoiceStatuses|created|
|invoiceStatuses|executed|
|invoiceStatuses|cancelled|
|invoiceStatuses|rejected|
|invoiceStatuses|expired|
|invoiceStatuses|paid|
|invoiceStatuses|confirmed|
|invoiceStatuses|reversed|
|invoiceStatuses|refunded|
|invoiceStatuses|consumed|

> Example responses

> 200 Response

<h3 id="получение-списка-счетов-по-приложению-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoPaginationContentDtoInvoicePaymentDto](#schemadefaultresponsedtopaginationcontentdtoinvoicepaymentdto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

<h1 id="rustore-public-api-public-api">public-api</h1>

## Подтверждение получения подписки SANDBOX

<a id="opIdgetSubscriptionAcknowledgment"></a>

> Code samples

`POST /public/sandbox/glike/subscription/{packageName}/{subscriptionId}/{purchaseToken}:acknowledge`

<h3 id="подтверждение-получения-подписки-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|subscriptionId|path|string|true|none|
|purchaseToken|path|string|true|none|

> Example responses

> 400 Response

<h3 id="подтверждение-получения-подписки-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение данных подписки V3 SANDBOX

<a id="opIdgetSubscription_2"></a>

> Code samples

`GET /public/sandbox/v3/subscription/{packageName}/{subscriptionId}/{subscriptionToken}`

<h3 id="получение-данных-подписки-v3-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|none|
|subscriptionId|path|string|true|none|
|subscriptionToken|path|string|true|none|

> Example responses

> 200 Response

<h3 id="получение-данных-подписки-v3-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[SubscriptionResponseDto](#schemasubscriptionresponsedto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение данных подписки SANDBOX

<a id="opIdgetSubscription_3"></a>

> Code samples

`GET /public/sandbox/subscription/{purchaseToken}`

<h3 id="получение-данных-подписки-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|purchaseToken|path|string|true|none|

> Example responses

> 200 Response

<h3 id="получение-данных-подписки-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoSmartPaySubscriptionsResponse](#schemadefaultresponsedtosmartpaysubscriptionsresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение статуса подписки SANDBOX

<a id="opIdgetSubscriptionState_1"></a>

> Code samples

`GET /public/sandbox/subscription/{purchaseToken}/state`

<h3 id="получение-статуса-подписки-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|purchaseToken|path|string|true|none|

> Example responses

> 200 Response

<h3 id="получение-статуса-подписки-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoSubscriptionStatusResponse](#schemadefaultresponsedtosubscriptionstatusresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение данных платежа SANDBOX с использованием invoiceId

<a id="opIdgetInvoiceById"></a>

> Code samples

`GET /public/sandbox/purchase`

<h3 id="получение-данных-платежа-sandbox-с-использованием-invoiceid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|query|integer(int64)|true|none|

> Example responses

> 200 Response

<h3 id="получение-данных-платежа-sandbox-с-использованием-invoiceid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoInvoiceInfoResponse](#schemadefaultresponsedtoinvoiceinforesponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

## Получение данных платежа SANDBOX

<a id="opIdgetInvoice"></a>

> Code samples

`GET /public/sandbox/purchase/{purchaseToken}`

<h3 id="получение-данных-платежа-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|purchaseToken|path|string|true|none|

> Example responses

> 200 Response

<h3 id="получение-данных-платежа-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DefaultResponseDtoInvoiceInfoResponse](#schemadefaultresponsedtoinvoiceinforesponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[DefaultResponseDto](#schemadefaultresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[DefaultResponseDto](#schemadefaultresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[DefaultResponseDto](#schemadefaultresponsedto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[DefaultResponseDto](#schemadefaultresponsedto)|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Method Not Allowed|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|Unsupported Media Type|[DefaultResponseDtoObject](#schemadefaultresponsedtoobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[DefaultResponseDto](#schemadefaultresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
access-token
</aside>

# Schemas

<h2 id="tocS_DefaultResponseDtoObject">DefaultResponseDtoObject</h2>

<a id="schemadefaultresponsedtoobject"></a>
<a id="schema_DefaultResponseDtoObject"></a>
<a id="tocSdefaultresponsedtoobject"></a>
<a id="tocsdefaultresponsedtoobject"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {},
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|object|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_DefaultResponseDto">DefaultResponseDto</h2>

<a id="schemadefaultresponsedto"></a>
<a id="schema_DefaultResponseDto"></a>
<a id="tocSdefaultresponsedto"></a>
<a id="tocsdefaultresponsedto"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {},
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|object|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_ApiAppDeveloper">ApiAppDeveloper</h2>

<a id="schemaapiappdeveloper"></a>
<a id="schema_ApiAppDeveloper"></a>
<a id="tocSapiappdeveloper"></a>
<a id="tocsapiappdeveloper"></a>

```json
{
  "devVkId": "string",
  "role": "string",
  "firstName": "string",
  "lastName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devVkId|string|false|none|none|
|role|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|

<h2 id="tocS_DefaultResponseDtoApiAppDeveloper">DefaultResponseDtoApiAppDeveloper</h2>

<a id="schemadefaultresponsedtoapiappdeveloper"></a>
<a id="schema_DefaultResponseDtoApiAppDeveloper"></a>
<a id="tocSdefaultresponsedtoapiappdeveloper"></a>
<a id="tocsdefaultresponsedtoapiappdeveloper"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "devVkId": "string",
    "role": "string",
    "firstName": "string",
    "lastName": "string"
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[ApiAppDeveloper](#schemaapiappdeveloper)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_SaveDraftVersionRequest">SaveDraftVersionRequest</h2>

<a id="schemasavedraftversionrequest"></a>
<a id="schema_SaveDraftVersionRequest"></a>
<a id="tocSsavedraftversionrequest"></a>
<a id="tocssavedraftversionrequest"></a>

```json
{
  "appName": "string",
  "appType": "string",
  "categories": [
    "string"
  ],
  "ageLegal": "string",
  "shortDescription": "string",
  "fullDescription": "string",
  "whatsNew": "string",
  "moderInfo": "string",
  "priceValue": 0,
  "publishType": "string",
  "partialValue": 0,
  "publishDateTime": "2019-08-24T14:15:22Z",
  "seoTagIds": [
    0
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appName|string|false|none|none|
|appType|string|false|none|none|
|categories|[string]|false|none|none|
|ageLegal|string|false|none|none|
|shortDescription|string|false|none|none|
|fullDescription|string|false|none|none|
|whatsNew|string|false|none|none|
|moderInfo|string|false|none|none|
|priceValue|integer(int64)|false|none|none|
|publishType|string|false|none|none|
|partialValue|integer(int32)|false|none|none|
|publishDateTime|string(date-time)|false|none|none|
|seoTagIds|[integer]|false|none|none|

<h2 id="tocS_DefaultResponseDtoLong">DefaultResponseDtoLong</h2>

<a id="schemadefaultresponsedtolong"></a>
<a id="schema_DefaultResponseDtoLong"></a>
<a id="tocSdefaultresponsedtolong"></a>
<a id="tocsdefaultresponsedtolong"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": 0,
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|integer(int64)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_DefaultResponseDtoVoid">DefaultResponseDtoVoid</h2>

<a id="schemadefaultresponsedtovoid"></a>
<a id="schema_DefaultResponseDtoVoid"></a>
<a id="tocSdefaultresponsedtovoid"></a>
<a id="tocsdefaultresponsedtovoid"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {},
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|object|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_PublishSettings">PublishSettings</h2>

<a id="schemapublishsettings"></a>
<a id="schema_PublishSettings"></a>
<a id="tocSpublishsettings"></a>
<a id="tocspublishsettings"></a>

```json
{
  "publishType": "string",
  "partialValue": 0,
  "publishDateTime": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publishType|string|false|none|none|
|partialValue|integer(int32)|false|none|none|
|publishDateTime|string(date-time)|false|none|none|

<h2 id="tocS_FeedbackMessageDto">FeedbackMessageDto</h2>

<a id="schemafeedbackmessagedto"></a>
<a id="schema_FeedbackMessageDto"></a>
<a id="tocSfeedbackmessagedto"></a>
<a id="tocsfeedbackmessagedto"></a>

```json
{
  "message": "string"
}

```

Содержимое текста ответа на отзыв

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_DefaultResponseDtoFeedbackIdDto">DefaultResponseDtoFeedbackIdDto</h2>

<a id="schemadefaultresponsedtofeedbackiddto"></a>
<a id="schema_DefaultResponseDtoFeedbackIdDto"></a>
<a id="tocSdefaultresponsedtofeedbackiddto"></a>
<a id="tocsdefaultresponsedtofeedbackiddto"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "id": 0
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[FeedbackIdDto](#schemafeedbackiddto)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_FeedbackIdDto">FeedbackIdDto</h2>

<a id="schemafeedbackiddto"></a>
<a id="schema_FeedbackIdDto"></a>
<a id="tocSfeedbackiddto"></a>
<a id="tocsfeedbackiddto"></a>

```json
{
  "id": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|

<h2 id="tocS_PublicTokenRequest">PublicTokenRequest</h2>

<a id="schemapublictokenrequest"></a>
<a id="schema_PublicTokenRequest"></a>
<a id="tocSpublictokenrequest"></a>
<a id="tocspublictokenrequest"></a>

```json
{
  "keyId": 0,
  "timestamp": "string",
  "signature": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyId|integer(int64)|true|none|none|
|timestamp|string|true|none|none|
|signature|string|true|none|none|

<h2 id="tocS_DefaultResponseDtoPublicTokenResponse">DefaultResponseDtoPublicTokenResponse</h2>

<a id="schemadefaultresponsedtopublictokenresponse"></a>
<a id="schema_DefaultResponseDtoPublicTokenResponse"></a>
<a id="tocSdefaultresponsedtopublictokenresponse"></a>
<a id="tocsdefaultresponsedtopublictokenresponse"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "jwe": "string",
    "ttl": 0
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[PublicTokenResponse](#schemapublictokenresponse)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_PublicTokenResponse">PublicTokenResponse</h2>

<a id="schemapublictokenresponse"></a>
<a id="schema_PublicTokenResponse"></a>
<a id="tocSpublictokenresponse"></a>
<a id="tocspublictokenresponse"></a>

```json
{
  "jwe": "string",
  "ttl": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwe|string|false|none|none|
|ttl|integer(int64)|false|none|none|

<h2 id="tocS_IntroductoryPriceInfo">IntroductoryPriceInfo</h2>

<a id="schemaintroductorypriceinfo"></a>
<a id="schema_IntroductoryPriceInfo"></a>
<a id="tocSintroductorypriceinfo"></a>
<a id="tocsintroductorypriceinfo"></a>

```json
{
  "introductoryPriceCurrencyCode": "string",
  "introductoryPriceAmountMicros": "string",
  "introductoryPricePeriod": "string",
  "introductoryPriceCycles": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|introductoryPriceCurrencyCode|string|false|none|none|
|introductoryPriceAmountMicros|string|false|none|none|
|introductoryPricePeriod|string|false|none|none|
|introductoryPriceCycles|string|false|none|none|

<h2 id="tocS_SubscriptionResponseDto">SubscriptionResponseDto</h2>

<a id="schemasubscriptionresponsedto"></a>
<a id="schema_SubscriptionResponseDto"></a>
<a id="tocSsubscriptionresponsedto"></a>
<a id="tocssubscriptionresponsedto"></a>

```json
{
  "startTimeMillis": "string",
  "expiryTimeMillis": "string",
  "autoRenewing": true,
  "priceCurrencyCode": "string",
  "priceAmountMicros": "string",
  "countryCode": "string",
  "paymentState": 0,
  "cancelReason": 0,
  "orderId": "string",
  "acknowledgementState": 0,
  "kind": "string",
  "purchaseType": 0,
  "introductoryPriceInfo": {
    "introductoryPriceCurrencyCode": "string",
    "introductoryPriceAmountMicros": "string",
    "introductoryPricePeriod": "string",
    "introductoryPriceCycles": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTimeMillis|string|false|none|none|
|expiryTimeMillis|string|false|none|none|
|autoRenewing|boolean|false|none|none|
|priceCurrencyCode|string|false|none|none|
|priceAmountMicros|string|false|none|none|
|countryCode|string|false|none|none|
|paymentState|integer(int32)|false|none|none|
|cancelReason|integer(int32)|false|none|none|
|orderId|string|false|none|none|
|acknowledgementState|integer(int32)|false|none|none|
|kind|string|false|none|none|
|purchaseType|integer(int32)|false|none|none|
|introductoryPriceInfo|[IntroductoryPriceInfo](#schemaintroductorypriceinfo)|false|none|none|

<h2 id="tocS_DefaultResponseDtoInvoicePaymentDto">DefaultResponseDtoInvoicePaymentDto</h2>

<a id="schemadefaultresponsedtoinvoicepaymentdto"></a>
<a id="schema_DefaultResponseDtoInvoicePaymentDto"></a>
<a id="tocSdefaultresponsedtoinvoicepaymentdto"></a>
<a id="tocsdefaultresponsedtoinvoicepaymentdto"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "invoiceId": 0,
    "invoiceDate": "2024-10-24T14:31:33+03:00",
    "refundDate": "2024-10-24T14:31:33+03:00",
    "invoiceStatus": "created",
    "developerPayload": "string",
    "applicationCode": 0,
    "ownerCode": 0,
    "paymentInfo": {
      "paymentDate": "2024-10-24T14:31:33+03:00",
      "maskedPan": "string",
      "paymentSystem": "string",
      "paymentWay": "string",
      "paymentWayCode": "string",
      "bankName": "string"
    },
    "order": {
      "orderId": "string",
      "orderNumber": "string",
      "visualName": "string",
      "amountCreate": 0,
      "amountCurrent": 0,
      "currency": "string",
      "itemCode": "string",
      "description": "string",
      "language": "string"
    }
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[InvoicePaymentDto](#schemainvoicepaymentdto)|false|none|Информация о счёте|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_InvoicePaymentDto">InvoicePaymentDto</h2>

<a id="schemainvoicepaymentdto"></a>
<a id="schema_InvoicePaymentDto"></a>
<a id="tocSinvoicepaymentdto"></a>
<a id="tocsinvoicepaymentdto"></a>

```json
{
  "invoiceId": 0,
  "invoiceDate": "2024-10-24T14:31:33+03:00",
  "refundDate": "2024-10-24T14:31:33+03:00",
  "invoiceStatus": "created",
  "developerPayload": "string",
  "applicationCode": 0,
  "ownerCode": 0,
  "paymentInfo": {
    "paymentDate": "2024-10-24T14:31:33+03:00",
    "maskedPan": "string",
    "paymentSystem": "string",
    "paymentWay": "string",
    "paymentWayCode": "string",
    "bankName": "string"
  },
  "order": {
    "orderId": "string",
    "orderNumber": "string",
    "visualName": "string",
    "amountCreate": 0,
    "amountCurrent": 0,
    "currency": "string",
    "itemCode": "string",
    "description": "string",
    "language": "string"
  }
}

```

Информация о счёте

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoiceId|integer(int64)|false|none|Номер счёта|
|invoiceDate|string(date-time)|false|none|Дата создания счёта (в MSK таймзоне)|
|refundDate|string(date-time)|false|none|Дата возврата средств по счету (в MSK таймзоне)|
|invoiceStatus|string|false|none|Статус счёта|
|developerPayload|string|false|none|Дополнительная информация по покупке, переданная в SDK при создании покупки|
|applicationCode|integer(int64)|false|none|Код приложения|
|ownerCode|integer(int64)|false|none|Код владельца приложения|
|paymentInfo|[PaymentInfoDto](#schemapaymentinfodto)|false|none|Платежная информация|
|order|[OrderDto](#schemaorderdto)|false|none|Информация о заказе|

#### Enumerated Values

|Property|Value|
|---|---|
|invoiceStatus|created|
|invoiceStatus|executed|
|invoiceStatus|cancelled|
|invoiceStatus|rejected|
|invoiceStatus|expired|
|invoiceStatus|paid|
|invoiceStatus|confirmed|
|invoiceStatus|reversed|
|invoiceStatus|refunded|
|invoiceStatus|consumed|

<h2 id="tocS_OrderDto">OrderDto</h2>

<a id="schemaorderdto"></a>
<a id="schema_OrderDto"></a>
<a id="tocSorderdto"></a>
<a id="tocsorderdto"></a>

```json
{
  "orderId": "string",
  "orderNumber": "string",
  "visualName": "string",
  "amountCreate": 0,
  "amountCurrent": 0,
  "currency": "string",
  "itemCode": "string",
  "description": "string",
  "language": "string"
}

```

Информация о заказе

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderId|string|false|none|Уникальный идентификатор заказа|
|orderNumber|string|false|none|Номер заказа|
|visualName|string|false|none|Наименование операции|
|amountCreate|integer(int64)|false|none|Сумма заказа в минимальных единицах валюты (в копейках)|
|amountCurrent|integer(int64)|false|none|Сумма заказа с учетом скидок в минимальных единицах валюты (в копейках)|
|currency|string|false|none|Код валюты|
|itemCode|string|false|none|Код продукта, указанный в консоли при создании продукта|
|description|string|false|none|Описание заказа|
|language|string|false|none|Язык описания|

<h2 id="tocS_PaymentInfoDto">PaymentInfoDto</h2>

<a id="schemapaymentinfodto"></a>
<a id="schema_PaymentInfoDto"></a>
<a id="tocSpaymentinfodto"></a>
<a id="tocspaymentinfodto"></a>

```json
{
  "paymentDate": "2024-10-24T14:31:33+03:00",
  "maskedPan": "string",
  "paymentSystem": "string",
  "paymentWay": "string",
  "paymentWayCode": "string",
  "bankName": "string"
}

```

Платежная информация

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentDate|string(date-time)|false|none|Дата и время оплаты счета (в MSK таймзоне)|
|maskedPan|string|false|none|Маскированный номер карты|
|paymentSystem|string|false|none|Платежная система|
|paymentWay|string|false|none|Способ оплаты|
|paymentWayCode|string|false|none|Идентификатор способа оплаты|
|bankName|string|false|none|Наименование банка-эмитента|

<h2 id="tocS_UserAppsRequest">UserAppsRequest</h2>

<a id="schemauserappsrequest"></a>
<a id="schema_UserAppsRequest"></a>
<a id="tocSuserappsrequest"></a>
<a id="tocsuserappsrequest"></a>

```json
{
  "pagination": true,
  "appName": "string",
  "appPackage": "string",
  "continuationToken": "string",
  "pageSize": 0,
  "orderFields": [
    "appId"
  ],
  "sortDirections": [
    "ASC"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|boolean|false|none|none|
|appName|string|false|none|none|
|appPackage|string|false|none|none|
|continuationToken|string|false|none|none|
|pageSize|integer(int32)|false|none|none|
|orderFields|[string]|false|none|none|
|sortDirections|[string]|false|none|none|

<h2 id="tocS_DefaultResponseDtoUserAppsDto">DefaultResponseDtoUserAppsDto</h2>

<a id="schemadefaultresponsedtouserappsdto"></a>
<a id="schema_DefaultResponseDtoUserAppsDto"></a>
<a id="tocSdefaultresponsedtouserappsdto"></a>
<a id="tocsdefaultresponsedtouserappsdto"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "content": [
      {
        "appId": 0,
        "packageName": "string",
        "appName": "string",
        "iconUrl": "string",
        "appStatus": "string",
        "versionName": "string",
        "versionCode": 0,
        "companyName": "string",
        "shortDescription": "string",
        "appVerUpdatedAt": "string",
        "activePrice": 0,
        "paid": true,
        "deviceType": "string",
        "appCoins": true,
        "role": "string"
      }
    ],
    "pageSize": 0,
    "continuationToken": "string"
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[UserAppsDto](#schemauserappsdto)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_UserAppData">UserAppData</h2>

<a id="schemauserappdata"></a>
<a id="schema_UserAppData"></a>
<a id="tocSuserappdata"></a>
<a id="tocsuserappdata"></a>

```json
{
  "appId": 0,
  "packageName": "string",
  "appName": "string",
  "iconUrl": "string",
  "appStatus": "string",
  "versionName": "string",
  "versionCode": 0,
  "companyName": "string",
  "shortDescription": "string",
  "appVerUpdatedAt": "string",
  "activePrice": 0,
  "paid": true,
  "deviceType": "string",
  "appCoins": true,
  "role": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|integer(int64)|false|none|none|
|packageName|string|false|none|none|
|appName|string|false|none|none|
|iconUrl|string|false|none|none|
|appStatus|string|false|none|none|
|versionName|string|false|none|none|
|versionCode|integer(int64)|false|none|none|
|companyName|string|false|none|none|
|shortDescription|string|false|none|none|
|appVerUpdatedAt|string|false|none|none|
|activePrice|integer(int64)|false|none|none|
|paid|boolean|false|none|none|
|deviceType|string|false|none|none|
|appCoins|boolean|false|none|none|
|role|string|false|none|none|

<h2 id="tocS_UserAppsDto">UserAppsDto</h2>

<a id="schemauserappsdto"></a>
<a id="schema_UserAppsDto"></a>
<a id="tocSuserappsdto"></a>
<a id="tocsuserappsdto"></a>

```json
{
  "content": [
    {
      "appId": 0,
      "packageName": "string",
      "appName": "string",
      "iconUrl": "string",
      "appStatus": "string",
      "versionName": "string",
      "versionCode": 0,
      "companyName": "string",
      "shortDescription": "string",
      "appVerUpdatedAt": "string",
      "activePrice": 0,
      "paid": true,
      "deviceType": "string",
      "appCoins": true,
      "role": "string"
    }
  ],
  "pageSize": 0,
  "continuationToken": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[UserAppData](#schemauserappdata)]|false|none|none|
|pageSize|integer(int32)|false|none|none|
|continuationToken|string|false|none|none|

<h2 id="tocS_AppVersionDto">AppVersionDto</h2>

<a id="schemaappversiondto"></a>
<a id="schema_AppVersionDto"></a>
<a id="tocSappversiondto"></a>
<a id="tocsappversiondto"></a>

```json
{
  "versionId": 0,
  "appName": "string",
  "appType": "string",
  "versionName": "string",
  "versionCode": 0,
  "versionStatus": "string",
  "publishType": "string",
  "publishDateTime": "2019-08-24T14:15:22Z",
  "sendDateForModer": "2019-08-24T14:15:22Z",
  "partialValue": 0,
  "whatsNew": "string",
  "priceValue": 0,
  "paid": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versionId|integer(int64)|false|none|none|
|appName|string|false|none|none|
|appType|string|false|none|none|
|versionName|string|false|none|none|
|versionCode|integer(int64)|false|none|none|
|versionStatus|string|false|none|none|
|publishType|string|false|none|none|
|publishDateTime|string(date-time)|false|none|none|
|sendDateForModer|string(date-time)|false|none|none|
|partialValue|integer(int32)|false|none|none|
|whatsNew|string|false|none|none|
|priceValue|integer(int64)|false|none|none|
|paid|boolean|false|none|none|

<h2 id="tocS_DefaultResponseDtoPaginationContentDtoAppVersionDto">DefaultResponseDtoPaginationContentDtoAppVersionDto</h2>

<a id="schemadefaultresponsedtopaginationcontentdtoappversiondto"></a>
<a id="schema_DefaultResponseDtoPaginationContentDtoAppVersionDto"></a>
<a id="tocSdefaultresponsedtopaginationcontentdtoappversiondto"></a>
<a id="tocsdefaultresponsedtopaginationcontentdtoappversiondto"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "content": [
      {
        "versionId": 0,
        "appName": "string",
        "appType": "string",
        "versionName": "string",
        "versionCode": 0,
        "versionStatus": "string",
        "publishType": "string",
        "publishDateTime": "2019-08-24T14:15:22Z",
        "sendDateForModer": "2019-08-24T14:15:22Z",
        "partialValue": 0,
        "whatsNew": "string",
        "priceValue": 0,
        "paid": true
      }
    ],
    "pageNumber": 0,
    "pageSize": 0,
    "totalElements": 0,
    "totalPages": 0
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[PaginationContentDtoAppVersionDto](#schemapaginationcontentdtoappversiondto)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_PaginationContentDtoAppVersionDto">PaginationContentDtoAppVersionDto</h2>

<a id="schemapaginationcontentdtoappversiondto"></a>
<a id="schema_PaginationContentDtoAppVersionDto"></a>
<a id="tocSpaginationcontentdtoappversiondto"></a>
<a id="tocspaginationcontentdtoappversiondto"></a>

```json
{
  "content": [
    {
      "versionId": 0,
      "appName": "string",
      "appType": "string",
      "versionName": "string",
      "versionCode": 0,
      "versionStatus": "string",
      "publishType": "string",
      "publishDateTime": "2019-08-24T14:15:22Z",
      "sendDateForModer": "2019-08-24T14:15:22Z",
      "partialValue": 0,
      "whatsNew": "string",
      "priceValue": 0,
      "paid": true
    }
  ],
  "pageNumber": 0,
  "pageSize": 0,
  "totalElements": 0,
  "totalPages": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[AppVersionDto](#schemaappversiondto)]|false|none|none|
|pageNumber|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|totalElements|integer(int32)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_Pageable">Pageable</h2>

<a id="schemapageable"></a>
<a id="schema_Pageable"></a>
<a id="tocSpageable"></a>
<a id="tocspageable"></a>

```json
{
  "page": 0,
  "size": 1,
  "sort": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[string]|false|none|none|

<h2 id="tocS_DefaultResponseDtoListFeedbackResponseDto">DefaultResponseDtoListFeedbackResponseDto</h2>

<a id="schemadefaultresponsedtolistfeedbackresponsedto"></a>
<a id="schema_DefaultResponseDtoListFeedbackResponseDto"></a>
<a id="tocSdefaultresponsedtolistfeedbackresponsedto"></a>
<a id="tocsdefaultresponsedtolistfeedbackresponsedto"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": [
    {
      "id": "string",
      "commentId": "string",
      "text": "string",
      "status": "string",
      "date": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[[FeedbackResponseDto](#schemafeedbackresponsedto)]|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_FeedbackResponseDto">FeedbackResponseDto</h2>

<a id="schemafeedbackresponsedto"></a>
<a id="schema_FeedbackResponseDto"></a>
<a id="tocSfeedbackresponsedto"></a>
<a id="tocsfeedbackresponsedto"></a>

```json
{
  "id": "string",
  "commentId": "string",
  "text": "string",
  "status": "string",
  "date": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|commentId|string|false|none|none|
|text|string|false|none|none|
|status|string|false|none|none|
|date|string(date-time)|false|none|none|

<h2 id="tocS_DefaultResponseDtoFeedbackResponseDto">DefaultResponseDtoFeedbackResponseDto</h2>

<a id="schemadefaultresponsedtofeedbackresponsedto"></a>
<a id="schema_DefaultResponseDtoFeedbackResponseDto"></a>
<a id="tocSdefaultresponsedtofeedbackresponsedto"></a>
<a id="tocsdefaultresponsedtofeedbackresponsedto"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "id": "string",
    "commentId": "string",
    "text": "string",
    "status": "string",
    "date": "2019-08-24T14:15:22Z"
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[FeedbackResponseDto](#schemafeedbackresponsedto)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_DefaultResponseDtoRetrieveAppDevelopersResult">DefaultResponseDtoRetrieveAppDevelopersResult</h2>

<a id="schemadefaultresponsedtoretrieveappdevelopersresult"></a>
<a id="schema_DefaultResponseDtoRetrieveAppDevelopersResult"></a>
<a id="tocSdefaultresponsedtoretrieveappdevelopersresult"></a>
<a id="tocsdefaultresponsedtoretrieveappdevelopersresult"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "content": [
      {
        "devVkId": "string",
        "role": "string",
        "firstName": "string",
        "lastName": "string"
      }
    ],
    "pageToken": "string"
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[RetrieveAppDevelopersResult](#schemaretrieveappdevelopersresult)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_RetrieveAppDevelopersResult">RetrieveAppDevelopersResult</h2>

<a id="schemaretrieveappdevelopersresult"></a>
<a id="schema_RetrieveAppDevelopersResult"></a>
<a id="tocSretrieveappdevelopersresult"></a>
<a id="tocsretrieveappdevelopersresult"></a>

```json
{
  "content": [
    {
      "devVkId": "string",
      "role": "string",
      "firstName": "string",
      "lastName": "string"
    }
  ],
  "pageToken": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[ApiAppDeveloper](#schemaapiappdeveloper)]|false|none|none|
|pageToken|string|false|none|none|

<h2 id="tocS_DefaultResponseDtoListUserCommentDto">DefaultResponseDtoListUserCommentDto</h2>

<a id="schemadefaultresponsedtolistusercommentdto"></a>
<a id="schema_DefaultResponseDtoListUserCommentDto"></a>
<a id="tocSdefaultresponsedtolistusercommentdto"></a>
<a id="tocsdefaultresponsedtolistusercommentdto"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": [
    {
      "packageName": "string",
      "appId": 0,
      "commentId": 0,
      "userName": "string",
      "appRating": 0,
      "commentStatus": "string",
      "commentDate": "2019-08-24T14:15:22Z",
      "commentText": "string",
      "likeCounter": 0,
      "dislikeCounter": 0,
      "updatedAt": "2019-08-24T14:15:22Z",
      "appVersionName": "string",
      "edited": true,
      "updatedAtIso": "2019-08-24T14:15:22Z",
      "commentDateIso": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[[UserCommentDto](#schemausercommentdto)]|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_UserCommentDto">UserCommentDto</h2>

<a id="schemausercommentdto"></a>
<a id="schema_UserCommentDto"></a>
<a id="tocSusercommentdto"></a>
<a id="tocsusercommentdto"></a>

```json
{
  "packageName": "string",
  "appId": 0,
  "commentId": 0,
  "userName": "string",
  "appRating": 0,
  "commentStatus": "string",
  "commentDate": "2019-08-24T14:15:22Z",
  "commentText": "string",
  "likeCounter": 0,
  "dislikeCounter": 0,
  "updatedAt": "2019-08-24T14:15:22Z",
  "appVersionName": "string",
  "edited": true,
  "updatedAtIso": "2019-08-24T14:15:22Z",
  "commentDateIso": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageName|string|false|none|none|
|appId|integer(int64)|false|none|none|
|commentId|integer(int64)|false|none|none|
|userName|string|false|none|none|
|appRating|integer(int32)|false|none|none|
|commentStatus|string|false|none|none|
|commentDate|string(date-time)|false|none|none|
|commentText|string|false|none|none|
|likeCounter|integer(int64)|false|none|none|
|dislikeCounter|integer(int64)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|appVersionName|string|false|none|none|
|edited|boolean|false|none|none|
|updatedAtIso|string(date-time)|false|none|none|
|commentDateIso|string(date-time)|false|none|none|

<h2 id="tocS_DefaultResponseDtoRatingWithDevDto">DefaultResponseDtoRatingWithDevDto</h2>

<a id="schemadefaultresponsedtoratingwithdevdto"></a>
<a id="schema_DefaultResponseDtoRatingWithDevDto"></a>
<a id="tocSdefaultresponsedtoratingwithdevdto"></a>
<a id="tocsdefaultresponsedtoratingwithdevdto"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "ratings": {
      "amountFive": 0,
      "amountFour": 0,
      "amountThree": 0,
      "amountTwo": 0,
      "amountOne": 0
    },
    "averageUserRating": 0,
    "totalRatings": 0,
    "totalResponses": 0,
    "ratingsNoComments": 0
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[RatingWithDevDto](#schemaratingwithdevdto)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_RatingWithDevDto">RatingWithDevDto</h2>

<a id="schemaratingwithdevdto"></a>
<a id="schema_RatingWithDevDto"></a>
<a id="tocSratingwithdevdto"></a>
<a id="tocsratingwithdevdto"></a>

```json
{
  "ratings": {
    "amountFive": 0,
    "amountFour": 0,
    "amountThree": 0,
    "amountTwo": 0,
    "amountOne": 0
  },
  "averageUserRating": 0,
  "totalRatings": 0,
  "totalResponses": 0,
  "ratingsNoComments": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ratings|[RatingsDto](#schemaratingsdto)|false|none|none|
|averageUserRating|number(double)|false|none|none|
|totalRatings|integer(int64)|false|none|none|
|totalResponses|integer(int64)|false|none|none|
|ratingsNoComments|integer(int64)|false|none|none|

<h2 id="tocS_RatingsDto">RatingsDto</h2>

<a id="schemaratingsdto"></a>
<a id="schema_RatingsDto"></a>
<a id="tocSratingsdto"></a>
<a id="tocsratingsdto"></a>

```json
{
  "amountFive": 0,
  "amountFour": 0,
  "amountThree": 0,
  "amountTwo": 0,
  "amountOne": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountFive|integer(int64)|false|none|none|
|amountFour|integer(int64)|false|none|none|
|amountThree|integer(int64)|false|none|none|
|amountTwo|integer(int64)|false|none|none|
|amountOne|integer(int64)|false|none|none|

<h2 id="tocS_DefaultResponseDtoSmartPaySubscriptionsResponse">DefaultResponseDtoSmartPaySubscriptionsResponse</h2>

<a id="schemadefaultresponsedtosmartpaysubscriptionsresponse"></a>
<a id="schema_DefaultResponseDtoSmartPaySubscriptionsResponse"></a>
<a id="tocSdefaultresponsedtosmartpaysubscriptionsresponse"></a>
<a id="tocsdefaultresponsedtosmartpaysubscriptionsresponse"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "code": 0,
    "success": true,
    "message": "string",
    "body": {
      "serviceName": "string",
      "subscriptionId": 0,
      "addParameters": "string",
      "productType": "string",
      "productName": "string",
      "productCode": "string",
      "recurrent": true,
      "countOfDay": 0,
      "periodType": "string",
      "periodDuration": 0,
      "nextPaymentDate": "string",
      "price": 0,
      "currency": "string",
      "imageUrl": "string",
      "state": "string",
      "currentPeriod": "PROMO",
      "debtPaymentPeriod": "string",
      "description": "string",
      "tariffId": 0,
      "periods": [
        {
          "periodName": "string",
          "periodType": "string",
          "periodDuration": 0,
          "periodPrice": 0,
          "nextPeriod": "string"
        }
      ]
    }
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[SmartPaySubscriptionsResponse](#schemasmartpaysubscriptionsresponse)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_SmartPaySubscriptionsResponse">SmartPaySubscriptionsResponse</h2>

<a id="schemasmartpaysubscriptionsresponse"></a>
<a id="schema_SmartPaySubscriptionsResponse"></a>
<a id="tocSsmartpaysubscriptionsresponse"></a>
<a id="tocssmartpaysubscriptionsresponse"></a>

```json
{
  "code": 0,
  "success": true,
  "message": "string",
  "body": {
    "serviceName": "string",
    "subscriptionId": 0,
    "addParameters": "string",
    "productType": "string",
    "productName": "string",
    "productCode": "string",
    "recurrent": true,
    "countOfDay": 0,
    "periodType": "string",
    "periodDuration": 0,
    "nextPaymentDate": "string",
    "price": 0,
    "currency": "string",
    "imageUrl": "string",
    "state": "string",
    "currentPeriod": "PROMO",
    "debtPaymentPeriod": "string",
    "description": "string",
    "tariffId": 0,
    "periods": [
      {
        "periodName": "string",
        "periodType": "string",
        "periodDuration": 0,
        "periodPrice": 0,
        "nextPeriod": "string"
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|success|boolean|false|none|none|
|message|string|false|none|none|
|body|[SmartPaySubscriptionsResponseBody](#schemasmartpaysubscriptionsresponsebody)|false|none|none|

<h2 id="tocS_SmartPaySubscriptionsResponseBody">SmartPaySubscriptionsResponseBody</h2>

<a id="schemasmartpaysubscriptionsresponsebody"></a>
<a id="schema_SmartPaySubscriptionsResponseBody"></a>
<a id="tocSsmartpaysubscriptionsresponsebody"></a>
<a id="tocssmartpaysubscriptionsresponsebody"></a>

```json
{
  "serviceName": "string",
  "subscriptionId": 0,
  "addParameters": "string",
  "productType": "string",
  "productName": "string",
  "productCode": "string",
  "recurrent": true,
  "countOfDay": 0,
  "periodType": "string",
  "periodDuration": 0,
  "nextPaymentDate": "string",
  "price": 0,
  "currency": "string",
  "imageUrl": "string",
  "state": "string",
  "currentPeriod": "PROMO",
  "debtPaymentPeriod": "string",
  "description": "string",
  "tariffId": 0,
  "periods": [
    {
      "periodName": "string",
      "periodType": "string",
      "periodDuration": 0,
      "periodPrice": 0,
      "nextPeriod": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|string|false|none|none|
|subscriptionId|integer(int32)|false|none|none|
|addParameters|string|false|none|none|
|productType|string|false|none|none|
|productName|string|false|none|none|
|productCode|string|false|none|none|
|recurrent|boolean|false|none|none|
|countOfDay|integer(int32)|false|none|none|
|periodType|string|false|none|none|
|periodDuration|integer(int32)|false|none|none|
|nextPaymentDate|string|false|none|none|
|price|integer(int32)|false|none|none|
|currency|string|false|none|none|
|imageUrl|string|false|none|none|
|state|string|false|none|none|
|currentPeriod|string|false|none|none|
|debtPaymentPeriod|string|false|none|none|
|description|string|false|none|none|
|tariffId|integer(int32)|false|none|none|
|periods|[[SmartPayTariffPeriodDto](#schemasmartpaytariffperioddto)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currentPeriod|PROMO|
|currentPeriod|START|
|currentPeriod|STANDARD|
|currentPeriod|GRACE|
|currentPeriod|HOLD|

<h2 id="tocS_SmartPayTariffPeriodDto">SmartPayTariffPeriodDto</h2>

<a id="schemasmartpaytariffperioddto"></a>
<a id="schema_SmartPayTariffPeriodDto"></a>
<a id="tocSsmartpaytariffperioddto"></a>
<a id="tocssmartpaytariffperioddto"></a>

```json
{
  "periodName": "string",
  "periodType": "string",
  "periodDuration": 0,
  "periodPrice": 0,
  "nextPeriod": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|periodName|string|false|none|none|
|periodType|string|false|none|none|
|periodDuration|integer(int32)|false|none|none|
|periodPrice|integer(int32)|false|none|none|
|nextPeriod|string|false|none|none|

<h2 id="tocS_DefaultResponseDtoSubscriptionStatusResponse">DefaultResponseDtoSubscriptionStatusResponse</h2>

<a id="schemadefaultresponsedtosubscriptionstatusresponse"></a>
<a id="schema_DefaultResponseDtoSubscriptionStatusResponse"></a>
<a id="tocSdefaultresponsedtosubscriptionstatusresponse"></a>
<a id="tocsdefaultresponsedtosubscriptionstatusresponse"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "is_active": true
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[SubscriptionStatusResponse](#schemasubscriptionstatusresponse)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_SubscriptionStatusResponse">SubscriptionStatusResponse</h2>

<a id="schemasubscriptionstatusresponse"></a>
<a id="schema_SubscriptionStatusResponse"></a>
<a id="tocSsubscriptionstatusresponse"></a>
<a id="tocssubscriptionstatusresponse"></a>

```json
{
  "is_active": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_active|boolean|false|none|none|

<h2 id="tocS_Address">Address</h2>

<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "country": "string",
  "city": "string",
  "address": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|none|
|city|string|false|none|none|
|address|string|false|none|none|

<h2 id="tocS_BankInfo">BankInfo</h2>

<a id="schemabankinfo"></a>
<a id="schema_BankInfo"></a>
<a id="tocSbankinfo"></a>
<a id="tocsbankinfo"></a>

```json
{
  "bank_name": "string",
  "bank_country_code": "string",
  "bank_country_name": "string",
  "bank_image": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bank_name|string|false|none|none|
|bank_country_code|string|false|none|none|
|bank_country_name|string|false|none|none|
|bank_image|string|false|none|none|

<h2 id="tocS_DefaultResponseDtoInvoiceInfoResponse">DefaultResponseDtoInvoiceInfoResponse</h2>

<a id="schemadefaultresponsedtoinvoiceinforesponse"></a>
<a id="schema_DefaultResponseDtoInvoiceInfoResponse"></a>
<a id="tocSdefaultresponsedtoinvoiceinforesponse"></a>
<a id="tocsdefaultresponsedtoinvoiceinforesponse"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "invoice_id": "string",
    "invoice_date": "string",
    "invoice_status": "string",
    "application_code": "string",
    "application_name": "string",
    "owner_code": "string",
    "owner_name": "string",
    "payment_info": {
      "payment_date": "string",
      "payment_id": "string",
      "payment_params": {
        "key": "string",
        "value": "string"
      },
      "loyalty_info": {
        "service_code": "string",
        "service_name": "string",
        "change_rate": 0,
        "payment_bonus": 0,
        "award_bonus": 0,
        "image": "string"
      },
      "card_id": "string",
      "paysys_code": "string",
      "masked_pan": "string",
      "expiry_date": "string",
      "payment_system": "string",
      "payment_system_image": "string",
      "paysys_image": "string",
      "payment_way": "string",
      "payment_way_code": "string",
      "payment_way_logo": "string",
      "bank_info": {
        "bank_name": "string",
        "bank_country_code": "string",
        "bank_country_name": "string",
        "bank_image": "string"
      },
      "device_info": {
        "device_platform_type": "string",
        "device_platform_version": "string",
        "device_model": "string",
        "device_manufacturer": "string",
        "device_id": "string",
        "surface_version": "string",
        "surface": "string"
      },
      "name": "string",
      "cardholder": "string",
      "image": "string",
      "paysys": "string"
    },
    "payment_methods": {
      "user_message": "string",
      "methods": [
        {
          "method": "string",
          "action": "string"
        }
      ]
    },
    "error": {
      "user_message": "string",
      "error_description": {},
      "error_code": 0
    },
    "invoice": {
      "delivery_info": {
        "delivery_type": "string",
        "address": {
          "country": null,
          "city": null,
          "address": null
        },
        "description": "string"
      },
      "invoice_params": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "purchaser": {
        "email": "string",
        "phone": "string",
        "contact": "string"
      },
      "order": {
        "order_id": "string",
        "order_number": "string",
        "order_date": "string",
        "service_id": "string",
        "expiration_date": "string",
        "tax_system": 0,
        "trade_name": "string",
        "visual_name": "string",
        "org_name": "string",
        "org_inn": "string",
        "visual_amount": "string",
        "order_bundle": [
          {}
        ],
        "amount": 0,
        "currency": "string",
        "purpose": "string",
        "description": "string",
        "language": "string"
      }
    },
    "image": "string"
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[InvoiceInfoResponse](#schemainvoiceinforesponse)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_DeliveryInfo">DeliveryInfo</h2>

<a id="schemadeliveryinfo"></a>
<a id="schema_DeliveryInfo"></a>
<a id="tocSdeliveryinfo"></a>
<a id="tocsdeliveryinfo"></a>

```json
{
  "delivery_type": "string",
  "address": {
    "country": "string",
    "city": "string",
    "address": "string"
  },
  "description": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delivery_type|string|false|none|none|
|address|[Address](#schemaaddress)|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_DeviceInfo">DeviceInfo</h2>

<a id="schemadeviceinfo"></a>
<a id="schema_DeviceInfo"></a>
<a id="tocSdeviceinfo"></a>
<a id="tocsdeviceinfo"></a>

```json
{
  "device_platform_type": "string",
  "device_platform_version": "string",
  "device_model": "string",
  "device_manufacturer": "string",
  "device_id": "string",
  "surface_version": "string",
  "surface": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_platform_type|string|false|none|none|
|device_platform_version|string|false|none|none|
|device_model|string|false|none|none|
|device_manufacturer|string|false|none|none|
|device_id|string|false|none|none|
|surface_version|string|false|none|none|
|surface|string|false|none|none|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>

<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "user_message": "string",
  "error_description": {},
  "error_code": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_message|string|false|none|none|
|error_description|object|false|none|none|
|error_code|integer(int32)|false|none|none|

<h2 id="tocS_InvoiceInfo">InvoiceInfo</h2>

<a id="schemainvoiceinfo"></a>
<a id="schema_InvoiceInfo"></a>
<a id="tocSinvoiceinfo"></a>
<a id="tocsinvoiceinfo"></a>

```json
{
  "delivery_info": {
    "delivery_type": "string",
    "address": {
      "country": "string",
      "city": "string",
      "address": "string"
    },
    "description": "string"
  },
  "invoice_params": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "purchaser": {
    "email": "string",
    "phone": "string",
    "contact": "string"
  },
  "order": {
    "order_id": "string",
    "order_number": "string",
    "order_date": "string",
    "service_id": "string",
    "expiration_date": "string",
    "tax_system": 0,
    "trade_name": "string",
    "visual_name": "string",
    "org_name": "string",
    "org_inn": "string",
    "visual_amount": "string",
    "order_bundle": [
      {
        "position_id": 0,
        "item_params": [
          {
            "key": null,
            "value": null
          }
        ],
        "item_amount": 0,
        "item_code": "string",
        "item_price": 0,
        "discount_type": "string",
        "discount_value": 0,
        "interest_type": "string",
        "interest_value": 0,
        "tax_type": 0,
        "tax_sum": 0,
        "name": "string",
        "quantity": {
          "value": 0,
          "measure": "string"
        },
        "currency": "string",
        "image": "string"
      }
    ],
    "amount": 0,
    "currency": "string",
    "purpose": "string",
    "description": "string",
    "language": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delivery_info|[DeliveryInfo](#schemadeliveryinfo)|false|none|none|
|invoice_params|[[InvoiceParam](#schemainvoiceparam)]|false|none|none|
|purchaser|[PurchaserInfo](#schemapurchaserinfo)|false|none|none|
|order|[Order](#schemaorder)|false|none|none|

<h2 id="tocS_InvoiceInfoResponse">InvoiceInfoResponse</h2>

<a id="schemainvoiceinforesponse"></a>
<a id="schema_InvoiceInfoResponse"></a>
<a id="tocSinvoiceinforesponse"></a>
<a id="tocsinvoiceinforesponse"></a>

```json
{
  "invoice_id": "string",
  "invoice_date": "string",
  "invoice_status": "string",
  "application_code": "string",
  "application_name": "string",
  "owner_code": "string",
  "owner_name": "string",
  "payment_info": {
    "payment_date": "string",
    "payment_id": "string",
    "payment_params": {
      "key": "string",
      "value": "string"
    },
    "loyalty_info": {
      "service_code": "string",
      "service_name": "string",
      "change_rate": 0,
      "payment_bonus": 0,
      "award_bonus": 0,
      "image": "string"
    },
    "card_id": "string",
    "paysys_code": "string",
    "masked_pan": "string",
    "expiry_date": "string",
    "payment_system": "string",
    "payment_system_image": "string",
    "paysys_image": "string",
    "payment_way": "string",
    "payment_way_code": "string",
    "payment_way_logo": "string",
    "bank_info": {
      "bank_name": "string",
      "bank_country_code": "string",
      "bank_country_name": "string",
      "bank_image": "string"
    },
    "device_info": {
      "device_platform_type": "string",
      "device_platform_version": "string",
      "device_model": "string",
      "device_manufacturer": "string",
      "device_id": "string",
      "surface_version": "string",
      "surface": "string"
    },
    "name": "string",
    "cardholder": "string",
    "image": "string",
    "paysys": "string"
  },
  "payment_methods": {
    "user_message": "string",
    "methods": [
      {
        "method": "string",
        "action": "string"
      }
    ]
  },
  "error": {
    "user_message": "string",
    "error_description": {},
    "error_code": 0
  },
  "invoice": {
    "delivery_info": {
      "delivery_type": "string",
      "address": {
        "country": "string",
        "city": "string",
        "address": "string"
      },
      "description": "string"
    },
    "invoice_params": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "purchaser": {
      "email": "string",
      "phone": "string",
      "contact": "string"
    },
    "order": {
      "order_id": "string",
      "order_number": "string",
      "order_date": "string",
      "service_id": "string",
      "expiration_date": "string",
      "tax_system": 0,
      "trade_name": "string",
      "visual_name": "string",
      "org_name": "string",
      "org_inn": "string",
      "visual_amount": "string",
      "order_bundle": [
        {
          "position_id": 0,
          "item_params": [
            null
          ],
          "item_amount": 0,
          "item_code": "string",
          "item_price": 0,
          "discount_type": "string",
          "discount_value": 0,
          "interest_type": "string",
          "interest_value": 0,
          "tax_type": 0,
          "tax_sum": 0,
          "name": "string",
          "quantity": {},
          "currency": "string",
          "image": "string"
        }
      ],
      "amount": 0,
      "currency": "string",
      "purpose": "string",
      "description": "string",
      "language": "string"
    }
  },
  "image": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoice_id|string|false|none|none|
|invoice_date|string|false|none|none|
|invoice_status|string|false|none|none|
|application_code|string|false|none|none|
|application_name|string|false|none|none|
|owner_code|string|false|none|none|
|owner_name|string|false|none|none|
|payment_info|[PaymentInfo](#schemapaymentinfo)|false|none|none|
|payment_methods|[PaymentMethodsInfo](#schemapaymentmethodsinfo)|false|none|none|
|error|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|invoice|[InvoiceInfo](#schemainvoiceinfo)|false|none|none|
|image|string|false|none|none|

<h2 id="tocS_InvoiceParam">InvoiceParam</h2>

<a id="schemainvoiceparam"></a>
<a id="schema_InvoiceParam"></a>
<a id="tocSinvoiceparam"></a>
<a id="tocsinvoiceparam"></a>

```json
{
  "key": "string",
  "value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_ItemParam">ItemParam</h2>

<a id="schemaitemparam"></a>
<a id="schema_ItemParam"></a>
<a id="tocSitemparam"></a>
<a id="tocsitemparam"></a>

```json
{
  "key": "string",
  "value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_LoyaltyInfo">LoyaltyInfo</h2>

<a id="schemaloyaltyinfo"></a>
<a id="schema_LoyaltyInfo"></a>
<a id="tocSloyaltyinfo"></a>
<a id="tocsloyaltyinfo"></a>

```json
{
  "service_code": "string",
  "service_name": "string",
  "change_rate": 0,
  "payment_bonus": 0,
  "award_bonus": 0,
  "image": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service_code|string|false|none|none|
|service_name|string|false|none|none|
|change_rate|integer(int64)|false|none|none|
|payment_bonus|integer(int64)|false|none|none|
|award_bonus|integer(int64)|false|none|none|
|image|string|false|none|none|

<h2 id="tocS_MethodInfo">MethodInfo</h2>

<a id="schemamethodinfo"></a>
<a id="schema_MethodInfo"></a>
<a id="tocSmethodinfo"></a>
<a id="tocsmethodinfo"></a>

```json
{
  "method": "string",
  "action": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|false|none|none|
|action|string|false|none|none|

<h2 id="tocS_Order">Order</h2>

<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "order_id": "string",
  "order_number": "string",
  "order_date": "string",
  "service_id": "string",
  "expiration_date": "string",
  "tax_system": 0,
  "trade_name": "string",
  "visual_name": "string",
  "org_name": "string",
  "org_inn": "string",
  "visual_amount": "string",
  "order_bundle": [
    {
      "position_id": 0,
      "item_params": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "item_amount": 0,
      "item_code": "string",
      "item_price": 0,
      "discount_type": "string",
      "discount_value": 0,
      "interest_type": "string",
      "interest_value": 0,
      "tax_type": 0,
      "tax_sum": 0,
      "name": "string",
      "quantity": {
        "value": 0,
        "measure": "string"
      },
      "currency": "string",
      "image": "string"
    }
  ],
  "amount": 0,
  "currency": "string",
  "purpose": "string",
  "description": "string",
  "language": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order_id|string|false|none|none|
|order_number|string|false|none|none|
|order_date|string|false|none|none|
|service_id|string|false|none|none|
|expiration_date|string|false|none|none|
|tax_system|integer(int64)|false|none|none|
|trade_name|string|false|none|none|
|visual_name|string|false|none|none|
|org_name|string|false|none|none|
|org_inn|string|false|none|none|
|visual_amount|string|false|none|none|
|order_bundle|[[OrderBundle](#schemaorderbundle)]|false|none|none|
|amount|integer(int64)|false|none|none|
|currency|string|false|none|none|
|purpose|string|false|none|none|
|description|string|false|none|none|
|language|string|false|none|none|

<h2 id="tocS_OrderBundle">OrderBundle</h2>

<a id="schemaorderbundle"></a>
<a id="schema_OrderBundle"></a>
<a id="tocSorderbundle"></a>
<a id="tocsorderbundle"></a>

```json
{
  "position_id": 0,
  "item_params": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "item_amount": 0,
  "item_code": "string",
  "item_price": 0,
  "discount_type": "string",
  "discount_value": 0,
  "interest_type": "string",
  "interest_value": 0,
  "tax_type": 0,
  "tax_sum": 0,
  "name": "string",
  "quantity": {
    "value": 0,
    "measure": "string"
  },
  "currency": "string",
  "image": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position_id|integer(int64)|false|none|none|
|item_params|[[ItemParam](#schemaitemparam)]|false|none|none|
|item_amount|integer(int64)|false|none|none|
|item_code|string|false|none|none|
|item_price|integer(int64)|false|none|none|
|discount_type|string|false|none|none|
|discount_value|integer(int64)|false|none|none|
|interest_type|string|false|none|none|
|interest_value|integer(int64)|false|none|none|
|tax_type|integer(int64)|false|none|none|
|tax_sum|integer(int64)|false|none|none|
|name|string|false|none|none|
|quantity|[Quantity](#schemaquantity)|false|none|none|
|currency|string|false|none|none|
|image|string|false|none|none|

<h2 id="tocS_PaymentInfo">PaymentInfo</h2>

<a id="schemapaymentinfo"></a>
<a id="schema_PaymentInfo"></a>
<a id="tocSpaymentinfo"></a>
<a id="tocspaymentinfo"></a>

```json
{
  "payment_date": "string",
  "payment_id": "string",
  "payment_params": {
    "key": "string",
    "value": "string"
  },
  "loyalty_info": {
    "service_code": "string",
    "service_name": "string",
    "change_rate": 0,
    "payment_bonus": 0,
    "award_bonus": 0,
    "image": "string"
  },
  "card_id": "string",
  "paysys_code": "string",
  "masked_pan": "string",
  "expiry_date": "string",
  "payment_system": "string",
  "payment_system_image": "string",
  "paysys_image": "string",
  "payment_way": "string",
  "payment_way_code": "string",
  "payment_way_logo": "string",
  "bank_info": {
    "bank_name": "string",
    "bank_country_code": "string",
    "bank_country_name": "string",
    "bank_image": "string"
  },
  "device_info": {
    "device_platform_type": "string",
    "device_platform_version": "string",
    "device_model": "string",
    "device_manufacturer": "string",
    "device_id": "string",
    "surface_version": "string",
    "surface": "string"
  },
  "name": "string",
  "cardholder": "string",
  "image": "string",
  "paysys": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payment_date|string|false|none|none|
|payment_id|string|false|none|none|
|payment_params|[PaymentParams](#schemapaymentparams)|false|none|none|
|loyalty_info|[LoyaltyInfo](#schemaloyaltyinfo)|false|none|none|
|card_id|string|false|none|none|
|paysys_code|string|false|none|none|
|masked_pan|string|false|none|none|
|expiry_date|string|false|none|none|
|payment_system|string|false|none|none|
|payment_system_image|string|false|none|none|
|paysys_image|string|false|none|none|
|payment_way|string|false|none|none|
|payment_way_code|string|false|none|none|
|payment_way_logo|string|false|none|none|
|bank_info|[BankInfo](#schemabankinfo)|false|none|none|
|device_info|[DeviceInfo](#schemadeviceinfo)|false|none|none|
|name|string|false|none|none|
|cardholder|string|false|none|none|
|image|string|false|none|none|
|paysys|string|false|none|none|

<h2 id="tocS_PaymentMethodsInfo">PaymentMethodsInfo</h2>

<a id="schemapaymentmethodsinfo"></a>
<a id="schema_PaymentMethodsInfo"></a>
<a id="tocSpaymentmethodsinfo"></a>
<a id="tocspaymentmethodsinfo"></a>

```json
{
  "user_message": "string",
  "methods": [
    {
      "method": "string",
      "action": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_message|string|false|none|none|
|methods|[[MethodInfo](#schemamethodinfo)]|false|none|none|

<h2 id="tocS_PaymentParams">PaymentParams</h2>

<a id="schemapaymentparams"></a>
<a id="schema_PaymentParams"></a>
<a id="tocSpaymentparams"></a>
<a id="tocspaymentparams"></a>

```json
{
  "key": "string",
  "value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_PurchaserInfo">PurchaserInfo</h2>

<a id="schemapurchaserinfo"></a>
<a id="schema_PurchaserInfo"></a>
<a id="tocSpurchaserinfo"></a>
<a id="tocspurchaserinfo"></a>

```json
{
  "email": "string",
  "phone": "string",
  "contact": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|phone|string|false|none|none|
|contact|string|false|none|none|

<h2 id="tocS_Quantity">Quantity</h2>

<a id="schemaquantity"></a>
<a id="schema_Quantity"></a>
<a id="tocSquantity"></a>
<a id="tocsquantity"></a>

```json
{
  "value": 0,
  "measure": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int64)|false|none|none|
|measure|string|false|none|none|

<h2 id="tocS_DefaultResponseDtoPaginationContentDtoInvoicePaymentDto">DefaultResponseDtoPaginationContentDtoInvoicePaymentDto</h2>

<a id="schemadefaultresponsedtopaginationcontentdtoinvoicepaymentdto"></a>
<a id="schema_DefaultResponseDtoPaginationContentDtoInvoicePaymentDto"></a>
<a id="tocSdefaultresponsedtopaginationcontentdtoinvoicepaymentdto"></a>
<a id="tocsdefaultresponsedtopaginationcontentdtoinvoicepaymentdto"></a>

```json
{
  "code": "string",
  "message": "string",
  "body": {
    "content": [
      {
        "invoiceId": 0,
        "invoiceDate": "2024-10-24T14:31:33+03:00",
        "refundDate": "2024-10-24T14:31:33+03:00",
        "invoiceStatus": "created",
        "developerPayload": "string",
        "applicationCode": 0,
        "ownerCode": 0,
        "paymentInfo": {
          "paymentDate": "2024-10-24T14:31:33+03:00",
          "maskedPan": "string",
          "paymentSystem": "string",
          "paymentWay": "string",
          "paymentWayCode": "string",
          "bankName": "string"
        },
        "order": {
          "orderId": "string",
          "orderNumber": "string",
          "visualName": "string",
          "amountCreate": 0,
          "amountCurrent": 0,
          "currency": "string",
          "itemCode": "string",
          "description": "string",
          "language": "string"
        }
      }
    ],
    "pageNumber": 0,
    "pageSize": 0,
    "totalElements": 0,
    "totalPages": 0
  },
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|
|body|[PaginationContentDtoInvoicePaymentDto](#schemapaginationcontentdtoinvoicepaymentdto)|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_PaginationContentDtoInvoicePaymentDto">PaginationContentDtoInvoicePaymentDto</h2>

<a id="schemapaginationcontentdtoinvoicepaymentdto"></a>
<a id="schema_PaginationContentDtoInvoicePaymentDto"></a>
<a id="tocSpaginationcontentdtoinvoicepaymentdto"></a>
<a id="tocspaginationcontentdtoinvoicepaymentdto"></a>

```json
{
  "content": [
    {
      "invoiceId": 0,
      "invoiceDate": "2024-10-24T14:31:33+03:00",
      "refundDate": "2024-10-24T14:31:33+03:00",
      "invoiceStatus": "created",
      "developerPayload": "string",
      "applicationCode": 0,
      "ownerCode": 0,
      "paymentInfo": {
        "paymentDate": "2024-10-24T14:31:33+03:00",
        "maskedPan": "string",
        "paymentSystem": "string",
        "paymentWay": "string",
        "paymentWayCode": "string",
        "bankName": "string"
      },
      "order": {
        "orderId": "string",
        "orderNumber": "string",
        "visualName": "string",
        "amountCreate": 0,
        "amountCurrent": 0,
        "currency": "string",
        "itemCode": "string",
        "description": "string",
        "language": "string"
      }
    }
  ],
  "pageNumber": 0,
  "pageSize": 0,
  "totalElements": 0,
  "totalPages": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[InvoicePaymentDto](#schemainvoicepaymentdto)]|false|none|[Информация о счёте]|
|pageNumber|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|totalElements|integer(int32)|false|none|none|
|totalPages|integer(int32)|false|none|none|

