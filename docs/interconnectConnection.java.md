# `interconnectConnection` Submodule <a name="`interconnectConnection` Submodule" id="@cdktn/provider-awscc.interconnectConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InterconnectConnection <a name="InterconnectConnection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection awscc_interconnect_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnection;

InterconnectConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .attachPoint(InterconnectConnectionAttachPoint)
//  .activationKey(java.lang.String)
//  .bandwidth(java.lang.String)
//  .description(java.lang.String)
//  .environmentId(java.lang.String)
//  .remoteAccount(InterconnectConnectionRemoteAccount)
//  .remoteOwnerAccount(java.lang.String)
//  .tags(IResolvable|java.util.List<InterconnectConnectionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.attachPoint">attachPoint</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | The logical attachment point in your AWS network where the managed connection will be connected. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.activationKey">activationKey</a></code> | <code>java.lang.String</code> | The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the connection. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.environmentId">environmentId</a></code> | <code>java.lang.String</code> | The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.remoteAccount">remoteAccount</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.remoteOwnerAccount">remoteOwnerAccount</a></code> | <code>java.lang.String</code> | Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attachPoint`<sup>Required</sup> <a name="attachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.attachPoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

The logical attachment point in your AWS network where the managed connection will be connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#attach_point InterconnectConnection#attach_point}

---

##### `activationKey`<sup>Optional</sup> <a name="activationKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.activationKey"></a>

- *Type:* java.lang.String

The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#activation_key InterconnectConnection#activation_key}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.bandwidth"></a>

- *Type:* java.lang.String

The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#bandwidth InterconnectConnection#bandwidth}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#description InterconnectConnection#description}

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.environmentId"></a>

- *Type:* java.lang.String

The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#environment_id InterconnectConnection#environment_id}

---

##### `remoteAccount`<sup>Optional</sup> <a name="remoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.remoteAccount"></a>

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#remote_account InterconnectConnection#remote_account}

---

##### `remoteOwnerAccount`<sup>Optional</sup> <a name="remoteOwnerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.remoteOwnerAccount"></a>

- *Type:* java.lang.String

Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#remote_owner_account InterconnectConnection#remote_owner_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#tags InterconnectConnection#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint">putAttachPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putRemoteAccount">putRemoteAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetActivationKey">resetActivationKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteAccount">resetRemoteAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteOwnerAccount">resetRemoteOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttachPoint` <a name="putAttachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint"></a>

```java
public void putAttachPoint(InterconnectConnectionAttachPoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

---

##### `putRemoteAccount` <a name="putRemoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putRemoteAccount"></a>

```java
public void putRemoteAccount(InterconnectConnectionRemoteAccount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putRemoteAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<InterconnectConnectionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>>

---

##### `resetActivationKey` <a name="resetActivationKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetActivationKey"></a>

```java
public void resetActivationKey()
```

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetBandwidth"></a>

```java
public void resetBandwidth()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetEnvironmentId"></a>

```java
public void resetEnvironmentId()
```

##### `resetRemoteAccount` <a name="resetRemoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteAccount"></a>

```java
public void resetRemoteAccount()
```

##### `resetRemoteOwnerAccount` <a name="resetRemoteOwnerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteOwnerAccount"></a>

```java
public void resetRemoteOwnerAccount()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a InterconnectConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isConstruct"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnection;

InterconnectConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnection;

InterconnectConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnection;

InterconnectConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnection;

InterconnectConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),InterconnectConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a InterconnectConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the InterconnectConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing InterconnectConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the InterconnectConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPoint">attachPoint</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference">InterconnectConnectionAttachPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.billingTier">billingTier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.ownerAccount">ownerAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.providerName">providerName</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference">InterconnectConnectionProviderNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccount">remoteAccount</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference">InterconnectConnectionRemoteAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.sharedId">sharedId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList">InterconnectConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKeyInput">activationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPointInput">attachPointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidthInput">bandwidthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccountInput">remoteAccountInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccountInput">remoteOwnerAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKey">activationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccount">remoteOwnerAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attachPoint`<sup>Required</sup> <a name="attachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPoint"></a>

```java
public InterconnectConnectionAttachPointOutputReference getAttachPoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference">InterconnectConnectionAttachPointOutputReference</a>

---

##### `billingTier`<sup>Required</sup> <a name="billingTier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.billingTier"></a>

```java
public java.lang.Number getBillingTier();
```

- *Type:* java.lang.Number

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.ownerAccount"></a>

```java
public java.lang.String getOwnerAccount();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.providerName"></a>

```java
public InterconnectConnectionProviderNameOutputReference getProviderName();
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference">InterconnectConnectionProviderNameOutputReference</a>

---

##### `remoteAccount`<sup>Required</sup> <a name="remoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccount"></a>

```java
public InterconnectConnectionRemoteAccountOutputReference getRemoteAccount();
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference">InterconnectConnectionRemoteAccountOutputReference</a>

---

##### `sharedId`<sup>Required</sup> <a name="sharedId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.sharedId"></a>

```java
public java.lang.String getSharedId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tags"></a>

```java
public InterconnectConnectionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList">InterconnectConnectionTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `activationKeyInput`<sup>Optional</sup> <a name="activationKeyInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKeyInput"></a>

```java
public java.lang.String getActivationKeyInput();
```

- *Type:* java.lang.String

---

##### `attachPointInput`<sup>Optional</sup> <a name="attachPointInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPointInput"></a>

```java
public IResolvable|InterconnectConnectionAttachPoint getAttachPointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidthInput"></a>

```java
public java.lang.String getBandwidthInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `remoteAccountInput`<sup>Optional</sup> <a name="remoteAccountInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccountInput"></a>

```java
public IResolvable|InterconnectConnectionRemoteAccount getRemoteAccountInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

---

##### `remoteOwnerAccountInput`<sup>Optional</sup> <a name="remoteOwnerAccountInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccountInput"></a>

```java
public java.lang.String getRemoteOwnerAccountInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tagsInput"></a>

```java
public IResolvable|java.util.List<InterconnectConnectionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>>

---

##### `activationKey`<sup>Required</sup> <a name="activationKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKey"></a>

```java
public java.lang.String getActivationKey();
```

- *Type:* java.lang.String

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidth"></a>

```java
public java.lang.String getBandwidth();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `remoteOwnerAccount`<sup>Required</sup> <a name="remoteOwnerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccount"></a>

```java
public java.lang.String getRemoteOwnerAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### InterconnectConnectionAttachPoint <a name="InterconnectConnectionAttachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnectionAttachPoint;

InterconnectConnectionAttachPoint.builder()
//  .arn(java.lang.String)
//  .directConnectGateway(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.arn">arn</a></code> | <code>java.lang.String</code> | The ARN of the resource to attach to. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.directConnectGateway">directConnectGateway</a></code> | <code>java.lang.String</code> | The ID of the Direct Connect Gateway to attach to. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The ARN of the resource to attach to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#arn InterconnectConnection#arn}

---

##### `directConnectGateway`<sup>Optional</sup> <a name="directConnectGateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.directConnectGateway"></a>

```java
public java.lang.String getDirectConnectGateway();
```

- *Type:* java.lang.String

The ID of the Direct Connect Gateway to attach to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#direct_connect_gateway InterconnectConnection#direct_connect_gateway}

---

### InterconnectConnectionConfig <a name="InterconnectConnectionConfig" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnectionConfig;

InterconnectConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .attachPoint(InterconnectConnectionAttachPoint)
//  .activationKey(java.lang.String)
//  .bandwidth(java.lang.String)
//  .description(java.lang.String)
//  .environmentId(java.lang.String)
//  .remoteAccount(InterconnectConnectionRemoteAccount)
//  .remoteOwnerAccount(java.lang.String)
//  .tags(IResolvable|java.util.List<InterconnectConnectionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.attachPoint">attachPoint</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | The logical attachment point in your AWS network where the managed connection will be connected. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.activationKey">activationKey</a></code> | <code>java.lang.String</code> | The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.bandwidth">bandwidth</a></code> | <code>java.lang.String</code> | The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the connection. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteAccount">remoteAccount</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteOwnerAccount">remoteOwnerAccount</a></code> | <code>java.lang.String</code> | Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attachPoint`<sup>Required</sup> <a name="attachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.attachPoint"></a>

```java
public InterconnectConnectionAttachPoint getAttachPoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

The logical attachment point in your AWS network where the managed connection will be connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#attach_point InterconnectConnection#attach_point}

---

##### `activationKey`<sup>Optional</sup> <a name="activationKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.activationKey"></a>

```java
public java.lang.String getActivationKey();
```

- *Type:* java.lang.String

The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#activation_key InterconnectConnection#activation_key}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.bandwidth"></a>

```java
public java.lang.String getBandwidth();
```

- *Type:* java.lang.String

The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#bandwidth InterconnectConnection#bandwidth}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#description InterconnectConnection#description}

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#environment_id InterconnectConnection#environment_id}

---

##### `remoteAccount`<sup>Optional</sup> <a name="remoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteAccount"></a>

```java
public InterconnectConnectionRemoteAccount getRemoteAccount();
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#remote_account InterconnectConnection#remote_account}

---

##### `remoteOwnerAccount`<sup>Optional</sup> <a name="remoteOwnerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteOwnerAccount"></a>

```java
public java.lang.String getRemoteOwnerAccount();
```

- *Type:* java.lang.String

Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#remote_owner_account InterconnectConnection#remote_owner_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<InterconnectConnectionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#tags InterconnectConnection#tags}

---

### InterconnectConnectionProviderName <a name="InterconnectConnectionProviderName" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName.Initializer"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnectionProviderName;

InterconnectConnectionProviderName.builder()
    .build();
```


### InterconnectConnectionRemoteAccount <a name="InterconnectConnectionRemoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount.Initializer"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnectionRemoteAccount;

InterconnectConnectionRemoteAccount.builder()
//  .identifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount.property.identifier">identifier</a></code> | <code>java.lang.String</code> | The identifier of the remote account. |

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

The identifier of the remote account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#identifier InterconnectConnection#identifier}

---

### InterconnectConnectionTags <a name="InterconnectConnectionTags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnectionTags;

InterconnectConnectionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#key InterconnectConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/interconnect_connection#value InterconnectConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### InterconnectConnectionAttachPointOutputReference <a name="InterconnectConnectionAttachPointOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnectionAttachPointOutputReference;

new InterconnectConnectionAttachPointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetDirectConnectGateway">resetDirectConnectGateway</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetDirectConnectGateway` <a name="resetDirectConnectGateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetDirectConnectGateway"></a>

```java
public void resetDirectConnectGateway()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGatewayInput">directConnectGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGateway">directConnectGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `directConnectGatewayInput`<sup>Optional</sup> <a name="directConnectGatewayInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGatewayInput"></a>

```java
public java.lang.String getDirectConnectGatewayInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `directConnectGateway`<sup>Required</sup> <a name="directConnectGateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGateway"></a>

```java
public java.lang.String getDirectConnectGateway();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.internalValue"></a>

```java
public IResolvable|InterconnectConnectionAttachPoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

---


### InterconnectConnectionProviderNameOutputReference <a name="InterconnectConnectionProviderNameOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnectionProviderNameOutputReference;

new InterconnectConnectionProviderNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.cloudServiceProvider">cloudServiceProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.lastMileProvider">lastMileProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName">InterconnectConnectionProviderName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudServiceProvider`<sup>Required</sup> <a name="cloudServiceProvider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.cloudServiceProvider"></a>

```java
public java.lang.String getCloudServiceProvider();
```

- *Type:* java.lang.String

---

##### `lastMileProvider`<sup>Required</sup> <a name="lastMileProvider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.lastMileProvider"></a>

```java
public java.lang.String getLastMileProvider();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.internalValue"></a>

```java
public InterconnectConnectionProviderName getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName">InterconnectConnectionProviderName</a>

---


### InterconnectConnectionRemoteAccountOutputReference <a name="InterconnectConnectionRemoteAccountOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnectionRemoteAccountOutputReference;

new InterconnectConnectionRemoteAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resetIdentifier"></a>

```java
public void resetIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.internalValue"></a>

```java
public IResolvable|InterconnectConnectionRemoteAccount getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

---


### InterconnectConnectionTagsList <a name="InterconnectConnectionTagsList" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnectionTagsList;

new InterconnectConnectionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.get"></a>

```java
public InterconnectConnectionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<InterconnectConnectionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>>

---


### InterconnectConnectionTagsOutputReference <a name="InterconnectConnectionTagsOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.interconnect_connection.InterconnectConnectionTagsOutputReference;

new InterconnectConnectionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|InterconnectConnectionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>

---



