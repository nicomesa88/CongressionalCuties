console.log('hello world')

console.log($)

var congressionalPromise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=f69289663395468db48b632d79c7f151')

var statesContainer = document.querySelector("#statesContainer")

var legsCards = document.querySelector('.pols')

// we define handleData with the api's response as an input. But this api response is not mentioned anywhere else
// in this code! Confusing, eh? That's because this is handled in the jquery source code. See the comment below
// on the .then() element.
var handleData = function(apiResponse) {
    console.log(apiResponse)
    var legArray = apiResponse.results
    //initialize a string of html
    var htmlString = ''
    for (var i = 0; i < legArray.length; i ++) {
        var legislatorObject = legArray[i]
        console.log(legislatorObject.state_name)
        //concatenate (add) the state and name of each legislator as we see them.
        htmlString += '<h2 class= "name">' + legislatorObject.first_name + ' ' + legislatorObject.last_name + '</h2>'
        htmlString += '<h3 class= "partyState"> ' + legislatorObject.title + ' -- ' + legislatorObject.party + ' - ' + legislatorObject.state + '</h3>'
        htmlString += '<ul>'
                htmlString += '<li class = "email"> email: ' + legislatorObject.email +'</li>'
                htmlString += '<li class = "website"> website: ' +legislatorObject.website +'</li>'
                htmlString += '<li class = "facebook"> facebook: ' +legislatorObject.facebook_id +'</li>'
                htmlString += '<li class = "twitter"> twitter: ' +legislatorObject.twitter_id +'</li>'
        '</ul>'
        htmlString += '<h4 class = "termEnd"> Term End ' + legislatorObject.term_end +'</h4>'


    }
    // we've now accumulated scores of <p> tags into our htmlString. if we set it as the innerHTML
    // of the statesContainer, the browser will rebuild its DOM tree according to the html structure
    // that we added to the statesContainer
    legsCards.innerHTML = htmlString
}


// What we're doing here is passing a function along to our promise. The promise says "OK i got your function.
// When the request is fulfilled, and the data is ready, I will pass the data into your function". That passing-in
// is in the jquery source. That's why we define handleData with an input that we ourselves never pass in.
congressionalPromise.then(handleData)

// summary: promise.then() takes as input a function. It queues up that function to run when the promise is fulfilled.
// When the promise is fulfilled (i.e. the data is ready), the promise (and not us) will invoke that function.