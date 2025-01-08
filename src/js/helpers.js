import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

/*
export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
*/
export function convertToFraction(decimal) {
  if (!decimal) return '';

  if (Number.isInteger(decimal)) return decimal.toString();

  const fractionMap = {
    0.25: '1/4',
    0.5: '1/2',
    0.75: '3/4',
    0.33: '1/3',
    0.67: '2/3',
    0.2: '1/5',
    0.4: '2/5',
    0.6: '3/5',
    0.8: '4/5',
  };

  const rounded = Math.round(decimal * 100) / 100;

  const wholePart = Math.floor(rounded);
  const decimalPart = rounded - wholePart;

  if (fractionMap[decimalPart.toFixed(2)]) {
    return wholePart
      ? `${wholePart} ${fractionMap[decimalPart.toFixed(2)]}`
      : fractionMap[decimalPart.toFixed(2)];
  }

  return rounded.toString();
}
