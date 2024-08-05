# Nimble Exporter

## Оглавление

* [О приложении](#О-приложении)
* [Собираемые метрики](#Собираемые-метрики)
* [Системные требования](#Системные-требования])
* [Установка](#Установка)


## О приложении

Nimble Exporter - экспортер метрик стриминогового сервера [Nimble Streamer](https://softvelum.com/nimble/) для системы мониторинга [Prometheus](https://prometheus.io/). Для получения метрик экспортер использует [API](https://softvelum.com/nimble/api/) сервера Nimble Streamer.

Полученные метрики экспортер по умолчанию на выходе представляет в JSON-формате. Это позволяет визуализировать данные с помощью [Grafana](https://grafana.com/).

## Собираемые метрики

Nimble Exporter собирает следующие метрики.

| Метрика | Описание | Используемый API-метод |
| :--- | :--- | :--- |
| `ServerStatus` | Состояние сервера Nimble Streamer — сведения включают системную информацию, число активных соединений, скорость передачи данных и т. п. | `/manage/server_status` |
| `SrtSenders` | Метрики отправителей трансляций. | `/manage/srt_sender_stats` | 
| `SrtReceivers` | Метрики получателей трансляций. | `/manage/srt_receiver_stats` |

| **Примечание** |
| :--- |
| Возвращаемые поля по запросу метрик отправителей/получателей трансляций приведены в [спецификации SRT](https://datatracker.ietf.org/doc/html/draft-sharabayko-srt-01). |

## Системные требования

| Компонент | Описание |
| :--- | :--- |
| [Git](https://git-scm.com/) | Для всех типов установок. |
| [go](https://go.dev/doc/install) | Для автономной сборки. |
| [Docker Engine](https://docs.docker.com/engine/install/) | Для создания Docker-образа. |
| [werf](https://ru.werf.io/) | Для интеграции с werf и развёртывания в кластере.<br />Подробные инструкции по интеграции с werf приведены по [ссылке](https://ru.werf.io/getting_started/).|
| [kubernetes](https://kubernetes.io/) | Для развёртывания в кластере. |

## Установка

1. Склонируйте репозиторий.
```bash
git clone https://github.com/deckhouse/nimble_exporter.git
```
1. Перейдите в папку `nimble_exporter` — для этого выполните следующую команду.
```bash
cd nimble_exporter
```
1. Продолжите процедуру в зависимости от нужного типа

### Автономная сборка и запуск


### Создание и запуск Docker-образа

В папке репозитория из терминала выполните команду

### 

### Сборка и запуск в кластере


? сборка без Docker
сборка Docker-контейнера (и всё)
сборка Docker-контейнера для кластера kubernetes без werf
сборка Docker-контейнера для кластера kubernetes с werf

## Настройки экспортера

| Параметр | Описание | Значение по умолчанию |
| :--- | :--- | :--- |
| `listen` | Порт который будет слушать приложение. | `:9017` |
| `nimble` | Адрес и порт сервера Nimble Streamer. | `http://127.0.0.1:8082` |
| `auth_salt` | Значние «соли» для проверки подлинности. | Не задано |
| `auth_hash` | Хэш-значение для проверки подлинности. | Не задано |
| `loglevel` | Уровень отображения информации о событиях (уровень логирования):<ul><br /><li><code>error</code> - только ошибки;</li><li><code>info</code> - ошибки и общие сведения о работе сервера;</li><li><code>verbose</code> - более детальные сведения, чем в <code>info</code>;</li><li><code>debug</code> - наиболее полные сведения.</li></ul>| `info` |
| `logfmt` | Выходной формат метрик, возможны следующие значения:<br /><ul><li><code>normal</code>;</li><li><code>json</code>.</li></ul> | `json` |

Настройки задаются флагами при запуске приложения:




## Запуск



## Развёртывание в кластере с werf

Для развёртывания Nimble Exporter в кластере используйте 

```shell
      - name: srt-exporter
        image: {{ $.Values.werf.image.exporter }}
        command:
        - /nimble_exporter
        - -auth_salt=590
        - -auth_hash=xxxx
        ports:
        - containerPort: 9017
          name: exporter
          protocol: TCP
        resources:
          {{ toYaml $.Values.resources.exporter |  nindent 10 }}
```

* image - образ

Комментарий

По-разному называется: prometheus exporter for nimble srt, nimble_exporter, srt-exporter, exporter. Остановился на Nimble Exporter.
Не уверен, нужно ли всякий раз упоминать необходимость sudo.