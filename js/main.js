$(document).ready(function()
{
    $(console.log('The page has loaded, successfully!'));

    $(".nav-icon").click(function()
    {
        $(this).toggleClass('checked');
    });

    $("#banner").addClass('animate');
});

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
