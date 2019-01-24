data Pizza = Margherita | Capricciosa | Spinaci

instance Eq Pizza where
  Margherita == Margherita = True
  Spinaci == Spinaci = True
  Capricciosa == Capricciosa = True
  _ == _ = False

instance Ord Pizza where
  Margherita >= Capricciosa = True
  Margherita >= Spinaci = True
  Spinaci >= Capricciosa = True
  -- ... and so on ...
  _ >= _ = False
