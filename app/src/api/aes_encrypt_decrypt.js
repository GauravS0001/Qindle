import '../../../shim.js';
import crypto from 'crypto';
const algorithm = 'aes-256-cbc';
const key = '273D70BB68A2DF22B2C5498CB712995C';
const iv = 'E4806F56EE621821';

exports.encryptData = data => {
  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  // let encrypted = cipher.update(data);
  let encrypted = cipher.update(JSON.stringify(data));
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  // return encrypted.toString('hex');
  let d = {data: encrypted.toString('hex')};
  return JSON.stringify(d);
  // return encrypted.toString('hex');
};

exports.encryptDataNoJSON = data => {
  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  // let encrypted = cipher.update(data);
  let encrypted = cipher.update(JSON.stringify(data));
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  // return encrypted.toString('hex');
  let d = { data: encrypted.toString('hex') };
  return d;
  // return encrypted.toString('hex');
};



exports.encryptDataGet = data => {
  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  // let encrypted = cipher.update(data);
  let encrypted = cipher.update(JSON.stringify(data));
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  // return encrypted.toString('hex');
  let d = encrypted.toString('hex');
  return d;
  // return encrypted.toString('hex');
};


exports.decryptData = data => {

  try{
  let encryptedText = Buffer.from(data, 'hex');
  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
  }catch(error){
    console.log('Error during decryption:', error)
    return '';
  }
};

exports.decryptFileData = data => {
  let encryptedText = Buffer.from(data, 'hex');
  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

