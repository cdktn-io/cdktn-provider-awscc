# `gameliftFleet` Submodule <a name="`gameliftFleet` Submodule" id="@cdktn/provider-awscc.gameliftFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftFleet <a name="GameliftFleet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet awscc_gamelift_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleet;

GameliftFleet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .anywhereConfiguration(GameliftFleetAnywhereConfiguration)
//  .applyCapacity(java.lang.String)
//  .buildId(java.lang.String)
//  .certificateConfiguration(GameliftFleetCertificateConfiguration)
//  .computeType(java.lang.String)
//  .description(java.lang.String)
//  .desiredEc2Instances(java.lang.Number)
//  .ec2InboundPermissions(IResolvable|java.util.List<GameliftFleetEc2InboundPermissions>)
//  .ec2InstanceType(java.lang.String)
//  .fleetType(java.lang.String)
//  .instanceRoleArn(java.lang.String)
//  .instanceRoleCredentialsProvider(java.lang.String)
//  .locations(IResolvable|java.util.List<GameliftFleetLocations>)
//  .logPaths(java.util.List<java.lang.String>)
//  .maxSize(java.lang.Number)
//  .metricGroups(java.util.List<java.lang.String>)
//  .minSize(java.lang.Number)
//  .newGameSessionProtectionPolicy(java.lang.String)
//  .peerVpcAwsAccountId(java.lang.String)
//  .peerVpcId(java.lang.String)
//  .playerGatewayConfiguration(GameliftFleetPlayerGatewayConfiguration)
//  .playerGatewayMode(java.lang.String)
//  .resourceCreationLimitPolicy(GameliftFleetResourceCreationLimitPolicy)
//  .runtimeConfiguration(GameliftFleetRuntimeConfiguration)
//  .scalingPolicies(IResolvable|java.util.List<GameliftFleetScalingPolicies>)
//  .scriptId(java.lang.String)
//  .serverLaunchParameters(java.lang.String)
//  .serverLaunchPath(java.lang.String)
//  .tags(IResolvable|java.util.List<GameliftFleetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A descriptive label that is associated with a fleet. Fleet names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.anywhereConfiguration">anywhereConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | Configuration for Anywhere fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.applyCapacity">applyCapacity</a></code> | <code>java.lang.String</code> | Determines when and how to apply fleet or location capacities. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.buildId">buildId</a></code> | <code>java.lang.String</code> | A unique identifier for a build to be deployed on the new fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.certificateConfiguration">certificateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | Indicates whether to generate a TLS/SSL certificate for the new fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.computeType">computeType</a></code> | <code>java.lang.String</code> | ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.desiredEc2Instances">desiredEc2Instances</a></code> | <code>java.lang.Number</code> | [DEPRECATED] The number of EC2 instances that you want this fleet to host. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.ec2InboundPermissions">ec2InboundPermissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>></code> | A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.ec2InstanceType">ec2InstanceType</a></code> | <code>java.lang.String</code> | The name of an EC2 instance type that is supported in Amazon GameLift. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.fleetType">fleetType</a></code> | <code>java.lang.String</code> | Indicates whether to use On-Demand instances or Spot instances for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.instanceRoleArn">instanceRoleArn</a></code> | <code>java.lang.String</code> | A unique identifier for an AWS IAM role that manages access to your AWS services. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.instanceRoleCredentialsProvider">instanceRoleCredentialsProvider</a></code> | <code>java.lang.String</code> | Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.locations">locations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#locations GameliftFleet#locations}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.logPaths">logPaths</a></code> | <code>java.util.List<java.lang.String></code> | This parameter is no longer used. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | [DEPRECATED] The maximum value that is allowed for the fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.metricGroups">metricGroups</a></code> | <code>java.util.List<java.lang.String></code> | The name of an Amazon CloudWatch metric group. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.minSize">minSize</a></code> | <code>java.lang.Number</code> | [DEPRECATED] The minimum value allowed for the fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.newGameSessionProtectionPolicy">newGameSessionProtectionPolicy</a></code> | <code>java.lang.String</code> | A game session protection policy to apply to all game sessions hosted on instances in this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.peerVpcAwsAccountId">peerVpcAwsAccountId</a></code> | <code>java.lang.String</code> | A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.peerVpcId">peerVpcId</a></code> | <code>java.lang.String</code> | A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.playerGatewayConfiguration">playerGatewayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | Configuration for player gateway. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.playerGatewayMode">playerGatewayMode</a></code> | <code>java.lang.String</code> | The player gateway mode for the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.resourceCreationLimitPolicy">resourceCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | A policy that limits the number of game sessions an individual player can create over a span of time for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.runtimeConfiguration">runtimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | Instructions for launching server processes on each instance in the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scalingPolicies">scalingPolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>></code> | A list of rules that control how a fleet is scaled. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scriptId">scriptId</a></code> | <code>java.lang.String</code> | A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.serverLaunchParameters">serverLaunchParameters</a></code> | <code>java.lang.String</code> | This parameter is no longer used but is retained for backward compatibility. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.serverLaunchPath">serverLaunchPath</a></code> | <code>java.lang.String</code> | This parameter is no longer used. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A descriptive label that is associated with a fleet. Fleet names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#name GameliftFleet#name}

---

##### `anywhereConfiguration`<sup>Optional</sup> <a name="anywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.anywhereConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

Configuration for Anywhere fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#anywhere_configuration GameliftFleet#anywhere_configuration}

---

##### `applyCapacity`<sup>Optional</sup> <a name="applyCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.applyCapacity"></a>

- *Type:* java.lang.String

Determines when and how to apply fleet or location capacities.

Allowed options are ON_UPDATE (default), ON_CREATE_AND_UPDATE and ON_CREATE_AND_UPDATE_WITH_AUTOSCALING. If you choose ON_CREATE_AND_UPDATE_WITH_AUTOSCALING, MinSize and MaxSize will still be applied on creation and on updates, but DesiredEC2Instances will only be applied once on fleet creation and will be ignored during updates to prevent conflicts with auto-scaling. During updates with ON_CREATE_AND_UPDATE_WITH_AUTOSCALING chosen, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#apply_capacity GameliftFleet#apply_capacity}

---

##### `buildId`<sup>Optional</sup> <a name="buildId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.buildId"></a>

- *Type:* java.lang.String

A unique identifier for a build to be deployed on the new fleet.

If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#build_id GameliftFleet#build_id}

---

##### `certificateConfiguration`<sup>Optional</sup> <a name="certificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.certificateConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

Indicates whether to generate a TLS/SSL certificate for the new fleet.

TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not set, certificate generation is disabled. This fleet setting cannot be changed once the fleet is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#certificate_configuration GameliftFleet#certificate_configuration}

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.computeType"></a>

- *Type:* java.lang.String

ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#compute_type GameliftFleet#compute_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#description GameliftFleet#description}

---

##### `desiredEc2Instances`<sup>Optional</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.desiredEc2Instances"></a>

- *Type:* java.lang.Number

[DEPRECATED] The number of EC2 instances that you want this fleet to host.

When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#desired_ec2_instances GameliftFleet#desired_ec2_instances}

---

##### `ec2InboundPermissions`<sup>Optional</sup> <a name="ec2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.ec2InboundPermissions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>>

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#ec2_inbound_permissions GameliftFleet#ec2_inbound_permissions}

---

##### `ec2InstanceType`<sup>Optional</sup> <a name="ec2InstanceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.ec2InstanceType"></a>

- *Type:* java.lang.String

The name of an EC2 instance type that is supported in Amazon GameLift.

A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}

---

##### `fleetType`<sup>Optional</sup> <a name="fleetType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.fleetType"></a>

- *Type:* java.lang.String

Indicates whether to use On-Demand instances or Spot instances for this fleet.

If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#fleet_type GameliftFleet#fleet_type}

---

##### `instanceRoleArn`<sup>Optional</sup> <a name="instanceRoleArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.instanceRoleArn"></a>

- *Type:* java.lang.String

A unique identifier for an AWS IAM role that manages access to your AWS services.

With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}

---

##### `instanceRoleCredentialsProvider`<sup>Optional</sup> <a name="instanceRoleCredentialsProvider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.instanceRoleCredentialsProvider"></a>

- *Type:* java.lang.String

Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#instance_role_credentials_provider GameliftFleet#instance_role_credentials_provider}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.locations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#locations GameliftFleet#locations}.

---

##### `logPaths`<sup>Optional</sup> <a name="logPaths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.logPaths"></a>

- *Type:* java.util.List<java.lang.String>

This parameter is no longer used.

When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#log_paths GameliftFleet#log_paths}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.maxSize"></a>

- *Type:* java.lang.Number

[DEPRECATED] The maximum value that is allowed for the fleet's instance count.

When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#max_size GameliftFleet#max_size}

---

##### `metricGroups`<sup>Optional</sup> <a name="metricGroups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.metricGroups"></a>

- *Type:* java.util.List<java.lang.String>

The name of an Amazon CloudWatch metric group.

A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#metric_groups GameliftFleet#metric_groups}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.minSize"></a>

- *Type:* java.lang.Number

[DEPRECATED] The minimum value allowed for the fleet's instance count.

When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#min_size GameliftFleet#min_size}

---

##### `newGameSessionProtectionPolicy`<sup>Optional</sup> <a name="newGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.newGameSessionProtectionPolicy"></a>

- *Type:* java.lang.String

A game session protection policy to apply to all game sessions hosted on instances in this fleet.

When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}

---

##### `peerVpcAwsAccountId`<sup>Optional</sup> <a name="peerVpcAwsAccountId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.peerVpcAwsAccountId"></a>

- *Type:* java.lang.String

A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with.

You can find your account ID in the AWS Management Console under account settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#peer_vpc_aws_account_id GameliftFleet#peer_vpc_aws_account_id}

---

##### `peerVpcId`<sup>Optional</sup> <a name="peerVpcId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.peerVpcId"></a>

- *Type:* java.lang.String

A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet.

The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#peer_vpc_id GameliftFleet#peer_vpc_id}

---

##### `playerGatewayConfiguration`<sup>Optional</sup> <a name="playerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.playerGatewayConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

Configuration for player gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#player_gateway_configuration GameliftFleet#player_gateway_configuration}

---

##### `playerGatewayMode`<sup>Optional</sup> <a name="playerGatewayMode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.playerGatewayMode"></a>

- *Type:* java.lang.String

The player gateway mode for the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#player_gateway_mode GameliftFleet#player_gateway_mode}

---

##### `resourceCreationLimitPolicy`<sup>Optional</sup> <a name="resourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.resourceCreationLimitPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}

---

##### `runtimeConfiguration`<sup>Optional</sup> <a name="runtimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.runtimeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

Instructions for launching server processes on each instance in the fleet.

Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception.

This parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration has replaced these parameters, but fleets that use them will continue to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#runtime_configuration GameliftFleet#runtime_configuration}

---

##### `scalingPolicies`<sup>Optional</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scalingPolicies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>>

A list of rules that control how a fleet is scaled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#scaling_policies GameliftFleet#scaling_policies}

---

##### `scriptId`<sup>Optional</sup> <a name="scriptId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scriptId"></a>

- *Type:* java.lang.String

A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet.

The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.

Note: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#script_id GameliftFleet#script_id}

---

##### `serverLaunchParameters`<sup>Optional</sup> <a name="serverLaunchParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.serverLaunchParameters"></a>

- *Type:* java.lang.String

This parameter is no longer used but is retained for backward compatibility.

Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#server_launch_parameters GameliftFleet#server_launch_parameters}

---

##### `serverLaunchPath`<sup>Optional</sup> <a name="serverLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.serverLaunchPath"></a>

- *Type:* java.lang.String

This parameter is no longer used.

Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#server_launch_path GameliftFleet#server_launch_path}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#tags GameliftFleet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putAnywhereConfiguration">putAnywhereConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putCertificateConfiguration">putCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putEc2InboundPermissions">putEc2InboundPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putLocations">putLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putPlayerGatewayConfiguration">putPlayerGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy">putResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration">putRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putScalingPolicies">putScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetAnywhereConfiguration">resetAnywhereConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetApplyCapacity">resetApplyCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetBuildId">resetBuildId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetCertificateConfiguration">resetCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetComputeType">resetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDesiredEc2Instances">resetDesiredEc2Instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InboundPermissions">resetEc2InboundPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InstanceType">resetEc2InstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetFleetType">resetFleetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleArn">resetInstanceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleCredentialsProvider">resetInstanceRoleCredentialsProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLogPaths">resetLogPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMetricGroups">resetMetricGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy">resetNewGameSessionProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcAwsAccountId">resetPeerVpcAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcId">resetPeerVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayConfiguration">resetPlayerGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayMode">resetPlayerGatewayMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy">resetResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetRuntimeConfiguration">resetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScalingPolicies">resetScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScriptId">resetScriptId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchParameters">resetServerLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchPath">resetServerLaunchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnywhereConfiguration` <a name="putAnywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putAnywhereConfiguration"></a>

```java
public void putAnywhereConfiguration(GameliftFleetAnywhereConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putAnywhereConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

---

##### `putCertificateConfiguration` <a name="putCertificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putCertificateConfiguration"></a>

```java
public void putCertificateConfiguration(GameliftFleetCertificateConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putCertificateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---

##### `putEc2InboundPermissions` <a name="putEc2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putEc2InboundPermissions"></a>

```java
public void putEc2InboundPermissions(IResolvable|java.util.List<GameliftFleetEc2InboundPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putEc2InboundPermissions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>>

---

##### `putLocations` <a name="putLocations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putLocations"></a>

```java
public void putLocations(IResolvable|java.util.List<GameliftFleetLocations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putLocations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>>

---

##### `putPlayerGatewayConfiguration` <a name="putPlayerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putPlayerGatewayConfiguration"></a>

```java
public void putPlayerGatewayConfiguration(GameliftFleetPlayerGatewayConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putPlayerGatewayConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

---

##### `putResourceCreationLimitPolicy` <a name="putResourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy"></a>

```java
public void putResourceCreationLimitPolicy(GameliftFleetResourceCreationLimitPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---

##### `putRuntimeConfiguration` <a name="putRuntimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration"></a>

```java
public void putRuntimeConfiguration(GameliftFleetRuntimeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---

##### `putScalingPolicies` <a name="putScalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putScalingPolicies"></a>

```java
public void putScalingPolicies(IResolvable|java.util.List<GameliftFleetScalingPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putScalingPolicies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GameliftFleetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>>

---

##### `resetAnywhereConfiguration` <a name="resetAnywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetAnywhereConfiguration"></a>

```java
public void resetAnywhereConfiguration()
```

##### `resetApplyCapacity` <a name="resetApplyCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetApplyCapacity"></a>

```java
public void resetApplyCapacity()
```

##### `resetBuildId` <a name="resetBuildId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetBuildId"></a>

```java
public void resetBuildId()
```

##### `resetCertificateConfiguration` <a name="resetCertificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetCertificateConfiguration"></a>

```java
public void resetCertificateConfiguration()
```

##### `resetComputeType` <a name="resetComputeType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetComputeType"></a>

```java
public void resetComputeType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDesiredEc2Instances` <a name="resetDesiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDesiredEc2Instances"></a>

```java
public void resetDesiredEc2Instances()
```

##### `resetEc2InboundPermissions` <a name="resetEc2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InboundPermissions"></a>

```java
public void resetEc2InboundPermissions()
```

##### `resetEc2InstanceType` <a name="resetEc2InstanceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InstanceType"></a>

```java
public void resetEc2InstanceType()
```

##### `resetFleetType` <a name="resetFleetType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetFleetType"></a>

```java
public void resetFleetType()
```

##### `resetInstanceRoleArn` <a name="resetInstanceRoleArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleArn"></a>

```java
public void resetInstanceRoleArn()
```

##### `resetInstanceRoleCredentialsProvider` <a name="resetInstanceRoleCredentialsProvider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleCredentialsProvider"></a>

```java
public void resetInstanceRoleCredentialsProvider()
```

##### `resetLocations` <a name="resetLocations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLocations"></a>

```java
public void resetLocations()
```

##### `resetLogPaths` <a name="resetLogPaths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLogPaths"></a>

```java
public void resetLogPaths()
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMaxSize"></a>

```java
public void resetMaxSize()
```

##### `resetMetricGroups` <a name="resetMetricGroups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMetricGroups"></a>

```java
public void resetMetricGroups()
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMinSize"></a>

```java
public void resetMinSize()
```

##### `resetNewGameSessionProtectionPolicy` <a name="resetNewGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy"></a>

```java
public void resetNewGameSessionProtectionPolicy()
```

##### `resetPeerVpcAwsAccountId` <a name="resetPeerVpcAwsAccountId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcAwsAccountId"></a>

```java
public void resetPeerVpcAwsAccountId()
```

##### `resetPeerVpcId` <a name="resetPeerVpcId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcId"></a>

```java
public void resetPeerVpcId()
```

##### `resetPlayerGatewayConfiguration` <a name="resetPlayerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayConfiguration"></a>

```java
public void resetPlayerGatewayConfiguration()
```

##### `resetPlayerGatewayMode` <a name="resetPlayerGatewayMode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayMode"></a>

```java
public void resetPlayerGatewayMode()
```

##### `resetResourceCreationLimitPolicy` <a name="resetResourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy"></a>

```java
public void resetResourceCreationLimitPolicy()
```

##### `resetRuntimeConfiguration` <a name="resetRuntimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetRuntimeConfiguration"></a>

```java
public void resetRuntimeConfiguration()
```

##### `resetScalingPolicies` <a name="resetScalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScalingPolicies"></a>

```java
public void resetScalingPolicies()
```

##### `resetScriptId` <a name="resetScriptId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScriptId"></a>

```java
public void resetScriptId()
```

##### `resetServerLaunchParameters` <a name="resetServerLaunchParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchParameters"></a>

```java
public void resetServerLaunchParameters()
```

##### `resetServerLaunchPath` <a name="resetServerLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchPath"></a>

```java
public void resetServerLaunchPath()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleet;

GameliftFleet.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleet;

GameliftFleet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleet;

GameliftFleet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleet;

GameliftFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GameliftFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GameliftFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GameliftFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GameliftFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GameliftFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfiguration">anywhereConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference">GameliftFleetAnywhereConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfiguration">certificateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissions">ec2InboundPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList">GameliftFleetEc2InboundPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetArn">fleetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locations">locations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList">GameliftFleetLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfiguration">playerGatewayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference">GameliftFleetPlayerGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy">resourceCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfiguration">runtimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPolicies">scalingPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList">GameliftFleetScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList">GameliftFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfigurationInput">anywhereConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacityInput">applyCapacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildIdInput">buildIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfigurationInput">certificateConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeTypeInput">computeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2InstancesInput">desiredEc2InstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissionsInput">ec2InboundPermissionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput">ec2InstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetTypeInput">fleetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArnInput">instanceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProviderInput">instanceRoleCredentialsProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locationsInput">locationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPathsInput">logPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSizeInput">maxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroupsInput">metricGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput">newGameSessionProtectionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountIdInput">peerVpcAwsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcIdInput">peerVpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfigurationInput">playerGatewayConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayModeInput">playerGatewayModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput">resourceCreationLimitPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput">runtimeConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPoliciesInput">scalingPoliciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptIdInput">scriptIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParametersInput">serverLaunchParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPathInput">serverLaunchPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacity">applyCapacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildId">buildId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeType">computeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceType">ec2InstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetType">fleetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArn">instanceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProvider">instanceRoleCredentialsProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPaths">logPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroups">metricGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy">newGameSessionProtectionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountId">peerVpcAwsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcId">peerVpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayMode">playerGatewayMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptId">scriptId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParameters">serverLaunchParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPath">serverLaunchPath</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `anywhereConfiguration`<sup>Required</sup> <a name="anywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfiguration"></a>

```java
public GameliftFleetAnywhereConfigurationOutputReference getAnywhereConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference">GameliftFleetAnywhereConfigurationOutputReference</a>

---

##### `certificateConfiguration`<sup>Required</sup> <a name="certificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfiguration"></a>

```java
public GameliftFleetCertificateConfigurationOutputReference getCertificateConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a>

---

##### `ec2InboundPermissions`<sup>Required</sup> <a name="ec2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissions"></a>

```java
public GameliftFleetEc2InboundPermissionsList getEc2InboundPermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList">GameliftFleetEc2InboundPermissionsList</a>

---

##### `fleetArn`<sup>Required</sup> <a name="fleetArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetArn"></a>

```java
public java.lang.String getFleetArn();
```

- *Type:* java.lang.String

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locations"></a>

```java
public GameliftFleetLocationsList getLocations();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList">GameliftFleetLocationsList</a>

---

##### `playerGatewayConfiguration`<sup>Required</sup> <a name="playerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfiguration"></a>

```java
public GameliftFleetPlayerGatewayConfigurationOutputReference getPlayerGatewayConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference">GameliftFleetPlayerGatewayConfigurationOutputReference</a>

---

##### `resourceCreationLimitPolicy`<sup>Required</sup> <a name="resourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy"></a>

```java
public GameliftFleetResourceCreationLimitPolicyOutputReference getResourceCreationLimitPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a>

---

##### `runtimeConfiguration`<sup>Required</sup> <a name="runtimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfiguration"></a>

```java
public GameliftFleetRuntimeConfigurationOutputReference getRuntimeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a>

---

##### `scalingPolicies`<sup>Required</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPolicies"></a>

```java
public GameliftFleetScalingPoliciesList getScalingPolicies();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList">GameliftFleetScalingPoliciesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tags"></a>

```java
public GameliftFleetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList">GameliftFleetTagsList</a>

---

##### `anywhereConfigurationInput`<sup>Optional</sup> <a name="anywhereConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfigurationInput"></a>

```java
public IResolvable|GameliftFleetAnywhereConfiguration getAnywhereConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

---

##### `applyCapacityInput`<sup>Optional</sup> <a name="applyCapacityInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacityInput"></a>

```java
public java.lang.String getApplyCapacityInput();
```

- *Type:* java.lang.String

---

##### `buildIdInput`<sup>Optional</sup> <a name="buildIdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildIdInput"></a>

```java
public java.lang.String getBuildIdInput();
```

- *Type:* java.lang.String

---

##### `certificateConfigurationInput`<sup>Optional</sup> <a name="certificateConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfigurationInput"></a>

```java
public IResolvable|GameliftFleetCertificateConfiguration getCertificateConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeTypeInput"></a>

```java
public java.lang.String getComputeTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `desiredEc2InstancesInput`<sup>Optional</sup> <a name="desiredEc2InstancesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2InstancesInput"></a>

```java
public java.lang.Number getDesiredEc2InstancesInput();
```

- *Type:* java.lang.Number

---

##### `ec2InboundPermissionsInput`<sup>Optional</sup> <a name="ec2InboundPermissionsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissionsInput"></a>

```java
public IResolvable|java.util.List<GameliftFleetEc2InboundPermissions> getEc2InboundPermissionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>>

---

##### `ec2InstanceTypeInput`<sup>Optional</sup> <a name="ec2InstanceTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput"></a>

```java
public java.lang.String getEc2InstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `fleetTypeInput`<sup>Optional</sup> <a name="fleetTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetTypeInput"></a>

```java
public java.lang.String getFleetTypeInput();
```

- *Type:* java.lang.String

---

##### `instanceRoleArnInput`<sup>Optional</sup> <a name="instanceRoleArnInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArnInput"></a>

```java
public java.lang.String getInstanceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `instanceRoleCredentialsProviderInput`<sup>Optional</sup> <a name="instanceRoleCredentialsProviderInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProviderInput"></a>

```java
public java.lang.String getInstanceRoleCredentialsProviderInput();
```

- *Type:* java.lang.String

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locationsInput"></a>

```java
public IResolvable|java.util.List<GameliftFleetLocations> getLocationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>>

---

##### `logPathsInput`<sup>Optional</sup> <a name="logPathsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPathsInput"></a>

```java
public java.util.List<java.lang.String> getLogPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSizeInput"></a>

```java
public java.lang.Number getMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `metricGroupsInput`<sup>Optional</sup> <a name="metricGroupsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroupsInput"></a>

```java
public java.util.List<java.lang.String> getMetricGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `newGameSessionProtectionPolicyInput`<sup>Optional</sup> <a name="newGameSessionProtectionPolicyInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput"></a>

```java
public java.lang.String getNewGameSessionProtectionPolicyInput();
```

- *Type:* java.lang.String

---

##### `peerVpcAwsAccountIdInput`<sup>Optional</sup> <a name="peerVpcAwsAccountIdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountIdInput"></a>

```java
public java.lang.String getPeerVpcAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `peerVpcIdInput`<sup>Optional</sup> <a name="peerVpcIdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcIdInput"></a>

```java
public java.lang.String getPeerVpcIdInput();
```

- *Type:* java.lang.String

---

##### `playerGatewayConfigurationInput`<sup>Optional</sup> <a name="playerGatewayConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfigurationInput"></a>

```java
public IResolvable|GameliftFleetPlayerGatewayConfiguration getPlayerGatewayConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

---

##### `playerGatewayModeInput`<sup>Optional</sup> <a name="playerGatewayModeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayModeInput"></a>

```java
public java.lang.String getPlayerGatewayModeInput();
```

- *Type:* java.lang.String

---

##### `resourceCreationLimitPolicyInput`<sup>Optional</sup> <a name="resourceCreationLimitPolicyInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput"></a>

```java
public IResolvable|GameliftFleetResourceCreationLimitPolicy getResourceCreationLimitPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---

##### `runtimeConfigurationInput`<sup>Optional</sup> <a name="runtimeConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput"></a>

```java
public IResolvable|GameliftFleetRuntimeConfiguration getRuntimeConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---

##### `scalingPoliciesInput`<sup>Optional</sup> <a name="scalingPoliciesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPoliciesInput"></a>

```java
public IResolvable|java.util.List<GameliftFleetScalingPolicies> getScalingPoliciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>>

---

##### `scriptIdInput`<sup>Optional</sup> <a name="scriptIdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptIdInput"></a>

```java
public java.lang.String getScriptIdInput();
```

- *Type:* java.lang.String

---

##### `serverLaunchParametersInput`<sup>Optional</sup> <a name="serverLaunchParametersInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParametersInput"></a>

```java
public java.lang.String getServerLaunchParametersInput();
```

- *Type:* java.lang.String

---

##### `serverLaunchPathInput`<sup>Optional</sup> <a name="serverLaunchPathInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPathInput"></a>

```java
public java.lang.String getServerLaunchPathInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GameliftFleetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>>

---

##### `applyCapacity`<sup>Required</sup> <a name="applyCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacity"></a>

```java
public java.lang.String getApplyCapacity();
```

- *Type:* java.lang.String

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildId"></a>

```java
public java.lang.String getBuildId();
```

- *Type:* java.lang.String

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `desiredEc2Instances`<sup>Required</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2Instances"></a>

```java
public java.lang.Number getDesiredEc2Instances();
```

- *Type:* java.lang.Number

---

##### `ec2InstanceType`<sup>Required</sup> <a name="ec2InstanceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceType"></a>

```java
public java.lang.String getEc2InstanceType();
```

- *Type:* java.lang.String

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetType"></a>

```java
public java.lang.String getFleetType();
```

- *Type:* java.lang.String

---

##### `instanceRoleArn`<sup>Required</sup> <a name="instanceRoleArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArn"></a>

```java
public java.lang.String getInstanceRoleArn();
```

- *Type:* java.lang.String

---

##### `instanceRoleCredentialsProvider`<sup>Required</sup> <a name="instanceRoleCredentialsProvider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProvider"></a>

```java
public java.lang.String getInstanceRoleCredentialsProvider();
```

- *Type:* java.lang.String

---

##### `logPaths`<sup>Required</sup> <a name="logPaths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPaths"></a>

```java
public java.util.List<java.lang.String> getLogPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

---

##### `metricGroups`<sup>Required</sup> <a name="metricGroups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroups"></a>

```java
public java.util.List<java.lang.String> getMetricGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `newGameSessionProtectionPolicy`<sup>Required</sup> <a name="newGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy"></a>

```java
public java.lang.String getNewGameSessionProtectionPolicy();
```

- *Type:* java.lang.String

---

##### `peerVpcAwsAccountId`<sup>Required</sup> <a name="peerVpcAwsAccountId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountId"></a>

```java
public java.lang.String getPeerVpcAwsAccountId();
```

- *Type:* java.lang.String

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcId"></a>

```java
public java.lang.String getPeerVpcId();
```

- *Type:* java.lang.String

---

##### `playerGatewayMode`<sup>Required</sup> <a name="playerGatewayMode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayMode"></a>

```java
public java.lang.String getPlayerGatewayMode();
```

- *Type:* java.lang.String

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptId"></a>

```java
public java.lang.String getScriptId();
```

- *Type:* java.lang.String

---

##### `serverLaunchParameters`<sup>Required</sup> <a name="serverLaunchParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParameters"></a>

```java
public java.lang.String getServerLaunchParameters();
```

- *Type:* java.lang.String

---

##### `serverLaunchPath`<sup>Required</sup> <a name="serverLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPath"></a>

```java
public java.lang.String getServerLaunchPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftFleetAnywhereConfiguration <a name="GameliftFleetAnywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetAnywhereConfiguration;

GameliftFleetAnywhereConfiguration.builder()
//  .cost(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration.property.cost">cost</a></code> | <code>java.lang.String</code> | Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost. |

---

##### `cost`<sup>Optional</sup> <a name="cost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration.property.cost"></a>

```java
public java.lang.String getCost();
```

- *Type:* java.lang.String

Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#cost GameliftFleet#cost}

---

### GameliftFleetCertificateConfiguration <a name="GameliftFleetCertificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetCertificateConfiguration;

GameliftFleetCertificateConfiguration.builder()
//  .certificateType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType">certificateType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#certificate_type GameliftFleet#certificate_type}. |

---

##### `certificateType`<sup>Optional</sup> <a name="certificateType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType"></a>

```java
public java.lang.String getCertificateType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#certificate_type GameliftFleet#certificate_type}.

---

### GameliftFleetConfig <a name="GameliftFleetConfig" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetConfig;

GameliftFleetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .anywhereConfiguration(GameliftFleetAnywhereConfiguration)
//  .applyCapacity(java.lang.String)
//  .buildId(java.lang.String)
//  .certificateConfiguration(GameliftFleetCertificateConfiguration)
//  .computeType(java.lang.String)
//  .description(java.lang.String)
//  .desiredEc2Instances(java.lang.Number)
//  .ec2InboundPermissions(IResolvable|java.util.List<GameliftFleetEc2InboundPermissions>)
//  .ec2InstanceType(java.lang.String)
//  .fleetType(java.lang.String)
//  .instanceRoleArn(java.lang.String)
//  .instanceRoleCredentialsProvider(java.lang.String)
//  .locations(IResolvable|java.util.List<GameliftFleetLocations>)
//  .logPaths(java.util.List<java.lang.String>)
//  .maxSize(java.lang.Number)
//  .metricGroups(java.util.List<java.lang.String>)
//  .minSize(java.lang.Number)
//  .newGameSessionProtectionPolicy(java.lang.String)
//  .peerVpcAwsAccountId(java.lang.String)
//  .peerVpcId(java.lang.String)
//  .playerGatewayConfiguration(GameliftFleetPlayerGatewayConfiguration)
//  .playerGatewayMode(java.lang.String)
//  .resourceCreationLimitPolicy(GameliftFleetResourceCreationLimitPolicy)
//  .runtimeConfiguration(GameliftFleetRuntimeConfiguration)
//  .scalingPolicies(IResolvable|java.util.List<GameliftFleetScalingPolicies>)
//  .scriptId(java.lang.String)
//  .serverLaunchParameters(java.lang.String)
//  .serverLaunchPath(java.lang.String)
//  .tags(IResolvable|java.util.List<GameliftFleetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.name">name</a></code> | <code>java.lang.String</code> | A descriptive label that is associated with a fleet. Fleet names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.anywhereConfiguration">anywhereConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | Configuration for Anywhere fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.applyCapacity">applyCapacity</a></code> | <code>java.lang.String</code> | Determines when and how to apply fleet or location capacities. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.buildId">buildId</a></code> | <code>java.lang.String</code> | A unique identifier for a build to be deployed on the new fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration">certificateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | Indicates whether to generate a TLS/SSL certificate for the new fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.computeType">computeType</a></code> | <code>java.lang.String</code> | ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>java.lang.Number</code> | [DEPRECATED] The number of EC2 instances that you want this fleet to host. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermissions">ec2InboundPermissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>></code> | A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType">ec2InstanceType</a></code> | <code>java.lang.String</code> | The name of an EC2 instance type that is supported in Amazon GameLift. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.fleetType">fleetType</a></code> | <code>java.lang.String</code> | Indicates whether to use On-Demand instances or Spot instances for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn">instanceRoleArn</a></code> | <code>java.lang.String</code> | A unique identifier for an AWS IAM role that manages access to your AWS services. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleCredentialsProvider">instanceRoleCredentialsProvider</a></code> | <code>java.lang.String</code> | Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.locations">locations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#locations GameliftFleet#locations}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.logPaths">logPaths</a></code> | <code>java.util.List<java.lang.String></code> | This parameter is no longer used. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | [DEPRECATED] The maximum value that is allowed for the fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.metricGroups">metricGroups</a></code> | <code>java.util.List<java.lang.String></code> | The name of an Amazon CloudWatch metric group. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | [DEPRECATED] The minimum value allowed for the fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy">newGameSessionProtectionPolicy</a></code> | <code>java.lang.String</code> | A game session protection policy to apply to all game sessions hosted on instances in this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcAwsAccountId">peerVpcAwsAccountId</a></code> | <code>java.lang.String</code> | A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcId">peerVpcId</a></code> | <code>java.lang.String</code> | A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayConfiguration">playerGatewayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | Configuration for player gateway. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayMode">playerGatewayMode</a></code> | <code>java.lang.String</code> | The player gateway mode for the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy">resourceCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | A policy that limits the number of game sessions an individual player can create over a span of time for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration">runtimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | Instructions for launching server processes on each instance in the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scalingPolicies">scalingPolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>></code> | A list of rules that control how a fleet is scaled. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scriptId">scriptId</a></code> | <code>java.lang.String</code> | A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchParameters">serverLaunchParameters</a></code> | <code>java.lang.String</code> | This parameter is no longer used but is retained for backward compatibility. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchPath">serverLaunchPath</a></code> | <code>java.lang.String</code> | This parameter is no longer used. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A descriptive label that is associated with a fleet. Fleet names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#name GameliftFleet#name}

---

##### `anywhereConfiguration`<sup>Optional</sup> <a name="anywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.anywhereConfiguration"></a>

```java
public GameliftFleetAnywhereConfiguration getAnywhereConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

Configuration for Anywhere fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#anywhere_configuration GameliftFleet#anywhere_configuration}

---

##### `applyCapacity`<sup>Optional</sup> <a name="applyCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.applyCapacity"></a>

```java
public java.lang.String getApplyCapacity();
```

- *Type:* java.lang.String

Determines when and how to apply fleet or location capacities.

Allowed options are ON_UPDATE (default), ON_CREATE_AND_UPDATE and ON_CREATE_AND_UPDATE_WITH_AUTOSCALING. If you choose ON_CREATE_AND_UPDATE_WITH_AUTOSCALING, MinSize and MaxSize will still be applied on creation and on updates, but DesiredEC2Instances will only be applied once on fleet creation and will be ignored during updates to prevent conflicts with auto-scaling. During updates with ON_CREATE_AND_UPDATE_WITH_AUTOSCALING chosen, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#apply_capacity GameliftFleet#apply_capacity}

---

##### `buildId`<sup>Optional</sup> <a name="buildId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.buildId"></a>

```java
public java.lang.String getBuildId();
```

- *Type:* java.lang.String

A unique identifier for a build to be deployed on the new fleet.

If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#build_id GameliftFleet#build_id}

---

##### `certificateConfiguration`<sup>Optional</sup> <a name="certificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration"></a>

```java
public GameliftFleetCertificateConfiguration getCertificateConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

Indicates whether to generate a TLS/SSL certificate for the new fleet.

TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not set, certificate generation is disabled. This fleet setting cannot be changed once the fleet is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#certificate_configuration GameliftFleet#certificate_configuration}

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#compute_type GameliftFleet#compute_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#description GameliftFleet#description}

---

##### `desiredEc2Instances`<sup>Optional</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.desiredEc2Instances"></a>

```java
public java.lang.Number getDesiredEc2Instances();
```

- *Type:* java.lang.Number

[DEPRECATED] The number of EC2 instances that you want this fleet to host.

When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#desired_ec2_instances GameliftFleet#desired_ec2_instances}

---

##### `ec2InboundPermissions`<sup>Optional</sup> <a name="ec2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermissions"></a>

```java
public IResolvable|java.util.List<GameliftFleetEc2InboundPermissions> getEc2InboundPermissions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>>

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#ec2_inbound_permissions GameliftFleet#ec2_inbound_permissions}

---

##### `ec2InstanceType`<sup>Optional</sup> <a name="ec2InstanceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType"></a>

```java
public java.lang.String getEc2InstanceType();
```

- *Type:* java.lang.String

The name of an EC2 instance type that is supported in Amazon GameLift.

A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}

---

##### `fleetType`<sup>Optional</sup> <a name="fleetType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.fleetType"></a>

```java
public java.lang.String getFleetType();
```

- *Type:* java.lang.String

Indicates whether to use On-Demand instances or Spot instances for this fleet.

If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#fleet_type GameliftFleet#fleet_type}

---

##### `instanceRoleArn`<sup>Optional</sup> <a name="instanceRoleArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn"></a>

```java
public java.lang.String getInstanceRoleArn();
```

- *Type:* java.lang.String

A unique identifier for an AWS IAM role that manages access to your AWS services.

With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}

---

##### `instanceRoleCredentialsProvider`<sup>Optional</sup> <a name="instanceRoleCredentialsProvider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleCredentialsProvider"></a>

```java
public java.lang.String getInstanceRoleCredentialsProvider();
```

- *Type:* java.lang.String

Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#instance_role_credentials_provider GameliftFleet#instance_role_credentials_provider}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.locations"></a>

```java
public IResolvable|java.util.List<GameliftFleetLocations> getLocations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#locations GameliftFleet#locations}.

---

##### `logPaths`<sup>Optional</sup> <a name="logPaths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.logPaths"></a>

```java
public java.util.List<java.lang.String> getLogPaths();
```

- *Type:* java.util.List<java.lang.String>

This parameter is no longer used.

When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#log_paths GameliftFleet#log_paths}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

[DEPRECATED] The maximum value that is allowed for the fleet's instance count.

When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#max_size GameliftFleet#max_size}

---

##### `metricGroups`<sup>Optional</sup> <a name="metricGroups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.metricGroups"></a>

```java
public java.util.List<java.lang.String> getMetricGroups();
```

- *Type:* java.util.List<java.lang.String>

The name of an Amazon CloudWatch metric group.

A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#metric_groups GameliftFleet#metric_groups}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

[DEPRECATED] The minimum value allowed for the fleet's instance count.

When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#min_size GameliftFleet#min_size}

---

##### `newGameSessionProtectionPolicy`<sup>Optional</sup> <a name="newGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy"></a>

```java
public java.lang.String getNewGameSessionProtectionPolicy();
```

- *Type:* java.lang.String

A game session protection policy to apply to all game sessions hosted on instances in this fleet.

When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}

---

##### `peerVpcAwsAccountId`<sup>Optional</sup> <a name="peerVpcAwsAccountId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcAwsAccountId"></a>

```java
public java.lang.String getPeerVpcAwsAccountId();
```

- *Type:* java.lang.String

A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with.

You can find your account ID in the AWS Management Console under account settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#peer_vpc_aws_account_id GameliftFleet#peer_vpc_aws_account_id}

---

##### `peerVpcId`<sup>Optional</sup> <a name="peerVpcId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcId"></a>

```java
public java.lang.String getPeerVpcId();
```

- *Type:* java.lang.String

A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet.

The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#peer_vpc_id GameliftFleet#peer_vpc_id}

---

##### `playerGatewayConfiguration`<sup>Optional</sup> <a name="playerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayConfiguration"></a>

```java
public GameliftFleetPlayerGatewayConfiguration getPlayerGatewayConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

Configuration for player gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#player_gateway_configuration GameliftFleet#player_gateway_configuration}

---

##### `playerGatewayMode`<sup>Optional</sup> <a name="playerGatewayMode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayMode"></a>

```java
public java.lang.String getPlayerGatewayMode();
```

- *Type:* java.lang.String

The player gateway mode for the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#player_gateway_mode GameliftFleet#player_gateway_mode}

---

##### `resourceCreationLimitPolicy`<sup>Optional</sup> <a name="resourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy"></a>

```java
public GameliftFleetResourceCreationLimitPolicy getResourceCreationLimitPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}

---

##### `runtimeConfiguration`<sup>Optional</sup> <a name="runtimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration"></a>

```java
public GameliftFleetRuntimeConfiguration getRuntimeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

Instructions for launching server processes on each instance in the fleet.

Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception.

This parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration has replaced these parameters, but fleets that use them will continue to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#runtime_configuration GameliftFleet#runtime_configuration}

---

##### `scalingPolicies`<sup>Optional</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scalingPolicies"></a>

```java
public IResolvable|java.util.List<GameliftFleetScalingPolicies> getScalingPolicies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>>

A list of rules that control how a fleet is scaled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#scaling_policies GameliftFleet#scaling_policies}

---

##### `scriptId`<sup>Optional</sup> <a name="scriptId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scriptId"></a>

```java
public java.lang.String getScriptId();
```

- *Type:* java.lang.String

A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet.

The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.

Note: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#script_id GameliftFleet#script_id}

---

##### `serverLaunchParameters`<sup>Optional</sup> <a name="serverLaunchParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchParameters"></a>

```java
public java.lang.String getServerLaunchParameters();
```

- *Type:* java.lang.String

This parameter is no longer used but is retained for backward compatibility.

Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#server_launch_parameters GameliftFleet#server_launch_parameters}

---

##### `serverLaunchPath`<sup>Optional</sup> <a name="serverLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchPath"></a>

```java
public java.lang.String getServerLaunchPath();
```

- *Type:* java.lang.String

This parameter is no longer used.

Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#server_launch_path GameliftFleet#server_launch_path}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GameliftFleetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#tags GameliftFleet#tags}

---

### GameliftFleetEc2InboundPermissions <a name="GameliftFleetEc2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetEc2InboundPermissions;

GameliftFleetEc2InboundPermissions.builder()
//  .fromPort(java.lang.Number)
//  .ipRange(java.lang.String)
//  .protocol(java.lang.String)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | A starting value for a range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | A range of allowed IP addresses. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The network communication protocol used by the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | An ending value for a range of allowed port numbers. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#from_port GameliftFleet#from_port}

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

A range of allowed IP addresses.

This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#ip_range GameliftFleet#ip_range}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The network communication protocol used by the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#protocol GameliftFleet#protocol}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#to_port GameliftFleet#to_port}

---

### GameliftFleetLocations <a name="GameliftFleetLocations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetLocations;

GameliftFleetLocations.builder()
//  .location(java.lang.String)
//  .locationCapacity(GameliftFleetLocationsLocationCapacity)
//  .playerGatewayStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#location GameliftFleet#location}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.locationCapacity">locationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a></code> | Current resource capacity settings in a specified fleet or location. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.playerGatewayStatus">playerGatewayStatus</a></code> | <code>java.lang.String</code> | The player gateway status for the location. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#location GameliftFleet#location}.

---

##### `locationCapacity`<sup>Optional</sup> <a name="locationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.locationCapacity"></a>

```java
public GameliftFleetLocationsLocationCapacity getLocationCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

Current resource capacity settings in a specified fleet or location.

The location value might refer to a fleet's remote location or its home Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#location_capacity GameliftFleet#location_capacity}

---

##### `playerGatewayStatus`<sup>Optional</sup> <a name="playerGatewayStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.playerGatewayStatus"></a>

```java
public java.lang.String getPlayerGatewayStatus();
```

- *Type:* java.lang.String

The player gateway status for the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#player_gateway_status GameliftFleet#player_gateway_status}

---

### GameliftFleetLocationsLocationCapacity <a name="GameliftFleetLocationsLocationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetLocationsLocationCapacity;

GameliftFleetLocationsLocationCapacity.builder()
//  .desiredEc2Instances(java.lang.Number)
//  .managedCapacityConfiguration(GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>java.lang.Number</code> | Defaults to MinSize if not defined. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.managedCapacityConfiguration">managedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | Configuration options for Amazon GameLift Servers-managed capacity behavior. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | The maximum value that is allowed for the fleet's instance count for a location. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | The minimum value allowed for the fleet's instance count for a location. |

---

##### `desiredEc2Instances`<sup>Optional</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.desiredEc2Instances"></a>

```java
public java.lang.Number getDesiredEc2Instances();
```

- *Type:* java.lang.Number

Defaults to MinSize if not defined.

The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#desired_ec2_instances GameliftFleet#desired_ec2_instances}

---

##### `managedCapacityConfiguration`<sup>Optional</sup> <a name="managedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.managedCapacityConfiguration"></a>

```java
public GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration getManagedCapacityConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

Configuration options for Amazon GameLift Servers-managed capacity behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#managed_capacity_configuration GameliftFleet#managed_capacity_configuration}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

The maximum value that is allowed for the fleet's instance count for a location.

When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#max_size GameliftFleet#max_size}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

The minimum value allowed for the fleet's instance count for a location.

When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#min_size GameliftFleet#min_size}

---

### GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration <a name="GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration;

GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.builder()
//  .scaleInAfterInactivityMinutes(java.lang.Number)
//  .zeroCapacityStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes">scaleInAfterInactivityMinutes</a></code> | <code>java.lang.Number</code> | Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy">zeroCapacityStrategy</a></code> | <code>java.lang.String</code> | The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity. |

---

##### `scaleInAfterInactivityMinutes`<sup>Optional</sup> <a name="scaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes"></a>

```java
public java.lang.Number getScaleInAfterInactivityMinutes();
```

- *Type:* java.lang.Number

Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#scale_in_after_inactivity_minutes GameliftFleet#scale_in_after_inactivity_minutes}

---

##### `zeroCapacityStrategy`<sup>Optional</sup> <a name="zeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy"></a>

```java
public java.lang.String getZeroCapacityStrategy();
```

- *Type:* java.lang.String

The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity.

Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#zero_capacity_strategy GameliftFleet#zero_capacity_strategy}

---

### GameliftFleetPlayerGatewayConfiguration <a name="GameliftFleetPlayerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetPlayerGatewayConfiguration;

GameliftFleetPlayerGatewayConfiguration.builder()
//  .gameServerIpProtocolSupported(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration.property.gameServerIpProtocolSupported">gameServerIpProtocolSupported</a></code> | <code>java.lang.String</code> | The IP protocol supported by the game server. |

---

##### `gameServerIpProtocolSupported`<sup>Optional</sup> <a name="gameServerIpProtocolSupported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration.property.gameServerIpProtocolSupported"></a>

```java
public java.lang.String getGameServerIpProtocolSupported();
```

- *Type:* java.lang.String

The IP protocol supported by the game server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#game_server_ip_protocol_supported GameliftFleet#game_server_ip_protocol_supported}

---

### GameliftFleetResourceCreationLimitPolicy <a name="GameliftFleetResourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetResourceCreationLimitPolicy;

GameliftFleetResourceCreationLimitPolicy.builder()
//  .newGameSessionsPerCreator(java.lang.Number)
//  .policyPeriodInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator">newGameSessionsPerCreator</a></code> | <code>java.lang.Number</code> | The maximum number of game sessions that an individual can create during the policy period. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes">policyPeriodInMinutes</a></code> | <code>java.lang.Number</code> | The time span used in evaluating the resource creation limit policy. |

---

##### `newGameSessionsPerCreator`<sup>Optional</sup> <a name="newGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

```java
public java.lang.Number getNewGameSessionsPerCreator();
```

- *Type:* java.lang.Number

The maximum number of game sessions that an individual can create during the policy period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}

---

##### `policyPeriodInMinutes`<sup>Optional</sup> <a name="policyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes"></a>

```java
public java.lang.Number getPolicyPeriodInMinutes();
```

- *Type:* java.lang.Number

The time span used in evaluating the resource creation limit policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}

---

### GameliftFleetRuntimeConfiguration <a name="GameliftFleetRuntimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetRuntimeConfiguration;

GameliftFleetRuntimeConfiguration.builder()
//  .gameSessionActivationTimeoutSeconds(java.lang.Number)
//  .maxConcurrentGameSessionActivations(java.lang.Number)
//  .serverProcesses(IResolvable|java.util.List<GameliftFleetRuntimeConfigurationServerProcesses>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds">gameSessionActivationTimeoutSeconds</a></code> | <code>java.lang.Number</code> | The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations">maxConcurrentGameSessionActivations</a></code> | <code>java.lang.Number</code> | The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcesses">serverProcesses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>></code> | A collection of server process configurations that describe which server processes to run on each instance in a fleet. |

---

##### `gameSessionActivationTimeoutSeconds`<sup>Optional</sup> <a name="gameSessionActivationTimeoutSeconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds"></a>

```java
public java.lang.Number getGameSessionActivationTimeoutSeconds();
```

- *Type:* java.lang.Number

The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING.

If the game session is not active before the timeout, activation is terminated and the game session status is changed to TERMINATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}

---

##### `maxConcurrentGameSessionActivations`<sup>Optional</sup> <a name="maxConcurrentGameSessionActivations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations"></a>

```java
public java.lang.Number getMaxConcurrentGameSessionActivations();
```

- *Type:* java.lang.Number

The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously.

This setting limits the amount of instance resources that can be used for new game activations at any one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}

---

##### `serverProcesses`<sup>Optional</sup> <a name="serverProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcesses"></a>

```java
public IResolvable|java.util.List<GameliftFleetRuntimeConfigurationServerProcesses> getServerProcesses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>>

A collection of server process configurations that describe which server processes to run on each instance in a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#server_processes GameliftFleet#server_processes}

---

### GameliftFleetRuntimeConfigurationServerProcesses <a name="GameliftFleetRuntimeConfigurationServerProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetRuntimeConfigurationServerProcesses;

GameliftFleetRuntimeConfigurationServerProcesses.builder()
//  .concurrentExecutions(java.lang.Number)
//  .launchPath(java.lang.String)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.concurrentExecutions">concurrentExecutions</a></code> | <code>java.lang.Number</code> | The number of server processes that use this configuration to run concurrently on an instance. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.launchPath">launchPath</a></code> | <code>java.lang.String</code> | The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.parameters">parameters</a></code> | <code>java.lang.String</code> | An optional list of parameters to pass to the server executable or Realtime script on launch. |

---

##### `concurrentExecutions`<sup>Optional</sup> <a name="concurrentExecutions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.concurrentExecutions"></a>

```java
public java.lang.Number getConcurrentExecutions();
```

- *Type:* java.lang.Number

The number of server processes that use this configuration to run concurrently on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#concurrent_executions GameliftFleet#concurrent_executions}

---

##### `launchPath`<sup>Optional</sup> <a name="launchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.launchPath"></a>

```java
public java.lang.String getLaunchPath();
```

- *Type:* java.lang.String

The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function.

Game builds and Realtime scripts are installed on instances at the root:

Windows (for custom game builds only): C:\game. Example: "C:\game\MyGame\server.exe"

Linux: /local/game. Examples: "/local/game/MyGame/server.exe" or "/local/game/MyRealtimeScript.js"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#launch_path GameliftFleet#launch_path}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

An optional list of parameters to pass to the server executable or Realtime script on launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#parameters GameliftFleet#parameters}

---

### GameliftFleetScalingPolicies <a name="GameliftFleetScalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetScalingPolicies;

GameliftFleetScalingPolicies.builder()
//  .comparisonOperator(java.lang.String)
//  .evaluationPeriods(java.lang.Number)
//  .location(java.lang.String)
//  .metricName(java.lang.String)
//  .name(java.lang.String)
//  .policyType(java.lang.String)
//  .scalingAdjustment(java.lang.Number)
//  .scalingAdjustmentType(java.lang.String)
//  .status(java.lang.String)
//  .targetConfiguration(GameliftFleetScalingPoliciesTargetConfiguration)
//  .threshold(java.lang.Number)
//  .updateStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | Comparison operator to use when measuring a metric against the threshold value. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#location GameliftFleet#location}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.name">name</a></code> | <code>java.lang.String</code> | A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.policyType">policyType</a></code> | <code>java.lang.String</code> | The type of scaling policy to create. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustment">scalingAdjustment</a></code> | <code>java.lang.Number</code> | Amount of adjustment to make, based on the scaling adjustment type. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustmentType">scalingAdjustmentType</a></code> | <code>java.lang.String</code> | The type of adjustment to make to a fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.status">status</a></code> | <code>java.lang.String</code> | Current status of the scaling policy. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a></code> | An object that contains settings for a target-based scaling policy. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Metric value used to trigger a scaling event. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.updateStatus">updateStatus</a></code> | <code>java.lang.String</code> | The current status of the fleet's scaling policies in a requested fleet location. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

Comparison operator to use when measuring a metric against the threshold value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#comparison_operator GameliftFleet#comparison_operator}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#evaluation_periods GameliftFleet#evaluation_periods}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#location GameliftFleet#location}.

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.

This is required for RuleBased and TargetBased policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#metric_name GameliftFleet#metric_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#name GameliftFleet#name}

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

The type of scaling policy to create.

For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#policy_type GameliftFleet#policy_type}

---

##### `scalingAdjustment`<sup>Optional</sup> <a name="scalingAdjustment" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustment"></a>

```java
public java.lang.Number getScalingAdjustment();
```

- *Type:* java.lang.Number

Amount of adjustment to make, based on the scaling adjustment type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#scaling_adjustment GameliftFleet#scaling_adjustment}

---

##### `scalingAdjustmentType`<sup>Optional</sup> <a name="scalingAdjustmentType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustmentType"></a>

```java
public java.lang.String getScalingAdjustmentType();
```

- *Type:* java.lang.String

The type of adjustment to make to a fleet's instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#scaling_adjustment_type GameliftFleet#scaling_adjustment_type}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Current status of the scaling policy.

The scaling policy can be in force only when in an ACTIVE status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#status GameliftFleet#status}

---

##### `targetConfiguration`<sup>Optional</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.targetConfiguration"></a>

```java
public GameliftFleetScalingPoliciesTargetConfiguration getTargetConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

An object that contains settings for a target-based scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#target_configuration GameliftFleet#target_configuration}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Metric value used to trigger a scaling event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#threshold GameliftFleet#threshold}

---

##### `updateStatus`<sup>Optional</sup> <a name="updateStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.updateStatus"></a>

```java
public java.lang.String getUpdateStatus();
```

- *Type:* java.lang.String

The current status of the fleet's scaling policies in a requested fleet location.

The status PENDING_UPDATE indicates that an update was requested for the fleet but has not yet been completed for the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#update_status GameliftFleet#update_status}

---

### GameliftFleetScalingPoliciesTargetConfiguration <a name="GameliftFleetScalingPoliciesTargetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetScalingPoliciesTargetConfiguration;

GameliftFleetScalingPoliciesTargetConfiguration.builder()
//  .targetValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | Desired value to use with a target-based scaling policy. |

---

##### `targetValue`<sup>Optional</sup> <a name="targetValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

Desired value to use with a target-based scaling policy.

The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#target_value GameliftFleet#target_value}

---

### GameliftFleetTags <a name="GameliftFleetTags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetTags;

GameliftFleetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#key GameliftFleet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_fleet#value GameliftFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftFleetAnywhereConfigurationOutputReference <a name="GameliftFleetAnywhereConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetAnywhereConfigurationOutputReference;

new GameliftFleetAnywhereConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resetCost">resetCost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCost` <a name="resetCost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resetCost"></a>

```java
public void resetCost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.costInput">costInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.cost">cost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costInput`<sup>Optional</sup> <a name="costInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.costInput"></a>

```java
public java.lang.String getCostInput();
```

- *Type:* java.lang.String

---

##### `cost`<sup>Required</sup> <a name="cost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.cost"></a>

```java
public java.lang.String getCost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetAnywhereConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

---


### GameliftFleetCertificateConfigurationOutputReference <a name="GameliftFleetCertificateConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetCertificateConfigurationOutputReference;

new GameliftFleetCertificateConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType">resetCertificateType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateType` <a name="resetCertificateType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType"></a>

```java
public void resetCertificateType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput">certificateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType">certificateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateTypeInput`<sup>Optional</sup> <a name="certificateTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput"></a>

```java
public java.lang.String getCertificateTypeInput();
```

- *Type:* java.lang.String

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType"></a>

```java
public java.lang.String getCertificateType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetCertificateConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---


### GameliftFleetEc2InboundPermissionsList <a name="GameliftFleetEc2InboundPermissionsList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetEc2InboundPermissionsList;

new GameliftFleetEc2InboundPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.get"></a>

```java
public GameliftFleetEc2InboundPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftFleetEc2InboundPermissions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>>

---


### GameliftFleetEc2InboundPermissionsOutputReference <a name="GameliftFleetEc2InboundPermissionsOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetEc2InboundPermissionsOutputReference;

new GameliftFleetEc2InboundPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetIpRange">resetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetIpRange` <a name="resetIpRange" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetIpRange"></a>

```java
public void resetIpRange()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetToPort"></a>

```java
public void resetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRangeInput">ipRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRangeInput"></a>

```java
public java.lang.String getIpRangeInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetEc2InboundPermissions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>

---


### GameliftFleetLocationsList <a name="GameliftFleetLocationsList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetLocationsList;

new GameliftFleetLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.get"></a>

```java
public GameliftFleetLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftFleetLocations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>>

---


### GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference <a name="GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference;

new GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes">resetScaleInAfterInactivityMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy">resetZeroCapacityStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScaleInAfterInactivityMinutes` <a name="resetScaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes"></a>

```java
public void resetScaleInAfterInactivityMinutes()
```

##### `resetZeroCapacityStrategy` <a name="resetZeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy"></a>

```java
public void resetZeroCapacityStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput">scaleInAfterInactivityMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput">zeroCapacityStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes">scaleInAfterInactivityMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy">zeroCapacityStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleInAfterInactivityMinutesInput`<sup>Optional</sup> <a name="scaleInAfterInactivityMinutesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput"></a>

```java
public java.lang.Number getScaleInAfterInactivityMinutesInput();
```

- *Type:* java.lang.Number

---

##### `zeroCapacityStrategyInput`<sup>Optional</sup> <a name="zeroCapacityStrategyInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput"></a>

```java
public java.lang.String getZeroCapacityStrategyInput();
```

- *Type:* java.lang.String

---

##### `scaleInAfterInactivityMinutes`<sup>Required</sup> <a name="scaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes"></a>

```java
public java.lang.Number getScaleInAfterInactivityMinutes();
```

- *Type:* java.lang.Number

---

##### `zeroCapacityStrategy`<sup>Required</sup> <a name="zeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy"></a>

```java
public java.lang.String getZeroCapacityStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---


### GameliftFleetLocationsLocationCapacityOutputReference <a name="GameliftFleetLocationsLocationCapacityOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetLocationsLocationCapacityOutputReference;

new GameliftFleetLocationsLocationCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration">putManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances">resetDesiredEc2Instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration">resetManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMinSize">resetMinSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedCapacityConfiguration` <a name="putManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration"></a>

```java
public void putManagedCapacityConfiguration(GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `resetDesiredEc2Instances` <a name="resetDesiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances"></a>

```java
public void resetDesiredEc2Instances()
```

##### `resetManagedCapacityConfiguration` <a name="resetManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration"></a>

```java
public void resetManagedCapacityConfiguration()
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMaxSize"></a>

```java
public void resetMaxSize()
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMinSize"></a>

```java
public void resetMinSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration">managedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput">desiredEc2InstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput">managedCapacityConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSizeInput">maxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedCapacityConfiguration`<sup>Required</sup> <a name="managedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration"></a>

```java
public GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference getManagedCapacityConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a>

---

##### `desiredEc2InstancesInput`<sup>Optional</sup> <a name="desiredEc2InstancesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput"></a>

```java
public java.lang.Number getDesiredEc2InstancesInput();
```

- *Type:* java.lang.Number

---

##### `managedCapacityConfigurationInput`<sup>Optional</sup> <a name="managedCapacityConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput"></a>

```java
public IResolvable|GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration getManagedCapacityConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSizeInput"></a>

```java
public java.lang.Number getMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `desiredEc2Instances`<sup>Required</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances"></a>

```java
public java.lang.Number getDesiredEc2Instances();
```

- *Type:* java.lang.Number

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetLocationsLocationCapacity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

---


### GameliftFleetLocationsOutputReference <a name="GameliftFleetLocationsOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetLocationsOutputReference;

new GameliftFleetLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity">putLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocationCapacity">resetLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetPlayerGatewayStatus">resetPlayerGatewayStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocationCapacity` <a name="putLocationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity"></a>

```java
public void putLocationCapacity(GameliftFleetLocationsLocationCapacity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

---

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetLocationCapacity` <a name="resetLocationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocationCapacity"></a>

```java
public void resetLocationCapacity()
```

##### `resetPlayerGatewayStatus` <a name="resetPlayerGatewayStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetPlayerGatewayStatus"></a>

```java
public void resetPlayerGatewayStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacity">locationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference">GameliftFleetLocationsLocationCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacityInput">locationCapacityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatusInput">playerGatewayStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatus">playerGatewayStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationCapacity`<sup>Required</sup> <a name="locationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacity"></a>

```java
public GameliftFleetLocationsLocationCapacityOutputReference getLocationCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference">GameliftFleetLocationsLocationCapacityOutputReference</a>

---

##### `locationCapacityInput`<sup>Optional</sup> <a name="locationCapacityInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacityInput"></a>

```java
public IResolvable|GameliftFleetLocationsLocationCapacity getLocationCapacityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `playerGatewayStatusInput`<sup>Optional</sup> <a name="playerGatewayStatusInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatusInput"></a>

```java
public java.lang.String getPlayerGatewayStatusInput();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `playerGatewayStatus`<sup>Required</sup> <a name="playerGatewayStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatus"></a>

```java
public java.lang.String getPlayerGatewayStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetLocations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>

---


### GameliftFleetPlayerGatewayConfigurationOutputReference <a name="GameliftFleetPlayerGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetPlayerGatewayConfigurationOutputReference;

new GameliftFleetPlayerGatewayConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resetGameServerIpProtocolSupported">resetGameServerIpProtocolSupported</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGameServerIpProtocolSupported` <a name="resetGameServerIpProtocolSupported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resetGameServerIpProtocolSupported"></a>

```java
public void resetGameServerIpProtocolSupported()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupportedInput">gameServerIpProtocolSupportedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupported">gameServerIpProtocolSupported</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gameServerIpProtocolSupportedInput`<sup>Optional</sup> <a name="gameServerIpProtocolSupportedInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupportedInput"></a>

```java
public java.lang.String getGameServerIpProtocolSupportedInput();
```

- *Type:* java.lang.String

---

##### `gameServerIpProtocolSupported`<sup>Required</sup> <a name="gameServerIpProtocolSupported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupported"></a>

```java
public java.lang.String getGameServerIpProtocolSupported();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetPlayerGatewayConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

---


### GameliftFleetResourceCreationLimitPolicyOutputReference <a name="GameliftFleetResourceCreationLimitPolicyOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetResourceCreationLimitPolicyOutputReference;

new GameliftFleetResourceCreationLimitPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator">resetNewGameSessionsPerCreator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes">resetPolicyPeriodInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNewGameSessionsPerCreator` <a name="resetNewGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator"></a>

```java
public void resetNewGameSessionsPerCreator()
```

##### `resetPolicyPeriodInMinutes` <a name="resetPolicyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes"></a>

```java
public void resetPolicyPeriodInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput">newGameSessionsPerCreatorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput">policyPeriodInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">newGameSessionsPerCreator</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">policyPeriodInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `newGameSessionsPerCreatorInput`<sup>Optional</sup> <a name="newGameSessionsPerCreatorInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput"></a>

```java
public java.lang.Number getNewGameSessionsPerCreatorInput();
```

- *Type:* java.lang.Number

---

##### `policyPeriodInMinutesInput`<sup>Optional</sup> <a name="policyPeriodInMinutesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput"></a>

```java
public java.lang.Number getPolicyPeriodInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `newGameSessionsPerCreator`<sup>Required</sup> <a name="newGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```java
public java.lang.Number getNewGameSessionsPerCreator();
```

- *Type:* java.lang.Number

---

##### `policyPeriodInMinutes`<sup>Required</sup> <a name="policyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```java
public java.lang.Number getPolicyPeriodInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetResourceCreationLimitPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---


### GameliftFleetRuntimeConfigurationOutputReference <a name="GameliftFleetRuntimeConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetRuntimeConfigurationOutputReference;

new GameliftFleetRuntimeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcesses">putServerProcesses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds">resetGameSessionActivationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations">resetMaxConcurrentGameSessionActivations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcesses">resetServerProcesses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerProcesses` <a name="putServerProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcesses"></a>

```java
public void putServerProcesses(IResolvable|java.util.List<GameliftFleetRuntimeConfigurationServerProcesses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcesses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>>

---

##### `resetGameSessionActivationTimeoutSeconds` <a name="resetGameSessionActivationTimeoutSeconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds"></a>

```java
public void resetGameSessionActivationTimeoutSeconds()
```

##### `resetMaxConcurrentGameSessionActivations` <a name="resetMaxConcurrentGameSessionActivations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations"></a>

```java
public void resetMaxConcurrentGameSessionActivations()
```

##### `resetServerProcesses` <a name="resetServerProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcesses"></a>

```java
public void resetServerProcesses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcesses">serverProcesses</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList">GameliftFleetRuntimeConfigurationServerProcessesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput">gameSessionActivationTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput">maxConcurrentGameSessionActivationsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessesInput">serverProcessesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds">gameSessionActivationTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations">maxConcurrentGameSessionActivations</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverProcesses`<sup>Required</sup> <a name="serverProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcesses"></a>

```java
public GameliftFleetRuntimeConfigurationServerProcessesList getServerProcesses();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList">GameliftFleetRuntimeConfigurationServerProcessesList</a>

---

##### `gameSessionActivationTimeoutSecondsInput`<sup>Optional</sup> <a name="gameSessionActivationTimeoutSecondsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput"></a>

```java
public java.lang.Number getGameSessionActivationTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentGameSessionActivationsInput`<sup>Optional</sup> <a name="maxConcurrentGameSessionActivationsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput"></a>

```java
public java.lang.Number getMaxConcurrentGameSessionActivationsInput();
```

- *Type:* java.lang.Number

---

##### `serverProcessesInput`<sup>Optional</sup> <a name="serverProcessesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessesInput"></a>

```java
public IResolvable|java.util.List<GameliftFleetRuntimeConfigurationServerProcesses> getServerProcessesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>>

---

##### `gameSessionActivationTimeoutSeconds`<sup>Required</sup> <a name="gameSessionActivationTimeoutSeconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds"></a>

```java
public java.lang.Number getGameSessionActivationTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentGameSessionActivations`<sup>Required</sup> <a name="maxConcurrentGameSessionActivations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations"></a>

```java
public java.lang.Number getMaxConcurrentGameSessionActivations();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetRuntimeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---


### GameliftFleetRuntimeConfigurationServerProcessesList <a name="GameliftFleetRuntimeConfigurationServerProcessesList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetRuntimeConfigurationServerProcessesList;

new GameliftFleetRuntimeConfigurationServerProcessesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.get"></a>

```java
public GameliftFleetRuntimeConfigurationServerProcessesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftFleetRuntimeConfigurationServerProcesses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>>

---


### GameliftFleetRuntimeConfigurationServerProcessesOutputReference <a name="GameliftFleetRuntimeConfigurationServerProcessesOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference;

new GameliftFleetRuntimeConfigurationServerProcessesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetConcurrentExecutions">resetConcurrentExecutions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetLaunchPath">resetLaunchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConcurrentExecutions` <a name="resetConcurrentExecutions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetConcurrentExecutions"></a>

```java
public void resetConcurrentExecutions()
```

##### `resetLaunchPath` <a name="resetLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetLaunchPath"></a>

```java
public void resetLaunchPath()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutionsInput">concurrentExecutionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPathInput">launchPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutions">concurrentExecutions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPath">launchPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `concurrentExecutionsInput`<sup>Optional</sup> <a name="concurrentExecutionsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutionsInput"></a>

```java
public java.lang.Number getConcurrentExecutionsInput();
```

- *Type:* java.lang.Number

---

##### `launchPathInput`<sup>Optional</sup> <a name="launchPathInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPathInput"></a>

```java
public java.lang.String getLaunchPathInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `concurrentExecutions`<sup>Required</sup> <a name="concurrentExecutions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutions"></a>

```java
public java.lang.Number getConcurrentExecutions();
```

- *Type:* java.lang.Number

---

##### `launchPath`<sup>Required</sup> <a name="launchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPath"></a>

```java
public java.lang.String getLaunchPath();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetRuntimeConfigurationServerProcesses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>

---


### GameliftFleetScalingPoliciesList <a name="GameliftFleetScalingPoliciesList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetScalingPoliciesList;

new GameliftFleetScalingPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.get"></a>

```java
public GameliftFleetScalingPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftFleetScalingPolicies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>>

---


### GameliftFleetScalingPoliciesOutputReference <a name="GameliftFleetScalingPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetScalingPoliciesOutputReference;

new GameliftFleetScalingPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.putTargetConfiguration">putTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetPolicyType">resetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustment">resetScalingAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustmentType">resetScalingAdjustmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetTargetConfiguration">resetTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetUpdateStatus">resetUpdateStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetConfiguration` <a name="putTargetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.putTargetConfiguration"></a>

```java
public void putTargetConfiguration(GameliftFleetScalingPoliciesTargetConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.putTargetConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

---

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetComparisonOperator"></a>

```java
public void resetComparisonOperator()
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetMetricName"></a>

```java
public void resetMetricName()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetPolicyType"></a>

```java
public void resetPolicyType()
```

##### `resetScalingAdjustment` <a name="resetScalingAdjustment" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustment"></a>

```java
public void resetScalingAdjustment()
```

##### `resetScalingAdjustmentType` <a name="resetScalingAdjustmentType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustmentType"></a>

```java
public void resetScalingAdjustmentType()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTargetConfiguration` <a name="resetTargetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetTargetConfiguration"></a>

```java
public void resetTargetConfiguration()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```

##### `resetUpdateStatus` <a name="resetUpdateStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetUpdateStatus"></a>

```java
public void resetUpdateStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference">GameliftFleetScalingPoliciesTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput">scalingAdjustmentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput">scalingAdjustmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfigurationInput">targetConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatusInput">updateStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustment">scalingAdjustment</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentType">scalingAdjustmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatus">updateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetConfiguration`<sup>Required</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfiguration"></a>

```java
public GameliftFleetScalingPoliciesTargetConfigurationOutputReference getTargetConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference">GameliftFleetScalingPoliciesTargetConfigurationOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `scalingAdjustmentInput`<sup>Optional</sup> <a name="scalingAdjustmentInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput"></a>

```java
public java.lang.Number getScalingAdjustmentInput();
```

- *Type:* java.lang.Number

---

##### `scalingAdjustmentTypeInput`<sup>Optional</sup> <a name="scalingAdjustmentTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput"></a>

```java
public java.lang.String getScalingAdjustmentTypeInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `targetConfigurationInput`<sup>Optional</sup> <a name="targetConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfigurationInput"></a>

```java
public IResolvable|GameliftFleetScalingPoliciesTargetConfiguration getTargetConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `updateStatusInput`<sup>Optional</sup> <a name="updateStatusInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatusInput"></a>

```java
public java.lang.String getUpdateStatusInput();
```

- *Type:* java.lang.String

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `scalingAdjustment`<sup>Required</sup> <a name="scalingAdjustment" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustment"></a>

```java
public java.lang.Number getScalingAdjustment();
```

- *Type:* java.lang.Number

---

##### `scalingAdjustmentType`<sup>Required</sup> <a name="scalingAdjustmentType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentType"></a>

```java
public java.lang.String getScalingAdjustmentType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `updateStatus`<sup>Required</sup> <a name="updateStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatus"></a>

```java
public java.lang.String getUpdateStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetScalingPolicies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>

---


### GameliftFleetScalingPoliciesTargetConfigurationOutputReference <a name="GameliftFleetScalingPoliciesTargetConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference;

new GameliftFleetScalingPoliciesTargetConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue">resetTargetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetValue` <a name="resetTargetValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue"></a>

```java
public void resetTargetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput"></a>

```java
public java.lang.Number getTargetValueInput();
```

- *Type:* java.lang.Number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetScalingPoliciesTargetConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

---


### GameliftFleetTagsList <a name="GameliftFleetTagsList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetTagsList;

new GameliftFleetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.get"></a>

```java
public GameliftFleetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftFleetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>>

---


### GameliftFleetTagsOutputReference <a name="GameliftFleetTagsOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_fleet.GameliftFleetTagsOutputReference;

new GameliftFleetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftFleetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>

---



