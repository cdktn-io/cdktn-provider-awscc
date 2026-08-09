# `iotwirelessWirelessGateway` Submodule <a name="`iotwirelessWirelessGateway` Submodule" id="@cdktn/provider-awscc.iotwirelessWirelessGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessWirelessGateway <a name="IotwirelessWirelessGateway" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway awscc_iotwireless_wireless_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_gateway.IotwirelessWirelessGateway;

IotwirelessWirelessGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .loRaWan(IotwirelessWirelessGatewayLoRaWan)
//  .description(java.lang.String)
//  .lastUplinkReceivedAt(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<IotwirelessWirelessGatewayTags>)
//  .thingArn(java.lang.String)
//  .thingName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a></code> | The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of Wireless Gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.lastUplinkReceivedAt">lastUplinkReceivedAt</a></code> | <code>java.lang.String</code> | The date and time when the most recent uplink was received. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of Wireless Gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>></code> | A list of key-value pairs that contain metadata for the gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.thingArn">thingArn</a></code> | <code>java.lang.String</code> | Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.thingName">thingName</a></code> | <code>java.lang.String</code> | Thing Name. If there is a Thing created, this can be returned with a Get call. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.loRaWan"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a>

The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#lo_ra_wan IotwirelessWirelessGateway#lo_ra_wan}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of Wireless Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#description IotwirelessWirelessGateway#description}

---

##### `lastUplinkReceivedAt`<sup>Optional</sup> <a name="lastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.lastUplinkReceivedAt"></a>

- *Type:* java.lang.String

The date and time when the most recent uplink was received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#last_uplink_received_at IotwirelessWirelessGateway#last_uplink_received_at}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of Wireless Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#name IotwirelessWirelessGateway#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>>

A list of key-value pairs that contain metadata for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#tags IotwirelessWirelessGateway#tags}

---

##### `thingArn`<sup>Optional</sup> <a name="thingArn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.thingArn"></a>

- *Type:* java.lang.String

Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#thing_arn IotwirelessWirelessGateway#thing_arn}

---

##### `thingName`<sup>Optional</sup> <a name="thingName" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.Initializer.parameter.thingName"></a>

- *Type:* java.lang.String

Thing Name. If there is a Thing created, this can be returned with a Get call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#thing_name IotwirelessWirelessGateway#thing_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.putLoRaWan">putLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetLastUplinkReceivedAt">resetLastUplinkReceivedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetThingArn">resetThingArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetThingName">resetThingName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoRaWan` <a name="putLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.putLoRaWan"></a>

```java
public void putLoRaWan(IotwirelessWirelessGatewayLoRaWan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotwirelessWirelessGatewayTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLastUplinkReceivedAt` <a name="resetLastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetLastUplinkReceivedAt"></a>

```java
public void resetLastUplinkReceivedAt()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetTags"></a>

```java
public void resetTags()
```

##### `resetThingArn` <a name="resetThingArn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetThingArn"></a>

```java
public void resetThingArn()
```

##### `resetThingName` <a name="resetThingName" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.resetThingName"></a>

```java
public void resetThingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessWirelessGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_gateway.IotwirelessWirelessGateway;

IotwirelessWirelessGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_gateway.IotwirelessWirelessGateway;

IotwirelessWirelessGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_gateway.IotwirelessWirelessGateway;

IotwirelessWirelessGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_gateway.IotwirelessWirelessGateway;

IotwirelessWirelessGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotwirelessWirelessGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotwirelessWirelessGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotwirelessWirelessGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotwirelessWirelessGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessWirelessGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference">IotwirelessWirelessGatewayLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList">IotwirelessWirelessGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.wirelessGatewayId">wirelessGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.lastUplinkReceivedAtInput">lastUplinkReceivedAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.loRaWanInput">loRaWanInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingArnInput">thingArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingNameInput">thingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.lastUplinkReceivedAt">lastUplinkReceivedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingArn">thingArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingName">thingName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.loRaWan"></a>

```java
public IotwirelessWirelessGatewayLoRaWanOutputReference getLoRaWan();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference">IotwirelessWirelessGatewayLoRaWanOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.tags"></a>

```java
public IotwirelessWirelessGatewayTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList">IotwirelessWirelessGatewayTagsList</a>

---

##### `wirelessGatewayId`<sup>Required</sup> <a name="wirelessGatewayId" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.wirelessGatewayId"></a>

```java
public java.lang.String getWirelessGatewayId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `lastUplinkReceivedAtInput`<sup>Optional</sup> <a name="lastUplinkReceivedAtInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.lastUplinkReceivedAtInput"></a>

```java
public java.lang.String getLastUplinkReceivedAtInput();
```

- *Type:* java.lang.String

---

##### `loRaWanInput`<sup>Optional</sup> <a name="loRaWanInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.loRaWanInput"></a>

```java
public IResolvable|IotwirelessWirelessGatewayLoRaWan getLoRaWanInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotwirelessWirelessGatewayTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>>

---

##### `thingArnInput`<sup>Optional</sup> <a name="thingArnInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingArnInput"></a>

```java
public java.lang.String getThingArnInput();
```

- *Type:* java.lang.String

---

##### `thingNameInput`<sup>Optional</sup> <a name="thingNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingNameInput"></a>

```java
public java.lang.String getThingNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `lastUplinkReceivedAt`<sup>Required</sup> <a name="lastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.lastUplinkReceivedAt"></a>

```java
public java.lang.String getLastUplinkReceivedAt();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `thingArn`<sup>Required</sup> <a name="thingArn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingArn"></a>

```java
public java.lang.String getThingArn();
```

- *Type:* java.lang.String

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.thingName"></a>

```java
public java.lang.String getThingName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessWirelessGatewayConfig <a name="IotwirelessWirelessGatewayConfig" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_gateway.IotwirelessWirelessGatewayConfig;

IotwirelessWirelessGatewayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .loRaWan(IotwirelessWirelessGatewayLoRaWan)
//  .description(java.lang.String)
//  .lastUplinkReceivedAt(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<IotwirelessWirelessGatewayTags>)
//  .thingArn(java.lang.String)
//  .thingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a></code> | The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of Wireless Gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.lastUplinkReceivedAt">lastUplinkReceivedAt</a></code> | <code>java.lang.String</code> | The date and time when the most recent uplink was received. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of Wireless Gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>></code> | A list of key-value pairs that contain metadata for the gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.thingArn">thingArn</a></code> | <code>java.lang.String</code> | Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.thingName">thingName</a></code> | <code>java.lang.String</code> | Thing Name. If there is a Thing created, this can be returned with a Get call. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.loRaWan"></a>

```java
public IotwirelessWirelessGatewayLoRaWan getLoRaWan();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a>

The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#lo_ra_wan IotwirelessWirelessGateway#lo_ra_wan}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of Wireless Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#description IotwirelessWirelessGateway#description}

---

##### `lastUplinkReceivedAt`<sup>Optional</sup> <a name="lastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.lastUplinkReceivedAt"></a>

```java
public java.lang.String getLastUplinkReceivedAt();
```

- *Type:* java.lang.String

The date and time when the most recent uplink was received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#last_uplink_received_at IotwirelessWirelessGateway#last_uplink_received_at}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of Wireless Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#name IotwirelessWirelessGateway#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotwirelessWirelessGatewayTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>>

A list of key-value pairs that contain metadata for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#tags IotwirelessWirelessGateway#tags}

---

##### `thingArn`<sup>Optional</sup> <a name="thingArn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.thingArn"></a>

```java
public java.lang.String getThingArn();
```

- *Type:* java.lang.String

Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#thing_arn IotwirelessWirelessGateway#thing_arn}

---

##### `thingName`<sup>Optional</sup> <a name="thingName" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayConfig.property.thingName"></a>

```java
public java.lang.String getThingName();
```

- *Type:* java.lang.String

Thing Name. If there is a Thing created, this can be returned with a Get call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#thing_name IotwirelessWirelessGateway#thing_name}

---

### IotwirelessWirelessGatewayLoRaWan <a name="IotwirelessWirelessGatewayLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_gateway.IotwirelessWirelessGatewayLoRaWan;

IotwirelessWirelessGatewayLoRaWan.builder()
    .gatewayEui(java.lang.String)
    .rfRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan.property.gatewayEui">gatewayEui</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#gateway_eui IotwirelessWirelessGateway#gateway_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan.property.rfRegion">rfRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#rf_region IotwirelessWirelessGateway#rf_region}. |

---

##### `gatewayEui`<sup>Required</sup> <a name="gatewayEui" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan.property.gatewayEui"></a>

```java
public java.lang.String getGatewayEui();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#gateway_eui IotwirelessWirelessGateway#gateway_eui}.

---

##### `rfRegion`<sup>Required</sup> <a name="rfRegion" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan.property.rfRegion"></a>

```java
public java.lang.String getRfRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#rf_region IotwirelessWirelessGateway#rf_region}.

---

### IotwirelessWirelessGatewayTags <a name="IotwirelessWirelessGatewayTags" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_gateway.IotwirelessWirelessGatewayTags;

IotwirelessWirelessGatewayTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#key IotwirelessWirelessGateway#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#value IotwirelessWirelessGateway#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#key IotwirelessWirelessGateway#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_wireless_gateway#value IotwirelessWirelessGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessWirelessGatewayLoRaWanOutputReference <a name="IotwirelessWirelessGatewayLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_gateway.IotwirelessWirelessGatewayLoRaWanOutputReference;

new IotwirelessWirelessGatewayLoRaWanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.gatewayEuiInput">gatewayEuiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.rfRegionInput">rfRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.gatewayEui">gatewayEui</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.rfRegion">rfRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gatewayEuiInput`<sup>Optional</sup> <a name="gatewayEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.gatewayEuiInput"></a>

```java
public java.lang.String getGatewayEuiInput();
```

- *Type:* java.lang.String

---

##### `rfRegionInput`<sup>Optional</sup> <a name="rfRegionInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.rfRegionInput"></a>

```java
public java.lang.String getRfRegionInput();
```

- *Type:* java.lang.String

---

##### `gatewayEui`<sup>Required</sup> <a name="gatewayEui" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.gatewayEui"></a>

```java
public java.lang.String getGatewayEui();
```

- *Type:* java.lang.String

---

##### `rfRegion`<sup>Required</sup> <a name="rfRegion" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.rfRegion"></a>

```java
public java.lang.String getRfRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWanOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessWirelessGatewayLoRaWan getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayLoRaWan">IotwirelessWirelessGatewayLoRaWan</a>

---


### IotwirelessWirelessGatewayTagsList <a name="IotwirelessWirelessGatewayTagsList" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_gateway.IotwirelessWirelessGatewayTagsList;

new IotwirelessWirelessGatewayTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.get"></a>

```java
public IotwirelessWirelessGatewayTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotwirelessWirelessGatewayTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>>

---


### IotwirelessWirelessGatewayTagsOutputReference <a name="IotwirelessWirelessGatewayTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_wireless_gateway.IotwirelessWirelessGatewayTagsOutputReference;

new IotwirelessWirelessGatewayTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessWirelessGatewayTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessWirelessGateway.IotwirelessWirelessGatewayTags">IotwirelessWirelessGatewayTags</a>

---



