# Nimble Exporter для Prometheus

Nimble Exporter - экспортер метрик стриминогового сервера [Nimble Streamer](https://softvelum.com/nimble/) для системы мониторинга [Prometheus](https://prometheus.io/). Для получения метрик экспортер использует [API](https://softvelum.com/nimble/api/) сервера Nimble Streamer.

Полученные метрики экспортер по умолчанию на выходе представляет в JSON-формате. Это позволяет визуализировать данные с помощью [Grafana](https://grafana.com/).

## Системные требования

* [Git](https://git-scm.com/)
* [Docker Engine](https://docs.docker.com/engine/install/)
* [werf](https://ru.werf.io/)
* [kubernetes](https://kubernetes.io/)

## Сборка

### Локальная сборка и запуск

В папке репозитория из терминала выполните команду


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
| `loglevel` | Уровень отображения информации о событиях (уровень логирования):<ul><br /><li><code>error</code> - только ошибки;</li><li><code>info</code> - ошибки и общие сведения о работе сервера;</li><li><code>verbose</code> - более детальные сведения, чем в <code>info</code></li><li><code>debug</code> - наиболее полные сведения.</li></ul>| `info` |
| `logfmt` | Выходной формат метрик, возможны следующие значения:<br /><ul><li><code>normal</code>;</li><li><code>json</code>.</li></ul> | `json` |

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
