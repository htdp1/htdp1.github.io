(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{369:function(t,e,a){"use strict";a.r(e);var r=a(40),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"개발-환경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개발-환경"}},[t._v("#")]),t._v(" 개발 환경")]),t._v(" "),a("h2",{attrs:{id:"ide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ide"}},[t._v("#")]),t._v(" IDE")]),t._v(" "),a("h4",{attrs:{id:"_1-vs-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vs-code"}},[t._v("#")]),t._v(" 1. VS Code")]),t._v(" "),a("ul",[a("li",[t._v("Visual Studio Code 설치"),a("br"),t._v(" "),a("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.visualstudio.com/download"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"_2-java-개발-환경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-java-개발-환경"}},[t._v("#")]),t._v(" 2. Java 개발 환경")]),t._v(" "),a("ul",[a("li",[t._v("OpenJDK 11 설치"),a("br"),t._v(" "),a("a",{attrs:{href:"https://jdk.java.net/archive/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jdk.java.net/archive/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("VS Code "),a("strong",[t._v("Java Extension Pack")]),t._v(" 설치"),a("br"),t._v(" "),a("a",{attrs:{href:"https://code.visualstudio.com/docs/java/extensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.visualstudio.com/docs/java/extensions"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("VS Code Java Development Tutorial"),a("br"),t._v(" "),a("a",{attrs:{href:"https://code.visualstudio.com/docs/java/java-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.visualstudio.com/docs/java/java-tutorial"),a("OutboundLink")],1)])])])]),t._v(" "),a("h4",{attrs:{id:"_3-spring-boot-개발-환경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-spring-boot-개발-환경"}},[t._v("#")]),t._v(" 3. Spring Boot 개발 환경")]),t._v(" "),a("ul",[a("li",[t._v("VS Code "),a("strong",[t._v("Spring Boot Extension Pack")]),t._v(" 설치하여, 아래 extension이 일괄 적용\n"),a("ul",[a("li",[t._v("Spring Boot Tools")]),t._v(" "),a("li",[t._v("Spring Initializr")]),t._v(" "),a("li",[t._v("Spring Boot Dashboard"),a("br"),t._v(" "),a("a",{attrs:{href:"https://code.visualstudio.com/docs/java/java-spring-boot",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.visualstudio.com/docs/java/java-spring-boot"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"container-개발-환경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-개발-환경"}},[t._v("#")]),t._v(" Container 개발 환경")]),t._v(" "),a("h4",{attrs:{id:"_1-docker-kubectl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker-kubectl"}},[t._v("#")]),t._v(" 1. Docker, kubectl")]),t._v(" "),a("ul",[a("li",[t._v("Dockerhub 계정 생성 (계정 없을 경우)"),a("br"),t._v(" "),a("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Docker Desktop 설치"),a("br"),t._v(" "),a("a",{attrs:{href:"https://docs.docker.com/desktop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/desktop/"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"_2-kubernetes-object-관리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-kubernetes-object-관리"}},[t._v("#")]),t._v(" 2. Kubernetes Object 관리")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("kustomize 설치"),a("br"),t._v(" "),a("a",{attrs:{href:"https://kubectl.docs.kubernetes.io/installation/kustomize/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kubectl.docs.kubernetes.io/installation/kustomize/"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("kustomize를 이용한 k8s object 선언형 관리"),a("br"),t._v(" "),a("a",{attrs:{href:"https://kubernetes.io/ko/docs/tasks/manage-kubernetes-objects/kustomization/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kubernetes.io/ko/docs/tasks/manage-kubernetes-objects/kustomization/"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("kustomization 파일을 포함하는 디렉터리 내의 리소스 확인")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("kubectl kustomize <kustomization_directory>\n")])])]),a("ul",[a("li",[t._v("리소스를 적용하려면 kubectl apply를 --kustomize 또는 -k 플래그와 함께 실행")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("kubectl apply -k <kustomization_directory>\n")])])]),a("h4",{attrs:{id:"_3-aws-및-eks-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-aws-및-eks-config"}},[t._v("#")]),t._v(" 3. AWS 및 EKS Config")]),t._v(" "),a("ul",[a("li",[t._v("AWS 구성 가이드 참고"),a("br"),t._v(" "),a("a",{attrs:{href:"https://htdp1.github.io/aws/#aws-configure",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://htdp1.github.io/aws/#aws-configure"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);