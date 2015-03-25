app.controller('homePageCtrl', function($scope, $http)
{
    $scope.productData = [];
	var responsePromise = $http.get("http://jsonplaceholder.typicode.com/posts");

	responsePromise.success(function(data, status, headers, config)
	{
		angular.forEach(data, function(item,i){
			if(i<12)
			{
				$scope.productData[i]={};
				$scope.productData[i]["productImage"] = 'http://placehold.it/150x150';
				$scope.productData[i]["productId"] = i;
				$scope.productData[i]["productTitle"] = item.title.slice(0,15);
				$scope.productData[i]["productDetail"] = item.body;
				$scope.productData[i]["productPrice"] = Math.floor(Math.random()*51);
			}
		});
		$scope.totalItems = data.length;
		$scope.currentPage = $scope.productData.length;

		$scope.setPage = function (pageNo) {
			$scope.currentPage = pageNo;
		};

		$scope.pageChanged = function() {
			console.log('Page changed to: ' + $scope.currentPage);
		};

		$scope.maxSize = data.length/12;
		$scope.bigTotalItems = data.length;
		$scope.bigCurrentPage = 1;
	});
	responsePromise.error(function(data, status, headers, config)
	{
		$rootScope.productData = $scope.productData;
		alert("AJAX failed!");
	});
});

app.controller('CarouselDemoCtrl', function ($scope)
{
	$scope.myInterval = 5000;
	var slides = $scope.slides = [];
	$scope.addSlide = function() {
		var newWidth = 848 + slides.length + 1;
		slides.push({
			image: 'http://placehold.it/' + newWidth + 'x300'
		});
	};
	for (var i=0; i<4; i++) {
		$scope.addSlide();
	}
});
