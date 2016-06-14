console.log($)

var congressionalPromise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=f69289663395468db48b632d79c7f151')


var legsCards = document.querySelector('#container')


var handleData = function(apiResponse) {
    console.log(apiResponse)
    var legArray = apiResponse.results
    var htmlString = ''
    for (var i = 0; i < legArray.length; i ++) {
        var legislatorObject = legArray[i]
        console.log(legislatorObject.state_name)
        htmlString += '<div>'
        htmlString += '<h1 class= "name">' + legislatorObject.first_name + ' ' + legislatorObject.last_name + '</h1>'
        htmlString += '<h2 class= "partyState"> ' + legislatorObject.title + ' -- ' + legislatorObject.party + ' - ' + legislatorObject.state_name + '</h2>'
        htmlString += '<ul>'
                htmlString += '<li class = "email"> email: ' + legislatorObject.email +'</li>'
                htmlString += '<li class = "website"> website: ' +legislatorObject.website +'</li>'
                htmlString += '<li class = "facebook"> facebook: ' +legislatorObject.facebook_id +'</li>'
                htmlString += '<li class = "twitter"> twitter: ' +legislatorObject.twitter_id +'</li>'
        htmlString += '</ul>'
        htmlString += '<h3 class = "termEnd"> Term End ' + legislatorObject.term_end +'</h3>'
        htmlString += '</div>'
    }

    legsCards.innerHTML += htmlString

}

congressionalPromise.then(handleData)
