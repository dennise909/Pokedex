const client = contentful.createClient({
  space: '9ibhbvc9100k',
  accessToken: 's5fVSTk-C4DPzuDb6P2YwCWTg31Iaz9pjoRLvlG5hR4'
})

client
  .getEntry('54bMBCpFOVuOAL9R6aAhx7')
  .then(function (entry) {
      // logs the entry metadata
      //console.log(entry.sys)
      fieldsData(entry.fields)
      // logs the field with ID title
      //console.log(entry.fields.geolocalization)
  .catch(err => console.log(err))
  })

client
  .getAsset("7DTqxul1IkiU9dwbaBHKXo") 
  .then(function (asset ){
    
    console.log(asset.fields)  
    assetsField(asset.fields)

  .catch(err => console.log(err))
  })

  function fieldsData(value){
      //console.log(value)
      $("#title").html(value.title)
      $("#description").html(value.description)

  }

  function assetsField(value){
    //$("#family").attr("src","https:" + value.file.url)
    //$("#family").css("background-image", "url(https: + value.file.url)");
    $("#family").css('background-image', 'url(https:' + value.file.url + ')');
    //$("#family").html(value.title)
    //$('#family').prepend('<img id="theImg" src="theImg.png" />')
  }


