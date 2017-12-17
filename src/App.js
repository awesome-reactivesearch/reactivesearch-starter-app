import React, { Component } from 'react';
import './App.css';
// reactivesearch components
import {
		ReactiveBase,
		CategorySearch,
		SingleRange,
		ResultCard
} from '@appbaseio/reactivesearch';
// For layouts, you can use a layout system of your choice
import { Flex, Box } from 'reflexbox';

class App extends Component {

	// takes one hit response from query and returns it
	// in the ResultCard format to render UI view.
	onData({ _source: res }) {
		const result = {
			image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
			title: res.name,
			desc: res.brand + " " + "★".repeat(res.rating),
			url: "#"
		};
		return result;
	}

	render() {
		return (
			<ReactiveBase
			app="car-store"
			credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">
				<Flex column={false} className="flex-wrapper">
					<Flex column w={[1, 1, 1/3]} wrap>
						<Box m={2} pt={3}>
							<CategorySearch
								componentId="SearchSensor"
								dataField="name"
								categoryField="brand.raw"
								placeholder="Search Cars"
							/>
						</Box>
						<Box m={2} pt={2}>
							<SingleRange
								componentId="RatingsSensor"
								dataField="rating"
								title="RatingsFilter"
								data={
								[{ start: 4, end: 5, label: "4 stars and up" },
									{ start: 3, end: 5, label: "3 stars and up" },
									{ start: 2, end: 5, label: "2 stars and up" },
									{ start: 1, end: 5, label: "> 1 stars" }]
								}
								defaultSelected={"4 stars and up"}
							/>
						</Box>
					</Flex>
					<Flex w={[1, 1, 2/3]} wrap>
						<ResultCard
							innerClass={{
								"resultstats": "resultstats"
							}}
							className="results"
							componentId="SearchResult"
							dataField="name"
							title="Results"
							from={0}
							size={6}
							pagination
							onData={this.onData}
							sortOptions={[
								{
									label: "Lowest Price First",
									dataField: "price",
									sortBy: "asc"
								},
								{
									label: "Highest Price First",
									dataField: "price",
									sortBy: "desc"
								},
								{
									label: "Most rated",
									dataField: "rating",
									sortBy: "desc"
								}
							]}
							react={{
								and: ["SearchSensor", "RatingsSensor"]
							}}
						/>
					</Flex>
				</Flex>
			</ReactiveBase>
		);
	}
}

export default App;
