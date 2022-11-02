import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/morshidul-rahman-03b57620a/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://web.facebook.com/morshidul.rahman.3">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://github.com/morshidulrahman">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
