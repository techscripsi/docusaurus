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
1. Продолжите процедуру в зависимости от нужного типа:
   * [автономная сборка](Автономная-сборка);
   * [создание Docker-контейнера](Создание-Docker-контейнера).

### Автономная сборка

1. В папке `nimble_exporter` выполните следующую команду.
	```bash
	go build
	```
1. Убедитесь, что в папке собран исполняемый файл `nimble-exporter` — для этого выполните команду отображения содержимого текущей папки.
	```bash
	ls
	```
	Значение `nimble-exporter` должно отобразиться в выдаче командной строки.
1. Для проверки запустите экспортер с параметрм `--help`
```bash
./nimble-exporter --help
```
	В выдаче командной строки должен отобразиться список параметров запуска экспортера (см. [описание параметров](#Параметры-запуска) ниже).

### Создание Docker-контейнера

1. В папке `nimble_exporter` выполните следующую команду.
	```bash
	sudo docker build -t srt-exporter .
	```
	Здесь: `srt-exporter` — имя будущего Docker-контейнера.
1. После выполения команды убедитесь, что контейнер создан.
	```bash
	sudo docker ps -a
	```
	Имя созданного контейнера должно отобразиться в выдаче командной строки.

```diff
CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS                      PORTS     NAMES
+3cc121b3fe5b   srt-exporter   "./nimble_exporter -…"   About a minute ago   Exited (0) 59 seconds ago             great_solomon
264f9941854f   hello-world    "/hello"                 37 hours ago         Exited (0) 37 hours ago               nervous_engelbart
```

sudo docker run srt-exporter ./nimble_expter --help


## Запуск

### Параметры запуска

| Параметр | Описание | Значение по умолчанию |
| :--- | :--- | :--- |
| `listen` | Порт который будет слушать приложение. | `:9017` |
| `nimble` | Адрес и порт сервера Nimble Streamer. | `http://127.0.0.1:8082` |
| `auth_salt` | Значние «соли» для проверки подлинности. | Не задано |
| `auth_hash` | Хэш-значение для проверки подлинности. | Не задано |
| `loglevel` | Уровень отображения информации о событиях (уровень логирования):<ul><br /><li><code>error</code> - только ошибки;</li><li><code>info</code> - ошибки и общие сведения о работе сервера;</li><li><code>verbose</code> - более детальные сведения, чем в <code>info</code>;</li><li><code>debug</code> - наиболее полные сведения.</li></ul>| `info` |
| `logfmt` | Выходной формат метрик, возможны следующие значения:<br /><ul><li><code>normal</code>;</li><li><code>json</code>.</li></ul> | `json` |

### Запуск автономной сборки

### 



### Запуск с помощью helm-чарта




контейнеры
docker ps -a
образ
docker images

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