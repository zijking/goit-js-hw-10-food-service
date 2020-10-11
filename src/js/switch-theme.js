const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const KEY_THEME = 'theme';

const btnSwitch = document.querySelector('#theme-switch-toggle');
// btnSwitch.checked = false;
btnSwitch.addEventListener('click', switchTheme);

themeDefault();

// console.log(btnSwitch.checked);

function switchTheme() {
  if (btnSwitch.checked) {
    //   dark theme
    setDarkTheme();
    localStorage.setItem(KEY_THEME, Theme.DARK);
  } else {
    //   light theme
    setLightTheme();
    localStorage.setItem(KEY_THEME, Theme.LIGHT);
  }
}

function themeDefault() {
  const localData = localStorage.getItem(KEY_THEME);

  if (localData) {
    // console.log(localData);
    if (localData === Theme.DARK) {
      setDarkTheme();
      btnSwitch.checked = true;
    } else {
      setLightTheme();
      btnSwitch.checked = false;
    }
  }
}

function setLightTheme() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
}

function setDarkTheme() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
}
