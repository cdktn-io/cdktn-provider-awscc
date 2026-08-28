# `ec2TransitGatewayConnectPeer` Submodule <a name="`ec2TransitGatewayConnectPeer` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayConnectPeer <a name="Ec2TransitGatewayConnectPeer" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer awscc_ec2_transit_gateway_connect_peer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeer;

Ec2TransitGatewayConnectPeer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectPeerConfiguration(Ec2TransitGatewayConnectPeerConnectPeerConfiguration)
    .transitGatewayAttachmentId(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2TransitGatewayConnectPeerTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.connectPeerConfiguration">connectPeerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration">Ec2TransitGatewayConnectPeerConnectPeerConfiguration</a></code> | The Connect peer details. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | The ID of the Connect attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags">Ec2TransitGatewayConnectPeerTags</a>></code> | The tags for the Connect Peer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectPeerConfiguration`<sup>Required</sup> <a name="connectPeerConfiguration" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.connectPeerConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration">Ec2TransitGatewayConnectPeerConnectPeerConfiguration</a>

The Connect peer details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer#connect_peer_configuration Ec2TransitGatewayConnectPeer#connect_peer_configuration}

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* java.lang.String

The ID of the Connect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags">Ec2TransitGatewayConnectPeerTags</a>>

The tags for the Connect Peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putConnectPeerConfiguration">putConnectPeerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectPeerConfiguration` <a name="putConnectPeerConfiguration" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putConnectPeerConfiguration"></a>

```java
public void putConnectPeerConfiguration(Ec2TransitGatewayConnectPeerConnectPeerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putConnectPeerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration">Ec2TransitGatewayConnectPeerConnectPeerConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2TransitGatewayConnectPeerTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags">Ec2TransitGatewayConnectPeerTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayConnectPeer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeer;

Ec2TransitGatewayConnectPeer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeer;

Ec2TransitGatewayConnectPeer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeer;

Ec2TransitGatewayConnectPeer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeer;

Ec2TransitGatewayConnectPeer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2TransitGatewayConnectPeer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2TransitGatewayConnectPeer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2TransitGatewayConnectPeer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2TransitGatewayConnectPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayConnectPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.connectPeerConfiguration">connectPeerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference">Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList">Ec2TransitGatewayConnectPeerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayConnectPeerId">transitGatewayConnectPeerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.connectPeerConfigurationInput">connectPeerConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration">Ec2TransitGatewayConnectPeerConnectPeerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags">Ec2TransitGatewayConnectPeerTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectPeerConfiguration`<sup>Required</sup> <a name="connectPeerConfiguration" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.connectPeerConfiguration"></a>

```java
public Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference getConnectPeerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference">Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tags"></a>

```java
public Ec2TransitGatewayConnectPeerTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList">Ec2TransitGatewayConnectPeerTagsList</a>

---

##### `transitGatewayConnectPeerId`<sup>Required</sup> <a name="transitGatewayConnectPeerId" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayConnectPeerId"></a>

```java
public java.lang.String getTransitGatewayConnectPeerId();
```

- *Type:* java.lang.String

---

##### `connectPeerConfigurationInput`<sup>Optional</sup> <a name="connectPeerConfigurationInput" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.connectPeerConfigurationInput"></a>

```java
public IResolvable|Ec2TransitGatewayConnectPeerConnectPeerConfiguration getConnectPeerConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration">Ec2TransitGatewayConnectPeerConnectPeerConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2TransitGatewayConnectPeerTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags">Ec2TransitGatewayConnectPeerTags</a>>

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAttachmentIdInput"></a>

```java
public java.lang.String getTransitGatewayAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayConnectPeerConfig <a name="Ec2TransitGatewayConnectPeerConfig" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeerConfig;

Ec2TransitGatewayConnectPeerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectPeerConfiguration(Ec2TransitGatewayConnectPeerConnectPeerConfiguration)
    .transitGatewayAttachmentId(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2TransitGatewayConnectPeerTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.connectPeerConfiguration">connectPeerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration">Ec2TransitGatewayConnectPeerConnectPeerConfiguration</a></code> | The Connect peer details. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | The ID of the Connect attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags">Ec2TransitGatewayConnectPeerTags</a>></code> | The tags for the Connect Peer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectPeerConfiguration`<sup>Required</sup> <a name="connectPeerConfiguration" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.connectPeerConfiguration"></a>

```java
public Ec2TransitGatewayConnectPeerConnectPeerConfiguration getConnectPeerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration">Ec2TransitGatewayConnectPeerConnectPeerConfiguration</a>

The Connect peer details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer#connect_peer_configuration Ec2TransitGatewayConnectPeer#connect_peer_configuration}

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

The ID of the Connect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2TransitGatewayConnectPeerTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags">Ec2TransitGatewayConnectPeerTags</a>>

The tags for the Connect Peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}

---

### Ec2TransitGatewayConnectPeerConnectPeerConfiguration <a name="Ec2TransitGatewayConnectPeerConnectPeerConfiguration" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration;

Ec2TransitGatewayConnectPeerConnectPeerConfiguration.builder()
    .insideCidrBlocks(java.util.List<java.lang.String>)
    .peerAddress(java.lang.String)
//  .transitGatewayAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | The range of interior BGP peer IP addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | The peer IP address (GRE outer IP address) on the appliance side of the Connect peer. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration.property.transitGatewayAddress">transitGatewayAddress</a></code> | <code>java.lang.String</code> | The Connect peer IP address on the transit gateway side of the tunnel. |

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration.property.insideCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

The range of interior BGP peer IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer#inside_cidr_blocks Ec2TransitGatewayConnectPeer#inside_cidr_blocks}

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

The peer IP address (GRE outer IP address) on the appliance side of the Connect peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer#peer_address Ec2TransitGatewayConnectPeer#peer_address}

---

##### `transitGatewayAddress`<sup>Optional</sup> <a name="transitGatewayAddress" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration.property.transitGatewayAddress"></a>

```java
public java.lang.String getTransitGatewayAddress();
```

- *Type:* java.lang.String

The Connect peer IP address on the transit gateway side of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer#transit_gateway_address Ec2TransitGatewayConnectPeer#transit_gateway_address}

---

### Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations <a name="Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations;

Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations.builder()
    .build();
```


### Ec2TransitGatewayConnectPeerTags <a name="Ec2TransitGatewayConnectPeerTags" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeerTags;

Ec2TransitGatewayConnectPeerTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws: .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer#key Ec2TransitGatewayConnectPeer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_transit_gateway_connect_peer#value Ec2TransitGatewayConnectPeer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList <a name="Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList;

new Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.get"></a>

```java
public Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference <a name="Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference;

new Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.bgpStatus">bgpStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.transitGatewayAddress">transitGatewayAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.transitGatewayAsn">transitGatewayAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations">Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bgpStatus`<sup>Required</sup> <a name="bgpStatus" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.bgpStatus"></a>

```java
public java.lang.String getBgpStatus();
```

- *Type:* java.lang.String

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAsn"></a>

```java
public java.lang.Number getPeerAsn();
```

- *Type:* java.lang.Number

---

##### `transitGatewayAddress`<sup>Required</sup> <a name="transitGatewayAddress" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.transitGatewayAddress"></a>

```java
public java.lang.String getTransitGatewayAddress();
```

- *Type:* java.lang.String

---

##### `transitGatewayAsn`<sup>Required</sup> <a name="transitGatewayAsn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.transitGatewayAsn"></a>

```java
public java.lang.Number getTransitGatewayAsn();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference.property.internalValue"></a>

```java
public Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations">Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations</a>

---


### Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference <a name="Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference;

new Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.resetTransitGatewayAddress">resetTransitGatewayAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransitGatewayAddress` <a name="resetTransitGatewayAddress" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.resetTransitGatewayAddress"></a>

```java
public void resetTransitGatewayAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.bgpConfigurations">bgpConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList">Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.insideCidrBlocksInput">insideCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.peerAddressInput">peerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.transitGatewayAddressInput">transitGatewayAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.transitGatewayAddress">transitGatewayAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration">Ec2TransitGatewayConnectPeerConnectPeerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bgpConfigurations`<sup>Required</sup> <a name="bgpConfigurations" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.bgpConfigurations"></a>

```java
public Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList getBgpConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList">Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `insideCidrBlocksInput`<sup>Optional</sup> <a name="insideCidrBlocksInput" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.insideCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerAddressInput`<sup>Optional</sup> <a name="peerAddressInput" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.peerAddressInput"></a>

```java
public java.lang.String getPeerAddressInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayAddressInput`<sup>Optional</sup> <a name="transitGatewayAddressInput" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.transitGatewayAddressInput"></a>

```java
public java.lang.String getTransitGatewayAddressInput();
```

- *Type:* java.lang.String

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.insideCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

---

##### `transitGatewayAddress`<sup>Required</sup> <a name="transitGatewayAddress" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.transitGatewayAddress"></a>

```java
public java.lang.String getTransitGatewayAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2TransitGatewayConnectPeerConnectPeerConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerConnectPeerConfiguration">Ec2TransitGatewayConnectPeerConnectPeerConfiguration</a>

---


### Ec2TransitGatewayConnectPeerTagsList <a name="Ec2TransitGatewayConnectPeerTagsList" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeerTagsList;

new Ec2TransitGatewayConnectPeerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.get"></a>

```java
public Ec2TransitGatewayConnectPeerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags">Ec2TransitGatewayConnectPeerTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2TransitGatewayConnectPeerTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags">Ec2TransitGatewayConnectPeerTags</a>>

---


### Ec2TransitGatewayConnectPeerTagsOutputReference <a name="Ec2TransitGatewayConnectPeerTagsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_connect_peer.Ec2TransitGatewayConnectPeerTagsOutputReference;

new Ec2TransitGatewayConnectPeerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags">Ec2TransitGatewayConnectPeerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2TransitGatewayConnectPeerTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayConnectPeer.Ec2TransitGatewayConnectPeerTags">Ec2TransitGatewayConnectPeerTags</a>

---



