import React, { FunctionComponent } from 'react';
import zxcvbn, { ZXCVBNResult, ZXCVBNScore } from 'zxcvbn';
import styles from './index.module.css';

export type PasswordStrengthLevels =
  | 'Very weak'
  | 'Weak'
  | 'Fair'
  | 'Good'
  | 'Strong';

export const getPasswordStrengthLevel = (
  score: ZXCVBNScore
): PasswordStrengthLevels => {
  switch (score) {
    case 0:
      return 'Very weak';
    case 1:
      return 'Weak';
    case 2:
      return 'Fair';
    case 3:
      return 'Good';
    case 4:
      return 'Strong';
    default:
      return 'Very weak';
  }
};

export interface PasswordStrengthMeterProps {
  password: string;
}

const PasswordStrengthMeter: FunctionComponent<PasswordStrengthMeterProps> = ({
  password
}) => {
  const testedResult: ZXCVBNResult = zxcvbn(password);
  const strengthLevel: PasswordStrengthLevels = getPasswordStrengthLevel(
    testedResult.score
  );

  return (
    <div className={styles['password-strength-meter']}>
      <progress
        className={styles['password-strength-meter__strength']}
        value={testedResult.score}
        max={4}
      />
      {password && (
        <p className={styles['password-strength-meter__label']}>
          Password strength: {strengthLevel}
        </p>
      )}
    </div>
  );
};

export default PasswordStrengthMeter;
