export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  server.create('accountType', {
    name: "Standard"
  });
  server.create('accountType', {
    name: "Savings"
  });
  server.create('branch', {
    name: "RAH",
  });
  server.create('branch', {
    name: "MAL"
  });
  server.create('branch', {
    name: "SWO"
  });
  server.create('branch', {
    name: "BLA"
  });

  server.createList('bank-account', 4);
  server.createList('transaction', 10);
}
