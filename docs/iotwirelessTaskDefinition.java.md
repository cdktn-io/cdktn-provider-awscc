# `iotwirelessTaskDefinition` Submodule <a name="`iotwirelessTaskDefinition` Submodule" id="@cdktn/provider-awscc.iotwirelessTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessTaskDefinition <a name="IotwirelessTaskDefinition" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition awscc_iotwireless_task_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinition;

IotwirelessTaskDefinition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoCreateTasks(java.lang.Boolean|IResolvable)
//  .loRaWanUpdateGatewayTaskEntry(IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<IotwirelessTaskDefinitionTags>)
//  .taskDefinitionType(java.lang.String)
//  .update(IotwirelessTaskDefinitionUpdate)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.autoCreateTasks">autoCreateTasks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to automatically create tasks using this task definition for all gateways with the specified current version. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.loRaWanUpdateGatewayTaskEntry">loRaWanUpdateGatewayTaskEntry</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | The list of task definitions. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the new resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>></code> | A list of key-value pairs that contain metadata for the destination. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.taskDefinitionType">taskDefinitionType</a></code> | <code>java.lang.String</code> | A filter to list only the wireless gateway task definitions that use this task definition type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.update">update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | Information about the gateways to update. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoCreateTasks`<sup>Required</sup> <a name="autoCreateTasks" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.autoCreateTasks"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to automatically create tasks using this task definition for all gateways with the specified current version.

If false, the task must me created by calling CreateWirelessGatewayTask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#auto_create_tasks IotwirelessTaskDefinition#auto_create_tasks}

---

##### `loRaWanUpdateGatewayTaskEntry`<sup>Optional</sup> <a name="loRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.loRaWanUpdateGatewayTaskEntry"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

The list of task definitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#lo_ra_wan_update_gateway_task_entry IotwirelessTaskDefinition#lo_ra_wan_update_gateway_task_entry}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#name IotwirelessTaskDefinition#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>>

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#tags IotwirelessTaskDefinition#tags}

---

##### `taskDefinitionType`<sup>Optional</sup> <a name="taskDefinitionType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.taskDefinitionType"></a>

- *Type:* java.lang.String

A filter to list only the wireless gateway task definitions that use this task definition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#task_definition_type IotwirelessTaskDefinition#task_definition_type}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.update"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

Information about the gateways to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update IotwirelessTaskDefinition#update}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry">putLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate">putUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetLoRaWanUpdateGatewayTaskEntry">resetLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTaskDefinitionType">resetTaskDefinitionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoRaWanUpdateGatewayTaskEntry` <a name="putLoRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry"></a>

```java
public void putLoRaWanUpdateGatewayTaskEntry(IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotwirelessTaskDefinitionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>>

---

##### `putUpdate` <a name="putUpdate" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate"></a>

```java
public void putUpdate(IotwirelessTaskDefinitionUpdate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

---

##### `resetLoRaWanUpdateGatewayTaskEntry` <a name="resetLoRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetLoRaWanUpdateGatewayTaskEntry"></a>

```java
public void resetLoRaWanUpdateGatewayTaskEntry()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaskDefinitionType` <a name="resetTaskDefinitionType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTaskDefinitionType"></a>

```java
public void resetTaskDefinitionType()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetUpdate"></a>

```java
public void resetUpdate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessTaskDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinition;

IotwirelessTaskDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinition;

IotwirelessTaskDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinition;

IotwirelessTaskDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinition;

IotwirelessTaskDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotwirelessTaskDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotwirelessTaskDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotwirelessTaskDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotwirelessTaskDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessTaskDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntry">loRaWanUpdateGatewayTaskEntry</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList">IotwirelessTaskDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionId">taskDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.update">update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference">IotwirelessTaskDefinitionUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasksInput">autoCreateTasksInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntryInput">loRaWanUpdateGatewayTaskEntryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionTypeInput">taskDefinitionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.updateInput">updateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasks">autoCreateTasks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionType">taskDefinitionType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loRaWanUpdateGatewayTaskEntry`<sup>Required</sup> <a name="loRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntry"></a>

```java
public IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference getLoRaWanUpdateGatewayTaskEntry();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tags"></a>

```java
public IotwirelessTaskDefinitionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList">IotwirelessTaskDefinitionTagsList</a>

---

##### `taskDefinitionId`<sup>Required</sup> <a name="taskDefinitionId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionId"></a>

```java
public java.lang.String getTaskDefinitionId();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.update"></a>

```java
public IotwirelessTaskDefinitionUpdateOutputReference getUpdate();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference">IotwirelessTaskDefinitionUpdateOutputReference</a>

---

##### `autoCreateTasksInput`<sup>Optional</sup> <a name="autoCreateTasksInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasksInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoCreateTasksInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loRaWanUpdateGatewayTaskEntryInput`<sup>Optional</sup> <a name="loRaWanUpdateGatewayTaskEntryInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntryInput"></a>

```java
public IResolvable|IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry getLoRaWanUpdateGatewayTaskEntryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotwirelessTaskDefinitionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>>

---

##### `taskDefinitionTypeInput`<sup>Optional</sup> <a name="taskDefinitionTypeInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionTypeInput"></a>

```java
public java.lang.String getTaskDefinitionTypeInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.updateInput"></a>

```java
public IResolvable|IotwirelessTaskDefinitionUpdate getUpdateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

---

##### `autoCreateTasks`<sup>Required</sup> <a name="autoCreateTasks" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasks"></a>

```java
public java.lang.Boolean|IResolvable getAutoCreateTasks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `taskDefinitionType`<sup>Required</sup> <a name="taskDefinitionType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionType"></a>

```java
public java.lang.String getTaskDefinitionType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessTaskDefinitionConfig <a name="IotwirelessTaskDefinitionConfig" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionConfig;

IotwirelessTaskDefinitionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoCreateTasks(java.lang.Boolean|IResolvable)
//  .loRaWanUpdateGatewayTaskEntry(IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<IotwirelessTaskDefinitionTags>)
//  .taskDefinitionType(java.lang.String)
//  .update(IotwirelessTaskDefinitionUpdate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.autoCreateTasks">autoCreateTasks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to automatically create tasks using this task definition for all gateways with the specified current version. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.loRaWanUpdateGatewayTaskEntry">loRaWanUpdateGatewayTaskEntry</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | The list of task definitions. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the new resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>></code> | A list of key-value pairs that contain metadata for the destination. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.taskDefinitionType">taskDefinitionType</a></code> | <code>java.lang.String</code> | A filter to list only the wireless gateway task definitions that use this task definition type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.update">update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | Information about the gateways to update. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoCreateTasks`<sup>Required</sup> <a name="autoCreateTasks" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.autoCreateTasks"></a>

```java
public java.lang.Boolean|IResolvable getAutoCreateTasks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to automatically create tasks using this task definition for all gateways with the specified current version.

If false, the task must me created by calling CreateWirelessGatewayTask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#auto_create_tasks IotwirelessTaskDefinition#auto_create_tasks}

---

##### `loRaWanUpdateGatewayTaskEntry`<sup>Optional</sup> <a name="loRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.loRaWanUpdateGatewayTaskEntry"></a>

```java
public IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry getLoRaWanUpdateGatewayTaskEntry();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

The list of task definitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#lo_ra_wan_update_gateway_task_entry IotwirelessTaskDefinition#lo_ra_wan_update_gateway_task_entry}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#name IotwirelessTaskDefinition#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotwirelessTaskDefinitionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>>

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#tags IotwirelessTaskDefinition#tags}

---

##### `taskDefinitionType`<sup>Optional</sup> <a name="taskDefinitionType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.taskDefinitionType"></a>

```java
public java.lang.String getTaskDefinitionType();
```

- *Type:* java.lang.String

A filter to list only the wireless gateway task definitions that use this task definition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#task_definition_type IotwirelessTaskDefinition#task_definition_type}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.update"></a>

```java
public IotwirelessTaskDefinitionUpdate getUpdate();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

Information about the gateways to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update IotwirelessTaskDefinition#update}

---

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry;

IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.builder()
//  .currentVersion(IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion)
//  .updateVersion(IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.currentVersion">currentVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.updateVersion">updateVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}. |

---

##### `currentVersion`<sup>Optional</sup> <a name="currentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.currentVersion"></a>

```java
public IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion getCurrentVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}.

---

##### `updateVersion`<sup>Optional</sup> <a name="updateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.updateVersion"></a>

```java
public IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion getUpdateVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}.

---

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion;

IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.builder()
//  .model(java.lang.String)
//  .packageVersion(java.lang.String)
//  .station(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.model">model</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.station">station</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `packageVersion`<sup>Optional</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.packageVersion"></a>

```java
public java.lang.String getPackageVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.station"></a>

```java
public java.lang.String getStation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion;

IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.builder()
//  .model(java.lang.String)
//  .packageVersion(java.lang.String)
//  .station(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.model">model</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.station">station</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `packageVersion`<sup>Optional</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.packageVersion"></a>

```java
public java.lang.String getPackageVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.station"></a>

```java
public java.lang.String getStation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

### IotwirelessTaskDefinitionTags <a name="IotwirelessTaskDefinitionTags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionTags;

IotwirelessTaskDefinitionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#key IotwirelessTaskDefinition#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#value IotwirelessTaskDefinition#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#key IotwirelessTaskDefinition#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#value IotwirelessTaskDefinition#value}.

---

### IotwirelessTaskDefinitionUpdate <a name="IotwirelessTaskDefinitionUpdate" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionUpdate;

IotwirelessTaskDefinitionUpdate.builder()
//  .loRaWan(IotwirelessTaskDefinitionUpdateLoRaWan)
//  .updateDataRole(java.lang.String)
//  .updateDataSource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#lo_ra_wan IotwirelessTaskDefinition#lo_ra_wan}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataRole">updateDataRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_data_role IotwirelessTaskDefinition#update_data_role}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataSource">updateDataSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_data_source IotwirelessTaskDefinition#update_data_source}. |

---

##### `loRaWan`<sup>Optional</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.loRaWan"></a>

```java
public IotwirelessTaskDefinitionUpdateLoRaWan getLoRaWan();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#lo_ra_wan IotwirelessTaskDefinition#lo_ra_wan}.

---

##### `updateDataRole`<sup>Optional</sup> <a name="updateDataRole" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataRole"></a>

```java
public java.lang.String getUpdateDataRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_data_role IotwirelessTaskDefinition#update_data_role}.

---

##### `updateDataSource`<sup>Optional</sup> <a name="updateDataSource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataSource"></a>

```java
public java.lang.String getUpdateDataSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_data_source IotwirelessTaskDefinition#update_data_source}.

---

### IotwirelessTaskDefinitionUpdateLoRaWan <a name="IotwirelessTaskDefinitionUpdateLoRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionUpdateLoRaWan;

IotwirelessTaskDefinitionUpdateLoRaWan.builder()
//  .currentVersion(IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion)
//  .sigKeyCrc(java.lang.Number)
//  .updateSignature(java.lang.String)
//  .updateVersion(IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.currentVersion">currentVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.sigKeyCrc">sigKeyCrc</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#sig_key_crc IotwirelessTaskDefinition#sig_key_crc}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateSignature">updateSignature</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_signature IotwirelessTaskDefinition#update_signature}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateVersion">updateVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}. |

---

##### `currentVersion`<sup>Optional</sup> <a name="currentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.currentVersion"></a>

```java
public IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion getCurrentVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}.

---

##### `sigKeyCrc`<sup>Optional</sup> <a name="sigKeyCrc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.sigKeyCrc"></a>

```java
public java.lang.Number getSigKeyCrc();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#sig_key_crc IotwirelessTaskDefinition#sig_key_crc}.

---

##### `updateSignature`<sup>Optional</sup> <a name="updateSignature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateSignature"></a>

```java
public java.lang.String getUpdateSignature();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_signature IotwirelessTaskDefinition#update_signature}.

---

##### `updateVersion`<sup>Optional</sup> <a name="updateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateVersion"></a>

```java
public IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion getUpdateVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}.

---

### IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion <a name="IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion;

IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.builder()
//  .model(java.lang.String)
//  .packageVersion(java.lang.String)
//  .station(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.model">model</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.station">station</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `packageVersion`<sup>Optional</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.packageVersion"></a>

```java
public java.lang.String getPackageVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.station"></a>

```java
public java.lang.String getStation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

### IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion <a name="IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion;

IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.builder()
//  .model(java.lang.String)
//  .packageVersion(java.lang.String)
//  .station(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.model">model</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.station">station</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `packageVersion`<sup>Optional</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.packageVersion"></a>

```java
public java.lang.String getPackageVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `station`<sup>Optional</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.station"></a>

```java
public java.lang.String getStation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference;

new IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetPackageVersion">resetPackageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetStation">resetStation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetPackageVersion` <a name="resetPackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetPackageVersion"></a>

```java
public void resetPackageVersion()
```

##### `resetStation` <a name="resetStation" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetStation"></a>

```java
public void resetStation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersionInput">packageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.stationInput">stationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.station">station</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersionInput"></a>

```java
public java.lang.String getPackageVersionInput();
```

- *Type:* java.lang.String

---

##### `stationInput`<sup>Optional</sup> <a name="stationInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.stationInput"></a>

```java
public java.lang.String getStationInput();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersion"></a>

```java
public java.lang.String getPackageVersion();
```

- *Type:* java.lang.String

---

##### `station`<sup>Required</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.station"></a>

```java
public java.lang.String getStation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

---


### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference;

new IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion">putCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion">putUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetCurrentVersion">resetCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetUpdateVersion">resetUpdateVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCurrentVersion` <a name="putCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion"></a>

```java
public void putCurrentVersion(IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

---

##### `putUpdateVersion` <a name="putUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion"></a>

```java
public void putUpdateVersion(IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

---

##### `resetCurrentVersion` <a name="resetCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetCurrentVersion"></a>

```java
public void resetCurrentVersion()
```

##### `resetUpdateVersion` <a name="resetUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetUpdateVersion"></a>

```java
public void resetUpdateVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersion">currentVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersion">updateVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersionInput">currentVersionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersionInput">updateVersionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersion"></a>

```java
public IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference getCurrentVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference</a>

---

##### `updateVersion`<sup>Required</sup> <a name="updateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersion"></a>

```java
public IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference getUpdateVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference</a>

---

##### `currentVersionInput`<sup>Optional</sup> <a name="currentVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersionInput"></a>

```java
public IResolvable|IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion getCurrentVersionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

---

##### `updateVersionInput`<sup>Optional</sup> <a name="updateVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersionInput"></a>

```java
public IResolvable|IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion getUpdateVersionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

---


### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference;

new IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetPackageVersion">resetPackageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetStation">resetStation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetPackageVersion` <a name="resetPackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetPackageVersion"></a>

```java
public void resetPackageVersion()
```

##### `resetStation` <a name="resetStation" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetStation"></a>

```java
public void resetStation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersionInput">packageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.stationInput">stationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.station">station</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersionInput"></a>

```java
public java.lang.String getPackageVersionInput();
```

- *Type:* java.lang.String

---

##### `stationInput`<sup>Optional</sup> <a name="stationInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.stationInput"></a>

```java
public java.lang.String getStationInput();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersion"></a>

```java
public java.lang.String getPackageVersion();
```

- *Type:* java.lang.String

---

##### `station`<sup>Required</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.station"></a>

```java
public java.lang.String getStation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

---


### IotwirelessTaskDefinitionTagsList <a name="IotwirelessTaskDefinitionTagsList" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionTagsList;

new IotwirelessTaskDefinitionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.get"></a>

```java
public IotwirelessTaskDefinitionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotwirelessTaskDefinitionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>>

---


### IotwirelessTaskDefinitionTagsOutputReference <a name="IotwirelessTaskDefinitionTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionTagsOutputReference;

new IotwirelessTaskDefinitionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessTaskDefinitionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>

---


### IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference <a name="IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference;

new IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetPackageVersion">resetPackageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetStation">resetStation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetPackageVersion` <a name="resetPackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetPackageVersion"></a>

```java
public void resetPackageVersion()
```

##### `resetStation` <a name="resetStation" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetStation"></a>

```java
public void resetStation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersionInput">packageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.stationInput">stationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.station">station</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersionInput"></a>

```java
public java.lang.String getPackageVersionInput();
```

- *Type:* java.lang.String

---

##### `stationInput`<sup>Optional</sup> <a name="stationInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.stationInput"></a>

```java
public java.lang.String getStationInput();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersion"></a>

```java
public java.lang.String getPackageVersion();
```

- *Type:* java.lang.String

---

##### `station`<sup>Required</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.station"></a>

```java
public java.lang.String getStation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

---


### IotwirelessTaskDefinitionUpdateLoRaWanOutputReference <a name="IotwirelessTaskDefinitionUpdateLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference;

new IotwirelessTaskDefinitionUpdateLoRaWanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion">putCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion">putUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetCurrentVersion">resetCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetSigKeyCrc">resetSigKeyCrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateSignature">resetUpdateSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateVersion">resetUpdateVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCurrentVersion` <a name="putCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion"></a>

```java
public void putCurrentVersion(IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

---

##### `putUpdateVersion` <a name="putUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion"></a>

```java
public void putUpdateVersion(IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

---

##### `resetCurrentVersion` <a name="resetCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetCurrentVersion"></a>

```java
public void resetCurrentVersion()
```

##### `resetSigKeyCrc` <a name="resetSigKeyCrc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetSigKeyCrc"></a>

```java
public void resetSigKeyCrc()
```

##### `resetUpdateSignature` <a name="resetUpdateSignature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateSignature"></a>

```java
public void resetUpdateSignature()
```

##### `resetUpdateVersion` <a name="resetUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateVersion"></a>

```java
public void resetUpdateVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersion">currentVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersion">updateVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersionInput">currentVersionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrcInput">sigKeyCrcInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignatureInput">updateSignatureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersionInput">updateVersionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrc">sigKeyCrc</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignature">updateSignature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersion"></a>

```java
public IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference getCurrentVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference</a>

---

##### `updateVersion`<sup>Required</sup> <a name="updateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersion"></a>

```java
public IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference getUpdateVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference</a>

---

##### `currentVersionInput`<sup>Optional</sup> <a name="currentVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersionInput"></a>

```java
public IResolvable|IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion getCurrentVersionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

---

##### `sigKeyCrcInput`<sup>Optional</sup> <a name="sigKeyCrcInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrcInput"></a>

```java
public java.lang.Number getSigKeyCrcInput();
```

- *Type:* java.lang.Number

---

##### `updateSignatureInput`<sup>Optional</sup> <a name="updateSignatureInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignatureInput"></a>

```java
public java.lang.String getUpdateSignatureInput();
```

- *Type:* java.lang.String

---

##### `updateVersionInput`<sup>Optional</sup> <a name="updateVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersionInput"></a>

```java
public IResolvable|IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion getUpdateVersionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

---

##### `sigKeyCrc`<sup>Required</sup> <a name="sigKeyCrc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrc"></a>

```java
public java.lang.Number getSigKeyCrc();
```

- *Type:* java.lang.Number

---

##### `updateSignature`<sup>Required</sup> <a name="updateSignature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignature"></a>

```java
public java.lang.String getUpdateSignature();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessTaskDefinitionUpdateLoRaWan getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

---


### IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference <a name="IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference;

new IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetPackageVersion">resetPackageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetStation">resetStation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetPackageVersion` <a name="resetPackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetPackageVersion"></a>

```java
public void resetPackageVersion()
```

##### `resetStation` <a name="resetStation" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetStation"></a>

```java
public void resetStation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersionInput">packageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.stationInput">stationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersion">packageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.station">station</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersionInput"></a>

```java
public java.lang.String getPackageVersionInput();
```

- *Type:* java.lang.String

---

##### `stationInput`<sup>Optional</sup> <a name="stationInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.stationInput"></a>

```java
public java.lang.String getStationInput();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersion"></a>

```java
public java.lang.String getPackageVersion();
```

- *Type:* java.lang.String

---

##### `station`<sup>Required</sup> <a name="station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.station"></a>

```java
public java.lang.String getStation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

---


### IotwirelessTaskDefinitionUpdateOutputReference <a name="IotwirelessTaskDefinitionUpdateOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_task_definition.IotwirelessTaskDefinitionUpdateOutputReference;

new IotwirelessTaskDefinitionUpdateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan">putLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetLoRaWan">resetLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataRole">resetUpdateDataRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataSource">resetUpdateDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoRaWan` <a name="putLoRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan"></a>

```java
public void putLoRaWan(IotwirelessTaskDefinitionUpdateLoRaWan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

---

##### `resetLoRaWan` <a name="resetLoRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetLoRaWan"></a>

```java
public void resetLoRaWan()
```

##### `resetUpdateDataRole` <a name="resetUpdateDataRole" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataRole"></a>

```java
public void resetUpdateDataRole()
```

##### `resetUpdateDataSource` <a name="resetUpdateDataSource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataSource"></a>

```java
public void resetUpdateDataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWanInput">loRaWanInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRoleInput">updateDataRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSourceInput">updateDataSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRole">updateDataRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSource">updateDataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWan"></a>

```java
public IotwirelessTaskDefinitionUpdateLoRaWanOutputReference getLoRaWan();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanOutputReference</a>

---

##### `loRaWanInput`<sup>Optional</sup> <a name="loRaWanInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWanInput"></a>

```java
public IResolvable|IotwirelessTaskDefinitionUpdateLoRaWan getLoRaWanInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

---

##### `updateDataRoleInput`<sup>Optional</sup> <a name="updateDataRoleInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRoleInput"></a>

```java
public java.lang.String getUpdateDataRoleInput();
```

- *Type:* java.lang.String

---

##### `updateDataSourceInput`<sup>Optional</sup> <a name="updateDataSourceInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSourceInput"></a>

```java
public java.lang.String getUpdateDataSourceInput();
```

- *Type:* java.lang.String

---

##### `updateDataRole`<sup>Required</sup> <a name="updateDataRole" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRole"></a>

```java
public java.lang.String getUpdateDataRole();
```

- *Type:* java.lang.String

---

##### `updateDataSource`<sup>Required</sup> <a name="updateDataSource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSource"></a>

```java
public java.lang.String getUpdateDataSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessTaskDefinitionUpdate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

---



