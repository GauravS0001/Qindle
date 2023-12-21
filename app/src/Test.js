import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = '273D70BB68A2DF22B2C5498CB712995C';
const iv = 'E4806F56EE621821';

const encryptedData = "1be946c7300a5921c9cf0f0cc5196c414bb5b93a8a113360bf51ebe01a343606f34e6f467f71613b9512a0edc5a523280675537ee2f145ff83db79cb5a8ff8946654d6079722bc06559e7e8964793c24c493098a844ed002647e2e39f43a39c24b6fd53d939683b85ae3d0f4923034e9b4794897c61da9169eba2becc767a65a6045d7102bfeb9f4078c2b0df2f0265b00008cafe84354631916e715ce9472cb5f107af0adbf576c0eb9cbe26f821da5f22e06f4dd167f4a4980c8762000978bd33f5d197879f1ab95c42a03d5622adafd33f1510e609c11fa064dd798ec2c2ca1b82deaaed32a01fd244ed2cf73de0c51c2dfd37cb884e80c0d3def64d07180c2e03961c2647dcbe9f85cff94c2aeca5e0cc31ae246ad73ec2286db99089ec04f7bc2dc27a65a44a7dfed9ab828ee99e9240df76c1acd28f9150ea9383e930b037353789dd4849644fe294db8035755ac72d043fa020e9ef187c1c827fe11ea";

function decryptData(encryptedHex) {
  let encryptedBuffer = Buffer.from(encryptedHex, 'hex');
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedBuffer);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

const decryptedData = decryptData(encryptedData);
console.log(decryptedData);