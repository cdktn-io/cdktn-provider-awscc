# `iotsecuretunnelingTunnel` Submodule <a name="`iotsecuretunnelingTunnel` Submodule" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsecuretunnelingTunnel <a name="IotsecuretunnelingTunnel" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel awscc_iotsecuretunneling_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnel;

IotsecuretunnelingTunnel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .destinationConfig(IotsecuretunnelingTunnelDestinationConfig)
//  .tags(IResolvable|java.util.List<IotsecuretunnelingTunnelTags>)
//  .timeoutConfig(IotsecuretunnelingTunnelTimeoutConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A short text description of the tunnel. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | The destination configuration for the tunnel. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>></code> | A collection of tag metadata. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | Timeout configuration for the tunnel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A short text description of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#description IotsecuretunnelingTunnel#description}

---

##### `destinationConfig`<sup>Optional</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.destinationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

The destination configuration for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#destination_config IotsecuretunnelingTunnel#destination_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>>

A collection of tag metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#tags IotsecuretunnelingTunnel#tags}

---

##### `timeoutConfig`<sup>Optional</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.timeoutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

Timeout configuration for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#timeout_config IotsecuretunnelingTunnel#timeout_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig">putDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTimeoutConfig">putTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDestinationConfig">resetDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTimeoutConfig">resetTimeoutConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationConfig` <a name="putDestinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig"></a>

```java
public void putDestinationConfig(IotsecuretunnelingTunnelDestinationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotsecuretunnelingTunnelTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>>

---

##### `putTimeoutConfig` <a name="putTimeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTimeoutConfig"></a>

```java
public void putTimeoutConfig(IotsecuretunnelingTunnelTimeoutConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationConfig` <a name="resetDestinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDestinationConfig"></a>

```java
public void resetDestinationConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeoutConfig` <a name="resetTimeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTimeoutConfig"></a>

```java
public void resetTimeoutConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotsecuretunnelingTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnel;

IotsecuretunnelingTunnel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnel;

IotsecuretunnelingTunnel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnel;

IotsecuretunnelingTunnel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnel;

IotsecuretunnelingTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotsecuretunnelingTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotsecuretunnelingTunnel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotsecuretunnelingTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotsecuretunnelingTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotsecuretunnelingTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference">IotsecuretunnelingTunnelDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList">IotsecuretunnelingTunnelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference">IotsecuretunnelingTunnelTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelArn">tunnelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfigInput">destinationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfigInput">timeoutConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationConfig`<sup>Required</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfig"></a>

```java
public IotsecuretunnelingTunnelDestinationConfigOutputReference getDestinationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference">IotsecuretunnelingTunnelDestinationConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tags"></a>

```java
public IotsecuretunnelingTunnelTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList">IotsecuretunnelingTunnelTagsList</a>

---

##### `timeoutConfig`<sup>Required</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfig"></a>

```java
public IotsecuretunnelingTunnelTimeoutConfigOutputReference getTimeoutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference">IotsecuretunnelingTunnelTimeoutConfigOutputReference</a>

---

##### `tunnelArn`<sup>Required</sup> <a name="tunnelArn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelArn"></a>

```java
public java.lang.String getTunnelArn();
```

- *Type:* java.lang.String

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationConfigInput`<sup>Optional</sup> <a name="destinationConfigInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfigInput"></a>

```java
public IResolvable|IotsecuretunnelingTunnelDestinationConfig getDestinationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotsecuretunnelingTunnelTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>>

---

##### `timeoutConfigInput`<sup>Optional</sup> <a name="timeoutConfigInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfigInput"></a>

```java
public IResolvable|IotsecuretunnelingTunnelTimeoutConfig getTimeoutConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotsecuretunnelingTunnelConfig <a name="IotsecuretunnelingTunnelConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnelConfig;

IotsecuretunnelingTunnelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .destinationConfig(IotsecuretunnelingTunnelDestinationConfig)
//  .tags(IResolvable|java.util.List<IotsecuretunnelingTunnelTags>)
//  .timeoutConfig(IotsecuretunnelingTunnelTimeoutConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.description">description</a></code> | <code>java.lang.String</code> | A short text description of the tunnel. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | The destination configuration for the tunnel. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>></code> | A collection of tag metadata. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | Timeout configuration for the tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A short text description of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#description IotsecuretunnelingTunnel#description}

---

##### `destinationConfig`<sup>Optional</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.destinationConfig"></a>

```java
public IotsecuretunnelingTunnelDestinationConfig getDestinationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

The destination configuration for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#destination_config IotsecuretunnelingTunnel#destination_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotsecuretunnelingTunnelTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>>

A collection of tag metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#tags IotsecuretunnelingTunnel#tags}

---

##### `timeoutConfig`<sup>Optional</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.timeoutConfig"></a>

```java
public IotsecuretunnelingTunnelTimeoutConfig getTimeoutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

Timeout configuration for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#timeout_config IotsecuretunnelingTunnel#timeout_config}

---

### IotsecuretunnelingTunnelDestinationConfig <a name="IotsecuretunnelingTunnelDestinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnelDestinationConfig;

IotsecuretunnelingTunnelDestinationConfig.builder()
//  .services(java.util.List<java.lang.String>)
//  .thingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | A list of service names that identify the target application. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.thingName">thingName</a></code> | <code>java.lang.String</code> | The name of the IoT thing to which you want to connect. |

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

A list of service names that identify the target application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#services IotsecuretunnelingTunnel#services}

---

##### `thingName`<sup>Optional</sup> <a name="thingName" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.thingName"></a>

```java
public java.lang.String getThingName();
```

- *Type:* java.lang.String

The name of the IoT thing to which you want to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#thing_name IotsecuretunnelingTunnel#thing_name}

---

### IotsecuretunnelingTunnelTags <a name="IotsecuretunnelingTunnelTags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnelTags;

IotsecuretunnelingTunnelTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#key IotsecuretunnelingTunnel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#value IotsecuretunnelingTunnel#value}

---

### IotsecuretunnelingTunnelTimeoutConfig <a name="IotsecuretunnelingTunnelTimeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnelTimeoutConfig;

IotsecuretunnelingTunnelTimeoutConfig.builder()
//  .maxLifetimeTimeoutMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig.property.maxLifetimeTimeoutMinutes">maxLifetimeTimeoutMinutes</a></code> | <code>java.lang.Number</code> | The maximum amount of time (in minutes) a tunnel can remain open. |

---

##### `maxLifetimeTimeoutMinutes`<sup>Optional</sup> <a name="maxLifetimeTimeoutMinutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig.property.maxLifetimeTimeoutMinutes"></a>

```java
public java.lang.Number getMaxLifetimeTimeoutMinutes();
```

- *Type:* java.lang.Number

The maximum amount of time (in minutes) a tunnel can remain open.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#max_lifetime_timeout_minutes IotsecuretunnelingTunnel#max_lifetime_timeout_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### IotsecuretunnelingTunnelDestinationConfigOutputReference <a name="IotsecuretunnelingTunnelDestinationConfigOutputReference" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference;

new IotsecuretunnelingTunnelDestinationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetServices">resetServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetThingName">resetThingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServices` <a name="resetServices" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetServices"></a>

```java
public void resetServices()
```

##### `resetThingName` <a name="resetThingName" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetThingName"></a>

```java
public void resetThingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.servicesInput">servicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingNameInput">thingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingName">thingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.servicesInput"></a>

```java
public java.util.List<java.lang.String> getServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `thingNameInput`<sup>Optional</sup> <a name="thingNameInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingNameInput"></a>

```java
public java.lang.String getThingNameInput();
```

- *Type:* java.lang.String

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingName"></a>

```java
public java.lang.String getThingName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsecuretunnelingTunnelDestinationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

---


### IotsecuretunnelingTunnelTagsList <a name="IotsecuretunnelingTunnelTagsList" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnelTagsList;

new IotsecuretunnelingTunnelTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.get"></a>

```java
public IotsecuretunnelingTunnelTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotsecuretunnelingTunnelTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>>

---


### IotsecuretunnelingTunnelTagsOutputReference <a name="IotsecuretunnelingTunnelTagsOutputReference" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnelTagsOutputReference;

new IotsecuretunnelingTunnelTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsecuretunnelingTunnelTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>

---


### IotsecuretunnelingTunnelTimeoutConfigOutputReference <a name="IotsecuretunnelingTunnelTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsecuretunneling_tunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference;

new IotsecuretunnelingTunnelTimeoutConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resetMaxLifetimeTimeoutMinutes">resetMaxLifetimeTimeoutMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxLifetimeTimeoutMinutes` <a name="resetMaxLifetimeTimeoutMinutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resetMaxLifetimeTimeoutMinutes"></a>

```java
public void resetMaxLifetimeTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutesInput">maxLifetimeTimeoutMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutes">maxLifetimeTimeoutMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxLifetimeTimeoutMinutesInput`<sup>Optional</sup> <a name="maxLifetimeTimeoutMinutesInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutesInput"></a>

```java
public java.lang.Number getMaxLifetimeTimeoutMinutesInput();
```

- *Type:* java.lang.Number

---

##### `maxLifetimeTimeoutMinutes`<sup>Required</sup> <a name="maxLifetimeTimeoutMinutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutes"></a>

```java
public java.lang.Number getMaxLifetimeTimeoutMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsecuretunnelingTunnelTimeoutConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

---



