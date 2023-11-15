#!/bin/bash

type=$1
name=$2

case "$type" in
  "view")
    echo "Criando View $name"
    ng generate component views/$name
    ;;
  "http")
    echo "Criando Service $name"
    ng generate service services/http/$name'Http'
    ;;
  "data")
    echo "Criando Service $name"
    ng generate service services/data/$name'Data'
    ;;
  "websocket")
    echo "Criando Service $name"
    ng generate service services/websocket/$name'WebSocket'
    ;;
  "signal")
    echo "Criando Service $name"
    ng generate service services/signals/$name/$name'Signal'
    ;;
  "storage")
    echo "Criando Service $name"
    ng generate service services/storage/$name/$name'Storage'
    ;;
  "guard")
    echo "Criando Guard $name"
    ng generate service guards/$name
    ;;
  *)
    echo "Criando Component $name"
    ng generate component components/$name --skip-import --standalone --change-detection OnPush
    ;;
esac