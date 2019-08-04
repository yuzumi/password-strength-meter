import React, { FunctionComponent, useState, FormEvent } from 'react';
import PasswordStrengthMeter from 'components/PasswordStrengthMeter';
import './index.css';

const Meter: FunctionComponent = () => {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (event: FormEvent<HTMLInputElement>) => {
    const input: HTMLInputElement = event.target as HTMLInputElement;

    setPassword(input.value);
  };

  return (
    <div className="app">
      <div className="meter">
        <div className="meter__group">
          <input
            className="meter__field"
            autoComplete="off"
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="meter__group">
          <PasswordStrengthMeter password={password} />
        </div>
      </div>
    </div>
  );
};

export default Meter;
