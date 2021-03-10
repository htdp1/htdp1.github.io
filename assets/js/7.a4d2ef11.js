(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{350:function(v,_,t){v.exports=t.p+"assets/img/ngrinder-test-result.a630dc19.png"},370:function(v,_,t){"use strict";t.r(_);var d=t(40),r=Object(d.a)({},(function(){var v=this,_=v.$createElement,d=v._self._c||_;return d("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[d("h1",{attrs:{id:"redis-성능-측정"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#redis-성능-측정"}},[v._v("#")]),v._v(" Redis 성능 측정")]),v._v(" "),d("h2",{attrs:{id:"prerequisite"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[v._v("#")]),v._v(" Prerequisite")]),v._v(" "),d("ul",[d("li",[d("p",[v._v("EKS에 nGrider Controller Deploy"),d("br"),v._v(" "),d("a",{attrs:{href:"https://github.com/htdp1/session-k8s/tree/main/dev/ngrinder/controller",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://github.com/htdp1/session-k8s/tree/main/dev/ngrinder/controller"),d("OutboundLink")],1)])]),v._v(" "),d("li",[d("p",[v._v("EKS에 nGrider Agent Deploy"),d("br"),v._v(" "),d("a",{attrs:{href:"https://github.com/htdp1/session-k8s/tree/main/dev/ngrinder/agent",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://github.com/htdp1/session-k8s/tree/main/dev/ngrinder/agent"),d("OutboundLink")],1)])]),v._v(" "),d("li",[d("p",[v._v("Prometheus, Grafana 를 통한 EKS Cluster Monitoring"),d("br"),v._v(" "),d("a",{attrs:{href:"http://k8s-grafana-grafana-6380e9e544-711314603.ap-northeast-2.elb.amazonaws.com/?orgId=1",target:"_blank",rel:"noopener noreferrer"}},[v._v("http://k8s-grafana-grafana-6380e9e544-711314603.ap-northeast-2.elb.amazonaws.com/?orgId=1"),d("OutboundLink")],1)])])]),v._v(" "),d("h2",{attrs:{id:"redis-benchmark"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#redis-benchmark"}},[v._v("#")]),v._v(" Redis-Benchmark")]),v._v(" "),d("ul",[d("li",[v._v("aof:no")])]),v._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[v._v("SET: 4561.00 requests per second\nGET: 4462.89 requests per second\nLPUSH: 4665.70 requests per second\nLPOP: 4375.98 requests per second\n")])])]),d("ul",[d("li",[v._v("aof:yes, aofsync:everysec")])]),v._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[v._v("SET: 3772.16 requests per second\nGET: 3939.80 requests per secondd\nLPUSH: 4171.19 requests per second\nLPOP: 5430.65 requests per second\n")])])]),d("ul",[d("li",[v._v("aof:yes, aofsync:always")])]),v._v(" "),d("div",{staticClass:"language- extra-class"},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",[v._v("SET: 2927.74 requests per second\nGET: 4188.31 requests per second\nLPUSH: 3165.06 requests per second\nLPOP: 3165.36 requests per second\n")])])]),d("h2",{attrs:{id:"ngrinder"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#ngrinder"}},[v._v("#")]),v._v(" nGrinder")]),v._v(" "),d("h3",{attrs:{id:"environment"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[v._v("#")]),v._v(" Environment")]),v._v(" "),d("ul",[d("li",[v._v("Test Architecture")])]),v._v(" "),d("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/TLD1QiCm4Bpx5OlleiJ7KaeA3Q4Kse1pApqeriOMLIGZAGsbvE-LLh9Ta-IarSnOEwkHbyvpwuy7LPHRT1vj2Tn1eoHgNsWZ4ChLQqqWVZduBG0I-bRVWqFdfD5Cu3SfmagAGVFCFTznXudSPGv0P1pA0xUIYrrvGLWKqh66DrtwcgeRAcxsf0dhBOKwyH-NH5IIxlpFQjrRgLjushmaLIz7jny2Uy-oqyyqP-yNCvRQZDmb5JsEzEHpfY1Za-YwJxqEFaMEIRTfCrbjZFP6ARHqJjnPemQIjo7K1J6fd17LH5HZs_Cixuqr1_GT7jDLzc4RMb_8rfRlkUQaQKCzQCv5UbV0h6mxpnv7Wta59in91ppRkmfNHMA1HIJa51gkjdURztgRcEeQGv6D1-Km2ONeWrvNpYO2CQ8f1K9I7l69isFFQFY2Re0ftCTXugZ3X0yiRPUeHVYv_W00",alt:"uml diagram"}}),v._v(" "),d("ul",[d("li",[v._v("TPS 3000 이상의 성능이 나오는 적정 환경에서 수행")]),v._v(" "),d("li",[v._v("nGrinder Agent 2ea")])]),v._v(" "),d("table",[d("thead",[d("tr",[d("th",[v._v("Container")]),v._v(" "),d("th",[v._v("CPU")]),v._v(" "),d("th",[v._v("Memory")])])]),v._v(" "),d("tbody",[d("tr",[d("td",[v._v("Spring Boot")]),v._v(" "),d("td",[v._v("0.5 / 4")]),v._v(" "),d("td",[v._v("4Gi")])]),v._v(" "),d("tr",[d("td",[v._v("nGrinder")]),v._v(" "),d("td",[v._v("0.5 / 2")]),v._v(" "),d("td",[v._v("4Gi")])]),v._v(" "),d("tr",[d("td",[v._v("MariaDB")]),v._v(" "),d("td",[v._v("0.5 / 1.0")]),v._v(" "),d("td",[v._v("1Gi")])]),v._v(" "),d("tr",[d("td",[v._v("Redis")]),v._v(" "),d("td",[v._v("0.3 / 0.5")]),v._v(" "),d("td",[v._v("0.5Gi")])])])]),v._v(" "),d("ul",[d("li",[v._v("nGrinder Management Console에서 Test Result 조회 가능"),d("br"),v._v(" "),d("a",{attrs:{href:"http://k8s-sessiond-ngrinder-aa75db0c27-1345478526.ap-northeast-2.elb.amazonaws.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("http://k8s-sessiond-ngrinder-aa75db0c27-1345478526.ap-northeast-2.elb.amazonaws.com/"),d("OutboundLink")],1)])]),v._v(" "),d("p",[d("img",{attrs:{src:t(350),alt:""}})]),v._v(" "),d("h3",{attrs:{id:"test-result"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#test-result"}},[v._v("#")]),v._v(" Test Result")]),v._v(" "),d("h4",{attrs:{id:"_1-get-method-call-result-mariadb-vs-redis-cache-rdb-aof-fsync-mode"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-method-call-result-mariadb-vs-redis-cache-rdb-aof-fsync-mode"}},[v._v("#")]),v._v(" 1. GET Method Call Result (mariadb vs redis cache(rdb/aof/fsync mode)")]),v._v(" "),d("table",[d("thead",[d("tr",[d("th",[v._v("Condition")]),v._v(" "),d("th"),v._v(" "),d("th"),v._v(" "),d("th",[v._v("TPS"),d("br"),d("small",[v._v("(max cpu)")])]),v._v(" "),d("th"),v._v(" "),d("th"),v._v(" "),d("th")])]),v._v(" "),d("tbody",[d("tr",[d("td",[d("strong",[v._v("vUser")])]),v._v(" "),d("td",[d("strong",[v._v("rows")])]),v._v(" "),d("td",[d("strong",[v._v("repl.")])]),v._v(" "),d("td",[d("strong",[v._v("mariadb")])]),v._v(" "),d("td",[d("strong",[v._v("redis")])]),v._v(" "),d("td",[d("strong",[v._v("redis AOF"),d("br"),v._v("everysec")])]),v._v(" "),d("td",[d("strong",[v._v("redis AOF"),d("br"),v._v("always")])])]),v._v(" "),d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2600 (380m)")]),v._v(" "),d("td",[v._v("3630 (90m)")]),v._v(" "),d("td",[v._v("3600  (90m)")]),v._v(" "),d("td",[v._v("3650 (90m)")])]),v._v(" "),d("tr",[d("td",[v._v("2000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2600 (400m)")]),v._v(" "),d("td",[v._v("2860 (70m)")]),v._v(" "),d("td",[v._v("3000  (80m)")]),v._v(" "),d("td",[v._v("3090 (80m)")])]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2210 (350m)")]),v._v(" "),d("td",[v._v("2310 (60m)")]),v._v(" "),d("td",[v._v("2440  (60m)")]),v._v(" "),d("td",[v._v("2370 (60m)")])]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2")]),v._v(" "),d("td",[v._v("3270 (480m)")]),v._v(" "),d("td",[v._v("3310 (90m)")]),v._v(" "),d("td",[v._v("3230  (120m)")]),v._v(" "),d("td",[v._v("3300 (80m)")])]),v._v(" "),d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("180  (110m)")]),v._v(" "),d("td",[v._v("1620 (130m)")]),v._v(" "),d("td",[v._v("1560  (80m)")]),v._v(" "),d("td",[v._v("1580 (80m)")])])])]),v._v(" "),d("h5",{attrs:{id:"_1-1-mariadb-select-test"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-mariadb-select-test"}},[v._v("#")]),v._v(" 1-1. Mariadb Select Test")]),v._v(" "),d("table",[d("thead",[d("tr",[d("th",[v._v("vUser")]),v._v(" "),d("th",[v._v("rows")]),v._v(" "),d("th",[v._v("Threshold")]),v._v(" "),d("th",[v._v("Replicas")]),v._v(" "),d("th",[v._v("TPS")]),v._v(" "),d("th",[v._v("Err.")]),v._v(" "),d("th",[v._v("Comment")])])]),v._v(" "),d("tbody",[d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[d("strong",[v._v("2600")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("2000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2600")]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2210")]),v._v(" "),d("td",[v._v("0.1%")]),v._v(" "),d("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("5min")]),v._v(" "),d("td",[v._v("2")]),v._v(" "),d("td",[v._v("3270")]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td",[v._v("pod 증설, "),d("em",[v._v("2210 -> 3270")])])]),v._v(" "),d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[d("strong",[v._v("180")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td",[v._v("rows 증가, "),d("em",[v._v("2600 -> 180")])])])])]),v._v(" "),d("h5",{attrs:{id:"_1-2-redis-get-test"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-redis-get-test"}},[v._v("#")]),v._v(" 1-2. Redis GET Test")]),v._v(" "),d("table",[d("thead",[d("tr",[d("th",[v._v("vUser")]),v._v(" "),d("th",[v._v("rows")]),v._v(" "),d("th",[v._v("Threshold")]),v._v(" "),d("th",[v._v("Replicas")]),v._v(" "),d("th",[v._v("TPS")]),v._v(" "),d("th",[v._v("Err.")]),v._v(" "),d("th",[v._v("Comment")])])]),v._v(" "),d("tbody",[d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[d("strong",[v._v("3630")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("2000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2860")]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2310")]),v._v(" "),d("td",[v._v("0.9%")]),v._v(" "),d("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("5min")]),v._v(" "),d("td",[v._v("2")]),v._v(" "),d("td",[v._v("3310")]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td",[v._v("pod 증설, "),d("em",[v._v("2310 -> 3320")])])]),v._v(" "),d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[d("strong",[v._v("1620")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td",[v._v("rows 증가, "),d("em",[v._v("3630 -> 1620")])])])])]),v._v(" "),d("h5",{attrs:{id:"_1-3-aof-redis-get-test-fsync-everysec"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-aof-redis-get-test-fsync-everysec"}},[v._v("#")]),v._v(" 1-3. AOF Redis GET Test (fsync: everysec)")]),v._v(" "),d("table",[d("thead",[d("tr",[d("th",[v._v("vUser")]),v._v(" "),d("th",[v._v("rows")]),v._v(" "),d("th",[v._v("Threshold")]),v._v(" "),d("th",[v._v("Replicas")]),v._v(" "),d("th",[v._v("TPS")]),v._v(" "),d("th",[v._v("Err.")]),v._v(" "),d("th",[v._v("Comment")])])]),v._v(" "),d("tbody",[d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[d("strong",[v._v("3600")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("2000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2440")]),v._v(" "),d("td",[v._v("0.1%")]),v._v(" "),d("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("5min")]),v._v(" "),d("td",[v._v("2")]),v._v(" "),d("td",[v._v("3230")]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td",[v._v("pod 증설, "),d("em",[v._v("2440 -> 3230")])])]),v._v(" "),d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[d("strong",[v._v("1560")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td",[v._v("rows 증가, "),d("em",[v._v("3600 -> 1560")])])])])]),v._v(" "),d("h5",{attrs:{id:"_1-4-aof-redis-get-test-fsync-always"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-aof-redis-get-test-fsync-always"}},[v._v("#")]),v._v(" 1-4. AOF Redis GET Test (fsync: always)")]),v._v(" "),d("table",[d("thead",[d("tr",[d("th",[v._v("vUser")]),v._v(" "),d("th",[v._v("rows")]),v._v(" "),d("th",[v._v("Threshold")]),v._v(" "),d("th",[v._v("Replicas")]),v._v(" "),d("th",[v._v("TPS")]),v._v(" "),d("th",[v._v("Err.")]),v._v(" "),d("th",[v._v("Comment")])])]),v._v(" "),d("tbody",[d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[d("strong",[v._v("3650")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("2000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("3090")]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2370")]),v._v(" "),d("td",[v._v("0.1%")]),v._v(" "),d("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("10")]),v._v(" "),d("td",[v._v("5min")]),v._v(" "),d("td",[v._v("2")]),v._v(" "),d("td",[v._v("3300")]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td",[v._v("pod 증설, "),d("em",[v._v("2370 -> 3300")])])]),v._v(" "),d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[d("strong",[v._v("1580")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td",[v._v("rows 증가, "),d("em",[v._v("3650 -> 1580")])])])])]),v._v(" "),d("h4",{attrs:{id:"_2-post-method-call-test"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_2-post-method-call-test"}},[v._v("#")]),v._v(" 2. POST Method Call Test")]),v._v(" "),d("table",[d("thead",[d("tr",[d("th",[v._v("Condition")]),v._v(" "),d("th"),v._v(" "),d("th",[v._v("TPS"),d("br"),d("small",[v._v("(max cpu)")])]),v._v(" "),d("th"),v._v(" "),d("th"),v._v(" "),d("th")])]),v._v(" "),d("tbody",[d("tr",[d("td",[d("strong",[v._v("vUser")])]),v._v(" "),d("td",[d("strong",[v._v("repl.")])]),v._v(" "),d("td",[d("strong",[v._v("mariadb")])]),v._v(" "),d("td",[d("strong",[v._v("redis")])]),v._v(" "),d("td",[d("strong",[v._v("redis AOF"),d("br"),v._v("everysec")])]),v._v(" "),d("td",[d("strong",[v._v("redis AOF"),d("br"),v._v("always")])])]),v._v(" "),d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("1550 (980m)")]),v._v(" "),d("td",[d("strong",[v._v("3170 (150m)")])]),v._v(" "),d("td",[v._v("2410 (150m)")]),v._v(" "),d("td",[v._v("2300 (70m)")])]),v._v(" "),d("tr",[d("td",[v._v("2000")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("1530 (980m)")]),v._v(" "),d("td",[d("strong",[v._v("3270 (160m)")])]),v._v(" "),d("td",[v._v("2310 (130m)")]),v._v(" "),d("td",[v._v("2200 (100m)")])]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("1370 (970m)")]),v._v(" "),d("td",[d("strong",[v._v("2840 (160m)")])]),v._v(" "),d("td",[v._v("2100 (130m)")]),v._v(" "),d("td",[v._v("1900 (90)")])]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("2")]),v._v(" "),d("td",[v._v("1940 (970m)")]),v._v(" "),d("td",[d("strong",[v._v("3350 (220m)")])]),v._v(" "),d("td",[v._v("3260 (270m)")]),v._v(" "),d("td",[v._v("3140 (180m)")])])])]),v._v(" "),d("h5",{attrs:{id:"_2-1-mariadb-insert-test"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-mariadb-insert-test"}},[v._v("#")]),v._v(" 2-1. Mariadb Insert Test")]),v._v(" "),d("table",[d("thead",[d("tr",[d("th",[v._v("vUser")]),v._v(" "),d("th",[v._v("Threshold")]),v._v(" "),d("th",[v._v("Replicas")]),v._v(" "),d("th",[v._v("TPS")]),v._v(" "),d("th",[v._v("Err.")]),v._v(" "),d("th",[v._v("Comment")])])]),v._v(" "),d("tbody",[d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[d("strong",[v._v("1550")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("2000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("1530")]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("1370")]),v._v(" "),d("td",[v._v("1.0%")]),v._v(" "),d("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),d("tr",[d("td",[v._v("4000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("1350")]),v._v(" "),d("td",[v._v("1.2%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("5min")]),v._v(" "),d("td",[v._v("2")]),v._v(" "),d("td",[d("strong",[v._v("1940")])]),v._v(" "),d("td",[v._v("0.1%")]),v._v(" "),d("td",[v._v("Pod 증설, "),d("em",[v._v("1370 -> 1940")])])])])]),v._v(" "),d("h5",{attrs:{id:"_2-2-redis-set-test"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-redis-set-test"}},[v._v("#")]),v._v(" 2-2. Redis SET Test")]),v._v(" "),d("table",[d("thead",[d("tr",[d("th",[v._v("vUser")]),v._v(" "),d("th",[v._v("Threshold")]),v._v(" "),d("th",[v._v("Replicas")]),v._v(" "),d("th",[v._v("TPS")]),v._v(" "),d("th",[v._v("Err.")]),v._v(" "),d("th",[v._v("Comment")])])]),v._v(" "),d("tbody",[d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[d("strong",[v._v("3170")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("2000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("3270")]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2840")]),v._v(" "),d("td",[v._v("0.1%")]),v._v(" "),d("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),d("tr",[d("td",[v._v("4000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2500")]),v._v(" "),d("td",[v._v("1.3%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("2")]),v._v(" "),d("td",[v._v("2300")]),v._v(" "),d("td",[v._v("0.1%")]),v._v(" "),d("td",[v._v("성능 저하 구간에서 replicas=2"),d("br"),v._v("pod 여러 개일 경우, 부하 초기에 분산 지연")])]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("5min")]),v._v(" "),d("td",[v._v("2")]),v._v(" "),d("td",[d("strong",[v._v("3350")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td",[v._v("Pod 증설, "),d("em",[v._v("2840 -> 3350")])])])])]),v._v(" "),d("h5",{attrs:{id:"_2-3-aof-redis-set-test-fsync-everysec"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-aof-redis-set-test-fsync-everysec"}},[v._v("#")]),v._v(" 2-3. AOF Redis SET Test (fsync: everysec)")]),v._v(" "),d("table",[d("thead",[d("tr",[d("th",[v._v("vUser")]),v._v(" "),d("th",[v._v("Threshold")]),v._v(" "),d("th",[v._v("Replicas")]),v._v(" "),d("th",[v._v("TPS")]),v._v(" "),d("th",[v._v("Err.")]),v._v(" "),d("th",[v._v("Comment")])])]),v._v(" "),d("tbody",[d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[d("strong",[v._v("2400")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("2000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2310")]),v._v(" "),d("td",[v._v("0.1%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2100")]),v._v(" "),d("td",[v._v("0.1%")]),v._v(" "),d("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),d("tr",[d("td",[v._v("4000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2700")]),v._v(" "),d("td",[v._v("1.3%")]),v._v(" "),d("td",[v._v("Error 발생 시, TPS 측정이 다소 부정확한 것으로 보임")])]),v._v(" "),d("tr",[d("td",[v._v("6000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2700")]),v._v(" "),d("td",[v._v("2.6%")]),v._v(" "),d("td",[v._v("Error 발생 시, TPS 측정이 다소 부정확한 것으로 보임")])]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("5min")]),v._v(" "),d("td",[v._v("2")]),v._v(" "),d("td",[d("strong",[v._v("3260")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td",[v._v("Pod 증설, "),d("em",[v._v("2100 -> 3260")])])])])]),v._v(" "),d("h5",{attrs:{id:"_2-4-aof-redis-set-test-fsync-always"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-aof-redis-set-test-fsync-always"}},[v._v("#")]),v._v(" 2-4. AOF Redis SET Test (fsync: always)")]),v._v(" "),d("table",[d("thead",[d("tr",[d("th",[v._v("vUser")]),v._v(" "),d("th",[v._v("Threshold")]),v._v(" "),d("th",[v._v("Replicas")]),v._v(" "),d("th",[v._v("TPS")]),v._v(" "),d("th",[v._v("Err.")]),v._v(" "),d("th",[v._v("Comment")])])]),v._v(" "),d("tbody",[d("tr",[d("td",[v._v("1000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[d("strong",[v._v("2300")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("2000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2200")]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td")]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("1900")]),v._v(" "),d("td",[v._v("0.2%")]),v._v(" "),d("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),d("tr",[d("td",[v._v("4000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("1")]),v._v(" "),d("td",[v._v("2300")]),v._v(" "),d("td",[v._v("1.4%")]),v._v(" "),d("td",[v._v("Error 발생 시, TPS 측정이 다소 부정확한 것으로 보임")])]),v._v(" "),d("tr",[d("td",[v._v("6000")]),v._v(" "),d("td",[v._v("2min")]),v._v(" "),d("td",[v._v("2")]),v._v(" "),d("td",[v._v("2300")]),v._v(" "),d("td",[v._v("9.9%")]),v._v(" "),d("td",[v._v("Error 발생 시, TPS 측정이 다소 부정확한 것으로 보임")])]),v._v(" "),d("tr",[d("td",[v._v("3000")]),v._v(" "),d("td",[v._v("5min")]),v._v(" "),d("td",[v._v("2")]),v._v(" "),d("td",[d("strong",[v._v("3140")])]),v._v(" "),d("td",[v._v("0.0%")]),v._v(" "),d("td",[v._v("Pod 증설, "),d("em",[v._v("1900 -> 3140")])])])])])])}),[],!1,null,null,null);_.default=r.exports}}]);