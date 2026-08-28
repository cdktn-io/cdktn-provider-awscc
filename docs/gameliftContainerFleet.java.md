# `gameliftContainerFleet` Submodule <a name="`gameliftContainerFleet` Submodule" id="@cdktn/provider-awscc.gameliftContainerFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftContainerFleet <a name="GameliftContainerFleet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet awscc_gamelift_container_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleet;

GameliftContainerFleet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .fleetRoleArn(java.lang.String)
//  .billingType(java.lang.String)
//  .deploymentConfiguration(GameliftContainerFleetDeploymentConfiguration)
//  .description(java.lang.String)
//  .gameServerContainerGroupDefinitionName(java.lang.String)
//  .gameServerContainerGroupsPerInstance(java.lang.Number)
//  .gameSessionCreationLimitPolicy(GameliftContainerFleetGameSessionCreationLimitPolicy)
//  .instanceConnectionPortRange(GameliftContainerFleetInstanceConnectionPortRange)
//  .instanceInboundPermissions(IResolvable|java.util.List<GameliftContainerFleetInstanceInboundPermissions>)
//  .instanceType(java.lang.String)
//  .locations(IResolvable|java.util.List<GameliftContainerFleetLocations>)
//  .logConfiguration(GameliftContainerFleetLogConfiguration)
//  .metricGroups(java.util.List<java.lang.String>)
//  .newGameSessionProtectionPolicy(java.lang.String)
//  .perInstanceContainerGroupDefinitionName(java.lang.String)
//  .playerGatewayMode(java.lang.String)
//  .scalingPolicies(IResolvable|java.util.List<GameliftContainerFleetScalingPolicies>)
//  .tags(IResolvable|java.util.List<GameliftContainerFleetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.fleetRoleArn">fleetRoleArn</a></code> | <code>java.lang.String</code> | A unique identifier for an AWS IAM role that manages access to your AWS services. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.billingType">billingType</a></code> | <code>java.lang.String</code> | Indicates whether to use On-Demand instances or Spot instances for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | Provides details about how to drain old tasks and replace them with new updated tasks. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.gameServerContainerGroupDefinitionName">gameServerContainerGroupDefinitionName</a></code> | <code>java.lang.String</code> | The name of the container group definition that will be created per game server. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.gameServerContainerGroupsPerInstance">gameServerContainerGroupsPerInstance</a></code> | <code>java.lang.Number</code> | The number of desired game server container groups per instance, a number between 1-5000. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.gameSessionCreationLimitPolicy">gameSessionCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | A policy that limits the number of game sessions an individual player can create over a span of time for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.instanceConnectionPortRange">instanceConnectionPortRange</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.instanceInboundPermissions">instanceInboundPermissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>></code> | A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The name of an EC2 instance type that is supported in Amazon GameLift. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.locations">locations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#locations GameliftContainerFleet#locations}. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | A policy the location and provider of logs from the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.metricGroups">metricGroups</a></code> | <code>java.util.List<java.lang.String></code> | The name of an Amazon CloudWatch metric group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.newGameSessionProtectionPolicy">newGameSessionProtectionPolicy</a></code> | <code>java.lang.String</code> | A game session protection policy to apply to all game sessions hosted on instances in this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.perInstanceContainerGroupDefinitionName">perInstanceContainerGroupDefinitionName</a></code> | <code>java.lang.String</code> | The name of the container group definition that will be created per instance. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.playerGatewayMode">playerGatewayMode</a></code> | <code>java.lang.String</code> | The player gateway mode for the container fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.scalingPolicies">scalingPolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>></code> | A list of rules that control how a fleet is scaled. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fleetRoleArn`<sup>Required</sup> <a name="fleetRoleArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.fleetRoleArn"></a>

- *Type:* java.lang.String

A unique identifier for an AWS IAM role that manages access to your AWS services.

Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#fleet_role_arn GameliftContainerFleet#fleet_role_arn}

---

##### `billingType`<sup>Optional</sup> <a name="billingType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.billingType"></a>

- *Type:* java.lang.String

Indicates whether to use On-Demand instances or Spot instances for this fleet.

If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#billing_type GameliftContainerFleet#billing_type}

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.deploymentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

Provides details about how to drain old tasks and replace them with new updated tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#deployment_configuration GameliftContainerFleet#deployment_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#description GameliftContainerFleet#description}

---

##### `gameServerContainerGroupDefinitionName`<sup>Optional</sup> <a name="gameServerContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.gameServerContainerGroupDefinitionName"></a>

- *Type:* java.lang.String

The name of the container group definition that will be created per game server.

You must specify GAME_SERVER container group. You have the option to also specify one PER_INSTANCE container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#game_server_container_group_definition_name GameliftContainerFleet#game_server_container_group_definition_name}

---

##### `gameServerContainerGroupsPerInstance`<sup>Optional</sup> <a name="gameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.gameServerContainerGroupsPerInstance"></a>

- *Type:* java.lang.Number

The number of desired game server container groups per instance, a number between 1-5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#game_server_container_groups_per_instance GameliftContainerFleet#game_server_container_groups_per_instance}

---

##### `gameSessionCreationLimitPolicy`<sup>Optional</sup> <a name="gameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.gameSessionCreationLimitPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#game_session_creation_limit_policy GameliftContainerFleet#game_session_creation_limit_policy}

---

##### `instanceConnectionPortRange`<sup>Optional</sup> <a name="instanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.instanceConnectionPortRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#instance_connection_port_range GameliftContainerFleet#instance_connection_port_range}

---

##### `instanceInboundPermissions`<sup>Optional</sup> <a name="instanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.instanceInboundPermissions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>>

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#instance_inbound_permissions GameliftContainerFleet#instance_inbound_permissions}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

The name of an EC2 instance type that is supported in Amazon GameLift.

A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#instance_type GameliftContainerFleet#instance_type}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.locations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#locations GameliftContainerFleet#locations}.

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.logConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

A policy the location and provider of logs from the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#log_configuration GameliftContainerFleet#log_configuration}

---

##### `metricGroups`<sup>Optional</sup> <a name="metricGroups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.metricGroups"></a>

- *Type:* java.util.List<java.lang.String>

The name of an Amazon CloudWatch metric group.

A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#metric_groups GameliftContainerFleet#metric_groups}

---

##### `newGameSessionProtectionPolicy`<sup>Optional</sup> <a name="newGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.newGameSessionProtectionPolicy"></a>

- *Type:* java.lang.String

A game session protection policy to apply to all game sessions hosted on instances in this fleet.

When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#new_game_session_protection_policy GameliftContainerFleet#new_game_session_protection_policy}

---

##### `perInstanceContainerGroupDefinitionName`<sup>Optional</sup> <a name="perInstanceContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.perInstanceContainerGroupDefinitionName"></a>

- *Type:* java.lang.String

The name of the container group definition that will be created per instance.

This field is optional if you specify GameServerContainerGroupDefinitionName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#per_instance_container_group_definition_name GameliftContainerFleet#per_instance_container_group_definition_name}

---

##### `playerGatewayMode`<sup>Optional</sup> <a name="playerGatewayMode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.playerGatewayMode"></a>

- *Type:* java.lang.String

The player gateway mode for the container fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#player_gateway_mode GameliftContainerFleet#player_gateway_mode}

---

##### `scalingPolicies`<sup>Optional</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.scalingPolicies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>>

A list of rules that control how a fleet is scaled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#scaling_policies GameliftContainerFleet#scaling_policies}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#tags GameliftContainerFleet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration">putDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy">putGameSessionCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange">putInstanceConnectionPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceInboundPermissions">putInstanceInboundPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLocations">putLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putScalingPolicies">putScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetBillingType">resetBillingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDeploymentConfiguration">resetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupDefinitionName">resetGameServerContainerGroupDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupsPerInstance">resetGameServerContainerGroupsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameSessionCreationLimitPolicy">resetGameSessionCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceConnectionPortRange">resetInstanceConnectionPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceInboundPermissions">resetInstanceInboundPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetMetricGroups">resetMetricGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetNewGameSessionProtectionPolicy">resetNewGameSessionProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPerInstanceContainerGroupDefinitionName">resetPerInstanceContainerGroupDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPlayerGatewayMode">resetPlayerGatewayMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetScalingPolicies">resetScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeploymentConfiguration` <a name="putDeploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration"></a>

```java
public void putDeploymentConfiguration(GameliftContainerFleetDeploymentConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

---

##### `putGameSessionCreationLimitPolicy` <a name="putGameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy"></a>

```java
public void putGameSessionCreationLimitPolicy(GameliftContainerFleetGameSessionCreationLimitPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

---

##### `putInstanceConnectionPortRange` <a name="putInstanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange"></a>

```java
public void putInstanceConnectionPortRange(GameliftContainerFleetInstanceConnectionPortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

---

##### `putInstanceInboundPermissions` <a name="putInstanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceInboundPermissions"></a>

```java
public void putInstanceInboundPermissions(IResolvable|java.util.List<GameliftContainerFleetInstanceInboundPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceInboundPermissions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>>

---

##### `putLocations` <a name="putLocations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLocations"></a>

```java
public void putLocations(IResolvable|java.util.List<GameliftContainerFleetLocations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLocations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>>

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration"></a>

```java
public void putLogConfiguration(GameliftContainerFleetLogConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

---

##### `putScalingPolicies` <a name="putScalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putScalingPolicies"></a>

```java
public void putScalingPolicies(IResolvable|java.util.List<GameliftContainerFleetScalingPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putScalingPolicies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GameliftContainerFleetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>>

---

##### `resetBillingType` <a name="resetBillingType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetBillingType"></a>

```java
public void resetBillingType()
```

##### `resetDeploymentConfiguration` <a name="resetDeploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDeploymentConfiguration"></a>

```java
public void resetDeploymentConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGameServerContainerGroupDefinitionName` <a name="resetGameServerContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupDefinitionName"></a>

```java
public void resetGameServerContainerGroupDefinitionName()
```

##### `resetGameServerContainerGroupsPerInstance` <a name="resetGameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupsPerInstance"></a>

```java
public void resetGameServerContainerGroupsPerInstance()
```

##### `resetGameSessionCreationLimitPolicy` <a name="resetGameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameSessionCreationLimitPolicy"></a>

```java
public void resetGameSessionCreationLimitPolicy()
```

##### `resetInstanceConnectionPortRange` <a name="resetInstanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceConnectionPortRange"></a>

```java
public void resetInstanceConnectionPortRange()
```

##### `resetInstanceInboundPermissions` <a name="resetInstanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceInboundPermissions"></a>

```java
public void resetInstanceInboundPermissions()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLocations` <a name="resetLocations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLocations"></a>

```java
public void resetLocations()
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLogConfiguration"></a>

```java
public void resetLogConfiguration()
```

##### `resetMetricGroups` <a name="resetMetricGroups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetMetricGroups"></a>

```java
public void resetMetricGroups()
```

##### `resetNewGameSessionProtectionPolicy` <a name="resetNewGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetNewGameSessionProtectionPolicy"></a>

```java
public void resetNewGameSessionProtectionPolicy()
```

##### `resetPerInstanceContainerGroupDefinitionName` <a name="resetPerInstanceContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPerInstanceContainerGroupDefinitionName"></a>

```java
public void resetPerInstanceContainerGroupDefinitionName()
```

##### `resetPlayerGatewayMode` <a name="resetPlayerGatewayMode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPlayerGatewayMode"></a>

```java
public void resetPlayerGatewayMode()
```

##### `resetScalingPolicies` <a name="resetScalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetScalingPolicies"></a>

```java
public void resetScalingPolicies()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftContainerFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleet;

GameliftContainerFleet.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleet;

GameliftContainerFleet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleet;

GameliftContainerFleet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleet;

GameliftContainerFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GameliftContainerFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GameliftContainerFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GameliftContainerFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GameliftContainerFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GameliftContainerFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference">GameliftContainerFleetDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentDetails">deploymentDetails</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference">GameliftContainerFleetDeploymentDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetArn">fleetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionArn">gameServerContainerGroupDefinitionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicy">gameSessionCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference">GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRange">instanceConnectionPortRange</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference">GameliftContainerFleetInstanceConnectionPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissions">instanceInboundPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList">GameliftContainerFleetInstanceInboundPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locations">locations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList">GameliftContainerFleetLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference">GameliftContainerFleetLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.maximumGameServerContainerGroupsPerInstance">maximumGameServerContainerGroupsPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionArn">perInstanceContainerGroupDefinitionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPolicies">scalingPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList">GameliftContainerFleetScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList">GameliftContainerFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingTypeInput">billingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfigurationInput">deploymentConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArnInput">fleetRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionNameInput">gameServerContainerGroupDefinitionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstanceInput">gameServerContainerGroupsPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicyInput">gameSessionCreationLimitPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRangeInput">instanceConnectionPortRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissionsInput">instanceInboundPermissionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locationsInput">locationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfigurationInput">logConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroupsInput">metricGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicyInput">newGameSessionProtectionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionNameInput">perInstanceContainerGroupDefinitionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayModeInput">playerGatewayModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPoliciesInput">scalingPoliciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingType">billingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArn">fleetRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionName">gameServerContainerGroupDefinitionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstance">gameServerContainerGroupsPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroups">metricGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicy">newGameSessionProtectionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionName">perInstanceContainerGroupDefinitionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayMode">playerGatewayMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfiguration"></a>

```java
public GameliftContainerFleetDeploymentConfigurationOutputReference getDeploymentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference">GameliftContainerFleetDeploymentConfigurationOutputReference</a>

---

##### `deploymentDetails`<sup>Required</sup> <a name="deploymentDetails" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentDetails"></a>

```java
public GameliftContainerFleetDeploymentDetailsOutputReference getDeploymentDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference">GameliftContainerFleetDeploymentDetailsOutputReference</a>

---

##### `fleetArn`<sup>Required</sup> <a name="fleetArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetArn"></a>

```java
public java.lang.String getFleetArn();
```

- *Type:* java.lang.String

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

---

##### `gameServerContainerGroupDefinitionArn`<sup>Required</sup> <a name="gameServerContainerGroupDefinitionArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionArn"></a>

```java
public java.lang.String getGameServerContainerGroupDefinitionArn();
```

- *Type:* java.lang.String

---

##### `gameSessionCreationLimitPolicy`<sup>Required</sup> <a name="gameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicy"></a>

```java
public GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference getGameSessionCreationLimitPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference">GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceConnectionPortRange`<sup>Required</sup> <a name="instanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRange"></a>

```java
public GameliftContainerFleetInstanceConnectionPortRangeOutputReference getInstanceConnectionPortRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference">GameliftContainerFleetInstanceConnectionPortRangeOutputReference</a>

---

##### `instanceInboundPermissions`<sup>Required</sup> <a name="instanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissions"></a>

```java
public GameliftContainerFleetInstanceInboundPermissionsList getInstanceInboundPermissions();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList">GameliftContainerFleetInstanceInboundPermissionsList</a>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locations"></a>

```java
public GameliftContainerFleetLocationsList getLocations();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList">GameliftContainerFleetLocationsList</a>

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfiguration"></a>

```java
public GameliftContainerFleetLogConfigurationOutputReference getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference">GameliftContainerFleetLogConfigurationOutputReference</a>

---

##### `maximumGameServerContainerGroupsPerInstance`<sup>Required</sup> <a name="maximumGameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.maximumGameServerContainerGroupsPerInstance"></a>

```java
public java.lang.Number getMaximumGameServerContainerGroupsPerInstance();
```

- *Type:* java.lang.Number

---

##### `perInstanceContainerGroupDefinitionArn`<sup>Required</sup> <a name="perInstanceContainerGroupDefinitionArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionArn"></a>

```java
public java.lang.String getPerInstanceContainerGroupDefinitionArn();
```

- *Type:* java.lang.String

---

##### `scalingPolicies`<sup>Required</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPolicies"></a>

```java
public GameliftContainerFleetScalingPoliciesList getScalingPolicies();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList">GameliftContainerFleetScalingPoliciesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tags"></a>

```java
public GameliftContainerFleetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList">GameliftContainerFleetTagsList</a>

---

##### `billingTypeInput`<sup>Optional</sup> <a name="billingTypeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingTypeInput"></a>

```java
public java.lang.String getBillingTypeInput();
```

- *Type:* java.lang.String

---

##### `deploymentConfigurationInput`<sup>Optional</sup> <a name="deploymentConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfigurationInput"></a>

```java
public IResolvable|GameliftContainerFleetDeploymentConfiguration getDeploymentConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fleetRoleArnInput`<sup>Optional</sup> <a name="fleetRoleArnInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArnInput"></a>

```java
public java.lang.String getFleetRoleArnInput();
```

- *Type:* java.lang.String

---

##### `gameServerContainerGroupDefinitionNameInput`<sup>Optional</sup> <a name="gameServerContainerGroupDefinitionNameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionNameInput"></a>

```java
public java.lang.String getGameServerContainerGroupDefinitionNameInput();
```

- *Type:* java.lang.String

---

##### `gameServerContainerGroupsPerInstanceInput`<sup>Optional</sup> <a name="gameServerContainerGroupsPerInstanceInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstanceInput"></a>

```java
public java.lang.Number getGameServerContainerGroupsPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `gameSessionCreationLimitPolicyInput`<sup>Optional</sup> <a name="gameSessionCreationLimitPolicyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicyInput"></a>

```java
public IResolvable|GameliftContainerFleetGameSessionCreationLimitPolicy getGameSessionCreationLimitPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

---

##### `instanceConnectionPortRangeInput`<sup>Optional</sup> <a name="instanceConnectionPortRangeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRangeInput"></a>

```java
public IResolvable|GameliftContainerFleetInstanceConnectionPortRange getInstanceConnectionPortRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

---

##### `instanceInboundPermissionsInput`<sup>Optional</sup> <a name="instanceInboundPermissionsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissionsInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerFleetInstanceInboundPermissions> getInstanceInboundPermissionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locationsInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerFleetLocations> getLocationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>>

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfigurationInput"></a>

```java
public IResolvable|GameliftContainerFleetLogConfiguration getLogConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

---

##### `metricGroupsInput`<sup>Optional</sup> <a name="metricGroupsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroupsInput"></a>

```java
public java.util.List<java.lang.String> getMetricGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newGameSessionProtectionPolicyInput`<sup>Optional</sup> <a name="newGameSessionProtectionPolicyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicyInput"></a>

```java
public java.lang.String getNewGameSessionProtectionPolicyInput();
```

- *Type:* java.lang.String

---

##### `perInstanceContainerGroupDefinitionNameInput`<sup>Optional</sup> <a name="perInstanceContainerGroupDefinitionNameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionNameInput"></a>

```java
public java.lang.String getPerInstanceContainerGroupDefinitionNameInput();
```

- *Type:* java.lang.String

---

##### `playerGatewayModeInput`<sup>Optional</sup> <a name="playerGatewayModeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayModeInput"></a>

```java
public java.lang.String getPlayerGatewayModeInput();
```

- *Type:* java.lang.String

---

##### `scalingPoliciesInput`<sup>Optional</sup> <a name="scalingPoliciesInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPoliciesInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerFleetScalingPolicies> getScalingPoliciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerFleetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>>

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingType"></a>

```java
public java.lang.String getBillingType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fleetRoleArn`<sup>Required</sup> <a name="fleetRoleArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArn"></a>

```java
public java.lang.String getFleetRoleArn();
```

- *Type:* java.lang.String

---

##### `gameServerContainerGroupDefinitionName`<sup>Required</sup> <a name="gameServerContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionName"></a>

```java
public java.lang.String getGameServerContainerGroupDefinitionName();
```

- *Type:* java.lang.String

---

##### `gameServerContainerGroupsPerInstance`<sup>Required</sup> <a name="gameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstance"></a>

```java
public java.lang.Number getGameServerContainerGroupsPerInstance();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `metricGroups`<sup>Required</sup> <a name="metricGroups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroups"></a>

```java
public java.util.List<java.lang.String> getMetricGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newGameSessionProtectionPolicy`<sup>Required</sup> <a name="newGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicy"></a>

```java
public java.lang.String getNewGameSessionProtectionPolicy();
```

- *Type:* java.lang.String

---

##### `perInstanceContainerGroupDefinitionName`<sup>Required</sup> <a name="perInstanceContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionName"></a>

```java
public java.lang.String getPerInstanceContainerGroupDefinitionName();
```

- *Type:* java.lang.String

---

##### `playerGatewayMode`<sup>Required</sup> <a name="playerGatewayMode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayMode"></a>

```java
public java.lang.String getPlayerGatewayMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftContainerFleetConfig <a name="GameliftContainerFleetConfig" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetConfig;

GameliftContainerFleetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .fleetRoleArn(java.lang.String)
//  .billingType(java.lang.String)
//  .deploymentConfiguration(GameliftContainerFleetDeploymentConfiguration)
//  .description(java.lang.String)
//  .gameServerContainerGroupDefinitionName(java.lang.String)
//  .gameServerContainerGroupsPerInstance(java.lang.Number)
//  .gameSessionCreationLimitPolicy(GameliftContainerFleetGameSessionCreationLimitPolicy)
//  .instanceConnectionPortRange(GameliftContainerFleetInstanceConnectionPortRange)
//  .instanceInboundPermissions(IResolvable|java.util.List<GameliftContainerFleetInstanceInboundPermissions>)
//  .instanceType(java.lang.String)
//  .locations(IResolvable|java.util.List<GameliftContainerFleetLocations>)
//  .logConfiguration(GameliftContainerFleetLogConfiguration)
//  .metricGroups(java.util.List<java.lang.String>)
//  .newGameSessionProtectionPolicy(java.lang.String)
//  .perInstanceContainerGroupDefinitionName(java.lang.String)
//  .playerGatewayMode(java.lang.String)
//  .scalingPolicies(IResolvable|java.util.List<GameliftContainerFleetScalingPolicies>)
//  .tags(IResolvable|java.util.List<GameliftContainerFleetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.fleetRoleArn">fleetRoleArn</a></code> | <code>java.lang.String</code> | A unique identifier for an AWS IAM role that manages access to your AWS services. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.billingType">billingType</a></code> | <code>java.lang.String</code> | Indicates whether to use On-Demand instances or Spot instances for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | Provides details about how to drain old tasks and replace them with new updated tasks. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupDefinitionName">gameServerContainerGroupDefinitionName</a></code> | <code>java.lang.String</code> | The name of the container group definition that will be created per game server. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupsPerInstance">gameServerContainerGroupsPerInstance</a></code> | <code>java.lang.Number</code> | The number of desired game server container groups per instance, a number between 1-5000. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameSessionCreationLimitPolicy">gameSessionCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | A policy that limits the number of game sessions an individual player can create over a span of time for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceConnectionPortRange">instanceConnectionPortRange</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceInboundPermissions">instanceInboundPermissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>></code> | A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The name of an EC2 instance type that is supported in Amazon GameLift. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.locations">locations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#locations GameliftContainerFleet#locations}. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | A policy the location and provider of logs from the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.metricGroups">metricGroups</a></code> | <code>java.util.List<java.lang.String></code> | The name of an Amazon CloudWatch metric group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.newGameSessionProtectionPolicy">newGameSessionProtectionPolicy</a></code> | <code>java.lang.String</code> | A game session protection policy to apply to all game sessions hosted on instances in this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.perInstanceContainerGroupDefinitionName">perInstanceContainerGroupDefinitionName</a></code> | <code>java.lang.String</code> | The name of the container group definition that will be created per instance. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.playerGatewayMode">playerGatewayMode</a></code> | <code>java.lang.String</code> | The player gateway mode for the container fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.scalingPolicies">scalingPolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>></code> | A list of rules that control how a fleet is scaled. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fleetRoleArn`<sup>Required</sup> <a name="fleetRoleArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.fleetRoleArn"></a>

```java
public java.lang.String getFleetRoleArn();
```

- *Type:* java.lang.String

A unique identifier for an AWS IAM role that manages access to your AWS services.

Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#fleet_role_arn GameliftContainerFleet#fleet_role_arn}

---

##### `billingType`<sup>Optional</sup> <a name="billingType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.billingType"></a>

```java
public java.lang.String getBillingType();
```

- *Type:* java.lang.String

Indicates whether to use On-Demand instances or Spot instances for this fleet.

If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#billing_type GameliftContainerFleet#billing_type}

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.deploymentConfiguration"></a>

```java
public GameliftContainerFleetDeploymentConfiguration getDeploymentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

Provides details about how to drain old tasks and replace them with new updated tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#deployment_configuration GameliftContainerFleet#deployment_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#description GameliftContainerFleet#description}

---

##### `gameServerContainerGroupDefinitionName`<sup>Optional</sup> <a name="gameServerContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupDefinitionName"></a>

```java
public java.lang.String getGameServerContainerGroupDefinitionName();
```

- *Type:* java.lang.String

The name of the container group definition that will be created per game server.

You must specify GAME_SERVER container group. You have the option to also specify one PER_INSTANCE container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#game_server_container_group_definition_name GameliftContainerFleet#game_server_container_group_definition_name}

---

##### `gameServerContainerGroupsPerInstance`<sup>Optional</sup> <a name="gameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupsPerInstance"></a>

```java
public java.lang.Number getGameServerContainerGroupsPerInstance();
```

- *Type:* java.lang.Number

The number of desired game server container groups per instance, a number between 1-5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#game_server_container_groups_per_instance GameliftContainerFleet#game_server_container_groups_per_instance}

---

##### `gameSessionCreationLimitPolicy`<sup>Optional</sup> <a name="gameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameSessionCreationLimitPolicy"></a>

```java
public GameliftContainerFleetGameSessionCreationLimitPolicy getGameSessionCreationLimitPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#game_session_creation_limit_policy GameliftContainerFleet#game_session_creation_limit_policy}

---

##### `instanceConnectionPortRange`<sup>Optional</sup> <a name="instanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceConnectionPortRange"></a>

```java
public GameliftContainerFleetInstanceConnectionPortRange getInstanceConnectionPortRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#instance_connection_port_range GameliftContainerFleet#instance_connection_port_range}

---

##### `instanceInboundPermissions`<sup>Optional</sup> <a name="instanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceInboundPermissions"></a>

```java
public IResolvable|java.util.List<GameliftContainerFleetInstanceInboundPermissions> getInstanceInboundPermissions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>>

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#instance_inbound_permissions GameliftContainerFleet#instance_inbound_permissions}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The name of an EC2 instance type that is supported in Amazon GameLift.

A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#instance_type GameliftContainerFleet#instance_type}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.locations"></a>

```java
public IResolvable|java.util.List<GameliftContainerFleetLocations> getLocations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#locations GameliftContainerFleet#locations}.

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.logConfiguration"></a>

```java
public GameliftContainerFleetLogConfiguration getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

A policy the location and provider of logs from the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#log_configuration GameliftContainerFleet#log_configuration}

---

##### `metricGroups`<sup>Optional</sup> <a name="metricGroups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.metricGroups"></a>

```java
public java.util.List<java.lang.String> getMetricGroups();
```

- *Type:* java.util.List<java.lang.String>

The name of an Amazon CloudWatch metric group.

A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#metric_groups GameliftContainerFleet#metric_groups}

---

##### `newGameSessionProtectionPolicy`<sup>Optional</sup> <a name="newGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.newGameSessionProtectionPolicy"></a>

```java
public java.lang.String getNewGameSessionProtectionPolicy();
```

- *Type:* java.lang.String

A game session protection policy to apply to all game sessions hosted on instances in this fleet.

When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#new_game_session_protection_policy GameliftContainerFleet#new_game_session_protection_policy}

---

##### `perInstanceContainerGroupDefinitionName`<sup>Optional</sup> <a name="perInstanceContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.perInstanceContainerGroupDefinitionName"></a>

```java
public java.lang.String getPerInstanceContainerGroupDefinitionName();
```

- *Type:* java.lang.String

The name of the container group definition that will be created per instance.

This field is optional if you specify GameServerContainerGroupDefinitionName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#per_instance_container_group_definition_name GameliftContainerFleet#per_instance_container_group_definition_name}

---

##### `playerGatewayMode`<sup>Optional</sup> <a name="playerGatewayMode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.playerGatewayMode"></a>

```java
public java.lang.String getPlayerGatewayMode();
```

- *Type:* java.lang.String

The player gateway mode for the container fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#player_gateway_mode GameliftContainerFleet#player_gateway_mode}

---

##### `scalingPolicies`<sup>Optional</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.scalingPolicies"></a>

```java
public IResolvable|java.util.List<GameliftContainerFleetScalingPolicies> getScalingPolicies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>>

A list of rules that control how a fleet is scaled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#scaling_policies GameliftContainerFleet#scaling_policies}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GameliftContainerFleetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#tags GameliftContainerFleet#tags}

---

### GameliftContainerFleetDeploymentConfiguration <a name="GameliftContainerFleetDeploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetDeploymentConfiguration;

GameliftContainerFleetDeploymentConfiguration.builder()
//  .impairmentStrategy(java.lang.String)
//  .minimumHealthyPercentage(java.lang.Number)
//  .protectionStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.impairmentStrategy">impairmentStrategy</a></code> | <code>java.lang.String</code> | The strategy to apply in case of impairment; defaults to MAINTAIN. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.minimumHealthyPercentage">minimumHealthyPercentage</a></code> | <code>java.lang.Number</code> | The minimum percentage of healthy required; defaults to 75. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.protectionStrategy">protectionStrategy</a></code> | <code>java.lang.String</code> | The protection strategy for deployment on the container fleet; defaults to WITH_PROTECTION. |

---

##### `impairmentStrategy`<sup>Optional</sup> <a name="impairmentStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.impairmentStrategy"></a>

```java
public java.lang.String getImpairmentStrategy();
```

- *Type:* java.lang.String

The strategy to apply in case of impairment; defaults to MAINTAIN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#impairment_strategy GameliftContainerFleet#impairment_strategy}

---

##### `minimumHealthyPercentage`<sup>Optional</sup> <a name="minimumHealthyPercentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.minimumHealthyPercentage"></a>

```java
public java.lang.Number getMinimumHealthyPercentage();
```

- *Type:* java.lang.Number

The minimum percentage of healthy required; defaults to 75.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#minimum_healthy_percentage GameliftContainerFleet#minimum_healthy_percentage}

---

##### `protectionStrategy`<sup>Optional</sup> <a name="protectionStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.protectionStrategy"></a>

```java
public java.lang.String getProtectionStrategy();
```

- *Type:* java.lang.String

The protection strategy for deployment on the container fleet; defaults to WITH_PROTECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#protection_strategy GameliftContainerFleet#protection_strategy}

---

### GameliftContainerFleetDeploymentDetails <a name="GameliftContainerFleetDeploymentDetails" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetDeploymentDetails;

GameliftContainerFleetDeploymentDetails.builder()
    .build();
```


### GameliftContainerFleetGameSessionCreationLimitPolicy <a name="GameliftContainerFleetGameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetGameSessionCreationLimitPolicy;

GameliftContainerFleetGameSessionCreationLimitPolicy.builder()
//  .newGameSessionsPerCreator(java.lang.Number)
//  .policyPeriodInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.newGameSessionsPerCreator">newGameSessionsPerCreator</a></code> | <code>java.lang.Number</code> | The maximum number of game sessions that an individual can create during the policy period. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.policyPeriodInMinutes">policyPeriodInMinutes</a></code> | <code>java.lang.Number</code> | The time span used in evaluating the resource creation limit policy. |

---

##### `newGameSessionsPerCreator`<sup>Optional</sup> <a name="newGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

```java
public java.lang.Number getNewGameSessionsPerCreator();
```

- *Type:* java.lang.Number

The maximum number of game sessions that an individual can create during the policy period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#new_game_sessions_per_creator GameliftContainerFleet#new_game_sessions_per_creator}

---

##### `policyPeriodInMinutes`<sup>Optional</sup> <a name="policyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.policyPeriodInMinutes"></a>

```java
public java.lang.Number getPolicyPeriodInMinutes();
```

- *Type:* java.lang.Number

The time span used in evaluating the resource creation limit policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#policy_period_in_minutes GameliftContainerFleet#policy_period_in_minutes}

---

### GameliftContainerFleetInstanceConnectionPortRange <a name="GameliftContainerFleetInstanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetInstanceConnectionPortRange;

GameliftContainerFleetInstanceConnectionPortRange.builder()
//  .fromPort(java.lang.Number)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | A starting value for a range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | An ending value for a range of allowed port numbers. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#from_port GameliftContainerFleet#from_port}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#to_port GameliftContainerFleet#to_port}

---

### GameliftContainerFleetInstanceInboundPermissions <a name="GameliftContainerFleetInstanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetInstanceInboundPermissions;

GameliftContainerFleetInstanceInboundPermissions.builder()
//  .fromPort(java.lang.Number)
//  .ipRange(java.lang.String)
//  .protocol(java.lang.String)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | A starting value for a range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | A range of allowed IP addresses. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The network communication protocol used by the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | An ending value for a range of allowed port numbers. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#from_port GameliftContainerFleet#from_port}

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

A range of allowed IP addresses.

This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#ip_range GameliftContainerFleet#ip_range}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The network communication protocol used by the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#protocol GameliftContainerFleet#protocol}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#to_port GameliftContainerFleet#to_port}

---

### GameliftContainerFleetLocations <a name="GameliftContainerFleetLocations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetLocations;

GameliftContainerFleetLocations.builder()
//  .location(java.lang.String)
//  .locationCapacity(GameliftContainerFleetLocationsLocationCapacity)
//  .playerGatewayStatus(java.lang.String)
//  .stoppedActions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#location GameliftContainerFleet#location}. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.locationCapacity">locationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a></code> | Current resource capacity settings in a specified fleet or location. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.playerGatewayStatus">playerGatewayStatus</a></code> | <code>java.lang.String</code> | The player gateway status for the location. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.stoppedActions">stoppedActions</a></code> | <code>java.util.List<java.lang.String></code> | A list of fleet actions that have been suspended in the fleet location. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#location GameliftContainerFleet#location}.

---

##### `locationCapacity`<sup>Optional</sup> <a name="locationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.locationCapacity"></a>

```java
public GameliftContainerFleetLocationsLocationCapacity getLocationCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

Current resource capacity settings in a specified fleet or location.

The location value might refer to a fleet's remote location or its home Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#location_capacity GameliftContainerFleet#location_capacity}

---

##### `playerGatewayStatus`<sup>Optional</sup> <a name="playerGatewayStatus" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.playerGatewayStatus"></a>

```java
public java.lang.String getPlayerGatewayStatus();
```

- *Type:* java.lang.String

The player gateway status for the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#player_gateway_status GameliftContainerFleet#player_gateway_status}

---

##### `stoppedActions`<sup>Optional</sup> <a name="stoppedActions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.stoppedActions"></a>

```java
public java.util.List<java.lang.String> getStoppedActions();
```

- *Type:* java.util.List<java.lang.String>

A list of fleet actions that have been suspended in the fleet location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#stopped_actions GameliftContainerFleet#stopped_actions}

---

### GameliftContainerFleetLocationsLocationCapacity <a name="GameliftContainerFleetLocationsLocationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetLocationsLocationCapacity;

GameliftContainerFleetLocationsLocationCapacity.builder()
//  .desiredEc2Instances(java.lang.Number)
//  .managedCapacityConfiguration(GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>java.lang.Number</code> | Defaults to MinSize if not defined. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.managedCapacityConfiguration">managedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | Configuration options for Amazon GameLift Servers-managed capacity behavior. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | The maximum value that is allowed for the fleet's instance count for a location. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | The minimum value allowed for the fleet's instance count for a location. |

---

##### `desiredEc2Instances`<sup>Optional</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.desiredEc2Instances"></a>

```java
public java.lang.Number getDesiredEc2Instances();
```

- *Type:* java.lang.Number

Defaults to MinSize if not defined.

The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits. If any auto-scaling policy is defined for the container fleet, the desired instance will only be applied once during fleet creation and will be ignored in updates to avoid conflicts with auto-scaling. During updates with any auto-scaling policy defined, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#desired_ec2_instances GameliftContainerFleet#desired_ec2_instances}

---

##### `managedCapacityConfiguration`<sup>Optional</sup> <a name="managedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.managedCapacityConfiguration"></a>

```java
public GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration getManagedCapacityConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

Configuration options for Amazon GameLift Servers-managed capacity behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#managed_capacity_configuration GameliftContainerFleet#managed_capacity_configuration}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

The maximum value that is allowed for the fleet's instance count for a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#max_size GameliftContainerFleet#max_size}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

The minimum value allowed for the fleet's instance count for a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#min_size GameliftContainerFleet#min_size}

---

### GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration <a name="GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration;

GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.builder()
//  .scaleInAfterInactivityMinutes(java.lang.Number)
//  .zeroCapacityStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes">scaleInAfterInactivityMinutes</a></code> | <code>java.lang.Number</code> | Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy">zeroCapacityStrategy</a></code> | <code>java.lang.String</code> | The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity. |

---

##### `scaleInAfterInactivityMinutes`<sup>Optional</sup> <a name="scaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes"></a>

```java
public java.lang.Number getScaleInAfterInactivityMinutes();
```

- *Type:* java.lang.Number

Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#scale_in_after_inactivity_minutes GameliftContainerFleet#scale_in_after_inactivity_minutes}

---

##### `zeroCapacityStrategy`<sup>Optional</sup> <a name="zeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy"></a>

```java
public java.lang.String getZeroCapacityStrategy();
```

- *Type:* java.lang.String

The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity.

Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#zero_capacity_strategy GameliftContainerFleet#zero_capacity_strategy}

---

### GameliftContainerFleetLogConfiguration <a name="GameliftContainerFleetLogConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetLogConfiguration;

GameliftContainerFleetLogConfiguration.builder()
//  .logDestination(java.lang.String)
//  .logGroupArn(java.lang.String)
//  .s3BucketName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logDestination">logDestination</a></code> | <code>java.lang.String</code> | Configures the service that provides logs. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | If log destination is CLOUDWATCH, logs are sent to the specified log group in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | The name of the S3 bucket to pull logs from if S3 is the LogDestination. |

---

##### `logDestination`<sup>Optional</sup> <a name="logDestination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logDestination"></a>

```java
public java.lang.String getLogDestination();
```

- *Type:* java.lang.String

Configures the service that provides logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#log_destination GameliftContainerFleet#log_destination}

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

If log destination is CLOUDWATCH, logs are sent to the specified log group in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#log_group_arn GameliftContainerFleet#log_group_arn}

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

The name of the S3 bucket to pull logs from if S3 is the LogDestination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#s3_bucket_name GameliftContainerFleet#s3_bucket_name}

---

### GameliftContainerFleetScalingPolicies <a name="GameliftContainerFleetScalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetScalingPolicies;

GameliftContainerFleetScalingPolicies.builder()
//  .comparisonOperator(java.lang.String)
//  .evaluationPeriods(java.lang.Number)
//  .metricName(java.lang.String)
//  .name(java.lang.String)
//  .policyType(java.lang.String)
//  .scalingAdjustment(java.lang.Number)
//  .scalingAdjustmentType(java.lang.String)
//  .targetConfiguration(GameliftContainerFleetScalingPoliciesTargetConfiguration)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | Comparison operator to use when measuring a metric against the threshold value. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.name">name</a></code> | <code>java.lang.String</code> | A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.policyType">policyType</a></code> | <code>java.lang.String</code> | The type of scaling policy to create. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustment">scalingAdjustment</a></code> | <code>java.lang.Number</code> | Amount of adjustment to make, based on the scaling adjustment type. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustmentType">scalingAdjustmentType</a></code> | <code>java.lang.String</code> | The type of adjustment to make to a fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | An object that contains settings for a target-based scaling policy. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Metric value used to trigger a scaling event. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

Comparison operator to use when measuring a metric against the threshold value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#comparison_operator GameliftContainerFleet#comparison_operator}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#evaluation_periods GameliftContainerFleet#evaluation_periods}

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.

This is required for RuleBased and TargetBased policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#metric_name GameliftContainerFleet#metric_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#name GameliftContainerFleet#name}

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

The type of scaling policy to create.

For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#policy_type GameliftContainerFleet#policy_type}

---

##### `scalingAdjustment`<sup>Optional</sup> <a name="scalingAdjustment" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustment"></a>

```java
public java.lang.Number getScalingAdjustment();
```

- *Type:* java.lang.Number

Amount of adjustment to make, based on the scaling adjustment type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#scaling_adjustment GameliftContainerFleet#scaling_adjustment}

---

##### `scalingAdjustmentType`<sup>Optional</sup> <a name="scalingAdjustmentType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustmentType"></a>

```java
public java.lang.String getScalingAdjustmentType();
```

- *Type:* java.lang.String

The type of adjustment to make to a fleet's instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#scaling_adjustment_type GameliftContainerFleet#scaling_adjustment_type}

---

##### `targetConfiguration`<sup>Optional</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.targetConfiguration"></a>

```java
public GameliftContainerFleetScalingPoliciesTargetConfiguration getTargetConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

An object that contains settings for a target-based scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#target_configuration GameliftContainerFleet#target_configuration}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Metric value used to trigger a scaling event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#threshold GameliftContainerFleet#threshold}

---

### GameliftContainerFleetScalingPoliciesTargetConfiguration <a name="GameliftContainerFleetScalingPoliciesTargetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetScalingPoliciesTargetConfiguration;

GameliftContainerFleetScalingPoliciesTargetConfiguration.builder()
//  .targetValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | Desired value to use with a target-based scaling policy. |

---

##### `targetValue`<sup>Optional</sup> <a name="targetValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

Desired value to use with a target-based scaling policy.

The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#target_value GameliftContainerFleet#target_value}

---

### GameliftContainerFleetTags <a name="GameliftContainerFleetTags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetTags;

GameliftContainerFleetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#key GameliftContainerFleet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_container_fleet#value GameliftContainerFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftContainerFleetDeploymentConfigurationOutputReference <a name="GameliftContainerFleetDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetDeploymentConfigurationOutputReference;

new GameliftContainerFleetDeploymentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetImpairmentStrategy">resetImpairmentStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetMinimumHealthyPercentage">resetMinimumHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetProtectionStrategy">resetProtectionStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImpairmentStrategy` <a name="resetImpairmentStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetImpairmentStrategy"></a>

```java
public void resetImpairmentStrategy()
```

##### `resetMinimumHealthyPercentage` <a name="resetMinimumHealthyPercentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetMinimumHealthyPercentage"></a>

```java
public void resetMinimumHealthyPercentage()
```

##### `resetProtectionStrategy` <a name="resetProtectionStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetProtectionStrategy"></a>

```java
public void resetProtectionStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategyInput">impairmentStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentageInput">minimumHealthyPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategyInput">protectionStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategy">impairmentStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentage">minimumHealthyPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategy">protectionStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `impairmentStrategyInput`<sup>Optional</sup> <a name="impairmentStrategyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategyInput"></a>

```java
public java.lang.String getImpairmentStrategyInput();
```

- *Type:* java.lang.String

---

##### `minimumHealthyPercentageInput`<sup>Optional</sup> <a name="minimumHealthyPercentageInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentageInput"></a>

```java
public java.lang.Number getMinimumHealthyPercentageInput();
```

- *Type:* java.lang.Number

---

##### `protectionStrategyInput`<sup>Optional</sup> <a name="protectionStrategyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategyInput"></a>

```java
public java.lang.String getProtectionStrategyInput();
```

- *Type:* java.lang.String

---

##### `impairmentStrategy`<sup>Required</sup> <a name="impairmentStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategy"></a>

```java
public java.lang.String getImpairmentStrategy();
```

- *Type:* java.lang.String

---

##### `minimumHealthyPercentage`<sup>Required</sup> <a name="minimumHealthyPercentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentage"></a>

```java
public java.lang.Number getMinimumHealthyPercentage();
```

- *Type:* java.lang.Number

---

##### `protectionStrategy`<sup>Required</sup> <a name="protectionStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategy"></a>

```java
public java.lang.String getProtectionStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerFleetDeploymentConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

---


### GameliftContainerFleetDeploymentDetailsOutputReference <a name="GameliftContainerFleetDeploymentDetailsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetDeploymentDetailsOutputReference;

new GameliftContainerFleetDeploymentDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.latestDeploymentId">latestDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails">GameliftContainerFleetDeploymentDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `latestDeploymentId`<sup>Required</sup> <a name="latestDeploymentId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.latestDeploymentId"></a>

```java
public java.lang.String getLatestDeploymentId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.internalValue"></a>

```java
public GameliftContainerFleetDeploymentDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails">GameliftContainerFleetDeploymentDetails</a>

---


### GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference <a name="GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference;

new GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator">resetNewGameSessionsPerCreator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes">resetPolicyPeriodInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNewGameSessionsPerCreator` <a name="resetNewGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator"></a>

```java
public void resetNewGameSessionsPerCreator()
```

##### `resetPolicyPeriodInMinutes` <a name="resetPolicyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes"></a>

```java
public void resetPolicyPeriodInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput">newGameSessionsPerCreatorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput">policyPeriodInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">newGameSessionsPerCreator</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">policyPeriodInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `newGameSessionsPerCreatorInput`<sup>Optional</sup> <a name="newGameSessionsPerCreatorInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput"></a>

```java
public java.lang.Number getNewGameSessionsPerCreatorInput();
```

- *Type:* java.lang.Number

---

##### `policyPeriodInMinutesInput`<sup>Optional</sup> <a name="policyPeriodInMinutesInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput"></a>

```java
public java.lang.Number getPolicyPeriodInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `newGameSessionsPerCreator`<sup>Required</sup> <a name="newGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```java
public java.lang.Number getNewGameSessionsPerCreator();
```

- *Type:* java.lang.Number

---

##### `policyPeriodInMinutes`<sup>Required</sup> <a name="policyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```java
public java.lang.Number getPolicyPeriodInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerFleetGameSessionCreationLimitPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

---


### GameliftContainerFleetInstanceConnectionPortRangeOutputReference <a name="GameliftContainerFleetInstanceConnectionPortRangeOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference;

new GameliftContainerFleetInstanceConnectionPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetToPort"></a>

```java
public void resetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerFleetInstanceConnectionPortRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

---


### GameliftContainerFleetInstanceInboundPermissionsList <a name="GameliftContainerFleetInstanceInboundPermissionsList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetInstanceInboundPermissionsList;

new GameliftContainerFleetInstanceInboundPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.get"></a>

```java
public GameliftContainerFleetInstanceInboundPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerFleetInstanceInboundPermissions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>>

---


### GameliftContainerFleetInstanceInboundPermissionsOutputReference <a name="GameliftContainerFleetInstanceInboundPermissionsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference;

new GameliftContainerFleetInstanceInboundPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetIpRange">resetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetIpRange` <a name="resetIpRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetIpRange"></a>

```java
public void resetIpRange()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetToPort"></a>

```java
public void resetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRangeInput">ipRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRangeInput"></a>

```java
public java.lang.String getIpRangeInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerFleetInstanceInboundPermissions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>

---


### GameliftContainerFleetLocationsList <a name="GameliftContainerFleetLocationsList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetLocationsList;

new GameliftContainerFleetLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.get"></a>

```java
public GameliftContainerFleetLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerFleetLocations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>>

---


### GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference <a name="GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference;

new GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes">resetScaleInAfterInactivityMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy">resetZeroCapacityStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScaleInAfterInactivityMinutes` <a name="resetScaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes"></a>

```java
public void resetScaleInAfterInactivityMinutes()
```

##### `resetZeroCapacityStrategy` <a name="resetZeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy"></a>

```java
public void resetZeroCapacityStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput">scaleInAfterInactivityMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput">zeroCapacityStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes">scaleInAfterInactivityMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy">zeroCapacityStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleInAfterInactivityMinutesInput`<sup>Optional</sup> <a name="scaleInAfterInactivityMinutesInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput"></a>

```java
public java.lang.Number getScaleInAfterInactivityMinutesInput();
```

- *Type:* java.lang.Number

---

##### `zeroCapacityStrategyInput`<sup>Optional</sup> <a name="zeroCapacityStrategyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput"></a>

```java
public java.lang.String getZeroCapacityStrategyInput();
```

- *Type:* java.lang.String

---

##### `scaleInAfterInactivityMinutes`<sup>Required</sup> <a name="scaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes"></a>

```java
public java.lang.Number getScaleInAfterInactivityMinutes();
```

- *Type:* java.lang.Number

---

##### `zeroCapacityStrategy`<sup>Required</sup> <a name="zeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy"></a>

```java
public java.lang.String getZeroCapacityStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---


### GameliftContainerFleetLocationsLocationCapacityOutputReference <a name="GameliftContainerFleetLocationsLocationCapacityOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetLocationsLocationCapacityOutputReference;

new GameliftContainerFleetLocationsLocationCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration">putManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances">resetDesiredEc2Instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration">resetManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMinSize">resetMinSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedCapacityConfiguration` <a name="putManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration"></a>

```java
public void putManagedCapacityConfiguration(GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `resetDesiredEc2Instances` <a name="resetDesiredEc2Instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances"></a>

```java
public void resetDesiredEc2Instances()
```

##### `resetManagedCapacityConfiguration` <a name="resetManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration"></a>

```java
public void resetManagedCapacityConfiguration()
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMaxSize"></a>

```java
public void resetMaxSize()
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMinSize"></a>

```java
public void resetMinSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration">managedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput">desiredEc2InstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput">managedCapacityConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSizeInput">maxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedCapacityConfiguration`<sup>Required</sup> <a name="managedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration"></a>

```java
public GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference getManagedCapacityConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a>

---

##### `desiredEc2InstancesInput`<sup>Optional</sup> <a name="desiredEc2InstancesInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput"></a>

```java
public java.lang.Number getDesiredEc2InstancesInput();
```

- *Type:* java.lang.Number

---

##### `managedCapacityConfigurationInput`<sup>Optional</sup> <a name="managedCapacityConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput"></a>

```java
public IResolvable|GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration getManagedCapacityConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSizeInput"></a>

```java
public java.lang.Number getMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `desiredEc2Instances`<sup>Required</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances"></a>

```java
public java.lang.Number getDesiredEc2Instances();
```

- *Type:* java.lang.Number

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerFleetLocationsLocationCapacity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

---


### GameliftContainerFleetLocationsOutputReference <a name="GameliftContainerFleetLocationsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetLocationsOutputReference;

new GameliftContainerFleetLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity">putLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocationCapacity">resetLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetPlayerGatewayStatus">resetPlayerGatewayStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetStoppedActions">resetStoppedActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocationCapacity` <a name="putLocationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity"></a>

```java
public void putLocationCapacity(GameliftContainerFleetLocationsLocationCapacity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

---

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetLocationCapacity` <a name="resetLocationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocationCapacity"></a>

```java
public void resetLocationCapacity()
```

##### `resetPlayerGatewayStatus` <a name="resetPlayerGatewayStatus" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetPlayerGatewayStatus"></a>

```java
public void resetPlayerGatewayStatus()
```

##### `resetStoppedActions` <a name="resetStoppedActions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetStoppedActions"></a>

```java
public void resetStoppedActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacity">locationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference">GameliftContainerFleetLocationsLocationCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacityInput">locationCapacityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatusInput">playerGatewayStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActionsInput">stoppedActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatus">playerGatewayStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActions">stoppedActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationCapacity`<sup>Required</sup> <a name="locationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacity"></a>

```java
public GameliftContainerFleetLocationsLocationCapacityOutputReference getLocationCapacity();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference">GameliftContainerFleetLocationsLocationCapacityOutputReference</a>

---

##### `locationCapacityInput`<sup>Optional</sup> <a name="locationCapacityInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacityInput"></a>

```java
public IResolvable|GameliftContainerFleetLocationsLocationCapacity getLocationCapacityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `playerGatewayStatusInput`<sup>Optional</sup> <a name="playerGatewayStatusInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatusInput"></a>

```java
public java.lang.String getPlayerGatewayStatusInput();
```

- *Type:* java.lang.String

---

##### `stoppedActionsInput`<sup>Optional</sup> <a name="stoppedActionsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActionsInput"></a>

```java
public java.util.List<java.lang.String> getStoppedActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `playerGatewayStatus`<sup>Required</sup> <a name="playerGatewayStatus" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatus"></a>

```java
public java.lang.String getPlayerGatewayStatus();
```

- *Type:* java.lang.String

---

##### `stoppedActions`<sup>Required</sup> <a name="stoppedActions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActions"></a>

```java
public java.util.List<java.lang.String> getStoppedActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerFleetLocations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>

---


### GameliftContainerFleetLogConfigurationOutputReference <a name="GameliftContainerFleetLogConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetLogConfigurationOutputReference;

new GameliftContainerFleetLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogDestination">resetLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogDestination` <a name="resetLogDestination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogDestination"></a>

```java
public void resetLogDestination()
```

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogGroupArn"></a>

```java
public void resetLogGroupArn()
```

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetS3BucketName"></a>

```java
public void resetS3BucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestinationInput">logDestinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestination">logDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logDestinationInput`<sup>Optional</sup> <a name="logDestinationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestinationInput"></a>

```java
public java.lang.String getLogDestinationInput();
```

- *Type:* java.lang.String

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArnInput"></a>

```java
public java.lang.String getLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestination"></a>

```java
public java.lang.String getLogDestination();
```

- *Type:* java.lang.String

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerFleetLogConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

---


### GameliftContainerFleetScalingPoliciesList <a name="GameliftContainerFleetScalingPoliciesList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetScalingPoliciesList;

new GameliftContainerFleetScalingPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.get"></a>

```java
public GameliftContainerFleetScalingPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerFleetScalingPolicies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>>

---


### GameliftContainerFleetScalingPoliciesOutputReference <a name="GameliftContainerFleetScalingPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetScalingPoliciesOutputReference;

new GameliftContainerFleetScalingPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.putTargetConfiguration">putTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetPolicyType">resetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustment">resetScalingAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustmentType">resetScalingAdjustmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetTargetConfiguration">resetTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetConfiguration` <a name="putTargetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.putTargetConfiguration"></a>

```java
public void putTargetConfiguration(GameliftContainerFleetScalingPoliciesTargetConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.putTargetConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetComparisonOperator"></a>

```java
public void resetComparisonOperator()
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetMetricName"></a>

```java
public void resetMetricName()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetPolicyType"></a>

```java
public void resetPolicyType()
```

##### `resetScalingAdjustment` <a name="resetScalingAdjustment" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustment"></a>

```java
public void resetScalingAdjustment()
```

##### `resetScalingAdjustmentType` <a name="resetScalingAdjustmentType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustmentType"></a>

```java
public void resetScalingAdjustmentType()
```

##### `resetTargetConfiguration` <a name="resetTargetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetTargetConfiguration"></a>

```java
public void resetTargetConfiguration()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference">GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput">scalingAdjustmentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput">scalingAdjustmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfigurationInput">targetConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustment">scalingAdjustment</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentType">scalingAdjustmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetConfiguration`<sup>Required</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfiguration"></a>

```java
public GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference getTargetConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference">GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `scalingAdjustmentInput`<sup>Optional</sup> <a name="scalingAdjustmentInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput"></a>

```java
public java.lang.Number getScalingAdjustmentInput();
```

- *Type:* java.lang.Number

---

##### `scalingAdjustmentTypeInput`<sup>Optional</sup> <a name="scalingAdjustmentTypeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput"></a>

```java
public java.lang.String getScalingAdjustmentTypeInput();
```

- *Type:* java.lang.String

---

##### `targetConfigurationInput`<sup>Optional</sup> <a name="targetConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfigurationInput"></a>

```java
public IResolvable|GameliftContainerFleetScalingPoliciesTargetConfiguration getTargetConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `scalingAdjustment`<sup>Required</sup> <a name="scalingAdjustment" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustment"></a>

```java
public java.lang.Number getScalingAdjustment();
```

- *Type:* java.lang.Number

---

##### `scalingAdjustmentType`<sup>Required</sup> <a name="scalingAdjustmentType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentType"></a>

```java
public java.lang.String getScalingAdjustmentType();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerFleetScalingPolicies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>

---


### GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference <a name="GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference;

new GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue">resetTargetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetValue` <a name="resetTargetValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue"></a>

```java
public void resetTargetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput"></a>

```java
public java.lang.Number getTargetValueInput();
```

- *Type:* java.lang.Number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerFleetScalingPoliciesTargetConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---


### GameliftContainerFleetTagsList <a name="GameliftContainerFleetTagsList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetTagsList;

new GameliftContainerFleetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.get"></a>

```java
public GameliftContainerFleetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerFleetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>>

---


### GameliftContainerFleetTagsOutputReference <a name="GameliftContainerFleetTagsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_fleet.GameliftContainerFleetTagsOutputReference;

new GameliftContainerFleetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerFleetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>

---



