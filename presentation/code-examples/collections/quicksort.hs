quickSort [] = []
quickSort (x:xs) = quickSort small ++ (x : quickSort large)
  where small = [y | y <- xs, y <= x]
        large = [y | y <- xs, y > x]
