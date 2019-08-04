import React, { FunctionComponent, useState, FormEvent } from 'react';
import PasswordStrengthMeter from 'components/PasswordStrengthMeter';
import styles from './index.module.css';

const Meter: FunctionComponent = () => {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (event: FormEvent<HTMLInputElement>) => {
    const input: HTMLInputElement = event.target as HTMLInputElement;

    setPassword(input.value);
  };

  return (
    <div className={styles['meter']}>
      <div className={styles['meter__group']}>
        <input
          className={styles['meter__field']}
          autoComplete="off"
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className={styles['meter__group']}>
        <PasswordStrengthMeter password={password} />
      </div>
    </div>
  );
};

export default Meter;
