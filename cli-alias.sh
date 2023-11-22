#!/bin/bash

type=$1
name=$2
module=$3

if [ "$module" ]; then
    module=modules/$module
fi

case "$type" in
  "module")
    echo "Criando Module $name"
    ng generate module modules/$name
  ;;
  "component")
    echo "Criando Component $name"
    ng generate component $module/components/$name --skip-import --standalone --change-detection OnPush
    ;;
  "template")
    echo "Criando Template $name"
    ng generate component $module/templates/$name --skip-import --standalone --change-detection OnPush
    ;;
  "view")
    echo "Criando View $name"
    ng generate component $module/views/$name
    ;;
  "guard")
    echo "Criando Guard $name"
    ng generate service $module/guards/$name
    ;;
  "http")
    echo "Criando Service $name"
    ng generate service $module/services/http/$name/$name'Http'
    ;;
  "data")
    echo "Criando Service $name"
    ng generate service $module/services/data/$name/$name'Data'
    ;;
  "websocket")
    echo "Criando Service $name"
    ng generate service $module/services/websocket/$name'WebSocket'
    ;;
  "signal")
    echo "Criando Service $name"
    ng generate service $module/services/signals/$name/$name'Signal'
    ;;
  "storage")
    echo "Criando Service $name"
    ng generate service  $module/services/storage/$name/$name'Storage'
    ;;
  "facade")
    echo "Criando Service $name"
    ng generate service  $module/services/facade/$name/$name'facade'
    ;;
  "interceptor")
    echo "Criando Interceptor $name"
    ng generate interceptor $module/services/interceptors/$name
    ;;
  *)
    echo "Criando Component $name"
    ng generate component components/$name/$name --skip-import --standalone --change-detection OnPush
    ;;
esac
