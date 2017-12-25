### Reactivesearch Starter App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Step-by-step guide available at [ReactiveSearch Quickstart Doc](https://opensource.appbase.io/reactive-manual/getting-started/reactivesearch.html).

### Develop

```
yarn && yarn start
```

should open something like this

![](https://i.imgur.com/Zgp5lGk.png)


### Configure

The ReactiveSearch components code resides in `src/App.js` file. For building this app, we use:

1. [appbase.io](https://appbase.io) for the backend, any Elasticsearch cluster/index should work.  
2. A simple flex based layout system, you can use Materialize's or Bootstrap's grid, or roll your own layout - the ReactiveSearch components are layout agnostic.  
3. The following components:
 - **ReactiveBase** - ReactiveBase is the provider component that connects the UI with the backend app.
 - **CategorySearch** - CategorySearch component provides a search box UI with categorized suggestions.
 - **SingleRange** - SingleRange component is used for displaying the star ratings.
 - **ResultCard** - ResultCard component is used for displaying the **hits** as a card layout.
