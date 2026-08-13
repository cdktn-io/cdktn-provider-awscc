# `connectInstance` Submodule <a name="`connectInstance` Submodule" id="@cdktn/provider-awscc.connectInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectInstance <a name="ConnectInstance" id="@cdktn/provider-awscc.connectInstance.ConnectInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance awscc_connect_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance.ConnectInstance;

ConnectInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .attributes(ConnectInstanceAttributes)
    .identityManagementType(java.lang.String)
//  .directoryId(java.lang.String)
//  .instanceAlias(java.lang.String)
//  .tags(IResolvable|java.util.List<ConnectInstanceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | The attributes for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.identityManagementType">identityManagementType</a></code> | <code>java.lang.String</code> | Specifies the type of directory integration for new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Existing directoryId user wants to map to the new Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.instanceAlias">instanceAlias</a></code> | <code>java.lang.String</code> | Alias of the new directory created as part of new instance creation. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

The attributes for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#attributes ConnectInstance#attributes}

---

##### `identityManagementType`<sup>Required</sup> <a name="identityManagementType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.identityManagementType"></a>

- *Type:* java.lang.String

Specifies the type of directory integration for new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#identity_management_type ConnectInstance#identity_management_type}

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Existing directoryId user wants to map to the new Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#directory_id ConnectInstance#directory_id}

---

##### `instanceAlias`<sup>Optional</sup> <a name="instanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.instanceAlias"></a>

- *Type:* java.lang.String

Alias of the new directory created as part of new instance creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#instance_alias ConnectInstance#instance_alias}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#tags ConnectInstance#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetInstanceAlias">resetInstanceAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes"></a>

```java
public void putAttributes(ConnectInstanceAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ConnectInstanceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>>

---

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetDirectoryId"></a>

```java
public void resetDirectoryId()
```

##### `resetInstanceAlias` <a name="resetInstanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetInstanceAlias"></a>

```java
public void resetInstanceAlias()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_instance.ConnectInstance;

ConnectInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_instance.ConnectInstance;

ConnectInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_instance.ConnectInstance;

ConnectInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_instance.ConnectInstance;

ConnectInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference">ConnectInstanceAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceStatus">instanceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList">ConnectInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributesInput">attributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementTypeInput">identityManagementTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAliasInput">instanceAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementType">identityManagementType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAlias">instanceAlias</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributes"></a>

```java
public ConnectInstanceAttributesOutputReference getAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference">ConnectInstanceAttributesOutputReference</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `instanceStatus`<sup>Required</sup> <a name="instanceStatus" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceStatus"></a>

```java
public java.lang.String getInstanceStatus();
```

- *Type:* java.lang.String

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.serviceRole"></a>

```java
public java.lang.String getServiceRole();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tags"></a>

```java
public ConnectInstanceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList">ConnectInstanceTagsList</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributesInput"></a>

```java
public IResolvable|ConnectInstanceAttributes getAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `identityManagementTypeInput`<sup>Optional</sup> <a name="identityManagementTypeInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementTypeInput"></a>

```java
public java.lang.String getIdentityManagementTypeInput();
```

- *Type:* java.lang.String

---

##### `instanceAliasInput`<sup>Optional</sup> <a name="instanceAliasInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAliasInput"></a>

```java
public java.lang.String getInstanceAliasInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ConnectInstanceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `identityManagementType`<sup>Required</sup> <a name="identityManagementType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementType"></a>

```java
public java.lang.String getIdentityManagementType();
```

- *Type:* java.lang.String

---

##### `instanceAlias`<sup>Required</sup> <a name="instanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAlias"></a>

```java
public java.lang.String getInstanceAlias();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectInstanceAttributes <a name="ConnectInstanceAttributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance.ConnectInstanceAttributes;

ConnectInstanceAttributes.builder()
    .inboundCalls(java.lang.Boolean|IResolvable)
    .outboundCalls(java.lang.Boolean|IResolvable)
//  .autoResolveBestVoices(java.lang.Boolean|IResolvable)
//  .contactflowLogs(java.lang.Boolean|IResolvable)
//  .contactLens(java.lang.Boolean|IResolvable)
//  .earlyMedia(java.lang.Boolean|IResolvable)
//  .enhancedChatMonitoring(java.lang.Boolean|IResolvable)
//  .enhancedContactMonitoring(java.lang.Boolean|IResolvable)
//  .highVolumeOutBound(java.lang.Boolean|IResolvable)
//  .messageStreaming(java.lang.Boolean|IResolvable)
//  .multiPartyChatConference(java.lang.Boolean|IResolvable)
//  .multiPartyConference(java.lang.Boolean|IResolvable)
//  .useCustomTtsVoices(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.inboundCalls">inboundCalls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Mandatory element which enables inbound calls on new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.outboundCalls">outboundCalls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Mandatory element which enables outbound calls on new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.autoResolveBestVoices">autoResolveBestVoices</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactflowLogs">contactflowLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean flag which enables CONTACTFLOW_LOGS on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactLens">contactLens</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean flag which enables CONTACT_LENS on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.earlyMedia">earlyMedia</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean flag which enables EARLY_MEDIA on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedChatMonitoring">enhancedChatMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean flag which enables ENHANCED_CHAT_MONITORING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedContactMonitoring">enhancedContactMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean flag which enables ENHANCED_CONTACT_MONITORING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.highVolumeOutBound">highVolumeOutBound</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean flag which enables HIGH_VOLUME_OUTBOUND on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.messageStreaming">messageStreaming</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean flag which enables MESSAGE_STREAMING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyChatConference">multiPartyChatConference</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean flag which enables MULTI_PARTY_CHAT_CONFERENCE on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyConference">multiPartyConference</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean flag which enables MULTI_PARTY_CONFERENCE on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.useCustomTtsVoices">useCustomTtsVoices</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance. |

---

##### `inboundCalls`<sup>Required</sup> <a name="inboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.inboundCalls"></a>

```java
public java.lang.Boolean|IResolvable getInboundCalls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Mandatory element which enables inbound calls on new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#inbound_calls ConnectInstance#inbound_calls}

---

##### `outboundCalls`<sup>Required</sup> <a name="outboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.outboundCalls"></a>

```java
public java.lang.Boolean|IResolvable getOutboundCalls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Mandatory element which enables outbound calls on new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#outbound_calls ConnectInstance#outbound_calls}

---

##### `autoResolveBestVoices`<sup>Optional</sup> <a name="autoResolveBestVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.autoResolveBestVoices"></a>

```java
public java.lang.Boolean|IResolvable getAutoResolveBestVoices();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#auto_resolve_best_voices ConnectInstance#auto_resolve_best_voices}

---

##### `contactflowLogs`<sup>Optional</sup> <a name="contactflowLogs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactflowLogs"></a>

```java
public java.lang.Boolean|IResolvable getContactflowLogs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean flag which enables CONTACTFLOW_LOGS on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#contactflow_logs ConnectInstance#contactflow_logs}

---

##### `contactLens`<sup>Optional</sup> <a name="contactLens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactLens"></a>

```java
public java.lang.Boolean|IResolvable getContactLens();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean flag which enables CONTACT_LENS on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#contact_lens ConnectInstance#contact_lens}

---

##### `earlyMedia`<sup>Optional</sup> <a name="earlyMedia" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.earlyMedia"></a>

```java
public java.lang.Boolean|IResolvable getEarlyMedia();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean flag which enables EARLY_MEDIA on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#early_media ConnectInstance#early_media}

---

##### `enhancedChatMonitoring`<sup>Optional</sup> <a name="enhancedChatMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedChatMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getEnhancedChatMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean flag which enables ENHANCED_CHAT_MONITORING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#enhanced_chat_monitoring ConnectInstance#enhanced_chat_monitoring}

---

##### `enhancedContactMonitoring`<sup>Optional</sup> <a name="enhancedContactMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedContactMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getEnhancedContactMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean flag which enables ENHANCED_CONTACT_MONITORING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#enhanced_contact_monitoring ConnectInstance#enhanced_contact_monitoring}

---

##### `highVolumeOutBound`<sup>Optional</sup> <a name="highVolumeOutBound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.highVolumeOutBound"></a>

```java
public java.lang.Boolean|IResolvable getHighVolumeOutBound();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean flag which enables HIGH_VOLUME_OUTBOUND on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#high_volume_out_bound ConnectInstance#high_volume_out_bound}

---

##### `messageStreaming`<sup>Optional</sup> <a name="messageStreaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.messageStreaming"></a>

```java
public java.lang.Boolean|IResolvable getMessageStreaming();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean flag which enables MESSAGE_STREAMING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#message_streaming ConnectInstance#message_streaming}

---

##### `multiPartyChatConference`<sup>Optional</sup> <a name="multiPartyChatConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyChatConference"></a>

```java
public java.lang.Boolean|IResolvable getMultiPartyChatConference();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean flag which enables MULTI_PARTY_CHAT_CONFERENCE on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#multi_party_chat_conference ConnectInstance#multi_party_chat_conference}

---

##### `multiPartyConference`<sup>Optional</sup> <a name="multiPartyConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyConference"></a>

```java
public java.lang.Boolean|IResolvable getMultiPartyConference();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean flag which enables MULTI_PARTY_CONFERENCE on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#multi_party_conference ConnectInstance#multi_party_conference}

---

##### `useCustomTtsVoices`<sup>Optional</sup> <a name="useCustomTtsVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.useCustomTtsVoices"></a>

```java
public java.lang.Boolean|IResolvable getUseCustomTtsVoices();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#use_custom_tts_voices ConnectInstance#use_custom_tts_voices}

---

### ConnectInstanceConfig <a name="ConnectInstanceConfig" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance.ConnectInstanceConfig;

ConnectInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .attributes(ConnectInstanceAttributes)
    .identityManagementType(java.lang.String)
//  .directoryId(java.lang.String)
//  .instanceAlias(java.lang.String)
//  .tags(IResolvable|java.util.List<ConnectInstanceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | The attributes for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.identityManagementType">identityManagementType</a></code> | <code>java.lang.String</code> | Specifies the type of directory integration for new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Existing directoryId user wants to map to the new Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.instanceAlias">instanceAlias</a></code> | <code>java.lang.String</code> | Alias of the new directory created as part of new instance creation. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.attributes"></a>

```java
public ConnectInstanceAttributes getAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

The attributes for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#attributes ConnectInstance#attributes}

---

##### `identityManagementType`<sup>Required</sup> <a name="identityManagementType" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.identityManagementType"></a>

```java
public java.lang.String getIdentityManagementType();
```

- *Type:* java.lang.String

Specifies the type of directory integration for new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#identity_management_type ConnectInstance#identity_management_type}

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Existing directoryId user wants to map to the new Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#directory_id ConnectInstance#directory_id}

---

##### `instanceAlias`<sup>Optional</sup> <a name="instanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.instanceAlias"></a>

```java
public java.lang.String getInstanceAlias();
```

- *Type:* java.lang.String

Alias of the new directory created as part of new instance creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#instance_alias ConnectInstance#instance_alias}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ConnectInstanceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#tags ConnectInstance#tags}

---

### ConnectInstanceTags <a name="ConnectInstanceTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance.ConnectInstanceTags;

ConnectInstanceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#key ConnectInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#value ConnectInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectInstanceAttributesOutputReference <a name="ConnectInstanceAttributesOutputReference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance.ConnectInstanceAttributesOutputReference;

new ConnectInstanceAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetAutoResolveBestVoices">resetAutoResolveBestVoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactflowLogs">resetContactflowLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactLens">resetContactLens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEarlyMedia">resetEarlyMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedChatMonitoring">resetEnhancedChatMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedContactMonitoring">resetEnhancedContactMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetHighVolumeOutBound">resetHighVolumeOutBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMessageStreaming">resetMessageStreaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyChatConference">resetMultiPartyChatConference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyConference">resetMultiPartyConference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetUseCustomTtsVoices">resetUseCustomTtsVoices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoResolveBestVoices` <a name="resetAutoResolveBestVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetAutoResolveBestVoices"></a>

```java
public void resetAutoResolveBestVoices()
```

##### `resetContactflowLogs` <a name="resetContactflowLogs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactflowLogs"></a>

```java
public void resetContactflowLogs()
```

##### `resetContactLens` <a name="resetContactLens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactLens"></a>

```java
public void resetContactLens()
```

##### `resetEarlyMedia` <a name="resetEarlyMedia" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEarlyMedia"></a>

```java
public void resetEarlyMedia()
```

##### `resetEnhancedChatMonitoring` <a name="resetEnhancedChatMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedChatMonitoring"></a>

```java
public void resetEnhancedChatMonitoring()
```

##### `resetEnhancedContactMonitoring` <a name="resetEnhancedContactMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedContactMonitoring"></a>

```java
public void resetEnhancedContactMonitoring()
```

##### `resetHighVolumeOutBound` <a name="resetHighVolumeOutBound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetHighVolumeOutBound"></a>

```java
public void resetHighVolumeOutBound()
```

##### `resetMessageStreaming` <a name="resetMessageStreaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMessageStreaming"></a>

```java
public void resetMessageStreaming()
```

##### `resetMultiPartyChatConference` <a name="resetMultiPartyChatConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyChatConference"></a>

```java
public void resetMultiPartyChatConference()
```

##### `resetMultiPartyConference` <a name="resetMultiPartyConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyConference"></a>

```java
public void resetMultiPartyConference()
```

##### `resetUseCustomTtsVoices` <a name="resetUseCustomTtsVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetUseCustomTtsVoices"></a>

```java
public void resetUseCustomTtsVoices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoicesInput">autoResolveBestVoicesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogsInput">contactflowLogsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLensInput">contactLensInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMediaInput">earlyMediaInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoringInput">enhancedChatMonitoringInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoringInput">enhancedContactMonitoringInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBoundInput">highVolumeOutBoundInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCallsInput">inboundCallsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreamingInput">messageStreamingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConferenceInput">multiPartyChatConferenceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConferenceInput">multiPartyConferenceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCallsInput">outboundCallsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoicesInput">useCustomTtsVoicesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoices">autoResolveBestVoices</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogs">contactflowLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLens">contactLens</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMedia">earlyMedia</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoring">enhancedChatMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoring">enhancedContactMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBound">highVolumeOutBound</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCalls">inboundCalls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreaming">messageStreaming</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConference">multiPartyChatConference</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConference">multiPartyConference</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCalls">outboundCalls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoices">useCustomTtsVoices</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoResolveBestVoicesInput`<sup>Optional</sup> <a name="autoResolveBestVoicesInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoicesInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoResolveBestVoicesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `contactflowLogsInput`<sup>Optional</sup> <a name="contactflowLogsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogsInput"></a>

```java
public java.lang.Boolean|IResolvable getContactflowLogsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `contactLensInput`<sup>Optional</sup> <a name="contactLensInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLensInput"></a>

```java
public java.lang.Boolean|IResolvable getContactLensInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `earlyMediaInput`<sup>Optional</sup> <a name="earlyMediaInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMediaInput"></a>

```java
public java.lang.Boolean|IResolvable getEarlyMediaInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enhancedChatMonitoringInput`<sup>Optional</sup> <a name="enhancedChatMonitoringInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoringInput"></a>

```java
public java.lang.Boolean|IResolvable getEnhancedChatMonitoringInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enhancedContactMonitoringInput`<sup>Optional</sup> <a name="enhancedContactMonitoringInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoringInput"></a>

```java
public java.lang.Boolean|IResolvable getEnhancedContactMonitoringInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `highVolumeOutBoundInput`<sup>Optional</sup> <a name="highVolumeOutBoundInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBoundInput"></a>

```java
public java.lang.Boolean|IResolvable getHighVolumeOutBoundInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inboundCallsInput`<sup>Optional</sup> <a name="inboundCallsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCallsInput"></a>

```java
public java.lang.Boolean|IResolvable getInboundCallsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageStreamingInput`<sup>Optional</sup> <a name="messageStreamingInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreamingInput"></a>

```java
public java.lang.Boolean|IResolvable getMessageStreamingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `multiPartyChatConferenceInput`<sup>Optional</sup> <a name="multiPartyChatConferenceInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConferenceInput"></a>

```java
public java.lang.Boolean|IResolvable getMultiPartyChatConferenceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `multiPartyConferenceInput`<sup>Optional</sup> <a name="multiPartyConferenceInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConferenceInput"></a>

```java
public java.lang.Boolean|IResolvable getMultiPartyConferenceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `outboundCallsInput`<sup>Optional</sup> <a name="outboundCallsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCallsInput"></a>

```java
public java.lang.Boolean|IResolvable getOutboundCallsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useCustomTtsVoicesInput`<sup>Optional</sup> <a name="useCustomTtsVoicesInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoicesInput"></a>

```java
public java.lang.Boolean|IResolvable getUseCustomTtsVoicesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoResolveBestVoices`<sup>Required</sup> <a name="autoResolveBestVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoices"></a>

```java
public java.lang.Boolean|IResolvable getAutoResolveBestVoices();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `contactflowLogs`<sup>Required</sup> <a name="contactflowLogs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogs"></a>

```java
public java.lang.Boolean|IResolvable getContactflowLogs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `contactLens`<sup>Required</sup> <a name="contactLens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLens"></a>

```java
public java.lang.Boolean|IResolvable getContactLens();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `earlyMedia`<sup>Required</sup> <a name="earlyMedia" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMedia"></a>

```java
public java.lang.Boolean|IResolvable getEarlyMedia();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enhancedChatMonitoring`<sup>Required</sup> <a name="enhancedChatMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getEnhancedChatMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enhancedContactMonitoring`<sup>Required</sup> <a name="enhancedContactMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getEnhancedContactMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `highVolumeOutBound`<sup>Required</sup> <a name="highVolumeOutBound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBound"></a>

```java
public java.lang.Boolean|IResolvable getHighVolumeOutBound();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inboundCalls`<sup>Required</sup> <a name="inboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCalls"></a>

```java
public java.lang.Boolean|IResolvable getInboundCalls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `messageStreaming`<sup>Required</sup> <a name="messageStreaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreaming"></a>

```java
public java.lang.Boolean|IResolvable getMessageStreaming();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `multiPartyChatConference`<sup>Required</sup> <a name="multiPartyChatConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConference"></a>

```java
public java.lang.Boolean|IResolvable getMultiPartyChatConference();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `multiPartyConference`<sup>Required</sup> <a name="multiPartyConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConference"></a>

```java
public java.lang.Boolean|IResolvable getMultiPartyConference();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `outboundCalls`<sup>Required</sup> <a name="outboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCalls"></a>

```java
public java.lang.Boolean|IResolvable getOutboundCalls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useCustomTtsVoices`<sup>Required</sup> <a name="useCustomTtsVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoices"></a>

```java
public java.lang.Boolean|IResolvable getUseCustomTtsVoices();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectInstanceAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

---


### ConnectInstanceTagsList <a name="ConnectInstanceTagsList" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance.ConnectInstanceTagsList;

new ConnectInstanceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get"></a>

```java
public ConnectInstanceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectInstanceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>>

---


### ConnectInstanceTagsOutputReference <a name="ConnectInstanceTagsOutputReference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_instance.ConnectInstanceTagsOutputReference;

new ConnectInstanceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectInstanceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>

---



