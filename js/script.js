console.log($)

var congressionalPromise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=f69289663395468db48b632d79c7f151')

var statesContainer = document.querySelector("#statesContainer")

var legsCards = document.querySelector('.pols')

var handleData = function(apiResponse) {
    console.log(apiResponse)
    var legArray = apiResponse.results
    var htmlString = '<p>'+'</p>'
    for (var i = 0; i < legArray.length; i ++) {
        var legislatorObject = legArray[i]
        console.log(legislatorObject.state_name)
        htmlString += '<h2 class= "name">' + legislatorObject.first_name + ' ' + legislatorObject.last_name + '</h2>'
        htmlString += '<h3 class= "partyState"> ' + legislatorObject.title + ' -- ' + legislatorObject.party + ' - ' + legislatorObject.state + '</h3>'
        htmlString += '<ul>'
                htmlString += '<li class = "email"> email: ' + legislatorObject.email +'</li>'
                htmlString += '<li class = "website"> website: ' +legislatorObject.website +'</li>'
                htmlString += '<li class = "facebook"> facebook: ' +legislatorObject.facebook_id +'</li>'
                htmlString += '<li class = "twitter"> twitter: ' +legislatorObject.twitter_id +'</li>'
        htmlString += '</ul>'
        htmlString += '<h4 class = "termEnd"> Term End ' + legislatorObject.term_end +'</h4>'
    }

    legsCards.innerHTML = htmlString

}


congressionalPromise.then(handleData)
