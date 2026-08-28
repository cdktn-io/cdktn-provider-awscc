# `workspacesthinclientEnvironment` Submodule <a name="`workspacesthinclientEnvironment` Submodule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesthinclientEnvironment <a name="WorkspacesthinclientEnvironment" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment awscc_workspacesthinclient_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironment;

WorkspacesthinclientEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .desktopArn(java.lang.String)
//  .desiredSoftwareSetId(java.lang.String)
//  .desktopEndpoint(java.lang.String)
//  .deviceCreationTags(IResolvable|java.util.List<WorkspacesthinclientEnvironmentDeviceCreationTags>)
//  .kmsKeyArn(java.lang.String)
//  .maintenanceWindow(WorkspacesthinclientEnvironmentMaintenanceWindow)
//  .name(java.lang.String)
//  .softwareSetUpdateMode(java.lang.String)
//  .softwareSetUpdateSchedule(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspacesthinclientEnvironmentTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.desktopArn">desktopArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.desiredSoftwareSetId">desiredSoftwareSetId</a></code> | <code>java.lang.String</code> | The ID of the software set to apply. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.desktopEndpoint">desktopEndpoint</a></code> | <code>java.lang.String</code> | The URL for the identity provider login (only for environments that use AppStream 2.0). |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.deviceCreationTags">deviceCreationTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>></code> | An array of key-value pairs to apply to the newly created devices for this environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | A specification for a time window to apply software updates. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.softwareSetUpdateMode">softwareSetUpdateMode</a></code> | <code>java.lang.String</code> | An option to define which software updates to apply. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.softwareSetUpdateSchedule">softwareSetUpdateSchedule</a></code> | <code>java.lang.String</code> | An option to define if software updates should be applied within a maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `desktopArn`<sup>Required</sup> <a name="desktopArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.desktopArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#desktop_arn WorkspacesthinclientEnvironment#desktop_arn}

---

##### `desiredSoftwareSetId`<sup>Optional</sup> <a name="desiredSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.desiredSoftwareSetId"></a>

- *Type:* java.lang.String

The ID of the software set to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#desired_software_set_id WorkspacesthinclientEnvironment#desired_software_set_id}

---

##### `desktopEndpoint`<sup>Optional</sup> <a name="desktopEndpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.desktopEndpoint"></a>

- *Type:* java.lang.String

The URL for the identity provider login (only for environments that use AppStream 2.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#desktop_endpoint WorkspacesthinclientEnvironment#desktop_endpoint}

---

##### `deviceCreationTags`<sup>Optional</sup> <a name="deviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.deviceCreationTags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>>

An array of key-value pairs to apply to the newly created devices for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#device_creation_tags WorkspacesthinclientEnvironment#device_creation_tags}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#kms_key_arn WorkspacesthinclientEnvironment#kms_key_arn}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

A specification for a time window to apply software updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#maintenance_window WorkspacesthinclientEnvironment#maintenance_window}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#name WorkspacesthinclientEnvironment#name}

---

##### `softwareSetUpdateMode`<sup>Optional</sup> <a name="softwareSetUpdateMode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.softwareSetUpdateMode"></a>

- *Type:* java.lang.String

An option to define which software updates to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#software_set_update_mode WorkspacesthinclientEnvironment#software_set_update_mode}

---

##### `softwareSetUpdateSchedule`<sup>Optional</sup> <a name="softwareSetUpdateSchedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.softwareSetUpdateSchedule"></a>

- *Type:* java.lang.String

An option to define if software updates should be applied within a maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#software_set_update_schedule WorkspacesthinclientEnvironment#software_set_update_schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#tags WorkspacesthinclientEnvironment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putDeviceCreationTags">putDeviceCreationTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesiredSoftwareSetId">resetDesiredSoftwareSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesktopEndpoint">resetDesktopEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDeviceCreationTags">resetDeviceCreationTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateMode">resetSoftwareSetUpdateMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateSchedule">resetSoftwareSetUpdateSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeviceCreationTags` <a name="putDeviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putDeviceCreationTags"></a>

```java
public void putDeviceCreationTags(IResolvable|java.util.List<WorkspacesthinclientEnvironmentDeviceCreationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putDeviceCreationTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(WorkspacesthinclientEnvironmentMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WorkspacesthinclientEnvironmentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>>

---

##### `resetDesiredSoftwareSetId` <a name="resetDesiredSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesiredSoftwareSetId"></a>

```java
public void resetDesiredSoftwareSetId()
```

##### `resetDesktopEndpoint` <a name="resetDesktopEndpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesktopEndpoint"></a>

```java
public void resetDesktopEndpoint()
```

##### `resetDeviceCreationTags` <a name="resetDeviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDeviceCreationTags"></a>

```java
public void resetDeviceCreationTags()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetName"></a>

```java
public void resetName()
```

##### `resetSoftwareSetUpdateMode` <a name="resetSoftwareSetUpdateMode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateMode"></a>

```java
public void resetSoftwareSetUpdateMode()
```

##### `resetSoftwareSetUpdateSchedule` <a name="resetSoftwareSetUpdateSchedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateSchedule"></a>

```java
public void resetSoftwareSetUpdateSchedule()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironment;

WorkspacesthinclientEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironment;

WorkspacesthinclientEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironment;

WorkspacesthinclientEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironment;

WorkspacesthinclientEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspacesthinclientEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspacesthinclientEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspacesthinclientEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesthinclientEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.activationCode">activationCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopType">desktopType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTags">deviceCreationTags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList">WorkspacesthinclientEnvironmentDeviceCreationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference">WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetId">pendingSoftwareSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetVersion">pendingSoftwareSetVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.registeredDevicesCount">registeredDevicesCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetComplianceStatus">softwareSetComplianceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList">WorkspacesthinclientEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetIdInput">desiredSoftwareSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArnInput">desktopArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpointInput">desktopEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTagsInput">deviceCreationTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateModeInput">softwareSetUpdateModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateScheduleInput">softwareSetUpdateScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetId">desiredSoftwareSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArn">desktopArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpoint">desktopEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateMode">softwareSetUpdateMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateSchedule">softwareSetUpdateSchedule</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `activationCode`<sup>Required</sup> <a name="activationCode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.activationCode"></a>

```java
public java.lang.String getActivationCode();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `desktopType`<sup>Required</sup> <a name="desktopType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopType"></a>

```java
public java.lang.String getDesktopType();
```

- *Type:* java.lang.String

---

##### `deviceCreationTags`<sup>Required</sup> <a name="deviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTags"></a>

```java
public WorkspacesthinclientEnvironmentDeviceCreationTagsList getDeviceCreationTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList">WorkspacesthinclientEnvironmentDeviceCreationTagsList</a>

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindow"></a>

```java
public WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference">WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference</a>

---

##### `pendingSoftwareSetId`<sup>Required</sup> <a name="pendingSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetId"></a>

```java
public java.lang.String getPendingSoftwareSetId();
```

- *Type:* java.lang.String

---

##### `pendingSoftwareSetVersion`<sup>Required</sup> <a name="pendingSoftwareSetVersion" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetVersion"></a>

```java
public java.lang.String getPendingSoftwareSetVersion();
```

- *Type:* java.lang.String

---

##### `registeredDevicesCount`<sup>Required</sup> <a name="registeredDevicesCount" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.registeredDevicesCount"></a>

```java
public java.lang.Number getRegisteredDevicesCount();
```

- *Type:* java.lang.Number

---

##### `softwareSetComplianceStatus`<sup>Required</sup> <a name="softwareSetComplianceStatus" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetComplianceStatus"></a>

```java
public java.lang.String getSoftwareSetComplianceStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tags"></a>

```java
public WorkspacesthinclientEnvironmentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList">WorkspacesthinclientEnvironmentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `desiredSoftwareSetIdInput`<sup>Optional</sup> <a name="desiredSoftwareSetIdInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetIdInput"></a>

```java
public java.lang.String getDesiredSoftwareSetIdInput();
```

- *Type:* java.lang.String

---

##### `desktopArnInput`<sup>Optional</sup> <a name="desktopArnInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArnInput"></a>

```java
public java.lang.String getDesktopArnInput();
```

- *Type:* java.lang.String

---

##### `desktopEndpointInput`<sup>Optional</sup> <a name="desktopEndpointInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpointInput"></a>

```java
public java.lang.String getDesktopEndpointInput();
```

- *Type:* java.lang.String

---

##### `deviceCreationTagsInput`<sup>Optional</sup> <a name="deviceCreationTagsInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTagsInput"></a>

```java
public IResolvable|java.util.List<WorkspacesthinclientEnvironmentDeviceCreationTags> getDeviceCreationTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindowInput"></a>

```java
public IResolvable|WorkspacesthinclientEnvironmentMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `softwareSetUpdateModeInput`<sup>Optional</sup> <a name="softwareSetUpdateModeInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateModeInput"></a>

```java
public java.lang.String getSoftwareSetUpdateModeInput();
```

- *Type:* java.lang.String

---

##### `softwareSetUpdateScheduleInput`<sup>Optional</sup> <a name="softwareSetUpdateScheduleInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateScheduleInput"></a>

```java
public java.lang.String getSoftwareSetUpdateScheduleInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WorkspacesthinclientEnvironmentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>>

---

##### `desiredSoftwareSetId`<sup>Required</sup> <a name="desiredSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetId"></a>

```java
public java.lang.String getDesiredSoftwareSetId();
```

- *Type:* java.lang.String

---

##### `desktopArn`<sup>Required</sup> <a name="desktopArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArn"></a>

```java
public java.lang.String getDesktopArn();
```

- *Type:* java.lang.String

---

##### `desktopEndpoint`<sup>Required</sup> <a name="desktopEndpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpoint"></a>

```java
public java.lang.String getDesktopEndpoint();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `softwareSetUpdateMode`<sup>Required</sup> <a name="softwareSetUpdateMode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateMode"></a>

```java
public java.lang.String getSoftwareSetUpdateMode();
```

- *Type:* java.lang.String

---

##### `softwareSetUpdateSchedule`<sup>Required</sup> <a name="softwareSetUpdateSchedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateSchedule"></a>

```java
public java.lang.String getSoftwareSetUpdateSchedule();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesthinclientEnvironmentConfig <a name="WorkspacesthinclientEnvironmentConfig" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironmentConfig;

WorkspacesthinclientEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .desktopArn(java.lang.String)
//  .desiredSoftwareSetId(java.lang.String)
//  .desktopEndpoint(java.lang.String)
//  .deviceCreationTags(IResolvable|java.util.List<WorkspacesthinclientEnvironmentDeviceCreationTags>)
//  .kmsKeyArn(java.lang.String)
//  .maintenanceWindow(WorkspacesthinclientEnvironmentMaintenanceWindow)
//  .name(java.lang.String)
//  .softwareSetUpdateMode(java.lang.String)
//  .softwareSetUpdateSchedule(java.lang.String)
//  .tags(IResolvable|java.util.List<WorkspacesthinclientEnvironmentTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopArn">desktopArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desiredSoftwareSetId">desiredSoftwareSetId</a></code> | <code>java.lang.String</code> | The ID of the software set to apply. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopEndpoint">desktopEndpoint</a></code> | <code>java.lang.String</code> | The URL for the identity provider login (only for environments that use AppStream 2.0). |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.deviceCreationTags">deviceCreationTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>></code> | An array of key-value pairs to apply to the newly created devices for this environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | A specification for a time window to apply software updates. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateMode">softwareSetUpdateMode</a></code> | <code>java.lang.String</code> | An option to define which software updates to apply. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateSchedule">softwareSetUpdateSchedule</a></code> | <code>java.lang.String</code> | An option to define if software updates should be applied within a maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `desktopArn`<sup>Required</sup> <a name="desktopArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopArn"></a>

```java
public java.lang.String getDesktopArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#desktop_arn WorkspacesthinclientEnvironment#desktop_arn}

---

##### `desiredSoftwareSetId`<sup>Optional</sup> <a name="desiredSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desiredSoftwareSetId"></a>

```java
public java.lang.String getDesiredSoftwareSetId();
```

- *Type:* java.lang.String

The ID of the software set to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#desired_software_set_id WorkspacesthinclientEnvironment#desired_software_set_id}

---

##### `desktopEndpoint`<sup>Optional</sup> <a name="desktopEndpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopEndpoint"></a>

```java
public java.lang.String getDesktopEndpoint();
```

- *Type:* java.lang.String

The URL for the identity provider login (only for environments that use AppStream 2.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#desktop_endpoint WorkspacesthinclientEnvironment#desktop_endpoint}

---

##### `deviceCreationTags`<sup>Optional</sup> <a name="deviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.deviceCreationTags"></a>

```java
public IResolvable|java.util.List<WorkspacesthinclientEnvironmentDeviceCreationTags> getDeviceCreationTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>>

An array of key-value pairs to apply to the newly created devices for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#device_creation_tags WorkspacesthinclientEnvironment#device_creation_tags}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#kms_key_arn WorkspacesthinclientEnvironment#kms_key_arn}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.maintenanceWindow"></a>

```java
public WorkspacesthinclientEnvironmentMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

A specification for a time window to apply software updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#maintenance_window WorkspacesthinclientEnvironment#maintenance_window}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#name WorkspacesthinclientEnvironment#name}

---

##### `softwareSetUpdateMode`<sup>Optional</sup> <a name="softwareSetUpdateMode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateMode"></a>

```java
public java.lang.String getSoftwareSetUpdateMode();
```

- *Type:* java.lang.String

An option to define which software updates to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#software_set_update_mode WorkspacesthinclientEnvironment#software_set_update_mode}

---

##### `softwareSetUpdateSchedule`<sup>Optional</sup> <a name="softwareSetUpdateSchedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateSchedule"></a>

```java
public java.lang.String getSoftwareSetUpdateSchedule();
```

- *Type:* java.lang.String

An option to define if software updates should be applied within a maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#software_set_update_schedule WorkspacesthinclientEnvironment#software_set_update_schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<WorkspacesthinclientEnvironmentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#tags WorkspacesthinclientEnvironment#tags}

---

### WorkspacesthinclientEnvironmentDeviceCreationTags <a name="WorkspacesthinclientEnvironmentDeviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironmentDeviceCreationTags;

WorkspacesthinclientEnvironmentDeviceCreationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#key WorkspacesthinclientEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#value WorkspacesthinclientEnvironment#value}

---

### WorkspacesthinclientEnvironmentMaintenanceWindow <a name="WorkspacesthinclientEnvironmentMaintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironmentMaintenanceWindow;

WorkspacesthinclientEnvironmentMaintenanceWindow.builder()
//  .applyTimeOf(java.lang.String)
//  .daysOfTheWeek(java.util.List<java.lang.String>)
//  .endTimeHour(java.lang.Number)
//  .endTimeMinute(java.lang.Number)
//  .startTimeHour(java.lang.Number)
//  .startTimeMinute(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.applyTimeOf">applyTimeOf</a></code> | <code>java.lang.String</code> | The desired time zone maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.daysOfTheWeek">daysOfTheWeek</a></code> | <code>java.util.List<java.lang.String></code> | The date of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeHour">endTimeHour</a></code> | <code>java.lang.Number</code> | The hour end time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeMinute">endTimeMinute</a></code> | <code>java.lang.Number</code> | The minute end time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeHour">startTimeHour</a></code> | <code>java.lang.Number</code> | The hour start time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeMinute">startTimeMinute</a></code> | <code>java.lang.Number</code> | The minute start time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.type">type</a></code> | <code>java.lang.String</code> | The type of maintenance window. |

---

##### `applyTimeOf`<sup>Optional</sup> <a name="applyTimeOf" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.applyTimeOf"></a>

```java
public java.lang.String getApplyTimeOf();
```

- *Type:* java.lang.String

The desired time zone maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#apply_time_of WorkspacesthinclientEnvironment#apply_time_of}

---

##### `daysOfTheWeek`<sup>Optional</sup> <a name="daysOfTheWeek" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.daysOfTheWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfTheWeek();
```

- *Type:* java.util.List<java.lang.String>

The date of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#days_of_the_week WorkspacesthinclientEnvironment#days_of_the_week}

---

##### `endTimeHour`<sup>Optional</sup> <a name="endTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeHour"></a>

```java
public java.lang.Number getEndTimeHour();
```

- *Type:* java.lang.Number

The hour end time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#end_time_hour WorkspacesthinclientEnvironment#end_time_hour}

---

##### `endTimeMinute`<sup>Optional</sup> <a name="endTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeMinute"></a>

```java
public java.lang.Number getEndTimeMinute();
```

- *Type:* java.lang.Number

The minute end time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#end_time_minute WorkspacesthinclientEnvironment#end_time_minute}

---

##### `startTimeHour`<sup>Optional</sup> <a name="startTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeHour"></a>

```java
public java.lang.Number getStartTimeHour();
```

- *Type:* java.lang.Number

The hour start time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#start_time_hour WorkspacesthinclientEnvironment#start_time_hour}

---

##### `startTimeMinute`<sup>Optional</sup> <a name="startTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeMinute"></a>

```java
public java.lang.Number getStartTimeMinute();
```

- *Type:* java.lang.Number

The minute start time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#start_time_minute WorkspacesthinclientEnvironment#start_time_minute}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#type WorkspacesthinclientEnvironment#type}

---

### WorkspacesthinclientEnvironmentTags <a name="WorkspacesthinclientEnvironmentTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironmentTags;

WorkspacesthinclientEnvironmentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#key WorkspacesthinclientEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#value WorkspacesthinclientEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesthinclientEnvironmentDeviceCreationTagsList <a name="WorkspacesthinclientEnvironmentDeviceCreationTagsList" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironmentDeviceCreationTagsList;

new WorkspacesthinclientEnvironmentDeviceCreationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.get"></a>

```java
public WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspacesthinclientEnvironmentDeviceCreationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>>

---


### WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference <a name="WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference;

new WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesthinclientEnvironmentDeviceCreationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>

---


### WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference <a name="WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference;

new WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetApplyTimeOf">resetApplyTimeOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetDaysOfTheWeek">resetDaysOfTheWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeHour">resetEndTimeHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeMinute">resetEndTimeMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeHour">resetStartTimeHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeMinute">resetStartTimeMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplyTimeOf` <a name="resetApplyTimeOf" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetApplyTimeOf"></a>

```java
public void resetApplyTimeOf()
```

##### `resetDaysOfTheWeek` <a name="resetDaysOfTheWeek" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetDaysOfTheWeek"></a>

```java
public void resetDaysOfTheWeek()
```

##### `resetEndTimeHour` <a name="resetEndTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeHour"></a>

```java
public void resetEndTimeHour()
```

##### `resetEndTimeMinute` <a name="resetEndTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeMinute"></a>

```java
public void resetEndTimeMinute()
```

##### `resetStartTimeHour` <a name="resetStartTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeHour"></a>

```java
public void resetStartTimeHour()
```

##### `resetStartTimeMinute` <a name="resetStartTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeMinute"></a>

```java
public void resetStartTimeMinute()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOfInput">applyTimeOfInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeekInput">daysOfTheWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHourInput">endTimeHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinuteInput">endTimeMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHourInput">startTimeHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinuteInput">startTimeMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOf">applyTimeOf</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeek">daysOfTheWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHour">endTimeHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinute">endTimeMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHour">startTimeHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinute">startTimeMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyTimeOfInput`<sup>Optional</sup> <a name="applyTimeOfInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOfInput"></a>

```java
public java.lang.String getApplyTimeOfInput();
```

- *Type:* java.lang.String

---

##### `daysOfTheWeekInput`<sup>Optional</sup> <a name="daysOfTheWeekInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfTheWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endTimeHourInput`<sup>Optional</sup> <a name="endTimeHourInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHourInput"></a>

```java
public java.lang.Number getEndTimeHourInput();
```

- *Type:* java.lang.Number

---

##### `endTimeMinuteInput`<sup>Optional</sup> <a name="endTimeMinuteInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinuteInput"></a>

```java
public java.lang.Number getEndTimeMinuteInput();
```

- *Type:* java.lang.Number

---

##### `startTimeHourInput`<sup>Optional</sup> <a name="startTimeHourInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHourInput"></a>

```java
public java.lang.Number getStartTimeHourInput();
```

- *Type:* java.lang.Number

---

##### `startTimeMinuteInput`<sup>Optional</sup> <a name="startTimeMinuteInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinuteInput"></a>

```java
public java.lang.Number getStartTimeMinuteInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `applyTimeOf`<sup>Required</sup> <a name="applyTimeOf" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOf"></a>

```java
public java.lang.String getApplyTimeOf();
```

- *Type:* java.lang.String

---

##### `daysOfTheWeek`<sup>Required</sup> <a name="daysOfTheWeek" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfTheWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endTimeHour`<sup>Required</sup> <a name="endTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHour"></a>

```java
public java.lang.Number getEndTimeHour();
```

- *Type:* java.lang.Number

---

##### `endTimeMinute`<sup>Required</sup> <a name="endTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinute"></a>

```java
public java.lang.Number getEndTimeMinute();
```

- *Type:* java.lang.Number

---

##### `startTimeHour`<sup>Required</sup> <a name="startTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHour"></a>

```java
public java.lang.Number getStartTimeHour();
```

- *Type:* java.lang.Number

---

##### `startTimeMinute`<sup>Required</sup> <a name="startTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinute"></a>

```java
public java.lang.Number getStartTimeMinute();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesthinclientEnvironmentMaintenanceWindow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

---


### WorkspacesthinclientEnvironmentTagsList <a name="WorkspacesthinclientEnvironmentTagsList" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironmentTagsList;

new WorkspacesthinclientEnvironmentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.get"></a>

```java
public WorkspacesthinclientEnvironmentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkspacesthinclientEnvironmentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>>

---


### WorkspacesthinclientEnvironmentTagsOutputReference <a name="WorkspacesthinclientEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.workspacesthinclient_environment.WorkspacesthinclientEnvironmentTagsOutputReference;

new WorkspacesthinclientEnvironmentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkspacesthinclientEnvironmentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>

---



