define(['js/data/Model', 'form/entity/Address', 'js/data/validator/RegExValidator'], function (Model, Address, RegExValidator) {


    var EmailValidator = RegExValidator.inherit({
        defaults: {
            errorCode: "invalidEmail",
            regEx: /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        }
    });

    return Model.inherit('form.model.Person', {


        schema: {
            firstName: String,
            lastName: String,
            address: Address,
            email: {
                type: String,
                required: false
            }
        },

        defaults: {
            address: Address
        },

        validators: [
            new EmailValidator({field: "email"})
        ]

    });


});