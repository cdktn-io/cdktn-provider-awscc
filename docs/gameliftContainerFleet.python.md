# `gameliftContainerFleet` Submodule <a name="`gameliftContainerFleet` Submodule" id="@cdktn/provider-awscc.gameliftContainerFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftContainerFleet <a name="GameliftContainerFleet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet awscc_gamelift_container_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  fleet_role_arn: str,
  billing_type: str = None,
  deployment_configuration: GameliftContainerFleetDeploymentConfiguration = None,
  description: str = None,
  game_server_container_group_definition_name: str = None,
  game_server_container_groups_per_instance: typing.Union[int, float] = None,
  game_session_creation_limit_policy: GameliftContainerFleetGameSessionCreationLimitPolicy = None,
  instance_connection_port_range: GameliftContainerFleetInstanceConnectionPortRange = None,
  instance_inbound_permissions: IResolvable | typing.List[GameliftContainerFleetInstanceInboundPermissions] = None,
  instance_type: str = None,
  locations: IResolvable | typing.List[GameliftContainerFleetLocations] = None,
  log_configuration: GameliftContainerFleetLogConfiguration = None,
  metric_groups: typing.List[str] = None,
  new_game_session_protection_policy: str = None,
  per_instance_container_group_definition_name: str = None,
  player_gateway_mode: str = None,
  scaling_policies: IResolvable | typing.List[GameliftContainerFleetScalingPolicies] = None,
  tags: IResolvable | typing.List[GameliftContainerFleetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.fleetRoleArn">fleet_role_arn</a></code> | <code>str</code> | A unique identifier for an AWS IAM role that manages access to your AWS services. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.billingType">billing_type</a></code> | <code>str</code> | Indicates whether to use On-Demand instances or Spot instances for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.deploymentConfiguration">deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | Provides details about how to drain old tasks and replace them with new updated tasks. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.gameServerContainerGroupDefinitionName">game_server_container_group_definition_name</a></code> | <code>str</code> | The name of the container group definition that will be created per game server. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.gameServerContainerGroupsPerInstance">game_server_container_groups_per_instance</a></code> | <code>typing.Union[int, float]</code> | The number of desired game server container groups per instance, a number between 1-5000. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.gameSessionCreationLimitPolicy">game_session_creation_limit_policy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | A policy that limits the number of game sessions an individual player can create over a span of time for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.instanceConnectionPortRange">instance_connection_port_range</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.instanceInboundPermissions">instance_inbound_permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>]</code> | A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | The name of an EC2 instance type that is supported in Amazon GameLift. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.locations">locations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#locations GameliftContainerFleet#locations}. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | A policy the location and provider of logs from the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.metricGroups">metric_groups</a></code> | <code>typing.List[str]</code> | The name of an Amazon CloudWatch metric group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.newGameSessionProtectionPolicy">new_game_session_protection_policy</a></code> | <code>str</code> | A game session protection policy to apply to all game sessions hosted on instances in this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.perInstanceContainerGroupDefinitionName">per_instance_container_group_definition_name</a></code> | <code>str</code> | The name of the container group definition that will be created per instance. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.playerGatewayMode">player_gateway_mode</a></code> | <code>str</code> | The player gateway mode for the container fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.scalingPolicies">scaling_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>]</code> | A list of rules that control how a fleet is scaled. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fleet_role_arn`<sup>Required</sup> <a name="fleet_role_arn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.fleetRoleArn"></a>

- *Type:* str

A unique identifier for an AWS IAM role that manages access to your AWS services.

Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#fleet_role_arn GameliftContainerFleet#fleet_role_arn}

---

##### `billing_type`<sup>Optional</sup> <a name="billing_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.billingType"></a>

- *Type:* str

Indicates whether to use On-Demand instances or Spot instances for this fleet.

If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#billing_type GameliftContainerFleet#billing_type}

---

##### `deployment_configuration`<sup>Optional</sup> <a name="deployment_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.deploymentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

Provides details about how to drain old tasks and replace them with new updated tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#deployment_configuration GameliftContainerFleet#deployment_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#description GameliftContainerFleet#description}

---

##### `game_server_container_group_definition_name`<sup>Optional</sup> <a name="game_server_container_group_definition_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.gameServerContainerGroupDefinitionName"></a>

- *Type:* str

The name of the container group definition that will be created per game server.

You must specify GAME_SERVER container group. You have the option to also specify one PER_INSTANCE container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#game_server_container_group_definition_name GameliftContainerFleet#game_server_container_group_definition_name}

---

##### `game_server_container_groups_per_instance`<sup>Optional</sup> <a name="game_server_container_groups_per_instance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.gameServerContainerGroupsPerInstance"></a>

- *Type:* typing.Union[int, float]

The number of desired game server container groups per instance, a number between 1-5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#game_server_container_groups_per_instance GameliftContainerFleet#game_server_container_groups_per_instance}

---

##### `game_session_creation_limit_policy`<sup>Optional</sup> <a name="game_session_creation_limit_policy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.gameSessionCreationLimitPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#game_session_creation_limit_policy GameliftContainerFleet#game_session_creation_limit_policy}

---

##### `instance_connection_port_range`<sup>Optional</sup> <a name="instance_connection_port_range" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.instanceConnectionPortRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#instance_connection_port_range GameliftContainerFleet#instance_connection_port_range}

---

##### `instance_inbound_permissions`<sup>Optional</sup> <a name="instance_inbound_permissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.instanceInboundPermissions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>]

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#instance_inbound_permissions GameliftContainerFleet#instance_inbound_permissions}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.instanceType"></a>

- *Type:* str

The name of an EC2 instance type that is supported in Amazon GameLift.

A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#instance_type GameliftContainerFleet#instance_type}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.locations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#locations GameliftContainerFleet#locations}.

---

##### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.logConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

A policy the location and provider of logs from the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#log_configuration GameliftContainerFleet#log_configuration}

---

##### `metric_groups`<sup>Optional</sup> <a name="metric_groups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.metricGroups"></a>

- *Type:* typing.List[str]

The name of an Amazon CloudWatch metric group.

A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#metric_groups GameliftContainerFleet#metric_groups}

---

##### `new_game_session_protection_policy`<sup>Optional</sup> <a name="new_game_session_protection_policy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.newGameSessionProtectionPolicy"></a>

- *Type:* str

A game session protection policy to apply to all game sessions hosted on instances in this fleet.

When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#new_game_session_protection_policy GameliftContainerFleet#new_game_session_protection_policy}

---

##### `per_instance_container_group_definition_name`<sup>Optional</sup> <a name="per_instance_container_group_definition_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.perInstanceContainerGroupDefinitionName"></a>

- *Type:* str

The name of the container group definition that will be created per instance.

This field is optional if you specify GameServerContainerGroupDefinitionName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#per_instance_container_group_definition_name GameliftContainerFleet#per_instance_container_group_definition_name}

---

##### `player_gateway_mode`<sup>Optional</sup> <a name="player_gateway_mode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.playerGatewayMode"></a>

- *Type:* str

The player gateway mode for the container fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#player_gateway_mode GameliftContainerFleet#player_gateway_mode}

---

##### `scaling_policies`<sup>Optional</sup> <a name="scaling_policies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.scalingPolicies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>]

A list of rules that control how a fleet is scaled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#scaling_policies GameliftContainerFleet#scaling_policies}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#tags GameliftContainerFleet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration">put_deployment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy">put_game_session_creation_limit_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange">put_instance_connection_port_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceInboundPermissions">put_instance_inbound_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLocations">put_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration">put_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putScalingPolicies">put_scaling_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetBillingType">reset_billing_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDeploymentConfiguration">reset_deployment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupDefinitionName">reset_game_server_container_group_definition_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupsPerInstance">reset_game_server_container_groups_per_instance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameSessionCreationLimitPolicy">reset_game_session_creation_limit_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceConnectionPortRange">reset_instance_connection_port_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceInboundPermissions">reset_instance_inbound_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLocations">reset_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLogConfiguration">reset_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetMetricGroups">reset_metric_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetNewGameSessionProtectionPolicy">reset_new_game_session_protection_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPerInstanceContainerGroupDefinitionName">reset_per_instance_container_group_definition_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPlayerGatewayMode">reset_player_gateway_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetScalingPolicies">reset_scaling_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deployment_configuration` <a name="put_deployment_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration"></a>

```python
def put_deployment_configuration(
  impairment_strategy: str = None,
  minimum_healthy_percentage: typing.Union[int, float] = None,
  protection_strategy: str = None
) -> None
```

###### `impairment_strategy`<sup>Optional</sup> <a name="impairment_strategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration.parameter.impairmentStrategy"></a>

- *Type:* str

The strategy to apply in case of impairment; defaults to MAINTAIN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#impairment_strategy GameliftContainerFleet#impairment_strategy}

---

###### `minimum_healthy_percentage`<sup>Optional</sup> <a name="minimum_healthy_percentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration.parameter.minimumHealthyPercentage"></a>

- *Type:* typing.Union[int, float]

The minimum percentage of healthy required; defaults to 75.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#minimum_healthy_percentage GameliftContainerFleet#minimum_healthy_percentage}

---

###### `protection_strategy`<sup>Optional</sup> <a name="protection_strategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration.parameter.protectionStrategy"></a>

- *Type:* str

The protection strategy for deployment on the container fleet; defaults to WITH_PROTECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#protection_strategy GameliftContainerFleet#protection_strategy}

---

##### `put_game_session_creation_limit_policy` <a name="put_game_session_creation_limit_policy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy"></a>

```python
def put_game_session_creation_limit_policy(
  new_game_sessions_per_creator: typing.Union[int, float] = None,
  policy_period_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `new_game_sessions_per_creator`<sup>Optional</sup> <a name="new_game_sessions_per_creator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy.parameter.newGameSessionsPerCreator"></a>

- *Type:* typing.Union[int, float]

The maximum number of game sessions that an individual can create during the policy period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#new_game_sessions_per_creator GameliftContainerFleet#new_game_sessions_per_creator}

---

###### `policy_period_in_minutes`<sup>Optional</sup> <a name="policy_period_in_minutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy.parameter.policyPeriodInMinutes"></a>

- *Type:* typing.Union[int, float]

The time span used in evaluating the resource creation limit policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#policy_period_in_minutes GameliftContainerFleet#policy_period_in_minutes}

---

##### `put_instance_connection_port_range` <a name="put_instance_connection_port_range" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange"></a>

```python
def put_instance_connection_port_range(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
) -> None
```

###### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange.parameter.fromPort"></a>

- *Type:* typing.Union[int, float]

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#from_port GameliftContainerFleet#from_port}

---

###### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange.parameter.toPort"></a>

- *Type:* typing.Union[int, float]

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#to_port GameliftContainerFleet#to_port}

---

##### `put_instance_inbound_permissions` <a name="put_instance_inbound_permissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceInboundPermissions"></a>

```python
def put_instance_inbound_permissions(
  value: IResolvable | typing.List[GameliftContainerFleetInstanceInboundPermissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceInboundPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>]

---

##### `put_locations` <a name="put_locations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLocations"></a>

```python
def put_locations(
  value: IResolvable | typing.List[GameliftContainerFleetLocations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLocations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>]

---

##### `put_log_configuration` <a name="put_log_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration"></a>

```python
def put_log_configuration(
  log_destination: str = None,
  log_group_arn: str = None,
  s3_bucket_name: str = None
) -> None
```

###### `log_destination`<sup>Optional</sup> <a name="log_destination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration.parameter.logDestination"></a>

- *Type:* str

Configures the service that provides logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#log_destination GameliftContainerFleet#log_destination}

---

###### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration.parameter.logGroupArn"></a>

- *Type:* str

If log destination is CLOUDWATCH, logs are sent to the specified log group in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#log_group_arn GameliftContainerFleet#log_group_arn}

---

###### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration.parameter.s3BucketName"></a>

- *Type:* str

The name of the S3 bucket to pull logs from if S3 is the LogDestination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#s3_bucket_name GameliftContainerFleet#s3_bucket_name}

---

##### `put_scaling_policies` <a name="put_scaling_policies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putScalingPolicies"></a>

```python
def put_scaling_policies(
  value: IResolvable | typing.List[GameliftContainerFleetScalingPolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putScalingPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GameliftContainerFleetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>]

---

##### `reset_billing_type` <a name="reset_billing_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetBillingType"></a>

```python
def reset_billing_type() -> None
```

##### `reset_deployment_configuration` <a name="reset_deployment_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDeploymentConfiguration"></a>

```python
def reset_deployment_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_game_server_container_group_definition_name` <a name="reset_game_server_container_group_definition_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupDefinitionName"></a>

```python
def reset_game_server_container_group_definition_name() -> None
```

##### `reset_game_server_container_groups_per_instance` <a name="reset_game_server_container_groups_per_instance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupsPerInstance"></a>

```python
def reset_game_server_container_groups_per_instance() -> None
```

##### `reset_game_session_creation_limit_policy` <a name="reset_game_session_creation_limit_policy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameSessionCreationLimitPolicy"></a>

```python
def reset_game_session_creation_limit_policy() -> None
```

##### `reset_instance_connection_port_range` <a name="reset_instance_connection_port_range" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceConnectionPortRange"></a>

```python
def reset_instance_connection_port_range() -> None
```

##### `reset_instance_inbound_permissions` <a name="reset_instance_inbound_permissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceInboundPermissions"></a>

```python
def reset_instance_inbound_permissions() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_locations` <a name="reset_locations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLocations"></a>

```python
def reset_locations() -> None
```

##### `reset_log_configuration` <a name="reset_log_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLogConfiguration"></a>

```python
def reset_log_configuration() -> None
```

##### `reset_metric_groups` <a name="reset_metric_groups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetMetricGroups"></a>

```python
def reset_metric_groups() -> None
```

##### `reset_new_game_session_protection_policy` <a name="reset_new_game_session_protection_policy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetNewGameSessionProtectionPolicy"></a>

```python
def reset_new_game_session_protection_policy() -> None
```

##### `reset_per_instance_container_group_definition_name` <a name="reset_per_instance_container_group_definition_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPerInstanceContainerGroupDefinitionName"></a>

```python
def reset_per_instance_container_group_definition_name() -> None
```

##### `reset_player_gateway_mode` <a name="reset_player_gateway_mode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPlayerGatewayMode"></a>

```python
def reset_player_gateway_mode() -> None
```

##### `reset_scaling_policies` <a name="reset_scaling_policies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetScalingPolicies"></a>

```python
def reset_scaling_policies() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GameliftContainerFleet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isConstruct"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GameliftContainerFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GameliftContainerFleet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GameliftContainerFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GameliftContainerFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfiguration">deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference">GameliftContainerFleetDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentDetails">deployment_details</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference">GameliftContainerFleetDeploymentDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetArn">fleet_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionArn">game_server_container_group_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicy">game_session_creation_limit_policy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference">GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRange">instance_connection_port_range</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference">GameliftContainerFleetInstanceConnectionPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissions">instance_inbound_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList">GameliftContainerFleetInstanceInboundPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locations">locations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList">GameliftContainerFleetLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference">GameliftContainerFleetLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.maximumGameServerContainerGroupsPerInstance">maximum_game_server_container_groups_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionArn">per_instance_container_group_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPolicies">scaling_policies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList">GameliftContainerFleetScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList">GameliftContainerFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingTypeInput">billing_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfigurationInput">deployment_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArnInput">fleet_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionNameInput">game_server_container_group_definition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstanceInput">game_server_container_groups_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicyInput">game_session_creation_limit_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRangeInput">instance_connection_port_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissionsInput">instance_inbound_permissions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locationsInput">locations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfigurationInput">log_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroupsInput">metric_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicyInput">new_game_session_protection_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionNameInput">per_instance_container_group_definition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayModeInput">player_gateway_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPoliciesInput">scaling_policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingType">billing_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArn">fleet_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionName">game_server_container_group_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstance">game_server_container_groups_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroups">metric_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicy">new_game_session_protection_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionName">per_instance_container_group_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayMode">player_gateway_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `deployment_configuration`<sup>Required</sup> <a name="deployment_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfiguration"></a>

```python
deployment_configuration: GameliftContainerFleetDeploymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference">GameliftContainerFleetDeploymentConfigurationOutputReference</a>

---

##### `deployment_details`<sup>Required</sup> <a name="deployment_details" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentDetails"></a>

```python
deployment_details: GameliftContainerFleetDeploymentDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference">GameliftContainerFleetDeploymentDetailsOutputReference</a>

---

##### `fleet_arn`<sup>Required</sup> <a name="fleet_arn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetArn"></a>

```python
fleet_arn: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `game_server_container_group_definition_arn`<sup>Required</sup> <a name="game_server_container_group_definition_arn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionArn"></a>

```python
game_server_container_group_definition_arn: str
```

- *Type:* str

---

##### `game_session_creation_limit_policy`<sup>Required</sup> <a name="game_session_creation_limit_policy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicy"></a>

```python
game_session_creation_limit_policy: GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference">GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_connection_port_range`<sup>Required</sup> <a name="instance_connection_port_range" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRange"></a>

```python
instance_connection_port_range: GameliftContainerFleetInstanceConnectionPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference">GameliftContainerFleetInstanceConnectionPortRangeOutputReference</a>

---

##### `instance_inbound_permissions`<sup>Required</sup> <a name="instance_inbound_permissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissions"></a>

```python
instance_inbound_permissions: GameliftContainerFleetInstanceInboundPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList">GameliftContainerFleetInstanceInboundPermissionsList</a>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locations"></a>

```python
locations: GameliftContainerFleetLocationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList">GameliftContainerFleetLocationsList</a>

---

##### `log_configuration`<sup>Required</sup> <a name="log_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfiguration"></a>

```python
log_configuration: GameliftContainerFleetLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference">GameliftContainerFleetLogConfigurationOutputReference</a>

---

##### `maximum_game_server_container_groups_per_instance`<sup>Required</sup> <a name="maximum_game_server_container_groups_per_instance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.maximumGameServerContainerGroupsPerInstance"></a>

```python
maximum_game_server_container_groups_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_instance_container_group_definition_arn`<sup>Required</sup> <a name="per_instance_container_group_definition_arn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionArn"></a>

```python
per_instance_container_group_definition_arn: str
```

- *Type:* str

---

##### `scaling_policies`<sup>Required</sup> <a name="scaling_policies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPolicies"></a>

```python
scaling_policies: GameliftContainerFleetScalingPoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList">GameliftContainerFleetScalingPoliciesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tags"></a>

```python
tags: GameliftContainerFleetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList">GameliftContainerFleetTagsList</a>

---

##### `billing_type_input`<sup>Optional</sup> <a name="billing_type_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingTypeInput"></a>

```python
billing_type_input: str
```

- *Type:* str

---

##### `deployment_configuration_input`<sup>Optional</sup> <a name="deployment_configuration_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfigurationInput"></a>

```python
deployment_configuration_input: IResolvable | GameliftContainerFleetDeploymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fleet_role_arn_input`<sup>Optional</sup> <a name="fleet_role_arn_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArnInput"></a>

```python
fleet_role_arn_input: str
```

- *Type:* str

---

##### `game_server_container_group_definition_name_input`<sup>Optional</sup> <a name="game_server_container_group_definition_name_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionNameInput"></a>

```python
game_server_container_group_definition_name_input: str
```

- *Type:* str

---

##### `game_server_container_groups_per_instance_input`<sup>Optional</sup> <a name="game_server_container_groups_per_instance_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstanceInput"></a>

```python
game_server_container_groups_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `game_session_creation_limit_policy_input`<sup>Optional</sup> <a name="game_session_creation_limit_policy_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicyInput"></a>

```python
game_session_creation_limit_policy_input: IResolvable | GameliftContainerFleetGameSessionCreationLimitPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

---

##### `instance_connection_port_range_input`<sup>Optional</sup> <a name="instance_connection_port_range_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRangeInput"></a>

```python
instance_connection_port_range_input: IResolvable | GameliftContainerFleetInstanceConnectionPortRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

---

##### `instance_inbound_permissions_input`<sup>Optional</sup> <a name="instance_inbound_permissions_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissionsInput"></a>

```python
instance_inbound_permissions_input: IResolvable | typing.List[GameliftContainerFleetInstanceInboundPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locationsInput"></a>

```python
locations_input: IResolvable | typing.List[GameliftContainerFleetLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>]

---

##### `log_configuration_input`<sup>Optional</sup> <a name="log_configuration_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfigurationInput"></a>

```python
log_configuration_input: IResolvable | GameliftContainerFleetLogConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

---

##### `metric_groups_input`<sup>Optional</sup> <a name="metric_groups_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroupsInput"></a>

```python
metric_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_game_session_protection_policy_input`<sup>Optional</sup> <a name="new_game_session_protection_policy_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicyInput"></a>

```python
new_game_session_protection_policy_input: str
```

- *Type:* str

---

##### `per_instance_container_group_definition_name_input`<sup>Optional</sup> <a name="per_instance_container_group_definition_name_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionNameInput"></a>

```python
per_instance_container_group_definition_name_input: str
```

- *Type:* str

---

##### `player_gateway_mode_input`<sup>Optional</sup> <a name="player_gateway_mode_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayModeInput"></a>

```python
player_gateway_mode_input: str
```

- *Type:* str

---

##### `scaling_policies_input`<sup>Optional</sup> <a name="scaling_policies_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPoliciesInput"></a>

```python
scaling_policies_input: IResolvable | typing.List[GameliftContainerFleetScalingPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GameliftContainerFleetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>]

---

##### `billing_type`<sup>Required</sup> <a name="billing_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingType"></a>

```python
billing_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fleet_role_arn`<sup>Required</sup> <a name="fleet_role_arn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArn"></a>

```python
fleet_role_arn: str
```

- *Type:* str

---

##### `game_server_container_group_definition_name`<sup>Required</sup> <a name="game_server_container_group_definition_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionName"></a>

```python
game_server_container_group_definition_name: str
```

- *Type:* str

---

##### `game_server_container_groups_per_instance`<sup>Required</sup> <a name="game_server_container_groups_per_instance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstance"></a>

```python
game_server_container_groups_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `metric_groups`<sup>Required</sup> <a name="metric_groups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroups"></a>

```python
metric_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_game_session_protection_policy`<sup>Required</sup> <a name="new_game_session_protection_policy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicy"></a>

```python
new_game_session_protection_policy: str
```

- *Type:* str

---

##### `per_instance_container_group_definition_name`<sup>Required</sup> <a name="per_instance_container_group_definition_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionName"></a>

```python
per_instance_container_group_definition_name: str
```

- *Type:* str

---

##### `player_gateway_mode`<sup>Required</sup> <a name="player_gateway_mode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayMode"></a>

```python
player_gateway_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftContainerFleetConfig <a name="GameliftContainerFleetConfig" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  fleet_role_arn: str,
  billing_type: str = None,
  deployment_configuration: GameliftContainerFleetDeploymentConfiguration = None,
  description: str = None,
  game_server_container_group_definition_name: str = None,
  game_server_container_groups_per_instance: typing.Union[int, float] = None,
  game_session_creation_limit_policy: GameliftContainerFleetGameSessionCreationLimitPolicy = None,
  instance_connection_port_range: GameliftContainerFleetInstanceConnectionPortRange = None,
  instance_inbound_permissions: IResolvable | typing.List[GameliftContainerFleetInstanceInboundPermissions] = None,
  instance_type: str = None,
  locations: IResolvable | typing.List[GameliftContainerFleetLocations] = None,
  log_configuration: GameliftContainerFleetLogConfiguration = None,
  metric_groups: typing.List[str] = None,
  new_game_session_protection_policy: str = None,
  per_instance_container_group_definition_name: str = None,
  player_gateway_mode: str = None,
  scaling_policies: IResolvable | typing.List[GameliftContainerFleetScalingPolicies] = None,
  tags: IResolvable | typing.List[GameliftContainerFleetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.fleetRoleArn">fleet_role_arn</a></code> | <code>str</code> | A unique identifier for an AWS IAM role that manages access to your AWS services. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.billingType">billing_type</a></code> | <code>str</code> | Indicates whether to use On-Demand instances or Spot instances for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.deploymentConfiguration">deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | Provides details about how to drain old tasks and replace them with new updated tasks. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupDefinitionName">game_server_container_group_definition_name</a></code> | <code>str</code> | The name of the container group definition that will be created per game server. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupsPerInstance">game_server_container_groups_per_instance</a></code> | <code>typing.Union[int, float]</code> | The number of desired game server container groups per instance, a number between 1-5000. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameSessionCreationLimitPolicy">game_session_creation_limit_policy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | A policy that limits the number of game sessions an individual player can create over a span of time for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceConnectionPortRange">instance_connection_port_range</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceInboundPermissions">instance_inbound_permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>]</code> | A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceType">instance_type</a></code> | <code>str</code> | The name of an EC2 instance type that is supported in Amazon GameLift. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.locations">locations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#locations GameliftContainerFleet#locations}. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | A policy the location and provider of logs from the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.metricGroups">metric_groups</a></code> | <code>typing.List[str]</code> | The name of an Amazon CloudWatch metric group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.newGameSessionProtectionPolicy">new_game_session_protection_policy</a></code> | <code>str</code> | A game session protection policy to apply to all game sessions hosted on instances in this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.perInstanceContainerGroupDefinitionName">per_instance_container_group_definition_name</a></code> | <code>str</code> | The name of the container group definition that will be created per instance. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.playerGatewayMode">player_gateway_mode</a></code> | <code>str</code> | The player gateway mode for the container fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.scalingPolicies">scaling_policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>]</code> | A list of rules that control how a fleet is scaled. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fleet_role_arn`<sup>Required</sup> <a name="fleet_role_arn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.fleetRoleArn"></a>

```python
fleet_role_arn: str
```

- *Type:* str

A unique identifier for an AWS IAM role that manages access to your AWS services.

Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#fleet_role_arn GameliftContainerFleet#fleet_role_arn}

---

##### `billing_type`<sup>Optional</sup> <a name="billing_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.billingType"></a>

```python
billing_type: str
```

- *Type:* str

Indicates whether to use On-Demand instances or Spot instances for this fleet.

If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#billing_type GameliftContainerFleet#billing_type}

---

##### `deployment_configuration`<sup>Optional</sup> <a name="deployment_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.deploymentConfiguration"></a>

```python
deployment_configuration: GameliftContainerFleetDeploymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

Provides details about how to drain old tasks and replace them with new updated tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#deployment_configuration GameliftContainerFleet#deployment_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#description GameliftContainerFleet#description}

---

##### `game_server_container_group_definition_name`<sup>Optional</sup> <a name="game_server_container_group_definition_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupDefinitionName"></a>

```python
game_server_container_group_definition_name: str
```

- *Type:* str

The name of the container group definition that will be created per game server.

You must specify GAME_SERVER container group. You have the option to also specify one PER_INSTANCE container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#game_server_container_group_definition_name GameliftContainerFleet#game_server_container_group_definition_name}

---

##### `game_server_container_groups_per_instance`<sup>Optional</sup> <a name="game_server_container_groups_per_instance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupsPerInstance"></a>

```python
game_server_container_groups_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of desired game server container groups per instance, a number between 1-5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#game_server_container_groups_per_instance GameliftContainerFleet#game_server_container_groups_per_instance}

---

##### `game_session_creation_limit_policy`<sup>Optional</sup> <a name="game_session_creation_limit_policy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameSessionCreationLimitPolicy"></a>

```python
game_session_creation_limit_policy: GameliftContainerFleetGameSessionCreationLimitPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#game_session_creation_limit_policy GameliftContainerFleet#game_session_creation_limit_policy}

---

##### `instance_connection_port_range`<sup>Optional</sup> <a name="instance_connection_port_range" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceConnectionPortRange"></a>

```python
instance_connection_port_range: GameliftContainerFleetInstanceConnectionPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#instance_connection_port_range GameliftContainerFleet#instance_connection_port_range}

---

##### `instance_inbound_permissions`<sup>Optional</sup> <a name="instance_inbound_permissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceInboundPermissions"></a>

```python
instance_inbound_permissions: IResolvable | typing.List[GameliftContainerFleetInstanceInboundPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>]

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#instance_inbound_permissions GameliftContainerFleet#instance_inbound_permissions}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The name of an EC2 instance type that is supported in Amazon GameLift.

A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#instance_type GameliftContainerFleet#instance_type}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.locations"></a>

```python
locations: IResolvable | typing.List[GameliftContainerFleetLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#locations GameliftContainerFleet#locations}.

---

##### `log_configuration`<sup>Optional</sup> <a name="log_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.logConfiguration"></a>

```python
log_configuration: GameliftContainerFleetLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

A policy the location and provider of logs from the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#log_configuration GameliftContainerFleet#log_configuration}

---

##### `metric_groups`<sup>Optional</sup> <a name="metric_groups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.metricGroups"></a>

```python
metric_groups: typing.List[str]
```

- *Type:* typing.List[str]

The name of an Amazon CloudWatch metric group.

A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#metric_groups GameliftContainerFleet#metric_groups}

---

##### `new_game_session_protection_policy`<sup>Optional</sup> <a name="new_game_session_protection_policy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.newGameSessionProtectionPolicy"></a>

```python
new_game_session_protection_policy: str
```

- *Type:* str

A game session protection policy to apply to all game sessions hosted on instances in this fleet.

When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#new_game_session_protection_policy GameliftContainerFleet#new_game_session_protection_policy}

---

##### `per_instance_container_group_definition_name`<sup>Optional</sup> <a name="per_instance_container_group_definition_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.perInstanceContainerGroupDefinitionName"></a>

```python
per_instance_container_group_definition_name: str
```

- *Type:* str

The name of the container group definition that will be created per instance.

This field is optional if you specify GameServerContainerGroupDefinitionName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#per_instance_container_group_definition_name GameliftContainerFleet#per_instance_container_group_definition_name}

---

##### `player_gateway_mode`<sup>Optional</sup> <a name="player_gateway_mode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.playerGatewayMode"></a>

```python
player_gateway_mode: str
```

- *Type:* str

The player gateway mode for the container fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#player_gateway_mode GameliftContainerFleet#player_gateway_mode}

---

##### `scaling_policies`<sup>Optional</sup> <a name="scaling_policies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.scalingPolicies"></a>

```python
scaling_policies: IResolvable | typing.List[GameliftContainerFleetScalingPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>]

A list of rules that control how a fleet is scaled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#scaling_policies GameliftContainerFleet#scaling_policies}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GameliftContainerFleetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#tags GameliftContainerFleet#tags}

---

### GameliftContainerFleetDeploymentConfiguration <a name="GameliftContainerFleetDeploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration(
  impairment_strategy: str = None,
  minimum_healthy_percentage: typing.Union[int, float] = None,
  protection_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.impairmentStrategy">impairment_strategy</a></code> | <code>str</code> | The strategy to apply in case of impairment; defaults to MAINTAIN. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.minimumHealthyPercentage">minimum_healthy_percentage</a></code> | <code>typing.Union[int, float]</code> | The minimum percentage of healthy required; defaults to 75. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.protectionStrategy">protection_strategy</a></code> | <code>str</code> | The protection strategy for deployment on the container fleet; defaults to WITH_PROTECTION. |

---

##### `impairment_strategy`<sup>Optional</sup> <a name="impairment_strategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.impairmentStrategy"></a>

```python
impairment_strategy: str
```

- *Type:* str

The strategy to apply in case of impairment; defaults to MAINTAIN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#impairment_strategy GameliftContainerFleet#impairment_strategy}

---

##### `minimum_healthy_percentage`<sup>Optional</sup> <a name="minimum_healthy_percentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.minimumHealthyPercentage"></a>

```python
minimum_healthy_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum percentage of healthy required; defaults to 75.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#minimum_healthy_percentage GameliftContainerFleet#minimum_healthy_percentage}

---

##### `protection_strategy`<sup>Optional</sup> <a name="protection_strategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.protectionStrategy"></a>

```python
protection_strategy: str
```

- *Type:* str

The protection strategy for deployment on the container fleet; defaults to WITH_PROTECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#protection_strategy GameliftContainerFleet#protection_strategy}

---

### GameliftContainerFleetDeploymentDetails <a name="GameliftContainerFleetDeploymentDetails" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetDeploymentDetails()
```


### GameliftContainerFleetGameSessionCreationLimitPolicy <a name="GameliftContainerFleetGameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy(
  new_game_sessions_per_creator: typing.Union[int, float] = None,
  policy_period_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.newGameSessionsPerCreator">new_game_sessions_per_creator</a></code> | <code>typing.Union[int, float]</code> | The maximum number of game sessions that an individual can create during the policy period. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.policyPeriodInMinutes">policy_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The time span used in evaluating the resource creation limit policy. |

---

##### `new_game_sessions_per_creator`<sup>Optional</sup> <a name="new_game_sessions_per_creator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

```python
new_game_sessions_per_creator: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of game sessions that an individual can create during the policy period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#new_game_sessions_per_creator GameliftContainerFleet#new_game_sessions_per_creator}

---

##### `policy_period_in_minutes`<sup>Optional</sup> <a name="policy_period_in_minutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.policyPeriodInMinutes"></a>

```python
policy_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time span used in evaluating the resource creation limit policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#policy_period_in_minutes GameliftContainerFleet#policy_period_in_minutes}

---

### GameliftContainerFleetInstanceConnectionPortRange <a name="GameliftContainerFleetInstanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | A starting value for a range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | An ending value for a range of allowed port numbers. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#from_port GameliftContainerFleet#from_port}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#to_port GameliftContainerFleet#to_port}

---

### GameliftContainerFleetInstanceInboundPermissions <a name="GameliftContainerFleetInstanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions(
  from_port: typing.Union[int, float] = None,
  ip_range: str = None,
  protocol: str = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | A starting value for a range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.ipRange">ip_range</a></code> | <code>str</code> | A range of allowed IP addresses. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.protocol">protocol</a></code> | <code>str</code> | The network communication protocol used by the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | An ending value for a range of allowed port numbers. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#from_port GameliftContainerFleet#from_port}

---

##### `ip_range`<sup>Optional</sup> <a name="ip_range" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

A range of allowed IP addresses.

This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#ip_range GameliftContainerFleet#ip_range}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The network communication protocol used by the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#protocol GameliftContainerFleet#protocol}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#to_port GameliftContainerFleet#to_port}

---

### GameliftContainerFleetLocations <a name="GameliftContainerFleetLocations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetLocations(
  location: str = None,
  location_capacity: GameliftContainerFleetLocationsLocationCapacity = None,
  player_gateway_status: str = None,
  stopped_actions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#location GameliftContainerFleet#location}. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.locationCapacity">location_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a></code> | Current resource capacity settings in a specified fleet or location. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.playerGatewayStatus">player_gateway_status</a></code> | <code>str</code> | The player gateway status for the location. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.stoppedActions">stopped_actions</a></code> | <code>typing.List[str]</code> | A list of fleet actions that have been suspended in the fleet location. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#location GameliftContainerFleet#location}.

---

##### `location_capacity`<sup>Optional</sup> <a name="location_capacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.locationCapacity"></a>

```python
location_capacity: GameliftContainerFleetLocationsLocationCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

Current resource capacity settings in a specified fleet or location.

The location value might refer to a fleet's remote location or its home Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#location_capacity GameliftContainerFleet#location_capacity}

---

##### `player_gateway_status`<sup>Optional</sup> <a name="player_gateway_status" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.playerGatewayStatus"></a>

```python
player_gateway_status: str
```

- *Type:* str

The player gateway status for the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#player_gateway_status GameliftContainerFleet#player_gateway_status}

---

##### `stopped_actions`<sup>Optional</sup> <a name="stopped_actions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.stoppedActions"></a>

```python
stopped_actions: typing.List[str]
```

- *Type:* typing.List[str]

A list of fleet actions that have been suspended in the fleet location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#stopped_actions GameliftContainerFleet#stopped_actions}

---

### GameliftContainerFleetLocationsLocationCapacity <a name="GameliftContainerFleetLocationsLocationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity(
  desired_ec2_instances: typing.Union[int, float] = None,
  managed_capacity_configuration: GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.desiredEc2Instances">desired_ec2_instances</a></code> | <code>typing.Union[int, float]</code> | Defaults to MinSize if not defined. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.managedCapacityConfiguration">managed_capacity_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | Configuration options for Amazon GameLift Servers-managed capacity behavior. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | The maximum value that is allowed for the fleet's instance count for a location. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | The minimum value allowed for the fleet's instance count for a location. |

---

##### `desired_ec2_instances`<sup>Optional</sup> <a name="desired_ec2_instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.desiredEc2Instances"></a>

```python
desired_ec2_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defaults to MinSize if not defined.

The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits. If any auto-scaling policy is defined for the container fleet, the desired instance will only be applied once during fleet creation and will be ignored in updates to avoid conflicts with auto-scaling. During updates with any auto-scaling policy defined, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#desired_ec2_instances GameliftContainerFleet#desired_ec2_instances}

---

##### `managed_capacity_configuration`<sup>Optional</sup> <a name="managed_capacity_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.managedCapacityConfiguration"></a>

```python
managed_capacity_configuration: GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

Configuration options for Amazon GameLift Servers-managed capacity behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#managed_capacity_configuration GameliftContainerFleet#managed_capacity_configuration}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum value that is allowed for the fleet's instance count for a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#max_size GameliftContainerFleet#max_size}

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum value allowed for the fleet's instance count for a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#min_size GameliftContainerFleet#min_size}

---

### GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration <a name="GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration(
  scale_in_after_inactivity_minutes: typing.Union[int, float] = None,
  zero_capacity_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes">scale_in_after_inactivity_minutes</a></code> | <code>typing.Union[int, float]</code> | Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy">zero_capacity_strategy</a></code> | <code>str</code> | The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity. |

---

##### `scale_in_after_inactivity_minutes`<sup>Optional</sup> <a name="scale_in_after_inactivity_minutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes"></a>

```python
scale_in_after_inactivity_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#scale_in_after_inactivity_minutes GameliftContainerFleet#scale_in_after_inactivity_minutes}

---

##### `zero_capacity_strategy`<sup>Optional</sup> <a name="zero_capacity_strategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy"></a>

```python
zero_capacity_strategy: str
```

- *Type:* str

The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity.

Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#zero_capacity_strategy GameliftContainerFleet#zero_capacity_strategy}

---

### GameliftContainerFleetLogConfiguration <a name="GameliftContainerFleetLogConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetLogConfiguration(
  log_destination: str = None,
  log_group_arn: str = None,
  s3_bucket_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logDestination">log_destination</a></code> | <code>str</code> | Configures the service that provides logs. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | If log destination is CLOUDWATCH, logs are sent to the specified log group in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | The name of the S3 bucket to pull logs from if S3 is the LogDestination. |

---

##### `log_destination`<sup>Optional</sup> <a name="log_destination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logDestination"></a>

```python
log_destination: str
```

- *Type:* str

Configures the service that provides logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#log_destination GameliftContainerFleet#log_destination}

---

##### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

If log destination is CLOUDWATCH, logs are sent to the specified log group in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#log_group_arn GameliftContainerFleet#log_group_arn}

---

##### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

The name of the S3 bucket to pull logs from if S3 is the LogDestination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#s3_bucket_name GameliftContainerFleet#s3_bucket_name}

---

### GameliftContainerFleetScalingPolicies <a name="GameliftContainerFleetScalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetScalingPolicies(
  comparison_operator: str = None,
  evaluation_periods: typing.Union[int, float] = None,
  metric_name: str = None,
  name: str = None,
  policy_type: str = None,
  scaling_adjustment: typing.Union[int, float] = None,
  scaling_adjustment_type: str = None,
  target_configuration: GameliftContainerFleetScalingPoliciesTargetConfiguration = None,
  threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | Comparison operator to use when measuring a metric against the threshold value. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.metricName">metric_name</a></code> | <code>str</code> | Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.name">name</a></code> | <code>str</code> | A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.policyType">policy_type</a></code> | <code>str</code> | The type of scaling policy to create. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustment">scaling_adjustment</a></code> | <code>typing.Union[int, float]</code> | Amount of adjustment to make, based on the scaling adjustment type. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustmentType">scaling_adjustment_type</a></code> | <code>str</code> | The type of adjustment to make to a fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.targetConfiguration">target_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | An object that contains settings for a target-based scaling policy. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Metric value used to trigger a scaling event. |

---

##### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

Comparison operator to use when measuring a metric against the threshold value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#comparison_operator GameliftContainerFleet#comparison_operator}

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#evaluation_periods GameliftContainerFleet#evaluation_periods}

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#metric_name GameliftContainerFleet#metric_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.name"></a>

```python
name: str
```

- *Type:* str

A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#name GameliftContainerFleet#name}

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

The type of scaling policy to create.

For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#policy_type GameliftContainerFleet#policy_type}

---

##### `scaling_adjustment`<sup>Optional</sup> <a name="scaling_adjustment" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustment"></a>

```python
scaling_adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of adjustment to make, based on the scaling adjustment type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#scaling_adjustment GameliftContainerFleet#scaling_adjustment}

---

##### `scaling_adjustment_type`<sup>Optional</sup> <a name="scaling_adjustment_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustmentType"></a>

```python
scaling_adjustment_type: str
```

- *Type:* str

The type of adjustment to make to a fleet's instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#scaling_adjustment_type GameliftContainerFleet#scaling_adjustment_type}

---

##### `target_configuration`<sup>Optional</sup> <a name="target_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.targetConfiguration"></a>

```python
target_configuration: GameliftContainerFleetScalingPoliciesTargetConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

An object that contains settings for a target-based scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#target_configuration GameliftContainerFleet#target_configuration}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Metric value used to trigger a scaling event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#threshold GameliftContainerFleet#threshold}

---

### GameliftContainerFleetScalingPoliciesTargetConfiguration <a name="GameliftContainerFleetScalingPoliciesTargetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration(
  target_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | Desired value to use with a target-based scaling policy. |

---

##### `target_value`<sup>Optional</sup> <a name="target_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Desired value to use with a target-based scaling policy.

The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#target_value GameliftContainerFleet#target_value}

---

### GameliftContainerFleetTags <a name="GameliftContainerFleetTags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.value">value</a></code> | <code>str</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#key GameliftContainerFleet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#value GameliftContainerFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftContainerFleetDeploymentConfigurationOutputReference <a name="GameliftContainerFleetDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetImpairmentStrategy">reset_impairment_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetMinimumHealthyPercentage">reset_minimum_healthy_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetProtectionStrategy">reset_protection_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_impairment_strategy` <a name="reset_impairment_strategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetImpairmentStrategy"></a>

```python
def reset_impairment_strategy() -> None
```

##### `reset_minimum_healthy_percentage` <a name="reset_minimum_healthy_percentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetMinimumHealthyPercentage"></a>

```python
def reset_minimum_healthy_percentage() -> None
```

##### `reset_protection_strategy` <a name="reset_protection_strategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetProtectionStrategy"></a>

```python
def reset_protection_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategyInput">impairment_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentageInput">minimum_healthy_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategyInput">protection_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategy">impairment_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentage">minimum_healthy_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategy">protection_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `impairment_strategy_input`<sup>Optional</sup> <a name="impairment_strategy_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategyInput"></a>

```python
impairment_strategy_input: str
```

- *Type:* str

---

##### `minimum_healthy_percentage_input`<sup>Optional</sup> <a name="minimum_healthy_percentage_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentageInput"></a>

```python
minimum_healthy_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protection_strategy_input`<sup>Optional</sup> <a name="protection_strategy_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategyInput"></a>

```python
protection_strategy_input: str
```

- *Type:* str

---

##### `impairment_strategy`<sup>Required</sup> <a name="impairment_strategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategy"></a>

```python
impairment_strategy: str
```

- *Type:* str

---

##### `minimum_healthy_percentage`<sup>Required</sup> <a name="minimum_healthy_percentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentage"></a>

```python
minimum_healthy_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protection_strategy`<sup>Required</sup> <a name="protection_strategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategy"></a>

```python
protection_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerFleetDeploymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

---


### GameliftContainerFleetDeploymentDetailsOutputReference <a name="GameliftContainerFleetDeploymentDetailsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.latestDeploymentId">latest_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails">GameliftContainerFleetDeploymentDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latest_deployment_id`<sup>Required</sup> <a name="latest_deployment_id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.latestDeploymentId"></a>

```python
latest_deployment_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GameliftContainerFleetDeploymentDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails">GameliftContainerFleetDeploymentDetails</a>

---


### GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference <a name="GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator">reset_new_game_sessions_per_creator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes">reset_policy_period_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_new_game_sessions_per_creator` <a name="reset_new_game_sessions_per_creator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator"></a>

```python
def reset_new_game_sessions_per_creator() -> None
```

##### `reset_policy_period_in_minutes` <a name="reset_policy_period_in_minutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes"></a>

```python
def reset_policy_period_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput">new_game_sessions_per_creator_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput">policy_period_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">new_game_sessions_per_creator</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">policy_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `new_game_sessions_per_creator_input`<sup>Optional</sup> <a name="new_game_sessions_per_creator_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput"></a>

```python
new_game_sessions_per_creator_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_period_in_minutes_input`<sup>Optional</sup> <a name="policy_period_in_minutes_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput"></a>

```python
policy_period_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `new_game_sessions_per_creator`<sup>Required</sup> <a name="new_game_sessions_per_creator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```python
new_game_sessions_per_creator: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_period_in_minutes`<sup>Required</sup> <a name="policy_period_in_minutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```python
policy_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerFleetGameSessionCreationLimitPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

---


### GameliftContainerFleetInstanceConnectionPortRangeOutputReference <a name="GameliftContainerFleetInstanceConnectionPortRangeOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerFleetInstanceConnectionPortRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

---


### GameliftContainerFleetInstanceInboundPermissionsList <a name="GameliftContainerFleetInstanceInboundPermissionsList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerFleetInstanceInboundPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerFleetInstanceInboundPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>]

---


### GameliftContainerFleetInstanceInboundPermissionsOutputReference <a name="GameliftContainerFleetInstanceInboundPermissionsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetIpRange">reset_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_ip_range` <a name="reset_ip_range" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetIpRange"></a>

```python
def reset_ip_range() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRangeInput">ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRange">ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_range_input`<sup>Optional</sup> <a name="ip_range_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRangeInput"></a>

```python
ip_range_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerFleetInstanceInboundPermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>

---


### GameliftContainerFleetLocationsList <a name="GameliftContainerFleetLocationsList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerFleetLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerFleetLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>]

---


### GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference <a name="GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes">reset_scale_in_after_inactivity_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy">reset_zero_capacity_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scale_in_after_inactivity_minutes` <a name="reset_scale_in_after_inactivity_minutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes"></a>

```python
def reset_scale_in_after_inactivity_minutes() -> None
```

##### `reset_zero_capacity_strategy` <a name="reset_zero_capacity_strategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy"></a>

```python
def reset_zero_capacity_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput">scale_in_after_inactivity_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput">zero_capacity_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes">scale_in_after_inactivity_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy">zero_capacity_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_in_after_inactivity_minutes_input`<sup>Optional</sup> <a name="scale_in_after_inactivity_minutes_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput"></a>

```python
scale_in_after_inactivity_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zero_capacity_strategy_input`<sup>Optional</sup> <a name="zero_capacity_strategy_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput"></a>

```python
zero_capacity_strategy_input: str
```

- *Type:* str

---

##### `scale_in_after_inactivity_minutes`<sup>Required</sup> <a name="scale_in_after_inactivity_minutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes"></a>

```python
scale_in_after_inactivity_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zero_capacity_strategy`<sup>Required</sup> <a name="zero_capacity_strategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy"></a>

```python
zero_capacity_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---


### GameliftContainerFleetLocationsLocationCapacityOutputReference <a name="GameliftContainerFleetLocationsLocationCapacityOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration">put_managed_capacity_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances">reset_desired_ec2_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration">reset_managed_capacity_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMinSize">reset_min_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_managed_capacity_configuration` <a name="put_managed_capacity_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration"></a>

```python
def put_managed_capacity_configuration(
  scale_in_after_inactivity_minutes: typing.Union[int, float] = None,
  zero_capacity_strategy: str = None
) -> None
```

###### `scale_in_after_inactivity_minutes`<sup>Optional</sup> <a name="scale_in_after_inactivity_minutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration.parameter.scaleInAfterInactivityMinutes"></a>

- *Type:* typing.Union[int, float]

Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#scale_in_after_inactivity_minutes GameliftContainerFleet#scale_in_after_inactivity_minutes}

---

###### `zero_capacity_strategy`<sup>Optional</sup> <a name="zero_capacity_strategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration.parameter.zeroCapacityStrategy"></a>

- *Type:* str

The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity.

Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#zero_capacity_strategy GameliftContainerFleet#zero_capacity_strategy}

---

##### `reset_desired_ec2_instances` <a name="reset_desired_ec2_instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances"></a>

```python
def reset_desired_ec2_instances() -> None
```

##### `reset_managed_capacity_configuration` <a name="reset_managed_capacity_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration"></a>

```python
def reset_managed_capacity_configuration() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMinSize"></a>

```python
def reset_min_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration">managed_capacity_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput">desired_ec2_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput">managed_capacity_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances">desired_ec2_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_capacity_configuration`<sup>Required</sup> <a name="managed_capacity_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration"></a>

```python
managed_capacity_configuration: GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a>

---

##### `desired_ec2_instances_input`<sup>Optional</sup> <a name="desired_ec2_instances_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput"></a>

```python
desired_ec2_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_capacity_configuration_input`<sup>Optional</sup> <a name="managed_capacity_configuration_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput"></a>

```python
managed_capacity_configuration_input: IResolvable | GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_ec2_instances`<sup>Required</sup> <a name="desired_ec2_instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances"></a>

```python
desired_ec2_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerFleetLocationsLocationCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

---


### GameliftContainerFleetLocationsOutputReference <a name="GameliftContainerFleetLocationsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity">put_location_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocationCapacity">reset_location_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetPlayerGatewayStatus">reset_player_gateway_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetStoppedActions">reset_stopped_actions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_location_capacity` <a name="put_location_capacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity"></a>

```python
def put_location_capacity(
  desired_ec2_instances: typing.Union[int, float] = None,
  managed_capacity_configuration: GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None
) -> None
```

###### `desired_ec2_instances`<sup>Optional</sup> <a name="desired_ec2_instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity.parameter.desiredEc2Instances"></a>

- *Type:* typing.Union[int, float]

Defaults to MinSize if not defined.

The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits. If any auto-scaling policy is defined for the container fleet, the desired instance will only be applied once during fleet creation and will be ignored in updates to avoid conflicts with auto-scaling. During updates with any auto-scaling policy defined, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#desired_ec2_instances GameliftContainerFleet#desired_ec2_instances}

---

###### `managed_capacity_configuration`<sup>Optional</sup> <a name="managed_capacity_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity.parameter.managedCapacityConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

Configuration options for Amazon GameLift Servers-managed capacity behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#managed_capacity_configuration GameliftContainerFleet#managed_capacity_configuration}

---

###### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

The maximum value that is allowed for the fleet's instance count for a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#max_size GameliftContainerFleet#max_size}

---

###### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

The minimum value allowed for the fleet's instance count for a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#min_size GameliftContainerFleet#min_size}

---

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_location_capacity` <a name="reset_location_capacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocationCapacity"></a>

```python
def reset_location_capacity() -> None
```

##### `reset_player_gateway_status` <a name="reset_player_gateway_status" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetPlayerGatewayStatus"></a>

```python
def reset_player_gateway_status() -> None
```

##### `reset_stopped_actions` <a name="reset_stopped_actions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetStoppedActions"></a>

```python
def reset_stopped_actions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacity">location_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference">GameliftContainerFleetLocationsLocationCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacityInput">location_capacity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatusInput">player_gateway_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActionsInput">stopped_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatus">player_gateway_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActions">stopped_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_capacity`<sup>Required</sup> <a name="location_capacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacity"></a>

```python
location_capacity: GameliftContainerFleetLocationsLocationCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference">GameliftContainerFleetLocationsLocationCapacityOutputReference</a>

---

##### `location_capacity_input`<sup>Optional</sup> <a name="location_capacity_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacityInput"></a>

```python
location_capacity_input: IResolvable | GameliftContainerFleetLocationsLocationCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `player_gateway_status_input`<sup>Optional</sup> <a name="player_gateway_status_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatusInput"></a>

```python
player_gateway_status_input: str
```

- *Type:* str

---

##### `stopped_actions_input`<sup>Optional</sup> <a name="stopped_actions_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActionsInput"></a>

```python
stopped_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `player_gateway_status`<sup>Required</sup> <a name="player_gateway_status" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatus"></a>

```python
player_gateway_status: str
```

- *Type:* str

---

##### `stopped_actions`<sup>Required</sup> <a name="stopped_actions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActions"></a>

```python
stopped_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerFleetLocations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>

---


### GameliftContainerFleetLogConfigurationOutputReference <a name="GameliftContainerFleetLogConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogDestination">reset_log_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogGroupArn">reset_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetS3BucketName">reset_s3_bucket_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_destination` <a name="reset_log_destination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogDestination"></a>

```python
def reset_log_destination() -> None
```

##### `reset_log_group_arn` <a name="reset_log_group_arn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogGroupArn"></a>

```python
def reset_log_group_arn() -> None
```

##### `reset_s3_bucket_name` <a name="reset_s3_bucket_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetS3BucketName"></a>

```python
def reset_s3_bucket_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestinationInput">log_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArnInput">log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestination">log_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_destination_input`<sup>Optional</sup> <a name="log_destination_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestinationInput"></a>

```python
log_destination_input: str
```

- *Type:* str

---

##### `log_group_arn_input`<sup>Optional</sup> <a name="log_group_arn_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArnInput"></a>

```python
log_group_arn_input: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `log_destination`<sup>Required</sup> <a name="log_destination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestination"></a>

```python
log_destination: str
```

- *Type:* str

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerFleetLogConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

---


### GameliftContainerFleetScalingPoliciesList <a name="GameliftContainerFleetScalingPoliciesList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerFleetScalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerFleetScalingPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>]

---


### GameliftContainerFleetScalingPoliciesOutputReference <a name="GameliftContainerFleetScalingPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.putTargetConfiguration">put_target_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetComparisonOperator">reset_comparison_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetPolicyType">reset_policy_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustment">reset_scaling_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustmentType">reset_scaling_adjustment_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetTargetConfiguration">reset_target_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_configuration` <a name="put_target_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.putTargetConfiguration"></a>

```python
def put_target_configuration(
  target_value: typing.Union[int, float] = None
) -> None
```

###### `target_value`<sup>Optional</sup> <a name="target_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.putTargetConfiguration.parameter.targetValue"></a>

- *Type:* typing.Union[int, float]

Desired value to use with a target-based scaling policy.

The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#target_value GameliftContainerFleet#target_value}

---

##### `reset_comparison_operator` <a name="reset_comparison_operator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetComparisonOperator"></a>

```python
def reset_comparison_operator() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_policy_type` <a name="reset_policy_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetPolicyType"></a>

```python
def reset_policy_type() -> None
```

##### `reset_scaling_adjustment` <a name="reset_scaling_adjustment" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustment"></a>

```python
def reset_scaling_adjustment() -> None
```

##### `reset_scaling_adjustment_type` <a name="reset_scaling_adjustment_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustmentType"></a>

```python
def reset_scaling_adjustment_type() -> None
```

##### `reset_target_configuration` <a name="reset_target_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetTargetConfiguration"></a>

```python
def reset_target_configuration() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfiguration">target_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference">GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput">scaling_adjustment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput">scaling_adjustment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfigurationInput">target_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustment">scaling_adjustment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentType">scaling_adjustment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_configuration`<sup>Required</sup> <a name="target_configuration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfiguration"></a>

```python
target_configuration: GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference">GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference</a>

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `scaling_adjustment_input`<sup>Optional</sup> <a name="scaling_adjustment_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput"></a>

```python
scaling_adjustment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_adjustment_type_input`<sup>Optional</sup> <a name="scaling_adjustment_type_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput"></a>

```python
scaling_adjustment_type_input: str
```

- *Type:* str

---

##### `target_configuration_input`<sup>Optional</sup> <a name="target_configuration_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfigurationInput"></a>

```python
target_configuration_input: IResolvable | GameliftContainerFleetScalingPoliciesTargetConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `scaling_adjustment`<sup>Required</sup> <a name="scaling_adjustment" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustment"></a>

```python
scaling_adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_adjustment_type`<sup>Required</sup> <a name="scaling_adjustment_type" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentType"></a>

```python
scaling_adjustment_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerFleetScalingPolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>

---


### GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference <a name="GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue">reset_target_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_value` <a name="reset_target_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue"></a>

```python
def reset_target_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput">target_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_value_input`<sup>Optional</sup> <a name="target_value_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput"></a>

```python
target_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerFleetScalingPoliciesTargetConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---


### GameliftContainerFleetTagsList <a name="GameliftContainerFleetTagsList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftContainerFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftContainerFleetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>]

---


### GameliftContainerFleetTagsOutputReference <a name="GameliftContainerFleetTagsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_container_fleet

gameliftContainerFleet.GameliftContainerFleetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftContainerFleetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>

---



