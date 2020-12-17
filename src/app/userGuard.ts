class userGuard implements IsAuthenticated {
  isAuthenticated() {
    // check sql database to see if user exists
    // and password matches
    return true;
  }
}