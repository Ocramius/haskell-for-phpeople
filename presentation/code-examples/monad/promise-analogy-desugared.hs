usersCount = get_active_users_count >>= (\count ->
    remove_inactive_users count >>= (\result1 ->
        remove_banned_users >>= (\result2 ->
            return $ remove_administrators result2
        )
    )
)
