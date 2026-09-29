import https from 'k6/http';
import { sleep } from 'k6';
export const options = {
    stages: [
        { duration: '4s', target: 2 }, // Ramp-up to 2 users over 30 seconds
        { duration: '5s', target: 5 },  // Stay at 5 users for 1 minute
        { duration: '3s', target: 0 },   // Ramp-down to 0 users over 30 seconds
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
        http_req_failed: ['rate<0.01'], // Less than 1% of requests should fail
    },
}

export default function () {
    https.get('https://quickpizza.grafana.com/');
    sleep(1); // Sleep for 1 second between requests
}