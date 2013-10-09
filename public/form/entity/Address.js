define(['js/data/Entity'], function(Entity){


    return Entity.inherit('form.entity.Address', {

        schema: {
            street: String,
            city: String,
            zipCode: String
        }

    });



});