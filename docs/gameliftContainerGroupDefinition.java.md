# `gameliftContainerGroupDefinition` Submodule <a name="`gameliftContainerGroupDefinition` Submodule" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftContainerGroupDefinition <a name="GameliftContainerGroupDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition awscc_gamelift_container_group_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinition;

GameliftContainerGroupDefinition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .operatingSystem(java.lang.String)
    .totalMemoryLimitMebibytes(java.lang.Number)
    .totalVcpuLimit(java.lang.Number)
//  .containerGroupType(java.lang.String)
//  .gameServerContainerDefinition(GameliftContainerGroupDefinitionGameServerContainerDefinition)
//  .sourceVersionNumber(java.lang.Number)
//  .supportContainerDefinitions(IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitions>)
//  .tags(IResolvable|java.util.List<GameliftContainerGroupDefinitionTags>)
//  .versionDescription(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A descriptive label for the container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | The operating system of the container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.totalMemoryLimitMebibytes">totalMemoryLimitMebibytes</a></code> | <code>java.lang.Number</code> | The total memory limit of container groups following this definition in MiB. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.totalVcpuLimit">totalVcpuLimit</a></code> | <code>java.lang.Number</code> | The total amount of virtual CPUs on the container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.containerGroupType">containerGroupType</a></code> | <code>java.lang.String</code> | The scope of the container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.gameServerContainerDefinition">gameServerContainerDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | Specifies the information required to run game servers with this container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.sourceVersionNumber">sourceVersionNumber</a></code> | <code>java.lang.Number</code> | A specific ContainerGroupDefinition version to be updated. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.supportContainerDefinitions">supportContainerDefinitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>></code> | A collection of support container definitions that define the containers in this group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | The description of this version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A descriptive label for the container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.operatingSystem"></a>

- *Type:* java.lang.String

The operating system of the container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#operating_system GameliftContainerGroupDefinition#operating_system}

---

##### `totalMemoryLimitMebibytes`<sup>Required</sup> <a name="totalMemoryLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.totalMemoryLimitMebibytes"></a>

- *Type:* java.lang.Number

The total memory limit of container groups following this definition in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#total_memory_limit_mebibytes GameliftContainerGroupDefinition#total_memory_limit_mebibytes}

---

##### `totalVcpuLimit`<sup>Required</sup> <a name="totalVcpuLimit" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.totalVcpuLimit"></a>

- *Type:* java.lang.Number

The total amount of virtual CPUs on the container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#total_vcpu_limit GameliftContainerGroupDefinition#total_vcpu_limit}

---

##### `containerGroupType`<sup>Optional</sup> <a name="containerGroupType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.containerGroupType"></a>

- *Type:* java.lang.String

The scope of the container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_group_type GameliftContainerGroupDefinition#container_group_type}

---

##### `gameServerContainerDefinition`<sup>Optional</sup> <a name="gameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.gameServerContainerDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

Specifies the information required to run game servers with this container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#game_server_container_definition GameliftContainerGroupDefinition#game_server_container_definition}

---

##### `sourceVersionNumber`<sup>Optional</sup> <a name="sourceVersionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.sourceVersionNumber"></a>

- *Type:* java.lang.Number

A specific ContainerGroupDefinition version to be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#source_version_number GameliftContainerGroupDefinition#source_version_number}

---

##### `supportContainerDefinitions`<sup>Optional</sup> <a name="supportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.supportContainerDefinitions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>>

A collection of support container definitions that define the containers in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#support_container_definitions GameliftContainerGroupDefinition#support_container_definitions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#tags GameliftContainerGroupDefinition#tags}

---

##### `versionDescription`<sup>Optional</sup> <a name="versionDescription" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.Initializer.parameter.versionDescription"></a>

- *Type:* java.lang.String

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#version_description GameliftContainerGroupDefinition#version_description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition">putGameServerContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putSupportContainerDefinitions">putSupportContainerDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetContainerGroupType">resetContainerGroupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetGameServerContainerDefinition">resetGameServerContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSourceVersionNumber">resetSourceVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSupportContainerDefinitions">resetSupportContainerDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetVersionDescription">resetVersionDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGameServerContainerDefinition` <a name="putGameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition"></a>

```java
public void putGameServerContainerDefinition(GameliftContainerGroupDefinitionGameServerContainerDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putGameServerContainerDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

---

##### `putSupportContainerDefinitions` <a name="putSupportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putSupportContainerDefinitions"></a>

```java
public void putSupportContainerDefinitions(IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putSupportContainerDefinitions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GameliftContainerGroupDefinitionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>>

---

##### `resetContainerGroupType` <a name="resetContainerGroupType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetContainerGroupType"></a>

```java
public void resetContainerGroupType()
```

##### `resetGameServerContainerDefinition` <a name="resetGameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetGameServerContainerDefinition"></a>

```java
public void resetGameServerContainerDefinition()
```

##### `resetSourceVersionNumber` <a name="resetSourceVersionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSourceVersionNumber"></a>

```java
public void resetSourceVersionNumber()
```

##### `resetSupportContainerDefinitions` <a name="resetSupportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetSupportContainerDefinitions"></a>

```java
public void resetSupportContainerDefinitions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetTags"></a>

```java
public void resetTags()
```

##### `resetVersionDescription` <a name="resetVersionDescription" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.resetVersionDescription"></a>

```java
public void resetVersionDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinition;

GameliftContainerGroupDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinition;

GameliftContainerGroupDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinition;

GameliftContainerGroupDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinition;

GameliftContainerGroupDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GameliftContainerGroupDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GameliftContainerGroupDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GameliftContainerGroupDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GameliftContainerGroupDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GameliftContainerGroupDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupDefinitionArn">containerGroupDefinitionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinition">gameServerContainerDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitions">supportContainerDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList">GameliftContainerGroupDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionNumber">versionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupTypeInput">containerGroupTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinitionInput">gameServerContainerDefinitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystemInput">operatingSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumberInput">sourceVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitionsInput">supportContainerDefinitionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytesInput">totalMemoryLimitMebibytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimitInput">totalVcpuLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescriptionInput">versionDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupType">containerGroupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumber">sourceVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytes">totalMemoryLimitMebibytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimit">totalVcpuLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerGroupDefinitionArn`<sup>Required</sup> <a name="containerGroupDefinitionArn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupDefinitionArn"></a>

```java
public java.lang.String getContainerGroupDefinitionArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `gameServerContainerDefinition`<sup>Required</sup> <a name="gameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinition"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference getGameServerContainerDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `supportContainerDefinitions`<sup>Required</sup> <a name="supportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitions"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsList getSupportContainerDefinitions();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tags"></a>

```java
public GameliftContainerGroupDefinitionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList">GameliftContainerGroupDefinitionTagsList</a>

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionNumber"></a>

```java
public java.lang.Number getVersionNumber();
```

- *Type:* java.lang.Number

---

##### `containerGroupTypeInput`<sup>Optional</sup> <a name="containerGroupTypeInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupTypeInput"></a>

```java
public java.lang.String getContainerGroupTypeInput();
```

- *Type:* java.lang.String

---

##### `gameServerContainerDefinitionInput`<sup>Optional</sup> <a name="gameServerContainerDefinitionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.gameServerContainerDefinitionInput"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionGameServerContainerDefinition getGameServerContainerDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystemInput"></a>

```java
public java.lang.String getOperatingSystemInput();
```

- *Type:* java.lang.String

---

##### `sourceVersionNumberInput`<sup>Optional</sup> <a name="sourceVersionNumberInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumberInput"></a>

```java
public java.lang.Number getSourceVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `supportContainerDefinitionsInput`<sup>Optional</sup> <a name="supportContainerDefinitionsInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.supportContainerDefinitionsInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitions> getSupportContainerDefinitionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>>

---

##### `totalMemoryLimitMebibytesInput`<sup>Optional</sup> <a name="totalMemoryLimitMebibytesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytesInput"></a>

```java
public java.lang.Number getTotalMemoryLimitMebibytesInput();
```

- *Type:* java.lang.Number

---

##### `totalVcpuLimitInput`<sup>Optional</sup> <a name="totalVcpuLimitInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimitInput"></a>

```java
public java.lang.Number getTotalVcpuLimitInput();
```

- *Type:* java.lang.Number

---

##### `versionDescriptionInput`<sup>Optional</sup> <a name="versionDescriptionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescriptionInput"></a>

```java
public java.lang.String getVersionDescriptionInput();
```

- *Type:* java.lang.String

---

##### `containerGroupType`<sup>Required</sup> <a name="containerGroupType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.containerGroupType"></a>

```java
public java.lang.String getContainerGroupType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `sourceVersionNumber`<sup>Required</sup> <a name="sourceVersionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.sourceVersionNumber"></a>

```java
public java.lang.Number getSourceVersionNumber();
```

- *Type:* java.lang.Number

---

##### `totalMemoryLimitMebibytes`<sup>Required</sup> <a name="totalMemoryLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalMemoryLimitMebibytes"></a>

```java
public java.lang.Number getTotalMemoryLimitMebibytes();
```

- *Type:* java.lang.Number

---

##### `totalVcpuLimit`<sup>Required</sup> <a name="totalVcpuLimit" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.totalVcpuLimit"></a>

```java
public java.lang.Number getTotalVcpuLimit();
```

- *Type:* java.lang.Number

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.versionDescription"></a>

```java
public java.lang.String getVersionDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftContainerGroupDefinitionConfig <a name="GameliftContainerGroupDefinitionConfig" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionConfig;

GameliftContainerGroupDefinitionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .operatingSystem(java.lang.String)
    .totalMemoryLimitMebibytes(java.lang.Number)
    .totalVcpuLimit(java.lang.Number)
//  .containerGroupType(java.lang.String)
//  .gameServerContainerDefinition(GameliftContainerGroupDefinitionGameServerContainerDefinition)
//  .sourceVersionNumber(java.lang.Number)
//  .supportContainerDefinitions(IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitions>)
//  .tags(IResolvable|java.util.List<GameliftContainerGroupDefinitionTags>)
//  .versionDescription(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.name">name</a></code> | <code>java.lang.String</code> | A descriptive label for the container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | The operating system of the container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalMemoryLimitMebibytes">totalMemoryLimitMebibytes</a></code> | <code>java.lang.Number</code> | The total memory limit of container groups following this definition in MiB. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalVcpuLimit">totalVcpuLimit</a></code> | <code>java.lang.Number</code> | The total amount of virtual CPUs on the container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.containerGroupType">containerGroupType</a></code> | <code>java.lang.String</code> | The scope of the container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.gameServerContainerDefinition">gameServerContainerDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | Specifies the information required to run game servers with this container group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.sourceVersionNumber">sourceVersionNumber</a></code> | <code>java.lang.Number</code> | A specific ContainerGroupDefinition version to be updated. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.supportContainerDefinitions">supportContainerDefinitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>></code> | A collection of support container definitions that define the containers in this group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | The description of this version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A descriptive label for the container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

The operating system of the container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#operating_system GameliftContainerGroupDefinition#operating_system}

---

##### `totalMemoryLimitMebibytes`<sup>Required</sup> <a name="totalMemoryLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalMemoryLimitMebibytes"></a>

```java
public java.lang.Number getTotalMemoryLimitMebibytes();
```

- *Type:* java.lang.Number

The total memory limit of container groups following this definition in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#total_memory_limit_mebibytes GameliftContainerGroupDefinition#total_memory_limit_mebibytes}

---

##### `totalVcpuLimit`<sup>Required</sup> <a name="totalVcpuLimit" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.totalVcpuLimit"></a>

```java
public java.lang.Number getTotalVcpuLimit();
```

- *Type:* java.lang.Number

The total amount of virtual CPUs on the container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#total_vcpu_limit GameliftContainerGroupDefinition#total_vcpu_limit}

---

##### `containerGroupType`<sup>Optional</sup> <a name="containerGroupType" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.containerGroupType"></a>

```java
public java.lang.String getContainerGroupType();
```

- *Type:* java.lang.String

The scope of the container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_group_type GameliftContainerGroupDefinition#container_group_type}

---

##### `gameServerContainerDefinition`<sup>Optional</sup> <a name="gameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.gameServerContainerDefinition"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinition getGameServerContainerDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

Specifies the information required to run game servers with this container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#game_server_container_definition GameliftContainerGroupDefinition#game_server_container_definition}

---

##### `sourceVersionNumber`<sup>Optional</sup> <a name="sourceVersionNumber" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.sourceVersionNumber"></a>

```java
public java.lang.Number getSourceVersionNumber();
```

- *Type:* java.lang.Number

A specific ContainerGroupDefinition version to be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#source_version_number GameliftContainerGroupDefinition#source_version_number}

---

##### `supportContainerDefinitions`<sup>Optional</sup> <a name="supportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.supportContainerDefinitions"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitions> getSupportContainerDefinitions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>>

A collection of support container definitions that define the containers in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#support_container_definitions GameliftContainerGroupDefinition#support_container_definitions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#tags GameliftContainerGroupDefinition#tags}

---

##### `versionDescription`<sup>Optional</sup> <a name="versionDescription" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionConfig.property.versionDescription"></a>

```java
public java.lang.String getVersionDescription();
```

- *Type:* java.lang.String

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#version_description GameliftContainerGroupDefinition#version_description}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinition <a name="GameliftContainerGroupDefinitionGameServerContainerDefinition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinition;

GameliftContainerGroupDefinitionGameServerContainerDefinition.builder()
//  .containerName(java.lang.String)
//  .dependsOn(IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn>)
//  .environmentOverride(IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride>)
//  .imageUri(java.lang.String)
//  .linuxCapabilities(GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities)
//  .mountPoints(IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints>)
//  .portConfiguration(GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration)
//  .resolvedImageDigest(java.lang.String)
//  .serverSdkVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.containerName">containerName</a></code> | <code>java.lang.String</code> | A descriptive label for the container definition. Container definition names must be unique with a container group definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.dependsOn">dependsOn</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>></code> | A list of container dependencies that determines when this container starts up and shuts down. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.environmentOverride">environmentOverride</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>></code> | The environment variables to pass to a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | Specifies the image URI of this container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.linuxCapabilities">linuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a></code> | Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.mountPoints">mountPoints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>></code> | A list of mount point configurations to be used in a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.portConfiguration">portConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a></code> | Defines the ports on the container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.resolvedImageDigest">resolvedImageDigest</a></code> | <code>java.lang.String</code> | The digest of the container image. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.serverSdkVersion">serverSdkVersion</a></code> | <code>java.lang.String</code> | The version of the server SDK used in this container group. |

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

A descriptive label for the container definition. Container definition names must be unique with a container group definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.dependsOn"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn> getDependsOn();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>>

A list of container dependencies that determines when this container starts up and shuts down.

For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#depends_on GameliftContainerGroupDefinition#depends_on}

---

##### `environmentOverride`<sup>Optional</sup> <a name="environmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.environmentOverride"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride> getEnvironmentOverride();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>>

The environment variables to pass to a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#environment_override GameliftContainerGroupDefinition#environment_override}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

Specifies the image URI of this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#image_uri GameliftContainerGroupDefinition#image_uri}

---

##### `linuxCapabilities`<sup>Optional</sup> <a name="linuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.linuxCapabilities"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities getLinuxCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#linux_capabilities GameliftContainerGroupDefinition#linux_capabilities}

---

##### `mountPoints`<sup>Optional</sup> <a name="mountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.mountPoints"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints> getMountPoints();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>>

A list of mount point configurations to be used in a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#mount_points GameliftContainerGroupDefinition#mount_points}

---

##### `portConfiguration`<sup>Optional</sup> <a name="portConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.portConfiguration"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration getPortConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

Defines the ports on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#port_configuration GameliftContainerGroupDefinition#port_configuration}

---

##### `resolvedImageDigest`<sup>Optional</sup> <a name="resolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.resolvedImageDigest"></a>

```java
public java.lang.String getResolvedImageDigest();
```

- *Type:* java.lang.String

The digest of the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#resolved_image_digest GameliftContainerGroupDefinition#resolved_image_digest}

---

##### `serverSdkVersion`<sup>Optional</sup> <a name="serverSdkVersion" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition.property.serverSdkVersion"></a>

```java
public java.lang.String getServerSdkVersion();
```

- *Type:* java.lang.String

The version of the server SDK used in this container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#server_sdk_version GameliftContainerGroupDefinition#server_sdk_version}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn;

GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.builder()
//  .condition(java.lang.String)
//  .containerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.condition">condition</a></code> | <code>java.lang.String</code> | The type of dependency. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.containerName">containerName</a></code> | <code>java.lang.String</code> | A descriptive label for the container definition. The container being defined depends on this container's condition. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

The type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#condition GameliftContainerGroupDefinition#condition}

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

A descriptive label for the container definition. The container being defined depends on this container's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride;

GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.name">name</a></code> | <code>java.lang.String</code> | The environment variable name. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.value">value</a></code> | <code>java.lang.String</code> | The environment variable value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The environment variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The environment variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities;

GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.builder()
//  .include(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | The list of Linux capabilities to add to the container's default configuration. |

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

The list of Linux capabilities to add to the container's default configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#include GameliftContainerGroupDefinition#include}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints;

GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.builder()
//  .accessLevel(java.lang.String)
//  .containerPath(java.lang.String)
//  .instancePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | The access permissions for the mounted path. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.containerPath">containerPath</a></code> | <code>java.lang.String</code> | The path inside the container where the mount is accessible. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.instancePath">instancePath</a></code> | <code>java.lang.String</code> | The path on the host that will be mounted in the container. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

The access permissions for the mounted path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#access_level GameliftContainerGroupDefinition#access_level}

---

##### `containerPath`<sup>Optional</sup> <a name="containerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.containerPath"></a>

```java
public java.lang.String getContainerPath();
```

- *Type:* java.lang.String

The path inside the container where the mount is accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_path GameliftContainerGroupDefinition#container_path}

---

##### `instancePath`<sup>Optional</sup> <a name="instancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints.property.instancePath"></a>

```java
public java.lang.String getInstancePath();
```

- *Type:* java.lang.String

The path on the host that will be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#instance_path GameliftContainerGroupDefinition#instance_path}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration;

GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.builder()
//  .containerPortRanges(IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.property.containerPortRanges">containerPortRanges</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>></code> | Specifies one or more ranges of ports on a container. |

---

##### `containerPortRanges`<sup>Optional</sup> <a name="containerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration.property.containerPortRanges"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges> getContainerPortRanges();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>>

Specifies one or more ranges of ports on a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_port_ranges GameliftContainerGroupDefinition#container_port_ranges}

---

### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges;

GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.builder()
//  .fromPort(java.lang.Number)
//  .protocol(java.lang.String)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | A starting value for the range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Defines the protocol of these ports. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | An ending value for the range of allowed port numbers. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

A starting value for the range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#from_port GameliftContainerGroupDefinition#from_port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Defines the protocol of these ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#protocol GameliftContainerGroupDefinition#protocol}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

An ending value for the range of allowed port numbers.

Port numbers are end-inclusive. This value must be equal to or greater than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#to_port GameliftContainerGroupDefinition#to_port}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitions <a name="GameliftContainerGroupDefinitionSupportContainerDefinitions" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitions;

GameliftContainerGroupDefinitionSupportContainerDefinitions.builder()
//  .containerName(java.lang.String)
//  .dependsOn(IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn>)
//  .environmentOverride(IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride>)
//  .essential(java.lang.Boolean|IResolvable)
//  .healthCheck(GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck)
//  .imageUri(java.lang.String)
//  .linuxCapabilities(GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities)
//  .memoryHardLimitMebibytes(java.lang.Number)
//  .mountPoints(IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints>)
//  .portConfiguration(GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration)
//  .resolvedImageDigest(java.lang.String)
//  .vcpu(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.containerName">containerName</a></code> | <code>java.lang.String</code> | A descriptive label for the container definition. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.dependsOn">dependsOn</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>></code> | A list of container dependencies that determines when this container starts up and shuts down. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.environmentOverride">environmentOverride</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>></code> | The environment variables to pass to a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.essential">essential</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies if the container is essential. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a></code> | Specifies how the health of the containers will be checked. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | Specifies the image URI of this container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.linuxCapabilities">linuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a></code> | Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.memoryHardLimitMebibytes">memoryHardLimitMebibytes</a></code> | <code>java.lang.Number</code> | The total memory limit of container groups following this definition in MiB. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.mountPoints">mountPoints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>></code> | A list of mount point configurations to be used in a container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.portConfiguration">portConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a></code> | Defines the ports on the container. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.resolvedImageDigest">resolvedImageDigest</a></code> | <code>java.lang.String</code> | The digest of the container image. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.vcpu">vcpu</a></code> | <code>java.lang.Number</code> | The number of virtual CPUs to give to the support group. |

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

A descriptive label for the container definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.dependsOn"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn> getDependsOn();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>>

A list of container dependencies that determines when this container starts up and shuts down.

For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#depends_on GameliftContainerGroupDefinition#depends_on}

---

##### `environmentOverride`<sup>Optional</sup> <a name="environmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.environmentOverride"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride> getEnvironmentOverride();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>>

The environment variables to pass to a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#environment_override GameliftContainerGroupDefinition#environment_override}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.essential"></a>

```java
public java.lang.Boolean|IResolvable getEssential();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies if the container is essential.

If an essential container fails a health check, then all containers in the container group will be restarted. You must specify exactly 1 essential container in a container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#essential GameliftContainerGroupDefinition#essential}

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.healthCheck"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck getHealthCheck();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

Specifies how the health of the containers will be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#health_check GameliftContainerGroupDefinition#health_check}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

Specifies the image URI of this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#image_uri GameliftContainerGroupDefinition#image_uri}

---

##### `linuxCapabilities`<sup>Optional</sup> <a name="linuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.linuxCapabilities"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities getLinuxCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

Linux-specific modifications applied to the default Docker container configuration, such as Linux capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#linux_capabilities GameliftContainerGroupDefinition#linux_capabilities}

---

##### `memoryHardLimitMebibytes`<sup>Optional</sup> <a name="memoryHardLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.memoryHardLimitMebibytes"></a>

```java
public java.lang.Number getMemoryHardLimitMebibytes();
```

- *Type:* java.lang.Number

The total memory limit of container groups following this definition in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#memory_hard_limit_mebibytes GameliftContainerGroupDefinition#memory_hard_limit_mebibytes}

---

##### `mountPoints`<sup>Optional</sup> <a name="mountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.mountPoints"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints> getMountPoints();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>>

A list of mount point configurations to be used in a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#mount_points GameliftContainerGroupDefinition#mount_points}

---

##### `portConfiguration`<sup>Optional</sup> <a name="portConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.portConfiguration"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration getPortConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

Defines the ports on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#port_configuration GameliftContainerGroupDefinition#port_configuration}

---

##### `resolvedImageDigest`<sup>Optional</sup> <a name="resolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.resolvedImageDigest"></a>

```java
public java.lang.String getResolvedImageDigest();
```

- *Type:* java.lang.String

The digest of the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#resolved_image_digest GameliftContainerGroupDefinition#resolved_image_digest}

---

##### `vcpu`<sup>Optional</sup> <a name="vcpu" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions.property.vcpu"></a>

```java
public java.lang.Number getVcpu();
```

- *Type:* java.lang.Number

The number of virtual CPUs to give to the support group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#vcpu GameliftContainerGroupDefinition#vcpu}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn;

GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.builder()
//  .condition(java.lang.String)
//  .containerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.condition">condition</a></code> | <code>java.lang.String</code> | The type of dependency. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.containerName">containerName</a></code> | <code>java.lang.String</code> | A descriptive label for the container definition. The container being defined depends on this container's condition. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

The type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#condition GameliftContainerGroupDefinition#condition}

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

A descriptive label for the container definition. The container being defined depends on this container's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_name GameliftContainerGroupDefinition#container_name}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride;

GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.name">name</a></code> | <code>java.lang.String</code> | The environment variable name. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.value">value</a></code> | <code>java.lang.String</code> | The environment variable value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The environment variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#name GameliftContainerGroupDefinition#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The environment variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck;

GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.builder()
//  .command(java.util.List<java.lang.String>)
//  .interval(java.lang.Number)
//  .retries(java.lang.Number)
//  .startPeriod(java.lang.Number)
//  .timeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | A string array representing the command that the container runs to determine if it is healthy. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.interval">interval</a></code> | <code>java.lang.Number</code> | How often (in seconds) the health is checked. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.retries">retries</a></code> | <code>java.lang.Number</code> | How many times the process manager will retry the command after a timeout. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.startPeriod">startPeriod</a></code> | <code>java.lang.Number</code> | The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | How many seconds the process manager allows the command to run before canceling it. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

A string array representing the command that the container runs to determine if it is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#command GameliftContainerGroupDefinition#command}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

How often (in seconds) the health is checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#interval GameliftContainerGroupDefinition#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

How many times the process manager will retry the command after a timeout.

(The first run of the command does not count as a retry.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#retries GameliftContainerGroupDefinition#retries}

---

##### `startPeriod`<sup>Optional</sup> <a name="startPeriod" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.startPeriod"></a>

```java
public java.lang.Number getStartPeriod();
```

- *Type:* java.lang.Number

The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#start_period GameliftContainerGroupDefinition#start_period}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

How many seconds the process manager allows the command to run before canceling it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#timeout GameliftContainerGroupDefinition#timeout}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities;

GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.builder()
//  .include(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | The list of Linux capabilities to add to the container's default configuration. |

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

The list of Linux capabilities to add to the container's default configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#include GameliftContainerGroupDefinition#include}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints;

GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.builder()
//  .accessLevel(java.lang.String)
//  .containerPath(java.lang.String)
//  .instancePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | The access permissions for the mounted path. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.containerPath">containerPath</a></code> | <code>java.lang.String</code> | The path inside the container where the mount is accessible. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.instancePath">instancePath</a></code> | <code>java.lang.String</code> | The path on the host that will be mounted in the container. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

The access permissions for the mounted path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#access_level GameliftContainerGroupDefinition#access_level}

---

##### `containerPath`<sup>Optional</sup> <a name="containerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.containerPath"></a>

```java
public java.lang.String getContainerPath();
```

- *Type:* java.lang.String

The path inside the container where the mount is accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_path GameliftContainerGroupDefinition#container_path}

---

##### `instancePath`<sup>Optional</sup> <a name="instancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints.property.instancePath"></a>

```java
public java.lang.String getInstancePath();
```

- *Type:* java.lang.String

The path on the host that will be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#instance_path GameliftContainerGroupDefinition#instance_path}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration;

GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.builder()
//  .containerPortRanges(IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.property.containerPortRanges">containerPortRanges</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>></code> | Specifies one or more ranges of ports on a container. |

---

##### `containerPortRanges`<sup>Optional</sup> <a name="containerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration.property.containerPortRanges"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges> getContainerPortRanges();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>>

Specifies one or more ranges of ports on a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#container_port_ranges GameliftContainerGroupDefinition#container_port_ranges}

---

### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges;

GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.builder()
//  .fromPort(java.lang.Number)
//  .protocol(java.lang.String)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | A starting value for the range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Defines the protocol of these ports. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | An ending value for the range of allowed port numbers. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

A starting value for the range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#from_port GameliftContainerGroupDefinition#from_port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Defines the protocol of these ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#protocol GameliftContainerGroupDefinition#protocol}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

An ending value for the range of allowed port numbers.

Port numbers are end-inclusive. This value must be equal to or greater than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#to_port GameliftContainerGroupDefinition#to_port}

---

### GameliftContainerGroupDefinitionTags <a name="GameliftContainerGroupDefinitionTags" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionTags;

GameliftContainerGroupDefinitionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#key GameliftContainerGroupDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_container_group_definition#value GameliftContainerGroupDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList;

new GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference;

new GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetContainerName` <a name="resetContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.resetContainerName"></a>

```java
public void resetContainerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList;

new GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference;

new GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference;

new GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.resetInclude"></a>

```java
public void resetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.includeInput"></a>

```java
public java.util.List<java.lang.String> getIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList;

new GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference;

new GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetContainerPath">resetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetInstancePath">resetInstancePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetContainerPath` <a name="resetContainerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetContainerPath"></a>

```java
public void resetContainerPath()
```

##### `resetInstancePath` <a name="resetInstancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.resetInstancePath"></a>

```java
public void resetInstancePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPathInput">containerPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePathInput">instancePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPath">containerPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePath">instancePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `containerPathInput`<sup>Optional</sup> <a name="containerPathInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPathInput"></a>

```java
public java.lang.String getContainerPathInput();
```

- *Type:* java.lang.String

---

##### `instancePathInput`<sup>Optional</sup> <a name="instancePathInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePathInput"></a>

```java
public java.lang.String getInstancePathInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.containerPath"></a>

```java
public java.lang.String getContainerPath();
```

- *Type:* java.lang.String

---

##### `instancePath`<sup>Required</sup> <a name="instancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.instancePath"></a>

```java
public java.lang.String getInstancePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference;

new GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putDependsOn">putDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putEnvironmentOverride">putEnvironmentOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putLinuxCapabilities">putLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putMountPoints">putMountPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putPortConfiguration">putPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetEnvironmentOverride">resetEnvironmentOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetLinuxCapabilities">resetLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetMountPoints">resetMountPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetPortConfiguration">resetPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetResolvedImageDigest">resetResolvedImageDigest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetServerSdkVersion">resetServerSdkVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependsOn` <a name="putDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putDependsOn"></a>

```java
public void putDependsOn(IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putDependsOn.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>>

---

##### `putEnvironmentOverride` <a name="putEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putEnvironmentOverride"></a>

```java
public void putEnvironmentOverride(IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putEnvironmentOverride.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>>

---

##### `putLinuxCapabilities` <a name="putLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putLinuxCapabilities"></a>

```java
public void putLinuxCapabilities(GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putLinuxCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

---

##### `putMountPoints` <a name="putMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putMountPoints"></a>

```java
public void putMountPoints(IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putMountPoints.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>>

---

##### `putPortConfiguration` <a name="putPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putPortConfiguration"></a>

```java
public void putPortConfiguration(GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.putPortConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

---

##### `resetContainerName` <a name="resetContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetContainerName"></a>

```java
public void resetContainerName()
```

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetDependsOn"></a>

```java
public void resetDependsOn()
```

##### `resetEnvironmentOverride` <a name="resetEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetEnvironmentOverride"></a>

```java
public void resetEnvironmentOverride()
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```

##### `resetLinuxCapabilities` <a name="resetLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetLinuxCapabilities"></a>

```java
public void resetLinuxCapabilities()
```

##### `resetMountPoints` <a name="resetMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetMountPoints"></a>

```java
public void resetMountPoints()
```

##### `resetPortConfiguration` <a name="resetPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetPortConfiguration"></a>

```java
public void resetPortConfiguration()
```

##### `resetResolvedImageDigest` <a name="resetResolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetResolvedImageDigest"></a>

```java
public void resetResolvedImageDigest()
```

##### `resetServerSdkVersion` <a name="resetServerSdkVersion" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.resetServerSdkVersion"></a>

```java
public void resetServerSdkVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOn">dependsOn</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverride">environmentOverride</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilities">linuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPoints">mountPoints</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfiguration">portConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverrideInput">environmentOverrideInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilitiesInput">linuxCapabilitiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPointsInput">mountPointsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfigurationInput">portConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigestInput">resolvedImageDigestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersionInput">serverSdkVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigest">resolvedImageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersion">serverSdkVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOn"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList getDependsOn();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOnList</a>

---

##### `environmentOverride`<sup>Required</sup> <a name="environmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverride"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList getEnvironmentOverride();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverrideList</a>

---

##### `linuxCapabilities`<sup>Required</sup> <a name="linuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilities"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference getLinuxCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilitiesOutputReference</a>

---

##### `mountPoints`<sup>Required</sup> <a name="mountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPoints"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList getMountPoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPointsList</a>

---

##### `portConfiguration`<sup>Required</sup> <a name="portConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfiguration"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference getPortConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference</a>

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.dependsOnInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn> getDependsOnInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn">GameliftContainerGroupDefinitionGameServerContainerDefinitionDependsOn</a>>

---

##### `environmentOverrideInput`<sup>Optional</sup> <a name="environmentOverrideInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.environmentOverrideInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride> getEnvironmentOverrideInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride">GameliftContainerGroupDefinitionGameServerContainerDefinitionEnvironmentOverride</a>>

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `linuxCapabilitiesInput`<sup>Optional</sup> <a name="linuxCapabilitiesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.linuxCapabilitiesInput"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities getLinuxCapabilitiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities">GameliftContainerGroupDefinitionGameServerContainerDefinitionLinuxCapabilities</a>

---

##### `mountPointsInput`<sup>Optional</sup> <a name="mountPointsInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.mountPointsInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints> getMountPointsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints">GameliftContainerGroupDefinitionGameServerContainerDefinitionMountPoints</a>>

---

##### `portConfigurationInput`<sup>Optional</sup> <a name="portConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.portConfigurationInput"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration getPortConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

---

##### `resolvedImageDigestInput`<sup>Optional</sup> <a name="resolvedImageDigestInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigestInput"></a>

```java
public java.lang.String getResolvedImageDigestInput();
```

- *Type:* java.lang.String

---

##### `serverSdkVersionInput`<sup>Optional</sup> <a name="serverSdkVersionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersionInput"></a>

```java
public java.lang.String getServerSdkVersionInput();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `resolvedImageDigest`<sup>Required</sup> <a name="resolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.resolvedImageDigest"></a>

```java
public java.lang.String getResolvedImageDigest();
```

- *Type:* java.lang.String

---

##### `serverSdkVersion`<sup>Required</sup> <a name="serverSdkVersion" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.serverSdkVersion"></a>

```java
public java.lang.String getServerSdkVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionGameServerContainerDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinition">GameliftContainerGroupDefinitionGameServerContainerDefinition</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList;

new GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference;

new GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.resetToPort"></a>

```java
public void resetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>

---


### GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference <a name="GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference;

new GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.putContainerPortRanges">putContainerPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resetContainerPortRanges">resetContainerPortRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerPortRanges` <a name="putContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.putContainerPortRanges"></a>

```java
public void putContainerPortRanges(IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.putContainerPortRanges.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>>

---

##### `resetContainerPortRanges` <a name="resetContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.resetContainerPortRanges"></a>

```java
public void resetContainerPortRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRanges">containerPortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRangesInput">containerPortRangesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPortRanges`<sup>Required</sup> <a name="containerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRanges"></a>

```java
public GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList getContainerPortRanges();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRangesList</a>

---

##### `containerPortRangesInput`<sup>Optional</sup> <a name="containerPortRangesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.containerPortRangesInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges> getContainerPortRangesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationContainerPortRanges</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration">GameliftContainerGroupDefinitionGameServerContainerDefinitionPortConfiguration</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetContainerName` <a name="resetContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.resetContainerName"></a>

```java
public void resetContainerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetStartPeriod">resetStartPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetRetries` <a name="resetRetries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetStartPeriod` <a name="resetStartPeriod" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetStartPeriod"></a>

```java
public void resetStartPeriod()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriodInput">startPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriod">startPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `startPeriodInput`<sup>Optional</sup> <a name="startPeriodInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriodInput"></a>

```java
public java.lang.Number getStartPeriodInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `startPeriod`<sup>Required</sup> <a name="startPeriod" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.startPeriod"></a>

```java
public java.lang.Number getStartPeriod();
```

- *Type:* java.lang.Number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.resetInclude"></a>

```java
public void resetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.includeInput"></a>

```java
public java.util.List<java.lang.String> getIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.get"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetContainerPath">resetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetInstancePath">resetInstancePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetContainerPath` <a name="resetContainerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetContainerPath"></a>

```java
public void resetContainerPath()
```

##### `resetInstancePath` <a name="resetInstancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.resetInstancePath"></a>

```java
public void resetInstancePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPathInput">containerPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePathInput">instancePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPath">containerPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePath">instancePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `containerPathInput`<sup>Optional</sup> <a name="containerPathInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPathInput"></a>

```java
public java.lang.String getContainerPathInput();
```

- *Type:* java.lang.String

---

##### `instancePathInput`<sup>Optional</sup> <a name="instancePathInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePathInput"></a>

```java
public java.lang.String getInstancePathInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.containerPath"></a>

```java
public java.lang.String getContainerPath();
```

- *Type:* java.lang.String

---

##### `instancePath`<sup>Required</sup> <a name="instancePath" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.instancePath"></a>

```java
public java.lang.String getInstancePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putDependsOn">putDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putEnvironmentOverride">putEnvironmentOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putLinuxCapabilities">putLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putMountPoints">putMountPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putPortConfiguration">putPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEnvironmentOverride">resetEnvironmentOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEssential">resetEssential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetLinuxCapabilities">resetLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMemoryHardLimitMebibytes">resetMemoryHardLimitMebibytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMountPoints">resetMountPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetPortConfiguration">resetPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetResolvedImageDigest">resetResolvedImageDigest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetVcpu">resetVcpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependsOn` <a name="putDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putDependsOn"></a>

```java
public void putDependsOn(IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putDependsOn.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>>

---

##### `putEnvironmentOverride` <a name="putEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putEnvironmentOverride"></a>

```java
public void putEnvironmentOverride(IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putEnvironmentOverride.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>>

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck"></a>

```java
public void putHealthCheck(GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

---

##### `putLinuxCapabilities` <a name="putLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putLinuxCapabilities"></a>

```java
public void putLinuxCapabilities(GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putLinuxCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

---

##### `putMountPoints` <a name="putMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putMountPoints"></a>

```java
public void putMountPoints(IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putMountPoints.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>>

---

##### `putPortConfiguration` <a name="putPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putPortConfiguration"></a>

```java
public void putPortConfiguration(GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.putPortConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

---

##### `resetContainerName` <a name="resetContainerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetContainerName"></a>

```java
public void resetContainerName()
```

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetDependsOn"></a>

```java
public void resetDependsOn()
```

##### `resetEnvironmentOverride` <a name="resetEnvironmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEnvironmentOverride"></a>

```java
public void resetEnvironmentOverride()
```

##### `resetEssential` <a name="resetEssential" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetEssential"></a>

```java
public void resetEssential()
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetHealthCheck"></a>

```java
public void resetHealthCheck()
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```

##### `resetLinuxCapabilities` <a name="resetLinuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetLinuxCapabilities"></a>

```java
public void resetLinuxCapabilities()
```

##### `resetMemoryHardLimitMebibytes` <a name="resetMemoryHardLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMemoryHardLimitMebibytes"></a>

```java
public void resetMemoryHardLimitMebibytes()
```

##### `resetMountPoints` <a name="resetMountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetMountPoints"></a>

```java
public void resetMountPoints()
```

##### `resetPortConfiguration` <a name="resetPortConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetPortConfiguration"></a>

```java
public void resetPortConfiguration()
```

##### `resetResolvedImageDigest` <a name="resetResolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetResolvedImageDigest"></a>

```java
public void resetResolvedImageDigest()
```

##### `resetVcpu` <a name="resetVcpu" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.resetVcpu"></a>

```java
public void resetVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOn">dependsOn</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverride">environmentOverride</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilities">linuxCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPoints">mountPoints</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfiguration">portConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverrideInput">environmentOverrideInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essentialInput">essentialInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheckInput">healthCheckInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilitiesInput">linuxCapabilitiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytesInput">memoryHardLimitMebibytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPointsInput">mountPointsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfigurationInput">portConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigestInput">resolvedImageDigestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpuInput">vcpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essential">essential</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytes">memoryHardLimitMebibytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigest">resolvedImageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpu">vcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOn"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList getDependsOn();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOnList</a>

---

##### `environmentOverride`<sup>Required</sup> <a name="environmentOverride" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverride"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList getEnvironmentOverride();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverrideList</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheck"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheckOutputReference</a>

---

##### `linuxCapabilities`<sup>Required</sup> <a name="linuxCapabilities" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilities"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference getLinuxCapabilities();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilitiesOutputReference</a>

---

##### `mountPoints`<sup>Required</sup> <a name="mountPoints" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPoints"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList getMountPoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPointsList</a>

---

##### `portConfiguration`<sup>Required</sup> <a name="portConfiguration" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfiguration"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference getPortConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference</a>

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.dependsOnInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn> getDependsOnInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn">GameliftContainerGroupDefinitionSupportContainerDefinitionsDependsOn</a>>

---

##### `environmentOverrideInput`<sup>Optional</sup> <a name="environmentOverrideInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.environmentOverrideInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride> getEnvironmentOverrideInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride">GameliftContainerGroupDefinitionSupportContainerDefinitionsEnvironmentOverride</a>>

---

##### `essentialInput`<sup>Optional</sup> <a name="essentialInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essentialInput"></a>

```java
public java.lang.Boolean|IResolvable getEssentialInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.healthCheckInput"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck getHealthCheckInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck">GameliftContainerGroupDefinitionSupportContainerDefinitionsHealthCheck</a>

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `linuxCapabilitiesInput`<sup>Optional</sup> <a name="linuxCapabilitiesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.linuxCapabilitiesInput"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities getLinuxCapabilitiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities">GameliftContainerGroupDefinitionSupportContainerDefinitionsLinuxCapabilities</a>

---

##### `memoryHardLimitMebibytesInput`<sup>Optional</sup> <a name="memoryHardLimitMebibytesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytesInput"></a>

```java
public java.lang.Number getMemoryHardLimitMebibytesInput();
```

- *Type:* java.lang.Number

---

##### `mountPointsInput`<sup>Optional</sup> <a name="mountPointsInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.mountPointsInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints> getMountPointsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints">GameliftContainerGroupDefinitionSupportContainerDefinitionsMountPoints</a>>

---

##### `portConfigurationInput`<sup>Optional</sup> <a name="portConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.portConfigurationInput"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration getPortConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

---

##### `resolvedImageDigestInput`<sup>Optional</sup> <a name="resolvedImageDigestInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigestInput"></a>

```java
public java.lang.String getResolvedImageDigestInput();
```

- *Type:* java.lang.String

---

##### `vcpuInput`<sup>Optional</sup> <a name="vcpuInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpuInput"></a>

```java
public java.lang.Number getVcpuInput();
```

- *Type:* java.lang.Number

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.essential"></a>

```java
public java.lang.Boolean|IResolvable getEssential();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `memoryHardLimitMebibytes`<sup>Required</sup> <a name="memoryHardLimitMebibytes" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.memoryHardLimitMebibytes"></a>

```java
public java.lang.Number getMemoryHardLimitMebibytes();
```

- *Type:* java.lang.Number

---

##### `resolvedImageDigest`<sup>Required</sup> <a name="resolvedImageDigest" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.resolvedImageDigest"></a>

```java
public java.lang.String getResolvedImageDigest();
```

- *Type:* java.lang.String

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.vcpu"></a>

```java
public java.lang.Number getVcpu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionSupportContainerDefinitions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitions">GameliftContainerGroupDefinitionSupportContainerDefinitions</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.resetToPort"></a>

```java
public void resetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>

---


### GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference <a name="GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference;

new GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.putContainerPortRanges">putContainerPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resetContainerPortRanges">resetContainerPortRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerPortRanges` <a name="putContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.putContainerPortRanges"></a>

```java
public void putContainerPortRanges(IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.putContainerPortRanges.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>>

---

##### `resetContainerPortRanges` <a name="resetContainerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.resetContainerPortRanges"></a>

```java
public void resetContainerPortRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRanges">containerPortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRangesInput">containerPortRangesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPortRanges`<sup>Required</sup> <a name="containerPortRanges" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRanges"></a>

```java
public GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList getContainerPortRanges();
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRangesList</a>

---

##### `containerPortRangesInput`<sup>Optional</sup> <a name="containerPortRangesInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.containerPortRangesInput"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges> getContainerPortRangesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationContainerPortRanges</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration">GameliftContainerGroupDefinitionSupportContainerDefinitionsPortConfiguration</a>

---


### GameliftContainerGroupDefinitionTagsList <a name="GameliftContainerGroupDefinitionTagsList" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionTagsList;

new GameliftContainerGroupDefinitionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.get"></a>

```java
public GameliftContainerGroupDefinitionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GameliftContainerGroupDefinitionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>>

---


### GameliftContainerGroupDefinitionTagsOutputReference <a name="GameliftContainerGroupDefinitionTagsOutputReference" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.gamelift_container_group_definition.GameliftContainerGroupDefinitionTagsOutputReference;

new GameliftContainerGroupDefinitionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GameliftContainerGroupDefinitionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerGroupDefinition.GameliftContainerGroupDefinitionTags">GameliftContainerGroupDefinitionTags</a>

---



