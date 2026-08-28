# `iotwirelessDeviceProfile` Submodule <a name="`iotwirelessDeviceProfile` Submodule" id="@cdktn/provider-awscc.iotwirelessDeviceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessDeviceProfile <a name="IotwirelessDeviceProfile" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile awscc_iotwireless_device_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_device_profile.IotwirelessDeviceProfile;

IotwirelessDeviceProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .loRaWan(IotwirelessDeviceProfileLoRaWan)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<IotwirelessDeviceProfileTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a></code> | LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of service profile. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>></code> | A list of key-value pairs that contain metadata for the device profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `loRaWan`<sup>Optional</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.loRaWan"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#lo_ra_wan IotwirelessDeviceProfile#lo_ra_wan}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of service profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#name IotwirelessDeviceProfile#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>>

A list of key-value pairs that contain metadata for the device profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#tags IotwirelessDeviceProfile#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putLoRaWan">putLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetLoRaWan">resetLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoRaWan` <a name="putLoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putLoRaWan"></a>

```java
public void putLoRaWan(IotwirelessDeviceProfileLoRaWan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotwirelessDeviceProfileTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>>

---

##### `resetLoRaWan` <a name="resetLoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetLoRaWan"></a>

```java
public void resetLoRaWan()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessDeviceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotwireless_device_profile.IotwirelessDeviceProfile;

IotwirelessDeviceProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotwireless_device_profile.IotwirelessDeviceProfile;

IotwirelessDeviceProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotwireless_device_profile.IotwirelessDeviceProfile;

IotwirelessDeviceProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotwireless_device_profile.IotwirelessDeviceProfile;

IotwirelessDeviceProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotwirelessDeviceProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotwirelessDeviceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotwirelessDeviceProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotwirelessDeviceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessDeviceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.deviceProfileId">deviceProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference">IotwirelessDeviceProfileLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList">IotwirelessDeviceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWanInput">loRaWanInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `deviceProfileId`<sup>Required</sup> <a name="deviceProfileId" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.deviceProfileId"></a>

```java
public java.lang.String getDeviceProfileId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWan"></a>

```java
public IotwirelessDeviceProfileLoRaWanOutputReference getLoRaWan();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference">IotwirelessDeviceProfileLoRaWanOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tags"></a>

```java
public IotwirelessDeviceProfileTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList">IotwirelessDeviceProfileTagsList</a>

---

##### `loRaWanInput`<sup>Optional</sup> <a name="loRaWanInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.loRaWanInput"></a>

```java
public IResolvable|IotwirelessDeviceProfileLoRaWan getLoRaWanInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotwirelessDeviceProfileTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessDeviceProfileConfig <a name="IotwirelessDeviceProfileConfig" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_device_profile.IotwirelessDeviceProfileConfig;

IotwirelessDeviceProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .loRaWan(IotwirelessDeviceProfileLoRaWan)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<IotwirelessDeviceProfileTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a></code> | LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of service profile. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>></code> | A list of key-value pairs that contain metadata for the device profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `loRaWan`<sup>Optional</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.loRaWan"></a>

```java
public IotwirelessDeviceProfileLoRaWan getLoRaWan();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#lo_ra_wan IotwirelessDeviceProfile#lo_ra_wan}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of service profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#name IotwirelessDeviceProfile#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotwirelessDeviceProfileTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>>

A list of key-value pairs that contain metadata for the device profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#tags IotwirelessDeviceProfile#tags}

---

### IotwirelessDeviceProfileLoRaWan <a name="IotwirelessDeviceProfileLoRaWan" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_device_profile.IotwirelessDeviceProfileLoRaWan;

IotwirelessDeviceProfileLoRaWan.builder()
//  .classBTimeout(java.lang.Number)
//  .classCTimeout(java.lang.Number)
//  .factoryPresetFreqsList(java.util.List<java.lang.Number>)
//  .macVersion(java.lang.String)
//  .maxDutyCycle(java.lang.Number)
//  .maxEirp(java.lang.Number)
//  .pingSlotDr(java.lang.Number)
//  .pingSlotFreq(java.lang.Number)
//  .pingSlotPeriod(java.lang.Number)
//  .regParamsRevision(java.lang.String)
//  .rfRegion(java.lang.String)
//  .rxDataRate2(java.lang.Number)
//  .rxDelay1(java.lang.Number)
//  .rxDrOffset1(java.lang.Number)
//  .rxFreq2(java.lang.Number)
//  .supports32BitFCnt(java.lang.Boolean|IResolvable)
//  .supportsClassB(java.lang.Boolean|IResolvable)
//  .supportsClassC(java.lang.Boolean|IResolvable)
//  .supportsJoin(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classBTimeout">classBTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#class_b_timeout IotwirelessDeviceProfile#class_b_timeout}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classCTimeout">classCTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#class_c_timeout IotwirelessDeviceProfile#class_c_timeout}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.factoryPresetFreqsList">factoryPresetFreqsList</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#factory_preset_freqs_list IotwirelessDeviceProfile#factory_preset_freqs_list}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.macVersion">macVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#mac_version IotwirelessDeviceProfile#mac_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxDutyCycle">maxDutyCycle</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#max_duty_cycle IotwirelessDeviceProfile#max_duty_cycle}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxEirp">maxEirp</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#max_eirp IotwirelessDeviceProfile#max_eirp}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotDr">pingSlotDr</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#ping_slot_dr IotwirelessDeviceProfile#ping_slot_dr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotFreq">pingSlotFreq</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#ping_slot_freq IotwirelessDeviceProfile#ping_slot_freq}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotPeriod">pingSlotPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#ping_slot_period IotwirelessDeviceProfile#ping_slot_period}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.regParamsRevision">regParamsRevision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#reg_params_revision IotwirelessDeviceProfile#reg_params_revision}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rfRegion">rfRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rf_region IotwirelessDeviceProfile#rf_region}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDataRate2">rxDataRate2</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_data_rate_2 IotwirelessDeviceProfile#rx_data_rate_2}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDelay1">rxDelay1</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_delay_1 IotwirelessDeviceProfile#rx_delay_1}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDrOffset1">rxDrOffset1</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_dr_offset_1 IotwirelessDeviceProfile#rx_dr_offset_1}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxFreq2">rxFreq2</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_freq_2 IotwirelessDeviceProfile#rx_freq_2}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supports32BitFCnt">supports32BitFCnt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_32_bit_f_cnt IotwirelessDeviceProfile#supports_32_bit_f_cnt}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassB">supportsClassB</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_class_b IotwirelessDeviceProfile#supports_class_b}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassC">supportsClassC</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_class_c IotwirelessDeviceProfile#supports_class_c}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsJoin">supportsJoin</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_join IotwirelessDeviceProfile#supports_join}. |

---

##### `classBTimeout`<sup>Optional</sup> <a name="classBTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classBTimeout"></a>

```java
public java.lang.Number getClassBTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#class_b_timeout IotwirelessDeviceProfile#class_b_timeout}.

---

##### `classCTimeout`<sup>Optional</sup> <a name="classCTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.classCTimeout"></a>

```java
public java.lang.Number getClassCTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#class_c_timeout IotwirelessDeviceProfile#class_c_timeout}.

---

##### `factoryPresetFreqsList`<sup>Optional</sup> <a name="factoryPresetFreqsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.factoryPresetFreqsList"></a>

```java
public java.util.List<java.lang.Number> getFactoryPresetFreqsList();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#factory_preset_freqs_list IotwirelessDeviceProfile#factory_preset_freqs_list}.

---

##### `macVersion`<sup>Optional</sup> <a name="macVersion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.macVersion"></a>

```java
public java.lang.String getMacVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#mac_version IotwirelessDeviceProfile#mac_version}.

---

##### `maxDutyCycle`<sup>Optional</sup> <a name="maxDutyCycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxDutyCycle"></a>

```java
public java.lang.Number getMaxDutyCycle();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#max_duty_cycle IotwirelessDeviceProfile#max_duty_cycle}.

---

##### `maxEirp`<sup>Optional</sup> <a name="maxEirp" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.maxEirp"></a>

```java
public java.lang.Number getMaxEirp();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#max_eirp IotwirelessDeviceProfile#max_eirp}.

---

##### `pingSlotDr`<sup>Optional</sup> <a name="pingSlotDr" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotDr"></a>

```java
public java.lang.Number getPingSlotDr();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#ping_slot_dr IotwirelessDeviceProfile#ping_slot_dr}.

---

##### `pingSlotFreq`<sup>Optional</sup> <a name="pingSlotFreq" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotFreq"></a>

```java
public java.lang.Number getPingSlotFreq();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#ping_slot_freq IotwirelessDeviceProfile#ping_slot_freq}.

---

##### `pingSlotPeriod`<sup>Optional</sup> <a name="pingSlotPeriod" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.pingSlotPeriod"></a>

```java
public java.lang.Number getPingSlotPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#ping_slot_period IotwirelessDeviceProfile#ping_slot_period}.

---

##### `regParamsRevision`<sup>Optional</sup> <a name="regParamsRevision" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.regParamsRevision"></a>

```java
public java.lang.String getRegParamsRevision();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#reg_params_revision IotwirelessDeviceProfile#reg_params_revision}.

---

##### `rfRegion`<sup>Optional</sup> <a name="rfRegion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rfRegion"></a>

```java
public java.lang.String getRfRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rf_region IotwirelessDeviceProfile#rf_region}.

---

##### `rxDataRate2`<sup>Optional</sup> <a name="rxDataRate2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDataRate2"></a>

```java
public java.lang.Number getRxDataRate2();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_data_rate_2 IotwirelessDeviceProfile#rx_data_rate_2}.

---

##### `rxDelay1`<sup>Optional</sup> <a name="rxDelay1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDelay1"></a>

```java
public java.lang.Number getRxDelay1();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_delay_1 IotwirelessDeviceProfile#rx_delay_1}.

---

##### `rxDrOffset1`<sup>Optional</sup> <a name="rxDrOffset1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxDrOffset1"></a>

```java
public java.lang.Number getRxDrOffset1();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_dr_offset_1 IotwirelessDeviceProfile#rx_dr_offset_1}.

---

##### `rxFreq2`<sup>Optional</sup> <a name="rxFreq2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.rxFreq2"></a>

```java
public java.lang.Number getRxFreq2();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#rx_freq_2 IotwirelessDeviceProfile#rx_freq_2}.

---

##### `supports32BitFCnt`<sup>Optional</sup> <a name="supports32BitFCnt" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supports32BitFCnt"></a>

```java
public java.lang.Boolean|IResolvable getSupports32BitFCnt();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_32_bit_f_cnt IotwirelessDeviceProfile#supports_32_bit_f_cnt}.

---

##### `supportsClassB`<sup>Optional</sup> <a name="supportsClassB" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassB"></a>

```java
public java.lang.Boolean|IResolvable getSupportsClassB();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_class_b IotwirelessDeviceProfile#supports_class_b}.

---

##### `supportsClassC`<sup>Optional</sup> <a name="supportsClassC" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsClassC"></a>

```java
public java.lang.Boolean|IResolvable getSupportsClassC();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_class_c IotwirelessDeviceProfile#supports_class_c}.

---

##### `supportsJoin`<sup>Optional</sup> <a name="supportsJoin" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan.property.supportsJoin"></a>

```java
public java.lang.Boolean|IResolvable getSupportsJoin();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#supports_join IotwirelessDeviceProfile#supports_join}.

---

### IotwirelessDeviceProfileTags <a name="IotwirelessDeviceProfileTags" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_device_profile.IotwirelessDeviceProfileTags;

IotwirelessDeviceProfileTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#key IotwirelessDeviceProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#value IotwirelessDeviceProfile#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#key IotwirelessDeviceProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_device_profile#value IotwirelessDeviceProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessDeviceProfileLoRaWanOutputReference <a name="IotwirelessDeviceProfileLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_device_profile.IotwirelessDeviceProfileLoRaWanOutputReference;

new IotwirelessDeviceProfileLoRaWanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassBTimeout">resetClassBTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassCTimeout">resetClassCTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetFactoryPresetFreqsList">resetFactoryPresetFreqsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMacVersion">resetMacVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxDutyCycle">resetMaxDutyCycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxEirp">resetMaxEirp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotDr">resetPingSlotDr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotFreq">resetPingSlotFreq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotPeriod">resetPingSlotPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRegParamsRevision">resetRegParamsRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRfRegion">resetRfRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDataRate2">resetRxDataRate2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDelay1">resetRxDelay1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDrOffset1">resetRxDrOffset1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxFreq2">resetRxFreq2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupports32BitFCnt">resetSupports32BitFCnt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassB">resetSupportsClassB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassC">resetSupportsClassC</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsJoin">resetSupportsJoin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassBTimeout` <a name="resetClassBTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassBTimeout"></a>

```java
public void resetClassBTimeout()
```

##### `resetClassCTimeout` <a name="resetClassCTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetClassCTimeout"></a>

```java
public void resetClassCTimeout()
```

##### `resetFactoryPresetFreqsList` <a name="resetFactoryPresetFreqsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetFactoryPresetFreqsList"></a>

```java
public void resetFactoryPresetFreqsList()
```

##### `resetMacVersion` <a name="resetMacVersion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMacVersion"></a>

```java
public void resetMacVersion()
```

##### `resetMaxDutyCycle` <a name="resetMaxDutyCycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxDutyCycle"></a>

```java
public void resetMaxDutyCycle()
```

##### `resetMaxEirp` <a name="resetMaxEirp" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetMaxEirp"></a>

```java
public void resetMaxEirp()
```

##### `resetPingSlotDr` <a name="resetPingSlotDr" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotDr"></a>

```java
public void resetPingSlotDr()
```

##### `resetPingSlotFreq` <a name="resetPingSlotFreq" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotFreq"></a>

```java
public void resetPingSlotFreq()
```

##### `resetPingSlotPeriod` <a name="resetPingSlotPeriod" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetPingSlotPeriod"></a>

```java
public void resetPingSlotPeriod()
```

##### `resetRegParamsRevision` <a name="resetRegParamsRevision" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRegParamsRevision"></a>

```java
public void resetRegParamsRevision()
```

##### `resetRfRegion` <a name="resetRfRegion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRfRegion"></a>

```java
public void resetRfRegion()
```

##### `resetRxDataRate2` <a name="resetRxDataRate2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDataRate2"></a>

```java
public void resetRxDataRate2()
```

##### `resetRxDelay1` <a name="resetRxDelay1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDelay1"></a>

```java
public void resetRxDelay1()
```

##### `resetRxDrOffset1` <a name="resetRxDrOffset1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxDrOffset1"></a>

```java
public void resetRxDrOffset1()
```

##### `resetRxFreq2` <a name="resetRxFreq2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetRxFreq2"></a>

```java
public void resetRxFreq2()
```

##### `resetSupports32BitFCnt` <a name="resetSupports32BitFCnt" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupports32BitFCnt"></a>

```java
public void resetSupports32BitFCnt()
```

##### `resetSupportsClassB` <a name="resetSupportsClassB" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassB"></a>

```java
public void resetSupportsClassB()
```

##### `resetSupportsClassC` <a name="resetSupportsClassC" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsClassC"></a>

```java
public void resetSupportsClassC()
```

##### `resetSupportsJoin` <a name="resetSupportsJoin" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.resetSupportsJoin"></a>

```java
public void resetSupportsJoin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeoutInput">classBTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeoutInput">classCTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsListInput">factoryPresetFreqsListInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersionInput">macVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycleInput">maxDutyCycleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirpInput">maxEirpInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDrInput">pingSlotDrInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreqInput">pingSlotFreqInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriodInput">pingSlotPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevisionInput">regParamsRevisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegionInput">rfRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2Input">rxDataRate2Input</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1Input">rxDelay1Input</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1Input">rxDrOffset1Input</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2Input">rxFreq2Input</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCntInput">supports32BitFCntInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassBInput">supportsClassBInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassCInput">supportsClassCInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoinInput">supportsJoinInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeout">classBTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeout">classCTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsList">factoryPresetFreqsList</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersion">macVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycle">maxDutyCycle</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirp">maxEirp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDr">pingSlotDr</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreq">pingSlotFreq</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriod">pingSlotPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevision">regParamsRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegion">rfRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2">rxDataRate2</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1">rxDelay1</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1">rxDrOffset1</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2">rxFreq2</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCnt">supports32BitFCnt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassB">supportsClassB</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassC">supportsClassC</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoin">supportsJoin</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classBTimeoutInput`<sup>Optional</sup> <a name="classBTimeoutInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeoutInput"></a>

```java
public java.lang.Number getClassBTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `classCTimeoutInput`<sup>Optional</sup> <a name="classCTimeoutInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeoutInput"></a>

```java
public java.lang.Number getClassCTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `factoryPresetFreqsListInput`<sup>Optional</sup> <a name="factoryPresetFreqsListInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsListInput"></a>

```java
public java.util.List<java.lang.Number> getFactoryPresetFreqsListInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `macVersionInput`<sup>Optional</sup> <a name="macVersionInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersionInput"></a>

```java
public java.lang.String getMacVersionInput();
```

- *Type:* java.lang.String

---

##### `maxDutyCycleInput`<sup>Optional</sup> <a name="maxDutyCycleInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycleInput"></a>

```java
public java.lang.Number getMaxDutyCycleInput();
```

- *Type:* java.lang.Number

---

##### `maxEirpInput`<sup>Optional</sup> <a name="maxEirpInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirpInput"></a>

```java
public java.lang.Number getMaxEirpInput();
```

- *Type:* java.lang.Number

---

##### `pingSlotDrInput`<sup>Optional</sup> <a name="pingSlotDrInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDrInput"></a>

```java
public java.lang.Number getPingSlotDrInput();
```

- *Type:* java.lang.Number

---

##### `pingSlotFreqInput`<sup>Optional</sup> <a name="pingSlotFreqInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreqInput"></a>

```java
public java.lang.Number getPingSlotFreqInput();
```

- *Type:* java.lang.Number

---

##### `pingSlotPeriodInput`<sup>Optional</sup> <a name="pingSlotPeriodInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriodInput"></a>

```java
public java.lang.Number getPingSlotPeriodInput();
```

- *Type:* java.lang.Number

---

##### `regParamsRevisionInput`<sup>Optional</sup> <a name="regParamsRevisionInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevisionInput"></a>

```java
public java.lang.String getRegParamsRevisionInput();
```

- *Type:* java.lang.String

---

##### `rfRegionInput`<sup>Optional</sup> <a name="rfRegionInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegionInput"></a>

```java
public java.lang.String getRfRegionInput();
```

- *Type:* java.lang.String

---

##### `rxDataRate2Input`<sup>Optional</sup> <a name="rxDataRate2Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2Input"></a>

```java
public java.lang.Number getRxDataRate2Input();
```

- *Type:* java.lang.Number

---

##### `rxDelay1Input`<sup>Optional</sup> <a name="rxDelay1Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1Input"></a>

```java
public java.lang.Number getRxDelay1Input();
```

- *Type:* java.lang.Number

---

##### `rxDrOffset1Input`<sup>Optional</sup> <a name="rxDrOffset1Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1Input"></a>

```java
public java.lang.Number getRxDrOffset1Input();
```

- *Type:* java.lang.Number

---

##### `rxFreq2Input`<sup>Optional</sup> <a name="rxFreq2Input" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2Input"></a>

```java
public java.lang.Number getRxFreq2Input();
```

- *Type:* java.lang.Number

---

##### `supports32BitFCntInput`<sup>Optional</sup> <a name="supports32BitFCntInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCntInput"></a>

```java
public java.lang.Boolean|IResolvable getSupports32BitFCntInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `supportsClassBInput`<sup>Optional</sup> <a name="supportsClassBInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassBInput"></a>

```java
public java.lang.Boolean|IResolvable getSupportsClassBInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `supportsClassCInput`<sup>Optional</sup> <a name="supportsClassCInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassCInput"></a>

```java
public java.lang.Boolean|IResolvable getSupportsClassCInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `supportsJoinInput`<sup>Optional</sup> <a name="supportsJoinInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoinInput"></a>

```java
public java.lang.Boolean|IResolvable getSupportsJoinInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `classBTimeout`<sup>Required</sup> <a name="classBTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classBTimeout"></a>

```java
public java.lang.Number getClassBTimeout();
```

- *Type:* java.lang.Number

---

##### `classCTimeout`<sup>Required</sup> <a name="classCTimeout" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.classCTimeout"></a>

```java
public java.lang.Number getClassCTimeout();
```

- *Type:* java.lang.Number

---

##### `factoryPresetFreqsList`<sup>Required</sup> <a name="factoryPresetFreqsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.factoryPresetFreqsList"></a>

```java
public java.util.List<java.lang.Number> getFactoryPresetFreqsList();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `macVersion`<sup>Required</sup> <a name="macVersion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.macVersion"></a>

```java
public java.lang.String getMacVersion();
```

- *Type:* java.lang.String

---

##### `maxDutyCycle`<sup>Required</sup> <a name="maxDutyCycle" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxDutyCycle"></a>

```java
public java.lang.Number getMaxDutyCycle();
```

- *Type:* java.lang.Number

---

##### `maxEirp`<sup>Required</sup> <a name="maxEirp" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.maxEirp"></a>

```java
public java.lang.Number getMaxEirp();
```

- *Type:* java.lang.Number

---

##### `pingSlotDr`<sup>Required</sup> <a name="pingSlotDr" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotDr"></a>

```java
public java.lang.Number getPingSlotDr();
```

- *Type:* java.lang.Number

---

##### `pingSlotFreq`<sup>Required</sup> <a name="pingSlotFreq" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotFreq"></a>

```java
public java.lang.Number getPingSlotFreq();
```

- *Type:* java.lang.Number

---

##### `pingSlotPeriod`<sup>Required</sup> <a name="pingSlotPeriod" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.pingSlotPeriod"></a>

```java
public java.lang.Number getPingSlotPeriod();
```

- *Type:* java.lang.Number

---

##### `regParamsRevision`<sup>Required</sup> <a name="regParamsRevision" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.regParamsRevision"></a>

```java
public java.lang.String getRegParamsRevision();
```

- *Type:* java.lang.String

---

##### `rfRegion`<sup>Required</sup> <a name="rfRegion" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rfRegion"></a>

```java
public java.lang.String getRfRegion();
```

- *Type:* java.lang.String

---

##### `rxDataRate2`<sup>Required</sup> <a name="rxDataRate2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDataRate2"></a>

```java
public java.lang.Number getRxDataRate2();
```

- *Type:* java.lang.Number

---

##### `rxDelay1`<sup>Required</sup> <a name="rxDelay1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDelay1"></a>

```java
public java.lang.Number getRxDelay1();
```

- *Type:* java.lang.Number

---

##### `rxDrOffset1`<sup>Required</sup> <a name="rxDrOffset1" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxDrOffset1"></a>

```java
public java.lang.Number getRxDrOffset1();
```

- *Type:* java.lang.Number

---

##### `rxFreq2`<sup>Required</sup> <a name="rxFreq2" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.rxFreq2"></a>

```java
public java.lang.Number getRxFreq2();
```

- *Type:* java.lang.Number

---

##### `supports32BitFCnt`<sup>Required</sup> <a name="supports32BitFCnt" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supports32BitFCnt"></a>

```java
public java.lang.Boolean|IResolvable getSupports32BitFCnt();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `supportsClassB`<sup>Required</sup> <a name="supportsClassB" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassB"></a>

```java
public java.lang.Boolean|IResolvable getSupportsClassB();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `supportsClassC`<sup>Required</sup> <a name="supportsClassC" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsClassC"></a>

```java
public java.lang.Boolean|IResolvable getSupportsClassC();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `supportsJoin`<sup>Required</sup> <a name="supportsJoin" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.supportsJoin"></a>

```java
public java.lang.Boolean|IResolvable getSupportsJoin();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWanOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessDeviceProfileLoRaWan getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileLoRaWan">IotwirelessDeviceProfileLoRaWan</a>

---


### IotwirelessDeviceProfileTagsList <a name="IotwirelessDeviceProfileTagsList" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_device_profile.IotwirelessDeviceProfileTagsList;

new IotwirelessDeviceProfileTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.get"></a>

```java
public IotwirelessDeviceProfileTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotwirelessDeviceProfileTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>>

---


### IotwirelessDeviceProfileTagsOutputReference <a name="IotwirelessDeviceProfileTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_device_profile.IotwirelessDeviceProfileTagsOutputReference;

new IotwirelessDeviceProfileTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessDeviceProfileTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessDeviceProfile.IotwirelessDeviceProfileTags">IotwirelessDeviceProfileTags</a>

---



