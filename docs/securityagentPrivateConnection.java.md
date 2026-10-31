# `securityagentPrivateConnection` Submodule <a name="`securityagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.securityagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentPrivateConnection <a name="SecurityagentPrivateConnection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection awscc_securityagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnection;

SecurityagentPrivateConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .privateConnectionName(java.lang.String)
//  .certificate(java.lang.String)
//  .mode(SecurityagentPrivateConnectionMode)
//  .tags(IResolvable|java.util.List<SecurityagentPrivateConnectionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.privateConnectionName">privateConnectionName</a></code> | <code>java.lang.String</code> | A unique name for the private connection within your account. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | The PEM-encoded certificate chain for the private connection. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.mode">mode</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | The configuration for the private connection. Specify either a service-managed or a self-managed mode. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>></code> | The tags attached to the private connection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `privateConnectionName`<sup>Required</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.privateConnectionName"></a>

- *Type:* java.lang.String

A unique name for the private connection within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#private_connection_name SecurityagentPrivateConnection#private_connection_name}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

The PEM-encoded certificate chain for the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#certificate SecurityagentPrivateConnection#certificate}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.mode"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

The configuration for the private connection. Specify either a service-managed or a self-managed mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#mode SecurityagentPrivateConnection#mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>>

The tags attached to the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#tags SecurityagentPrivateConnection#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode">putMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMode` <a name="putMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode"></a>

```java
public void putMode(SecurityagentPrivateConnectionMode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SecurityagentPrivateConnectionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>>

---

##### `resetCertificate` <a name="resetCertificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetMode"></a>

```java
public void resetMode()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnection;

SecurityagentPrivateConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnection;

SecurityagentPrivateConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnection;

SecurityagentPrivateConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnection;

SecurityagentPrivateConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityagentPrivateConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityagentPrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateExpiryTime">certificateExpiryTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dnsResolution">dnsResolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.hostAddress">hostAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.mode">mode</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference">SecurityagentPrivateConnectionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceGatewayId">resourceGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList">SecurityagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.modeInput">modeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionNameInput">privateConnectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionName">privateConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `certificateExpiryTime`<sup>Required</sup> <a name="certificateExpiryTime" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateExpiryTime"></a>

```java
public java.lang.String getCertificateExpiryTime();
```

- *Type:* java.lang.String

---

##### `dnsResolution`<sup>Required</sup> <a name="dnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dnsResolution"></a>

```java
public java.lang.String getDnsResolution();
```

- *Type:* java.lang.String

---

##### `hostAddress`<sup>Required</sup> <a name="hostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.hostAddress"></a>

```java
public java.lang.String getHostAddress();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.mode"></a>

```java
public SecurityagentPrivateConnectionModeOutputReference getMode();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference">SecurityagentPrivateConnectionModeOutputReference</a>

---

##### `resourceConfigurationId`<sup>Required</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceConfigurationId"></a>

```java
public java.lang.String getResourceConfigurationId();
```

- *Type:* java.lang.String

---

##### `resourceGatewayId`<sup>Required</sup> <a name="resourceGatewayId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceGatewayId"></a>

```java
public java.lang.String getResourceGatewayId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tags"></a>

```java
public SecurityagentPrivateConnectionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList">SecurityagentPrivateConnectionTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.modeInput"></a>

```java
public IResolvable|SecurityagentPrivateConnectionMode getModeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

---

##### `privateConnectionNameInput`<sup>Optional</sup> <a name="privateConnectionNameInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionNameInput"></a>

```java
public java.lang.String getPrivateConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SecurityagentPrivateConnectionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `privateConnectionName`<sup>Required</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionName"></a>

```java
public java.lang.String getPrivateConnectionName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentPrivateConnectionConfig <a name="SecurityagentPrivateConnectionConfig" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnectionConfig;

SecurityagentPrivateConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .privateConnectionName(java.lang.String)
//  .certificate(java.lang.String)
//  .mode(SecurityagentPrivateConnectionMode)
//  .tags(IResolvable|java.util.List<SecurityagentPrivateConnectionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.privateConnectionName">privateConnectionName</a></code> | <code>java.lang.String</code> | A unique name for the private connection within your account. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | The PEM-encoded certificate chain for the private connection. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.mode">mode</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | The configuration for the private connection. Specify either a service-managed or a self-managed mode. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>></code> | The tags attached to the private connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `privateConnectionName`<sup>Required</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.privateConnectionName"></a>

```java
public java.lang.String getPrivateConnectionName();
```

- *Type:* java.lang.String

A unique name for the private connection within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#private_connection_name SecurityagentPrivateConnection#private_connection_name}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

The PEM-encoded certificate chain for the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#certificate SecurityagentPrivateConnection#certificate}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.mode"></a>

```java
public SecurityagentPrivateConnectionMode getMode();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

The configuration for the private connection. Specify either a service-managed or a self-managed mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#mode SecurityagentPrivateConnection#mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SecurityagentPrivateConnectionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>>

The tags attached to the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#tags SecurityagentPrivateConnection#tags}

---

### SecurityagentPrivateConnectionMode <a name="SecurityagentPrivateConnectionMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnectionMode;

SecurityagentPrivateConnectionMode.builder()
//  .selfManaged(SecurityagentPrivateConnectionModeSelfManaged)
//  .serviceManaged(SecurityagentPrivateConnectionModeServiceManaged)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | The configuration for a self-managed private connection, where you manage your own resource configuration. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.serviceManaged">serviceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle. |

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.selfManaged"></a>

```java
public SecurityagentPrivateConnectionModeSelfManaged getSelfManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

The configuration for a self-managed private connection, where you manage your own resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#self_managed SecurityagentPrivateConnection#self_managed}

---

##### `serviceManaged`<sup>Optional</sup> <a name="serviceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.serviceManaged"></a>

```java
public SecurityagentPrivateConnectionModeServiceManaged getServiceManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#service_managed SecurityagentPrivateConnection#service_managed}

---

### SecurityagentPrivateConnectionModeSelfManaged <a name="SecurityagentPrivateConnectionModeSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnectionModeSelfManaged;

SecurityagentPrivateConnectionModeSelfManaged.builder()
//  .resourceConfigurationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>java.lang.String</code> | The identifier or ARN of the resource configuration. |

---

##### `resourceConfigurationId`<sup>Optional</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.property.resourceConfigurationId"></a>

```java
public java.lang.String getResourceConfigurationId();
```

- *Type:* java.lang.String

The identifier or ARN of the resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#resource_configuration_id SecurityagentPrivateConnection#resource_configuration_id}

---

### SecurityagentPrivateConnectionModeServiceManaged <a name="SecurityagentPrivateConnectionModeServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnectionModeServiceManaged;

SecurityagentPrivateConnectionModeServiceManaged.builder()
//  .dnsResolution(java.lang.String)
//  .hostAddress(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .ipv4AddressesPerEni(java.lang.Number)
//  .portRanges(java.util.List<java.lang.String>)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.dnsResolution">dnsResolution</a></code> | <code>java.lang.String</code> | The DNS resolution mode for the resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.hostAddress">hostAddress</a></code> | <code>java.lang.String</code> | The IP address or DNS name of the target resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | The IP address type of the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipv4AddressesPerEni">ipv4AddressesPerEni</a></code> | <code>java.lang.Number</code> | The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.portRanges">portRanges</a></code> | <code>java.util.List<java.lang.String></code> | The TCP port ranges that a consumer can use to access the resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The security groups to attach to the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The subnets that the service-managed resource gateway spans. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The VPC to create the service-managed resource gateway in. |

---

##### `dnsResolution`<sup>Optional</sup> <a name="dnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.dnsResolution"></a>

```java
public java.lang.String getDnsResolution();
```

- *Type:* java.lang.String

The DNS resolution mode for the resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#dns_resolution SecurityagentPrivateConnection#dns_resolution}

---

##### `hostAddress`<sup>Optional</sup> <a name="hostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.hostAddress"></a>

```java
public java.lang.String getHostAddress();
```

- *Type:* java.lang.String

The IP address or DNS name of the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#host_address SecurityagentPrivateConnection#host_address}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

The IP address type of the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#ip_address_type SecurityagentPrivateConnection#ip_address_type}

---

##### `ipv4AddressesPerEni`<sup>Optional</sup> <a name="ipv4AddressesPerEni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipv4AddressesPerEni"></a>

```java
public java.lang.Number getIpv4AddressesPerEni();
```

- *Type:* java.lang.Number

The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#ipv_4_addresses_per_eni SecurityagentPrivateConnection#ipv_4_addresses_per_eni}

---

##### `portRanges`<sup>Optional</sup> <a name="portRanges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.portRanges"></a>

```java
public java.util.List<java.lang.String> getPortRanges();
```

- *Type:* java.util.List<java.lang.String>

The TCP port ranges that a consumer can use to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#port_ranges SecurityagentPrivateConnection#port_ranges}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The security groups to attach to the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#security_group_ids SecurityagentPrivateConnection#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The subnets that the service-managed resource gateway spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#subnet_ids SecurityagentPrivateConnection#subnet_ids}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The VPC to create the service-managed resource gateway in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#vpc_id SecurityagentPrivateConnection#vpc_id}

---

### SecurityagentPrivateConnectionTags <a name="SecurityagentPrivateConnectionTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnectionTags;

SecurityagentPrivateConnectionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#key SecurityagentPrivateConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#value SecurityagentPrivateConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentPrivateConnectionModeOutputReference <a name="SecurityagentPrivateConnectionModeOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnectionModeOutputReference;

new SecurityagentPrivateConnectionModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged">putSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged">putServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetSelfManaged">resetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetServiceManaged">resetServiceManaged</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelfManaged` <a name="putSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged"></a>

```java
public void putSelfManaged(SecurityagentPrivateConnectionModeSelfManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

---

##### `putServiceManaged` <a name="putServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged"></a>

```java
public void putServiceManaged(SecurityagentPrivateConnectionModeServiceManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

---

##### `resetSelfManaged` <a name="resetSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetSelfManaged"></a>

```java
public void resetSelfManaged()
```

##### `resetServiceManaged` <a name="resetServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetServiceManaged"></a>

```java
public void resetServiceManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference">SecurityagentPrivateConnectionModeSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManaged">serviceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference">SecurityagentPrivateConnectionModeServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManagedInput">selfManagedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManagedInput">serviceManagedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `selfManaged`<sup>Required</sup> <a name="selfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManaged"></a>

```java
public SecurityagentPrivateConnectionModeSelfManagedOutputReference getSelfManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference">SecurityagentPrivateConnectionModeSelfManagedOutputReference</a>

---

##### `serviceManaged`<sup>Required</sup> <a name="serviceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManaged"></a>

```java
public SecurityagentPrivateConnectionModeServiceManagedOutputReference getServiceManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference">SecurityagentPrivateConnectionModeServiceManagedOutputReference</a>

---

##### `selfManagedInput`<sup>Optional</sup> <a name="selfManagedInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManagedInput"></a>

```java
public IResolvable|SecurityagentPrivateConnectionModeSelfManaged getSelfManagedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

---

##### `serviceManagedInput`<sup>Optional</sup> <a name="serviceManagedInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManagedInput"></a>

```java
public IResolvable|SecurityagentPrivateConnectionModeServiceManaged getServiceManagedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentPrivateConnectionMode getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

---


### SecurityagentPrivateConnectionModeSelfManagedOutputReference <a name="SecurityagentPrivateConnectionModeSelfManagedOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnectionModeSelfManagedOutputReference;

new SecurityagentPrivateConnectionModeSelfManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resetResourceConfigurationId">resetResourceConfigurationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceConfigurationId` <a name="resetResourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resetResourceConfigurationId"></a>

```java
public void resetResourceConfigurationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationIdInput">resourceConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationIdInput`<sup>Optional</sup> <a name="resourceConfigurationIdInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationIdInput"></a>

```java
public java.lang.String getResourceConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationId`<sup>Required</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId"></a>

```java
public java.lang.String getResourceConfigurationId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentPrivateConnectionModeSelfManaged getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

---


### SecurityagentPrivateConnectionModeServiceManagedOutputReference <a name="SecurityagentPrivateConnectionModeServiceManagedOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnectionModeServiceManagedOutputReference;

new SecurityagentPrivateConnectionModeServiceManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetDnsResolution">resetDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetHostAddress">resetHostAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpv4AddressesPerEni">resetIpv4AddressesPerEni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetPortRanges">resetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsResolution` <a name="resetDnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetDnsResolution"></a>

```java
public void resetDnsResolution()
```

##### `resetHostAddress` <a name="resetHostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetHostAddress"></a>

```java
public void resetHostAddress()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetIpv4AddressesPerEni` <a name="resetIpv4AddressesPerEni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpv4AddressesPerEni"></a>

```java
public void resetIpv4AddressesPerEni()
```

##### `resetPortRanges` <a name="resetPortRanges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetPortRanges"></a>

```java
public void resetPortRanges()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetVpcId"></a>

```java
public void resetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolutionInput">dnsResolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddressInput">hostAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEniInput">ipv4AddressesPerEniInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRangesInput">portRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution">dnsResolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress">hostAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni">ipv4AddressesPerEni</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges">portRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsResolutionInput`<sup>Optional</sup> <a name="dnsResolutionInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolutionInput"></a>

```java
public java.lang.String getDnsResolutionInput();
```

- *Type:* java.lang.String

---

##### `hostAddressInput`<sup>Optional</sup> <a name="hostAddressInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddressInput"></a>

```java
public java.lang.String getHostAddressInput();
```

- *Type:* java.lang.String

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `ipv4AddressesPerEniInput`<sup>Optional</sup> <a name="ipv4AddressesPerEniInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEniInput"></a>

```java
public java.lang.Number getIpv4AddressesPerEniInput();
```

- *Type:* java.lang.Number

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRangesInput"></a>

```java
public java.util.List<java.lang.String> getPortRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `dnsResolution`<sup>Required</sup> <a name="dnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution"></a>

```java
public java.lang.String getDnsResolution();
```

- *Type:* java.lang.String

---

##### `hostAddress`<sup>Required</sup> <a name="hostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress"></a>

```java
public java.lang.String getHostAddress();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `ipv4AddressesPerEni`<sup>Required</sup> <a name="ipv4AddressesPerEni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```java
public java.lang.Number getIpv4AddressesPerEni();
```

- *Type:* java.lang.Number

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges"></a>

```java
public java.util.List<java.lang.String> getPortRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentPrivateConnectionModeServiceManaged getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

---


### SecurityagentPrivateConnectionTagsList <a name="SecurityagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnectionTagsList;

new SecurityagentPrivateConnectionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get"></a>

```java
public SecurityagentPrivateConnectionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityagentPrivateConnectionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>>

---


### SecurityagentPrivateConnectionTagsOutputReference <a name="SecurityagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_private_connection.SecurityagentPrivateConnectionTagsOutputReference;

new SecurityagentPrivateConnectionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentPrivateConnectionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>

---



