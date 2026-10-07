# `configConfigurationRecorder` Submodule <a name="`configConfigurationRecorder` Submodule" id="@cdktn/provider-awscc.configConfigurationRecorder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigurationRecorder <a name="ConfigConfigurationRecorder" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder awscc_config_configuration_recorder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorder;

ConfigConfigurationRecorder.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .roleArn(java.lang.String)
//  .name(java.lang.String)
//  .recordingGroup(ConfigConfigurationRecorderRecordingGroup)
//  .recordingMode(ConfigConfigurationRecorderRecordingMode)
//  .startedOnCreate(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.recordingGroup">recordingGroup</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | Specifies which resource types are in scope for the configuration recorder to record. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.recordingMode">recordingMode</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | Specifies the default recording frequency for the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.startedOnCreate">startedOnCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Defaults to 'true'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the configuration recorder.

By default, AWS Config assigns the name "default" when creating the configuration recorder. To change the configuration recorder name, you must use the DeleteConfigurationRecorder action to delete your current configuration recorder, and then you must use the PutConfigurationRecorder command to create a configuration recorder that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#name ConfigConfigurationRecorder#name}

---

##### `recordingGroup`<sup>Optional</sup> <a name="recordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.recordingGroup"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

Specifies which resource types are in scope for the configuration recorder to record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}

---

##### `recordingMode`<sup>Optional</sup> <a name="recordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.recordingMode"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

Specifies the default recording frequency for the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_mode ConfigConfigurationRecorder#recording_mode}

---

##### `startedOnCreate`<sup>Optional</sup> <a name="startedOnCreate" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.startedOnCreate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Defaults to 'true'.

Controls whether the recorder starts recording after the create operation. Set this to 'false' for development and testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#started_on_create ConfigConfigurationRecorder#started_on_create}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup">putRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode">putRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingGroup">resetRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingMode">resetRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetStartedOnCreate">resetStartedOnCreate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecordingGroup` <a name="putRecordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup"></a>

```java
public void putRecordingGroup(ConfigConfigurationRecorderRecordingGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---

##### `putRecordingMode` <a name="putRecordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode"></a>

```java
public void putRecordingMode(ConfigConfigurationRecorderRecordingMode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetName"></a>

```java
public void resetName()
```

##### `resetRecordingGroup` <a name="resetRecordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingGroup"></a>

```java
public void resetRecordingGroup()
```

##### `resetRecordingMode` <a name="resetRecordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingMode"></a>

```java
public void resetRecordingMode()
```

##### `resetStartedOnCreate` <a name="resetStartedOnCreate" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetStartedOnCreate"></a>

```java
public void resetStartedOnCreate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorder;

ConfigConfigurationRecorder.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorder;

ConfigConfigurationRecorder.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorder;

ConfigConfigurationRecorder.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorder;

ConfigConfigurationRecorder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigConfigurationRecorder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigConfigurationRecorder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigConfigurationRecorder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConfigurationRecorder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroup">recordingGroup</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference">ConfigConfigurationRecorderRecordingGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingMode">recordingMode</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference">ConfigConfigurationRecorderRecordingModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroupInput">recordingGroupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingModeInput">recordingModeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreateInput">startedOnCreateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreate">startedOnCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `recordingGroup`<sup>Required</sup> <a name="recordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroup"></a>

```java
public ConfigConfigurationRecorderRecordingGroupOutputReference getRecordingGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference">ConfigConfigurationRecorderRecordingGroupOutputReference</a>

---

##### `recordingMode`<sup>Required</sup> <a name="recordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingMode"></a>

```java
public ConfigConfigurationRecorderRecordingModeOutputReference getRecordingMode();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference">ConfigConfigurationRecorderRecordingModeOutputReference</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recordingGroupInput`<sup>Optional</sup> <a name="recordingGroupInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroupInput"></a>

```java
public IResolvable|ConfigConfigurationRecorderRecordingGroup getRecordingGroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---

##### `recordingModeInput`<sup>Optional</sup> <a name="recordingModeInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingModeInput"></a>

```java
public IResolvable|ConfigConfigurationRecorderRecordingMode getRecordingModeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `startedOnCreateInput`<sup>Optional</sup> <a name="startedOnCreateInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreateInput"></a>

```java
public java.lang.Boolean|IResolvable getStartedOnCreateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `startedOnCreate`<sup>Required</sup> <a name="startedOnCreate" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreate"></a>

```java
public java.lang.Boolean|IResolvable getStartedOnCreate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigurationRecorderConfig <a name="ConfigConfigurationRecorderConfig" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorderConfig;

ConfigConfigurationRecorderConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .roleArn(java.lang.String)
//  .name(java.lang.String)
//  .recordingGroup(ConfigConfigurationRecorderRecordingGroup)
//  .recordingMode(ConfigConfigurationRecorderRecordingMode)
//  .startedOnCreate(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingGroup">recordingGroup</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | Specifies which resource types are in scope for the configuration recorder to record. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingMode">recordingMode</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | Specifies the default recording frequency for the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.startedOnCreate">startedOnCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Defaults to 'true'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the configuration recorder.

By default, AWS Config assigns the name "default" when creating the configuration recorder. To change the configuration recorder name, you must use the DeleteConfigurationRecorder action to delete your current configuration recorder, and then you must use the PutConfigurationRecorder command to create a configuration recorder that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#name ConfigConfigurationRecorder#name}

---

##### `recordingGroup`<sup>Optional</sup> <a name="recordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingGroup"></a>

```java
public ConfigConfigurationRecorderRecordingGroup getRecordingGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

Specifies which resource types are in scope for the configuration recorder to record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}

---

##### `recordingMode`<sup>Optional</sup> <a name="recordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingMode"></a>

```java
public ConfigConfigurationRecorderRecordingMode getRecordingMode();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

Specifies the default recording frequency for the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_mode ConfigConfigurationRecorder#recording_mode}

---

##### `startedOnCreate`<sup>Optional</sup> <a name="startedOnCreate" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.startedOnCreate"></a>

```java
public java.lang.Boolean|IResolvable getStartedOnCreate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Defaults to 'true'.

Controls whether the recorder starts recording after the create operation. Set this to 'false' for development and testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#started_on_create ConfigConfigurationRecorder#started_on_create}

---

### ConfigConfigurationRecorderRecordingGroup <a name="ConfigConfigurationRecorderRecordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorderRecordingGroup;

ConfigConfigurationRecorderRecordingGroup.builder()
//  .allSupported(java.lang.Boolean|IResolvable)
//  .exclusionByResourceTypes(ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes)
//  .includeGlobalResourceTypes(java.lang.Boolean|IResolvable)
//  .recordingStrategy(ConfigConfigurationRecorderRecordingGroupRecordingStrategy)
//  .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.allSupported">allSupported</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.exclusionByResourceTypes">exclusionByResourceTypes</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a></code> | An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.includeGlobalResourceTypes">includeGlobalResourceTypes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.recordingStrategy">recordingStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a></code> | An object that specifies the recording strategy for the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | A comma-separated list that specifies which resource types AWS Config records. |

---

##### `allSupported`<sup>Optional</sup> <a name="allSupported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.allSupported"></a>

```java
public java.lang.Boolean|IResolvable getAllSupported();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}

---

##### `exclusionByResourceTypes`<sup>Optional</sup> <a name="exclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.exclusionByResourceTypes"></a>

```java
public ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes getExclusionByResourceTypes();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#exclusion_by_resource_types ConfigConfigurationRecorder#exclusion_by_resource_types}

---

##### `includeGlobalResourceTypes`<sup>Optional</sup> <a name="includeGlobalResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.includeGlobalResourceTypes"></a>

```java
public java.lang.Boolean|IResolvable getIncludeGlobalResourceTypes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}

---

##### `recordingStrategy`<sup>Optional</sup> <a name="recordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.recordingStrategy"></a>

```java
public ConfigConfigurationRecorderRecordingGroupRecordingStrategy getRecordingStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

An object that specifies the recording strategy for the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_strategy ConfigConfigurationRecorder#recording_strategy}

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

A comma-separated list that specifies which resource types AWS Config records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

### ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes <a name="ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes;

ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.builder()
//  .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | A comma-separated list of resource types to exclude from recording by the configuration recorder. |

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

A comma-separated list of resource types to exclude from recording by the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

### ConfigConfigurationRecorderRecordingGroupRecordingStrategy <a name="ConfigConfigurationRecorderRecordingGroupRecordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy;

ConfigConfigurationRecorderRecordingGroupRecordingStrategy.builder()
//  .useOnly(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.property.useOnly">useOnly</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}. |

---

##### `useOnly`<sup>Optional</sup> <a name="useOnly" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.property.useOnly"></a>

```java
public java.lang.String getUseOnly();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}.

---

### ConfigConfigurationRecorderRecordingMode <a name="ConfigConfigurationRecorderRecordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorderRecordingMode;

ConfigConfigurationRecorderRecordingMode.builder()
//  .recordingFrequency(java.lang.String)
//  .recordingModeOverrides(IResolvable|java.util.List<ConfigConfigurationRecorderRecordingModeRecordingModeOverrides>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingFrequency">recordingFrequency</a></code> | <code>java.lang.String</code> | The default recording frequency that AWS Config uses to record configuration changes. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingModeOverrides">recordingModeOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>></code> | An array of 'RecordingModeOverride' objects for you to specify your overrides for the recording mode. |

---

##### `recordingFrequency`<sup>Optional</sup> <a name="recordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingFrequency"></a>

```java
public java.lang.String getRecordingFrequency();
```

- *Type:* java.lang.String

The default recording frequency that AWS Config uses to record configuration changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}

---

##### `recordingModeOverrides`<sup>Optional</sup> <a name="recordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingModeOverrides"></a>

```java
public IResolvable|java.util.List<ConfigConfigurationRecorderRecordingModeRecordingModeOverrides> getRecordingModeOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>>

An array of 'RecordingModeOverride' objects for you to specify your overrides for the recording mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_mode_overrides ConfigConfigurationRecorder#recording_mode_overrides}

---

### ConfigConfigurationRecorderRecordingModeRecordingModeOverrides <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides;

ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.builder()
//  .description(java.lang.String)
//  .recordingFrequency(java.lang.String)
//  .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.description">description</a></code> | <code>java.lang.String</code> | A description that you provide for the override. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.recordingFrequency">recordingFrequency</a></code> | <code>java.lang.String</code> | The recording frequency that will be applied to all the resource types specified in the override. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | A comma-separated list that specifies which resource types AWS Config includes in the override. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description that you provide for the override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#description ConfigConfigurationRecorder#description}

---

##### `recordingFrequency`<sup>Optional</sup> <a name="recordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.recordingFrequency"></a>

```java
public java.lang.String getRecordingFrequency();
```

- *Type:* java.lang.String

The recording frequency that will be applied to all the resource types specified in the override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

A comma-separated list that specifies which resource types AWS Config includes in the override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference <a name="ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference;

new ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

---


### ConfigConfigurationRecorderRecordingGroupOutputReference <a name="ConfigConfigurationRecorderRecordingGroupOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorderRecordingGroupOutputReference;

new ConfigConfigurationRecorderRecordingGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes">putExclusionByResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy">putRecordingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetAllSupported">resetAllSupported</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetExclusionByResourceTypes">resetExclusionByResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetIncludeGlobalResourceTypes">resetIncludeGlobalResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetRecordingStrategy">resetRecordingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusionByResourceTypes` <a name="putExclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes"></a>

```java
public void putExclusionByResourceTypes(ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

---

##### `putRecordingStrategy` <a name="putRecordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy"></a>

```java
public void putRecordingStrategy(ConfigConfigurationRecorderRecordingGroupRecordingStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

---

##### `resetAllSupported` <a name="resetAllSupported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetAllSupported"></a>

```java
public void resetAllSupported()
```

##### `resetExclusionByResourceTypes` <a name="resetExclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetExclusionByResourceTypes"></a>

```java
public void resetExclusionByResourceTypes()
```

##### `resetIncludeGlobalResourceTypes` <a name="resetIncludeGlobalResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetIncludeGlobalResourceTypes"></a>

```java
public void resetIncludeGlobalResourceTypes()
```

##### `resetRecordingStrategy` <a name="resetRecordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetRecordingStrategy"></a>

```java
public void resetRecordingStrategy()
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypes">exclusionByResourceTypes</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategy">recordingStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference">ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupportedInput">allSupportedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypesInput">exclusionByResourceTypesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypesInput">includeGlobalResourceTypesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategyInput">recordingStrategyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupported">allSupported</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypes">includeGlobalResourceTypes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusionByResourceTypes`<sup>Required</sup> <a name="exclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypes"></a>

```java
public ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference getExclusionByResourceTypes();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference</a>

---

##### `recordingStrategy`<sup>Required</sup> <a name="recordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategy"></a>

```java
public ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference getRecordingStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference">ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference</a>

---

##### `allSupportedInput`<sup>Optional</sup> <a name="allSupportedInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupportedInput"></a>

```java
public java.lang.Boolean|IResolvable getAllSupportedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exclusionByResourceTypesInput`<sup>Optional</sup> <a name="exclusionByResourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypesInput"></a>

```java
public IResolvable|ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes getExclusionByResourceTypesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

---

##### `includeGlobalResourceTypesInput`<sup>Optional</sup> <a name="includeGlobalResourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypesInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeGlobalResourceTypesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `recordingStrategyInput`<sup>Optional</sup> <a name="recordingStrategyInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategyInput"></a>

```java
public IResolvable|ConfigConfigurationRecorderRecordingGroupRecordingStrategy getRecordingStrategyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allSupported`<sup>Required</sup> <a name="allSupported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupported"></a>

```java
public java.lang.Boolean|IResolvable getAllSupported();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeGlobalResourceTypes`<sup>Required</sup> <a name="includeGlobalResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypes"></a>

```java
public java.lang.Boolean|IResolvable getIncludeGlobalResourceTypes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigConfigurationRecorderRecordingGroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---


### ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference <a name="ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference;

new ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resetUseOnly">resetUseOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseOnly` <a name="resetUseOnly" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resetUseOnly"></a>

```java
public void resetUseOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnlyInput">useOnlyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnly">useOnly</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `useOnlyInput`<sup>Optional</sup> <a name="useOnlyInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnlyInput"></a>

```java
public java.lang.String getUseOnlyInput();
```

- *Type:* java.lang.String

---

##### `useOnly`<sup>Required</sup> <a name="useOnly" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnly"></a>

```java
public java.lang.String getUseOnly();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigConfigurationRecorderRecordingGroupRecordingStrategy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

---


### ConfigConfigurationRecorderRecordingModeOutputReference <a name="ConfigConfigurationRecorderRecordingModeOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorderRecordingModeOutputReference;

new ConfigConfigurationRecorderRecordingModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverrides">putRecordingModeOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingFrequency">resetRecordingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingModeOverrides">resetRecordingModeOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecordingModeOverrides` <a name="putRecordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverrides"></a>

```java
public void putRecordingModeOverrides(IResolvable|java.util.List<ConfigConfigurationRecorderRecordingModeRecordingModeOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>>

---

##### `resetRecordingFrequency` <a name="resetRecordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingFrequency"></a>

```java
public void resetRecordingFrequency()
```

##### `resetRecordingModeOverrides` <a name="resetRecordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingModeOverrides"></a>

```java
public void resetRecordingModeOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverrides">recordingModeOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList">ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequencyInput">recordingFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverridesInput">recordingModeOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequency">recordingFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recordingModeOverrides`<sup>Required</sup> <a name="recordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverrides"></a>

```java
public ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList getRecordingModeOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList">ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList</a>

---

##### `recordingFrequencyInput`<sup>Optional</sup> <a name="recordingFrequencyInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequencyInput"></a>

```java
public java.lang.String getRecordingFrequencyInput();
```

- *Type:* java.lang.String

---

##### `recordingModeOverridesInput`<sup>Optional</sup> <a name="recordingModeOverridesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverridesInput"></a>

```java
public IResolvable|java.util.List<ConfigConfigurationRecorderRecordingModeRecordingModeOverrides> getRecordingModeOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>>

---

##### `recordingFrequency`<sup>Required</sup> <a name="recordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequency"></a>

```java
public java.lang.String getRecordingFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigConfigurationRecorderRecordingMode getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

---


### ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList;

new ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get"></a>

```java
public ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConfigConfigurationRecorderRecordingModeRecordingModeOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>>

---


### ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_configuration_recorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference;

new ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetRecordingFrequency">resetRecordingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRecordingFrequency` <a name="resetRecordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetRecordingFrequency"></a>

```java
public void resetRecordingFrequency()
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequencyInput">recordingFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequency">recordingFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `recordingFrequencyInput`<sup>Optional</sup> <a name="recordingFrequencyInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequencyInput"></a>

```java
public java.lang.String getRecordingFrequencyInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `recordingFrequency`<sup>Required</sup> <a name="recordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequency"></a>

```java
public java.lang.String getRecordingFrequency();
```

- *Type:* java.lang.String

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigConfigurationRecorderRecordingModeRecordingModeOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>

---



