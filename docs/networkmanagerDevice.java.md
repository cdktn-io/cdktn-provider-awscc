# `networkmanagerDevice` Submodule <a name="`networkmanagerDevice` Submodule" id="@cdktn/provider-awscc.networkmanagerDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerDevice <a name="NetworkmanagerDevice" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device awscc_networkmanager_device}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDevice;

NetworkmanagerDevice.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .globalNetworkId(java.lang.String)
//  .awsLocation(NetworkmanagerDeviceAwsLocation)
//  .description(java.lang.String)
//  .location(NetworkmanagerDeviceLocation)
//  .model(java.lang.String)
//  .serialNumber(java.lang.String)
//  .siteId(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworkmanagerDeviceTags>)
//  .type(java.lang.String)
//  .vendor(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | The ID of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.awsLocation">awsLocation</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a></code> | The Amazon Web Services location of the device, if applicable. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the device. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a></code> | The site location. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.model">model</a></code> | <code>java.lang.String</code> | The device model. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | The device serial number. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | The site ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags">NetworkmanagerDeviceTags</a>></code> | The tags for the device. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The device type. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.vendor">vendor</a></code> | <code>java.lang.String</code> | The device vendor. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.globalNetworkId"></a>

- *Type:* java.lang.String

The ID of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#global_network_id NetworkmanagerDevice#global_network_id}

---

##### `awsLocation`<sup>Optional</sup> <a name="awsLocation" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.awsLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

The Amazon Web Services location of the device, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#aws_location NetworkmanagerDevice#aws_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#description NetworkmanagerDevice#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

The site location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#location NetworkmanagerDevice#location}

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.model"></a>

- *Type:* java.lang.String

The device model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#model NetworkmanagerDevice#model}

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.serialNumber"></a>

- *Type:* java.lang.String

The device serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#serial_number NetworkmanagerDevice#serial_number}

---

##### `siteId`<sup>Optional</sup> <a name="siteId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

The site ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#site_id NetworkmanagerDevice#site_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags">NetworkmanagerDeviceTags</a>>

The tags for the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#tags NetworkmanagerDevice#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The device type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#type NetworkmanagerDevice#type}

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.vendor"></a>

- *Type:* java.lang.String

The device vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#vendor NetworkmanagerDevice#vendor}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.putAwsLocation">putAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetAwsLocation">resetAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetSiteId">resetSiteId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetVendor">resetVendor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsLocation` <a name="putAwsLocation" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.putAwsLocation"></a>

```java
public void putAwsLocation(NetworkmanagerDeviceAwsLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.putAwsLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.putLocation"></a>

```java
public void putLocation(NetworkmanagerDeviceLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NetworkmanagerDeviceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags">NetworkmanagerDeviceTags</a>>

---

##### `resetAwsLocation` <a name="resetAwsLocation" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetAwsLocation"></a>

```java
public void resetAwsLocation()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetModel` <a name="resetModel" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetModel"></a>

```java
public void resetModel()
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetSerialNumber"></a>

```java
public void resetSerialNumber()
```

##### `resetSiteId` <a name="resetSiteId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetSiteId"></a>

```java
public void resetSiteId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetType"></a>

```java
public void resetType()
```

##### `resetVendor` <a name="resetVendor" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.resetVendor"></a>

```java
public void resetVendor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerDevice resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.isConstruct"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDevice;

NetworkmanagerDevice.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDevice;

NetworkmanagerDevice.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDevice;

NetworkmanagerDevice.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDevice;

NetworkmanagerDevice.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkmanagerDevice.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkmanagerDevice resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkmanagerDevice to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkmanagerDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.awsLocation">awsLocation</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference">NetworkmanagerDeviceAwsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.deviceArn">deviceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.deviceId">deviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference">NetworkmanagerDeviceLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList">NetworkmanagerDeviceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.awsLocationInput">awsLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.locationInput">locationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.serialNumberInput">serialNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags">NetworkmanagerDeviceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.vendorInput">vendorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.vendor">vendor</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsLocation`<sup>Required</sup> <a name="awsLocation" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.awsLocation"></a>

```java
public NetworkmanagerDeviceAwsLocationOutputReference getAwsLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference">NetworkmanagerDeviceAwsLocationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deviceArn`<sup>Required</sup> <a name="deviceArn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.deviceArn"></a>

```java
public java.lang.String getDeviceArn();
```

- *Type:* java.lang.String

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.deviceId"></a>

```java
public java.lang.String getDeviceId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.location"></a>

```java
public NetworkmanagerDeviceLocationOutputReference getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference">NetworkmanagerDeviceLocationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.tags"></a>

```java
public NetworkmanagerDeviceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList">NetworkmanagerDeviceTagsList</a>

---

##### `awsLocationInput`<sup>Optional</sup> <a name="awsLocationInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.awsLocationInput"></a>

```java
public IResolvable|NetworkmanagerDeviceAwsLocation getAwsLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.globalNetworkIdInput"></a>

```java
public java.lang.String getGlobalNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.locationInput"></a>

```java
public IResolvable|NetworkmanagerDeviceLocation getLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.serialNumberInput"></a>

```java
public java.lang.String getSerialNumberInput();
```

- *Type:* java.lang.String

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NetworkmanagerDeviceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags">NetworkmanagerDeviceTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vendorInput`<sup>Optional</sup> <a name="vendorInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.vendorInput"></a>

```java
public java.lang.String getVendorInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDevice.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerDeviceAwsLocation <a name="NetworkmanagerDeviceAwsLocation" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDeviceAwsLocation;

NetworkmanagerDeviceAwsLocation.builder()
//  .subnetArn(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.property.subnetArn">subnetArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the subnet that the device is located in. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.property.zone">zone</a></code> | <code>java.lang.String</code> | The Zone that the device is located in. |

---

##### `subnetArn`<sup>Optional</sup> <a name="subnetArn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.property.subnetArn"></a>

```java
public java.lang.String getSubnetArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the subnet that the device is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#subnet_arn NetworkmanagerDevice#subnet_arn}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The Zone that the device is located in.

Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#zone NetworkmanagerDevice#zone}

---

### NetworkmanagerDeviceConfig <a name="NetworkmanagerDeviceConfig" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDeviceConfig;

NetworkmanagerDeviceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .globalNetworkId(java.lang.String)
//  .awsLocation(NetworkmanagerDeviceAwsLocation)
//  .description(java.lang.String)
//  .location(NetworkmanagerDeviceLocation)
//  .model(java.lang.String)
//  .serialNumber(java.lang.String)
//  .siteId(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworkmanagerDeviceTags>)
//  .type(java.lang.String)
//  .vendor(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>java.lang.String</code> | The ID of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.awsLocation">awsLocation</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a></code> | The Amazon Web Services location of the device, if applicable. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the device. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a></code> | The site location. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.model">model</a></code> | <code>java.lang.String</code> | The device model. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | The device serial number. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | The site ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags">NetworkmanagerDeviceTags</a>></code> | The tags for the device. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.type">type</a></code> | <code>java.lang.String</code> | The device type. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.vendor">vendor</a></code> | <code>java.lang.String</code> | The device vendor. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.globalNetworkId"></a>

```java
public java.lang.String getGlobalNetworkId();
```

- *Type:* java.lang.String

The ID of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#global_network_id NetworkmanagerDevice#global_network_id}

---

##### `awsLocation`<sup>Optional</sup> <a name="awsLocation" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.awsLocation"></a>

```java
public NetworkmanagerDeviceAwsLocation getAwsLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

The Amazon Web Services location of the device, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#aws_location NetworkmanagerDevice#aws_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#description NetworkmanagerDevice#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.location"></a>

```java
public NetworkmanagerDeviceLocation getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

The site location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#location NetworkmanagerDevice#location}

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The device model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#model NetworkmanagerDevice#model}

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

The device serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#serial_number NetworkmanagerDevice#serial_number}

---

##### `siteId`<sup>Optional</sup> <a name="siteId" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

The site ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#site_id NetworkmanagerDevice#site_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<NetworkmanagerDeviceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags">NetworkmanagerDeviceTags</a>>

The tags for the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#tags NetworkmanagerDevice#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The device type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#type NetworkmanagerDevice#type}

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceConfig.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

The device vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#vendor NetworkmanagerDevice#vendor}

---

### NetworkmanagerDeviceLocation <a name="NetworkmanagerDeviceLocation" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDeviceLocation;

NetworkmanagerDeviceLocation.builder()
//  .address(java.lang.String)
//  .latitude(java.lang.String)
//  .longitude(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation.property.address">address</a></code> | <code>java.lang.String</code> | The physical address. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation.property.latitude">latitude</a></code> | <code>java.lang.String</code> | The latitude. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation.property.longitude">longitude</a></code> | <code>java.lang.String</code> | The longitude. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The physical address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#address NetworkmanagerDevice#address}

---

##### `latitude`<sup>Optional</sup> <a name="latitude" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation.property.latitude"></a>

```java
public java.lang.String getLatitude();
```

- *Type:* java.lang.String

The latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#latitude NetworkmanagerDevice#latitude}

---

##### `longitude`<sup>Optional</sup> <a name="longitude" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation.property.longitude"></a>

```java
public java.lang.String getLongitude();
```

- *Type:* java.lang.String

The longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#longitude NetworkmanagerDevice#longitude}

---

### NetworkmanagerDeviceTags <a name="NetworkmanagerDeviceTags" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDeviceTags;

NetworkmanagerDeviceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#key NetworkmanagerDevice#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_device#value NetworkmanagerDevice#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerDeviceAwsLocationOutputReference <a name="NetworkmanagerDeviceAwsLocationOutputReference" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDeviceAwsLocationOutputReference;

new NetworkmanagerDeviceAwsLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resetSubnetArn">resetSubnetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnetArn` <a name="resetSubnetArn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resetSubnetArn"></a>

```java
public void resetSubnetArn()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resetZone"></a>

```java
public void resetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.subnetArnInput">subnetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.subnetArn">subnetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetArnInput`<sup>Optional</sup> <a name="subnetArnInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.subnetArnInput"></a>

```java
public java.lang.String getSubnetArnInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `subnetArn`<sup>Required</sup> <a name="subnetArn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.subnetArn"></a>

```java
public java.lang.String getSubnetArn();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerDeviceAwsLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

---


### NetworkmanagerDeviceLocationOutputReference <a name="NetworkmanagerDeviceLocationOutputReference" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDeviceLocationOutputReference;

new NetworkmanagerDeviceLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetLatitude">resetLatitude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetLongitude">resetLongitude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetLatitude` <a name="resetLatitude" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetLatitude"></a>

```java
public void resetLatitude()
```

##### `resetLongitude` <a name="resetLongitude" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetLongitude"></a>

```java
public void resetLongitude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.latitudeInput">latitudeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.longitudeInput">longitudeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.latitude">latitude</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.longitude">longitude</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `latitudeInput`<sup>Optional</sup> <a name="latitudeInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.latitudeInput"></a>

```java
public java.lang.String getLatitudeInput();
```

- *Type:* java.lang.String

---

##### `longitudeInput`<sup>Optional</sup> <a name="longitudeInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.longitudeInput"></a>

```java
public java.lang.String getLongitudeInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.latitude"></a>

```java
public java.lang.String getLatitude();
```

- *Type:* java.lang.String

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.longitude"></a>

```java
public java.lang.String getLongitude();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerDeviceLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

---


### NetworkmanagerDeviceTagsList <a name="NetworkmanagerDeviceTagsList" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDeviceTagsList;

new NetworkmanagerDeviceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.get"></a>

```java
public NetworkmanagerDeviceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags">NetworkmanagerDeviceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkmanagerDeviceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags">NetworkmanagerDeviceTags</a>>

---


### NetworkmanagerDeviceTagsOutputReference <a name="NetworkmanagerDeviceTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_device.NetworkmanagerDeviceTagsOutputReference;

new NetworkmanagerDeviceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags">NetworkmanagerDeviceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerDeviceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerDevice.NetworkmanagerDeviceTags">NetworkmanagerDeviceTags</a>

---



