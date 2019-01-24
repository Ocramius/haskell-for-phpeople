usersCount = do
    count <- get_active_users_count
    result1 <- remove_inactive_users(count)
    result2 <- remove_banned_users(result1)
    return remove_administrators(result2)
