const ThemeSettingScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        const htmlElement = document.querySelector('html');
        const themeMode = window.localStorage.getItem('ksg_theme');

        console.log('inline script', themeMode);

        if (themeMode === 'DARK_MODE') {
          htmlElement.classList.add('dark');
        }

        if (themeMode === 'LIGHT_MODE') {
          htmlElement.classList.remove('dark');
        }
        `,
      }}
    />
  );
};

export default ThemeSettingScript;
