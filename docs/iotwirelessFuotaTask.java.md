# `iotwirelessFuotaTask` Submodule <a name="`iotwirelessFuotaTask` Submodule" id="@cdktn/provider-awscc.iotwirelessFuotaTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessFuotaTask <a name="IotwirelessFuotaTask" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task awscc_iotwireless_fuota_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_fuota_task.IotwirelessFuotaTask;

IotwirelessFuotaTask.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .firmwareUpdateImage(java.lang.String)
    .firmwareUpdateRole(java.lang.String)
    .loRaWan(IotwirelessFuotaTaskLoRaWan)
//  .associateMulticastGroup(java.lang.String)
//  .associateWirelessDevice(java.lang.String)
//  .description(java.lang.String)
//  .disassociateMulticastGroup(java.lang.String)
//  .disassociateWirelessDevice(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<IotwirelessFuotaTaskTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.firmwareUpdateImage">firmwareUpdateImage</a></code> | <code>java.lang.String</code> | FUOTA task firmware update image binary S3 link. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.firmwareUpdateRole">firmwareUpdateRole</a></code> | <code>java.lang.String</code> | FUOTA task firmware IAM role for reading S3. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a></code> | FUOTA task LoRaWAN. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.associateMulticastGroup">associateMulticastGroup</a></code> | <code>java.lang.String</code> | Multicast group to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.associateWirelessDevice">associateWirelessDevice</a></code> | <code>java.lang.String</code> | Wireless device to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | FUOTA task description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.disassociateMulticastGroup">disassociateMulticastGroup</a></code> | <code>java.lang.String</code> | Multicast group to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.disassociateWirelessDevice">disassociateWirelessDevice</a></code> | <code>java.lang.String</code> | Wireless device to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of FUOTA task. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>></code> | A list of key-value pairs that contain metadata for the FUOTA task. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firmwareUpdateImage`<sup>Required</sup> <a name="firmwareUpdateImage" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.firmwareUpdateImage"></a>

- *Type:* java.lang.String

FUOTA task firmware update image binary S3 link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#firmware_update_image IotwirelessFuotaTask#firmware_update_image}

---

##### `firmwareUpdateRole`<sup>Required</sup> <a name="firmwareUpdateRole" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.firmwareUpdateRole"></a>

- *Type:* java.lang.String

FUOTA task firmware IAM role for reading S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#firmware_update_role IotwirelessFuotaTask#firmware_update_role}

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.loRaWan"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

FUOTA task LoRaWAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#lo_ra_wan IotwirelessFuotaTask#lo_ra_wan}

---

##### `associateMulticastGroup`<sup>Optional</sup> <a name="associateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.associateMulticastGroup"></a>

- *Type:* java.lang.String

Multicast group to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#associate_multicast_group IotwirelessFuotaTask#associate_multicast_group}

---

##### `associateWirelessDevice`<sup>Optional</sup> <a name="associateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.associateWirelessDevice"></a>

- *Type:* java.lang.String

Wireless device to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#associate_wireless_device IotwirelessFuotaTask#associate_wireless_device}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.description"></a>

- *Type:* java.lang.String

FUOTA task description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#description IotwirelessFuotaTask#description}

---

##### `disassociateMulticastGroup`<sup>Optional</sup> <a name="disassociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.disassociateMulticastGroup"></a>

- *Type:* java.lang.String

Multicast group to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#disassociate_multicast_group IotwirelessFuotaTask#disassociate_multicast_group}

---

##### `disassociateWirelessDevice`<sup>Optional</sup> <a name="disassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.disassociateWirelessDevice"></a>

- *Type:* java.lang.String

Wireless device to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#disassociate_wireless_device IotwirelessFuotaTask#disassociate_wireless_device}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of FUOTA task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#name IotwirelessFuotaTask#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>>

A list of key-value pairs that contain metadata for the FUOTA task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#tags IotwirelessFuotaTask#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putLoRaWan">putLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateMulticastGroup">resetAssociateMulticastGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateWirelessDevice">resetAssociateWirelessDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateMulticastGroup">resetDisassociateMulticastGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateWirelessDevice">resetDisassociateWirelessDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoRaWan` <a name="putLoRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putLoRaWan"></a>

```java
public void putLoRaWan(IotwirelessFuotaTaskLoRaWan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotwirelessFuotaTaskTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>>

---

##### `resetAssociateMulticastGroup` <a name="resetAssociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateMulticastGroup"></a>

```java
public void resetAssociateMulticastGroup()
```

##### `resetAssociateWirelessDevice` <a name="resetAssociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateWirelessDevice"></a>

```java
public void resetAssociateWirelessDevice()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisassociateMulticastGroup` <a name="resetDisassociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateMulticastGroup"></a>

```java
public void resetDisassociateMulticastGroup()
```

##### `resetDisassociateWirelessDevice` <a name="resetDisassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateWirelessDevice"></a>

```java
public void resetDisassociateWirelessDevice()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessFuotaTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotwireless_fuota_task.IotwirelessFuotaTask;

IotwirelessFuotaTask.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotwireless_fuota_task.IotwirelessFuotaTask;

IotwirelessFuotaTask.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotwireless_fuota_task.IotwirelessFuotaTask;

IotwirelessFuotaTask.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotwireless_fuota_task.IotwirelessFuotaTask;

IotwirelessFuotaTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotwirelessFuotaTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotwirelessFuotaTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotwirelessFuotaTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotwirelessFuotaTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessFuotaTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskId">fuotaTaskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskStatus">fuotaTaskStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference">IotwirelessFuotaTaskLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList">IotwirelessFuotaTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroupInput">associateMulticastGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDeviceInput">associateWirelessDeviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroupInput">disassociateMulticastGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDeviceInput">disassociateWirelessDeviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImageInput">firmwareUpdateImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRoleInput">firmwareUpdateRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWanInput">loRaWanInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroup">associateMulticastGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDevice">associateWirelessDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroup">disassociateMulticastGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDevice">disassociateWirelessDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImage">firmwareUpdateImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRole">firmwareUpdateRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `fuotaTaskId`<sup>Required</sup> <a name="fuotaTaskId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskId"></a>

```java
public java.lang.String getFuotaTaskId();
```

- *Type:* java.lang.String

---

##### `fuotaTaskStatus`<sup>Required</sup> <a name="fuotaTaskStatus" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskStatus"></a>

```java
public java.lang.String getFuotaTaskStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWan"></a>

```java
public IotwirelessFuotaTaskLoRaWanOutputReference getLoRaWan();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference">IotwirelessFuotaTaskLoRaWanOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tags"></a>

```java
public IotwirelessFuotaTaskTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList">IotwirelessFuotaTaskTagsList</a>

---

##### `associateMulticastGroupInput`<sup>Optional</sup> <a name="associateMulticastGroupInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroupInput"></a>

```java
public java.lang.String getAssociateMulticastGroupInput();
```

- *Type:* java.lang.String

---

##### `associateWirelessDeviceInput`<sup>Optional</sup> <a name="associateWirelessDeviceInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDeviceInput"></a>

```java
public java.lang.String getAssociateWirelessDeviceInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disassociateMulticastGroupInput`<sup>Optional</sup> <a name="disassociateMulticastGroupInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroupInput"></a>

```java
public java.lang.String getDisassociateMulticastGroupInput();
```

- *Type:* java.lang.String

---

##### `disassociateWirelessDeviceInput`<sup>Optional</sup> <a name="disassociateWirelessDeviceInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDeviceInput"></a>

```java
public java.lang.String getDisassociateWirelessDeviceInput();
```

- *Type:* java.lang.String

---

##### `firmwareUpdateImageInput`<sup>Optional</sup> <a name="firmwareUpdateImageInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImageInput"></a>

```java
public java.lang.String getFirmwareUpdateImageInput();
```

- *Type:* java.lang.String

---

##### `firmwareUpdateRoleInput`<sup>Optional</sup> <a name="firmwareUpdateRoleInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRoleInput"></a>

```java
public java.lang.String getFirmwareUpdateRoleInput();
```

- *Type:* java.lang.String

---

##### `loRaWanInput`<sup>Optional</sup> <a name="loRaWanInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWanInput"></a>

```java
public IResolvable|IotwirelessFuotaTaskLoRaWan getLoRaWanInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotwirelessFuotaTaskTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>>

---

##### `associateMulticastGroup`<sup>Required</sup> <a name="associateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroup"></a>

```java
public java.lang.String getAssociateMulticastGroup();
```

- *Type:* java.lang.String

---

##### `associateWirelessDevice`<sup>Required</sup> <a name="associateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDevice"></a>

```java
public java.lang.String getAssociateWirelessDevice();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disassociateMulticastGroup`<sup>Required</sup> <a name="disassociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroup"></a>

```java
public java.lang.String getDisassociateMulticastGroup();
```

- *Type:* java.lang.String

---

##### `disassociateWirelessDevice`<sup>Required</sup> <a name="disassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDevice"></a>

```java
public java.lang.String getDisassociateWirelessDevice();
```

- *Type:* java.lang.String

---

##### `firmwareUpdateImage`<sup>Required</sup> <a name="firmwareUpdateImage" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImage"></a>

```java
public java.lang.String getFirmwareUpdateImage();
```

- *Type:* java.lang.String

---

##### `firmwareUpdateRole`<sup>Required</sup> <a name="firmwareUpdateRole" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRole"></a>

```java
public java.lang.String getFirmwareUpdateRole();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessFuotaTaskConfig <a name="IotwirelessFuotaTaskConfig" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_fuota_task.IotwirelessFuotaTaskConfig;

IotwirelessFuotaTaskConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .firmwareUpdateImage(java.lang.String)
    .firmwareUpdateRole(java.lang.String)
    .loRaWan(IotwirelessFuotaTaskLoRaWan)
//  .associateMulticastGroup(java.lang.String)
//  .associateWirelessDevice(java.lang.String)
//  .description(java.lang.String)
//  .disassociateMulticastGroup(java.lang.String)
//  .disassociateWirelessDevice(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<IotwirelessFuotaTaskTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateImage">firmwareUpdateImage</a></code> | <code>java.lang.String</code> | FUOTA task firmware update image binary S3 link. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateRole">firmwareUpdateRole</a></code> | <code>java.lang.String</code> | FUOTA task firmware IAM role for reading S3. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a></code> | FUOTA task LoRaWAN. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateMulticastGroup">associateMulticastGroup</a></code> | <code>java.lang.String</code> | Multicast group to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateWirelessDevice">associateWirelessDevice</a></code> | <code>java.lang.String</code> | Wireless device to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.description">description</a></code> | <code>java.lang.String</code> | FUOTA task description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateMulticastGroup">disassociateMulticastGroup</a></code> | <code>java.lang.String</code> | Multicast group to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateWirelessDevice">disassociateWirelessDevice</a></code> | <code>java.lang.String</code> | Wireless device to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of FUOTA task. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>></code> | A list of key-value pairs that contain metadata for the FUOTA task. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firmwareUpdateImage`<sup>Required</sup> <a name="firmwareUpdateImage" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateImage"></a>

```java
public java.lang.String getFirmwareUpdateImage();
```

- *Type:* java.lang.String

FUOTA task firmware update image binary S3 link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#firmware_update_image IotwirelessFuotaTask#firmware_update_image}

---

##### `firmwareUpdateRole`<sup>Required</sup> <a name="firmwareUpdateRole" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateRole"></a>

```java
public java.lang.String getFirmwareUpdateRole();
```

- *Type:* java.lang.String

FUOTA task firmware IAM role for reading S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#firmware_update_role IotwirelessFuotaTask#firmware_update_role}

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.loRaWan"></a>

```java
public IotwirelessFuotaTaskLoRaWan getLoRaWan();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

FUOTA task LoRaWAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#lo_ra_wan IotwirelessFuotaTask#lo_ra_wan}

---

##### `associateMulticastGroup`<sup>Optional</sup> <a name="associateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateMulticastGroup"></a>

```java
public java.lang.String getAssociateMulticastGroup();
```

- *Type:* java.lang.String

Multicast group to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#associate_multicast_group IotwirelessFuotaTask#associate_multicast_group}

---

##### `associateWirelessDevice`<sup>Optional</sup> <a name="associateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateWirelessDevice"></a>

```java
public java.lang.String getAssociateWirelessDevice();
```

- *Type:* java.lang.String

Wireless device to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#associate_wireless_device IotwirelessFuotaTask#associate_wireless_device}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

FUOTA task description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#description IotwirelessFuotaTask#description}

---

##### `disassociateMulticastGroup`<sup>Optional</sup> <a name="disassociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateMulticastGroup"></a>

```java
public java.lang.String getDisassociateMulticastGroup();
```

- *Type:* java.lang.String

Multicast group to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#disassociate_multicast_group IotwirelessFuotaTask#disassociate_multicast_group}

---

##### `disassociateWirelessDevice`<sup>Optional</sup> <a name="disassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateWirelessDevice"></a>

```java
public java.lang.String getDisassociateWirelessDevice();
```

- *Type:* java.lang.String

Wireless device to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#disassociate_wireless_device IotwirelessFuotaTask#disassociate_wireless_device}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of FUOTA task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#name IotwirelessFuotaTask#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotwirelessFuotaTaskTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>>

A list of key-value pairs that contain metadata for the FUOTA task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#tags IotwirelessFuotaTask#tags}

---

### IotwirelessFuotaTaskLoRaWan <a name="IotwirelessFuotaTaskLoRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_fuota_task.IotwirelessFuotaTaskLoRaWan;

IotwirelessFuotaTaskLoRaWan.builder()
    .rfRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan.property.rfRegion">rfRegion</a></code> | <code>java.lang.String</code> | FUOTA task LoRaWAN RF region. |

---

##### `rfRegion`<sup>Required</sup> <a name="rfRegion" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan.property.rfRegion"></a>

```java
public java.lang.String getRfRegion();
```

- *Type:* java.lang.String

FUOTA task LoRaWAN RF region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#rf_region IotwirelessFuotaTask#rf_region}

---

### IotwirelessFuotaTaskTags <a name="IotwirelessFuotaTaskTags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_fuota_task.IotwirelessFuotaTaskTags;

IotwirelessFuotaTaskTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#key IotwirelessFuotaTask#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#value IotwirelessFuotaTask#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#key IotwirelessFuotaTask#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_fuota_task#value IotwirelessFuotaTask#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessFuotaTaskLoRaWanOutputReference <a name="IotwirelessFuotaTaskLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_fuota_task.IotwirelessFuotaTaskLoRaWanOutputReference;

new IotwirelessFuotaTaskLoRaWanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegionInput">rfRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegion">rfRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `rfRegionInput`<sup>Optional</sup> <a name="rfRegionInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegionInput"></a>

```java
public java.lang.String getRfRegionInput();
```

- *Type:* java.lang.String

---

##### `rfRegion`<sup>Required</sup> <a name="rfRegion" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegion"></a>

```java
public java.lang.String getRfRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessFuotaTaskLoRaWan getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

---


### IotwirelessFuotaTaskTagsList <a name="IotwirelessFuotaTaskTagsList" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_fuota_task.IotwirelessFuotaTaskTagsList;

new IotwirelessFuotaTaskTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.get"></a>

```java
public IotwirelessFuotaTaskTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotwirelessFuotaTaskTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>>

---


### IotwirelessFuotaTaskTagsOutputReference <a name="IotwirelessFuotaTaskTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_fuota_task.IotwirelessFuotaTaskTagsOutputReference;

new IotwirelessFuotaTaskTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessFuotaTaskTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>

---



