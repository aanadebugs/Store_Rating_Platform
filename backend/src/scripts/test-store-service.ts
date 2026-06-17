const store = await storeService.createStore(
  storeOwnerId,
  {
    name: "My Store",
    email: "store@example.com",
    address: "Pune",
  }
);