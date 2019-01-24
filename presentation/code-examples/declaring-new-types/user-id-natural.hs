data UserId = UserId Natural

makeUserId :: Natural -> Maybe UserId
makeUserId id
    | id == 0 = Nothing
    | otherwise = Just (UserId id)
