import React from 'react';
// the css file name must follow the pattern *.module.css
import styles from 'cssModules.module.css';

function cssModules() {
  return (
    // the class name will be defined exactly as created in the stylesheet
    // if it caontains illegal characters for dot notation, bracket notation can be used
    <div className={styles.background}>

    </div>
  );
}

export default cssModules;
