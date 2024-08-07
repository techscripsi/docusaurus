# Nimble Exporter

## Оглавление

* [О приложении](#О-приложении)
* [Собираемые метрики](#Собираемые-метрики)
* [Системные требования](#Системные-требования)
* [Установка](#Установка)
   * [Автономная сборка](#Автономная-сборка)
   * [Создание Docker-контейнера](#Создание-Docker-контейнера)
* [Запуск](#Запуск)
   * [Параметры запуска](#Параметры-запуска)
   * [Строка запуска](#Строка-запуска)
* [Развёртывание в кластере с werf](#Развёртывание-в-кластере-с-werf)

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

> [!NOTE]
> Возвращаемые поля по запросу метрик отправителей/получателей трансляций приведены в [спецификации SRT](https://datatracker.ietf.org/doc/html/draft-sharabayko-srt-01).

## Системные требования

| Компонент | Описание |
| :--- | :--- |
| [Git](https://git-scm.com/) | Для всех типов установок. |
| [go](https://go.dev/doc/install) | Для автономной сборки. |
| [Docker Engine](https://docs.docker.com/engine/install/) | Для создания Docker-образа. |
| [werf](https://ru.werf.io/) | Для интеграции с werf и развёртывания в кластере.<br />Подробные инструкции по интеграции с werf приведены по [ссылке](https://ru.werf.io/getting_started/?usage=ci&ci=gitlabCiCd&runnerType=hostRunner&os=linux&buildBackend=docker&projectType=simplified&sharedCICD=no&repoType=application).|
| [kubernetes](https://kubernetes.io/) | Для развёртывания в кластере. |

## Установка

1. Склонируйте репозиторий.
	```
	git clone https://github.com/deckhouse/nimble_exporter.git
	```
1. Перейдите в папку `nimble_exporter` — для этого выполните следующую команду.
	```
	cd nimble_exporter
	```
1. Продолжите процедуру в зависимости от нужного типа:
   * [автономная сборка](#Автономная-сборка);
   * [создание Docker-контейнера](#Создание-Docker-контейнера).

### Автономная сборка

1. В папке `nimble_exporter` выполните следующую команду.
	```
	go build
	```
1. Убедитесь, что в папке собран исполняемый файл `nimble-exporter` — для этого выполните команду отображения содержимого текущей папки.
	```
	ls
	```
Значение `nimble-exporter` должно отобразиться в выдаче командной строки.
	```
	Dockerfile  go.mod  go.sum  main.go  monitoring nimble-exporter README.md
	```
3. Для проверки запустите экспортер с параметрм `--help`.
	```
	./nimble-exporter --help
	```
В выдаче командной строки должен отобразиться список параметров запуска экспортера (см. [описание параметров](#Параметры-запуска) ниже).

### Создание Docker-контейнера

1. В папке `nimble_exporter` выполните следующую команду.
	```
	sudo docker build -t srt-exporter .
	```
	Здесь: `srt-exporter` — имя будущего Docker-контейнера.
1. После выполения команды убедитесь, что контейнер создан.
	```
	sudo docker ps -a
	```
Имя созданного контейнера (в настоящем примере: `srt-exporter`) должно отобразиться в выдаче командной строки.

	```
	CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS                      PORTS     NAMES
	3cc121b3fe5b   srt-exporter   "./nimble_exporter -…"   About a minute ago   Exited (0) 59 seconds ago             great_solomon
	264f9941854f   hello-world    "/hello"                 37 hours ago         Exited (0) 37 hours ago               nervous_engelbart
	```
3. Для проверки запустите контейнер с параметром `--help`.
	```
	sudo docker run srt-exporter ./nimble_expter --help
	```
В выдаче командной строки должен отобразиться список параметров запуска экспортера (см. [описание параметров](#Параметры-запуска) ниже).

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

> [!IMPORTANT]
> Обратите внимание, что параметры `auth_salt` и `auth_hash` не заданы. Если инфраструктура подразумевает проверку подлинности для получения данных метрики, укажите эти параметры при запуске экспортера.

### Строка запуска

В общем виде строка запуска выглядит следующим образом.

```
<CMD> -<параметр1> <значение1> -<параметр2> <значение2>
```
Здесь:
* `<CMD>` - команда запуска экспортера:
  * для автономной сборки это `./nimble-exporter`, если запускать из папки сборки (в настоящем примере это папка `nimble_exporter`);
  * для Docker-контейнера в настоящем примере это `sudo docker run srt-exporter ./nimble_expter`;
* `<параметр>` — параметр запуска экспортера;
* `<значение>` - задаваемое значение указанного парметра.
> [!NOTE]  
> Параметры и возможные значение приведены в разделе [Параметры запуска](#Параметры-запуска) выше.

Ниже представлены примеры запуска экспортера с заданием значенией `auth_salt` и `auth_hash`

* **Автономная сборка**
```
./nimble-exporter -auth_salt "5144404" -auth_hash "0cc175b9c0f1b6a831c859e269772661"
```

* **Docker-контейнер**
```
sudo docker run srt-exporter ./nimble_expter -auth_salt "5144404" -auth_hash "0cc175b9c0f1b6a831c859e269772661"
```

## Развёртывание в кластере с werf

> [!TIP]
> Пример развёртывания приложения в кластере приведён в [документации werf](https://ru.werf.io/guides/django/100_basic/30_deploy.html).

1. Создайте образ приложения с помощью Docker и werf.
1. Для развёртывания Nimble Exporter в кластере используйте конфигурацию следующего вида.

```shell
      - name: srt-exporter
        image: {{ $.Values.werf.image.srt-exporter }}
        command:
        - /nimble_exporter
        - -auth_salt=5144404
        - -auth_hash=0cc175b9c0f1b6a831c859e269772661
        ports:
        - containerPort: 9017
          name: srt-exporter
          protocol: TCP
        resources:
          {{ toYaml $.Values.resources.srt-exporter |  nindent 10 }}
```

Ниже приведено описание некоторых настроек.

* `name` - имя приложения-экспортера, в настоящем примере это `srt-exporter`;
* `image` - шаблон полного имени Docker-образа экспортера;
* `auth_salt` - значение «соли» для проверки подлинности;
* `auth_hash` - хэш-значение для проверки подлинности.
> [!TIP]
> Вы также можете задать [другие параметры запуска](#Параметры-запуска).