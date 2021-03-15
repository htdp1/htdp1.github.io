(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{350:function(v,_,t){v.exports=t.p+"assets/img/ngrinder-test-result.a630dc19.png"},351:function(v,_,t){v.exports=t.p+"assets/img/redis-memory-201103111642.e3de3eb3.png"},352:function(v,_,t){v.exports=t.p+"assets/img/redis-cache-kill-cpu.0a633638.png"},353:function(v,_,t){v.exports=t.p+"assets/img/redis-cache-kill-tps.fa5768af.png"},374:function(v,_,t){"use strict";t.r(_);var e=t(40),d=Object(e.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"redis-성능-측정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-성능-측정"}},[v._v("#")]),v._v(" Redis 성능 측정")]),v._v(" "),e("h2",{attrs:{id:"prerequisite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[v._v("#")]),v._v(" Prerequisite")]),v._v(" "),e("ul",[e("li",[v._v("Deploy nGrider Controller on EKS"),e("br"),v._v(" "),e("a",{attrs:{href:"https://github.com/htdp1/session-k8s/tree/main/dev/ngrinder/controller",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://github.com/htdp1/session-k8s/tree/main/dev/ngrinder/controller"),e("OutboundLink")],1)]),v._v(" "),e("li",[v._v("Deploy nGrider Agent on EKS"),e("br"),v._v(" "),e("a",{attrs:{href:"https://github.com/htdp1/session-k8s/tree/main/dev/ngrinder/agent",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://github.com/htdp1/session-k8s/tree/main/dev/ngrinder/agent"),e("OutboundLink")],1)])]),v._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[v._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[v._v("git")]),v._v(" clone https://github.com/htdp1/session-k8s.git\n\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[v._v("cd")]),v._v(" session-k8s\n$ kubectl apply -k ./dev/ngrinder/controller\n$ kubectl apply -k ./dev/ngrinder/agent\n")])])]),e("ul",[e("li",[v._v("Prometheus, Grafana 를 통한 EKS Cluster Monitoring"),e("br"),v._v(" "),e("a",{attrs:{href:"http://k8s-grafana-grafana-6380e9e544-711314603.ap-northeast-2.elb.amazonaws.com/?orgId=1",target:"_blank",rel:"noopener noreferrer"}},[v._v("http://k8s-grafana-grafana-6380e9e544-711314603.ap-northeast-2.elb.amazonaws.com/?orgId=1"),e("OutboundLink")],1)])]),v._v(" "),e("h2",{attrs:{id:"redis-benchmark"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-benchmark"}},[v._v("#")]),v._v(" Redis-Benchmark")]),v._v(" "),e("p",[v._v("Redis 자체적으로 제공하는 RedisCluster 및 Sentinel 장비에 대한 성능 측정 도구")]),v._v(" "),e("ul",[e("li",[v._v("aof:no")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("SET: 27932.96 requests per second, p50=0.783 msec                   \nGET: 27948.57 requests per second, p50=0.775 msec                   \nLPUSH: 27987.69 requests per second, p50=0.775 msec                    \nLPOP: 28538.81 requests per second, p50=0.775 msec                   \n")])])]),e("ul",[e("li",[v._v("aof:yes, aofsync:everysec")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("SET: 33579.59 requests per second, p50=0.375 msec                   \nGET: 31289.11 requests per second, p50=0.399 msec                                     \nLPUSH: 33355.57 requests per second, p50=0.375 msec\nLPOP: 33590.86 requests per second, p50=0.375 msec\n")])])]),e("ul",[e("li",[v._v("aof:yes, aofsync:always")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("SET: 9087.60 requests per second, p50=5.655 msec                  \nGET: 31908.10 requests per second, p50=0.391 msec                   \nLPUSH: 8882.57 requests per second, p50=5.759 msec                  \nLPOP: 9192.87 requests per second, p50=5.599 msec                  \n")])])]),e("h2",{attrs:{id:"ngrinder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ngrinder"}},[v._v("#")]),v._v(" nGrinder")]),v._v(" "),e("p",[v._v("Naver에서 개발하였으며, 스크립트 생성 / 테스트 실행 / 모니터링 및 결과 보고서 생성기를 동시에 실행할 수 있는 스트레스 테스트 도구임"),e("br"),v._v(" "),e("a",{attrs:{href:"http://naver.github.io/ngrinder/",target:"_blank",rel:"noopener noreferrer"}},[v._v("http://naver.github.io/ngrinder/"),e("OutboundLink")],1)]),v._v(" "),e("h3",{attrs:{id:"environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[v._v("#")]),v._v(" Environment")]),v._v(" "),e("ul",[e("li",[v._v("Test Architecture")])]),v._v(" "),e("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/VPFHIyCm4CRV-rSSVG-oFeh818U8e8FkJNouDRSkc2KboHmY-zzDBrbBtUPJalj-xNtNBvtxW2xiTxeeL-G3kHBGGwCLcL0OAmdAnKlDHVhqy5C0fEfhVGkUl5VM24bVJCIL2G17JK3JwWW-Oi0rUah4EWC0CjUXtA5JADVbcU18AYyQRBRfQTvTeT1kc8dhDK8VyDidYBVC7V_whJkdJ0iFo-U4Tcgm_2wf2oBR_KWJTs4sKRdNe9rBlT517irE27OtGl-ODK_HhCofcJOTHh-DDS5gJOvVrf-SrISHsvZnZ9MqdGZLA5H3x-Ca_gMpEmfRsgUFsiLZR7s6FJdSe45cshW_CSSYNJEu4qwrso3k1uTv1I7jmSHwzdUnN1L9XRuGmueD5wkRvLkzIa9rGU3OG4GXXycL7anNB6V3JyQ8nXIualBeBxlOTuBdBdXueMdJZz5FEGwNZdCoClvclm00",alt:"uml diagram"}}),v._v(" "),e("ul",[e("li",[v._v("TPS 3000 이상의 성능이 나오는 적정 환경에서 수행")]),v._v(" "),e("li",[v._v("nGrinder Agent 2ea")]),v._v(" "),e("li",[v._v("EBS Volume iops 3000")])]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("Container")]),v._v(" "),e("th",[v._v("CPU")]),v._v(" "),e("th",[v._v("Memory")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("Spring Boot")]),v._v(" "),e("td",[v._v("0.5 / 4")]),v._v(" "),e("td",[v._v("4Gi")])]),v._v(" "),e("tr",[e("td",[v._v("nGrinder")]),v._v(" "),e("td",[v._v("0.5 / 2")]),v._v(" "),e("td",[v._v("4Gi")])]),v._v(" "),e("tr",[e("td",[v._v("MariaDB")]),v._v(" "),e("td",[v._v("0.5 / 1.0")]),v._v(" "),e("td",[v._v("1Gi")])]),v._v(" "),e("tr",[e("td",[v._v("Redis")]),v._v(" "),e("td",[v._v("0.3 / 0.5")]),v._v(" "),e("td",[v._v("0.5Gi")])])])]),v._v(" "),e("ul",[e("li",[v._v("nGrinder Management Console에서 Test Result 조회 가능"),e("br"),v._v(" "),e("a",{attrs:{href:"http://k8s-sessiond-ngrinder-aa75db0c27-1345478526.ap-northeast-2.elb.amazonaws.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("http://k8s-sessiond-ngrinder-aa75db0c27-1345478526.ap-northeast-2.elb.amazonaws.com/"),e("OutboundLink")],1)])]),v._v(" "),e("p",[e("img",{attrs:{src:t(350),alt:""}})]),v._v(" "),e("h3",{attrs:{id:"redis-get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-get"}},[v._v("#")]),v._v(" Redis GET")]),v._v(" "),e("ul",[e("li",[v._v("MariaDB departments 테이블 cache result를 가져오는 Spring Boot API 호출 (기본 10rows)")])]),v._v(" "),e("h4",{attrs:{id:"get-method-call-result"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-method-call-result"}},[v._v("#")]),v._v(" GET Method Call Result")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("Condition")]),v._v(" "),e("th"),v._v(" "),e("th"),v._v(" "),e("th",[v._v("TPS"),e("br"),e("small",[v._v("(max cpu)")])]),v._v(" "),e("th"),v._v(" "),e("th"),v._v(" "),e("th")])]),v._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[v._v("vUser")])]),v._v(" "),e("td",[e("strong",[v._v("rows")])]),v._v(" "),e("td",[e("strong",[v._v("repl.")])]),v._v(" "),e("td",[e("strong",[v._v("mariadb")])]),v._v(" "),e("td",[e("strong",[v._v("redis")])]),v._v(" "),e("td",[e("strong",[v._v("redis AOF"),e("br"),v._v("everysec")])]),v._v(" "),e("td",[e("strong",[v._v("redis AOF"),e("br"),v._v("always")])])]),v._v(" "),e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2600 (380m)")]),v._v(" "),e("td",[v._v("3630 (90m)")]),v._v(" "),e("td",[v._v("3600  (90m)")]),v._v(" "),e("td",[v._v("3650 (90m)")])]),v._v(" "),e("tr",[e("td",[v._v("2000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2600 (400m)")]),v._v(" "),e("td",[v._v("2860 (70m)")]),v._v(" "),e("td",[v._v("3000  (80m)")]),v._v(" "),e("td",[v._v("3090 (80m)")])]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2210 (350m)")]),v._v(" "),e("td",[v._v("2310 (60m)")]),v._v(" "),e("td",[v._v("2440  (60m)")]),v._v(" "),e("td",[v._v("2370 (60m)")])]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2")]),v._v(" "),e("td",[v._v("3270 (480m)")]),v._v(" "),e("td",[v._v("3310 (90m)")]),v._v(" "),e("td",[v._v("3230  (120m)")]),v._v(" "),e("td",[v._v("3300 (80m)")])]),v._v(" "),e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("180  (110m)")]),v._v(" "),e("td",[v._v("1620 (130m)")]),v._v(" "),e("td",[v._v("1560  (80m)")]),v._v(" "),e("td",[v._v("1580 (80m)")])])])]),v._v(" "),e("h5",{attrs:{id:"_1-mariadb-select-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-mariadb-select-test"}},[v._v("#")]),v._v(" 1. Mariadb Select Test")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("vUser")]),v._v(" "),e("th",[v._v("rows")]),v._v(" "),e("th",[v._v("Threshold")]),v._v(" "),e("th",[v._v("Replicas")]),v._v(" "),e("th",[v._v("TPS")]),v._v(" "),e("th",[v._v("Err.")]),v._v(" "),e("th",[v._v("Comment")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("2600")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("2000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2600")]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2210")]),v._v(" "),e("td",[v._v("0.1%")]),v._v(" "),e("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("5min")]),v._v(" "),e("td",[v._v("2")]),v._v(" "),e("td",[v._v("3270")]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td",[v._v("pod 증설, "),e("em",[v._v("2210 -> 3270")])])]),v._v(" "),e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("180")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td",[v._v("rows 증가, "),e("em",[v._v("2600 -> 180")])])])])]),v._v(" "),e("h5",{attrs:{id:"_2-redis-get-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis-get-test"}},[v._v("#")]),v._v(" 2. Redis GET Test")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("vUser")]),v._v(" "),e("th",[v._v("rows")]),v._v(" "),e("th",[v._v("Threshold")]),v._v(" "),e("th",[v._v("Replicas")]),v._v(" "),e("th",[v._v("TPS")]),v._v(" "),e("th",[v._v("Err.")]),v._v(" "),e("th",[v._v("Comment")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("3630")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("2000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2860")]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2310")]),v._v(" "),e("td",[v._v("0.9%")]),v._v(" "),e("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("5min")]),v._v(" "),e("td",[v._v("2")]),v._v(" "),e("td",[v._v("3310")]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td",[v._v("pod 증설, "),e("em",[v._v("2310 -> 3320")])])]),v._v(" "),e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("1620")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td",[v._v("rows 증가, "),e("em",[v._v("3630 -> 1620")])])])])]),v._v(" "),e("h5",{attrs:{id:"_3-aof-redis-get-test-fsync-everysec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-aof-redis-get-test-fsync-everysec"}},[v._v("#")]),v._v(" 3. AOF Redis GET Test (fsync: everysec)")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("vUser")]),v._v(" "),e("th",[v._v("rows")]),v._v(" "),e("th",[v._v("Threshold")]),v._v(" "),e("th",[v._v("Replicas")]),v._v(" "),e("th",[v._v("TPS")]),v._v(" "),e("th",[v._v("Err.")]),v._v(" "),e("th",[v._v("Comment")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("3600")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("2000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2440")]),v._v(" "),e("td",[v._v("0.1%")]),v._v(" "),e("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("5min")]),v._v(" "),e("td",[v._v("2")]),v._v(" "),e("td",[v._v("3230")]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td",[v._v("pod 증설, "),e("em",[v._v("2440 -> 3230")])])]),v._v(" "),e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("1560")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td",[v._v("rows 증가, "),e("em",[v._v("3600 -> 1560")])])])])]),v._v(" "),e("h5",{attrs:{id:"_4-aof-redis-get-test-fsync-always"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-aof-redis-get-test-fsync-always"}},[v._v("#")]),v._v(" 4. AOF Redis GET Test (fsync: always)")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("vUser")]),v._v(" "),e("th",[v._v("rows")]),v._v(" "),e("th",[v._v("Threshold")]),v._v(" "),e("th",[v._v("Replicas")]),v._v(" "),e("th",[v._v("TPS")]),v._v(" "),e("th",[v._v("Err.")]),v._v(" "),e("th",[v._v("Comment")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("3650")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("2000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("3090")]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2370")]),v._v(" "),e("td",[v._v("0.1%")]),v._v(" "),e("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("10")]),v._v(" "),e("td",[v._v("5min")]),v._v(" "),e("td",[v._v("2")]),v._v(" "),e("td",[v._v("3300")]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td",[v._v("pod 증설, "),e("em",[v._v("2370 -> 3300")])])]),v._v(" "),e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("1580")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td",[v._v("rows 증가, "),e("em",[v._v("3650 -> 1580")])])])])]),v._v(" "),e("h3",{attrs:{id:"redis-set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-set"}},[v._v("#")]),v._v(" Redis SET")]),v._v(" "),e("ul",[e("li",[v._v("MariaDB departments 테이블의 1 row와 동일한 규격의 Data를 Redis에 SET하는 API를 호출")])]),v._v(" "),e("h4",{attrs:{id:"post-method-call-result"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post-method-call-result"}},[v._v("#")]),v._v(" POST Method Call Result")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("Condition")]),v._v(" "),e("th"),v._v(" "),e("th",[v._v("TPS"),e("br"),e("small",[v._v("(max cpu)")])]),v._v(" "),e("th"),v._v(" "),e("th"),v._v(" "),e("th")])]),v._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[v._v("vUser")])]),v._v(" "),e("td",[e("strong",[v._v("repl.")])]),v._v(" "),e("td",[e("strong",[v._v("mariadb")])]),v._v(" "),e("td",[e("strong",[v._v("redis")])]),v._v(" "),e("td",[e("strong",[v._v("redis AOF"),e("br"),v._v("everysec")])]),v._v(" "),e("td",[e("strong",[v._v("redis AOF"),e("br"),v._v("always")])])]),v._v(" "),e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("1550 (980m)")]),v._v(" "),e("td",[e("strong",[v._v("3170 (150m)")])]),v._v(" "),e("td",[v._v("2410 (150m)")]),v._v(" "),e("td",[v._v("2300 (70m)")])]),v._v(" "),e("tr",[e("td",[v._v("2000")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("1530 (980m)")]),v._v(" "),e("td",[e("strong",[v._v("3270 (160m)")])]),v._v(" "),e("td",[v._v("2310 (130m)")]),v._v(" "),e("td",[v._v("2200 (100m)")])]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("1370 (970m)")]),v._v(" "),e("td",[e("strong",[v._v("2840 (160m)")])]),v._v(" "),e("td",[v._v("2100 (130m)")]),v._v(" "),e("td",[v._v("1900 (90)")])]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("2")]),v._v(" "),e("td",[v._v("1940 (970m)")]),v._v(" "),e("td",[e("strong",[v._v("3350 (220m)")])]),v._v(" "),e("td",[v._v("3260 (270m)")]),v._v(" "),e("td",[v._v("3140 (180m)")])])])]),v._v(" "),e("h5",{attrs:{id:"_1-mariadb-insert-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-mariadb-insert-test"}},[v._v("#")]),v._v(" 1. Mariadb Insert Test")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("vUser")]),v._v(" "),e("th",[v._v("Threshold")]),v._v(" "),e("th",[v._v("Replicas")]),v._v(" "),e("th",[v._v("TPS")]),v._v(" "),e("th",[v._v("Err.")]),v._v(" "),e("th",[v._v("Comment")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("1550")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("2000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("1530")]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("1370")]),v._v(" "),e("td",[v._v("1.0%")]),v._v(" "),e("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),e("tr",[e("td",[v._v("4000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("1350")]),v._v(" "),e("td",[v._v("1.2%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("5min")]),v._v(" "),e("td",[v._v("2")]),v._v(" "),e("td",[e("strong",[v._v("1940")])]),v._v(" "),e("td",[v._v("0.1%")]),v._v(" "),e("td",[v._v("Pod 증설, "),e("em",[v._v("1370 -> 1940")])])])])]),v._v(" "),e("h5",{attrs:{id:"_2-redis-set-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis-set-test"}},[v._v("#")]),v._v(" 2. Redis SET Test")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("vUser")]),v._v(" "),e("th",[v._v("Threshold")]),v._v(" "),e("th",[v._v("Replicas")]),v._v(" "),e("th",[v._v("TPS")]),v._v(" "),e("th",[v._v("Err.")]),v._v(" "),e("th",[v._v("Comment")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("3170")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("2000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("3270")]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2840")]),v._v(" "),e("td",[v._v("0.1%")]),v._v(" "),e("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),e("tr",[e("td",[v._v("4000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2500")]),v._v(" "),e("td",[v._v("1.3%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("2")]),v._v(" "),e("td",[v._v("2300")]),v._v(" "),e("td",[v._v("0.1%")]),v._v(" "),e("td",[v._v("성능 저하 구간에서 replicas=2"),e("br"),v._v("pod 여러 개일 경우, 부하 초기에 분산 지연")])]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("5min")]),v._v(" "),e("td",[v._v("2")]),v._v(" "),e("td",[e("strong",[v._v("3350")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td",[v._v("Pod 증설, "),e("em",[v._v("2840 -> 3350")])])])])]),v._v(" "),e("h5",{attrs:{id:"_3-aof-redis-set-test-fsync-everysec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-aof-redis-set-test-fsync-everysec"}},[v._v("#")]),v._v(" 3. AOF Redis SET Test (fsync: everysec)")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("vUser")]),v._v(" "),e("th",[v._v("Threshold")]),v._v(" "),e("th",[v._v("Replicas")]),v._v(" "),e("th",[v._v("TPS")]),v._v(" "),e("th",[v._v("Err.")]),v._v(" "),e("th",[v._v("Comment")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("2400")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("2000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2310")]),v._v(" "),e("td",[v._v("0.1%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2100")]),v._v(" "),e("td",[v._v("0.1%")]),v._v(" "),e("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),e("tr",[e("td",[v._v("4000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2700")]),v._v(" "),e("td",[v._v("1.3%")]),v._v(" "),e("td",[v._v("Error 발생 시, TPS 측정이 다소 부정확한 것으로 보임")])]),v._v(" "),e("tr",[e("td",[v._v("6000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2700")]),v._v(" "),e("td",[v._v("2.6%")]),v._v(" "),e("td",[v._v("Error 발생 시, TPS 측정이 다소 부정확한 것으로 보임")])]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("5min")]),v._v(" "),e("td",[v._v("2")]),v._v(" "),e("td",[e("strong",[v._v("3260")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td",[v._v("Pod 증설, "),e("em",[v._v("2100 -> 3260")])])])])]),v._v(" "),e("h5",{attrs:{id:"_4-aof-redis-set-test-fsync-always"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-aof-redis-set-test-fsync-always"}},[v._v("#")]),v._v(" 4. AOF Redis SET Test (fsync: always)")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("vUser")]),v._v(" "),e("th",[v._v("Threshold")]),v._v(" "),e("th",[v._v("Replicas")]),v._v(" "),e("th",[v._v("TPS")]),v._v(" "),e("th",[v._v("Err.")]),v._v(" "),e("th",[v._v("Comment")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("2300")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("2000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2200")]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("1900")]),v._v(" "),e("td",[v._v("0.2%")]),v._v(" "),e("td",[v._v("성능 저하 구간으로 판단")])]),v._v(" "),e("tr",[e("td",[v._v("4000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2300")]),v._v(" "),e("td",[v._v("1.4%")]),v._v(" "),e("td",[v._v("Error 발생 시, TPS 측정이 다소 부정확한 것으로 보임")])]),v._v(" "),e("tr",[e("td",[v._v("6000")]),v._v(" "),e("td",[v._v("2min")]),v._v(" "),e("td",[v._v("2")]),v._v(" "),e("td",[v._v("2300")]),v._v(" "),e("td",[v._v("9.9%")]),v._v(" "),e("td",[v._v("Error 발생 시, TPS 측정이 다소 부정확한 것으로 보임")])]),v._v(" "),e("tr",[e("td",[v._v("3000")]),v._v(" "),e("td",[v._v("5min")]),v._v(" "),e("td",[v._v("2")]),v._v(" "),e("td",[e("strong",[v._v("3140")])]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td",[v._v("Pod 증설, "),e("em",[v._v("1900 -> 3140")])])])])]),v._v(" "),e("h3",{attrs:{id:"aof-everysec-vs-always"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof-everysec-vs-always"}},[v._v("#")]),v._v(" AOF everysec vs always")]),v._v(" "),e("ul",[e("li",[v._v("Redis Persistence 설명 참고"),e("br"),v._v(" "),e("a",{attrs:{href:"http://redisgate.kr/redis/configuration/persistence.php",target:"_blank",rel:"noopener noreferrer"}},[v._v("http://redisgate.kr/redis/configuration/persistence.php"),e("OutboundLink")],1)]),v._v(" "),e("li",[v._v("위의 benchmark 및 nGrinder 부하 테스트 결과,"),e("br"),v._v("\nRedis Instance의 Resource가 안정적으로 유지되는 상태에서는, 데이터 저장 시에도 성능에서는 큰 차이를 보이지 않음\n"),e("ul",[e("li",[e("u",[e("em",[v._v("저장 시의 성능 차이를 확인하기 위하여, 극단적인 부하 테스트 수행")])])])])])]),v._v(" "),e("h4",{attrs:{id:"부하-테스트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#부하-테스트"}},[v._v("#")]),v._v(" 부하 테스트")]),v._v(" "),e("ul",[e("li",[v._v("Environment\n"),e("ul",[e("li",[v._v("cpu 100% 사용되도록 Resource 최소화")]),v._v(" "),e("li",[v._v("기존 SET Data 1row의 Size 100 증가")]),v._v(" "),e("li",[v._v("데이터 저장을 위해 많은 메모리를 사용할 수 있도록 증가")]),v._v(" "),e("li",[e("em",[e("strong",[v._v("EBS Volume iops 3000 -> 100")])])])])])]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("Container")]),v._v(" "),e("th",[v._v("appendfsync")]),v._v(" "),e("th",[v._v("CPU")]),v._v(" "),e("th",[v._v("Memory")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("redis-cache-aof")]),v._v(" "),e("td",[v._v("everysec")]),v._v(" "),e("td",[v._v("0.1 / 0.1")]),v._v(" "),e("td",[v._v("4Gi")])]),v._v(" "),e("tr",[e("td",[v._v("redis-cache-always")]),v._v(" "),e("td",[v._v("always")]),v._v(" "),e("td",[v._v("0.1 / 0.1")]),v._v(" "),e("td",[v._v("4Gi")])])])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("Memory Usage")]),v._v(" "),e("ul",[e("li",[v._v("everysec 으로 설정된 redis가 약 두배 가량의 memory를 더 점유함"),e("br"),v._v(" "),e("img",{attrs:{src:t(351),alt:""}})])])]),v._v(" "),e("li",[e("p",[v._v("AOF Redis SET Test")])])]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("vUser")]),v._v(" "),e("th",[v._v("Threshold")]),v._v(" "),e("th",[v._v("Replicas")]),v._v(" "),e("th",[v._v("TPS")]),v._v(" "),e("th",[v._v("Memory(max)")]),v._v(" "),e("th",[v._v("Err.")]),v._v(" "),e("th",[v._v("Comment")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("10min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[e("strong",[v._v("999")])]),v._v(" "),e("td",[v._v("1747Mi")]),v._v(" "),e("td",[v._v("0.0%")]),v._v(" "),e("td")]),v._v(" "),e("tr",[e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("10min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("618")]),v._v(" "),e("td",[v._v("1028Mi")]),v._v(" "),e("td",[v._v("2.0%")]),v._v(" "),e("td",[v._v("Error 다수 발생"),e("br"),v._v("(7,228 / 359,730)")])])])]),v._v(" "),e("ul",[e("li",[v._v("Bench Mark vs 적정 환경 테스트 vs 부하 테스트 결과 비교\n"),e("ul",[e("li",[v._v("Network을 통하지 않은 Redis Benchmark Test 에서는 everysec 의 write 성능이 우수")]),v._v(" "),e("li",[v._v("Spring Boot API 등 Container간 Network을 통한 성능 측정에서는 큰 차이가 없음을 확인")])])])]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("Persitence")]),v._v(" "),e("th",[v._v("appendfsync")]),v._v(" "),e("th",[v._v("TPS (B/M)")]),v._v(" "),e("th",[v._v("TPS (적정)")]),v._v(" "),e("th",[v._v("TPS (부하)")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("Redis AOF")]),v._v(" "),e("td",[v._v("everysec")]),v._v(" "),e("td",[e("strong",[v._v("33579")])]),v._v(" "),e("td",[v._v("2400")]),v._v(" "),e("td",[v._v("999")])]),v._v(" "),e("tr",[e("td",[v._v("Redis AOF")]),v._v(" "),e("td",[v._v("always")]),v._v(" "),e("td",[v._v("9087")]),v._v(" "),e("td",[v._v("2300")]),v._v(" "),e("td",[v._v("618")])])])]),v._v(" "),e("h3",{attrs:{id:"추가-테스트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-테스트"}},[v._v("#")]),v._v(" 추가 테스트")]),v._v(" "),e("ul",[e("li",[v._v("nGrinder 성능 측정 중, Redis Instance Kill")])]),v._v(" "),e("h4",{attrs:{id:"test-result"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-result"}},[v._v("#")]),v._v(" Test Result")]),v._v(" "),e("ul",[e("li",[v._v("TPS 안정분포되는 1:40초에 Redis kill 후, Pod Self Healing 강제")]),v._v(" "),e("li",[v._v('Kill 시점, Spring Boot "java.io.IOException: Connection reset by peer" 발생\n'),e("ul",[e("li",[e("em",[e("strong",[v._v("적정 성능 측정 시에는, 특이사항 없음")])])])])])]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("Container")]),v._v(" "),e("th",[v._v("fsync")]),v._v(" "),e("th",[v._v("vUser")]),v._v(" "),e("th",[v._v("Threshold")]),v._v(" "),e("th",[v._v("Replicas")]),v._v(" "),e("th",[v._v("TPS")]),v._v(" "),e("th",[v._v("Err")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("Redis")]),v._v(" "),e("td",[v._v("off")]),v._v(" "),e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("3min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2700")]),v._v(" "),e("td",[v._v("0.1%")])]),v._v(" "),e("tr",[e("td",[v._v("Redis")]),v._v(" "),e("td",[v._v("everysec")]),v._v(" "),e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("3min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2700")]),v._v(" "),e("td",[v._v("0.1%")])]),v._v(" "),e("tr",[e("td",[v._v("Redis")]),v._v(" "),e("td",[v._v("always")]),v._v(" "),e("td",[v._v("1000")]),v._v(" "),e("td",[v._v("3min")]),v._v(" "),e("td",[v._v("1")]),v._v(" "),e("td",[v._v("2600")]),v._v(" "),e("td",[v._v("0.1%")])])])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("Redis appendonly off, conatiner cpu usage 참고"),e("br"),v._v("\n: 10초 이내에 self healing instance 생성되어 데이터 처리"),e("br"),v._v(" "),e("img",{attrs:{src:t(352),alt:""}})])]),v._v(" "),e("li",[e("p",[v._v("Redis appendonly off, TPS 참고"),e("br"),v._v("\n: 10초 이내에 안정적인 TPS 수준으로 회복"),e("br"),v._v(" "),e("img",{attrs:{src:t(353),alt:""}})])])]),v._v(" "),e("h5",{attrs:{id:"backup-ebs-volume-mount-실패했을-경우-self-healing-지연되는-경우"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backup-ebs-volume-mount-실패했을-경우-self-healing-지연되는-경우"}},[v._v("#")]),v._v(" Backup> EBS Volume Mount 실패했을 경우, Self-Healing 지연되는 경우")]),v._v(" "),e("ul",[e("li",[v._v("현재 EBS gp3 type volume의 경우, Multi Attach가 불가능하여, deploy node가 변경되는 경우 곧바로 Volume Attach가 되지 않는 경우 발생")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v('Events:\n  Type     Reason                  Age   From                     Message\n  ----     ------                  ----  ----                     -------\n  Normal   Scheduled               21s   default-scheduler        Successfully assigned session-dev/redis-cache-always-7d6db7c847-hjh7j to ip-192-168-47-169.ap-northeast-2.compute.internal\n  Warning  FailedAttachVolume      22s   attachdetach-controller  Multi-Attach error for volume "pvc-ddcb90bc-4346-4985-8662-c8ae2b9991ab" Volume is already used by pod(s) redis-cache-always-7d6db7c847-9l54t\n  Normal   SuccessfulAttachVolume  6s    attachdetach-controller  AttachVolume.Attach succeeded for volume "pvc-ddcb90bc-4346-4985-8662-c8ae2b9991ab"\n')])])])])}),[],!1,null,null,null);_.default=d.exports}}]);