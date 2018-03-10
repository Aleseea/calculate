function calculate(req, res) {
	console.log('Playing the game from a different file...');
    var weight = req.query.weight;
	var mailType = req.query.mailType;
    var message = " ";
    var price = " ";
	console.log('The MailType is: ' + mailType);
    console.log('The Weight is: ' + weight);
    console.log('The Price is: ' + price);
    console.log('The Message is: ' + message);
    


    if (weight <=0){
        message = "The Weight needs to be greater than 0"
    }
    else{
        if (mailType == "ls"){
            if (weight <= 1){
                price = 0.50;
            }
            else if(weight <= 2){
                price = 0.71;
            }
            else if(weight <= 3){
                price = 0.92;
            }
            else if(weight <= 3.5){
                price = 1.13;
            }
            else{
                message="Weight was too heavy for this mail type";
            }
        }
        else if(mailType == "lm"){
            if (weight <= 1){
                price = 0.47;
            }
            else if(weight <= 2){
                price = 0.68;
            }
            else if(weight <= 3){
                price = 0.89;
            }
            else if(weight <= 3.5){
                price = 1.10;
            }
            else{
                message="Weight was too heavy for this mail type";
            }
        }
        else if(mailType == "lef"){
            if (weight <= 1){
                price = 1.00;
            }
            else if(weight <= 2){
                price = 1.21;
            }
            else if(weight <= 3){
                price = 1.42;
            }
            else if(weight <= 4){
                price = 1.63;
            }
            else if(weight <= 5){
                price = 1.84;
            }
            else if(weight <= 6){
                price = 2.05;
            }
            else if(weight <= 7){
                price = 2.26;
            }
            else if(weight <= 8){
                price = 2.47;
            }
            else if(weight <= 9){
                price = 2.68;
            }
            else if(weight <= 10){
                price = 2.89;
            }
            else if(weight <= 11){
                price = 3.10;
            }
            else if(weight <= 12){
                price = 3.31;
            }
            else if(weight <= 13){
                price = 3.52;
            }
            else{
                message="Weight was too heavy for this mail type";
            }
        }
        else if(mailType = "fcpsr"){
            if (weight <= 4){
                price = 3.50;
            }
            else if(weight <= 8){
                price = 3.75;
            }
            else if(weight <= 9){
                price = 4.10;
            }
            else if(weight <= 10){
                price = 4.45;
            }
            else if(weight <= 11){
                price = 4.80;
            }
            else if(weight <= 12){
                price = 5.15;
            }
            else if(weight <= 13){
                price = 5.50;
            }
            else{
                message="Weight was too heavy for this mail type";
            }
        }
        else{
            message = "Not enough information was provided, please try again";
        }
    }
    
    

	var stuff = {message: message, price: price};

	res.render('pages/results', stuff);
}

module.exports = {calculate: calculate};