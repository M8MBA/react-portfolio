import React from 'react';

function Footer() {
  const contacts = [
    {
      name: 'github',
      icon: '',
      link: 'https://github.com/M8MBA',
    },
    {
      name: 'linkedin',
      icon: '',
      link: '/',
    },
    {
      name: 'stackoverflow',
      icon: '',
      link: '/',
    },
  ];
  return (
    <footer>
      {contacts.map(item => (
        <a key={item.name} target="_blank" href={item.link}>
          {item.icon}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
