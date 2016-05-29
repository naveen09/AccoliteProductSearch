/**
* Couple of filters used in this project.
* tag filter is used to return csv text of tags
* link filters returns uri text for the link
*/
angular.module('accohubApp').filter('tag', function() {
    return function(input) {
        var tags = " ";
        for (var i = 0; i < input.length; i++) {
            console.log(input[i])
            tags += input[i] + ", ";
        }
        return tags.substr(0, tags.length - 1);
    };
}).filter('link', function() {
    return function(input) {
        return " "+input.split("/")[input.split("/").length - 1];
    };
});