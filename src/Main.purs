module Main where

import Prelude
import Data.Maybe
import QuickServe
import Effect.Class.Console(log)


server :: GET String
server = pure "Hello, World!"

main = do
  let opts = { hostname: "localhost", port: 3000, backlog: Nothing }
  log "Starting server."
  quickServe opts server