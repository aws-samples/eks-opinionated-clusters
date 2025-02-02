---
title: Setup
sidebar_position: 1
weight: 5
---

[Amazon EKS](https://aws.amazon.com/eks/) is a managed Kubernetes service on AWS, that provides robust integration with various AWS services and supports both cloud and on-premises deployments.

Its primary use cases are:

- High-availability application deployment
- Microservices architecture implementation
- Automated software release processes (CICD)
- Serverless applications using AWS Fargate
- Machine learning workloads execution
- Hybrid cloud deployments
- Cost-effective batch processing
- Security and compliance management

[Auto Mode](https://aws.amazon.com/eks/auto-mode/) is a feature of Amazon EKS that extends management of Kubernetes clusters by automating infrastructure setup and operation. It provides automated handling of key components including compute autoscaling, networking, load balancing, storage, and GPU support, allowing organizations to delegate infrastructure decisions to AWS. The service aims to reduce operational overhead while maintaining security, efficiency, and application availability through features like automated upgrades and dynamic resource scaling.

More in detail, Auto Mode:

- Offers streamlined Kubernetes cluster management with minimal operational overhead
- Provides dynamic node scaling based on application demands
- Implements security measures including immutable AMIs, SELinux controls, and read-only root file systems
- Enforces a 21-day maximum node lifetime for security best practices
- Automates critical components like compute, storage, networking, and load balancing
- Includes built-in support for GPU workloads and Pod IP address management
- Allows customization through NodePools and NodeClasses for specific requirements
- Integrates with AWS services like EC2, EBS, and ELB
- Prevents direct node access by disallowing SSH or SSM access

The labs in this workshop build on an EKS cluster created with Auto Mode, for quicker and easier deployment.

This section outlines how to set up the such a cluster.