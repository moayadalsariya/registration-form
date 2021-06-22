// wait for DOM to load
$(() => {
    $("#form-vaild").validate({
        rules: {
            firstname: {
                required: true,
                minlength: 3,
                maxlength: 150
            },
            lastname: {
                required: true,
                minlength: 3,
                maxlength: 150
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                pwcheck: true
            },
            confirm_password: {
                required: true,
                minlength: 8,
                equalTo: '[name="password"]'
            },
            photo: {
                imgcheck: true
            },
            terms: {
                required: true
            }
        },
        messages: {
            password: {
                pwcheck: "password must conain characters and numbers"
            },
            photo: {
                imgcheck: "Image must be png or jpg",
                required: false
            }
        },
        submitHandler: function(form) {
            Swal.fire(
                'Good job!',
                'You can submit to server 👍',
                'success'
            )
            return false;
        }
    });
    $.validator.addMethod("pwcheck", function(value) {
        return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
            &&
            /[a-z]/.test(value) // has a lowercase letter
            &&
            /\d/.test(value) // has a digit
    });
    $.validator.addMethod("imgcheck", function(value, element) {
        return this.optional(element) || (/\.(jpg||png)$/i).test(value);
    });
})