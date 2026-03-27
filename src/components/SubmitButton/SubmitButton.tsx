import React from 'react';
import styles from './SubmitButton.module.scss';

interface SubmitButtonProps {
  disableButton: boolean;
  submitHandler: () => void;
  children: React.ReactNode;
}

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <button
      className={[styles.submitButton, props.disableButton ? styles.submitDisabled : ''].join(' ')}
      onClick={props.submitHandler}
      disabled={props.disableButton}
    >
      {props.children}
    </button>
  );
};
export default SubmitButton;
