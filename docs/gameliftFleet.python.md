# `gameliftFleet` Submodule <a name="`gameliftFleet` Submodule" id="@cdktn/provider-awscc.gameliftFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftFleet <a name="GameliftFleet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet awscc_gamelift_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  anywhere_configuration: GameliftFleetAnywhereConfiguration = None,
  apply_capacity: str = None,
  build_id: str = None,
  certificate_configuration: GameliftFleetCertificateConfiguration = None,
  compute_type: str = None,
  description: str = None,
  desired_ec2_instances: typing.Union[int, float] = None,
  ec2_inbound_permissions: IResolvable | typing.List[GameliftFleetEc2InboundPermissions] = None,
  ec2_instance_type: str = None,
  fleet_type: str = None,
  instance_role_arn: str = None,
  instance_role_credentials_provider: str = None,
  locations: IResolvable | typing.List[GameliftFleetLocations] = None,
  log_paths: typing.List[str] = None,
  max_size: typing.Union[int, float] = None,
  metric_groups: typing.List[str] = None,
  min_size: typing.Union[int, float] = None,
  new_game_session_protection_policy: str = None,
  peer_vpc_aws_account_id: str = None,
  peer_vpc_id: str = None,
  player_gateway_configuration: GameliftFleetPlayerGatewayConfiguration = None,
  player_gateway_mode: str = None,
  resource_creation_limit_policy: GameliftFleetResourceCreationLimitPolicy = None,
  runtime_configuration: GameliftFleetRuntimeConfiguration = None,
  scaling_policies: IResolvable | typing.List[GameliftFleetScalingPolicies] = None,
  script_id: str = None,
  server_launch_parameters: str = None,
  server_launch_path: str = None,
  tags: IResolvable | typing.List[GameliftFleetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.name">name</a></code> | <code>str</code> | A descriptive label that is associated with a fleet. Fleet names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.anywhereConfiguration">anywhere_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | Configuration for Anywhere fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.applyCapacity">apply_capacity</a></code> | <code>str</code> | Determines when and how to apply fleet or location capacities. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.buildId">build_id</a></code> | <code>str</code> | A unique identifier for a build to be deployed on the new fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.certificateConfiguration">certificate_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | Indicates whether to generate a TLS/SSL certificate for the new fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.computeType">compute_type</a></code> | <code>str</code> | ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.desiredEc2Instances">desired_ec2_instances</a></code> | <code>typing.Union[int, float]</code> | [DEPRECATED] The number of EC2 instances that you want this fleet to host. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.ec2InboundPermissions">ec2_inbound_permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>]</code> | A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.ec2InstanceType">ec2_instance_type</a></code> | <code>str</code> | The name of an EC2 instance type that is supported in Amazon GameLift. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.fleetType">fleet_type</a></code> | <code>str</code> | Indicates whether to use On-Demand instances or Spot instances for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.instanceRoleArn">instance_role_arn</a></code> | <code>str</code> | A unique identifier for an AWS IAM role that manages access to your AWS services. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.instanceRoleCredentialsProvider">instance_role_credentials_provider</a></code> | <code>str</code> | Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.locations">locations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#locations GameliftFleet#locations}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.logPaths">log_paths</a></code> | <code>typing.List[str]</code> | This parameter is no longer used. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | [DEPRECATED] The maximum value that is allowed for the fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.metricGroups">metric_groups</a></code> | <code>typing.List[str]</code> | The name of an Amazon CloudWatch metric group. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | [DEPRECATED] The minimum value allowed for the fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.newGameSessionProtectionPolicy">new_game_session_protection_policy</a></code> | <code>str</code> | A game session protection policy to apply to all game sessions hosted on instances in this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.peerVpcAwsAccountId">peer_vpc_aws_account_id</a></code> | <code>str</code> | A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.playerGatewayConfiguration">player_gateway_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | Configuration for player gateway. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.playerGatewayMode">player_gateway_mode</a></code> | <code>str</code> | The player gateway mode for the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.resourceCreationLimitPolicy">resource_creation_limit_policy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | A policy that limits the number of game sessions an individual player can create over a span of time for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.runtimeConfiguration">runtime_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | Instructions for launching server processes on each instance in the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scalingPolicies">scaling_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>]</code> | A list of rules that control how a fleet is scaled. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scriptId">script_id</a></code> | <code>str</code> | A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.serverLaunchParameters">server_launch_parameters</a></code> | <code>str</code> | This parameter is no longer used but is retained for backward compatibility. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.serverLaunchPath">server_launch_path</a></code> | <code>str</code> | This parameter is no longer used. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.name"></a>

- *Type:* str

A descriptive label that is associated with a fleet. Fleet names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#name GameliftFleet#name}

---

##### `anywhere_configuration`<sup>Optional</sup> <a name="anywhere_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.anywhereConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

Configuration for Anywhere fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#anywhere_configuration GameliftFleet#anywhere_configuration}

---

##### `apply_capacity`<sup>Optional</sup> <a name="apply_capacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.applyCapacity"></a>

- *Type:* str

Determines when and how to apply fleet or location capacities.

Allowed options are ON_UPDATE (default), ON_CREATE_AND_UPDATE and ON_CREATE_AND_UPDATE_WITH_AUTOSCALING. If you choose ON_CREATE_AND_UPDATE_WITH_AUTOSCALING, MinSize and MaxSize will still be applied on creation and on updates, but DesiredEC2Instances will only be applied once on fleet creation and will be ignored during updates to prevent conflicts with auto-scaling. During updates with ON_CREATE_AND_UPDATE_WITH_AUTOSCALING chosen, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#apply_capacity GameliftFleet#apply_capacity}

---

##### `build_id`<sup>Optional</sup> <a name="build_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.buildId"></a>

- *Type:* str

A unique identifier for a build to be deployed on the new fleet.

If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#build_id GameliftFleet#build_id}

---

##### `certificate_configuration`<sup>Optional</sup> <a name="certificate_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.certificateConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

Indicates whether to generate a TLS/SSL certificate for the new fleet.

TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not set, certificate generation is disabled. This fleet setting cannot be changed once the fleet is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#certificate_configuration GameliftFleet#certificate_configuration}

---

##### `compute_type`<sup>Optional</sup> <a name="compute_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.computeType"></a>

- *Type:* str

ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#compute_type GameliftFleet#compute_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#description GameliftFleet#description}

---

##### `desired_ec2_instances`<sup>Optional</sup> <a name="desired_ec2_instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.desiredEc2Instances"></a>

- *Type:* typing.Union[int, float]

[DEPRECATED] The number of EC2 instances that you want this fleet to host.

When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#desired_ec2_instances GameliftFleet#desired_ec2_instances}

---

##### `ec2_inbound_permissions`<sup>Optional</sup> <a name="ec2_inbound_permissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.ec2InboundPermissions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>]

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#ec2_inbound_permissions GameliftFleet#ec2_inbound_permissions}

---

##### `ec2_instance_type`<sup>Optional</sup> <a name="ec2_instance_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.ec2InstanceType"></a>

- *Type:* str

The name of an EC2 instance type that is supported in Amazon GameLift.

A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}

---

##### `fleet_type`<sup>Optional</sup> <a name="fleet_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.fleetType"></a>

- *Type:* str

Indicates whether to use On-Demand instances or Spot instances for this fleet.

If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#fleet_type GameliftFleet#fleet_type}

---

##### `instance_role_arn`<sup>Optional</sup> <a name="instance_role_arn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.instanceRoleArn"></a>

- *Type:* str

A unique identifier for an AWS IAM role that manages access to your AWS services.

With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}

---

##### `instance_role_credentials_provider`<sup>Optional</sup> <a name="instance_role_credentials_provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.instanceRoleCredentialsProvider"></a>

- *Type:* str

Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#instance_role_credentials_provider GameliftFleet#instance_role_credentials_provider}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.locations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#locations GameliftFleet#locations}.

---

##### `log_paths`<sup>Optional</sup> <a name="log_paths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.logPaths"></a>

- *Type:* typing.List[str]

This parameter is no longer used.

When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#log_paths GameliftFleet#log_paths}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

[DEPRECATED] The maximum value that is allowed for the fleet's instance count.

When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#max_size GameliftFleet#max_size}

---

##### `metric_groups`<sup>Optional</sup> <a name="metric_groups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.metricGroups"></a>

- *Type:* typing.List[str]

The name of an Amazon CloudWatch metric group.

A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#metric_groups GameliftFleet#metric_groups}

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

[DEPRECATED] The minimum value allowed for the fleet's instance count.

When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#min_size GameliftFleet#min_size}

---

##### `new_game_session_protection_policy`<sup>Optional</sup> <a name="new_game_session_protection_policy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.newGameSessionProtectionPolicy"></a>

- *Type:* str

A game session protection policy to apply to all game sessions hosted on instances in this fleet.

When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}

---

##### `peer_vpc_aws_account_id`<sup>Optional</sup> <a name="peer_vpc_aws_account_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.peerVpcAwsAccountId"></a>

- *Type:* str

A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with.

You can find your account ID in the AWS Management Console under account settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#peer_vpc_aws_account_id GameliftFleet#peer_vpc_aws_account_id}

---

##### `peer_vpc_id`<sup>Optional</sup> <a name="peer_vpc_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.peerVpcId"></a>

- *Type:* str

A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet.

The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#peer_vpc_id GameliftFleet#peer_vpc_id}

---

##### `player_gateway_configuration`<sup>Optional</sup> <a name="player_gateway_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.playerGatewayConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

Configuration for player gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#player_gateway_configuration GameliftFleet#player_gateway_configuration}

---

##### `player_gateway_mode`<sup>Optional</sup> <a name="player_gateway_mode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.playerGatewayMode"></a>

- *Type:* str

The player gateway mode for the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#player_gateway_mode GameliftFleet#player_gateway_mode}

---

##### `resource_creation_limit_policy`<sup>Optional</sup> <a name="resource_creation_limit_policy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.resourceCreationLimitPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}

---

##### `runtime_configuration`<sup>Optional</sup> <a name="runtime_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.runtimeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

Instructions for launching server processes on each instance in the fleet.

Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception.

This parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration has replaced these parameters, but fleets that use them will continue to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#runtime_configuration GameliftFleet#runtime_configuration}

---

##### `scaling_policies`<sup>Optional</sup> <a name="scaling_policies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scalingPolicies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>]

A list of rules that control how a fleet is scaled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#scaling_policies GameliftFleet#scaling_policies}

---

##### `script_id`<sup>Optional</sup> <a name="script_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scriptId"></a>

- *Type:* str

A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet.

The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.

Note: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#script_id GameliftFleet#script_id}

---

##### `server_launch_parameters`<sup>Optional</sup> <a name="server_launch_parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.serverLaunchParameters"></a>

- *Type:* str

This parameter is no longer used but is retained for backward compatibility.

Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#server_launch_parameters GameliftFleet#server_launch_parameters}

---

##### `server_launch_path`<sup>Optional</sup> <a name="server_launch_path" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.serverLaunchPath"></a>

- *Type:* str

This parameter is no longer used.

Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#server_launch_path GameliftFleet#server_launch_path}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#tags GameliftFleet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putAnywhereConfiguration">put_anywhere_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putCertificateConfiguration">put_certificate_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putEc2InboundPermissions">put_ec2_inbound_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putLocations">put_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putPlayerGatewayConfiguration">put_player_gateway_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy">put_resource_creation_limit_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration">put_runtime_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putScalingPolicies">put_scaling_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetAnywhereConfiguration">reset_anywhere_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetApplyCapacity">reset_apply_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetBuildId">reset_build_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetCertificateConfiguration">reset_certificate_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetComputeType">reset_compute_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDesiredEc2Instances">reset_desired_ec2_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InboundPermissions">reset_ec2_inbound_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InstanceType">reset_ec2_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetFleetType">reset_fleet_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleArn">reset_instance_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleCredentialsProvider">reset_instance_role_credentials_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLocations">reset_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLogPaths">reset_log_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMetricGroups">reset_metric_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMinSize">reset_min_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy">reset_new_game_session_protection_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcAwsAccountId">reset_peer_vpc_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcId">reset_peer_vpc_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayConfiguration">reset_player_gateway_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayMode">reset_player_gateway_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy">reset_resource_creation_limit_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetRuntimeConfiguration">reset_runtime_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScalingPolicies">reset_scaling_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScriptId">reset_script_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchParameters">reset_server_launch_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchPath">reset_server_launch_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_anywhere_configuration` <a name="put_anywhere_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putAnywhereConfiguration"></a>

```python
def put_anywhere_configuration(
  cost: str = None
) -> None
```

###### `cost`<sup>Optional</sup> <a name="cost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putAnywhereConfiguration.parameter.cost"></a>

- *Type:* str

Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#cost GameliftFleet#cost}

---

##### `put_certificate_configuration` <a name="put_certificate_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putCertificateConfiguration"></a>

```python
def put_certificate_configuration(
  certificate_type: str = None
) -> None
```

###### `certificate_type`<sup>Optional</sup> <a name="certificate_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putCertificateConfiguration.parameter.certificateType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#certificate_type GameliftFleet#certificate_type}.

---

##### `put_ec2_inbound_permissions` <a name="put_ec2_inbound_permissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putEc2InboundPermissions"></a>

```python
def put_ec2_inbound_permissions(
  value: IResolvable | typing.List[GameliftFleetEc2InboundPermissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putEc2InboundPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>]

---

##### `put_locations` <a name="put_locations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putLocations"></a>

```python
def put_locations(
  value: IResolvable | typing.List[GameliftFleetLocations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putLocations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>]

---

##### `put_player_gateway_configuration` <a name="put_player_gateway_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putPlayerGatewayConfiguration"></a>

```python
def put_player_gateway_configuration(
  game_server_ip_protocol_supported: str = None
) -> None
```

###### `game_server_ip_protocol_supported`<sup>Optional</sup> <a name="game_server_ip_protocol_supported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putPlayerGatewayConfiguration.parameter.gameServerIpProtocolSupported"></a>

- *Type:* str

The IP protocol supported by the game server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#game_server_ip_protocol_supported GameliftFleet#game_server_ip_protocol_supported}

---

##### `put_resource_creation_limit_policy` <a name="put_resource_creation_limit_policy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy"></a>

```python
def put_resource_creation_limit_policy(
  new_game_sessions_per_creator: typing.Union[int, float] = None,
  policy_period_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `new_game_sessions_per_creator`<sup>Optional</sup> <a name="new_game_sessions_per_creator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy.parameter.newGameSessionsPerCreator"></a>

- *Type:* typing.Union[int, float]

The maximum number of game sessions that an individual can create during the policy period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}

---

###### `policy_period_in_minutes`<sup>Optional</sup> <a name="policy_period_in_minutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy.parameter.policyPeriodInMinutes"></a>

- *Type:* typing.Union[int, float]

The time span used in evaluating the resource creation limit policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}

---

##### `put_runtime_configuration` <a name="put_runtime_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration"></a>

```python
def put_runtime_configuration(
  game_session_activation_timeout_seconds: typing.Union[int, float] = None,
  max_concurrent_game_session_activations: typing.Union[int, float] = None,
  server_processes: IResolvable | typing.List[GameliftFleetRuntimeConfigurationServerProcesses] = None
) -> None
```

###### `game_session_activation_timeout_seconds`<sup>Optional</sup> <a name="game_session_activation_timeout_seconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration.parameter.gameSessionActivationTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING.

If the game session is not active before the timeout, activation is terminated and the game session status is changed to TERMINATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}

---

###### `max_concurrent_game_session_activations`<sup>Optional</sup> <a name="max_concurrent_game_session_activations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration.parameter.maxConcurrentGameSessionActivations"></a>

- *Type:* typing.Union[int, float]

The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously.

This setting limits the amount of instance resources that can be used for new game activations at any one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}

---

###### `server_processes`<sup>Optional</sup> <a name="server_processes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration.parameter.serverProcesses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>]

A collection of server process configurations that describe which server processes to run on each instance in a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#server_processes GameliftFleet#server_processes}

---

##### `put_scaling_policies` <a name="put_scaling_policies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putScalingPolicies"></a>

```python
def put_scaling_policies(
  value: IResolvable | typing.List[GameliftFleetScalingPolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putScalingPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GameliftFleetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>]

---

##### `reset_anywhere_configuration` <a name="reset_anywhere_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetAnywhereConfiguration"></a>

```python
def reset_anywhere_configuration() -> None
```

##### `reset_apply_capacity` <a name="reset_apply_capacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetApplyCapacity"></a>

```python
def reset_apply_capacity() -> None
```

##### `reset_build_id` <a name="reset_build_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetBuildId"></a>

```python
def reset_build_id() -> None
```

##### `reset_certificate_configuration` <a name="reset_certificate_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetCertificateConfiguration"></a>

```python
def reset_certificate_configuration() -> None
```

##### `reset_compute_type` <a name="reset_compute_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetComputeType"></a>

```python
def reset_compute_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_desired_ec2_instances` <a name="reset_desired_ec2_instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDesiredEc2Instances"></a>

```python
def reset_desired_ec2_instances() -> None
```

##### `reset_ec2_inbound_permissions` <a name="reset_ec2_inbound_permissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InboundPermissions"></a>

```python
def reset_ec2_inbound_permissions() -> None
```

##### `reset_ec2_instance_type` <a name="reset_ec2_instance_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InstanceType"></a>

```python
def reset_ec2_instance_type() -> None
```

##### `reset_fleet_type` <a name="reset_fleet_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetFleetType"></a>

```python
def reset_fleet_type() -> None
```

##### `reset_instance_role_arn` <a name="reset_instance_role_arn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleArn"></a>

```python
def reset_instance_role_arn() -> None
```

##### `reset_instance_role_credentials_provider` <a name="reset_instance_role_credentials_provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleCredentialsProvider"></a>

```python
def reset_instance_role_credentials_provider() -> None
```

##### `reset_locations` <a name="reset_locations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLocations"></a>

```python
def reset_locations() -> None
```

##### `reset_log_paths` <a name="reset_log_paths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLogPaths"></a>

```python
def reset_log_paths() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_metric_groups` <a name="reset_metric_groups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMetricGroups"></a>

```python
def reset_metric_groups() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMinSize"></a>

```python
def reset_min_size() -> None
```

##### `reset_new_game_session_protection_policy` <a name="reset_new_game_session_protection_policy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy"></a>

```python
def reset_new_game_session_protection_policy() -> None
```

##### `reset_peer_vpc_aws_account_id` <a name="reset_peer_vpc_aws_account_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcAwsAccountId"></a>

```python
def reset_peer_vpc_aws_account_id() -> None
```

##### `reset_peer_vpc_id` <a name="reset_peer_vpc_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcId"></a>

```python
def reset_peer_vpc_id() -> None
```

##### `reset_player_gateway_configuration` <a name="reset_player_gateway_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayConfiguration"></a>

```python
def reset_player_gateway_configuration() -> None
```

##### `reset_player_gateway_mode` <a name="reset_player_gateway_mode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayMode"></a>

```python
def reset_player_gateway_mode() -> None
```

##### `reset_resource_creation_limit_policy` <a name="reset_resource_creation_limit_policy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy"></a>

```python
def reset_resource_creation_limit_policy() -> None
```

##### `reset_runtime_configuration` <a name="reset_runtime_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetRuntimeConfiguration"></a>

```python
def reset_runtime_configuration() -> None
```

##### `reset_scaling_policies` <a name="reset_scaling_policies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScalingPolicies"></a>

```python
def reset_scaling_policies() -> None
```

##### `reset_script_id` <a name="reset_script_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScriptId"></a>

```python
def reset_script_id() -> None
```

##### `reset_server_launch_parameters` <a name="reset_server_launch_parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchParameters"></a>

```python
def reset_server_launch_parameters() -> None
```

##### `reset_server_launch_path` <a name="reset_server_launch_path" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchPath"></a>

```python
def reset_server_launch_path() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GameliftFleet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isConstruct"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleet.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GameliftFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GameliftFleet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GameliftFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GameliftFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfiguration">anywhere_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference">GameliftFleetAnywhereConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfiguration">certificate_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissions">ec2_inbound_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList">GameliftFleetEc2InboundPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetArn">fleet_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locations">locations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList">GameliftFleetLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfiguration">player_gateway_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference">GameliftFleetPlayerGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy">resource_creation_limit_policy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfiguration">runtime_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPolicies">scaling_policies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList">GameliftFleetScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList">GameliftFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfigurationInput">anywhere_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacityInput">apply_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildIdInput">build_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfigurationInput">certificate_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeTypeInput">compute_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2InstancesInput">desired_ec2_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissionsInput">ec2_inbound_permissions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput">ec2_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetTypeInput">fleet_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArnInput">instance_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProviderInput">instance_role_credentials_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locationsInput">locations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPathsInput">log_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroupsInput">metric_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput">new_game_session_protection_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountIdInput">peer_vpc_aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcIdInput">peer_vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfigurationInput">player_gateway_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayModeInput">player_gateway_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput">resource_creation_limit_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput">runtime_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPoliciesInput">scaling_policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptIdInput">script_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParametersInput">server_launch_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPathInput">server_launch_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacity">apply_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildId">build_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeType">compute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2Instances">desired_ec2_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceType">ec2_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetType">fleet_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArn">instance_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProvider">instance_role_credentials_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPaths">log_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroups">metric_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy">new_game_session_protection_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountId">peer_vpc_aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayMode">player_gateway_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptId">script_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParameters">server_launch_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPath">server_launch_path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `anywhere_configuration`<sup>Required</sup> <a name="anywhere_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfiguration"></a>

```python
anywhere_configuration: GameliftFleetAnywhereConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference">GameliftFleetAnywhereConfigurationOutputReference</a>

---

##### `certificate_configuration`<sup>Required</sup> <a name="certificate_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfiguration"></a>

```python
certificate_configuration: GameliftFleetCertificateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a>

---

##### `ec2_inbound_permissions`<sup>Required</sup> <a name="ec2_inbound_permissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissions"></a>

```python
ec2_inbound_permissions: GameliftFleetEc2InboundPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList">GameliftFleetEc2InboundPermissionsList</a>

---

##### `fleet_arn`<sup>Required</sup> <a name="fleet_arn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetArn"></a>

```python
fleet_arn: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locations"></a>

```python
locations: GameliftFleetLocationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList">GameliftFleetLocationsList</a>

---

##### `player_gateway_configuration`<sup>Required</sup> <a name="player_gateway_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfiguration"></a>

```python
player_gateway_configuration: GameliftFleetPlayerGatewayConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference">GameliftFleetPlayerGatewayConfigurationOutputReference</a>

---

##### `resource_creation_limit_policy`<sup>Required</sup> <a name="resource_creation_limit_policy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy"></a>

```python
resource_creation_limit_policy: GameliftFleetResourceCreationLimitPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a>

---

##### `runtime_configuration`<sup>Required</sup> <a name="runtime_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfiguration"></a>

```python
runtime_configuration: GameliftFleetRuntimeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a>

---

##### `scaling_policies`<sup>Required</sup> <a name="scaling_policies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPolicies"></a>

```python
scaling_policies: GameliftFleetScalingPoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList">GameliftFleetScalingPoliciesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tags"></a>

```python
tags: GameliftFleetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList">GameliftFleetTagsList</a>

---

##### `anywhere_configuration_input`<sup>Optional</sup> <a name="anywhere_configuration_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfigurationInput"></a>

```python
anywhere_configuration_input: IResolvable | GameliftFleetAnywhereConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

---

##### `apply_capacity_input`<sup>Optional</sup> <a name="apply_capacity_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacityInput"></a>

```python
apply_capacity_input: str
```

- *Type:* str

---

##### `build_id_input`<sup>Optional</sup> <a name="build_id_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildIdInput"></a>

```python
build_id_input: str
```

- *Type:* str

---

##### `certificate_configuration_input`<sup>Optional</sup> <a name="certificate_configuration_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfigurationInput"></a>

```python
certificate_configuration_input: IResolvable | GameliftFleetCertificateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---

##### `compute_type_input`<sup>Optional</sup> <a name="compute_type_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeTypeInput"></a>

```python
compute_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `desired_ec2_instances_input`<sup>Optional</sup> <a name="desired_ec2_instances_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2InstancesInput"></a>

```python
desired_ec2_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ec2_inbound_permissions_input`<sup>Optional</sup> <a name="ec2_inbound_permissions_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissionsInput"></a>

```python
ec2_inbound_permissions_input: IResolvable | typing.List[GameliftFleetEc2InboundPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>]

---

##### `ec2_instance_type_input`<sup>Optional</sup> <a name="ec2_instance_type_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput"></a>

```python
ec2_instance_type_input: str
```

- *Type:* str

---

##### `fleet_type_input`<sup>Optional</sup> <a name="fleet_type_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetTypeInput"></a>

```python
fleet_type_input: str
```

- *Type:* str

---

##### `instance_role_arn_input`<sup>Optional</sup> <a name="instance_role_arn_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArnInput"></a>

```python
instance_role_arn_input: str
```

- *Type:* str

---

##### `instance_role_credentials_provider_input`<sup>Optional</sup> <a name="instance_role_credentials_provider_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProviderInput"></a>

```python
instance_role_credentials_provider_input: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locationsInput"></a>

```python
locations_input: IResolvable | typing.List[GameliftFleetLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>]

---

##### `log_paths_input`<sup>Optional</sup> <a name="log_paths_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPathsInput"></a>

```python
log_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_groups_input`<sup>Optional</sup> <a name="metric_groups_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroupsInput"></a>

```python
metric_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `new_game_session_protection_policy_input`<sup>Optional</sup> <a name="new_game_session_protection_policy_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput"></a>

```python
new_game_session_protection_policy_input: str
```

- *Type:* str

---

##### `peer_vpc_aws_account_id_input`<sup>Optional</sup> <a name="peer_vpc_aws_account_id_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountIdInput"></a>

```python
peer_vpc_aws_account_id_input: str
```

- *Type:* str

---

##### `peer_vpc_id_input`<sup>Optional</sup> <a name="peer_vpc_id_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcIdInput"></a>

```python
peer_vpc_id_input: str
```

- *Type:* str

---

##### `player_gateway_configuration_input`<sup>Optional</sup> <a name="player_gateway_configuration_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfigurationInput"></a>

```python
player_gateway_configuration_input: IResolvable | GameliftFleetPlayerGatewayConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

---

##### `player_gateway_mode_input`<sup>Optional</sup> <a name="player_gateway_mode_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayModeInput"></a>

```python
player_gateway_mode_input: str
```

- *Type:* str

---

##### `resource_creation_limit_policy_input`<sup>Optional</sup> <a name="resource_creation_limit_policy_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput"></a>

```python
resource_creation_limit_policy_input: IResolvable | GameliftFleetResourceCreationLimitPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---

##### `runtime_configuration_input`<sup>Optional</sup> <a name="runtime_configuration_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput"></a>

```python
runtime_configuration_input: IResolvable | GameliftFleetRuntimeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---

##### `scaling_policies_input`<sup>Optional</sup> <a name="scaling_policies_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPoliciesInput"></a>

```python
scaling_policies_input: IResolvable | typing.List[GameliftFleetScalingPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>]

---

##### `script_id_input`<sup>Optional</sup> <a name="script_id_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptIdInput"></a>

```python
script_id_input: str
```

- *Type:* str

---

##### `server_launch_parameters_input`<sup>Optional</sup> <a name="server_launch_parameters_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParametersInput"></a>

```python
server_launch_parameters_input: str
```

- *Type:* str

---

##### `server_launch_path_input`<sup>Optional</sup> <a name="server_launch_path_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPathInput"></a>

```python
server_launch_path_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GameliftFleetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>]

---

##### `apply_capacity`<sup>Required</sup> <a name="apply_capacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacity"></a>

```python
apply_capacity: str
```

- *Type:* str

---

##### `build_id`<sup>Required</sup> <a name="build_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildId"></a>

```python
build_id: str
```

- *Type:* str

---

##### `compute_type`<sup>Required</sup> <a name="compute_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeType"></a>

```python
compute_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `desired_ec2_instances`<sup>Required</sup> <a name="desired_ec2_instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2Instances"></a>

```python
desired_ec2_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ec2_instance_type`<sup>Required</sup> <a name="ec2_instance_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceType"></a>

```python
ec2_instance_type: str
```

- *Type:* str

---

##### `fleet_type`<sup>Required</sup> <a name="fleet_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetType"></a>

```python
fleet_type: str
```

- *Type:* str

---

##### `instance_role_arn`<sup>Required</sup> <a name="instance_role_arn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArn"></a>

```python
instance_role_arn: str
```

- *Type:* str

---

##### `instance_role_credentials_provider`<sup>Required</sup> <a name="instance_role_credentials_provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProvider"></a>

```python
instance_role_credentials_provider: str
```

- *Type:* str

---

##### `log_paths`<sup>Required</sup> <a name="log_paths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPaths"></a>

```python
log_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_groups`<sup>Required</sup> <a name="metric_groups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroups"></a>

```python
metric_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `new_game_session_protection_policy`<sup>Required</sup> <a name="new_game_session_protection_policy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy"></a>

```python
new_game_session_protection_policy: str
```

- *Type:* str

---

##### `peer_vpc_aws_account_id`<sup>Required</sup> <a name="peer_vpc_aws_account_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountId"></a>

```python
peer_vpc_aws_account_id: str
```

- *Type:* str

---

##### `peer_vpc_id`<sup>Required</sup> <a name="peer_vpc_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcId"></a>

```python
peer_vpc_id: str
```

- *Type:* str

---

##### `player_gateway_mode`<sup>Required</sup> <a name="player_gateway_mode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayMode"></a>

```python
player_gateway_mode: str
```

- *Type:* str

---

##### `script_id`<sup>Required</sup> <a name="script_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptId"></a>

```python
script_id: str
```

- *Type:* str

---

##### `server_launch_parameters`<sup>Required</sup> <a name="server_launch_parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParameters"></a>

```python
server_launch_parameters: str
```

- *Type:* str

---

##### `server_launch_path`<sup>Required</sup> <a name="server_launch_path" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPath"></a>

```python
server_launch_path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftFleetAnywhereConfiguration <a name="GameliftFleetAnywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetAnywhereConfiguration(
  cost: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration.property.cost">cost</a></code> | <code>str</code> | Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost. |

---

##### `cost`<sup>Optional</sup> <a name="cost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration.property.cost"></a>

```python
cost: str
```

- *Type:* str

Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#cost GameliftFleet#cost}

---

### GameliftFleetCertificateConfiguration <a name="GameliftFleetCertificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetCertificateConfiguration(
  certificate_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType">certificate_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#certificate_type GameliftFleet#certificate_type}. |

---

##### `certificate_type`<sup>Optional</sup> <a name="certificate_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType"></a>

```python
certificate_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#certificate_type GameliftFleet#certificate_type}.

---

### GameliftFleetConfig <a name="GameliftFleetConfig" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  anywhere_configuration: GameliftFleetAnywhereConfiguration = None,
  apply_capacity: str = None,
  build_id: str = None,
  certificate_configuration: GameliftFleetCertificateConfiguration = None,
  compute_type: str = None,
  description: str = None,
  desired_ec2_instances: typing.Union[int, float] = None,
  ec2_inbound_permissions: IResolvable | typing.List[GameliftFleetEc2InboundPermissions] = None,
  ec2_instance_type: str = None,
  fleet_type: str = None,
  instance_role_arn: str = None,
  instance_role_credentials_provider: str = None,
  locations: IResolvable | typing.List[GameliftFleetLocations] = None,
  log_paths: typing.List[str] = None,
  max_size: typing.Union[int, float] = None,
  metric_groups: typing.List[str] = None,
  min_size: typing.Union[int, float] = None,
  new_game_session_protection_policy: str = None,
  peer_vpc_aws_account_id: str = None,
  peer_vpc_id: str = None,
  player_gateway_configuration: GameliftFleetPlayerGatewayConfiguration = None,
  player_gateway_mode: str = None,
  resource_creation_limit_policy: GameliftFleetResourceCreationLimitPolicy = None,
  runtime_configuration: GameliftFleetRuntimeConfiguration = None,
  scaling_policies: IResolvable | typing.List[GameliftFleetScalingPolicies] = None,
  script_id: str = None,
  server_launch_parameters: str = None,
  server_launch_path: str = None,
  tags: IResolvable | typing.List[GameliftFleetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.name">name</a></code> | <code>str</code> | A descriptive label that is associated with a fleet. Fleet names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.anywhereConfiguration">anywhere_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | Configuration for Anywhere fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.applyCapacity">apply_capacity</a></code> | <code>str</code> | Determines when and how to apply fleet or location capacities. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.buildId">build_id</a></code> | <code>str</code> | A unique identifier for a build to be deployed on the new fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration">certificate_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | Indicates whether to generate a TLS/SSL certificate for the new fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.computeType">compute_type</a></code> | <code>str</code> | ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.desiredEc2Instances">desired_ec2_instances</a></code> | <code>typing.Union[int, float]</code> | [DEPRECATED] The number of EC2 instances that you want this fleet to host. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermissions">ec2_inbound_permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>]</code> | A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType">ec2_instance_type</a></code> | <code>str</code> | The name of an EC2 instance type that is supported in Amazon GameLift. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.fleetType">fleet_type</a></code> | <code>str</code> | Indicates whether to use On-Demand instances or Spot instances for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn">instance_role_arn</a></code> | <code>str</code> | A unique identifier for an AWS IAM role that manages access to your AWS services. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleCredentialsProvider">instance_role_credentials_provider</a></code> | <code>str</code> | Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.locations">locations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#locations GameliftFleet#locations}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.logPaths">log_paths</a></code> | <code>typing.List[str]</code> | This parameter is no longer used. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | [DEPRECATED] The maximum value that is allowed for the fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.metricGroups">metric_groups</a></code> | <code>typing.List[str]</code> | The name of an Amazon CloudWatch metric group. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | [DEPRECATED] The minimum value allowed for the fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy">new_game_session_protection_policy</a></code> | <code>str</code> | A game session protection policy to apply to all game sessions hosted on instances in this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcAwsAccountId">peer_vpc_aws_account_id</a></code> | <code>str</code> | A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayConfiguration">player_gateway_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | Configuration for player gateway. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayMode">player_gateway_mode</a></code> | <code>str</code> | The player gateway mode for the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy">resource_creation_limit_policy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | A policy that limits the number of game sessions an individual player can create over a span of time for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration">runtime_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | Instructions for launching server processes on each instance in the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scalingPolicies">scaling_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>]</code> | A list of rules that control how a fleet is scaled. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scriptId">script_id</a></code> | <code>str</code> | A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchParameters">server_launch_parameters</a></code> | <code>str</code> | This parameter is no longer used but is retained for backward compatibility. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchPath">server_launch_path</a></code> | <code>str</code> | This parameter is no longer used. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A descriptive label that is associated with a fleet. Fleet names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#name GameliftFleet#name}

---

##### `anywhere_configuration`<sup>Optional</sup> <a name="anywhere_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.anywhereConfiguration"></a>

```python
anywhere_configuration: GameliftFleetAnywhereConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

Configuration for Anywhere fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#anywhere_configuration GameliftFleet#anywhere_configuration}

---

##### `apply_capacity`<sup>Optional</sup> <a name="apply_capacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.applyCapacity"></a>

```python
apply_capacity: str
```

- *Type:* str

Determines when and how to apply fleet or location capacities.

Allowed options are ON_UPDATE (default), ON_CREATE_AND_UPDATE and ON_CREATE_AND_UPDATE_WITH_AUTOSCALING. If you choose ON_CREATE_AND_UPDATE_WITH_AUTOSCALING, MinSize and MaxSize will still be applied on creation and on updates, but DesiredEC2Instances will only be applied once on fleet creation and will be ignored during updates to prevent conflicts with auto-scaling. During updates with ON_CREATE_AND_UPDATE_WITH_AUTOSCALING chosen, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#apply_capacity GameliftFleet#apply_capacity}

---

##### `build_id`<sup>Optional</sup> <a name="build_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.buildId"></a>

```python
build_id: str
```

- *Type:* str

A unique identifier for a build to be deployed on the new fleet.

If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#build_id GameliftFleet#build_id}

---

##### `certificate_configuration`<sup>Optional</sup> <a name="certificate_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration"></a>

```python
certificate_configuration: GameliftFleetCertificateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

Indicates whether to generate a TLS/SSL certificate for the new fleet.

TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not set, certificate generation is disabled. This fleet setting cannot be changed once the fleet is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#certificate_configuration GameliftFleet#certificate_configuration}

---

##### `compute_type`<sup>Optional</sup> <a name="compute_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.computeType"></a>

```python
compute_type: str
```

- *Type:* str

ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#compute_type GameliftFleet#compute_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#description GameliftFleet#description}

---

##### `desired_ec2_instances`<sup>Optional</sup> <a name="desired_ec2_instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.desiredEc2Instances"></a>

```python
desired_ec2_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

[DEPRECATED] The number of EC2 instances that you want this fleet to host.

When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#desired_ec2_instances GameliftFleet#desired_ec2_instances}

---

##### `ec2_inbound_permissions`<sup>Optional</sup> <a name="ec2_inbound_permissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermissions"></a>

```python
ec2_inbound_permissions: IResolvable | typing.List[GameliftFleetEc2InboundPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>]

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#ec2_inbound_permissions GameliftFleet#ec2_inbound_permissions}

---

##### `ec2_instance_type`<sup>Optional</sup> <a name="ec2_instance_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType"></a>

```python
ec2_instance_type: str
```

- *Type:* str

The name of an EC2 instance type that is supported in Amazon GameLift.

A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}

---

##### `fleet_type`<sup>Optional</sup> <a name="fleet_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.fleetType"></a>

```python
fleet_type: str
```

- *Type:* str

Indicates whether to use On-Demand instances or Spot instances for this fleet.

If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#fleet_type GameliftFleet#fleet_type}

---

##### `instance_role_arn`<sup>Optional</sup> <a name="instance_role_arn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn"></a>

```python
instance_role_arn: str
```

- *Type:* str

A unique identifier for an AWS IAM role that manages access to your AWS services.

With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}

---

##### `instance_role_credentials_provider`<sup>Optional</sup> <a name="instance_role_credentials_provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleCredentialsProvider"></a>

```python
instance_role_credentials_provider: str
```

- *Type:* str

Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#instance_role_credentials_provider GameliftFleet#instance_role_credentials_provider}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.locations"></a>

```python
locations: IResolvable | typing.List[GameliftFleetLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#locations GameliftFleet#locations}.

---

##### `log_paths`<sup>Optional</sup> <a name="log_paths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.logPaths"></a>

```python
log_paths: typing.List[str]
```

- *Type:* typing.List[str]

This parameter is no longer used.

When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#log_paths GameliftFleet#log_paths}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

[DEPRECATED] The maximum value that is allowed for the fleet's instance count.

When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#max_size GameliftFleet#max_size}

---

##### `metric_groups`<sup>Optional</sup> <a name="metric_groups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.metricGroups"></a>

```python
metric_groups: typing.List[str]
```

- *Type:* typing.List[str]

The name of an Amazon CloudWatch metric group.

A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#metric_groups GameliftFleet#metric_groups}

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

[DEPRECATED] The minimum value allowed for the fleet's instance count.

When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#min_size GameliftFleet#min_size}

---

##### `new_game_session_protection_policy`<sup>Optional</sup> <a name="new_game_session_protection_policy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy"></a>

```python
new_game_session_protection_policy: str
```

- *Type:* str

A game session protection policy to apply to all game sessions hosted on instances in this fleet.

When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}

---

##### `peer_vpc_aws_account_id`<sup>Optional</sup> <a name="peer_vpc_aws_account_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcAwsAccountId"></a>

```python
peer_vpc_aws_account_id: str
```

- *Type:* str

A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with.

You can find your account ID in the AWS Management Console under account settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#peer_vpc_aws_account_id GameliftFleet#peer_vpc_aws_account_id}

---

##### `peer_vpc_id`<sup>Optional</sup> <a name="peer_vpc_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcId"></a>

```python
peer_vpc_id: str
```

- *Type:* str

A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet.

The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#peer_vpc_id GameliftFleet#peer_vpc_id}

---

##### `player_gateway_configuration`<sup>Optional</sup> <a name="player_gateway_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayConfiguration"></a>

```python
player_gateway_configuration: GameliftFleetPlayerGatewayConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

Configuration for player gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#player_gateway_configuration GameliftFleet#player_gateway_configuration}

---

##### `player_gateway_mode`<sup>Optional</sup> <a name="player_gateway_mode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayMode"></a>

```python
player_gateway_mode: str
```

- *Type:* str

The player gateway mode for the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#player_gateway_mode GameliftFleet#player_gateway_mode}

---

##### `resource_creation_limit_policy`<sup>Optional</sup> <a name="resource_creation_limit_policy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy"></a>

```python
resource_creation_limit_policy: GameliftFleetResourceCreationLimitPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}

---

##### `runtime_configuration`<sup>Optional</sup> <a name="runtime_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration"></a>

```python
runtime_configuration: GameliftFleetRuntimeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

Instructions for launching server processes on each instance in the fleet.

Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception.

This parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration has replaced these parameters, but fleets that use them will continue to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#runtime_configuration GameliftFleet#runtime_configuration}

---

##### `scaling_policies`<sup>Optional</sup> <a name="scaling_policies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scalingPolicies"></a>

```python
scaling_policies: IResolvable | typing.List[GameliftFleetScalingPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>]

A list of rules that control how a fleet is scaled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#scaling_policies GameliftFleet#scaling_policies}

---

##### `script_id`<sup>Optional</sup> <a name="script_id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scriptId"></a>

```python
script_id: str
```

- *Type:* str

A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet.

The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.

Note: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#script_id GameliftFleet#script_id}

---

##### `server_launch_parameters`<sup>Optional</sup> <a name="server_launch_parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchParameters"></a>

```python
server_launch_parameters: str
```

- *Type:* str

This parameter is no longer used but is retained for backward compatibility.

Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#server_launch_parameters GameliftFleet#server_launch_parameters}

---

##### `server_launch_path`<sup>Optional</sup> <a name="server_launch_path" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchPath"></a>

```python
server_launch_path: str
```

- *Type:* str

This parameter is no longer used.

Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#server_launch_path GameliftFleet#server_launch_path}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GameliftFleetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#tags GameliftFleet#tags}

---

### GameliftFleetEc2InboundPermissions <a name="GameliftFleetEc2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetEc2InboundPermissions(
  from_port: typing.Union[int, float] = None,
  ip_range: str = None,
  protocol: str = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | A starting value for a range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.ipRange">ip_range</a></code> | <code>str</code> | A range of allowed IP addresses. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.protocol">protocol</a></code> | <code>str</code> | The network communication protocol used by the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | An ending value for a range of allowed port numbers. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#from_port GameliftFleet#from_port}

---

##### `ip_range`<sup>Optional</sup> <a name="ip_range" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

A range of allowed IP addresses.

This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#ip_range GameliftFleet#ip_range}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The network communication protocol used by the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#protocol GameliftFleet#protocol}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#to_port GameliftFleet#to_port}

---

### GameliftFleetLocations <a name="GameliftFleetLocations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetLocations(
  location: str = None,
  location_capacity: GameliftFleetLocationsLocationCapacity = None,
  player_gateway_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#location GameliftFleet#location}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.locationCapacity">location_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a></code> | Current resource capacity settings in a specified fleet or location. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.playerGatewayStatus">player_gateway_status</a></code> | <code>str</code> | The player gateway status for the location. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#location GameliftFleet#location}.

---

##### `location_capacity`<sup>Optional</sup> <a name="location_capacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.locationCapacity"></a>

```python
location_capacity: GameliftFleetLocationsLocationCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

Current resource capacity settings in a specified fleet or location.

The location value might refer to a fleet's remote location or its home Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#location_capacity GameliftFleet#location_capacity}

---

##### `player_gateway_status`<sup>Optional</sup> <a name="player_gateway_status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.playerGatewayStatus"></a>

```python
player_gateway_status: str
```

- *Type:* str

The player gateway status for the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#player_gateway_status GameliftFleet#player_gateway_status}

---

### GameliftFleetLocationsLocationCapacity <a name="GameliftFleetLocationsLocationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetLocationsLocationCapacity(
  desired_ec2_instances: typing.Union[int, float] = None,
  managed_capacity_configuration: GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.desiredEc2Instances">desired_ec2_instances</a></code> | <code>typing.Union[int, float]</code> | Defaults to MinSize if not defined. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.managedCapacityConfiguration">managed_capacity_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | Configuration options for Amazon GameLift Servers-managed capacity behavior. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | The maximum value that is allowed for the fleet's instance count for a location. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | The minimum value allowed for the fleet's instance count for a location. |

---

##### `desired_ec2_instances`<sup>Optional</sup> <a name="desired_ec2_instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.desiredEc2Instances"></a>

```python
desired_ec2_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defaults to MinSize if not defined.

The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#desired_ec2_instances GameliftFleet#desired_ec2_instances}

---

##### `managed_capacity_configuration`<sup>Optional</sup> <a name="managed_capacity_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.managedCapacityConfiguration"></a>

```python
managed_capacity_configuration: GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

Configuration options for Amazon GameLift Servers-managed capacity behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#managed_capacity_configuration GameliftFleet#managed_capacity_configuration}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum value that is allowed for the fleet's instance count for a location.

When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#max_size GameliftFleet#max_size}

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum value allowed for the fleet's instance count for a location.

When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#min_size GameliftFleet#min_size}

---

### GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration <a name="GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration(
  scale_in_after_inactivity_minutes: typing.Union[int, float] = None,
  zero_capacity_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes">scale_in_after_inactivity_minutes</a></code> | <code>typing.Union[int, float]</code> | Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy">zero_capacity_strategy</a></code> | <code>str</code> | The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity. |

---

##### `scale_in_after_inactivity_minutes`<sup>Optional</sup> <a name="scale_in_after_inactivity_minutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes"></a>

```python
scale_in_after_inactivity_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#scale_in_after_inactivity_minutes GameliftFleet#scale_in_after_inactivity_minutes}

---

##### `zero_capacity_strategy`<sup>Optional</sup> <a name="zero_capacity_strategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy"></a>

```python
zero_capacity_strategy: str
```

- *Type:* str

The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity.

Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#zero_capacity_strategy GameliftFleet#zero_capacity_strategy}

---

### GameliftFleetPlayerGatewayConfiguration <a name="GameliftFleetPlayerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetPlayerGatewayConfiguration(
  game_server_ip_protocol_supported: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration.property.gameServerIpProtocolSupported">game_server_ip_protocol_supported</a></code> | <code>str</code> | The IP protocol supported by the game server. |

---

##### `game_server_ip_protocol_supported`<sup>Optional</sup> <a name="game_server_ip_protocol_supported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration.property.gameServerIpProtocolSupported"></a>

```python
game_server_ip_protocol_supported: str
```

- *Type:* str

The IP protocol supported by the game server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#game_server_ip_protocol_supported GameliftFleet#game_server_ip_protocol_supported}

---

### GameliftFleetResourceCreationLimitPolicy <a name="GameliftFleetResourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetResourceCreationLimitPolicy(
  new_game_sessions_per_creator: typing.Union[int, float] = None,
  policy_period_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator">new_game_sessions_per_creator</a></code> | <code>typing.Union[int, float]</code> | The maximum number of game sessions that an individual can create during the policy period. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes">policy_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The time span used in evaluating the resource creation limit policy. |

---

##### `new_game_sessions_per_creator`<sup>Optional</sup> <a name="new_game_sessions_per_creator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

```python
new_game_sessions_per_creator: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of game sessions that an individual can create during the policy period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}

---

##### `policy_period_in_minutes`<sup>Optional</sup> <a name="policy_period_in_minutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes"></a>

```python
policy_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time span used in evaluating the resource creation limit policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}

---

### GameliftFleetRuntimeConfiguration <a name="GameliftFleetRuntimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetRuntimeConfiguration(
  game_session_activation_timeout_seconds: typing.Union[int, float] = None,
  max_concurrent_game_session_activations: typing.Union[int, float] = None,
  server_processes: IResolvable | typing.List[GameliftFleetRuntimeConfigurationServerProcesses] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds">game_session_activation_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations">max_concurrent_game_session_activations</a></code> | <code>typing.Union[int, float]</code> | The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcesses">server_processes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>]</code> | A collection of server process configurations that describe which server processes to run on each instance in a fleet. |

---

##### `game_session_activation_timeout_seconds`<sup>Optional</sup> <a name="game_session_activation_timeout_seconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds"></a>

```python
game_session_activation_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING.

If the game session is not active before the timeout, activation is terminated and the game session status is changed to TERMINATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}

---

##### `max_concurrent_game_session_activations`<sup>Optional</sup> <a name="max_concurrent_game_session_activations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations"></a>

```python
max_concurrent_game_session_activations: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously.

This setting limits the amount of instance resources that can be used for new game activations at any one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}

---

##### `server_processes`<sup>Optional</sup> <a name="server_processes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcesses"></a>

```python
server_processes: IResolvable | typing.List[GameliftFleetRuntimeConfigurationServerProcesses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>]

A collection of server process configurations that describe which server processes to run on each instance in a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#server_processes GameliftFleet#server_processes}

---

### GameliftFleetRuntimeConfigurationServerProcesses <a name="GameliftFleetRuntimeConfigurationServerProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses(
  concurrent_executions: typing.Union[int, float] = None,
  launch_path: str = None,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.concurrentExecutions">concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | The number of server processes that use this configuration to run concurrently on an instance. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.launchPath">launch_path</a></code> | <code>str</code> | The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.parameters">parameters</a></code> | <code>str</code> | An optional list of parameters to pass to the server executable or Realtime script on launch. |

---

##### `concurrent_executions`<sup>Optional</sup> <a name="concurrent_executions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.concurrentExecutions"></a>

```python
concurrent_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of server processes that use this configuration to run concurrently on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#concurrent_executions GameliftFleet#concurrent_executions}

---

##### `launch_path`<sup>Optional</sup> <a name="launch_path" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.launchPath"></a>

```python
launch_path: str
```

- *Type:* str

The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function.

Game builds and Realtime scripts are installed on instances at the root:

Windows (for custom game builds only): C:\game. Example: "C:\game\MyGame\server.exe"

Linux: /local/game. Examples: "/local/game/MyGame/server.exe" or "/local/game/MyRealtimeScript.js"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#launch_path GameliftFleet#launch_path}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

An optional list of parameters to pass to the server executable or Realtime script on launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#parameters GameliftFleet#parameters}

---

### GameliftFleetScalingPolicies <a name="GameliftFleetScalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetScalingPolicies(
  comparison_operator: str = None,
  evaluation_periods: typing.Union[int, float] = None,
  location: str = None,
  metric_name: str = None,
  name: str = None,
  policy_type: str = None,
  scaling_adjustment: typing.Union[int, float] = None,
  scaling_adjustment_type: str = None,
  status: str = None,
  target_configuration: GameliftFleetScalingPoliciesTargetConfiguration = None,
  threshold: typing.Union[int, float] = None,
  update_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | Comparison operator to use when measuring a metric against the threshold value. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#location GameliftFleet#location}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.metricName">metric_name</a></code> | <code>str</code> | Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.name">name</a></code> | <code>str</code> | A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.policyType">policy_type</a></code> | <code>str</code> | The type of scaling policy to create. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustment">scaling_adjustment</a></code> | <code>typing.Union[int, float]</code> | Amount of adjustment to make, based on the scaling adjustment type. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustmentType">scaling_adjustment_type</a></code> | <code>str</code> | The type of adjustment to make to a fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.status">status</a></code> | <code>str</code> | Current status of the scaling policy. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.targetConfiguration">target_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a></code> | An object that contains settings for a target-based scaling policy. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Metric value used to trigger a scaling event. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.updateStatus">update_status</a></code> | <code>str</code> | The current status of the fleet's scaling policies in a requested fleet location. |

---

##### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

Comparison operator to use when measuring a metric against the threshold value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#comparison_operator GameliftFleet#comparison_operator}

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#evaluation_periods GameliftFleet#evaluation_periods}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#location GameliftFleet#location}.

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#metric_name GameliftFleet#metric_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.name"></a>

```python
name: str
```

- *Type:* str

A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#name GameliftFleet#name}

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

The type of scaling policy to create.

For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#policy_type GameliftFleet#policy_type}

---

##### `scaling_adjustment`<sup>Optional</sup> <a name="scaling_adjustment" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustment"></a>

```python
scaling_adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of adjustment to make, based on the scaling adjustment type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#scaling_adjustment GameliftFleet#scaling_adjustment}

---

##### `scaling_adjustment_type`<sup>Optional</sup> <a name="scaling_adjustment_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustmentType"></a>

```python
scaling_adjustment_type: str
```

- *Type:* str

The type of adjustment to make to a fleet's instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#scaling_adjustment_type GameliftFleet#scaling_adjustment_type}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.status"></a>

```python
status: str
```

- *Type:* str

Current status of the scaling policy.

The scaling policy can be in force only when in an ACTIVE status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#status GameliftFleet#status}

---

##### `target_configuration`<sup>Optional</sup> <a name="target_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.targetConfiguration"></a>

```python
target_configuration: GameliftFleetScalingPoliciesTargetConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

An object that contains settings for a target-based scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#target_configuration GameliftFleet#target_configuration}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Metric value used to trigger a scaling event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#threshold GameliftFleet#threshold}

---

##### `update_status`<sup>Optional</sup> <a name="update_status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.updateStatus"></a>

```python
update_status: str
```

- *Type:* str

The current status of the fleet's scaling policies in a requested fleet location.

The status PENDING_UPDATE indicates that an update was requested for the fleet but has not yet been completed for the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#update_status GameliftFleet#update_status}

---

### GameliftFleetScalingPoliciesTargetConfiguration <a name="GameliftFleetScalingPoliciesTargetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration(
  target_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | Desired value to use with a target-based scaling policy. |

---

##### `target_value`<sup>Optional</sup> <a name="target_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Desired value to use with a target-based scaling policy.

The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#target_value GameliftFleet#target_value}

---

### GameliftFleetTags <a name="GameliftFleetTags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.value">value</a></code> | <code>str</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#key GameliftFleet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#value GameliftFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftFleetAnywhereConfigurationOutputReference <a name="GameliftFleetAnywhereConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resetCost">reset_cost</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cost` <a name="reset_cost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resetCost"></a>

```python
def reset_cost() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.costInput">cost_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.cost">cost</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_input`<sup>Optional</sup> <a name="cost_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.costInput"></a>

```python
cost_input: str
```

- *Type:* str

---

##### `cost`<sup>Required</sup> <a name="cost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.cost"></a>

```python
cost: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetAnywhereConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

---


### GameliftFleetCertificateConfigurationOutputReference <a name="GameliftFleetCertificateConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetCertificateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType">reset_certificate_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_type` <a name="reset_certificate_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType"></a>

```python
def reset_certificate_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput">certificate_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType">certificate_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_type_input`<sup>Optional</sup> <a name="certificate_type_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput"></a>

```python
certificate_type_input: str
```

- *Type:* str

---

##### `certificate_type`<sup>Required</sup> <a name="certificate_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType"></a>

```python
certificate_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetCertificateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---


### GameliftFleetEc2InboundPermissionsList <a name="GameliftFleetEc2InboundPermissionsList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetEc2InboundPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftFleetEc2InboundPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftFleetEc2InboundPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>]

---


### GameliftFleetEc2InboundPermissionsOutputReference <a name="GameliftFleetEc2InboundPermissionsOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetIpRange">reset_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_ip_range` <a name="reset_ip_range" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetIpRange"></a>

```python
def reset_ip_range() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRangeInput">ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRange">ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_range_input`<sup>Optional</sup> <a name="ip_range_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRangeInput"></a>

```python
ip_range_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetEc2InboundPermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>

---


### GameliftFleetLocationsList <a name="GameliftFleetLocationsList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftFleetLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftFleetLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>]

---


### GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference <a name="GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes">reset_scale_in_after_inactivity_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy">reset_zero_capacity_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scale_in_after_inactivity_minutes` <a name="reset_scale_in_after_inactivity_minutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes"></a>

```python
def reset_scale_in_after_inactivity_minutes() -> None
```

##### `reset_zero_capacity_strategy` <a name="reset_zero_capacity_strategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy"></a>

```python
def reset_zero_capacity_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput">scale_in_after_inactivity_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput">zero_capacity_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes">scale_in_after_inactivity_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy">zero_capacity_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_in_after_inactivity_minutes_input`<sup>Optional</sup> <a name="scale_in_after_inactivity_minutes_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput"></a>

```python
scale_in_after_inactivity_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zero_capacity_strategy_input`<sup>Optional</sup> <a name="zero_capacity_strategy_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput"></a>

```python
zero_capacity_strategy_input: str
```

- *Type:* str

---

##### `scale_in_after_inactivity_minutes`<sup>Required</sup> <a name="scale_in_after_inactivity_minutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes"></a>

```python
scale_in_after_inactivity_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zero_capacity_strategy`<sup>Required</sup> <a name="zero_capacity_strategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy"></a>

```python
zero_capacity_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---


### GameliftFleetLocationsLocationCapacityOutputReference <a name="GameliftFleetLocationsLocationCapacityOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration">put_managed_capacity_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances">reset_desired_ec2_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration">reset_managed_capacity_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMinSize">reset_min_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_managed_capacity_configuration` <a name="put_managed_capacity_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration"></a>

```python
def put_managed_capacity_configuration(
  scale_in_after_inactivity_minutes: typing.Union[int, float] = None,
  zero_capacity_strategy: str = None
) -> None
```

###### `scale_in_after_inactivity_minutes`<sup>Optional</sup> <a name="scale_in_after_inactivity_minutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration.parameter.scaleInAfterInactivityMinutes"></a>

- *Type:* typing.Union[int, float]

Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#scale_in_after_inactivity_minutes GameliftFleet#scale_in_after_inactivity_minutes}

---

###### `zero_capacity_strategy`<sup>Optional</sup> <a name="zero_capacity_strategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration.parameter.zeroCapacityStrategy"></a>

- *Type:* str

The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity.

Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#zero_capacity_strategy GameliftFleet#zero_capacity_strategy}

---

##### `reset_desired_ec2_instances` <a name="reset_desired_ec2_instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances"></a>

```python
def reset_desired_ec2_instances() -> None
```

##### `reset_managed_capacity_configuration` <a name="reset_managed_capacity_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration"></a>

```python
def reset_managed_capacity_configuration() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMinSize"></a>

```python
def reset_min_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration">managed_capacity_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput">desired_ec2_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput">managed_capacity_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances">desired_ec2_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_capacity_configuration`<sup>Required</sup> <a name="managed_capacity_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration"></a>

```python
managed_capacity_configuration: GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a>

---

##### `desired_ec2_instances_input`<sup>Optional</sup> <a name="desired_ec2_instances_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput"></a>

```python
desired_ec2_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_capacity_configuration_input`<sup>Optional</sup> <a name="managed_capacity_configuration_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput"></a>

```python
managed_capacity_configuration_input: IResolvable | GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_ec2_instances`<sup>Required</sup> <a name="desired_ec2_instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances"></a>

```python
desired_ec2_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetLocationsLocationCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

---


### GameliftFleetLocationsOutputReference <a name="GameliftFleetLocationsOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity">put_location_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocationCapacity">reset_location_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetPlayerGatewayStatus">reset_player_gateway_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_location_capacity` <a name="put_location_capacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity"></a>

```python
def put_location_capacity(
  desired_ec2_instances: typing.Union[int, float] = None,
  managed_capacity_configuration: GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None
) -> None
```

###### `desired_ec2_instances`<sup>Optional</sup> <a name="desired_ec2_instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity.parameter.desiredEc2Instances"></a>

- *Type:* typing.Union[int, float]

Defaults to MinSize if not defined.

The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#desired_ec2_instances GameliftFleet#desired_ec2_instances}

---

###### `managed_capacity_configuration`<sup>Optional</sup> <a name="managed_capacity_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity.parameter.managedCapacityConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

Configuration options for Amazon GameLift Servers-managed capacity behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#managed_capacity_configuration GameliftFleet#managed_capacity_configuration}

---

###### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

The maximum value that is allowed for the fleet's instance count for a location.

When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#max_size GameliftFleet#max_size}

---

###### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

The minimum value allowed for the fleet's instance count for a location.

When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#min_size GameliftFleet#min_size}

---

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_location_capacity` <a name="reset_location_capacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocationCapacity"></a>

```python
def reset_location_capacity() -> None
```

##### `reset_player_gateway_status` <a name="reset_player_gateway_status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetPlayerGatewayStatus"></a>

```python
def reset_player_gateway_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacity">location_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference">GameliftFleetLocationsLocationCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacityInput">location_capacity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatusInput">player_gateway_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatus">player_gateway_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_capacity`<sup>Required</sup> <a name="location_capacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacity"></a>

```python
location_capacity: GameliftFleetLocationsLocationCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference">GameliftFleetLocationsLocationCapacityOutputReference</a>

---

##### `location_capacity_input`<sup>Optional</sup> <a name="location_capacity_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacityInput"></a>

```python
location_capacity_input: IResolvable | GameliftFleetLocationsLocationCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `player_gateway_status_input`<sup>Optional</sup> <a name="player_gateway_status_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatusInput"></a>

```python
player_gateway_status_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `player_gateway_status`<sup>Required</sup> <a name="player_gateway_status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatus"></a>

```python
player_gateway_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetLocations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>

---


### GameliftFleetPlayerGatewayConfigurationOutputReference <a name="GameliftFleetPlayerGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resetGameServerIpProtocolSupported">reset_game_server_ip_protocol_supported</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_game_server_ip_protocol_supported` <a name="reset_game_server_ip_protocol_supported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resetGameServerIpProtocolSupported"></a>

```python
def reset_game_server_ip_protocol_supported() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupportedInput">game_server_ip_protocol_supported_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupported">game_server_ip_protocol_supported</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `game_server_ip_protocol_supported_input`<sup>Optional</sup> <a name="game_server_ip_protocol_supported_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupportedInput"></a>

```python
game_server_ip_protocol_supported_input: str
```

- *Type:* str

---

##### `game_server_ip_protocol_supported`<sup>Required</sup> <a name="game_server_ip_protocol_supported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupported"></a>

```python
game_server_ip_protocol_supported: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetPlayerGatewayConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

---


### GameliftFleetResourceCreationLimitPolicyOutputReference <a name="GameliftFleetResourceCreationLimitPolicyOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator">reset_new_game_sessions_per_creator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes">reset_policy_period_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_new_game_sessions_per_creator` <a name="reset_new_game_sessions_per_creator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator"></a>

```python
def reset_new_game_sessions_per_creator() -> None
```

##### `reset_policy_period_in_minutes` <a name="reset_policy_period_in_minutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes"></a>

```python
def reset_policy_period_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput">new_game_sessions_per_creator_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput">policy_period_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">new_game_sessions_per_creator</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">policy_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `new_game_sessions_per_creator_input`<sup>Optional</sup> <a name="new_game_sessions_per_creator_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput"></a>

```python
new_game_sessions_per_creator_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_period_in_minutes_input`<sup>Optional</sup> <a name="policy_period_in_minutes_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput"></a>

```python
policy_period_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `new_game_sessions_per_creator`<sup>Required</sup> <a name="new_game_sessions_per_creator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```python
new_game_sessions_per_creator: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_period_in_minutes`<sup>Required</sup> <a name="policy_period_in_minutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```python
policy_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetResourceCreationLimitPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---


### GameliftFleetRuntimeConfigurationOutputReference <a name="GameliftFleetRuntimeConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcesses">put_server_processes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds">reset_game_session_activation_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations">reset_max_concurrent_game_session_activations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcesses">reset_server_processes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_server_processes` <a name="put_server_processes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcesses"></a>

```python
def put_server_processes(
  value: IResolvable | typing.List[GameliftFleetRuntimeConfigurationServerProcesses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcesses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>]

---

##### `reset_game_session_activation_timeout_seconds` <a name="reset_game_session_activation_timeout_seconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds"></a>

```python
def reset_game_session_activation_timeout_seconds() -> None
```

##### `reset_max_concurrent_game_session_activations` <a name="reset_max_concurrent_game_session_activations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations"></a>

```python
def reset_max_concurrent_game_session_activations() -> None
```

##### `reset_server_processes` <a name="reset_server_processes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcesses"></a>

```python
def reset_server_processes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcesses">server_processes</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList">GameliftFleetRuntimeConfigurationServerProcessesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput">game_session_activation_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput">max_concurrent_game_session_activations_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessesInput">server_processes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds">game_session_activation_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations">max_concurrent_game_session_activations</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_processes`<sup>Required</sup> <a name="server_processes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcesses"></a>

```python
server_processes: GameliftFleetRuntimeConfigurationServerProcessesList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList">GameliftFleetRuntimeConfigurationServerProcessesList</a>

---

##### `game_session_activation_timeout_seconds_input`<sup>Optional</sup> <a name="game_session_activation_timeout_seconds_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput"></a>

```python
game_session_activation_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_game_session_activations_input`<sup>Optional</sup> <a name="max_concurrent_game_session_activations_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput"></a>

```python
max_concurrent_game_session_activations_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_processes_input`<sup>Optional</sup> <a name="server_processes_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessesInput"></a>

```python
server_processes_input: IResolvable | typing.List[GameliftFleetRuntimeConfigurationServerProcesses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>]

---

##### `game_session_activation_timeout_seconds`<sup>Required</sup> <a name="game_session_activation_timeout_seconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds"></a>

```python
game_session_activation_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_game_session_activations`<sup>Required</sup> <a name="max_concurrent_game_session_activations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations"></a>

```python
max_concurrent_game_session_activations: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetRuntimeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---


### GameliftFleetRuntimeConfigurationServerProcessesList <a name="GameliftFleetRuntimeConfigurationServerProcessesList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftFleetRuntimeConfigurationServerProcessesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftFleetRuntimeConfigurationServerProcesses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>]

---


### GameliftFleetRuntimeConfigurationServerProcessesOutputReference <a name="GameliftFleetRuntimeConfigurationServerProcessesOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetConcurrentExecutions">reset_concurrent_executions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetLaunchPath">reset_launch_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_concurrent_executions` <a name="reset_concurrent_executions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetConcurrentExecutions"></a>

```python
def reset_concurrent_executions() -> None
```

##### `reset_launch_path` <a name="reset_launch_path" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetLaunchPath"></a>

```python
def reset_launch_path() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutionsInput">concurrent_executions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPathInput">launch_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutions">concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPath">launch_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `concurrent_executions_input`<sup>Optional</sup> <a name="concurrent_executions_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutionsInput"></a>

```python
concurrent_executions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `launch_path_input`<sup>Optional</sup> <a name="launch_path_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPathInput"></a>

```python
launch_path_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `concurrent_executions`<sup>Required</sup> <a name="concurrent_executions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutions"></a>

```python
concurrent_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `launch_path`<sup>Required</sup> <a name="launch_path" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPath"></a>

```python
launch_path: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetRuntimeConfigurationServerProcesses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>

---


### GameliftFleetScalingPoliciesList <a name="GameliftFleetScalingPoliciesList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetScalingPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftFleetScalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftFleetScalingPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>]

---


### GameliftFleetScalingPoliciesOutputReference <a name="GameliftFleetScalingPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetScalingPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.putTargetConfiguration">put_target_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetComparisonOperator">reset_comparison_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetPolicyType">reset_policy_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustment">reset_scaling_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustmentType">reset_scaling_adjustment_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetTargetConfiguration">reset_target_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetUpdateStatus">reset_update_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_configuration` <a name="put_target_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.putTargetConfiguration"></a>

```python
def put_target_configuration(
  target_value: typing.Union[int, float] = None
) -> None
```

###### `target_value`<sup>Optional</sup> <a name="target_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.putTargetConfiguration.parameter.targetValue"></a>

- *Type:* typing.Union[int, float]

Desired value to use with a target-based scaling policy.

The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/gamelift_fleet#target_value GameliftFleet#target_value}

---

##### `reset_comparison_operator` <a name="reset_comparison_operator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetComparisonOperator"></a>

```python
def reset_comparison_operator() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_policy_type` <a name="reset_policy_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetPolicyType"></a>

```python
def reset_policy_type() -> None
```

##### `reset_scaling_adjustment` <a name="reset_scaling_adjustment" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustment"></a>

```python
def reset_scaling_adjustment() -> None
```

##### `reset_scaling_adjustment_type` <a name="reset_scaling_adjustment_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustmentType"></a>

```python
def reset_scaling_adjustment_type() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_target_configuration` <a name="reset_target_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetTargetConfiguration"></a>

```python
def reset_target_configuration() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```

##### `reset_update_status` <a name="reset_update_status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetUpdateStatus"></a>

```python
def reset_update_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfiguration">target_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference">GameliftFleetScalingPoliciesTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput">scaling_adjustment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput">scaling_adjustment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfigurationInput">target_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatusInput">update_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustment">scaling_adjustment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentType">scaling_adjustment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatus">update_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_configuration`<sup>Required</sup> <a name="target_configuration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfiguration"></a>

```python
target_configuration: GameliftFleetScalingPoliciesTargetConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference">GameliftFleetScalingPoliciesTargetConfigurationOutputReference</a>

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `scaling_adjustment_input`<sup>Optional</sup> <a name="scaling_adjustment_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput"></a>

```python
scaling_adjustment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_adjustment_type_input`<sup>Optional</sup> <a name="scaling_adjustment_type_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput"></a>

```python
scaling_adjustment_type_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `target_configuration_input`<sup>Optional</sup> <a name="target_configuration_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfigurationInput"></a>

```python
target_configuration_input: IResolvable | GameliftFleetScalingPoliciesTargetConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_status_input`<sup>Optional</sup> <a name="update_status_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatusInput"></a>

```python
update_status_input: str
```

- *Type:* str

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `scaling_adjustment`<sup>Required</sup> <a name="scaling_adjustment" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustment"></a>

```python
scaling_adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_adjustment_type`<sup>Required</sup> <a name="scaling_adjustment_type" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentType"></a>

```python
scaling_adjustment_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_status`<sup>Required</sup> <a name="update_status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatus"></a>

```python
update_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetScalingPolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>

---


### GameliftFleetScalingPoliciesTargetConfigurationOutputReference <a name="GameliftFleetScalingPoliciesTargetConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue">reset_target_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_value` <a name="reset_target_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue"></a>

```python
def reset_target_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput">target_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_value_input`<sup>Optional</sup> <a name="target_value_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput"></a>

```python
target_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetScalingPoliciesTargetConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

---


### GameliftFleetTagsList <a name="GameliftFleetTagsList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftFleetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>]

---


### GameliftFleetTagsOutputReference <a name="GameliftFleetTagsOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_fleet

gameliftFleet.GameliftFleetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftFleetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>

---



