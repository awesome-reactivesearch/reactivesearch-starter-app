### Reactivesearch Starter App

This project uses ReactiveSearch in a UMD mode.

See the `master` branch if you are interested in a build that uses CRA to do the same.


### Develop

The scripts are imported in the `index.html` file and the React render code is inside `src/App.js` file.

Open a http-server in the project root dir.

```bash
python -m SimpleHTTPServer 1234
# Go to http://localhost:1234
```

should open something like this

![](https://i.imgur.com/Zgp5lGk.png)


### Configure

The ReactiveSearch components code resides in `src/App.js` file. For building this app, we use:

1. [appbase.io](https://appbase.io) for the backend, any Elasticsearch cluster/index should work.  
2. A layout system based on Flex. You can easily switch this to using your own layout system or one of the pre-existing ones from libraries like Materialize or Bootstrap.
3. The following components:
 - **ReactiveBase** - ReactiveBase is the provider component that connects the UI with the backend app.
 - **CategorySearch** - CategorySearch component provides a search box UI with categorized suggestions.
 - **SingleRange** - SingleRange component is used for displaying the star ratings.
 - **ResultCard** - ResultCard component is used for displaying the **hits** as a card layout.
