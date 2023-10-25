import { I18nextProvider } from 'react-i18next';
import Main from '../main';
import i18n from '../../i18n';
import './style.sass';
import ThemeContextParent from '../../contexts/themeContext';

function App() {
 

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContextParent>
        <div className={`app fade-in ${screenFormat}`}>
          <Main/>
        </div>
      </ThemeContextParent>
    </I18nextProvider>
  );
}

export default App;
