# `iotCommand` Submodule <a name="`iotCommand` Submodule" id="@cdktn/provider-awscc.iotCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotCommand <a name="IotCommand" id="@cdktn/provider-awscc.iotCommand.IotCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command awscc_iot_command}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommand;

IotCommand.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .commandId(java.lang.String)
//  .createdAt(java.lang.String)
//  .deprecated(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .lastUpdatedAt(java.lang.String)
//  .mandatoryParameters(IResolvable|java.util.List<IotCommandMandatoryParameters>)
//  .namespace(java.lang.String)
//  .payload(IotCommandPayload)
//  .payloadTemplate(java.lang.String)
//  .pendingDeletion(java.lang.Boolean|IResolvable)
//  .preprocessor(IotCommandPreprocessor)
//  .roleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<IotCommandTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.commandId">commandId</a></code> | <code>java.lang.String</code> | The unique identifier for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.createdAt">createdAt</a></code> | <code>java.lang.String</code> | The date and time when the command was created. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.deprecated">deprecated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag indicating whether the command is deprecated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | The date and time when the command was last updated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.mandatoryParameters">mandatoryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>></code> | The list of mandatory parameters for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace to which the command belongs. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | The payload associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.payloadTemplate">payloadTemplate</a></code> | <code>java.lang.String</code> | The payload template associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.pendingDeletion">pendingDeletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag indicating whether the command is pending deletion. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.preprocessor">preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | The command preprocessor configuration. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The customer role associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>></code> | The tags to be associated with the command. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `commandId`<sup>Required</sup> <a name="commandId" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.commandId"></a>

- *Type:* java.lang.String

The unique identifier for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#command_id IotCommand#command_id}

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.createdAt"></a>

- *Type:* java.lang.String

The date and time when the command was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#created_at IotCommand#created_at}

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.deprecated"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag indicating whether the command is deprecated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#deprecated IotCommand#deprecated}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#description IotCommand#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#display_name IotCommand#display_name}

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.lastUpdatedAt"></a>

- *Type:* java.lang.String

The date and time when the command was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#last_updated_at IotCommand#last_updated_at}

---

##### `mandatoryParameters`<sup>Optional</sup> <a name="mandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.mandatoryParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>>

The list of mandatory parameters for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#mandatory_parameters IotCommand#mandatory_parameters}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace to which the command belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#namespace IotCommand#namespace}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.payload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

The payload associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#payload IotCommand#payload}

---

##### `payloadTemplate`<sup>Optional</sup> <a name="payloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.payloadTemplate"></a>

- *Type:* java.lang.String

The payload template associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#payload_template IotCommand#payload_template}

---

##### `pendingDeletion`<sup>Optional</sup> <a name="pendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.pendingDeletion"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag indicating whether the command is pending deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#pending_deletion IotCommand#pending_deletion}

---

##### `preprocessor`<sup>Optional</sup> <a name="preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.preprocessor"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

The command preprocessor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#preprocessor IotCommand#preprocessor}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The customer role associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#role_arn IotCommand#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>>

The tags to be associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#tags IotCommand#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters">putMandatoryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor">putPreprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDeprecated">resetDeprecated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetLastUpdatedAt">resetLastUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetMandatoryParameters">resetMandatoryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPayloadTemplate">resetPayloadTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPendingDeletion">resetPendingDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPreprocessor">resetPreprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommand.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotCommand.IotCommand.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotCommand.IotCommand.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotCommand.IotCommand.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotCommand.IotCommand.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotCommand.IotCommand.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotCommand.IotCommand.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMandatoryParameters` <a name="putMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters"></a>

```java
public void putMandatoryParameters(IResolvable|java.util.List<IotCommandMandatoryParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>>

---

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPayload"></a>

```java
public void putPayload(IotCommandPayload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

---

##### `putPreprocessor` <a name="putPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor"></a>

```java
public void putPreprocessor(IotCommandPreprocessor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotCommand.IotCommand.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotCommandTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>>

---

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetDeprecated` <a name="resetDeprecated" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDeprecated"></a>

```java
public void resetDeprecated()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetLastUpdatedAt` <a name="resetLastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetLastUpdatedAt"></a>

```java
public void resetLastUpdatedAt()
```

##### `resetMandatoryParameters` <a name="resetMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetMandatoryParameters"></a>

```java
public void resetMandatoryParameters()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPayload"></a>

```java
public void resetPayload()
```

##### `resetPayloadTemplate` <a name="resetPayloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPayloadTemplate"></a>

```java
public void resetPayloadTemplate()
```

##### `resetPendingDeletion` <a name="resetPendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPendingDeletion"></a>

```java
public void resetPendingDeletion()
```

##### `resetPreprocessor` <a name="resetPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPreprocessor"></a>

```java
public void resetPreprocessor()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotCommand resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommand;

IotCommand.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommand;

IotCommand.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommand;

IotCommand.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommand;

IotCommand.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotCommand.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotCommand resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotCommand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandArn">commandArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParameters">mandatoryParameters</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList">IotCommandMandatoryParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference">IotCommandPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessor">preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference">IotCommandPreprocessorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList">IotCommandTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandIdInput">commandIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecatedInput">deprecatedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAtInput">lastUpdatedAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParametersInput">mandatoryParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadInput">payloadInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplateInput">payloadTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletionInput">pendingDeletionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessorInput">preprocessorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandId">commandId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecated">deprecated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplate">payloadTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletion">pendingDeletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `commandArn`<sup>Required</sup> <a name="commandArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandArn"></a>

```java
public java.lang.String getCommandArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mandatoryParameters`<sup>Required</sup> <a name="mandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParameters"></a>

```java
public IotCommandMandatoryParametersList getMandatoryParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList">IotCommandMandatoryParametersList</a>

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payload"></a>

```java
public IotCommandPayloadOutputReference getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference">IotCommandPayloadOutputReference</a>

---

##### `preprocessor`<sup>Required</sup> <a name="preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessor"></a>

```java
public IotCommandPreprocessorOutputReference getPreprocessor();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference">IotCommandPreprocessorOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tags"></a>

```java
public IotCommandTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList">IotCommandTagsList</a>

---

##### `commandIdInput`<sup>Optional</sup> <a name="commandIdInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandIdInput"></a>

```java
public java.lang.String getCommandIdInput();
```

- *Type:* java.lang.String

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAtInput"></a>

```java
public java.lang.String getCreatedAtInput();
```

- *Type:* java.lang.String

---

##### `deprecatedInput`<sup>Optional</sup> <a name="deprecatedInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecatedInput"></a>

```java
public java.lang.Boolean|IResolvable getDeprecatedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAtInput`<sup>Optional</sup> <a name="lastUpdatedAtInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAtInput"></a>

```java
public java.lang.String getLastUpdatedAtInput();
```

- *Type:* java.lang.String

---

##### `mandatoryParametersInput`<sup>Optional</sup> <a name="mandatoryParametersInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParametersInput"></a>

```java
public IResolvable|java.util.List<IotCommandMandatoryParameters> getMandatoryParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadInput"></a>

```java
public IResolvable|IotCommandPayload getPayloadInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

---

##### `payloadTemplateInput`<sup>Optional</sup> <a name="payloadTemplateInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplateInput"></a>

```java
public java.lang.String getPayloadTemplateInput();
```

- *Type:* java.lang.String

---

##### `pendingDeletionInput`<sup>Optional</sup> <a name="pendingDeletionInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletionInput"></a>

```java
public java.lang.Boolean|IResolvable getPendingDeletionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `preprocessorInput`<sup>Optional</sup> <a name="preprocessorInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessorInput"></a>

```java
public IResolvable|IotCommandPreprocessor getPreprocessorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotCommandTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>>

---

##### `commandId`<sup>Required</sup> <a name="commandId" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandId"></a>

```java
public java.lang.String getCommandId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecated"></a>

```java
public java.lang.Boolean|IResolvable getDeprecated();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `payloadTemplate`<sup>Required</sup> <a name="payloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplate"></a>

```java
public java.lang.String getPayloadTemplate();
```

- *Type:* java.lang.String

---

##### `pendingDeletion`<sup>Required</sup> <a name="pendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletion"></a>

```java
public java.lang.Boolean|IResolvable getPendingDeletion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotCommandConfig <a name="IotCommandConfig" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandConfig;

IotCommandConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .commandId(java.lang.String)
//  .createdAt(java.lang.String)
//  .deprecated(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .lastUpdatedAt(java.lang.String)
//  .mandatoryParameters(IResolvable|java.util.List<IotCommandMandatoryParameters>)
//  .namespace(java.lang.String)
//  .payload(IotCommandPayload)
//  .payloadTemplate(java.lang.String)
//  .pendingDeletion(java.lang.Boolean|IResolvable)
//  .preprocessor(IotCommandPreprocessor)
//  .roleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<IotCommandTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.commandId">commandId</a></code> | <code>java.lang.String</code> | The unique identifier for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | The date and time when the command was created. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.deprecated">deprecated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag indicating whether the command is deprecated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | The date and time when the command was last updated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.mandatoryParameters">mandatoryParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>></code> | The list of mandatory parameters for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace to which the command belongs. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | The payload associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payloadTemplate">payloadTemplate</a></code> | <code>java.lang.String</code> | The payload template associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.pendingDeletion">pendingDeletion</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag indicating whether the command is pending deletion. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.preprocessor">preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | The command preprocessor configuration. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The customer role associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>></code> | The tags to be associated with the command. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `commandId`<sup>Required</sup> <a name="commandId" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.commandId"></a>

```java
public java.lang.String getCommandId();
```

- *Type:* java.lang.String

The unique identifier for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#command_id IotCommand#command_id}

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

The date and time when the command was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#created_at IotCommand#created_at}

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.deprecated"></a>

```java
public java.lang.Boolean|IResolvable getDeprecated();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag indicating whether the command is deprecated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#deprecated IotCommand#deprecated}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#description IotCommand#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#display_name IotCommand#display_name}

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

The date and time when the command was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#last_updated_at IotCommand#last_updated_at}

---

##### `mandatoryParameters`<sup>Optional</sup> <a name="mandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.mandatoryParameters"></a>

```java
public IResolvable|java.util.List<IotCommandMandatoryParameters> getMandatoryParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>>

The list of mandatory parameters for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#mandatory_parameters IotCommand#mandatory_parameters}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace to which the command belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#namespace IotCommand#namespace}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payload"></a>

```java
public IotCommandPayload getPayload();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

The payload associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#payload IotCommand#payload}

---

##### `payloadTemplate`<sup>Optional</sup> <a name="payloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payloadTemplate"></a>

```java
public java.lang.String getPayloadTemplate();
```

- *Type:* java.lang.String

The payload template associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#payload_template IotCommand#payload_template}

---

##### `pendingDeletion`<sup>Optional</sup> <a name="pendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.pendingDeletion"></a>

```java
public java.lang.Boolean|IResolvable getPendingDeletion();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag indicating whether the command is pending deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#pending_deletion IotCommand#pending_deletion}

---

##### `preprocessor`<sup>Optional</sup> <a name="preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.preprocessor"></a>

```java
public IotCommandPreprocessor getPreprocessor();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

The command preprocessor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#preprocessor IotCommand#preprocessor}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The customer role associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#role_arn IotCommand#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotCommandTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>>

The tags to be associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#tags IotCommand#tags}

---

### IotCommandMandatoryParameters <a name="IotCommandMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParameters;

IotCommandMandatoryParameters.builder()
//  .defaultValue(IotCommandMandatoryParametersDefaultValue)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .type(java.lang.String)
//  .value(IotCommandMandatoryParametersValue)
//  .valueConditions(IResolvable|java.util.List<IotCommandMandatoryParametersValueConditions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#default_value IotCommand#default_value}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#description IotCommand#description}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#name IotCommand#name}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#type IotCommand#type}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#value IotCommand#value}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.valueConditions">valueConditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#value_conditions IotCommand#value_conditions}. |

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.defaultValue"></a>

```java
public IotCommandMandatoryParametersDefaultValue getDefaultValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#default_value IotCommand#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#description IotCommand#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#name IotCommand#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#type IotCommand#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.value"></a>

```java
public IotCommandMandatoryParametersValue getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#value IotCommand#value}.

---

##### `valueConditions`<sup>Optional</sup> <a name="valueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.valueConditions"></a>

```java
public IResolvable|java.util.List<IotCommandMandatoryParametersValueConditions> getValueConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#value_conditions IotCommand#value_conditions}.

---

### IotCommandMandatoryParametersDefaultValue <a name="IotCommandMandatoryParametersDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersDefaultValue;

IotCommandMandatoryParametersDefaultValue.builder()
//  .b(java.lang.Boolean|IResolvable)
//  .bin(java.lang.String)
//  .d(java.lang.Number)
//  .i(java.lang.Number)
//  .l(java.lang.String)
//  .s(java.lang.String)
//  .ul(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.b">b</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#b IotCommand#b}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.bin">bin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#bin IotCommand#bin}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.d">d</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#d IotCommand#d}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.i">i</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#i IotCommand#i}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.l">l</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#l IotCommand#l}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.s">s</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#s IotCommand#s}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.ul">ul</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#ul IotCommand#ul}. |

---

##### `b`<sup>Optional</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.b"></a>

```java
public java.lang.Boolean|IResolvable getB();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#b IotCommand#b}.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.bin"></a>

```java
public java.lang.String getBin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#bin IotCommand#bin}.

---

##### `d`<sup>Optional</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.d"></a>

```java
public java.lang.Number getD();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#d IotCommand#d}.

---

##### `i`<sup>Optional</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.i"></a>

```java
public java.lang.Number getI();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#i IotCommand#i}.

---

##### `l`<sup>Optional</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.l"></a>

```java
public java.lang.String getL();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#l IotCommand#l}.

---

##### `s`<sup>Optional</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.s"></a>

```java
public java.lang.String getS();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#s IotCommand#s}.

---

##### `ul`<sup>Optional</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.ul"></a>

```java
public java.lang.String getUl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#ul IotCommand#ul}.

---

### IotCommandMandatoryParametersValue <a name="IotCommandMandatoryParametersValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersValue;

IotCommandMandatoryParametersValue.builder()
//  .b(java.lang.Boolean|IResolvable)
//  .bin(java.lang.String)
//  .d(java.lang.Number)
//  .i(java.lang.Number)
//  .l(java.lang.String)
//  .s(java.lang.String)
//  .ul(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.b">b</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#b IotCommand#b}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.bin">bin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#bin IotCommand#bin}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.d">d</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#d IotCommand#d}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.i">i</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#i IotCommand#i}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.l">l</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#l IotCommand#l}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.s">s</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#s IotCommand#s}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.ul">ul</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#ul IotCommand#ul}. |

---

##### `b`<sup>Optional</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.b"></a>

```java
public java.lang.Boolean|IResolvable getB();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#b IotCommand#b}.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.bin"></a>

```java
public java.lang.String getBin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#bin IotCommand#bin}.

---

##### `d`<sup>Optional</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.d"></a>

```java
public java.lang.Number getD();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#d IotCommand#d}.

---

##### `i`<sup>Optional</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.i"></a>

```java
public java.lang.Number getI();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#i IotCommand#i}.

---

##### `l`<sup>Optional</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.l"></a>

```java
public java.lang.String getL();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#l IotCommand#l}.

---

##### `s`<sup>Optional</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.s"></a>

```java
public java.lang.String getS();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#s IotCommand#s}.

---

##### `ul`<sup>Optional</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.ul"></a>

```java
public java.lang.String getUl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#ul IotCommand#ul}.

---

### IotCommandMandatoryParametersValueConditions <a name="IotCommandMandatoryParametersValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersValueConditions;

IotCommandMandatoryParametersValueConditions.builder()
//  .comparisonOperator(java.lang.String)
//  .operand(IotCommandMandatoryParametersValueConditionsOperand)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#comparison_operator IotCommand#comparison_operator}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.operand">operand</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#operand IotCommand#operand}. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#comparison_operator IotCommand#comparison_operator}.

---

##### `operand`<sup>Optional</sup> <a name="operand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.operand"></a>

```java
public IotCommandMandatoryParametersValueConditionsOperand getOperand();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#operand IotCommand#operand}.

---

### IotCommandMandatoryParametersValueConditionsOperand <a name="IotCommandMandatoryParametersValueConditionsOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersValueConditionsOperand;

IotCommandMandatoryParametersValueConditionsOperand.builder()
//  .number(java.lang.String)
//  .numberRange(IotCommandMandatoryParametersValueConditionsOperandNumberRange)
//  .numbers(java.util.List<java.lang.String>)
//  .string(java.lang.String)
//  .strings(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.number">number</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#number IotCommand#number}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numberRange">numberRange</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#number_range IotCommand#number_range}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numbers">numbers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#numbers IotCommand#numbers}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.string">string</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#string IotCommand#string}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.strings">strings</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#strings IotCommand#strings}. |

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.number"></a>

```java
public java.lang.String getNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#number IotCommand#number}.

---

##### `numberRange`<sup>Optional</sup> <a name="numberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numberRange"></a>

```java
public IotCommandMandatoryParametersValueConditionsOperandNumberRange getNumberRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#number_range IotCommand#number_range}.

---

##### `numbers`<sup>Optional</sup> <a name="numbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numbers"></a>

```java
public java.util.List<java.lang.String> getNumbers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#numbers IotCommand#numbers}.

---

##### `string`<sup>Optional</sup> <a name="string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.string"></a>

```java
public java.lang.String getString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#string IotCommand#string}.

---

##### `strings`<sup>Optional</sup> <a name="strings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.strings"></a>

```java
public java.util.List<java.lang.String> getStrings();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#strings IotCommand#strings}.

---

### IotCommandMandatoryParametersValueConditionsOperandNumberRange <a name="IotCommandMandatoryParametersValueConditionsOperandNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersValueConditionsOperandNumberRange;

IotCommandMandatoryParametersValueConditionsOperandNumberRange.builder()
//  .max(java.lang.String)
//  .min(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.max">max</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#max IotCommand#max}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.min">min</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#min IotCommand#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.max"></a>

```java
public java.lang.String getMax();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#max IotCommand#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.min"></a>

```java
public java.lang.String getMin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#min IotCommand#min}.

---

### IotCommandPayload <a name="IotCommandPayload" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandPayload;

IotCommandPayload.builder()
//  .content(java.lang.String)
//  .contentType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#content IotCommand#content}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#content_type IotCommand#content_type}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#content IotCommand#content}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#content_type IotCommand#content_type}.

---

### IotCommandPreprocessor <a name="IotCommandPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandPreprocessor;

IotCommandPreprocessor.builder()
//  .awsJsonSubstitution(IotCommandPreprocessorAwsJsonSubstitution)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.property.awsJsonSubstitution">awsJsonSubstitution</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#aws_json_substitution IotCommand#aws_json_substitution}. |

---

##### `awsJsonSubstitution`<sup>Optional</sup> <a name="awsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.property.awsJsonSubstitution"></a>

```java
public IotCommandPreprocessorAwsJsonSubstitution getAwsJsonSubstitution();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#aws_json_substitution IotCommand#aws_json_substitution}.

---

### IotCommandPreprocessorAwsJsonSubstitution <a name="IotCommandPreprocessorAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandPreprocessorAwsJsonSubstitution;

IotCommandPreprocessorAwsJsonSubstitution.builder()
//  .outputFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#output_format IotCommand#output_format}. |

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#output_format IotCommand#output_format}.

---

### IotCommandTags <a name="IotCommandTags" id="@cdktn/provider-awscc.iotCommand.IotCommandTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandTags;

IotCommandTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#key IotCommand#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#value IotCommand#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotCommandMandatoryParametersDefaultValueOutputReference <a name="IotCommandMandatoryParametersDefaultValueOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersDefaultValueOutputReference;

new IotCommandMandatoryParametersDefaultValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetB">resetB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetBin">resetBin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetD">resetD</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetI">resetI</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetL">resetL</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetS">resetS</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetUl">resetUl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetB` <a name="resetB" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetB"></a>

```java
public void resetB()
```

##### `resetBin` <a name="resetBin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetBin"></a>

```java
public void resetBin()
```

##### `resetD` <a name="resetD" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetD"></a>

```java
public void resetD()
```

##### `resetI` <a name="resetI" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetI"></a>

```java
public void resetI()
```

##### `resetL` <a name="resetL" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetL"></a>

```java
public void resetL()
```

##### `resetS` <a name="resetS" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetS"></a>

```java
public void resetS()
```

##### `resetUl` <a name="resetUl" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetUl"></a>

```java
public void resetUl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.binInput">binInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bInput">bInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.dInput">dInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.iInput">iInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.lInput">lInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.sInput">sInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ulInput">ulInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.b">b</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bin">bin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.d">d</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.i">i</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.l">l</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.s">s</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ul">ul</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `binInput`<sup>Optional</sup> <a name="binInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.binInput"></a>

```java
public java.lang.String getBinInput();
```

- *Type:* java.lang.String

---

##### `bInput`<sup>Optional</sup> <a name="bInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bInput"></a>

```java
public java.lang.Boolean|IResolvable getBInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dInput`<sup>Optional</sup> <a name="dInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.dInput"></a>

```java
public java.lang.Number getDInput();
```

- *Type:* java.lang.Number

---

##### `iInput`<sup>Optional</sup> <a name="iInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.iInput"></a>

```java
public java.lang.Number getIInput();
```

- *Type:* java.lang.Number

---

##### `lInput`<sup>Optional</sup> <a name="lInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.lInput"></a>

```java
public java.lang.String getLInput();
```

- *Type:* java.lang.String

---

##### `sInput`<sup>Optional</sup> <a name="sInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.sInput"></a>

```java
public java.lang.String getSInput();
```

- *Type:* java.lang.String

---

##### `ulInput`<sup>Optional</sup> <a name="ulInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ulInput"></a>

```java
public java.lang.String getUlInput();
```

- *Type:* java.lang.String

---

##### `b`<sup>Required</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.b"></a>

```java
public java.lang.Boolean|IResolvable getB();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bin`<sup>Required</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bin"></a>

```java
public java.lang.String getBin();
```

- *Type:* java.lang.String

---

##### `d`<sup>Required</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.d"></a>

```java
public java.lang.Number getD();
```

- *Type:* java.lang.Number

---

##### `i`<sup>Required</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.i"></a>

```java
public java.lang.Number getI();
```

- *Type:* java.lang.Number

---

##### `l`<sup>Required</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.l"></a>

```java
public java.lang.String getL();
```

- *Type:* java.lang.String

---

##### `s`<sup>Required</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.s"></a>

```java
public java.lang.String getS();
```

- *Type:* java.lang.String

---

##### `ul`<sup>Required</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ul"></a>

```java
public java.lang.String getUl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.internalValue"></a>

```java
public IResolvable|IotCommandMandatoryParametersDefaultValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

---


### IotCommandMandatoryParametersList <a name="IotCommandMandatoryParametersList" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersList;

new IotCommandMandatoryParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get"></a>

```java
public IotCommandMandatoryParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotCommandMandatoryParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>>

---


### IotCommandMandatoryParametersOutputReference <a name="IotCommandMandatoryParametersOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersOutputReference;

new IotCommandMandatoryParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue">putDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions">putValueConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValueConditions">resetValueConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultValue` <a name="putDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue"></a>

```java
public void putDefaultValue(IotCommandMandatoryParametersDefaultValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

---

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue"></a>

```java
public void putValue(IotCommandMandatoryParametersValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

---

##### `putValueConditions` <a name="putValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions"></a>

```java
public void putValueConditions(IResolvable|java.util.List<IotCommandMandatoryParametersValueConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>>

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueConditions` <a name="resetValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValueConditions"></a>

```java
public void resetValueConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference">IotCommandMandatoryParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference">IotCommandMandatoryParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditions">valueConditions</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList">IotCommandMandatoryParametersValueConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditionsInput">valueConditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValue"></a>

```java
public IotCommandMandatoryParametersDefaultValueOutputReference getDefaultValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference">IotCommandMandatoryParametersDefaultValueOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.value"></a>

```java
public IotCommandMandatoryParametersValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference">IotCommandMandatoryParametersValueOutputReference</a>

---

##### `valueConditions`<sup>Required</sup> <a name="valueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditions"></a>

```java
public IotCommandMandatoryParametersValueConditionsList getValueConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList">IotCommandMandatoryParametersValueConditionsList</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValueInput"></a>

```java
public IResolvable|IotCommandMandatoryParametersDefaultValue getDefaultValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueConditionsInput`<sup>Optional</sup> <a name="valueConditionsInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditionsInput"></a>

```java
public IResolvable|java.util.List<IotCommandMandatoryParametersValueConditions> getValueConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueInput"></a>

```java
public IResolvable|IotCommandMandatoryParametersValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|IotCommandMandatoryParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>

---


### IotCommandMandatoryParametersValueConditionsList <a name="IotCommandMandatoryParametersValueConditionsList" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersValueConditionsList;

new IotCommandMandatoryParametersValueConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get"></a>

```java
public IotCommandMandatoryParametersValueConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotCommandMandatoryParametersValueConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>>

---


### IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference <a name="IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference;

new IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.max">max</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.min">min</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.maxInput"></a>

```java
public java.lang.String getMaxInput();
```

- *Type:* java.lang.String

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.minInput"></a>

```java
public java.lang.String getMinInput();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.max"></a>

```java
public java.lang.String getMax();
```

- *Type:* java.lang.String

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.min"></a>

```java
public java.lang.String getMin();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|IotCommandMandatoryParametersValueConditionsOperandNumberRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---


### IotCommandMandatoryParametersValueConditionsOperandOutputReference <a name="IotCommandMandatoryParametersValueConditionsOperandOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersValueConditionsOperandOutputReference;

new IotCommandMandatoryParametersValueConditionsOperandOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange">putNumberRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumberRange">resetNumberRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumbers">resetNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetString">resetString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetStrings">resetStrings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNumberRange` <a name="putNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange"></a>

```java
public void putNumberRange(IotCommandMandatoryParametersValueConditionsOperandNumberRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---

##### `resetNumber` <a name="resetNumber" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumber"></a>

```java
public void resetNumber()
```

##### `resetNumberRange` <a name="resetNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumberRange"></a>

```java
public void resetNumberRange()
```

##### `resetNumbers` <a name="resetNumbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumbers"></a>

```java
public void resetNumbers()
```

##### `resetString` <a name="resetString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetString"></a>

```java
public void resetString()
```

##### `resetStrings` <a name="resetStrings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetStrings"></a>

```java
public void resetStrings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRange">numberRange</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference">IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberInput">numberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRangeInput">numberRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbersInput">numbersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringInput">stringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringsInput">stringsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.number">number</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbers">numbers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.string">string</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.strings">strings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numberRange`<sup>Required</sup> <a name="numberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRange"></a>

```java
public IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference getNumberRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference">IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference</a>

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberInput"></a>

```java
public java.lang.String getNumberInput();
```

- *Type:* java.lang.String

---

##### `numberRangeInput`<sup>Optional</sup> <a name="numberRangeInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRangeInput"></a>

```java
public IResolvable|IotCommandMandatoryParametersValueConditionsOperandNumberRange getNumberRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---

##### `numbersInput`<sup>Optional</sup> <a name="numbersInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbersInput"></a>

```java
public java.util.List<java.lang.String> getNumbersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringInput`<sup>Optional</sup> <a name="stringInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringInput"></a>

```java
public java.lang.String getStringInput();
```

- *Type:* java.lang.String

---

##### `stringsInput`<sup>Optional</sup> <a name="stringsInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringsInput"></a>

```java
public java.util.List<java.lang.String> getStringsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.number"></a>

```java
public java.lang.String getNumber();
```

- *Type:* java.lang.String

---

##### `numbers`<sup>Required</sup> <a name="numbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbers"></a>

```java
public java.util.List<java.lang.String> getNumbers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `string`<sup>Required</sup> <a name="string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.string"></a>

```java
public java.lang.String getString();
```

- *Type:* java.lang.String

---

##### `strings`<sup>Required</sup> <a name="strings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.strings"></a>

```java
public java.util.List<java.lang.String> getStrings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.internalValue"></a>

```java
public IResolvable|IotCommandMandatoryParametersValueConditionsOperand getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

---


### IotCommandMandatoryParametersValueConditionsOutputReference <a name="IotCommandMandatoryParametersValueConditionsOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersValueConditionsOutputReference;

new IotCommandMandatoryParametersValueConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand">putOperand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetOperand">resetOperand</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperand` <a name="putOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand"></a>

```java
public void putOperand(IotCommandMandatoryParametersValueConditionsOperand value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

---

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetComparisonOperator"></a>

```java
public void resetComparisonOperator()
```

##### `resetOperand` <a name="resetOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetOperand"></a>

```java
public void resetOperand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operand">operand</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference">IotCommandMandatoryParametersValueConditionsOperandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operandInput">operandInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operand`<sup>Required</sup> <a name="operand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operand"></a>

```java
public IotCommandMandatoryParametersValueConditionsOperandOutputReference getOperand();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference">IotCommandMandatoryParametersValueConditionsOperandOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `operandInput`<sup>Optional</sup> <a name="operandInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operandInput"></a>

```java
public IResolvable|IotCommandMandatoryParametersValueConditionsOperand getOperandInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotCommandMandatoryParametersValueConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>

---


### IotCommandMandatoryParametersValueOutputReference <a name="IotCommandMandatoryParametersValueOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandMandatoryParametersValueOutputReference;

new IotCommandMandatoryParametersValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetB">resetB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetBin">resetBin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetD">resetD</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetI">resetI</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetL">resetL</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetS">resetS</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetUl">resetUl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetB` <a name="resetB" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetB"></a>

```java
public void resetB()
```

##### `resetBin` <a name="resetBin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetBin"></a>

```java
public void resetBin()
```

##### `resetD` <a name="resetD" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetD"></a>

```java
public void resetD()
```

##### `resetI` <a name="resetI" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetI"></a>

```java
public void resetI()
```

##### `resetL` <a name="resetL" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetL"></a>

```java
public void resetL()
```

##### `resetS` <a name="resetS" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetS"></a>

```java
public void resetS()
```

##### `resetUl` <a name="resetUl" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetUl"></a>

```java
public void resetUl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.binInput">binInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bInput">bInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.dInput">dInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.iInput">iInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.lInput">lInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.sInput">sInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ulInput">ulInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.b">b</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bin">bin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.d">d</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.i">i</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.l">l</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.s">s</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ul">ul</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `binInput`<sup>Optional</sup> <a name="binInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.binInput"></a>

```java
public java.lang.String getBinInput();
```

- *Type:* java.lang.String

---

##### `bInput`<sup>Optional</sup> <a name="bInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bInput"></a>

```java
public java.lang.Boolean|IResolvable getBInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dInput`<sup>Optional</sup> <a name="dInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.dInput"></a>

```java
public java.lang.Number getDInput();
```

- *Type:* java.lang.Number

---

##### `iInput`<sup>Optional</sup> <a name="iInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.iInput"></a>

```java
public java.lang.Number getIInput();
```

- *Type:* java.lang.Number

---

##### `lInput`<sup>Optional</sup> <a name="lInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.lInput"></a>

```java
public java.lang.String getLInput();
```

- *Type:* java.lang.String

---

##### `sInput`<sup>Optional</sup> <a name="sInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.sInput"></a>

```java
public java.lang.String getSInput();
```

- *Type:* java.lang.String

---

##### `ulInput`<sup>Optional</sup> <a name="ulInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ulInput"></a>

```java
public java.lang.String getUlInput();
```

- *Type:* java.lang.String

---

##### `b`<sup>Required</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.b"></a>

```java
public java.lang.Boolean|IResolvable getB();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bin`<sup>Required</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bin"></a>

```java
public java.lang.String getBin();
```

- *Type:* java.lang.String

---

##### `d`<sup>Required</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.d"></a>

```java
public java.lang.Number getD();
```

- *Type:* java.lang.Number

---

##### `i`<sup>Required</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.i"></a>

```java
public java.lang.Number getI();
```

- *Type:* java.lang.Number

---

##### `l`<sup>Required</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.l"></a>

```java
public java.lang.String getL();
```

- *Type:* java.lang.String

---

##### `s`<sup>Required</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.s"></a>

```java
public java.lang.String getS();
```

- *Type:* java.lang.String

---

##### `ul`<sup>Required</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ul"></a>

```java
public java.lang.String getUl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.internalValue"></a>

```java
public IResolvable|IotCommandMandatoryParametersValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

---


### IotCommandPayloadOutputReference <a name="IotCommandPayloadOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandPayloadOutputReference;

new IotCommandPayloadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContentType">resetContentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContentType"></a>

```java
public void resetContentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.internalValue"></a>

```java
public IResolvable|IotCommandPayload getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

---


### IotCommandPreprocessorAwsJsonSubstitutionOutputReference <a name="IotCommandPreprocessorAwsJsonSubstitutionOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandPreprocessorAwsJsonSubstitutionOutputReference;

new IotCommandPreprocessorAwsJsonSubstitutionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resetOutputFormat"></a>

```java
public void resetOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormatInput"></a>

```java
public java.lang.String getOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.internalValue"></a>

```java
public IResolvable|IotCommandPreprocessorAwsJsonSubstitution getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

---


### IotCommandPreprocessorOutputReference <a name="IotCommandPreprocessorOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandPreprocessorOutputReference;

new IotCommandPreprocessorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution">putAwsJsonSubstitution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resetAwsJsonSubstitution">resetAwsJsonSubstitution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsJsonSubstitution` <a name="putAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution"></a>

```java
public void putAwsJsonSubstitution(IotCommandPreprocessorAwsJsonSubstitution value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

---

##### `resetAwsJsonSubstitution` <a name="resetAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resetAwsJsonSubstitution"></a>

```java
public void resetAwsJsonSubstitution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitution">awsJsonSubstitution</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference">IotCommandPreprocessorAwsJsonSubstitutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitutionInput">awsJsonSubstitutionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsJsonSubstitution`<sup>Required</sup> <a name="awsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitution"></a>

```java
public IotCommandPreprocessorAwsJsonSubstitutionOutputReference getAwsJsonSubstitution();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference">IotCommandPreprocessorAwsJsonSubstitutionOutputReference</a>

---

##### `awsJsonSubstitutionInput`<sup>Optional</sup> <a name="awsJsonSubstitutionInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitutionInput"></a>

```java
public IResolvable|IotCommandPreprocessorAwsJsonSubstitution getAwsJsonSubstitutionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.internalValue"></a>

```java
public IResolvable|IotCommandPreprocessor getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

---


### IotCommandTagsList <a name="IotCommandTagsList" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandTagsList;

new IotCommandTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get"></a>

```java
public IotCommandTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotCommandTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>>

---


### IotCommandTagsOutputReference <a name="IotCommandTagsOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_command.IotCommandTagsOutputReference;

new IotCommandTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotCommandTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>

---



