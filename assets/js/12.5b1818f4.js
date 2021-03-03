(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{359:function(e,a,t){"use strict";t.r(a);var r=t(39),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"elb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elb"}},[e._v("#")]),e._v(" ELB")]),e._v(" "),t("h2",{attrs:{id:"application-load-balancer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-load-balancer"}},[e._v("#")]),e._v(" Application Load Balancer")]),e._v(" "),t("ul",[t("li",[e._v("AWS opensource blog")])]),e._v(" "),t("blockquote",[t("p",[e._v("https://aws.amazon.com/ko/blogs/opensource/kubernetes-ingress-aws-alb-ingress-controller/")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://d2908q01vomqb2.cloudfront.net/ca3512f4dfa95a03169c5a670a4c91a19b3077b4/2018/11/20/image1-1.png",width:"800px",height:"550px",title:"px(픽셀) 크기 설정",alt:"RubberDuck"}}),t("br")]),e._v(" "),t("h3",{attrs:{id:"ingress-생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ingress-생성"}},[e._v("#")]),e._v(" Ingress 생성")]),e._v(" "),t("h4",{attrs:{id:"위-다이어그램에서-번호가-매겨진-파란색-원의-단계를-따릅니다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#위-다이어그램에서-번호가-매겨진-파란색-원의-단계를-따릅니다"}},[e._v("#")]),e._v(" 위 다이어그램에서 번호가 매겨진 파란색 원의 단계를 따릅니다.")]),e._v(" "),t("ol",[t("li",[e._v("컨트롤러는 API 서버의 Ingress 이벤트를 감시합니다. 요구 사항을 충족하는 Ingress 리소스를 찾으면 AWS 리소스 생성을 시작합니다.")]),e._v(" "),t("li",[e._v("Ingress 리소스에 대한 ALB가 생성됩니다.")]),e._v(" "),t("li",[e._v("Ingress 리소스에 지정된 각 백엔드에 대해 TargetGroup 이 생성됩니다.")]),e._v(" "),t("li",[e._v("수신 리소스 주석으로 지정된 모든 포트에 대해 리스너가 생성됩니다. 포트를 지정하지 않으면 적절한 기본값 (80또는 443)이 사용됩니다.")]),e._v(" "),t("li",[e._v("Ingress 리소스에 지정된 각 경로에 대해 규칙이 생성됩니다. 이렇게 하면 특정 경로에 대한 트래픽이 TargetGroup 생성된 올바른 경로로 라우팅 됩니다.")])]),e._v(" "),t("h2",{attrs:{id:"create-ingress-controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-ingress-controller"}},[e._v("#")]),e._v(" Create Ingress Controller")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("AWS Load Balancer Controller는 EKS Cluster에 대한 AWS Elastic Load Balancer를 관리함\n"),t("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/aws-load-balancer-controller.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/aws-load-balancer-controller.html"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Ingress가 L7에서 Balancing 되는 Application Load Balancer로 생성됨\n"),t("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/alb-ingress.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/alb-ingress.html"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Kubernetes manifest 활용하여 생성 (helm 아님)")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("v2_1_0_full.yaml 참조"),t("br"),e._v(" "),t("a",{attrs:{href:"https://github.com/htdp1/md-repository/blob/main/create-alb/v2_1_0_full.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/htdp1/md-repository/blob/main/create-alb/v2_1_0_full.yaml"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[e._v("ServiceAccount Section 삭제")]),e._v(" "),t("li",[e._v("Deployment 섹션에서 spec 값을 --cluster-name 을 Amazon EKS Cluster name 으로 수정")])])])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);