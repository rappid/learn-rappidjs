define(
    ["js/core/Application", "form/model/Person"],
    function (Application, Person) {

        return Application.inherit({
            /**
             *  initializes the application variables
             */
            initialize: function () {
                this.set('appName', 'FormApp');
                this.set('person', new Person());
            },

            _onSubmit: function (e) {
                e.preventDefault();
                this.$.person.validate();

            },

            errorClass: function (error) {
                if(error){
                    return "error";
                } else {
                    return "";
                }

            },

            /***
             * Starts the application
             * @param parameter
             * @param callback
             */
            start: function (parameter, callback) {
                // false - disables autostart
                this.callBase(parameter, false);

                callback();
            }
        });
    }
);