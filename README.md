# API Load Testing

This repository gives the opportunity for quick API load testing. It lets you record a usage scenario in the browser to
then transform it to a __Postman Collection__ or a __K6 Load Test__.

## Installation

> Prerequisite: Installed [NodeJS](https://nodejs.org/en/download), [Postman](https://www.postman.com/downloads/) 
> and [K6](https://k6.io/docs/get-started/installation/)

```shell
npm install
```

## Usage

### 1. Export the Network HAR

1. Open __Chrome__ as browser.
2. Open __Dev Tools (F12)__ and go to the `network` tab.
3. Check `Preserve log` and set filter to `Fetch/XHR` in the __Dev Tools__.
4. Open the interested website.
5. Execute the interested usage scenario.
6. Export the __HAR file__ from the __Dev Tools__ and save it to [1-har-exported](1-har-exported).

![Chrome Dev Tools](.docs/chrome-dev-tools.png)

### 2. Filter HAR

Filter the __HAR file__ for only the `XHR` requests and save them to [2-har-filtered](2-har-filtered).

```shell
npm run har-filter
```

### 3. Create Postman Collection

1. Open __Postman__.
2. Import the __HAR file__ from [2-har-filtered](2-har-filtered) as __Postman Collection__.
3. Modify the collection like the authentication.
4. Export the __Postman Collection__ as `json` to the [3-postman-collections](3-postman-collections).

### 4. Postman to K6

Transform the __Postman Collections__ to __K6 Scripts__ and save them to [4-k6-scripts](4-k6-scripts). Get all required
commands:

```shell
npm run postman-to-k6
```

And execute them all.

### 5. Execute K6 Load Tests

Get all available load test commands:

```shell
npm run k6-commands
```

And execute them as desired.

## References

* [Running K6](https://k6.io/docs/get-started/running-k6/)
* [Postman to K6 GitHub](https://github.com/apideck-libraries/postman-to-k6)
