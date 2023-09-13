#!/bin/bash

while true
do
    # Faz o commit
    commit_message="Atualização automática"
    git add .
    git commit -m "$commit_message"

    # Faz o push
    git push

    # Obtém a data e hora atual
    current_date=$(date "+%Y-%m-%d")
    current_time=$(date "+%H:%M:%S")

    echo "Commit e push realizados com sucesso em $current_date às $current_time."

    # Espera 10 minutos
    sleep 600
done