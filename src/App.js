import React, { Component } from 'react';
import { ReactiveBase, CategorySearch, SingleRange, ResultCard } from '@appbaseio/reactivesearch';

class App extends Component {
  render() {
    return (
        <ReactiveBase
        app="car-store"
        credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">
          <div style={{ display: "flex", "flexDirection": "row" }}>
            <div style={{ display: "flex", "flexDirection": "column", "width": "40%" }}>
              <CategorySearch
                componentId="searchbox"
                dataField="name"
                categoryField="brand.raw"
                placeholder="Search for cars"
                style={{
                  padding: "5px",
                  "marginTop": "10px"
                }}
              />
              <SingleRange
                componentId="ratingsfilter"
                title="Filter by ratings"
                dataField="rating"
                data={[
                  {"start": "4", "end": "5", "label": "4 stars and up"},
                  {"start": "3", "end": "5", "label": "3 stars and up"},
                  {"start": "2", "end": "5", "label": "2 stars and up"},
                  {"start": "1", "end": "5", "label": "see all ratings"},
                ]}
                defaultSelected="4 stars and up"
                style={{
                  padding: "5px",
                  "marginTop": "10px"
                }}
              />
            </div>
            <ResultCard
              componentId="result"
              dataField="name"
              title="Results"
              from={0}
              size={6}
              pagination={true}
              react={{
                and: ["searchbox", "ratingsfilter"]
              }}
              onData={({_source: res}) => {
                return {
                  image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
                  title: res.name,
                  desc: res.brand + " " + "★".repeat(res.rating)
                }
              }}
              style={{
                "width": "60%",
                "textAlign": "center"
              }}
            />
          </div>
        </ReactiveBase>
    );
  }
}

export default App;
