# Учебный проект №2 "Вычислитель отличий" в программе "Фронтэнд-разработчик"

Данный проект создан в обучающих целях для закрепления ранее пройденных материалов, а так же отработки навыков построения архитектуры, работы с автоматизированными тестами, с древовидными структурами данных и рекурсивными алгоритмами. Включает в себя программу, определяющую разницу между двумя структурами данных. Поддерживает такие входные форматы как json и yaml. А так же генерирует отчет в трех форматах (plain text, stylish и json)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Varravana/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Varravana/frontend-project-46/actions)
[![run-gendiff](https://github.com/Varravana/frontend-project-46/actions/workflows/run-parser.yml/badge.svg)](https://github.com/Varravana/frontend-project-46/actions/workflows/run-parser.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Varravana_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Varravana_frontend-project-46)

## Содержание

* [Разработка и использование](#разработка-и-использование)
* [Инструкция по запуску](#инструкция-по-запуску)
* [Демонстрация](#Демонстрация)

## Разработка и использование

### Требования

Для установки и запуска проекта, необходим NodeJS v23+.

### Установка

Для установки необходимо выполнить команду:
```
make install
```

## Инструкция по запуску
При запуске с флагом -h выводится справочная информация. После указания имени программы, указывается путь к двум сравниваемым файла, а так же формат вывода данных. По умолчанию стоит формат stylish.

```
bin/gendiff.js filepath1 filepath2 -f plain
```

## Демонстрация
[Демонстрационный Скринкаст](https://asciinema.org/a/A58pnZcm4VoUOjD3CWN9opBNW "Перейти на страницу с видео")