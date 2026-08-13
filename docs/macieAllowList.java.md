# `macieAllowList` Submodule <a name="`macieAllowList` Submodule" id="@cdktn/provider-awscc.macieAllowList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MacieAllowList <a name="MacieAllowList" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list awscc_macie_allow_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowList;

MacieAllowList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .criteria(MacieAllowListCriteria)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<MacieAllowListTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria">MacieAllowListCriteria</a></code> | AllowList criteria. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of AllowList. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of AllowList. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags">MacieAllowListTags</a>></code> | A collection of tags associated with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.criteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria">MacieAllowListCriteria</a>

AllowList criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#criteria MacieAllowList#criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of AllowList.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#name MacieAllowList#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of AllowList.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#description MacieAllowList#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags">MacieAllowListTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#tags MacieAllowList#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.putCriteria"></a>

```java
public void putCriteria(MacieAllowListCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria">MacieAllowListCriteria</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MacieAllowListTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags">MacieAllowListTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MacieAllowList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.isConstruct"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowList;

MacieAllowList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowList;

MacieAllowList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowList;

MacieAllowList.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowList;

MacieAllowList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MacieAllowList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MacieAllowList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MacieAllowList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MacieAllowList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MacieAllowList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.allowListId">allowListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference">MacieAllowListCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList">MacieAllowListTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.criteriaInput">criteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria">MacieAllowListCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags">MacieAllowListTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowListId`<sup>Required</sup> <a name="allowListId" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.allowListId"></a>

```java
public java.lang.String getAllowListId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.criteria"></a>

```java
public MacieAllowListCriteriaOutputReference getCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference">MacieAllowListCriteriaOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.tags"></a>

```java
public MacieAllowListTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList">MacieAllowListTagsList</a>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.criteriaInput"></a>

```java
public IResolvable|MacieAllowListCriteria getCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria">MacieAllowListCriteria</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MacieAllowListTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags">MacieAllowListTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.macieAllowList.MacieAllowList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MacieAllowListConfig <a name="MacieAllowListConfig" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowListConfig;

MacieAllowListConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .criteria(MacieAllowListCriteria)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<MacieAllowListTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria">MacieAllowListCriteria</a></code> | AllowList criteria. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of AllowList. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of AllowList. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags">MacieAllowListTags</a>></code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.criteria"></a>

```java
public MacieAllowListCriteria getCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria">MacieAllowListCriteria</a>

AllowList criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#criteria MacieAllowList#criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of AllowList.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#name MacieAllowList#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of AllowList.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#description MacieAllowList#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MacieAllowListTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags">MacieAllowListTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#tags MacieAllowList#tags}

---

### MacieAllowListCriteria <a name="MacieAllowListCriteria" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowListCriteria;

MacieAllowListCriteria.builder()
//  .regex(java.lang.String)
//  .s3WordsList(MacieAllowListCriteriaS3WordsListStruct)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria.property.regex">regex</a></code> | <code>java.lang.String</code> | The S3 object key for the AllowList. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria.property.s3WordsList">s3WordsList</a></code> | <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct">MacieAllowListCriteriaS3WordsListStruct</a></code> | The S3 location for the AllowList. |

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

The S3 object key for the AllowList.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#regex MacieAllowList#regex}

---

##### `s3WordsList`<sup>Optional</sup> <a name="s3WordsList" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria.property.s3WordsList"></a>

```java
public MacieAllowListCriteriaS3WordsListStruct getS3WordsList();
```

- *Type:* <a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct">MacieAllowListCriteriaS3WordsListStruct</a>

The S3 location for the AllowList.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#s3_words_list MacieAllowList#s3_words_list}

---

### MacieAllowListCriteriaS3WordsListStruct <a name="MacieAllowListCriteriaS3WordsListStruct" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowListCriteriaS3WordsListStruct;

MacieAllowListCriteriaS3WordsListStruct.builder()
//  .bucketName(java.lang.String)
//  .objectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#bucket_name MacieAllowList#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct.property.objectKey">objectKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#object_key MacieAllowList#object_key}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#bucket_name MacieAllowList#bucket_name}.

---

##### `objectKey`<sup>Optional</sup> <a name="objectKey" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct.property.objectKey"></a>

```java
public java.lang.String getObjectKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#object_key MacieAllowList#object_key}.

---

### MacieAllowListTags <a name="MacieAllowListTags" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowListTags;

MacieAllowListTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#key MacieAllowList#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_allow_list#value MacieAllowList#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MacieAllowListCriteriaOutputReference <a name="MacieAllowListCriteriaOutputReference" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowListCriteriaOutputReference;

new MacieAllowListCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.putS3WordsList">putS3WordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.resetS3WordsList">resetS3WordsList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3WordsList` <a name="putS3WordsList" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.putS3WordsList"></a>

```java
public void putS3WordsList(MacieAllowListCriteriaS3WordsListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.putS3WordsList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct">MacieAllowListCriteriaS3WordsListStruct</a>

---

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetS3WordsList` <a name="resetS3WordsList" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.resetS3WordsList"></a>

```java
public void resetS3WordsList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.s3WordsList">s3WordsList</a></code> | <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference">MacieAllowListCriteriaS3WordsListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.s3WordsListInput">s3WordsListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct">MacieAllowListCriteriaS3WordsListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria">MacieAllowListCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3WordsList`<sup>Required</sup> <a name="s3WordsList" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.s3WordsList"></a>

```java
public MacieAllowListCriteriaS3WordsListStructOutputReference getS3WordsList();
```

- *Type:* <a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference">MacieAllowListCriteriaS3WordsListStructOutputReference</a>

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `s3WordsListInput`<sup>Optional</sup> <a name="s3WordsListInput" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.s3WordsListInput"></a>

```java
public IResolvable|MacieAllowListCriteriaS3WordsListStruct getS3WordsListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct">MacieAllowListCriteriaS3WordsListStruct</a>

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|MacieAllowListCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteria">MacieAllowListCriteria</a>

---


### MacieAllowListCriteriaS3WordsListStructOutputReference <a name="MacieAllowListCriteriaS3WordsListStructOutputReference" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowListCriteriaS3WordsListStructOutputReference;

new MacieAllowListCriteriaS3WordsListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.resetObjectKey">resetObjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetObjectKey` <a name="resetObjectKey" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.resetObjectKey"></a>

```java
public void resetObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.objectKeyInput">objectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.objectKey">objectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct">MacieAllowListCriteriaS3WordsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `objectKeyInput`<sup>Optional</sup> <a name="objectKeyInput" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.objectKeyInput"></a>

```java
public java.lang.String getObjectKeyInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `objectKey`<sup>Required</sup> <a name="objectKey" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.objectKey"></a>

```java
public java.lang.String getObjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|MacieAllowListCriteriaS3WordsListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListCriteriaS3WordsListStruct">MacieAllowListCriteriaS3WordsListStruct</a>

---


### MacieAllowListTagsList <a name="MacieAllowListTagsList" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowListTagsList;

new MacieAllowListTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.get"></a>

```java
public MacieAllowListTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags">MacieAllowListTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MacieAllowListTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags">MacieAllowListTags</a>>

---


### MacieAllowListTagsOutputReference <a name="MacieAllowListTagsOutputReference" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_allow_list.MacieAllowListTagsOutputReference;

new MacieAllowListTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags">MacieAllowListTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.macieAllowList.MacieAllowListTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MacieAllowListTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieAllowList.MacieAllowListTags">MacieAllowListTags</a>

---



