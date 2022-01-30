const NAME = "Sharvari Pradhan";

const element = React.createElement(
	"div",
	{ className: "container border" },
	React.createElement(
		"h1",
		{ className: "border" },
		NAME
	),
	React.createElement("img", { className: "border", src: "https://cdn.corporatefinanceinstitute.com/assets/professional-woman-1024x683.jpg", width: "300px" }),
	React.createElement(
		"p",
		null,
		"A Data Scientist from India. Graduate Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of May 2023. Actively seeking internships in Data Science for Summer 2022."
	),
	React.createElement(
		"a",
		{ href: "https://github.com/sharvari-p", target: "_blank" },
		React.createElement(
			"button",
			{ className: "border" },
			React.createElement(
				"h3",
				null,
				"VIEW MY GITHUB REPO"
			)
		)
	)
);

ReactDOM.render(element, document.getElementById('root'));