# Fast Node.js Hello World


Proof that node.js can still go fast when rendering "dynamic" templates, apropos this discussion http://www.reddit.com/r/node/comments/394xsi/the_performance_comparison_between_catberry_and/

```sh
npm install
node index.js
```

then

### 10 Concurrent Requests
```sh
ab -n 10000 -c 10 http://127.0.0.1:3003/
```

yields:
```
This is ApacheBench, Version 2.3 <$Revision: 1430300 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)


Server Software:
Server Hostname:        127.0.0.1
Server Port:            3003

Document Path:          /
Document Length:        1165 bytes

Concurrency Level:      10
Time taken for tests:   0.870 seconds
Complete requests:      10000
Failed requests:        0
Write errors:           0
Total transferred:      12650000 bytes
HTML transferred:       11650000 bytes
Requests per second:    11499.45 [#/sec] (mean)
Time per request:       0.870 [ms] (mean)
Time per request:       0.087 [ms] (mean, across all concurrent requests)
Transfer rate:          14205.86 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       0
Processing:     0    1   0.4      1       4
Waiting:        0    1   0.3      1       4
Total:          0    1   0.4      1       4

Percentage of the requests served within a certain time (ms)
  50%      1
  66%      1
  75%      1
  80%      1
  90%      1
  95%      1
  98%      1
  99%      3
 100%      4 (longest request)
```

### 1000 Concurrent Requests
```sh
ab -n 100000 -c 1000 http://127.0.0.1:3003/
```

yields:
```
This is ApacheBench, Version 2.3 <$Revision: 1430300 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)


Server Software:
Server Hostname:        127.0.0.1
Server Port:            3003

Document Path:          /
Document Length:        1165 bytes

Concurrency Level:      1000
Time taken for tests:   9.500 seconds
Complete requests:      100000
Failed requests:        0
Write errors:           0
Total transferred:      126500000 bytes
HTML transferred:       116500000 bytes
Requests per second:    10526.17 [#/sec] (mean)
Time per request:       95.001 [ms] (mean)
Time per request:       0.095 [ms] (mean, across all concurrent requests)
Transfer rate:          13003.52 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   69 352.3      0    7012
Processing:     5   18  23.9     13    1310
Waiting:        5   18  23.9     13    1310
Total:          9   87 361.1     13    7044

Percentage of the requests served within a certain time (ms)
  50%     13
  66%     16
  75%     23
  80%     24
  90%     27
  95%   1010
  98%   1024
  99%   1234
 100%   7044 (longest request)

```


# BOOM!