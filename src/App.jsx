const NAME = "Sharvari Pradhan";

const element = (
	<div className="container border">
		<h1 className="border">{NAME}</h1>
		<img className="border" src="https://cdn.corporatefinanceinstitute.com/assets/professional-woman-1024x683.jpg" width="300px" />
		<p>A Fullstack Web Developer from San Diego. International Graduate Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of May 2023. Actively seeking internships in Software Development for Summer 2022.</p>
		<a href="https://github.com/sharvari-p" target="_blank">
			<button className="border"><h3>VIEW MY GITHUB REPO</h3></button>
		</a>
	</div>
);

ReactDOM.render(element, document.getElementById('root'));