app :: Request -> IO Response
app = makeRequest
  |> onlyAuthenticated
  |> onlyCoyotes
  |> onlyWithValidForm theForm
  |> purchase