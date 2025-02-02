---
title: In your own account
sidebar_position: 2
weight: 5
---

We will deploy our Amazon EKS Auto Mode cluster using `eksctl`, AWS's command-line tool to manage EKS clusters. There are two options: a straightforward single command approach and a more detailed YAML file configuration method. While both achieve the same result, using YAML gives you finer control over your cluster's configuration.

Managing EKS Auto Mode clusters becomes easier with `eksctl`, as it automatically handles AWS resource management and setup. 

This guide assumes you understand Amazon EKS basics and have already downloaded and installed the necessary command-line tools: `aws` and `eksctl`. For more information see [Set up to use Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/setting-up.html).

As part of the setup, you will have configured the `aws` CLI with your credentials. AWS uses credentials to verify your identity when making API calls. When you send a request to AWS servers, your access credentials help encrypt the communication and confirm who you are. Once AWS validates your identity, it checks what you're allowed to do based on your assigned permission policies.

Please ensure your identity is associated to sufficient permissions to manage AWS resources including: EC2 instances, EC2 networking, EKS clusters, and IAM roles.

You can check your user identity by running the following command:

```bash
$ aws sts get-caller-identity
```

Once you are ready, you can progress with setting up the region you want to run this workshop on, for example:

```bash
$ export AWS_REGION=us-east-1
```

We will use the following YAML to configure Auto Mode with `eksctl`:

```file hidePath=true
manifests/eksctl/auto_cluster.yaml
```

Run the following command to create the cluster:

```bash
$ export EKS_CLUSTER_NAME=eks-isv-workshop
$ curl -fsSL https://raw.githubusercontent.com/VAR::MANIFESTS_OWNER/VAR::MANIFESTS_REPOSITORY/VAR::MANIFESTS_REF/manifests/eksctl/auto_cluster.yaml | \
envsubst | eksctl create cluster -f -
```

The output will look like:

```
2025-01-29 09:28:46 [ℹ]  eksctl version 0.202.0
2025-01-29 09:28:46 [ℹ]  using region us-east-1
2025-01-29 09:28:48 [ℹ]  setting availability zones to [us-east-1d us-east-1b]
2025-01-29 09:28:48 [ℹ]  subnets for us-east-1d - public:192.168.0.0/19 private:192.168.64.0/19
2025-01-29 09:28:48 [ℹ]  subnets for us-east-1b - public:192.168.32.0/19 private:192.168.96.0/19
2025-01-29 09:28:48 [ℹ]  using Kubernetes version 1.30
2025-01-29 09:28:48 [ℹ]  creating EKS cluster "eks-isv-workshop" in "us-east-1" region with 
2025-01-29 09:28:48 [ℹ]  if you encounter any issues, check CloudFormation console or try 'eksctl utils describe-stacks --region=us-east-1 --cluster=eks-isv-workshop'
2025-01-29 09:28:48 [ℹ]  Kubernetes API endpoint access will use default of {publicAccess=true, privateAccess=false} for cluster "eks-isv-workshop" in "us-east-1"
2025-01-29 09:28:48 [ℹ]  CloudWatch logging will not be enabled for cluster "eks-isv-workshop" in "us-east-1"
2025-01-29 09:28:48 [ℹ]  you can enable it with 'eksctl utils update-cluster-logging --enable-types={SPECIFY-YOUR-LOG-TYPES-HERE (e.g. all)} --region=us-east-1 --cluster=eks-isv-workshop'
2025-01-29 09:28:48 [ℹ]  default addons metrics-server were not specified, will install them as EKS addons
2025-01-29 09:28:48 [ℹ]  
2 sequential tasks: { create cluster control plane "eks-isv-workshop", 
    2 sequential sub-tasks: { 
        1 task: { create addons },
        wait for control plane to become ready,
    } 
}
2025-01-29 09:28:48 [ℹ]  building cluster stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:28:49 [ℹ]  deploying stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:29:19 [ℹ]  waiting for CloudFormation stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:29:56 [ℹ]  waiting for CloudFormation stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:30:57 [ℹ]  waiting for CloudFormation stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:31:59 [ℹ]  waiting for CloudFormation stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:32:59 [ℹ]  waiting for CloudFormation stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:34:01 [ℹ]  waiting for CloudFormation stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:35:03 [ℹ]  waiting for CloudFormation stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:36:04 [ℹ]  waiting for CloudFormation stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:37:06 [ℹ]  waiting for CloudFormation stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:38:07 [ℹ]  waiting for CloudFormation stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:39:09 [ℹ]  waiting for CloudFormation stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:40:10 [ℹ]  waiting for CloudFormation stack "eksctl-eks-isv-workshop-cluster"
2025-01-29 09:40:15 [ℹ]  creating addon
2025-01-29 09:40:16 [ℹ]  successfully created addon
2025-01-29 09:42:19 [ℹ]  waiting for the control plane to become ready
2025-01-29 09:42:20 [✔]  saved kubeconfig as "/Users/username/.kube/config"
2025-01-29 09:42:20 [ℹ]  no tasks
2025-01-29 09:42:20 [✔]  all EKS cluster resources for "eks-isv-workshop" have been created
2025-01-29 09:42:22 [ℹ]  kubectl command should work with "/Users/username/.kube/config", try 'kubectl get nodes'
2025-01-29 09:42:22 [✔]  EKS cluster "eks-isv-workshop" in "us-east-1" region is ready
```

Like suggested by the console output, we can check the running nodes:

```bash
$ kubectl get nodes
```

The output will look similar to the following:

```
NAME                  STATUS   ROLES    AGE   VERSION
i-01f3fda54427d7780   Ready    <none>   13m   v1.30.7-eks-68cabf3
```

## Next Steps

Now that your Amazon EKS cluster is operational, you're ready to proceed with the workshop modules. Use the top navigation bar to access the various workshop modules. You can start with the next section or choose any specific module that interests you.

Work through the modules at your own pace and follow the provided instructions carefully.

After completing the workshop, it's crucial to clean up your resources to avoid unnecessary charges. Follow the clean-up steps provided at the end of this page to remove all created resources.

After that, take some time to review what you've learned and consider how you might apply these concepts to your own projects or workloads.


## Cleanup

:::danger

This is step is intended to be performed only when you are done with the Workshop and you want to cleanup the deployed resources.

:::

First, delete the cluster with `eksctl`:

```bash
$ eksctl delete cluster --name $EKS_CLUSTER_NAME --region $AWS_REGION
```

Second, verify resource deletion:

- Check the Amazon EKS console to ensure the cluster has been removed.
- Verify in the EC2 console that any associated nodes have been terminated.
- Check the VPC console to confirm that the VPC created for your cluster has been deleted.

Clean up any remaining resources (if necessary). In some cases, you may need to manually delete resources that weren't automatically removed:

- Check for any remaining Load Balancers in the EC2 console.
- Look for any persistent volumes or snapshots in the EBS section of the EC2 console.
- Verify that any IAM roles or policies created for your cluster have been removed.

Review CloudFormation stacks Check the CloudFormation console for any stacks related to your cluster and delete them if they still exist.
