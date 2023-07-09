import './AuthTabs.scss';
import backgroundImage from '../../../assets/images/background.jpg';
import { useState } from 'react';
import { Login, Register } from '../index';

const AuthTabs = () => {
  const [type, setType] = useState('Sing In');
  return (
    <>
      <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="environment">DEV</div>
        <div className="container-wrapper-auth">
          <div className="tabs">
            <div className="tabs-auth">
              <ul className="tab-group">
                <li className={`tab ${type === 'Sing In' ? 'active' : ''}`} onClick={() => setType('Sing In')}>
                  <button className="login">Sign In</button>
                </li>
                <li className={`tab ${type === 'Sing Up' ? 'active' : ''}`} onClick={() => setType('Sing Up')}>
                  <button className="signup">Sign Up</button>
                </li>
              </ul>
              {type === 'Sing In' && (
                <div className="tab-item">
                  <Login />
                </div>
              )}
              {type === 'Sing Up' && (
                <div className="tab-item">
                  <Register />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthTabs;
