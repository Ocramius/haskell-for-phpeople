app :: => Request -> Response
app = loadRequest
 |> route POST "/purchase"
 |> onlyWithAuthentication
 |> onlyCoyotes
 |> onlyWithValidFormData
 |> formToCommand PurchaseForm
 |> loadHistory fromDb
 |> performPurchase
 |> storeNewHistory toDb
 |> newHistoryToResponse