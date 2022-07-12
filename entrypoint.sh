#!/bin/bash
 
 PS3="Enter your choice: "
 select i in Development Production Exit
 do
    case $i in
      Development)
         echo "Running docker in development mode"
            docker compose up dev -d
         break
         ;;
      Production)
         echo "You have selected Production"
            docker compose up prod -d
         break
         ;;
      *)
         echo "Invalid option $REPLY"
         ;;
    esac
     done