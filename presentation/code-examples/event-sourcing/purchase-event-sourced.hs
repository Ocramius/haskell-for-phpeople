app :: => Request -> Response
app = loadRequest
 |> route
 |> onlyWithAuthentication
 |> onlyCoyotes
 |> onlyWithValidFormData
 |> formToCommand
 |> loadHistory
 |> performPurchase
 |> storeNewHistory
 |> newHistoryToResponse