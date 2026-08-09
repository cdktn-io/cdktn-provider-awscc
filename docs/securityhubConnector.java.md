# `securityhubConnector` Submodule <a name="`securityhubConnector` Submodule" id="@cdktn/provider-awscc.securityhubConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConnector <a name="SecurityhubConnector" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector awscc_securityhub_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnector;

SecurityhubConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .providerName(SecurityhubConnectorProviderName)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.providerName">providerName</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName">SecurityhubConnectorProviderName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#provider_name SecurityhubConnector#provider_name}. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#name SecurityhubConnector#name}

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.providerName"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName">SecurityhubConnectorProviderName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#provider_name SecurityhubConnector#provider_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#description SecurityhubConnector#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#tags SecurityhubConnector#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.putProviderName">putProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderName` <a name="putProviderName" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.putProviderName"></a>

```java
public void putProviderName(SecurityhubConnectorProviderName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.putProviderName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName">SecurityhubConnectorProviderName</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.isConstruct"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnector;

SecurityhubConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnector;

SecurityhubConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnector;

SecurityhubConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnector;

SecurityhubConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityhubConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityhubConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityhubConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityhubConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.connectorArn">connectorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.connectorStatus">connectorStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.enablementStatus">enablementStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.issues">issues</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList">SecurityhubConnectorIssuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.lastCheckedAt">lastCheckedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.providerName">providerName</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference">SecurityhubConnectorProviderNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.providerNameInput">providerNameInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName">SecurityhubConnectorProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.connectorArn"></a>

```java
public java.lang.String getConnectorArn();
```

- *Type:* java.lang.String

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

---

##### `connectorStatus`<sup>Required</sup> <a name="connectorStatus" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.connectorStatus"></a>

```java
public java.lang.String getConnectorStatus();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `enablementStatus`<sup>Required</sup> <a name="enablementStatus" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.enablementStatus"></a>

```java
public java.lang.String getEnablementStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.issues"></a>

```java
public SecurityhubConnectorIssuesList getIssues();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList">SecurityhubConnectorIssuesList</a>

---

##### `lastCheckedAt`<sup>Required</sup> <a name="lastCheckedAt" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.lastCheckedAt"></a>

```java
public java.lang.String getLastCheckedAt();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.providerName"></a>

```java
public SecurityhubConnectorProviderNameOutputReference getProviderName();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference">SecurityhubConnectorProviderNameOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.providerNameInput"></a>

```java
public IResolvable|SecurityhubConnectorProviderName getProviderNameInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName">SecurityhubConnectorProviderName</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConnectorConfig <a name="SecurityhubConnectorConfig" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnectorConfig;

SecurityhubConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .providerName(SecurityhubConnectorProviderName)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.providerName">providerName</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName">SecurityhubConnectorProviderName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#provider_name SecurityhubConnector#provider_name}. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#name SecurityhubConnector#name}

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.providerName"></a>

```java
public SecurityhubConnectorProviderName getProviderName();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName">SecurityhubConnectorProviderName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#provider_name SecurityhubConnector#provider_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#description SecurityhubConnector#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#tags SecurityhubConnector#tags}

---

### SecurityhubConnectorIssues <a name="SecurityhubConnectorIssues" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssues.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnectorIssues;

SecurityhubConnectorIssues.builder()
    .build();
```


### SecurityhubConnectorProviderName <a name="SecurityhubConnectorProviderName" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnectorProviderName;

SecurityhubConnectorProviderName.builder()
    .azure(SecurityhubConnectorProviderNameAzure)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure">SecurityhubConnectorProviderNameAzure</a></code> | The configuration for connecting to an Azure environment. |

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName.property.azure"></a>

```java
public SecurityhubConnectorProviderNameAzure getAzure();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure">SecurityhubConnectorProviderNameAzure</a>

The configuration for connecting to an Azure environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#azure SecurityhubConnector#azure}

---

### SecurityhubConnectorProviderNameAzure <a name="SecurityhubConnectorProviderNameAzure" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnectorProviderNameAzure;

SecurityhubConnectorProviderNameAzure.builder()
    .awsConfigConnectorArn(java.lang.String)
    .azureRegions(java.util.List<java.lang.String>)
    .scopeConfiguration(SecurityhubConnectorProviderNameAzureScopeConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure.property.awsConfigConnectorArn">awsConfigConnectorArn</a></code> | <code>java.lang.String</code> | The ARN of the multi-cloud configuration connector used to establish the connection to Azure. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure.property.azureRegions">azureRegions</a></code> | <code>java.util.List<java.lang.String></code> | The list of Azure regions to monitor. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure.property.scopeConfiguration">scopeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration">SecurityhubConnectorProviderNameAzureScopeConfiguration</a></code> | The scope configuration that defines which Azure resources are monitored. |

---

##### `awsConfigConnectorArn`<sup>Required</sup> <a name="awsConfigConnectorArn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure.property.awsConfigConnectorArn"></a>

```java
public java.lang.String getAwsConfigConnectorArn();
```

- *Type:* java.lang.String

The ARN of the multi-cloud configuration connector used to establish the connection to Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#aws_config_connector_arn SecurityhubConnector#aws_config_connector_arn}

---

##### `azureRegions`<sup>Required</sup> <a name="azureRegions" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure.property.azureRegions"></a>

```java
public java.util.List<java.lang.String> getAzureRegions();
```

- *Type:* java.util.List<java.lang.String>

The list of Azure regions to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#azure_regions SecurityhubConnector#azure_regions}

---

##### `scopeConfiguration`<sup>Required</sup> <a name="scopeConfiguration" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure.property.scopeConfiguration"></a>

```java
public SecurityhubConnectorProviderNameAzureScopeConfiguration getScopeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration">SecurityhubConnectorProviderNameAzureScopeConfiguration</a>

The scope configuration that defines which Azure resources are monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#scope_configuration SecurityhubConnector#scope_configuration}

---

### SecurityhubConnectorProviderNameAzureScopeConfiguration <a name="SecurityhubConnectorProviderNameAzureScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnectorProviderNameAzureScopeConfiguration;

SecurityhubConnectorProviderNameAzureScopeConfiguration.builder()
    .scopeType(java.lang.String)
//  .scopeValues(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration.property.scopeType">scopeType</a></code> | <code>java.lang.String</code> | The type of scope. Valid values are ``tenant`` and ``subscription``. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration.property.scopeValues">scopeValues</a></code> | <code>java.util.List<java.lang.String></code> | The list of scope values, such as subscription IDs, when the scope type is ``subscription``. |

---

##### `scopeType`<sup>Required</sup> <a name="scopeType" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration.property.scopeType"></a>

```java
public java.lang.String getScopeType();
```

- *Type:* java.lang.String

The type of scope. Valid values are ``tenant`` and ``subscription``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#scope_type SecurityhubConnector#scope_type}

---

##### `scopeValues`<sup>Optional</sup> <a name="scopeValues" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration.property.scopeValues"></a>

```java
public java.util.List<java.lang.String> getScopeValues();
```

- *Type:* java.util.List<java.lang.String>

The list of scope values, such as subscription IDs, when the scope type is ``subscription``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_connector#scope_values SecurityhubConnector#scope_values}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConnectorIssuesList <a name="SecurityhubConnectorIssuesList" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnectorIssuesList;

new SecurityhubConnectorIssuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.get"></a>

```java
public SecurityhubConnectorIssuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SecurityhubConnectorIssuesOutputReference <a name="SecurityhubConnectorIssuesOutputReference" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnectorIssuesOutputReference;

new SecurityhubConnectorIssuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssues">SecurityhubConnectorIssues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssuesOutputReference.property.internalValue"></a>

```java
public SecurityhubConnectorIssues getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorIssues">SecurityhubConnectorIssues</a>

---


### SecurityhubConnectorProviderNameAzureOutputReference <a name="SecurityhubConnectorProviderNameAzureOutputReference" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnectorProviderNameAzureOutputReference;

new SecurityhubConnectorProviderNameAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.putScopeConfiguration">putScopeConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScopeConfiguration` <a name="putScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.putScopeConfiguration"></a>

```java
public void putScopeConfiguration(SecurityhubConnectorProviderNameAzureScopeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.putScopeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration">SecurityhubConnectorProviderNameAzureScopeConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.scopeConfiguration">scopeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference">SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.awsConfigConnectorArnInput">awsConfigConnectorArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.azureRegionsInput">azureRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.scopeConfigurationInput">scopeConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration">SecurityhubConnectorProviderNameAzureScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.awsConfigConnectorArn">awsConfigConnectorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.azureRegions">azureRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure">SecurityhubConnectorProviderNameAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopeConfiguration`<sup>Required</sup> <a name="scopeConfiguration" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.scopeConfiguration"></a>

```java
public SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference getScopeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference">SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference</a>

---

##### `awsConfigConnectorArnInput`<sup>Optional</sup> <a name="awsConfigConnectorArnInput" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.awsConfigConnectorArnInput"></a>

```java
public java.lang.String getAwsConfigConnectorArnInput();
```

- *Type:* java.lang.String

---

##### `azureRegionsInput`<sup>Optional</sup> <a name="azureRegionsInput" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.azureRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAzureRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopeConfigurationInput`<sup>Optional</sup> <a name="scopeConfigurationInput" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.scopeConfigurationInput"></a>

```java
public IResolvable|SecurityhubConnectorProviderNameAzureScopeConfiguration getScopeConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration">SecurityhubConnectorProviderNameAzureScopeConfiguration</a>

---

##### `awsConfigConnectorArn`<sup>Required</sup> <a name="awsConfigConnectorArn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.awsConfigConnectorArn"></a>

```java
public java.lang.String getAwsConfigConnectorArn();
```

- *Type:* java.lang.String

---

##### `azureRegions`<sup>Required</sup> <a name="azureRegions" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.azureRegions"></a>

```java
public java.util.List<java.lang.String> getAzureRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubConnectorProviderNameAzure getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure">SecurityhubConnectorProviderNameAzure</a>

---


### SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference <a name="SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference;

new SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.resetScopeValues">resetScopeValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopeValues` <a name="resetScopeValues" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.resetScopeValues"></a>

```java
public void resetScopeValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.scopeTypeInput">scopeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.scopeValuesInput">scopeValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.scopeType">scopeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.scopeValues">scopeValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration">SecurityhubConnectorProviderNameAzureScopeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopeTypeInput`<sup>Optional</sup> <a name="scopeTypeInput" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.scopeTypeInput"></a>

```java
public java.lang.String getScopeTypeInput();
```

- *Type:* java.lang.String

---

##### `scopeValuesInput`<sup>Optional</sup> <a name="scopeValuesInput" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.scopeValuesInput"></a>

```java
public java.util.List<java.lang.String> getScopeValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopeType`<sup>Required</sup> <a name="scopeType" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.scopeType"></a>

```java
public java.lang.String getScopeType();
```

- *Type:* java.lang.String

---

##### `scopeValues`<sup>Required</sup> <a name="scopeValues" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.scopeValues"></a>

```java
public java.util.List<java.lang.String> getScopeValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubConnectorProviderNameAzureScopeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureScopeConfiguration">SecurityhubConnectorProviderNameAzureScopeConfiguration</a>

---


### SecurityhubConnectorProviderNameOutputReference <a name="SecurityhubConnectorProviderNameOutputReference" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_connector.SecurityhubConnectorProviderNameOutputReference;

new SecurityhubConnectorProviderNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.putAzure">putAzure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzure` <a name="putAzure" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.putAzure"></a>

```java
public void putAzure(SecurityhubConnectorProviderNameAzure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure">SecurityhubConnectorProviderNameAzure</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference">SecurityhubConnectorProviderNameAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.property.azureInput">azureInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure">SecurityhubConnectorProviderNameAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName">SecurityhubConnectorProviderName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.property.azure"></a>

```java
public SecurityhubConnectorProviderNameAzureOutputReference getAzure();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzureOutputReference">SecurityhubConnectorProviderNameAzureOutputReference</a>

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.property.azureInput"></a>

```java
public IResolvable|SecurityhubConnectorProviderNameAzure getAzureInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameAzure">SecurityhubConnectorProviderNameAzure</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderNameOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubConnectorProviderName getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnector.SecurityhubConnectorProviderName">SecurityhubConnectorProviderName</a>

---



