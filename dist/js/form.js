// PASSWORD-PROFILE-SETTINGS
$('body').on('click', '.password-eye--profile-settings-1', function () {
  if ($('.password--profile-settings-1').attr('type') == 'password') {
    $(this).addClass('password-eye-show');
    $('.password--profile-settings-1').attr('type', 'text');
  } else {
    $(this).removeClass('password-eye-show');
    $('.password--profile-settings-1').attr('type', 'password');
  }
  return false;
});
$('body').on('click', '.password-eye--profile-settings-2', function () {
  if ($('.password--profile-settings-2').attr('type') == 'password') {
    $(this).addClass('password-eye-show');
    $('.password--profile-settings-2').attr('type', 'text');
  } else {
    $(this).removeClass('password-eye-show');
    $('.password--profile-settings-2').attr('type', 'password');
  }
  return false;
});

// PASSWORD-PROFILE-SETTINGS
$('body').on('click', '.password-eye--modal-autorization-1', function () {
  if ($('.password--modal-autorization-1').attr('type') == 'password') {
    $(this).addClass('password-eye-show');
    $('.password--modal-autorization-1').attr('type', 'text');
  } else {
    $(this).removeClass('password-eye-show');
    $('.password--modal-autorization-1').attr('type', 'password');
  }
  return false;
});

// PASSWORD-AUTORIZATION-NEW
$('body').on('click', '.password-eye--modal-password-new-1', function () {
  if ($('.password--modal-password-new-1').attr('type') == 'password') {
    $(this).addClass('password-eye-show');
    $('.password--modal-password-new-1').attr('type', 'text');
  } else {
    $(this).removeClass('password-eye-show');
    $('.password--modal-password-new-1').attr('type', 'password');
  }
  return false;
});
$('body').on('click', '.password-eye--modal-password-new-2', function () {
  if ($('.password--modal-password-new-2').attr('type') == 'password') {
    $(this).addClass('password-eye-show');
    $('.password--modal-password-new-2').attr('type', 'text');
  } else {
    $(this).removeClass('password-eye-show');
    $('.password--modal-password-new-2').attr('type', 'password');
  }
  return false;
});

// PASSWORD-REGISTRATION
$('body').on('click', '.password-eye--modal-registration-1', function () {
  if ($('.password--modal-registration-1').attr('type') == 'password') {
    $(this).addClass('password-eye-show');
    $('.password--modal-registration-1').attr('type', 'text');
  } else {
    $(this).removeClass('password-eye-show');
    $('.password--modal-registration-1').attr('type', 'password');
  }
  return false;
});
$('body').on('click', '.password-eye--modal-registration-2', function () {
  if ($('.password--modal-registration-2').attr('type') == 'password') {
    $(this).addClass('password-eye-show');
    $('.password--modal-registration-2').attr('type', 'text');
  } else {
    $(this).removeClass('password-eye-show');
    $('.password--modal-registration-2').attr('type', 'password');
  }
  return false;
});