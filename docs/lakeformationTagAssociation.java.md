# `lakeformationTagAssociation` Submodule <a name="`lakeformationTagAssociation` Submodule" id="@cdktn/provider-awscc.lakeformationTagAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationTagAssociation <a name="LakeformationTagAssociation" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association awscc_lakeformation_tag_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociation;

LakeformationTagAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .lfTags(IResolvable|java.util.List<LakeformationTagAssociationLfTags>)
    .resource(LakeformationTagAssociationResource)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.lfTags">lfTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>></code> | List of Lake Formation Tags to associate with the Lake Formation Resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | Resource to tag with the Lake Formation Tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `lfTags`<sup>Required</sup> <a name="lfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.lfTags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>>

List of Lake Formation Tags to associate with the Lake Formation Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#lf_tags LakeformationTagAssociation#lf_tags}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.resource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

Resource to tag with the Lake Formation Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#resource LakeformationTagAssociation#resource}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putLfTags">putLfTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource">putResource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLfTags` <a name="putLfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putLfTags"></a>

```java
public void putLfTags(IResolvable|java.util.List<LakeformationTagAssociationLfTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putLfTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>>

---

##### `putResource` <a name="putResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource"></a>

```java
public void putResource(LakeformationTagAssociationResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LakeformationTagAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociation;

LakeformationTagAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociation;

LakeformationTagAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociation;

LakeformationTagAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociation;

LakeformationTagAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LakeformationTagAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LakeformationTagAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LakeformationTagAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LakeformationTagAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationTagAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTags">lfTags</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList">LakeformationTagAssociationLfTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference">LakeformationTagAssociationResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tagsIdentifier">tagsIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTagsInput">lfTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceInput">resourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lfTags`<sup>Required</sup> <a name="lfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTags"></a>

```java
public LakeformationTagAssociationLfTagsList getLfTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList">LakeformationTagAssociationLfTagsList</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resource"></a>

```java
public LakeformationTagAssociationResourceOutputReference getResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference">LakeformationTagAssociationResourceOutputReference</a>

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceIdentifier"></a>

```java
public java.lang.String getResourceIdentifier();
```

- *Type:* java.lang.String

---

##### `tagsIdentifier`<sup>Required</sup> <a name="tagsIdentifier" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tagsIdentifier"></a>

```java
public java.lang.String getTagsIdentifier();
```

- *Type:* java.lang.String

---

##### `lfTagsInput`<sup>Optional</sup> <a name="lfTagsInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTagsInput"></a>

```java
public IResolvable|java.util.List<LakeformationTagAssociationLfTags> getLfTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceInput"></a>

```java
public IResolvable|LakeformationTagAssociationResource getResourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationTagAssociationConfig <a name="LakeformationTagAssociationConfig" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociationConfig;

LakeformationTagAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .lfTags(IResolvable|java.util.List<LakeformationTagAssociationLfTags>)
    .resource(LakeformationTagAssociationResource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lfTags">lfTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>></code> | List of Lake Formation Tags to associate with the Lake Formation Resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | Resource to tag with the Lake Formation Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `lfTags`<sup>Required</sup> <a name="lfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lfTags"></a>

```java
public IResolvable|java.util.List<LakeformationTagAssociationLfTags> getLfTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>>

List of Lake Formation Tags to associate with the Lake Formation Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#lf_tags LakeformationTagAssociation#lf_tags}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.resource"></a>

```java
public LakeformationTagAssociationResource getResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

Resource to tag with the Lake Formation Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#resource LakeformationTagAssociation#resource}

---

### LakeformationTagAssociationLfTags <a name="LakeformationTagAssociationLfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociationLfTags;

LakeformationTagAssociationLfTags.builder()
    .catalogId(java.lang.String)
    .tagKey(java.lang.String)
    .tagValues(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#tag_key LakeformationTagAssociation#tag_key}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagValues">tagValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#tag_values LakeformationTagAssociation#tag_values}. |

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#tag_key LakeformationTagAssociation#tag_key}.

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagValues"></a>

```java
public java.util.List<java.lang.String> getTagValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#tag_values LakeformationTagAssociation#tag_values}.

---

### LakeformationTagAssociationResource <a name="LakeformationTagAssociationResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociationResource;

LakeformationTagAssociationResource.builder()
//  .catalog(java.lang.String)
//  .database(LakeformationTagAssociationResourceDatabase)
//  .table(LakeformationTagAssociationResourceTable)
//  .tableWithColumns(LakeformationTagAssociationResourceTableWithColumns)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#catalog LakeformationTagAssociation#catalog}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#database LakeformationTagAssociation#database}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#table LakeformationTagAssociation#table}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#table_with_columns LakeformationTagAssociation#table_with_columns}. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#catalog LakeformationTagAssociation#catalog}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.database"></a>

```java
public LakeformationTagAssociationResourceDatabase getDatabase();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#database LakeformationTagAssociation#database}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.table"></a>

```java
public LakeformationTagAssociationResourceTable getTable();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#table LakeformationTagAssociation#table}.

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.tableWithColumns"></a>

```java
public LakeformationTagAssociationResourceTableWithColumns getTableWithColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#table_with_columns LakeformationTagAssociation#table_with_columns}.

---

### LakeformationTagAssociationResourceDatabase <a name="LakeformationTagAssociationResourceDatabase" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociationResourceDatabase;

LakeformationTagAssociationResourceDatabase.builder()
//  .catalogId(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

### LakeformationTagAssociationResourceTable <a name="LakeformationTagAssociationResourceTable" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociationResourceTable;

LakeformationTagAssociationResourceTable.builder()
//  .catalogId(java.lang.String)
//  .databaseName(java.lang.String)
//  .name(java.lang.String)
//  .tableWildcard(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.tableWildcard">tableWildcard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#table_wildcard LakeformationTagAssociation#table_wildcard}. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

##### `tableWildcard`<sup>Optional</sup> <a name="tableWildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.tableWildcard"></a>

```java
public java.lang.String getTableWildcard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#table_wildcard LakeformationTagAssociation#table_wildcard}.

---

### LakeformationTagAssociationResourceTableWithColumns <a name="LakeformationTagAssociationResourceTableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociationResourceTableWithColumns;

LakeformationTagAssociationResourceTableWithColumns.builder()
//  .catalogId(java.lang.String)
//  .columnNames(java.util.List<java.lang.String>)
//  .databaseName(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#column_names LakeformationTagAssociation#column_names}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#column_names LakeformationTagAssociation#column_names}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationTagAssociationLfTagsList <a name="LakeformationTagAssociationLfTagsList" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociationLfTagsList;

new LakeformationTagAssociationLfTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.get"></a>

```java
public LakeformationTagAssociationLfTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LakeformationTagAssociationLfTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>>

---


### LakeformationTagAssociationLfTagsOutputReference <a name="LakeformationTagAssociationLfTagsOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociationLfTagsOutputReference;

new LakeformationTagAssociationLfTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValues">tagValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValuesInput"></a>

```java
public java.util.List<java.lang.String> getTagValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValues"></a>

```java
public java.util.List<java.lang.String> getTagValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LakeformationTagAssociationLfTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>

---


### LakeformationTagAssociationResourceDatabaseOutputReference <a name="LakeformationTagAssociationResourceDatabaseOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociationResourceDatabaseOutputReference;

new LakeformationTagAssociationResourceDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.internalValue"></a>

```java
public IResolvable|LakeformationTagAssociationResourceDatabase getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

---


### LakeformationTagAssociationResourceOutputReference <a name="LakeformationTagAssociationResourceOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociationResourceOutputReference;

new LakeformationTagAssociationResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns">putTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTableWithColumns">resetTableWithColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabase` <a name="putDatabase" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase"></a>

```java
public void putDatabase(LakeformationTagAssociationResourceDatabase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

---

##### `putTable` <a name="putTable" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable"></a>

```java
public void putTable(LakeformationTagAssociationResourceTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

---

##### `putTableWithColumns` <a name="putTableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns"></a>

```java
public void putTableWithColumns(LakeformationTagAssociationResourceTableWithColumns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetTable` <a name="resetTable" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTable"></a>

```java
public void resetTable()
```

##### `resetTableWithColumns` <a name="resetTableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTableWithColumns"></a>

```java
public void resetTableWithColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference">LakeformationTagAssociationResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference">LakeformationTagAssociationResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference">LakeformationTagAssociationResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.databaseInput">databaseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableInput">tableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumnsInput">tableWithColumnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.database"></a>

```java
public LakeformationTagAssociationResourceDatabaseOutputReference getDatabase();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference">LakeformationTagAssociationResourceDatabaseOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.table"></a>

```java
public LakeformationTagAssociationResourceTableOutputReference getTable();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference">LakeformationTagAssociationResourceTableOutputReference</a>

---

##### `tableWithColumns`<sup>Required</sup> <a name="tableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumns"></a>

```java
public LakeformationTagAssociationResourceTableWithColumnsOutputReference getTableWithColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference">LakeformationTagAssociationResourceTableWithColumnsOutputReference</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.databaseInput"></a>

```java
public IResolvable|LakeformationTagAssociationResourceDatabase getDatabaseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableInput"></a>

```java
public IResolvable|LakeformationTagAssociationResourceTable getTableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

---

##### `tableWithColumnsInput`<sup>Optional</sup> <a name="tableWithColumnsInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumnsInput"></a>

```java
public IResolvable|LakeformationTagAssociationResourceTableWithColumns getTableWithColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.internalValue"></a>

```java
public IResolvable|LakeformationTagAssociationResource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

---


### LakeformationTagAssociationResourceTableOutputReference <a name="LakeformationTagAssociationResourceTableOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociationResourceTableOutputReference;

new LakeformationTagAssociationResourceTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetTableWildcard">resetTableWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTableWildcard` <a name="resetTableWildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetTableWildcard"></a>

```java
public void resetTableWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcardInput">tableWildcardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcard">tableWildcard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tableWildcardInput`<sup>Optional</sup> <a name="tableWildcardInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcardInput"></a>

```java
public java.lang.String getTableWildcardInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tableWildcard`<sup>Required</sup> <a name="tableWildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcard"></a>

```java
public java.lang.String getTableWildcard();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.internalValue"></a>

```java
public IResolvable|LakeformationTagAssociationResourceTable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

---


### LakeformationTagAssociationResourceTableWithColumnsOutputReference <a name="LakeformationTagAssociationResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lakeformation_tag_association.LakeformationTagAssociationResourceTableWithColumnsOutputReference;

new LakeformationTagAssociationResourceTableWithColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetColumnNames"></a>

```java
public void resetColumnNames()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNamesInput"></a>

```java
public java.util.List<java.lang.String> getColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|LakeformationTagAssociationResourceTableWithColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

---



