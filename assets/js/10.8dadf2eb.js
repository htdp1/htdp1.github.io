(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{352:function(e,a,t){e.exports=t.p+"assets/img/eks-vpc-stack.ab3a72d9.png"},371:function(e,a,t){"use strict";t.r(a);var r=t(40),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"amazon-eks-cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#amazon-eks-cluster"}},[e._v("#")]),e._v(" Amazon EKS Cluster")]),e._v(" "),r("h2",{attrs:{id:"aws-resource-구성도"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aws-resource-구성도"}},[e._v("#")]),e._v(" AWS Resource 구성도")]),e._v(" "),r("p",[r("img",{attrs:{src:t(352),alt:""}})]),e._v(" "),r("h2",{attrs:{id:"create-eks-cluster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-eks-cluster"}},[e._v("#")]),e._v(" Create EKS Cluster")]),e._v(" "),r("h3",{attrs:{id:"_1-create-vpc-stack-using-cloud-formation-stack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-vpc-stack-using-cloud-formation-stack"}},[e._v("#")]),e._v(" 1. Create VPC stack using Cloud Formation stack")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("aws cloudformation create-stack \\\n  --stack-name <stack name> \\\n  --template-url https://s3.us-west-2.amazonaws.com/amazon-eks/cloudformation/2020-10-29/amazon-eks-fully-private-vpc.yaml \\\n  --profile <user>\n")])])]),r("h3",{attrs:{id:"_2-create-iam-role"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-iam-role"}},[e._v("#")]),e._v(" 2. Create IAM Role")]),e._v(" "),r("p",[e._v("cluster-role-trust-policy.json 파일 참조"),r("br"),e._v(" "),r("a",{attrs:{href:"https://github.com/htdp1/md-repository/blob/main/create-eks/cluster-role-trust-policy.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/htdp1/md-repository/blob/main/create-eks/cluster-role-trust-policy.json"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('aws iam create-role \\\n  --role-name myAmazonEKSClusterRole \\\n  --assume-role-policy-document file://"cluster-role-trust-policy.json" \\\n  --profile <username>\n')])])]),r("ul",[r("li",[e._v("result")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n    "Role": {\n        "Path": "/",\n        "RoleName": "myAmazonEKSClusterRole",\n        "RoleId": "AROASPI4ISUMP7KRVJACR",\n        "Arn": "arn:aws:iam::170247361816:role/myAmazonEKSClusterRole",\n        "CreateDate": "2021-02-18T00:54:34+00:00",\n        "AssumeRolePolicyDocument": {\n            "Version": "2012-10-17",\n            "Statement": [\n                {\n                    "Effect": "Allow",\n                    "Principal": {\n                        "Service": "eks.amazonaws.com"\n                    },\n                    "Action": "sts:AssumeRole"\n                }\n            ]\n        }\n    }\n}\n')])])]),r("h3",{attrs:{id:"_3-attach-role"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-attach-role"}},[e._v("#")]),e._v(" 3. Attach role")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("aws iam attach-role-policy \\\n  --policy-arn arn:aws:iam::aws:policy/AmazonEKSClusterPolicy \\\n  --role-name myAmazonEKSClusterRole \\\n  --profile <username>\n")])])]),r("h3",{attrs:{id:"_4-create-eks-cluster-on-console"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-create-eks-cluster-on-console"}},[e._v("#")]),e._v(" 4. Create EKS cluster on Console")]),e._v(" "),r("p",[e._v("Console 에서 수동으로 생성"),r("br"),e._v(" "),r("a",{attrs:{href:"https://console.aws.amazon.com/eks/home#/clusters",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://console.aws.amazon.com/eks/home#/clusters"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"_5-create-iam-openid-connect-oidc-provider-on-console"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-create-iam-openid-connect-oidc-provider-on-console"}},[e._v("#")]),e._v(" 5. Create IAM OpenID Connect(OIDC) provider on Console")]),e._v(" "),r("p",[e._v("In the navigation panel, choose Identity Providers"),r("br"),e._v(" "),r("a",{attrs:{href:"https://console.aws.amazon.com/iam/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://console.aws.amazon.com/iam/"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"_6-create-cni-plugin-iam-role"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-create-cni-plugin-iam-role"}},[e._v("#")]),e._v(" 6. Create CNI plugin IAM role")]),e._v(" "),r("p",[e._v("cni-role-trust-policy.json 참조하여, OpenID 설정 및 생성"),r("br"),e._v(" "),r("a",{attrs:{href:"https://github.com/htdp1/md-repository/blob/main/create-eks/cni-role-trust-policy.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/htdp1/md-repository/blob/main/create-eks/cni-role-trust-policy.json"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('aws iam create-role \\\n  --role-name myAmazonEKSCNIRole \\\n  --assume-role-policy-document file://"cni-role-trust-policy.json" \\\n  --profile <username>\n')])])]),r("ul",[r("li",[e._v("result")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n  "Role": {\n      "Path": "/",\n      "RoleName": "myAmazonEKSCNIRole",\n      "RoleId": "AROASPI4ISUMAM2INZCWX",\n      "Arn": "arn:aws:iam::170247361816:role/myAmazonEKSCNIRole",\n      "CreateDate": "2021-02-16T08:06:50+00:00",\n      "AssumeRolePolicyDocument": {\n          "Version": "2012-10-17",\n          "Statement": [\n              {\n                  "Effect": "Allow",\n                  "Principal": {\n                      "Federated": "arn:aws:iam::170247361816:oidc-provider/oidc.eks.ap-northeast-2.amazonaws.com/id/D042A41F174B68930A9229EE478F9CDF"\n                  },\n                  "Action": "sts:AssumeRoleWithWebIdentity",\n                  "Condition": {\n                      "StringEquals": {\n                          "oidc.eks.ap-northeast-2.amazonaws.com/id/D042A41F174B68930A9229EE478F9CDF:sub": "system:serviceaccount:kube-system:aws-node"\n                      }\n                  }\n              }\n          ]\n      }\n  }\n}\n')])])]),r("h3",{attrs:{id:"_7-create-cni-policy-and-attach-cni-role"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-create-cni-policy-and-attach-cni-role"}},[e._v("#")]),e._v(" 7. Create CNI policy and attach CNI role")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("aws iam attach-role-policy \\\n  --policy-arn arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy \\\n  --role-name myAmazonEKSCNIRole \\\n  --profile <username>\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("aws eks update-addon \\\n  --cluster-name <cluster name> \\\n  --addon-name vpc-cni \\\n  --service-account-role-arn arn:aws:iam::170247361816:role/myAmazonEKSCNIRole \\\n  --profile <username>\n")])])]),r("h3",{attrs:{id:"_8-create-node-iam-role"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-create-node-iam-role"}},[e._v("#")]),e._v(" 8. Create Node IAM role")]),e._v(" "),r("p",[e._v("node-role-trust-policy.json 참조하여 생성"),r("br"),e._v(" "),r("a",{attrs:{href:"https://github.com/htdp1/md-repository/blob/main/create-eks/node-role-trust-policy.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/htdp1/md-repository/blob/main/create-eks/node-role-trust-policy.json"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('aws iam create-role \\\n  --role-name myAmazonEKSNodeRole \\\n  --assume-role-policy-document file://"node-role-trust-policy.json" \\\n  --profile <username>\n')])])]),r("ul",[r("li",[e._v("result")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n    "Role": {\n        "Path": "/",\n        "RoleName": "myAmazonEKSNodeRole",\n        "RoleId": "AROASPI4ISUMC42VNFW3V",\n        "Arn": "arn:aws:iam::170247361816:role/myAmazonEKSNodeRole",\n        "CreateDate": "2021-02-16T08:09:46+00:00",\n        "AssumeRolePolicyDocument": {\n            "Version": "2012-10-17",\n            "Statement": [\n                {\n                    "Effect": "Allow",\n                    "Principal": {\n                        "Service": "ec2.amazonaws.com"\n                    },\n                    "Action": "sts:AssumeRole"\n                }\n            ]\n        }\n    }\n}\n')])])]),r("h3",{attrs:{id:"_9-attach-node-role-to-iam-policy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-attach-node-role-to-iam-policy"}},[e._v("#")]),e._v(" 9. Attach Node role to IAM policy")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("aws iam attach-role-policy \\\n  --policy-arn arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy \\\n  --role-name myAmazonEKSNodeRole \\\n  --profile <username>\naws iam attach-role-policy \\\n  --policy-arn arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly \\\n  --role-name myAmazonEKSNodeRole \\\n  --profile <username>\n")])])]),r("h3",{attrs:{id:"_10-create-nodegroup-on-console"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10-create-nodegroup-on-console"}},[e._v("#")]),e._v(" 10. Create nodegroup on console")]),e._v(" "),r("p",[e._v("In the Navigation Panel, Configuration > Compute"),r("br"),e._v(" "),r("a",{attrs:{href:"https://ap-northeast-2.console.aws.amazon.com/eks/home?region=ap-northeast-2#/clusters/htdp1-cluster",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ap-northeast-2.console.aws.amazon.com/eks/home?region=ap-northeast-2#/clusters/htdp1-cluster"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"metric-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#metric-server"}},[e._v("#")]),e._v(" Metric Server")]),e._v(" "),r("p",[e._v("Amazon EKS Cluster에는 기본적으로 Metric Server가 배포되어 있지 않아서 추가 배포가 필요함"),r("br"),e._v(" "),r("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/metrics-server.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/metrics-server.html"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"metric-server-deploy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#metric-server-deploy"}},[e._v("#")]),e._v(" Metric Server Deploy")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml\n\n$ kubectl get deploy -n kube-system\nNAME                           READY   UP-TO-DATE   AVAILABLE   AGE\naws-load-balancer-controller   1/1     1            1           10d\ncoredns                        2/2     2            2           10d\nebs-csi-controller             2/2     2            2           2d17h\nmetrics-server                 1/1     1            0           17s\n")])])]),r("h2",{attrs:{id:"kubernetes-dashboard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-dashboard"}},[e._v("#")]),e._v(" Kubernetes Dashboard")]),e._v(" "),r("h3",{attrs:{id:"kubernetes-dashboard-deploy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-dashboard-deploy"}},[e._v("#")]),e._v(" Kubernetes Dashboard Deploy")]),e._v(" "),r("ul",[r("li",[e._v("Deploy Manual"),r("br"),e._v(" "),r("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/dashboard-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/dashboard-tutorial.html"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("github repository"),r("br"),e._v(" "),r("a",{attrs:{href:"https://github.com/kubernetes/dashboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/kubernetes/dashboard"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"접속-방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#접속-방법"}},[e._v("#")]),e._v(" 접속 방법")]),e._v(" "),r("h4",{attrs:{id:"_1-eks-admin-service-account에-대한-인증-token-조회"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-eks-admin-service-account에-대한-인증-token-조회"}},[e._v("#")]),e._v(" 1. eks-admin service account에 대한 인증 token 조회")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep eks-admin | awk '{print $1}')\n")])])]),r("ul",[r("li",[e._v("result")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Name:         eks-admin-token-tbcpj\nNamespace:    kube-system\nLabels:       <none>\nAnnotations:  kubernetes.io/service-account.name: eks-admin\n              kubernetes.io/service-account.uid: 9d98ae6a-9697-42a3-a1af-2a7eda64e68a\n\nType:  kubernetes.io/service-account-token\n\nData\n====\nca.crt:     1025 bytes\nnamespace:  11 bytes\ntoken: <authentication_token>\n")])])]),r("h4",{attrs:{id:"_2-start-proxy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-start-proxy"}},[e._v("#")]),e._v(" 2. Start Proxy")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("kubectl proxy\n")])])]),r("h4",{attrs:{id:"_3-access-the-dashboard-endpoint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-access-the-dashboard-endpoint"}},[e._v("#")]),e._v(" 3. Access the dashboard endpoint")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#!/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#!/login"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"_4-token-입력-및-login"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-token-입력-및-login"}},[e._v("#")]),e._v(" 4. Token 입력 및 Login")]),e._v(" "),r("p",[e._v("<authentication_token> 을 복사하여, token에 입력하여 접속")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("small",[e._v("NOTE : "),r("em",[e._v("Dashboard 에 지표가 표시되기까지 몇 분이 걸릴 수 있습니다.")])])])])]),e._v(" "),r("tbody")]),e._v(" "),r("h2",{attrs:{id:"prometheus-grafana"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-grafana"}},[e._v("#")]),e._v(" Prometheus + Grafana")]),e._v(" "),r("h3",{attrs:{id:"prometheus-deploy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-deploy"}},[e._v("#")]),e._v(" Prometheus Deploy")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Helm으로 Prometheus를 EKS Cluster에 배포"),r("br"),e._v(" "),r("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/prometheus.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/prometheus.html"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Helm으로 Grafana를 EKS Cluster에 배포"),r("br"),e._v(" "),r("a",{attrs:{href:"https://awskrug.github.io/eks-workshop/monitoring/deploy-grafana/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://awskrug.github.io/eks-workshop/monitoring/deploy-grafana/"),r("OutboundLink")],1)])])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ kubectl get po -n prometheus\n\nNAME                                             READY   STATUS    RESTARTS   AGE\nprometheus-alertmanager-6b8d9d55c4-76295         2/2     Running   0          7h55m\nprometheus-kube-state-metrics-6bfcd6f648-hlzn5   1/1     Running   0          7h55m\nprometheus-node-exporter-fj9mh                   1/1     Running   0          7h55m\nprometheus-node-exporter-nmjcv                   1/1     Running   0          7h55m\nprometheus-node-exporter-w9gjz                   1/1     Running   0          7h55m\nprometheus-node-exporter-zg6sq                   1/1     Running   0          73m\nprometheus-pushgateway-dcc654486-czmm7           1/1     Running   0          7h55m\nprometheus-server-6f5f6f4859-pc7cw               2/2     Running   0          7h55m\n\n\n$ kubectl get po -n grafana\n\nNAME                      READY   STATUS    RESTARTS   AGE\ngrafana-b8b886687-9zvh8   1/1     Running   0          7h29m\n")])])]),r("ul",[r("li",[e._v("Grafana Dashboard 구성 json 참조\n"),r("ul",[r("li",[e._v("EKS Node Monitoring"),r("br"),e._v(" "),r("a",{attrs:{href:"https://github.com/htdp1/session-k8s/blob/main/dev/monitoring/grafana/Grafana_EKS_Node_DashBoard.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/htdp1/session-k8s/blob/main/dev/monitoring/grafana/Grafana_EKS_Node_DashBoard.json"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("EKS Pod Monitoring"),r("br"),e._v(" "),r("a",{attrs:{href:"https://github.com/htdp1/session-k8s/blob/main/dev/monitoring/grafana/EKS_Pod_DashBoard.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/htdp1/session-k8s/blob/main/dev/monitoring/grafana/EKS_Pod_DashBoard.json"),r("OutboundLink")],1)])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);