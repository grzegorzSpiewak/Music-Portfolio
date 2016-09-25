document.addEventListener("DOMContentLoaded", function(event) {

    function Validation(form) {
        this.form = form;
        this.inputs = this.form.querySelectorAll('input');
    };

    Validation.prototype.validateInput = function(input) {

        if (input.name === 'email' && input.value.indexOf('@') === -1) {
            alert('invalid email');
            console.log(input.value)
            return false;
        }

        if (input.name === 'name' && input.value.length < 5) {
            alert('invalid name');
            return false;
        }

        if (input.name === 'text' && input.value.length < 5) {
            alert('invalid surname');
            return false;
        }
        return true;
    };

    Validation.prototype.bindSubmitEvent = function() {
        this.form.addEventListener('submit', this.handleSubmitEvent.bind(this));
    };

    Validation.prototype.handleSubmitEvent = function(e) {
        for (var i = 0; i < this.inputs.length; i++) {
            if (!this.validateInput(this.inputs[i])) {
                e.preventDefault();
                break;
            }
        }
    };

    Validation.prototype.init = function() {
        this.bindSubmitEvent();
    };

    var validator = new Validation(document.querySelector('form'));
    validator.init();
});
