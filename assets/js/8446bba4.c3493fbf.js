"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[2482],{4320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"deploy/aws","title":"Preparing Resources on AWS","description":"Although AWS is not strictly required, it is highly recommended. If you choose not to use AWS resources, members from the mindLAMP team will not be able to provide support or answer questions.","source":"@site/docs/07-deploy/05-aws.md","sourceDirName":"07-deploy","slug":"/deploy/aws","permalink":"/deploy/aws","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/05-aws.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1730901961000,"sidebarPosition":5,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Provisioning the LAMP Platform","permalink":"/deploy/provisioning"},"next":{"title":"Deploying via CloudFormation","permalink":"/deploy/cloudformation"}}');var o=t(74848),a=t(28453);const r={},i="Preparing Resources on AWS",l={},c=[{value:"For EC2 Instances Only:",id:"for-ec2-instances-only",level:3},{value:"EC2 Commands",id:"ec2-commands",level:3},{value:"AWS SSM Instructions",id:"aws-ssm-instructions",level:3},{value:"Using AWS DocumentDB instead of MongoDB (Coming Soon)",id:"using-aws-documentdb-instead-of-mongodb-coming-soon",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"preparing-resources-on-aws",children:"Preparing Resources on AWS"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Although AWS is not strictly required, it is highly recommended. If you choose not to use AWS resources, members from the mindLAMP team will not be able to provide support or answer questions."})}),"\n",(0,o.jsx)(n.p,{children:"The following instructions will result in a Docker Swarm setup prepared to deploy LAMP. You will need to continue following the instructions after this phase to successfully configure LAMP."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(72453).A+"",width:"1920",height:"1080"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Digital Psychiatry's AWS Network Diagram for the LAMP Platform"})}),"\n",(0,o.jsx)(n.h3,{id:"for-ec2-instances-only",children:"For EC2 Instances Only:"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.strong,{children:"HARD"})," requirement for the successful operation of the LAMP Platform is the use of a high performance SSD volume. For more information on these hard limitations and requirements, ",(0,o.jsx)(n.a,{href:"https://docs.mongodb.com/manual/administration/production-notes/",children:"see the MongoDB documentation here."})]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Required maximum (saturable) disk bandwidth: ",(0,o.jsx)(n.code,{children:"4750 Mbps"})]}),"\n",(0,o.jsxs)(n.li,{children:["Required maximum disk throughput: ",(0,o.jsx)(n.code,{children:"593.75 MB/s"})]}),"\n",(0,o.jsxs)(n.li,{children:["Required maximum disk I/O operations: ",(0,o.jsx)(n.code,{children:"20000 IOPS"})]}),"\n",(0,o.jsxs)(n.li,{children:["Required minimum disk throughput: ",(0,o.jsx)(n.code,{children:"125 MB/s"})]}),"\n",(0,o.jsxs)(n.li,{children:["Required minimum disk I/O operations: ",(0,o.jsx)(n.code,{children:"3000 IOPS"})]}),"\n",(0,o.jsxs)(n.li,{children:["Required minimum disk space: ",(0,o.jsx)(n.code,{children:"64 GB"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If using AWS, provisioning a DocumentDB cluster is the simplest way to achieve these baseline requirements for efficient and accurate data collection with no database outages or upload rejections."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["You must replace the value of ",(0,o.jsx)(n.code,{children:"MY_DNS_NAME"})," in the commands below."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:' 1. Create an EC2 instance.\n\t\t\t\t-> AMI: AWS Linux 2\n\t\t\t\t-> Instance Type: [MINIMUM] t2.medium\n\t\t\t\t-> Create a new IAM role with the `AmazonSSMManagedInstanceCore` policy.\n\t\t\t\t-> Enable termination protection.\n\t\t\t\t-> Create a [RECOMMENDED] 1TB EBS volume WITH encryption enabled.\n\t\t\t\t-> Configure security group:\n\t\t\t\t\t\t-> HTTP: TCP 80 from anywhere\n\t\t\t\t\t\t-> HTTPS: TCP 443 from anywhere\n\t\t\t\t\t\t-> Docker Daemon: TCP 2375 from this Security Group\n\t\t\t\t\t\t-> Docker Machine: TCP 2376 from this Security Group\n\t\t\t\t\t\t-> Docker Swarm: TCP 2377 from this Security Group\n\t\t\t\t\t\t-> Docker Swarm: TCP 7946 from this Security Group\n\t\t\t\t\t\t-> Docker Swarm: UDP 7946 from this Security Group\n\t\t\t\t\t\t-> Docker Overlay: UDP 4789 from this Security Group\n\t\t\t\t-> Create a new key pair and keep it private.\n\t\t\t\t-> Allocate and assign an elastic IP to the instance.\n 2. Run the following commands in the instance.\n\t\t\t\tsudo yum -y update && sudo yum -y install docker -y\n\t\t\t\tsudo usermod -a -G docker ec2-user\n\t\t\t\tsudo hostnamectl set-hostname <MY_DNS_NAME>\n\t\t\t\tsudo printf "[Service]\\nExecStart=\\nExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H fd:// --containerd=/run/containerd/containerd.sock\\n" | sudo tee /etc/systemd/system/docker.service.d/override.conf\n\t\t\t\tsudo systemctl daemon-reload && sudo service docker restart\n\t\t\t\tsudo docker swarm init\n 3. Create your DNS binding in Route53.\n'})}),"\n",(0,o.jsx)(n.h3,{id:"ec2-commands",children:"EC2 Commands"}),"\n",(0,o.jsx)(n.p,{children:"The following is a set of bash commands to be used from within AWS Systems Manager once a new EC2 instance and EBS volume are created with the AWS SSM IAM role."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"DO NOT USE THIS AS A SCRIPT!\nTHOROUGHLY READ IT AND RUN EACH COMMAND INDIVIDUALLY!\nSUBSTITUTE ALL VARIABLES BEFORE CONTINUING!"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'# Assumes nvme1n1 is the name of the EBS volume. \n# Use lsblk to confirm this before running the script.\n\n# Attach EBS volume and configure auto-reattach on restart.\nmkfs -t xfs /dev/nvme1n1\nmkdir /data && mount /dev/nvme1n1 /data\nprintf "\\nUUID=$(blkid -s UUID -o value /dev/nvme1n1)     /data       xfs    defaults,nofail   0   2" >> /etc/fstab\numount /data && mount -a\n\n# Install Docker and move Docker root to EBS volume.\nyum install docker\nmkdir -p /data/var/lib/docker && ln -s /data/var/lib/docker /var/lib/docker\n\n# Set hostname before starting Docker and join the Swarm.\nhostnamectl set-hostname node-01.example.com\nservice docker start\ndocker swarm join --token SWARM_TOKEN IP_ADDR:2377\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"In case your EBS volume runs out of storage space, follow the instructions below:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# expand the EBS volume using the AWS management console first\nlsblk\ngrowpart /dev/nvme1n1 1\nxfs_growfs -d /data\n"})}),"\n",(0,o.jsx)(n.h3,{id:"aws-ssm-instructions",children:"AWS SSM Instructions"}),"\n",(0,o.jsxs)(n.p,{children:["We recommend disabling all SSH (port 22) or remote access to any EC2 instances you configure. ",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html#start-ec2-console",children:"Use AWS Systems Session Manager (AWS SSM) to access your node."})," Additionally, follow the instructions below on your local computer to securely communicate with the instance(s)."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html",children:"Install the AWS CLI SSM plugin."})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started-enable-ssh-connections.html",children:"Configure SSH to support AWS SSM tunneling."})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Alternatively, manually open a port forwarding tunnel."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'aws ssm start-session \\\n\t--target $(aws ec2 describe-instances \\\n\t\t--filter "Name=tag:Name,Values=node-01" \\\n\t\t--query "Reservations[].Instances[?State.Name == \'running\'].InstanceId[]" \\\n\t\t--output text) \\\n\t--document-name AWS-StartPortForwardingSession \\\n\t--parameters \'{ "portNumber": ["22"], "localPortNumber": ["9999"] }\'\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Alternatively, manually open a secure SSH tunnel session."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"aws ssm start-session \\\n\t--target $(aws ec2 describe-instances \\\n\t\t--filter \"Name=tag:Name,Values=node-01\" \\\n\t\t--query \"Reservations[].Instances[?State.Name == 'running'].InstanceId[]\" \\\n\t\t--output text) \\\n\t--document-name AWS-StartSSHSession \\\n\t--parameters 'portNumber=%p'\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"using-aws-documentdb-instead-of-mongodb-coming-soon",children:"Using AWS DocumentDB instead of MongoDB (Coming Soon)"}),"\n",(0,o.jsx)(n.p,{children:"The Division of Digital Psychiatry has been working closely with Solutions Architects at Amazon Web Services (AWS) to improve performance and reliability, as well as reduce maintenance overhead and IT skills required for deployment. For this reason, we support MongoDB in addition to the Apache CouchDB database. AWS offers a managed solution for MongoDB databases called DocumentDB that abstracts and simplifies all MongoDB database setup and operations needs, including routine backups and HIPAA-compliant encryption of data at rest and in transit."}),"\n",(0,o.jsx)(n.p,{children:"DocumentDB is a high performance database solution built on the AWS Aurora technology that supports global replicated clusters that span across multiple regions (i.e. U.S. East and Mumbai, for example) and up to 15 read replicas in a single region. This provides high availability and performance for the LAMP API and in turn the clinical dashboard and mobile apps that are built upon it."}),"\n",(0,o.jsx)(n.p,{children:"This advanced technology and other AWS managed solutions are natively integrated into the LAMP Platform and the Cortex data analysis toolkit, enabling both advanced clinical care management features (such as just-in-time adaptive interventions) and advanced research/data analysis methods."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"We are working closely with Amazon Web Services (AWS) to bring this feature to all organizations using the LAMP Platform. If you or your organization are interested, please contact us."})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},72453:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Untitled_AWS-3d6dab11c58abe7d166f0f2215a33889.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);