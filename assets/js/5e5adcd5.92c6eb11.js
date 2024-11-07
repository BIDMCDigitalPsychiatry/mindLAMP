"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[8425],{60011:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"deploy/deploying","title":"Deploying the LAMP Platform","description":"Although some steps are able to completed using other methods, please follow these instructions as closely as possible.","source":"@site/docs/07-deploy/07-deploying.md","sourceDirName":"07-deploy","slug":"/deploy/deploying","permalink":"/deploy/deploying","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/07-deploying.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1731010294000,"sidebarPosition":7,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Deploying via CloudFormation","permalink":"/deploy/cloudformation"},"next":{"title":"Testing the LAMP Platform","permalink":"/deploy/testing"}}');var s=r(74848),o=r(28453);const i={},a="Deploying the LAMP Platform",l={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Cloud Mesh Router",id:"cloud-mesh-router",level:3},{value:"LAMP Platform",id:"lamp-platform",level:3},{value:"Maintaining and Updating the LAMP Platform",id:"maintaining-and-updating-the-lamp-platform",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"deploying-the-lamp-platform",children:"Deploying the LAMP Platform"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Although some steps are able to completed using other methods, please follow these instructions as closely as possible.\nDeviation from these deployment recommendations means BIDMC staff cannot provide technical support."})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"You must have a configured Docker Swarm cluster to continue."}),"\nPlease follow all steps below in the exact order specified, though you may skip optional steps."]}),"\n",(0,s.jsx)(n.p,{children:"The files provided below support these orchestration tools:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Docker Compose"})," (single-node)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Docker Swarm"})," (single-node or multi-node)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WARNING:"})," If creating a multi-node deployment, ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/swarm/how-swarm-mode-works/nodes/",children:"follow the proper procedures for manager/worker node allocation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"An N manager cluster tolerates the loss of at most (N-1)/2 managers"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If creating a 2-node cluster and both are designated as managers, ",(0,s.jsx)(n.strong,{children:"CATASTROPHIC FAILURE AND SEVERE DATA LOSS may occur if EITHER node loses connectivity for more than 5 minutes."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Kubernetes"})," (multi-node)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For more information on using Kubernetes, ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/get-started/orchestration/",children:"follow this guide"})," or ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/docker-for-mac/kubernetes/#override-the-default-orchestrator",children:"this guide"})," instead."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"This step is required."})}),"\n",(0,s.jsxs)(n.p,{children:["Configure firewall rules as needed to avoid directly opening ports on your nodes, and instead appropriately route traffic through ports ",(0,s.jsx)(n.code,{children:"80"})," (HTTP) and ",(0,s.jsx)(n.code,{children:"443"})," (HTTPS)."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a new network called ",(0,s.jsx)(n.code,{children:"public"})," to connect all externally accessible services."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker network create --driver overlay --attachable public\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Using your DNS provider of choice, provision a domain name (here we use ",(0,s.jsx)(n.code,{children:"[example.com](http://example.com)"})," to represent your domain name and ",(0,s.jsx)(n.code,{children:"1.1.1.1"})," to represent your node's IP address)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"DNS Records"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 RECORD NAME   \u2502 TYPE \u2502 VALUE   \u2502 TTL  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 example.com   \u2502 A    \u2502 1.1.1.1 \u2502 3600 \u2502 \n\u2502 *.example.com \u2502 A    \u2502 1.1.1.1 \u2502 3600 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you have multiple nodes in your cluster, be sure to configure alternate IP address values for all DNS records."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"DNS Records"}),"\n",(0,s.jsxs)(n.p,{children:["For example, on ",(0,s.jsx)(n.strong,{children:"AWS Route53"}),", ",(0,s.jsx)(n.code,{children:"ROUND-ROBIN"})," refers to ",(0,s.jsx)(n.code,{children:"Multivalue Answer"})," response types ",(0,s.jsx)(n.strong,{children:"without"})," health-check enabled."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 RECORD NAME   \u2502 TYPE \u2502 VALUE   \u2502 TTL  \u2502 MODE        \u2502 ALIAS   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 example.com   \u2502 A    \u2502 1.1.1.1 \u2502 3600 \u2502 ROUND-ROBIN \u2502 node-01 \u2502\n\u2502 example.com   \u2502 A    \u2502 2.2.2.2 \u2502 3600 \u2502 ROUND-ROBIN \u2502 node-02 \u2502\n\u2502 *.example.com \u2502 A    \u2502 1.1.1.1 \u2502 3600 \u2502 ROUND-ROBIN \u2502 node-01 \u2502\n\u2502 *.example.com \u2502 A    \u2502 2.2.2.2 \u2502 3600 \u2502 ROUND-ROBIN \u2502 node-02 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cloud-mesh-router",children:"Cloud Mesh Router"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"This step is optional and can be skipped."}),"\nWe recommend deploying ",(0,s.jsx)(n.code,{children:"Traefik"})," as a ",(0,s.jsx)(n.strong,{children:"Cloud Mesh Router"})," to make it easier to connect services and components, generate SSL certificates for encrypting traffic, diagnose traffic issues, and capture access logs for auditing."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Docker Stack:"})," ",(0,s.jsx)(n.code,{children:"**traefik.yml**"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"You MUST replace the following configuration variables in your copy of this file:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"administrator@example.com"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'version: "3.7"\nservices:\n  traefik:\n    image: traefik:latest\n    command:\n      - "--log.level=INFO"\n      - "--accesslog=true"\n      - "--api=true"\n      - "--providers.docker=true"\n      - "--providers.docker.swarmMode=true"\n      - "--providers.docker.exposedByDefault=false"\n      - "--entrypoints.web.address=:80"\n      - "--entrypoints.websecure.address=:443"\n      - "--entrypoints.websecure.http.tls.certResolver=default"\n      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"\n      - "--entrypoints.web.http.redirections.entryPoint.scheme=https"\n      - "--entrypoints.web.http.redirections.entryPoint.permanent=true"\n      - "--certificatesResolvers.default.acme.email=administrator@example.com"\n      - "--certificatesResolvers.default.acme.storage=/data/acme.json"\n      - "--certificatesResolvers.default.acme.tlsChallenge=true"\n    volumes:\n      - "/var/run/docker.sock:/var/run/docker.sock:ro"\n      - "traefik-ssl:/data/"\n    ports:\n      - target: 80\n        protocol: tcp\n        published: 80\n        mode: ingress\n      - target: 443\n        protocol: tcp\n        published: 443\n        mode: ingress\n    networks:\n      - public\n    deploy:\n      mode: replicated\n      placement:\n        constraints:\n          - node.role == manager\nnetworks:\n  public:\n    external: true\nvolumes:\n  traefik-ssl:\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker stack deploy --compose-file traefik.yml router\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["We recommend deploying ",(0,s.jsx)(n.code,{children:"[Portainer](https://www.portainer.io/)"})]})," as a ",(0,s.jsx)(n.strong,{children:"Swarm Management Console"})," to make it easier to troubleshoot failed deployments, rapidly test and integrate new components, and effectively monitor container logs and health. Read this documentation to learn more about ",(0,s.jsx)(n.a,{href:"https://portainer.readthedocs.io/en/stable/",children:"Portainer and how to configure and use it"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"lamp-platform",children:"LAMP Platform"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"This step is required."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Docker Stack:"})," ",(0,s.jsx)(n.code,{children:"**lamp.yml**"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"You MUST replace the following configuration variables in your copy of this file:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ROOT_ENCRYPTION_KEY_HERE"}),": A random 32-bit hexadecimal string. See below"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DB_PASSSWORD_HERE"}),": An random 8-bit hexadecimal string. See below"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"YOUR_PUSH_KEY_HERE"})," \u2192 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"mailto:team@digitalpsych.org",children:"Please contact us to enable push notifications."})})," (optional)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api.example.com"})," Your LAMP Platform API Server domain shared with others to use."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The first two passwords must be two cryptographically secure hexadecimal strings. Below are commands you can run to generate these two strings."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openssl rand -hex 8 # DB_PASSWORD_HERE\nopenssl rand -hex 32 # ROOT_ENCRYPTION_KEY_HERE\n"})}),"\n",(0,s.jsx)(n.p,{children:"After generating these strings and obtaining your LAMP Platform API server domain, substitute them into the following YAML file and deploy the file."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"version: '3.7'\nservices:\n  server:\n    image: ghcr.io/bidmcdigitalpsychiatry/lamp-server:2023\n    healthcheck:\n      test: wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1\n    environment:\n      HTTPS: 'off'\n      ROOT_KEY: 'ROOT_ENCRYPTION_KEY_HERE'\n      DB: 'mongodb://admin:DB_PASSSWORD_HERE@database:27017/'\n      PUSH_API_GATEWAY: 'https://app-gateway.lamp.digital/'\n      PUSH_API_KEY: 'YOUR_PUSH_KEY_HERE'\n      DASHBOARD_URL: 'dashboard.lamp.digital'\n      REDIS_HOST: 'redis://cache:6379/0'\n      NATS_SERVER: 'message_queue:4222'\n    networks:\n      - default\n      - public\n    logging:\n      options:\n        max-size: \"10m\"\n        max-file: \"3\"\n    deploy:\n      mode: replicated\n      update_config:\n        order: start-first\n        failure_action: rollback\n      labels:\n        traefik.enable: 'true'\n        traefik.docker.network: 'public'\n        traefik.http.routers.lamp_server.entryPoints: 'websecure'\n        traefik.http.routers.lamp_server.rule: 'Host(`api.example.com`)'\n        traefik.http.routers.lamp_server.tls.certresolver: 'default'\n        traefik.http.services.lamp_server.loadbalancer.server.port: 3000\n      placement:\n        constraints:\n          - node.role == manager\n  database:\n    image: mongo:6.0.4\n    environment:\n      MONGO_INITDB_ROOT_USERNAME: 'admin'\n      MONGO_INITDB_ROOT_PASSWORD: 'DB_PASSWORD_HERE'\n    volumes:\n      - mongo_data:/data/db\n    networks:\n      - public\n    deploy:\n      mode: replicated\n      update_config:\n        order: stop-first\n        failure_action: rollback\n      placement:\n        constraints:\n          - node.role == manager\n  cache:\n    image: redis:6.0.8-alpine\n    healthcheck:\n      test: redis-cli ping\n    deploy:\n      mode: replicated\n      update_config:\n        order: stop-first\n        failure_action: rollback\n      placement:\n        constraints:\n          - node.role == manager\n  message_queue:\n    image: nats:2.1.9-alpine3.12\n    healthcheck:\n      test: wget --no-verbose --tries=1 --spider http://localhost:8222/varz || exit 1\n    deploy:\n      mode: replicated\n      update_config:\n        order: start-first\n        failure_action: rollback\n      placement:\n        constraints:\n          - node.role == manager\nvolumes:\n    mongo_data:\nnetworks:\n  public:\n    external: true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note: If you are deploying more than one stack, please be sure that all traefik variables (for example, ",(0,s.jsx)(n.code,{children:"traefik.http.routers.lamp_dashboard.rule"}),') under "labels" are unique. Otherwise, this will cause issues with both the deployment of this container and the other containers that contain the duplicate variables.']}),"\n",(0,s.jsxs)(n.p,{children:["If you've deployed the ",(0,s.jsx)(n.strong,{children:"Swarm Management Console"}),", log into your swarm cluster and navigate to the ",(0,s.jsx)(n.code,{children:"Stack"}),' tab on the left sidebar. Paste the contents of the stack file into the editor pane and tap "Deploy", instead of running the command below.']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker stack deploy --compose-file lamp.yml lamp\n"})}),"\n",(0,s.jsx)(n.h2,{id:"maintaining-and-updating-the-lamp-platform",children:"Maintaining and Updating the LAMP Platform"}),"\n",(0,s.jsxs)(n.p,{children:["If you are using this Docker Stack provided, you will only need to run a ",(0,s.jsx)(n.code,{children:"docker service update"})," command on the API Server to pull the latest image. Because Docker image versioning is calendar-based, at the moment you will manually need to update from ",(0,s.jsx)(n.code,{children:"2022"})," to ",(0,s.jsx)(n.code,{children:"2023"}),", and so on."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are deploying multiple LAMP stacks, ",(0,s.jsxs)(n.strong,{children:["please ensure the ",(0,s.jsx)(n.code,{children:"traefik"})," router rules have been renamed!"]})," (i.e. Ensure ",(0,s.jsx)(n.code,{children:"traefik.http.routers.lamp_dashboard.rule"})," and ",(0,s.jsx)(n.code,{children:"traefik.http.routers.lamp_dashboard_2.rule"})," are distinct.) If two or more instances of the same rule exist, the router will overwrite the first instance."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);