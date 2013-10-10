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
                this.set('person2', new Person());
            },

            _onSubmit: function (e) {
                e.preventDefault();
                this.$.person.validate();

            },

            _onSubmit2: function(e){
                e.preventDefault();
                this.$.person2.validate();
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