# `iotwirelessWirelessDevice` Submodule <a name="`iotwirelessWirelessDevice` Submodule" id="@cdktn/provider-awscc.iotwirelessWirelessDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessWirelessDevice <a name="IotwirelessWirelessDevice" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device awscc_iotwireless_wireless_device}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDevice;

IotwirelessWirelessDevice.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destinationName(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .lastUplinkReceivedAt(java.lang.String)
//  .loRaWan(IotwirelessWirelessDeviceLoRaWan)
//  .name(java.lang.String)
//  .positioning(java.lang.String)
//  .tags(IResolvable|java.util.List<IotwirelessWirelessDeviceTags>)
//  .thingArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.destinationName">destinationName</a></code> | <code>java.lang.String</code> | Wireless device destination name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Wireless device type, currently only Sidewalk and LoRa. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Wireless device description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.lastUplinkReceivedAt">lastUplinkReceivedAt</a></code> | <code>java.lang.String</code> | The date and time when the most recent uplink was received. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Wireless device name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.positioning">positioning</a></code> | <code>java.lang.String</code> | FPort values for the GNSS, stream, and ClockSync functions of the positioning information. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>></code> | A list of key-value pairs that contain metadata for the device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.thingArn">thingArn</a></code> | <code>java.lang.String</code> | Thing arn. Passed into update to associate Thing with Wireless device. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.destinationName"></a>

- *Type:* java.lang.String

Wireless device destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#destination_name IotwirelessWirelessDevice#destination_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Wireless device type, currently only Sidewalk and LoRa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#type IotwirelessWirelessDevice#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Wireless device description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#description IotwirelessWirelessDevice#description}

---

##### `lastUplinkReceivedAt`<sup>Optional</sup> <a name="lastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.lastUplinkReceivedAt"></a>

- *Type:* java.lang.String

The date and time when the most recent uplink was received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#last_uplink_received_at IotwirelessWirelessDevice#last_uplink_received_at}

---

##### `loRaWan`<sup>Optional</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.loRaWan"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#lo_ra_wan IotwirelessWirelessDevice#lo_ra_wan}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Wireless device name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#name IotwirelessWirelessDevice#name}

---

##### `positioning`<sup>Optional</sup> <a name="positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.positioning"></a>

- *Type:* java.lang.String

FPort values for the GNSS, stream, and ClockSync functions of the positioning information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#positioning IotwirelessWirelessDevice#positioning}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>>

A list of key-value pairs that contain metadata for the device.

Currently not supported, will not create if tags are passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#tags IotwirelessWirelessDevice#tags}

---

##### `thingArn`<sup>Optional</sup> <a name="thingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.thingArn"></a>

- *Type:* java.lang.String

Thing arn. Passed into update to associate Thing with Wireless device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#thing_arn IotwirelessWirelessDevice#thing_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan">putLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLastUplinkReceivedAt">resetLastUplinkReceivedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLoRaWan">resetLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetPositioning">resetPositioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetThingArn">resetThingArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoRaWan` <a name="putLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan"></a>

```java
public void putLoRaWan(IotwirelessWirelessDeviceLoRaWan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotwirelessWirelessDeviceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLastUplinkReceivedAt` <a name="resetLastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLastUplinkReceivedAt"></a>

```java
public void resetLastUplinkReceivedAt()
```

##### `resetLoRaWan` <a name="resetLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLoRaWan"></a>

```java
public void resetLoRaWan()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetName"></a>

```java
public void resetName()
```

##### `resetPositioning` <a name="resetPositioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetPositioning"></a>

```java
public void resetPositioning()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetTags"></a>

```java
public void resetTags()
```

##### `resetThingArn` <a name="resetThingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetThingArn"></a>

```java
public void resetThingArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDevice;

IotwirelessWirelessDevice.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDevice;

IotwirelessWirelessDevice.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDevice;

IotwirelessWirelessDevice.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDevice;

IotwirelessWirelessDevice.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotwirelessWirelessDevice.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotwirelessWirelessDevice to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotwirelessWirelessDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessWirelessDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference">IotwirelessWirelessDeviceLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList">IotwirelessWirelessDeviceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingName">thingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.wirelessDeviceId">wirelessDeviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationNameInput">destinationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAtInput">lastUplinkReceivedAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWanInput">loRaWanInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioningInput">positioningInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArnInput">thingArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationName">destinationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAt">lastUplinkReceivedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioning">positioning</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArn">thingArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWan"></a>

```java
public IotwirelessWirelessDeviceLoRaWanOutputReference getLoRaWan();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference">IotwirelessWirelessDeviceLoRaWanOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tags"></a>

```java
public IotwirelessWirelessDeviceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList">IotwirelessWirelessDeviceTagsList</a>

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingName"></a>

```java
public java.lang.String getThingName();
```

- *Type:* java.lang.String

---

##### `wirelessDeviceId`<sup>Required</sup> <a name="wirelessDeviceId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.wirelessDeviceId"></a>

```java
public java.lang.String getWirelessDeviceId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationNameInput`<sup>Optional</sup> <a name="destinationNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationNameInput"></a>

```java
public java.lang.String getDestinationNameInput();
```

- *Type:* java.lang.String

---

##### `lastUplinkReceivedAtInput`<sup>Optional</sup> <a name="lastUplinkReceivedAtInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAtInput"></a>

```java
public java.lang.String getLastUplinkReceivedAtInput();
```

- *Type:* java.lang.String

---

##### `loRaWanInput`<sup>Optional</sup> <a name="loRaWanInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWanInput"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWan getLoRaWanInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `positioningInput`<sup>Optional</sup> <a name="positioningInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioningInput"></a>

```java
public java.lang.String getPositioningInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotwirelessWirelessDeviceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>>

---

##### `thingArnInput`<sup>Optional</sup> <a name="thingArnInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArnInput"></a>

```java
public java.lang.String getThingArnInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationName"></a>

```java
public java.lang.String getDestinationName();
```

- *Type:* java.lang.String

---

##### `lastUplinkReceivedAt`<sup>Required</sup> <a name="lastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAt"></a>

```java
public java.lang.String getLastUplinkReceivedAt();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `positioning`<sup>Required</sup> <a name="positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioning"></a>

```java
public java.lang.String getPositioning();
```

- *Type:* java.lang.String

---

##### `thingArn`<sup>Required</sup> <a name="thingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArn"></a>

```java
public java.lang.String getThingArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessWirelessDeviceConfig <a name="IotwirelessWirelessDeviceConfig" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceConfig;

IotwirelessWirelessDeviceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destinationName(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .lastUplinkReceivedAt(java.lang.String)
//  .loRaWan(IotwirelessWirelessDeviceLoRaWan)
//  .name(java.lang.String)
//  .positioning(java.lang.String)
//  .tags(IResolvable|java.util.List<IotwirelessWirelessDeviceTags>)
//  .thingArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.destinationName">destinationName</a></code> | <code>java.lang.String</code> | Wireless device destination name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.type">type</a></code> | <code>java.lang.String</code> | Wireless device type, currently only Sidewalk and LoRa. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Wireless device description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lastUplinkReceivedAt">lastUplinkReceivedAt</a></code> | <code>java.lang.String</code> | The date and time when the most recent uplink was received. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Wireless device name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.positioning">positioning</a></code> | <code>java.lang.String</code> | FPort values for the GNSS, stream, and ClockSync functions of the positioning information. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>></code> | A list of key-value pairs that contain metadata for the device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.thingArn">thingArn</a></code> | <code>java.lang.String</code> | Thing arn. Passed into update to associate Thing with Wireless device. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.destinationName"></a>

```java
public java.lang.String getDestinationName();
```

- *Type:* java.lang.String

Wireless device destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#destination_name IotwirelessWirelessDevice#destination_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Wireless device type, currently only Sidewalk and LoRa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#type IotwirelessWirelessDevice#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Wireless device description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#description IotwirelessWirelessDevice#description}

---

##### `lastUplinkReceivedAt`<sup>Optional</sup> <a name="lastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lastUplinkReceivedAt"></a>

```java
public java.lang.String getLastUplinkReceivedAt();
```

- *Type:* java.lang.String

The date and time when the most recent uplink was received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#last_uplink_received_at IotwirelessWirelessDevice#last_uplink_received_at}

---

##### `loRaWan`<sup>Optional</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.loRaWan"></a>

```java
public IotwirelessWirelessDeviceLoRaWan getLoRaWan();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#lo_ra_wan IotwirelessWirelessDevice#lo_ra_wan}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Wireless device name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#name IotwirelessWirelessDevice#name}

---

##### `positioning`<sup>Optional</sup> <a name="positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.positioning"></a>

```java
public java.lang.String getPositioning();
```

- *Type:* java.lang.String

FPort values for the GNSS, stream, and ClockSync functions of the positioning information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#positioning IotwirelessWirelessDevice#positioning}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotwirelessWirelessDeviceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>>

A list of key-value pairs that contain metadata for the device.

Currently not supported, will not create if tags are passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#tags IotwirelessWirelessDevice#tags}

---

##### `thingArn`<sup>Optional</sup> <a name="thingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.thingArn"></a>

```java
public java.lang.String getThingArn();
```

- *Type:* java.lang.String

Thing arn. Passed into update to associate Thing with Wireless device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#thing_arn IotwirelessWirelessDevice#thing_arn}

---

### IotwirelessWirelessDeviceLoRaWan <a name="IotwirelessWirelessDeviceLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWan;

IotwirelessWirelessDeviceLoRaWan.builder()
//  .abpV10X(IotwirelessWirelessDeviceLoRaWanAbpV10X)
//  .abpV11(IotwirelessWirelessDeviceLoRaWanAbpV11)
//  .devEui(java.lang.String)
//  .deviceProfileId(java.lang.String)
//  .fPorts(IotwirelessWirelessDeviceLoRaWanFPorts)
//  .otaaV10X(IotwirelessWirelessDeviceLoRaWanOtaaV10X)
//  .otaaV11(IotwirelessWirelessDeviceLoRaWanOtaaV11)
//  .serviceProfileId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV10X">abpV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v10_x IotwirelessWirelessDevice#abp_v10_x}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV11">abpV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v11 IotwirelessWirelessDevice#abp_v11}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.devEui">devEui</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_eui IotwirelessWirelessDevice#dev_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.deviceProfileId">deviceProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#device_profile_id IotwirelessWirelessDevice#device_profile_id}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.fPorts">fPorts</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_ports IotwirelessWirelessDevice#f_ports}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV10X">otaaV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v10_x IotwirelessWirelessDevice#otaa_v10_x}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV11">otaaV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v11 IotwirelessWirelessDevice#otaa_v11}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.serviceProfileId">serviceProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#service_profile_id IotwirelessWirelessDevice#service_profile_id}. |

---

##### `abpV10X`<sup>Optional</sup> <a name="abpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV10X"></a>

```java
public IotwirelessWirelessDeviceLoRaWanAbpV10X getAbpV10X();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v10_x IotwirelessWirelessDevice#abp_v10_x}.

---

##### `abpV11`<sup>Optional</sup> <a name="abpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV11"></a>

```java
public IotwirelessWirelessDeviceLoRaWanAbpV11 getAbpV11();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v11 IotwirelessWirelessDevice#abp_v11}.

---

##### `devEui`<sup>Optional</sup> <a name="devEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.devEui"></a>

```java
public java.lang.String getDevEui();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_eui IotwirelessWirelessDevice#dev_eui}.

---

##### `deviceProfileId`<sup>Optional</sup> <a name="deviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.deviceProfileId"></a>

```java
public java.lang.String getDeviceProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#device_profile_id IotwirelessWirelessDevice#device_profile_id}.

---

##### `fPorts`<sup>Optional</sup> <a name="fPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.fPorts"></a>

```java
public IotwirelessWirelessDeviceLoRaWanFPorts getFPorts();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_ports IotwirelessWirelessDevice#f_ports}.

---

##### `otaaV10X`<sup>Optional</sup> <a name="otaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV10X"></a>

```java
public IotwirelessWirelessDeviceLoRaWanOtaaV10X getOtaaV10X();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v10_x IotwirelessWirelessDevice#otaa_v10_x}.

---

##### `otaaV11`<sup>Optional</sup> <a name="otaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV11"></a>

```java
public IotwirelessWirelessDeviceLoRaWanOtaaV11 getOtaaV11();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v11 IotwirelessWirelessDevice#otaa_v11}.

---

##### `serviceProfileId`<sup>Optional</sup> <a name="serviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.serviceProfileId"></a>

```java
public java.lang.String getServiceProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#service_profile_id IotwirelessWirelessDevice#service_profile_id}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV10X <a name="IotwirelessWirelessDeviceLoRaWanAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanAbpV10X;

IotwirelessWirelessDeviceLoRaWanAbpV10X.builder()
//  .devAddr(java.lang.String)
//  .sessionKeys(IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.devAddr">devAddr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.sessionKeys">sessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}. |

---

##### `devAddr`<sup>Optional</sup> <a name="devAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.devAddr"></a>

```java
public java.lang.String getDevAddr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}.

---

##### `sessionKeys`<sup>Optional</sup> <a name="sessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.sessionKeys"></a>

```java
public IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys getSessionKeys();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys;

IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.builder()
//  .appSKey(java.lang.String)
//  .nwkSKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.appSKey">appSKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.nwkSKey">nwkSKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_key IotwirelessWirelessDevice#nwk_s_key}. |

---

##### `appSKey`<sup>Optional</sup> <a name="appSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.appSKey"></a>

```java
public java.lang.String getAppSKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}.

---

##### `nwkSKey`<sup>Optional</sup> <a name="nwkSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.nwkSKey"></a>

```java
public java.lang.String getNwkSKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_key IotwirelessWirelessDevice#nwk_s_key}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV11 <a name="IotwirelessWirelessDeviceLoRaWanAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanAbpV11;

IotwirelessWirelessDeviceLoRaWanAbpV11.builder()
//  .devAddr(java.lang.String)
//  .sessionKeys(IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.devAddr">devAddr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.sessionKeys">sessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}. |

---

##### `devAddr`<sup>Optional</sup> <a name="devAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.devAddr"></a>

```java
public java.lang.String getDevAddr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}.

---

##### `sessionKeys`<sup>Optional</sup> <a name="sessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.sessionKeys"></a>

```java
public IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys getSessionKeys();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys <a name="IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys;

IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.builder()
//  .appSKey(java.lang.String)
//  .fNwkSIntKey(java.lang.String)
//  .nwkSEncKey(java.lang.String)
//  .sNwkSIntKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.appSKey">appSKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.fNwkSIntKey">fNwkSIntKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_nwk_s_int_key IotwirelessWirelessDevice#f_nwk_s_int_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.nwkSEncKey">nwkSEncKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_enc_key IotwirelessWirelessDevice#nwk_s_enc_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.sNwkSIntKey">sNwkSIntKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#s_nwk_s_int_key IotwirelessWirelessDevice#s_nwk_s_int_key}. |

---

##### `appSKey`<sup>Optional</sup> <a name="appSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.appSKey"></a>

```java
public java.lang.String getAppSKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}.

---

##### `fNwkSIntKey`<sup>Optional</sup> <a name="fNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.fNwkSIntKey"></a>

```java
public java.lang.String getFNwkSIntKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_nwk_s_int_key IotwirelessWirelessDevice#f_nwk_s_int_key}.

---

##### `nwkSEncKey`<sup>Optional</sup> <a name="nwkSEncKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.nwkSEncKey"></a>

```java
public java.lang.String getNwkSEncKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_enc_key IotwirelessWirelessDevice#nwk_s_enc_key}.

---

##### `sNwkSIntKey`<sup>Optional</sup> <a name="sNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.sNwkSIntKey"></a>

```java
public java.lang.String getSNwkSIntKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#s_nwk_s_int_key IotwirelessWirelessDevice#s_nwk_s_int_key}.

---

### IotwirelessWirelessDeviceLoRaWanFPorts <a name="IotwirelessWirelessDeviceLoRaWanFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanFPorts;

IotwirelessWirelessDeviceLoRaWanFPorts.builder()
//  .applications(IResolvable|java.util.List<IotwirelessWirelessDeviceLoRaWanFPortsApplications>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.property.applications">applications</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>></code> | A list of optional LoRaWAN application information, which can be used for geolocation. |

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.property.applications"></a>

```java
public IResolvable|java.util.List<IotwirelessWirelessDeviceLoRaWanFPortsApplications> getApplications();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>>

A list of optional LoRaWAN application information, which can be used for geolocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#applications IotwirelessWirelessDevice#applications}

---

### IotwirelessWirelessDeviceLoRaWanFPortsApplications <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanFPortsApplications;

IotwirelessWirelessDeviceLoRaWanFPortsApplications.builder()
//  .destinationName(java.lang.String)
//  .fPort(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.destinationName">destinationName</a></code> | <code>java.lang.String</code> | The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.fPort">fPort</a></code> | <code>java.lang.Number</code> | The Fport value. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.type">type</a></code> | <code>java.lang.String</code> | Application type, which can be specified to obtain real-time position information of your LoRaWAN device. |

---

##### `destinationName`<sup>Optional</sup> <a name="destinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.destinationName"></a>

```java
public java.lang.String getDestinationName();
```

- *Type:* java.lang.String

The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#destination_name IotwirelessWirelessDevice#destination_name}

---

##### `fPort`<sup>Optional</sup> <a name="fPort" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.fPort"></a>

```java
public java.lang.Number getFPort();
```

- *Type:* java.lang.Number

The Fport value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_port IotwirelessWirelessDevice#f_port}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Application type, which can be specified to obtain real-time position information of your LoRaWAN device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#type IotwirelessWirelessDevice#type}

---

### IotwirelessWirelessDeviceLoRaWanOtaaV10X <a name="IotwirelessWirelessDeviceLoRaWanOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanOtaaV10X;

IotwirelessWirelessDeviceLoRaWanOtaaV10X.builder()
//  .appEui(java.lang.String)
//  .appKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appEui">appEui</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_eui IotwirelessWirelessDevice#app_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appKey">appKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}. |

---

##### `appEui`<sup>Optional</sup> <a name="appEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appEui"></a>

```java
public java.lang.String getAppEui();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_eui IotwirelessWirelessDevice#app_eui}.

---

##### `appKey`<sup>Optional</sup> <a name="appKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appKey"></a>

```java
public java.lang.String getAppKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}.

---

### IotwirelessWirelessDeviceLoRaWanOtaaV11 <a name="IotwirelessWirelessDeviceLoRaWanOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanOtaaV11;

IotwirelessWirelessDeviceLoRaWanOtaaV11.builder()
//  .appKey(java.lang.String)
//  .joinEui(java.lang.String)
//  .nwkKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.appKey">appKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.joinEui">joinEui</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#join_eui IotwirelessWirelessDevice#join_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.nwkKey">nwkKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_key IotwirelessWirelessDevice#nwk_key}. |

---

##### `appKey`<sup>Optional</sup> <a name="appKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.appKey"></a>

```java
public java.lang.String getAppKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}.

---

##### `joinEui`<sup>Optional</sup> <a name="joinEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.joinEui"></a>

```java
public java.lang.String getJoinEui();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#join_eui IotwirelessWirelessDevice#join_eui}.

---

##### `nwkKey`<sup>Optional</sup> <a name="nwkKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.nwkKey"></a>

```java
public java.lang.String getNwkKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_key IotwirelessWirelessDevice#nwk_key}.

---

### IotwirelessWirelessDeviceTags <a name="IotwirelessWirelessDeviceTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceTags;

IotwirelessWirelessDeviceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#key IotwirelessWirelessDevice#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#value IotwirelessWirelessDevice#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#key IotwirelessWirelessDevice#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#value IotwirelessWirelessDevice#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference;

new IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys">putSessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetDevAddr">resetDevAddr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetSessionKeys">resetSessionKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionKeys` <a name="putSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys"></a>

```java
public void putSessionKeys(IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---

##### `resetDevAddr` <a name="resetDevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetDevAddr"></a>

```java
public void resetDevAddr()
```

##### `resetSessionKeys` <a name="resetSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetSessionKeys"></a>

```java
public void resetSessionKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys">sessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddrInput">devAddrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeysInput">sessionKeysInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr">devAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sessionKeys`<sup>Required</sup> <a name="sessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys"></a>

```java
public IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference getSessionKeys();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a>

---

##### `devAddrInput`<sup>Optional</sup> <a name="devAddrInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddrInput"></a>

```java
public java.lang.String getDevAddrInput();
```

- *Type:* java.lang.String

---

##### `sessionKeysInput`<sup>Optional</sup> <a name="sessionKeysInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeysInput"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys getSessionKeysInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---

##### `devAddr`<sup>Required</sup> <a name="devAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr"></a>

```java
public java.lang.String getDevAddr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV10X getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---


### IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference;

new IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetAppSKey">resetAppSKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetNwkSKey">resetNwkSKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppSKey` <a name="resetAppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetAppSKey"></a>

```java
public void resetAppSKey()
```

##### `resetNwkSKey` <a name="resetNwkSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetNwkSKey"></a>

```java
public void resetNwkSKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKeyInput">appSKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKeyInput">nwkSKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey">appSKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey">nwkSKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appSKeyInput`<sup>Optional</sup> <a name="appSKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKeyInput"></a>

```java
public java.lang.String getAppSKeyInput();
```

- *Type:* java.lang.String

---

##### `nwkSKeyInput`<sup>Optional</sup> <a name="nwkSKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKeyInput"></a>

```java
public java.lang.String getNwkSKeyInput();
```

- *Type:* java.lang.String

---

##### `appSKey`<sup>Required</sup> <a name="appSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey"></a>

```java
public java.lang.String getAppSKey();
```

- *Type:* java.lang.String

---

##### `nwkSKey`<sup>Required</sup> <a name="nwkSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey"></a>

```java
public java.lang.String getNwkSKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---


### IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference;

new IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys">putSessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetDevAddr">resetDevAddr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetSessionKeys">resetSessionKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionKeys` <a name="putSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys"></a>

```java
public void putSessionKeys(IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---

##### `resetDevAddr` <a name="resetDevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetDevAddr"></a>

```java
public void resetDevAddr()
```

##### `resetSessionKeys` <a name="resetSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetSessionKeys"></a>

```java
public void resetSessionKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys">sessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddrInput">devAddrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeysInput">sessionKeysInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr">devAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sessionKeys`<sup>Required</sup> <a name="sessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys"></a>

```java
public IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference getSessionKeys();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a>

---

##### `devAddrInput`<sup>Optional</sup> <a name="devAddrInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddrInput"></a>

```java
public java.lang.String getDevAddrInput();
```

- *Type:* java.lang.String

---

##### `sessionKeysInput`<sup>Optional</sup> <a name="sessionKeysInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeysInput"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys getSessionKeysInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---

##### `devAddr`<sup>Required</sup> <a name="devAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr"></a>

```java
public java.lang.String getDevAddr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV11 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

---


### IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference;

new IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetAppSKey">resetAppSKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetFNwkSIntKey">resetFNwkSIntKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetNwkSEncKey">resetNwkSEncKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetSNwkSIntKey">resetSNwkSIntKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppSKey` <a name="resetAppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetAppSKey"></a>

```java
public void resetAppSKey()
```

##### `resetFNwkSIntKey` <a name="resetFNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetFNwkSIntKey"></a>

```java
public void resetFNwkSIntKey()
```

##### `resetNwkSEncKey` <a name="resetNwkSEncKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetNwkSEncKey"></a>

```java
public void resetNwkSEncKey()
```

##### `resetSNwkSIntKey` <a name="resetSNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetSNwkSIntKey"></a>

```java
public void resetSNwkSIntKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKeyInput">appSKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKeyInput">fNwkSIntKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKeyInput">nwkSEncKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKeyInput">sNwkSIntKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey">appSKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey">fNwkSIntKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey">nwkSEncKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey">sNwkSIntKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appSKeyInput`<sup>Optional</sup> <a name="appSKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKeyInput"></a>

```java
public java.lang.String getAppSKeyInput();
```

- *Type:* java.lang.String

---

##### `fNwkSIntKeyInput`<sup>Optional</sup> <a name="fNwkSIntKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKeyInput"></a>

```java
public java.lang.String getFNwkSIntKeyInput();
```

- *Type:* java.lang.String

---

##### `nwkSEncKeyInput`<sup>Optional</sup> <a name="nwkSEncKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKeyInput"></a>

```java
public java.lang.String getNwkSEncKeyInput();
```

- *Type:* java.lang.String

---

##### `sNwkSIntKeyInput`<sup>Optional</sup> <a name="sNwkSIntKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKeyInput"></a>

```java
public java.lang.String getSNwkSIntKeyInput();
```

- *Type:* java.lang.String

---

##### `appSKey`<sup>Required</sup> <a name="appSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey"></a>

```java
public java.lang.String getAppSKey();
```

- *Type:* java.lang.String

---

##### `fNwkSIntKey`<sup>Required</sup> <a name="fNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey"></a>

```java
public java.lang.String getFNwkSIntKey();
```

- *Type:* java.lang.String

---

##### `nwkSEncKey`<sup>Required</sup> <a name="nwkSEncKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey"></a>

```java
public java.lang.String getNwkSEncKey();
```

- *Type:* java.lang.String

---

##### `sNwkSIntKey`<sup>Required</sup> <a name="sNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey"></a>

```java
public java.lang.String getSNwkSIntKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---


### IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList;

new IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get"></a>

```java
public IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotwirelessWirelessDeviceLoRaWanFPortsApplications> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>>

---


### IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference;

new IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetDestinationName">resetDestinationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetFPort">resetFPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationName` <a name="resetDestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetDestinationName"></a>

```java
public void resetDestinationName()
```

##### `resetFPort` <a name="resetFPort" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetFPort"></a>

```java
public void resetFPort()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationNameInput">destinationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPortInput">fPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName">destinationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort">fPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationNameInput`<sup>Optional</sup> <a name="destinationNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationNameInput"></a>

```java
public java.lang.String getDestinationNameInput();
```

- *Type:* java.lang.String

---

##### `fPortInput`<sup>Optional</sup> <a name="fPortInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPortInput"></a>

```java
public java.lang.Number getFPortInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName"></a>

```java
public java.lang.String getDestinationName();
```

- *Type:* java.lang.String

---

##### `fPort`<sup>Required</sup> <a name="fPort" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort"></a>

```java
public java.lang.Number getFPort();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanFPortsApplications getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>

---


### IotwirelessWirelessDeviceLoRaWanFPortsOutputReference <a name="IotwirelessWirelessDeviceLoRaWanFPortsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference;

new IotwirelessWirelessDeviceLoRaWanFPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications">putApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resetApplications">resetApplications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplications` <a name="putApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications"></a>

```java
public void putApplications(IResolvable|java.util.List<IotwirelessWirelessDeviceLoRaWanFPortsApplications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>>

---

##### `resetApplications` <a name="resetApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resetApplications"></a>

```java
public void resetApplications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications">applications</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applicationsInput">applicationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications"></a>

```java
public IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList getApplications();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a>

---

##### `applicationsInput`<sup>Optional</sup> <a name="applicationsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applicationsInput"></a>

```java
public IResolvable|java.util.List<IotwirelessWirelessDeviceLoRaWanFPortsApplications> getApplicationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanFPorts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

---


### IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference <a name="IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference;

new IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppEui">resetAppEui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppKey">resetAppKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppEui` <a name="resetAppEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppEui"></a>

```java
public void resetAppEui()
```

##### `resetAppKey` <a name="resetAppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppKey"></a>

```java
public void resetAppKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEuiInput">appEuiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKeyInput">appKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui">appEui</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey">appKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appEuiInput`<sup>Optional</sup> <a name="appEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEuiInput"></a>

```java
public java.lang.String getAppEuiInput();
```

- *Type:* java.lang.String

---

##### `appKeyInput`<sup>Optional</sup> <a name="appKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKeyInput"></a>

```java
public java.lang.String getAppKeyInput();
```

- *Type:* java.lang.String

---

##### `appEui`<sup>Required</sup> <a name="appEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui"></a>

```java
public java.lang.String getAppEui();
```

- *Type:* java.lang.String

---

##### `appKey`<sup>Required</sup> <a name="appKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey"></a>

```java
public java.lang.String getAppKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanOtaaV10X getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---


### IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference <a name="IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference;

new IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetAppKey">resetAppKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetJoinEui">resetJoinEui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetNwkKey">resetNwkKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppKey` <a name="resetAppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetAppKey"></a>

```java
public void resetAppKey()
```

##### `resetJoinEui` <a name="resetJoinEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetJoinEui"></a>

```java
public void resetJoinEui()
```

##### `resetNwkKey` <a name="resetNwkKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetNwkKey"></a>

```java
public void resetNwkKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKeyInput">appKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEuiInput">joinEuiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKeyInput">nwkKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey">appKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui">joinEui</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey">nwkKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appKeyInput`<sup>Optional</sup> <a name="appKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKeyInput"></a>

```java
public java.lang.String getAppKeyInput();
```

- *Type:* java.lang.String

---

##### `joinEuiInput`<sup>Optional</sup> <a name="joinEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEuiInput"></a>

```java
public java.lang.String getJoinEuiInput();
```

- *Type:* java.lang.String

---

##### `nwkKeyInput`<sup>Optional</sup> <a name="nwkKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKeyInput"></a>

```java
public java.lang.String getNwkKeyInput();
```

- *Type:* java.lang.String

---

##### `appKey`<sup>Required</sup> <a name="appKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey"></a>

```java
public java.lang.String getAppKey();
```

- *Type:* java.lang.String

---

##### `joinEui`<sup>Required</sup> <a name="joinEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui"></a>

```java
public java.lang.String getJoinEui();
```

- *Type:* java.lang.String

---

##### `nwkKey`<sup>Required</sup> <a name="nwkKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey"></a>

```java
public java.lang.String getNwkKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanOtaaV11 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---


### IotwirelessWirelessDeviceLoRaWanOutputReference <a name="IotwirelessWirelessDeviceLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceLoRaWanOutputReference;

new IotwirelessWirelessDeviceLoRaWanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X">putAbpV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11">putAbpV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts">putFPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X">putOtaaV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11">putOtaaV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV10X">resetAbpV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV11">resetAbpV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDevEui">resetDevEui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDeviceProfileId">resetDeviceProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetFPorts">resetFPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV10X">resetOtaaV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV11">resetOtaaV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetServiceProfileId">resetServiceProfileId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbpV10X` <a name="putAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X"></a>

```java
public void putAbpV10X(IotwirelessWirelessDeviceLoRaWanAbpV10X value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---

##### `putAbpV11` <a name="putAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11"></a>

```java
public void putAbpV11(IotwirelessWirelessDeviceLoRaWanAbpV11 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

---

##### `putFPorts` <a name="putFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts"></a>

```java
public void putFPorts(IotwirelessWirelessDeviceLoRaWanFPorts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

---

##### `putOtaaV10X` <a name="putOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X"></a>

```java
public void putOtaaV10X(IotwirelessWirelessDeviceLoRaWanOtaaV10X value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---

##### `putOtaaV11` <a name="putOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11"></a>

```java
public void putOtaaV11(IotwirelessWirelessDeviceLoRaWanOtaaV11 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---

##### `resetAbpV10X` <a name="resetAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV10X"></a>

```java
public void resetAbpV10X()
```

##### `resetAbpV11` <a name="resetAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV11"></a>

```java
public void resetAbpV11()
```

##### `resetDevEui` <a name="resetDevEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDevEui"></a>

```java
public void resetDevEui()
```

##### `resetDeviceProfileId` <a name="resetDeviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDeviceProfileId"></a>

```java
public void resetDeviceProfileId()
```

##### `resetFPorts` <a name="resetFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetFPorts"></a>

```java
public void resetFPorts()
```

##### `resetOtaaV10X` <a name="resetOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV10X"></a>

```java
public void resetOtaaV10X()
```

##### `resetOtaaV11` <a name="resetOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV11"></a>

```java
public void resetOtaaV11()
```

##### `resetServiceProfileId` <a name="resetServiceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetServiceProfileId"></a>

```java
public void resetServiceProfileId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X">abpV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11">abpV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts">fPorts</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference">IotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X">otaaV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11">otaaV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10XInput">abpV10XInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11Input">abpV11Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEuiInput">devEuiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileIdInput">deviceProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPortsInput">fPortsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10XInput">otaaV10XInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11Input">otaaV11Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileIdInput">serviceProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui">devEui</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId">deviceProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId">serviceProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `abpV10X`<sup>Required</sup> <a name="abpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X"></a>

```java
public IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference getAbpV10X();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a>

---

##### `abpV11`<sup>Required</sup> <a name="abpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11"></a>

```java
public IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference getAbpV11();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a>

---

##### `fPorts`<sup>Required</sup> <a name="fPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts"></a>

```java
public IotwirelessWirelessDeviceLoRaWanFPortsOutputReference getFPorts();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference">IotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a>

---

##### `otaaV10X`<sup>Required</sup> <a name="otaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X"></a>

```java
public IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference getOtaaV10X();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a>

---

##### `otaaV11`<sup>Required</sup> <a name="otaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11"></a>

```java
public IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference getOtaaV11();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a>

---

##### `abpV10XInput`<sup>Optional</sup> <a name="abpV10XInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10XInput"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV10X getAbpV10XInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---

##### `abpV11Input`<sup>Optional</sup> <a name="abpV11Input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11Input"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanAbpV11 getAbpV11Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

---

##### `devEuiInput`<sup>Optional</sup> <a name="devEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEuiInput"></a>

```java
public java.lang.String getDevEuiInput();
```

- *Type:* java.lang.String

---

##### `deviceProfileIdInput`<sup>Optional</sup> <a name="deviceProfileIdInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileIdInput"></a>

```java
public java.lang.String getDeviceProfileIdInput();
```

- *Type:* java.lang.String

---

##### `fPortsInput`<sup>Optional</sup> <a name="fPortsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPortsInput"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanFPorts getFPortsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

---

##### `otaaV10XInput`<sup>Optional</sup> <a name="otaaV10XInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10XInput"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanOtaaV10X getOtaaV10XInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---

##### `otaaV11Input`<sup>Optional</sup> <a name="otaaV11Input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11Input"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWanOtaaV11 getOtaaV11Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---

##### `serviceProfileIdInput`<sup>Optional</sup> <a name="serviceProfileIdInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileIdInput"></a>

```java
public java.lang.String getServiceProfileIdInput();
```

- *Type:* java.lang.String

---

##### `devEui`<sup>Required</sup> <a name="devEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui"></a>

```java
public java.lang.String getDevEui();
```

- *Type:* java.lang.String

---

##### `deviceProfileId`<sup>Required</sup> <a name="deviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId"></a>

```java
public java.lang.String getDeviceProfileId();
```

- *Type:* java.lang.String

---

##### `serviceProfileId`<sup>Required</sup> <a name="serviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId"></a>

```java
public java.lang.String getServiceProfileId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessWirelessDeviceLoRaWan getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

---


### IotwirelessWirelessDeviceTagsList <a name="IotwirelessWirelessDeviceTagsList" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceTagsList;

new IotwirelessWirelessDeviceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get"></a>

```java
public IotwirelessWirelessDeviceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotwirelessWirelessDeviceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>>

---


### IotwirelessWirelessDeviceTagsOutputReference <a name="IotwirelessWirelessDeviceTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_device.IotwirelessWirelessDeviceTagsOutputReference;

new IotwirelessWirelessDeviceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessWirelessDeviceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>

---



