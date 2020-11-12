$(document).ready(function () {
    $("BMI").submit(runMyProgram);
    // Object containing the validation rules
    var myRules =
        {
            weight:
                {
                    required: true,
                    digits: true,
                    min: 88,
                    max: 353
                },
            height:
                {
                    required: true,
                    digits: true,
                    min: 59,
                    max: 79
                }
        };

    var myMessages =
        {
            weight: "Enter Your Weight (lbs)(88-353)",
            height: "Enter Your Height(Inch)(59-79)"
        };

    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );
    function runMyProgram() {
        var Height = $("#Height").val();
        var Weight = $("#Weight").val();
        var bmi = (703 * (Weight / Math.pow(Height, 2))).toFixed(1);
        var output = "";
        if(bmi < 18.5){
            output = "Underweight (BMI " + bmi + ") at " + Weight + " pounds.";
        }
        else if(bmi >= 18.5 && bmi < 25){
            output = "Healthy (BMI " + bmi + ") at " + Weight + " pounds.";
        }
        else if(bmi >=25 && bmi <= 30){
            output = "Overweight (BMI " + bmi + ") at " + Weight + " pounds.";
        }
        else if(bmi > 30){
            output = "Obese (BMI " + bmi + ") at " + Weight + " pounds.";
        }
        $("#calculation").text(output);
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.



    }
})