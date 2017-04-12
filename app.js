var {
	ReactiveBase,
	CategorySearch,
	RatingsFilter,
	ResultCard
} = ReactiveSearch;

var Testing = React.createClass({
	onData: function(res) {
		const result = {
			image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
			title: res.name,
			rating: res.rating,
			desc: res.brand,
			url: "#"
		};
		return result;
	},
	render: function() {
		return (
			<div className="container-fluid h-100 liveExample">
				<ReactiveBase
				app="car-store"
				credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c"
			>
				<div className="row reverse-labels">
					<div className="col s6 col-xs-6">
						<div className="row">
							<div className="col s12 col-xs-12">
								<CategorySearch
									componentId="SearchSensor"
									appbaseField="name"
									categoryField="brand.raw"
									placeholder="Search Cars"
									autocomplete={false}
								/>
							</div>
							<div className="col s12 col-xs-12">
								<RatingsFilter
									componentId="RatingsSensor"
									appbaseField="rating"
									title="RatingsFilter"
									data={
									[{ start: 4, end: 5, label: "4 stars and up" },
										{ start: 3, end: 5, label: "3 stars and up" },
										{ start: 2, end: 5, label: "2 stars and up" },
										{ start: 1, end: 5, label: "> 1 stars" }]
									}
									defaultSelected={{
										"start": 3,
										"end": 5
									}}
								/>
							</div>
						</div>
					</div>
					<div className="col s6 col-xs-6">
						<ResultCard
							componentId="SearchResult"
							appbaseField="name"
							title="Results"
							from={0}
							size={20}
							onData={this.onData}
							sortOptions={[
								{
									label: "Lowest Price First",
									appbaseField: "price",
									sortBy: "asc"
								},
								{
									label: "Highest Price First",
									appbaseField: "price",
									sortBy: "desc"
								},
								{
									label: "Most rated",
									appbaseField: "rating",
									sortBy: "desc"
								}
							]}
							react={{
								and: ["RatingsSensor", "SearchSensor"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
			</div>
		)
	}
})

ReactDOM.render(
	<Testing></Testing>,
	document.getElementById('root')
);
