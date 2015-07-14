module.exports = function($scope, GuideDictionaryService){
	$scope.search_string = "";
	$scope.abbreviations =
		[
			{
				term:'uff',
				def:'undesired future fertility'
			},
			{
				term:'bmz',
				def:'betamethasone'
			},
			{
				term:'pcn',
				def:'penicillin'
			}
		];
	
	// load the data from the dictionary
	GuideDictionaryService.success(function(data){
		$scope.labor_guide = data;
	});
	console.log('required!');
};