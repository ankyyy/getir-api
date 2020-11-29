# getir-api

## Steps
yarn && yarn start

### To test the API, import this in POSTMAN


curl --location --request POST 'https://warm-everglades-81598.herokuapp.com/records' \
--header 'Content-Type: application/json' \
--data-raw '{
"startDate": "2016-01-26",
"endDate": "2018-02-02",
"minCount": 2700,
"maxCount": 3000
}'