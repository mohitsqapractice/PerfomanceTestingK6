import http from 'k6/http';
export const options = {
  vus: 3, 
    duration: '10s',
}

export default function () {
  const url = 'https://quickpizza.grafana.com/';
  const res = http.get(url);
  console.log('Response status code: ' + res.status);
}   