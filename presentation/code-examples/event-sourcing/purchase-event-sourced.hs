app :: => Request -> Response
app = loadRequest
 |> route POST "/purchase"
 |> onlyWithAuthentication
 |> onlyCoyotes
 |> onlyWithValidFormData
 |> formToCommand
 |> loadHistory
 |> performPurchase
 |> storeNewHistory
 |> newHistoryToResponse