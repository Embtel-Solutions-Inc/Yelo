@component('mail::message')
# Change Password Request
Click the button below to change the password

@component('mail::button', ['url' => 'http://localhost:4200/change-password?token='.$token])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
