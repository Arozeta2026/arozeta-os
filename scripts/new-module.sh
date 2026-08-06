#!/bin/bash

if [ -z "$1" ]; then
  echo "Uso: ./scripts/new-module.sh <module>"
  exit 1
fi

MODULE=$1

CAPITALIZED="$(tr '[:lower:]' '[:upper:]' <<< ${MODULE:0:1})${MODULE:1}"

echo "📦 Creando módulo: $MODULE"

mkdir -p \
src/app/$MODULE \
src/app/$MODULE/new \
src/app/api/$MODULE \
src/app/api/$MODULE/\[id\] \
src/components/$MODULE \
src/services \
src/types

touch \
src/app/$MODULE/page.tsx \
src/app/$MODULE/new/page.tsx \
src/app/api/$MODULE/route.ts \
src/app/api/$MODULE/\[id\]/route.ts \
src/components/$MODULE/${CAPITALIZED}Header.tsx \
src/components/$MODULE/${CAPITALIZED}Toolbar.tsx \
src/components/$MODULE/${CAPITALIZED}List.tsx \
src/components/$MODULE/${CAPITALIZED}Card.tsx \
src/components/$MODULE/${CAPITALIZED}Form.tsx \
src/components/$MODULE/Edit${CAPITALIZED}Drawer.tsx \
src/services/${MODULE}Service.ts \
src/types/${MODULE}.ts

echo "✅ Módulo $MODULE creado correctamente."