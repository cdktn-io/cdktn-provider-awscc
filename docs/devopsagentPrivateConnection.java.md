# `devopsagentPrivateConnection` Submodule <a name="`devopsagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.devopsagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentPrivateConnection <a name="DevopsagentPrivateConnection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection awscc_devopsagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnection;

DevopsagentPrivateConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionConfiguration(DevopsagentPrivateConnectionConnectionConfiguration)
    .name(java.lang.String)
//  .certificate(java.lang.String)
//  .tags(IResolvable|java.util.List<DevopsagentPrivateConnectionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | The connection configuration for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for this Private Connection within the account. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | Certificate for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionConfiguration`<sup>Required</sup> <a name="connectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.connectionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

The connection configuration for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#connection_configuration DevopsagentPrivateConnection#connection_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for this Private Connection within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#name DevopsagentPrivateConnection#name}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

Certificate for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#certificate DevopsagentPrivateConnection#certificate}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#tags DevopsagentPrivateConnection#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration">putConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionConfiguration` <a name="putConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration"></a>

```java
public void putConnectionConfiguration(DevopsagentPrivateConnectionConnectionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DevopsagentPrivateConnectionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>>

---

##### `resetCertificate` <a name="resetCertificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnection;

DevopsagentPrivateConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnection;

DevopsagentPrivateConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnection;

DevopsagentPrivateConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnection;

DevopsagentPrivateConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsagentPrivateConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DevopsagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsagentPrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateExpiryTime">certificateExpiryTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference">DevopsagentPrivateConnectionConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList">DevopsagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfigurationInput">connectionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `certificateExpiryTime`<sup>Required</sup> <a name="certificateExpiryTime" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateExpiryTime"></a>

```java
public java.lang.String getCertificateExpiryTime();
```

- *Type:* java.lang.String

---

##### `connectionConfiguration`<sup>Required</sup> <a name="connectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfiguration"></a>

```java
public DevopsagentPrivateConnectionConnectionConfigurationOutputReference getConnectionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference">DevopsagentPrivateConnectionConnectionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tags"></a>

```java
public DevopsagentPrivateConnectionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList">DevopsagentPrivateConnectionTagsList</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `connectionConfigurationInput`<sup>Optional</sup> <a name="connectionConfigurationInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfigurationInput"></a>

```java
public IResolvable|DevopsagentPrivateConnectionConnectionConfiguration getConnectionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DevopsagentPrivateConnectionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentPrivateConnectionConfig <a name="DevopsagentPrivateConnectionConfig" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnectionConfig;

DevopsagentPrivateConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionConfiguration(DevopsagentPrivateConnectionConnectionConfiguration)
    .name(java.lang.String)
//  .certificate(java.lang.String)
//  .tags(IResolvable|java.util.List<DevopsagentPrivateConnectionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | The connection configuration for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for this Private Connection within the account. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Certificate for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionConfiguration`<sup>Required</sup> <a name="connectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connectionConfiguration"></a>

```java
public DevopsagentPrivateConnectionConnectionConfiguration getConnectionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

The connection configuration for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#connection_configuration DevopsagentPrivateConnection#connection_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for this Private Connection within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#name DevopsagentPrivateConnection#name}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Certificate for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#certificate DevopsagentPrivateConnection#certificate}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DevopsagentPrivateConnectionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#tags DevopsagentPrivateConnection#tags}

---

### DevopsagentPrivateConnectionConnectionConfiguration <a name="DevopsagentPrivateConnectionConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnectionConnectionConfiguration;

DevopsagentPrivateConnectionConnectionConfiguration.builder()
//  .selfManaged(DevopsagentPrivateConnectionConnectionConfigurationSelfManaged)
//  .serviceManaged(DevopsagentPrivateConnectionConnectionConfigurationServiceManaged)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | Configuration for a self-managed Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.serviceManaged">serviceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | Configuration for a service-managed Private Connection. |

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.selfManaged"></a>

```java
public DevopsagentPrivateConnectionConnectionConfigurationSelfManaged getSelfManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

Configuration for a self-managed Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#self_managed DevopsagentPrivateConnection#self_managed}

---

##### `serviceManaged`<sup>Optional</sup> <a name="serviceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.serviceManaged"></a>

```java
public DevopsagentPrivateConnectionConnectionConfigurationServiceManaged getServiceManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

Configuration for a service-managed Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#service_managed DevopsagentPrivateConnection#service_managed}

---

### DevopsagentPrivateConnectionConnectionConfigurationSelfManaged <a name="DevopsagentPrivateConnectionConnectionConfigurationSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged;

DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.builder()
//  .resourceConfigurationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>java.lang.String</code> | The ARN of the Resource Configuration. |

---

##### `resourceConfigurationId`<sup>Optional</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.property.resourceConfigurationId"></a>

```java
public java.lang.String getResourceConfigurationId();
```

- *Type:* java.lang.String

The ARN of the Resource Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#resource_configuration_id DevopsagentPrivateConnection#resource_configuration_id}

---

### DevopsagentPrivateConnectionConnectionConfigurationServiceManaged <a name="DevopsagentPrivateConnectionConnectionConfigurationServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged;

DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.builder()
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
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.dnsResolution">dnsResolution</a></code> | <code>java.lang.String</code> | DNS resolution mode for the resource gateway. Defaults to PUBLIC when not set. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.hostAddress">hostAddress</a></code> | <code>java.lang.String</code> | IP address or DNS name of the target resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | IP address type of the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipv4AddressesPerEni">ipv4AddressesPerEni</a></code> | <code>java.lang.Number</code> | Number of IPv4 addresses in each ENI for the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.portRanges">portRanges</a></code> | <code>java.util.List<java.lang.String></code> | TCP port ranges that a consumer can use to access the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Security groups to attach to the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Subnets that the service-managed Resource Gateway will span. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | VPC to create the service-managed Resource Gateway in. |

---

##### `dnsResolution`<sup>Optional</sup> <a name="dnsResolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.dnsResolution"></a>

```java
public java.lang.String getDnsResolution();
```

- *Type:* java.lang.String

DNS resolution mode for the resource gateway. Defaults to PUBLIC when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#dns_resolution DevopsagentPrivateConnection#dns_resolution}

---

##### `hostAddress`<sup>Optional</sup> <a name="hostAddress" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.hostAddress"></a>

```java
public java.lang.String getHostAddress();
```

- *Type:* java.lang.String

IP address or DNS name of the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#host_address DevopsagentPrivateConnection#host_address}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

IP address type of the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#ip_address_type DevopsagentPrivateConnection#ip_address_type}

---

##### `ipv4AddressesPerEni`<sup>Optional</sup> <a name="ipv4AddressesPerEni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipv4AddressesPerEni"></a>

```java
public java.lang.Number getIpv4AddressesPerEni();
```

- *Type:* java.lang.Number

Number of IPv4 addresses in each ENI for the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#ipv_4_addresses_per_eni DevopsagentPrivateConnection#ipv_4_addresses_per_eni}

---

##### `portRanges`<sup>Optional</sup> <a name="portRanges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.portRanges"></a>

```java
public java.util.List<java.lang.String> getPortRanges();
```

- *Type:* java.util.List<java.lang.String>

TCP port ranges that a consumer can use to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#port_ranges DevopsagentPrivateConnection#port_ranges}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Security groups to attach to the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#security_group_ids DevopsagentPrivateConnection#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Subnets that the service-managed Resource Gateway will span.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#subnet_ids DevopsagentPrivateConnection#subnet_ids}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

VPC to create the service-managed Resource Gateway in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#vpc_id DevopsagentPrivateConnection#vpc_id}

---

### DevopsagentPrivateConnectionTags <a name="DevopsagentPrivateConnectionTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnectionTags;

DevopsagentPrivateConnectionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#key DevopsagentPrivateConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_private_connection#value DevopsagentPrivateConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentPrivateConnectionConnectionConfigurationOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference;

new DevopsagentPrivateConnectionConnectionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged">putSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged">putServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetSelfManaged">resetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetServiceManaged">resetServiceManaged</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelfManaged` <a name="putSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged"></a>

```java
public void putSelfManaged(DevopsagentPrivateConnectionConnectionConfigurationSelfManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---

##### `putServiceManaged` <a name="putServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged"></a>

```java
public void putServiceManaged(DevopsagentPrivateConnectionConnectionConfigurationServiceManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---

##### `resetSelfManaged` <a name="resetSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetSelfManaged"></a>

```java
public void resetSelfManaged()
```

##### `resetServiceManaged` <a name="resetServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetServiceManaged"></a>

```java
public void resetServiceManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManaged">serviceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManagedInput">selfManagedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManagedInput">serviceManagedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `selfManaged`<sup>Required</sup> <a name="selfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManaged"></a>

```java
public DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference getSelfManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference</a>

---

##### `serviceManaged`<sup>Required</sup> <a name="serviceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManaged"></a>

```java
public DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference getServiceManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference</a>

---

##### `selfManagedInput`<sup>Optional</sup> <a name="selfManagedInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManagedInput"></a>

```java
public IResolvable|DevopsagentPrivateConnectionConnectionConfigurationSelfManaged getSelfManagedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---

##### `serviceManagedInput`<sup>Optional</sup> <a name="serviceManagedInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManagedInput"></a>

```java
public IResolvable|DevopsagentPrivateConnectionConnectionConfigurationServiceManaged getServiceManagedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentPrivateConnectionConnectionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

---


### DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference;

new DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resetResourceConfigurationId">resetResourceConfigurationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceConfigurationId` <a name="resetResourceConfigurationId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resetResourceConfigurationId"></a>

```java
public void resetResourceConfigurationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationIdInput">resourceConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationIdInput`<sup>Optional</sup> <a name="resourceConfigurationIdInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationIdInput"></a>

```java
public java.lang.String getResourceConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `resourceConfigurationId`<sup>Required</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationId"></a>

```java
public java.lang.String getResourceConfigurationId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentPrivateConnectionConnectionConfigurationSelfManaged getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---


### DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference;

new DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetDnsResolution">resetDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetHostAddress">resetHostAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpv4AddressesPerEni">resetIpv4AddressesPerEni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetPortRanges">resetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsResolution` <a name="resetDnsResolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetDnsResolution"></a>

```java
public void resetDnsResolution()
```

##### `resetHostAddress` <a name="resetHostAddress" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetHostAddress"></a>

```java
public void resetHostAddress()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetIpv4AddressesPerEni` <a name="resetIpv4AddressesPerEni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpv4AddressesPerEni"></a>

```java
public void resetIpv4AddressesPerEni()
```

##### `resetPortRanges` <a name="resetPortRanges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetPortRanges"></a>

```java
public void resetPortRanges()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetVpcId"></a>

```java
public void resetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolutionInput">dnsResolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddressInput">hostAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEniInput">ipv4AddressesPerEniInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRangesInput">portRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolution">dnsResolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddress">hostAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEni">ipv4AddressesPerEni</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRanges">portRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsResolutionInput`<sup>Optional</sup> <a name="dnsResolutionInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolutionInput"></a>

```java
public java.lang.String getDnsResolutionInput();
```

- *Type:* java.lang.String

---

##### `hostAddressInput`<sup>Optional</sup> <a name="hostAddressInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddressInput"></a>

```java
public java.lang.String getHostAddressInput();
```

- *Type:* java.lang.String

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `ipv4AddressesPerEniInput`<sup>Optional</sup> <a name="ipv4AddressesPerEniInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEniInput"></a>

```java
public java.lang.Number getIpv4AddressesPerEniInput();
```

- *Type:* java.lang.Number

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRangesInput"></a>

```java
public java.util.List<java.lang.String> getPortRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `dnsResolution`<sup>Required</sup> <a name="dnsResolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolution"></a>

```java
public java.lang.String getDnsResolution();
```

- *Type:* java.lang.String

---

##### `hostAddress`<sup>Required</sup> <a name="hostAddress" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddress"></a>

```java
public java.lang.String getHostAddress();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `ipv4AddressesPerEni`<sup>Required</sup> <a name="ipv4AddressesPerEni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```java
public java.lang.Number getIpv4AddressesPerEni();
```

- *Type:* java.lang.Number

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRanges"></a>

```java
public java.util.List<java.lang.String> getPortRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentPrivateConnectionConnectionConfigurationServiceManaged getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---


### DevopsagentPrivateConnectionTagsList <a name="DevopsagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnectionTagsList;

new DevopsagentPrivateConnectionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get"></a>

```java
public DevopsagentPrivateConnectionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsagentPrivateConnectionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>>

---


### DevopsagentPrivateConnectionTagsOutputReference <a name="DevopsagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_private_connection.DevopsagentPrivateConnectionTagsOutputReference;

new DevopsagentPrivateConnectionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentPrivateConnectionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>

---



