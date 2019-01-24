data UserId = UserId Int

makeUserId :: Int -> Maybe UserId
makeUserId id
    | id <= 0 = Nothing
    | otherwise = Just (UserId id)
