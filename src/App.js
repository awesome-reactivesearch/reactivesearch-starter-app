import React from "react";
import {
  ReactiveBase,
  SearchBox,
  MultiList,
  ReactiveList,
  SingleRange,
  ResultCard
} from "@appbaseio/reactivesearch";

import "./styles.css";

function App() {
  return (
    <ReactiveBase
      url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io"
      app="good-books-ds"
      credentials="04717bb076f7:be54685e-db84-4243-975b-5b32ee241d31"      
    >
      {/* other components will go here. */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            margin: "10px"
          }}
        >
          <MultiList
            className="multilist"
            componentId="authorsfilter"
            dataField="authors.keyword"
            title="Filter by Authors"
            aggregationSize={5}
            innerClass={{
                input: 'input-class'
            }}
          />
          <SingleRange
            componentId="ratingsfilter"
            dataField="average_rating"
            title="Filter by Ratings"
            data={[
              { start: 4, end: 5, label: "4 stars and above" },
              { start: 3, end: 5, label: "3 stars and above" },
              { start: 1, end: 5, label: "Any ratings" }
            ]}
            defaultValue="4 stars and up"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "66%" }}>
          <SearchBox
            style={{
              marginTop: "35px"
            }}
            componentId="searchbox"
            dataField={[
              "authors",
              "authors.autosuggest",
              "original_title",
              "original_title.autosuggest"
            ]}
            fieldWeights={[3, 1, 5, 1]}
            placeholder="Search for books or authors"
          />
          <ReactiveList
            componentId="results"
            dataField="name"
            size={6}
            pagination={true}
            react={{
              and: ["searchbox", "ratingsfilter", "authorsfilter"]
            }}
            style={{ textAlign: "center" }}
            render={({ data }) => (
              <ReactiveList.ResultCardsWrapper>
                {data.map((item) => (
                  <ResultCard key={item._id}>
                    <ResultCard.Image
                      style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${item.image})`
                      }}
                    />
                    <ResultCard.Title
                      dangerouslySetInnerHTML={{
                        __html: item.original_title
                      }}
                    />
                    <ResultCard.Description>
                      {item.authors +
                        " " +
                        "*".repeat(item.average_rating_rounded)}
                    </ResultCard.Description>
                  </ResultCard>
                ))}
              </ReactiveList.ResultCardsWrapper>
            )}
          />
        </div>
      </div>
    </ReactiveBase>
  );
}

export default App;
